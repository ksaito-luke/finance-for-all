# Genspark「AI Image Agent」用プロンプト — 第1話（簿記3級 第1章）

方針：**1コマ＝1枚絵・文字なし**で生成（クレジット無制限のImage Agentを使う）。
コマ割りと吹き出しはサイトの漫画リーダーが担当するので、**セリフは描かせない**。

使い方：
1. 下の「キャラ参照」を先に生成し、**気に入った1枚をキャラ確定画像として保存**。以後は毎回それを参照添付。
2. 各コマのプロンプトを生成 → 画像を `manga/boki3/ep01/panel-01.webp …` で保存。
3. `content/manga.js` の該当パネルの `img: null` を保存先パスに置き換える（セリフはそのままオーバーレイ表示）。

共通の語尾（毎回つける）：
`full color anime/manga illustration, clean lineart, soft cel shading, bright theme-park palette, expressive eyes, NO TEXT, no speech bubble text, leave empty space for a speech bubble, single panel`

---

## キャラ参照（最初に1枚ずつ確定させる）
- **さくら**：`character reference sheet, a cheerful 22yo Japanese woman, fluffy wavy chin-length bob in warm orange-brown hair, large amber eyes, slim small build, turquoise theme-park staff jacket with a small star emblem over a white T-shirt, staff name tag, front view, plain background, full color anime style`
- **蓮（先輩）**：`character reference, calm 28yo Japanese man, neat short black hair, thin silver-framed glasses, light blue dress shirt, gentle smile, tall slim, plain background, full color anime style`
- **楽（ムードメーカー）**：`character reference, energetic 25yo Japanese man, spiky brown hair, big grin, colorful patchwork theme-park crew uniform (red yellow blue green), dynamic pose, plain background, full color anime style`
- **ケイタ（電卓マスコット）**：`character reference, a cute mascot shaped like a walking calculator, rounded body with number buttons, simple smiling face, tiny staff cap, chibi, plain background, full color anime style`

---

## 各コマのプロンプト（※参照画像を添付して生成）

**panel-01（16:9）** 開園初日の朝・ゲート前
`Sakura standing in front of a grand theme-park entrance gate at bright morning, determined cheerful pose, Gaku waving energetically in the background, wide shot, [共通の語尾]`

**panel-02（4:3）** モニターに売上が増えていく
`Sakura in an office, eyes wide with surprise, looking at a big monitor showing rising sales numbers, medium shot, [共通の語尾]`

**panel-03（4:3）** ノート前で固まる
`Sakura sitting at a desk holding a pen, frozen and troubled with a sweat drop, an open notebook in front of her, medium shot, [共通の語尾]`

**panel-04（4:3）** ケイタ登場・驚き
`Keita the calculator mascot popping up on the desk with a cheerful pose, Sakura leaning back startled, comedic, medium shot, [共通の語尾]`

**panel-05（16:9）** ケイタが借方/貸方の札でドヤ顔
`Keita the calculator mascot holding two signs (left and right), proud confident pose, on a desk, simple office background, [共通の語尾]`

**panel-06（4:3）** 蓮登場
`Ren adjusting his glasses with a calm gentle smile, entering the office, medium shot, [共通の語尾]`

**panel-07（16:9）** ホワイトボードのT字勘定アップ
`close-up of a whiteboard with a hand-drawn T-account, left column and right column clearly divided, a hand holding a marker, clean, [共通の語尾]`  ※左右の中の数字「現金1,000 / 売上1,000」は後から文字オーバーレイ可

**panel-08（4:3）** ケイタ知ったかぶり×さくらジト目
`Keita the mascot striking a know-it-all pose, Sakura beside him with half-lidded skeptical eyes, comedic, medium shot, [共通の語尾]`

**panel-09（16:9）** 楽がドタバタ乱入
`Gaku bursting into the office in a panic waving his arms, Sakura and Ren reacting with surprise, lively comedic scene, wide shot, [共通の語尾]`

**panel-10（4:3）** さくら書けて笑顔
`Sakura smiling brightly with a sense of accomplishment, pointing at her notebook, medium shot, [共通の語尾]`

**panel-11（16:9）** 引き・きらめき
`Sakura clenching her fist with sparkling determined eyes, bright uplifting background, Keita and Gaku smiling beside her, group shot, [共通の語尾]`

---

## メモ
- 複数キャラのコマ（01, 09, 11）は崩れやすい。数回生成して良いものを選ぶ。難しければ単体生成して構図を選ぶ。
- 生成画像に文字が入ってしまったら、その回は破棄して再生成（「NO TEXT」を強調）。
- 仕上がりトーンが決まったら、第2〜4話分も同形式で用意します。
