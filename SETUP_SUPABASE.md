# ログイン & データベース セットアップ手順（Supabase）

このアプリは、`content/config.js` に Supabase の接続情報を入れると、
**ログイン・新規登録・学習データの保存**が有効になります。
未設定のままでもサイトは「ローカルモード」で動作します（保存は行われません）。

所要時間：約10分。コーディングは不要です。

---

## ステップ1: Supabase プロジェクトを作成
1. https://supabase.com にアクセスし、GitHubアカウント等でサインイン
2. 「**New project**」をクリック
3. 入力：
   - **Name**: `finance-for-all`（任意）
   - **Database Password**: 任意の強いパスワード（控えておく）
   - **Region**: `Northeast Asia (Tokyo)` を推奨
4. 「**Create new project**」→ 1〜2分で構築完了

## ステップ2: テーブルを作成（SQLを実行）
1. 左メニュー「**SQL Editor**」→「**New query**」
2. このリポジトリの [`supabase/schema.sql`](supabase/schema.sql) の中身を全部コピーして貼り付け
3. 「**Run**」を実行 → テーブルとセキュリティ設定が一括作成されます

## ステップ3: 接続情報をアプリに設定
1. 左メニュー「**Project Settings**（歯車）」→「**API**」
2. 次の2つをコピー：
   - **Project URL**（例 `https://abcd.supabase.co`）
   - **anon public** key（`eyJ...` で始まる長い文字列）
3. このリポジトリの [`content/config.js`](content/config.js) を開き、2か所に貼り付け：
   ```js
   window.APP_CONFIG = {
     SUPABASE_URL: 'https://abcd.supabase.co',
     SUPABASE_ANON_KEY: 'eyJ...（anon public key）'
   };
   ```
4. 保存して `git push` → Vercelが再デプロイ → ログインが有効化されます

> anon public key はブラウザに公開して問題ない鍵です（行レベルセキュリティで各ユーザーは自分のデータのみアクセス可）。
> **service_role キーは絶対に config.js に入れないでください**（全データにアクセスできる管理者鍵です）。

## ステップ4（任意）: メール認証とGoogleログインの設定
- **メール確認**: Authentication → Providers → Email。開発中は「Confirm email」をオフにすると確認メール無しで即ログインできます（本番ではオン推奨）。
- **Googleログイン**: Authentication → Providers → Google を有効化し、Google Cloud の OAuth クライアントID/シークレットを設定。「Authorized redirect URI」には Supabase が表示するコールバックURLを登録します。
- **サイトURL**: Authentication → URL Configuration の「Site URL」に `https://finance-for-all.vercel.app` を設定（リダイレクト先になります）。

---

## いま保存されるデータ
ログイン中のユーザーについて、以下が自動保存されます（テーブルは `supabase/schema.sql` 参照）：
- **問題・模試の解答結果**（正答率・所要時間など）… `quiz_attempts`
- **学習計画**（受験日・プランタイプ）… `study_plans`

今後、単元の完了状況や学習カレンダーの実データ化（`unit_progress` / `study_log`）も
このスキーマ上に追加していけます。

## 動作確認
1. 設定後のサイトでログイン画面からメール登録（またはGoogle）
2. ログインすると右上アバターが名前のイニシャルに変わります
3. 問題を解く → Supabase の Table Editor で `quiz_attempts` に行が増えていればOK
