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
  SUPABASE_URL: 'https://ptruuwldcikccfjxeotb.supabase.co',
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0cnV1d2xkY2lrY2Nmanhlb3RiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4OTY5NTgsImV4cCI6MjA5NzQ3Mjk1OH0.Dok9Ufnuma439ruVq0MSDP4y07bylswr0X2MrDNNMyw'
};
