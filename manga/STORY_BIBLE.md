# Finance for All 漫画 — ストーリー設定書（Story Bible）

学習の動機づけを物語で支える公式漫画の設定。AI作画（NijiJourney / Stable Diffusion+LoRA）で
**キャラの一貫性**を保つための「正典」。新しい話を描くときは必ずこの設定に従う。

## 世界観
国内の中規模テーマパーク **「ハーバーランド」** を運営する会社が舞台。
主人公が経営管理部に新卒配属され、運営の現場を通して
**簿記 → 英語 → FP&A → USCMA** と段階的に「数字とビジネスの力」を身につけていく成長譚。

## 主要キャラクター（AI作画用の固定設定）
作画プロンプトでは、毎回この英語ディスクリプタをそのままコピーして一貫性を保つ。

### 月島さくら（つきしま さくら） — 主人公 / 22歳 / 新卒
- 性格：明るく前向き、数字は苦手だが負けず嫌い。読者の分身。
- 外見固定：
  `Sakura: 22yo Japanese woman, short brown bob hair, large bright eyes, small build, navy vest uniform over white shirt with mint-green ribbon, name tag, cheerful expression`
- 役割：つまずき役。読者と同じ目線で「分からない」を代弁する。

### 財前蓮（ざいぜん れん） — 先輩 / 28歳 / 経営管理
- 性格：冷静で面倒見が良い。比喩がうまく、優しく教える。
- 外見固定：
  `Ren: 28yo Japanese man, black hair neatly parted, thin-framed glasses, dark business suit, calm gentle smile, tall`
- 役割：解説役。各回で核心を一言で言語化する。

### 鶴見部長（つるみ） — 経営管理部長 / 50歳
- 性格：豪快だが鋭い。FP&Aや経営判断の場面で登場。
- 外見固定：
  `Bucho Tsurumi: 50yo Japanese man, broad build, short gray hair, mustache, rolled-up sleeves, confident`

## アートスタイル（共通プロンプト断片）
`clean modern Japanese manga style, black and white with screentone, single mint-green (#5DCAA5) accent color, expressive eyes, clear paneling, soft shading, professional comic, high detail`
- 縦スクロール（ウェブトゥーン）前提でコマを縦に積めるよう構図する。
- 吹き出しの文字は**後から写植/HTMLオーバーレイ**する想定で、AI生成時はセリフ無し（空の吹き出し or 余白）を基本にする。

## エピソード構成（学習アークと対応）
| 話 | 対応コース | 舞台/きっかけ | 学ぶ核心 |
|---|---|---|---|
| 第1話 | 簿記3級 | チケット売上をどう記録？ | 仕訳（借方・貸方）との出会い |
| 第2話 | 簿記2級 | グッズショップの原価・在庫 | 工業簿記・原価計算 |
| 第3話 | FP&A検定 | 新アトラクションへの投資判断 | 予測・計画・投資評価 |
| 第4話 | TOEIC800 | 海外ゲスト・海外パーク連携 | ビジネス英語の壁 |
| 第5話 | USCMA | 経営会議で意思決定を任される | グローバル財務・管理会計の統合 |

各話はさらに「章の冒頭ミニエピソード」に分割し、`content/lessons.js` の各章先頭に挿入する。

## 制作フロー（AI作画ルート）
1. 本設定書をもとに、各章の **ネーム**（`manga/episode-XX.md`）を作成（私＝メイン/各コンテンツ役）。
2. ネームのコマごとの英語プロンプトを NijiJourney / SD に投入して作画。キャラ記述は上の固定文をコピー。
3. 必要に応じ CLIP STUDIO PAINT で写植・トーン・修正。
4. 画像を `manga/<course>/<episode>/panel-XX.webp` として保存。
5. サイトの漫画リーダーに manifest（JSON）で流し込む（frontend-uiux 担当）。

## ルール
- 著作権：既存作品の絵柄・キャラの模倣やトレースは禁止。本設定のオリジナルキャラのみ。
- 表現：誰もが安心して読めるトーン。差別・過度な煽りは避ける。
- 学習との整合：物語の山場＝その章で学ぶ論点、になるよう設計する。
