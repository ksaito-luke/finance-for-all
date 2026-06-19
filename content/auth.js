/*
 * Finance for All — 認証 & データ層（Supabase ラッパー）
 * --------------------------------------------------
 * window.APP_CONFIG に Supabase の URL / anon key が設定されていれば
 * Supabase に接続します。未設定なら「ローカルモード」として静かに無効化し、
 * サイトは従来どおり閲覧できます（保存系は no-op）。
 *
 * 公開API（window.AUTH）:
 *   AUTH.enabled()                      … Supトリ接続が有効か
 *   AUTH.user                           … 現在のユーザー（未ログインは null）
 *   AUTH.onChange(fn)                   … ログイン状態変化時に呼ばれる
 *   AUTH.signUp(email, pw, name)        … 新規登録
 *   AUTH.signIn(email, pw)              … ログイン
 *   AUTH.signInWithGoogle()             … Googleログイン
 *   AUTH.signOut()                      … ログアウト
 *   AUTH.saveQuizAttempt(payload)       … 解答結果を保存
 *   AUTH.saveStudyPlan(payload)         … 学習計画を保存
 *   AUTH.setUnitDone(courseId, unitId)  … 単元を完了に
 */
window.AUTH = (function () {
  'use strict';
  var sb = null;
  var listeners = [];
  var api = {
    user: null,
    enabled: function () { return !!sb; },
    onChange: function (fn) { listeners.push(fn); fn(api.user); }
  };

  function emit() { listeners.forEach(function (fn) { try { fn(api.user); } catch (e) {} }); }
  function need() { if (!sb) { console.info('[auth] Supabase未設定のため保存をスキップしました'); return false; } return true; }

  api.signUp = async function (email, pw, name) {
    if (!need()) return { error: { message: 'Supabaseが未設定です（content/config.js）' } };
    return await sb.auth.signUp({ email: email, password: pw, options: { data: { display_name: name || '' } } });
  };
  api.signIn = async function (email, pw) {
    if (!need()) return { error: { message: 'Supabaseが未設定です（content/config.js）' } };
    return await sb.auth.signInWithPassword({ email: email, password: pw });
  };
  api.signInWithGoogle = async function () {
    if (!need()) return { error: { message: 'Supabaseが未設定です' } };
    return await sb.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: window.location.origin } });
  };
  api.signOut = async function () { if (sb) { await sb.auth.signOut(); } };

  api.saveQuizAttempt = async function (p) {
    if (!need() || !api.user) return;
    await sb.from('quiz_attempts').insert({
      user_id: api.user.id, bank_id: p.bankId, title: p.title,
      score: p.score, correct: p.correct, total: p.total, elapsed_sec: p.elapsed
    });
  };
  api.saveStudyPlan = async function (p) {
    if (!need() || !api.user) return;
    await sb.from('study_plans').upsert({
      user_id: api.user.id, course_id: p.courseId, exam_date: p.examDate, plan_type: p.planType
    }, { onConflict: 'user_id,course_id' });
  };
  api.setUnitDone = async function (courseId, unitId) {
    if (!need() || !api.user) return;
    await sb.from('unit_progress').upsert({
      user_id: api.user.id, course_id: courseId, unit_id: unitId, status: 'done', updated_at: new Date().toISOString()
    }, { onConflict: 'user_id,course_id,unit_id' });
  };

  (async function init() {
    var cfg = window.APP_CONFIG || {};
    if (!cfg.SUPABASE_URL || !cfg.SUPABASE_ANON_KEY) {
      console.info('[auth] ローカルモード（Supabase未設定）');
      emit();
      return;
    }
    try {
      var mod = await import('https://esm.sh/@supabase/supabase-js@2');
      sb = mod.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY);
      var res = await sb.auth.getSession();
      api.user = res.data.session ? res.data.session.user : null;
      emit();
      sb.auth.onAuthStateChange(function (_evt, session) {
        api.user = session ? session.user : null;
        emit();
      });
    } catch (e) {
      console.warn('[auth] Supabase初期化に失敗:', e);
      sb = null; emit();
    }
  })();

  return api;
})();
