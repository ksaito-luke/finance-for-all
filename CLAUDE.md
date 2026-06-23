# Finance for All — プロジェクト定義書

「誰もが、ファイナンスを学べる場所」を目指す無料 e-learning。
運営：Encouragebank合同会社（代表社員 齋藤健司 / k.saito@encouragebank.com）

## ビジョンと学習ロードマップ
職種を問わず数字で価値を生む力を届ける。推奨学習順序：
**簿記3級 → 簿記2級 → FP&A検定**（日本語で財務の基礎）→ **TOEIC 800点**（英語力）→ **USCMA**（仕上げの国際資格）

## 技術スタック / 構成
- 完全静的サイト（ビルド不要）。`index.html` 1ファイル＋ `content/*.js`。
- ホスティング：Vercel（`git push` で自動デプロイ）。本番 https://finance-for-all.vercel.app/
- 認証・DB：Supabase（クライアントJSのみ。RLSで本人データのみアクセス可）。
- スキーマは `supabase/schema.sql`。設定は `content/config.js`（anon keyのみ）。

## ファイルマップ
- `index.html` … UI・画面ロジック・SPA遷移・認証ゲート・採点エンジン・カレンダー
- `content/config.js` … Supabase接続情報
- `content/auth.js` … 認証＋データ層（signIn/Up・進捗・学習ログ・解答結果）
- `content/courses.js` … コース定義（概要/ロードマップ/章→単元/章ごとの確認問題/模試）★単一の真実
- `content/lessons.js` … 講義スライド（`'courseId/unitId'` → スライド配列、図解SVG）
- `content/questions.js` … 問題バンク（`bank` 単位の問題配列）
- `content/generate.js` … 簿記3級 仕訳ドリルの自動生成（約1000問）
- `CONTENT_GUIDE.md` … コンテンツ追加マニュアル（必読）
- `SETUP_SUPABASE.md` … バックエンド構築手順

## データの紐付けルール（重要）
**章（chapter）が学習単元と確認問題を束ねる**。
- `courses.js` の各 chapter は `units:[...]`（学習）と `quiz:'バンクID'`（確認問題）を持つ。
- 学習スライドは `lessons.js['courseId/unitId']`、確認問題は `questions.js[バンクID]`。
- 「第N章を学ぶ→第N章の問題を解く」が内容的に一致すること。

## コーディング規約
- 既存のスタイル・命名・トーンに合わせる。ブランド色：濃緑 #04342C / ミント #5DCAA5、補助 青#185FA5・緑#0F6E56・橙#BA7517/#D85A30・紫#534AB7・コーラル#993C1D。
- コンテンツ追加は原則 `content/*.js` のみ編集（`index.html` のロジックは触らない）。
- 著作権：外部教材・問題の転載禁止。すべてオリジナルで作成。
- コミットは日本語要約＋ `Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>`。push で本番反映。

## 役割分担（サブエージェント）
定義は `.claude/agents/` 配下。メイン（PM）が全体統括し、必要に応じて各役へ委譲する。
- **メイン/PM**：次の一手の提案・進捗管理・最終品質責任（オーケストレーター）
- **frontend-uiux**：UI/UX・フロント実装（BeckerのUIを参考に作り込む）
- **backend-data**：Supabase・DB設計・信頼性
- **content-bookkeeping**：簿記2/3級の講義・問題・模試
- **content-english**：TOEIC800の講義・問題・模試
- **content-fpa**：FP&A検定の講義・問題・模試
- **content-cma**：USCMAの講義・問題・模試
- **content-qa**：内容の正確性と章↔学習↔問題の整合をレビュー

## 現状サマリ（随時更新）
- 簿記3級：第1〜4章の図解講義（14単元）＋章ごとの確認問題＋仕訳ドリル約1000問。最も充実。
- 簿記2級/FP&A/TOEIC/USCMA：骨格（章・概要・サンプル問題）あり。内容の作り込みは今後。
- 認証・ログイン必須化・マイページ/カレンダー実データ・単元進捗保存・規約/プライバシー/パスワード再設定：実装済み。
- 次の主要テーマ：各コンテンツの量と質の引き上げ（QA含む）。
