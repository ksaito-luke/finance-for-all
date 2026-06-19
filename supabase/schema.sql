-- Finance for All — データベーススキーマ
-- Supabase の SQL Editor に貼り付けて実行してください。
-- 各テーブルは行レベルセキュリティ(RLS)で「本人のデータのみ」アクセス可能にしています。

-- ============================================================
-- 1. プロフィール（auth.users と 1:1）
-- ============================================================
create table if not exists public.profiles (
  id           uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  created_at   timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "本人のプロフィールを参照" on public.profiles
  for select using (auth.uid() = id);
create policy "本人のプロフィールを更新" on public.profiles
  for update using (auth.uid() = id);
create policy "本人のプロフィールを作成" on public.profiles
  for insert with check (auth.uid() = id);

-- サインアップ時に自動でプロフィールを作成
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email, '@', 1)));
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ============================================================
-- 2. 受講登録（どのコースを受講中か）
-- ============================================================
create table if not exists public.enrollments (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users(id) on delete cascade,
  course_id  text not null,
  created_at timestamptz not null default now(),
  unique (user_id, course_id)
);

alter table public.enrollments enable row level security;
create policy "本人の受講登録のみ" on public.enrollments
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- ============================================================
-- 3. 単元の進捗（学習編の各ユニット）
-- ============================================================
create table if not exists public.unit_progress (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users(id) on delete cascade,
  course_id  text not null,
  unit_id    text not null,
  status     text not null default 'active',   -- 'active' | 'done'
  updated_at timestamptz not null default now(),
  unique (user_id, course_id, unit_id)
);

alter table public.unit_progress enable row level security;
create policy "本人の単元進捗のみ" on public.unit_progress
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- ============================================================
-- 4. 問題・模試の解答結果
-- ============================================================
create table if not exists public.quiz_attempts (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  bank_id     text not null,            -- 例: 'boki3_ch1' / 'boki3_drill'
  title       text,
  score       int  not null,            -- 0〜100（正答率）
  correct     int  not null,
  total       int  not null,
  elapsed_sec int  not null,
  created_at  timestamptz not null default now()
);

alter table public.quiz_attempts enable row level security;
create policy "本人の解答結果のみ" on public.quiz_attempts
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- ============================================================
-- 5. 学習ログ（カレンダー用：日付ごとの学習分数）
-- ============================================================
create table if not exists public.study_log (
  id        uuid primary key default gen_random_uuid(),
  user_id   uuid not null references auth.users(id) on delete cascade,
  log_date  date not null,
  minutes   int  not null default 0,
  intensity text default 'studied',     -- 'studied' | 'intense'
  unique (user_id, log_date)
);

alter table public.study_log enable row level security;
create policy "本人の学習ログのみ" on public.study_log
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- ============================================================
-- 6. 学習計画（受験日・プランタイプ）
-- ============================================================
create table if not exists public.study_plans (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users(id) on delete cascade,
  course_id  text not null,
  exam_date  date,
  plan_type  text,                       -- 'cram' | 'steady' | 'early'
  created_at timestamptz not null default now(),
  unique (user_id, course_id)
);

alter table public.study_plans enable row level security;
create policy "本人の学習計画のみ" on public.study_plans
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
