# Finance for All 漫画 — ストーリー設定書（Story Bible）

学習の動機づけを物語で支える公式漫画の「正典」。AI作画（ComfyUI＋キャラLoRA / NijiJourney等）で
**キャラの一貫性**を保つための基準。新しい話を描くときは必ずこの設定に従う。

> 絵柄の到達目標：**フルカラーのアニメ／漫画イラスト**（Gensparkで作成した見本準拠）。
> 縦スクロール（ウェブトゥーン）でも見開きでも組めるよう構図する。

## 作品情報
- タイトル：**「ようこそ！バックヤード会計部」〜テーマパークで学ぶ簿記3級〜**（コースごとにサブタイトル可変）
- 舞台：テーマパーク **「ドリーム・ハーバー・パーク」** の運営会社、その裏方 **「バックヤード会計部」**。
- 主題：新卒の主人公が運営の現場を通して **簿記 → 英語 → FP&A → USCMA** と数字の力を身につける成長譚。

## 主要キャラクター（AI作画用・固定設定）
作画時は下の英語ディスクリプタをそのままコピーして一貫性を保つ。**フルカラー**前提。

### 月島さくら（つきしま さくら）— 主人公 / 22歳 / 新卒
- 性格：明るく前向き、数字は苦手だが負けず嫌い。読者の分身（つまずき役）。
- 固定ビジュアル：
  `Sakura: 22yo Japanese woman, fluffy wavy chin-length bob in warm orange-brown hair, large amber eyes, small slim build, turquoise theme-park staff jacket with a small star emblem over a white T-shirt, staff name tag, very expressive cheerful face, anime style`

### 財前蓮（ざいぜん れん）— 先輩 / 28歳 / 会計部の指導役
- 性格：冷静で面倒見が良い。比喩がうまく、やさしく核心を言語化する（解説役）。
- 固定ビジュアル：
  `Ren: 28yo Japanese man, neat short black hair, thin silver-framed glasses, light blue dress shirt, calm gentle smile, tall and slim, anime style`

### 日比野楽（ひびの がく）— ムードメーカー先輩 / 25歳 / ショー運営
- 性格：陽気で勢い担当。現場目線で物語にテンポを与える。
- 固定ビジュアル：
  `Gaku: 25yo Japanese man, spiky brown hair, energetic big grin, colorful patchwork theme-park crew uniform (red, yellow, blue, green panels), lively dynamic pose, anime style`

### ケイタ — 電卓のマスコット
- 役割：難しい用語をひと言で言い換える“相棒”。コメディ＆補足役。
- 固定ビジュアル：
  `Keita: a cute mascot shaped like a walking calculator, rounded body with number buttons on the belly, simple smiling face, tiny theme-park staff cap, chibi proportions, anime style`

### 鶴見部長（つるみ）— バックヤード会計部 部長 / 50歳
- 役割：FP&Aや経営判断の場面で登場する頼れる上司。
- 固定ビジュアル：
  `Bucho Tsurumi: 50yo Japanese man, broad build, short gray hair, mustache, rolled-up white shirt sleeves, confident expression, anime style`

## 共通アートスタイル（プロンプト断片）
全コマの末尾に付与：
`full color anime/manga illustration, clean lineart, soft cel shading, bright theme-park palette with turquoise and warm accents, expressive eyes, professional comic panel, high detail`
- **セリフは画像に描かせない**（文字化け回避）。生成時は**空の吹き出し or 余白**にして、文字は後工程（Web/Pillow）で乗せる＝修正・多言語化が容易。

## キャラLoRA用 三面図（ターンアラウンド）プロンプト
LoRA学習データを作るため、各キャラで「同一衣装・無地背景・全身」の参照画像を量産→選別する。

### さくら（例。他キャラも同形式で）
1. 正面：`Sakura [固定ビジュアル], full body, T-pose neutral, front view, plain light gray background, character reference sheet, full color, clean lineart`
2. 横：`...full body, side profile view, plain light gray background...`
3. 後ろ：`...full body, back view, plain light gray background...`
4. 表情集：`Sakura [固定ビジュアル], expression sheet, happy / surprised / troubled / determined, plain background, full color`
- これらを10〜20枚生成→破綻のない良品を選別→LoRA学習に投入（手順は COMFYUI_SETUP.md）。
- 同様に 蓮・楽・ケイタ・部長 のシートも作る（最低でも さくら＋蓮＋楽 の3体）。

## 候補モデル（チェックポイント）※商用ライセンス要確認
フルカラー・アニメ漫画系で評価が高い系統（Civitai / Hugging Face で入手）：
- **Illustrious-XL 系**（高品質・キャラ表現に強い）
- **Pony Diffusion XL 系**（指示追従・ポーズに強い）
- **Animagine XL 4.0**（アニメ全般・安定）
- **NoobAI-XL 系**（最新・表現幅）
補助：IP-Adapter（顔寄せ）、ControlNet（ポーズ/構図）、漫画線画用LoRA。
> いずれも**ライセンス（商用可否・クレジット要否）を必ず確認**して採用する。

## エピソード構成（学習アークと対応）
| 話 | 対応コース | 舞台/きっかけ | 学ぶ核心 |
|---|---|---|---|
| 第1話 | 簿記3級 | バックヤード会計部に臨時配属／チケット売上の記録 | 仕訳（借方・貸方） |
| 第2話 | 簿記2級 | グッズショップの原価・在庫 | 工業簿記・原価計算 |
| 第3話 | FP&A検定 | 新アトラクションへの投資判断 | 予測・計画・投資評価 |
| 第4話 | TOEIC800 | 海外ゲスト・海外パーク連携 | ビジネス英語の壁 |
| 第5話 | USCMA | 経営会議で意思決定を任される | グローバル財務・管理会計の統合 |

各話はさらに「章の冒頭ミニエピソード」に分割し、`content/lessons.js` の各章先頭に挿入する。

## ルール
- 著作権：既存作品の絵柄・キャラの模倣やトレースは禁止。本設定のオリジナルキャラのみ。実在テーマパークの固有要素は使わない。
- 表現：誰もが安心して読めるトーン。差別・過度な煽りは避ける。
- 学習との整合：物語の山場＝その章で学ぶ論点、になるよう設計する。
