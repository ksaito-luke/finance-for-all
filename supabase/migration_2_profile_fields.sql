-- 既存DBへの追加マイグレーション：プロフィールに「大学/企業名」「学部/所属部署名」を追加
-- 既にテーブルを作成済みの場合は、これだけ SQL Editor で実行すればOK（再実行しても安全）。

alter table public.profiles add column if not exists organization text;  -- 大学 / 企業名
alter table public.profiles add column if not exists department   text;  -- 学部 / 所属部署名

-- サインアップ時の自動プロフィール作成に、新しい2項目を反映
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, display_name, organization, department)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email, '@', 1)),
    new.raw_user_meta_data->>'organization',
    new.raw_user_meta_data->>'department'
  );
  return new;
end;
$$;
