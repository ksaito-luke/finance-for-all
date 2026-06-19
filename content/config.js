/*
 * Finance for All — アプリ設定
 * --------------------------------------------------
 * Supabase の接続情報をここに入れると、ログイン＆データ保存が有効になります。
 * （未設定のままでも、サイトはローカルモードで動作します）
 *
 * 設定手順は SETUP_SUPABASE.md を参照してください。
 *   1. https://supabase.com でプロジェクトを作成
 *   2. Project Settings → API から URL と anon public key をコピー
 *   3. 下の2つの値を貼り付ける
 *
 * ※ anon public key はブラウザに公開して問題ない鍵です（RLSで保護）。
 *    service_role キーは絶対にここに置かないでください。
 */
window.APP_CONFIG = {
  SUPABASE_URL: '',        // 例: 'https://abcdefgh.supabase.co'
  SUPABASE_ANON_KEY: ''    // 例: 'eyJhbGciOiJIniIsInR5cCI6...'
};
