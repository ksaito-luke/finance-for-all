# 第1話「はじめての数字」— 簿記3級 第1章 導入ネーム

対応：`content/lessons.js['boki3/1-1']` の冒頭に挿入する想定。
各コマに【構図】【セリフ/ナレーション】【AI作画プロンプト（英語）】を記載。
プロンプトは STORY_BIBLE.md のキャラ固定文＋スタイル断片を必ず含める。

共通スタイル（全コマ末尾に付与）：
`full color anime/manga illustration, clean lineart, soft cel shading, bright theme-park palette with turquoise and warm accents, expressive eyes, professional comic panel, empty speech bubbles (text added later)`

---

## コマ1 — 入社、見上げるゲート
- 【構図】テーマパークの大ゲートを見上げる さくら の後ろ姿〜横顔。朝の光。期待。
- 【セリフ】さくら「ハーバーランド、今日から私の職場！」
- 【ナレーション】テーマパーク運営会社に新卒入社した 月島さくら。
- 【AI】`Sakura (22yo Japanese woman, short brown bob hair, large bright eyes, small build, navy vest uniform over white shirt with mint-green ribbon, name tag) standing before a grand theme park entrance gate at morning, seen from behind looking up, hopeful, wide shot, [共通スタイル]`

## コマ2 — 配属はまさかの経営管理部
- 【構図】オフィス。PC画面に売上ダッシュボード。きょとんとする さくら。
- 【セリフ】さくら「えっ、私アトラクション担当じゃなくて…経営管理部…？」
- 【AI】`Same Sakura in an office, looking confused at a computer screen showing sales numbers, tilted head, indoor, medium shot, [共通スタイル]`

## コマ3 — 衝撃の売上額
- 【構図】大きく見せるモニター「本日のチケット売上 ¥1,280,000」。さくらの驚き顔アップ。
- 【セリフ】さくら「い、一日でこんなに…！」
- 【AI】`Close-up of Sakura's surprised face beside a large monitor displaying big sales figures, dramatic, screentone emphasis lines, [共通スタイル]`

## コマ4 — 先輩登場
- 【構図】背後から穏やかに声をかける 財前。コーヒー片手。
- 【セリフ】財前「すごいだろ？ でも“いくら入ったか”だけじゃ会社は回らない」
- 【AI】`Ren (28yo Japanese man, black hair neatly parted, thin glasses, dark suit, calm gentle smile, tall) approaching from behind holding a coffee cup, speaking kindly, office, medium shot, [共通スタイル]`

## コマ5 — 簿記という技術
- 【構図】財前がホワイトボードに「借方／貸方」の縦線を引く。さくら身を乗り出す。
- 【セリフ】財前「お金が動いたら、原因と結果を“左と右”に分けて記録する。これが簿記だ」
- 【AI】`Ren drawing a vertical line dividing a whiteboard into left and right columns, Sakura leaning in curiously, office, two-shot, [共通スタイル]`

## コマ6 — はじめての仕訳
- 【構図】ホワイトボードのアップ。左「現金 1,280,000」／右「売上 1,280,000」。
- 【ナレーション】現金が増えた（借方）＝売上が立った（貸方）。
- 【AI】`Close-up of a whiteboard T-account: left side labeled cash with amount, right side labeled sales with amount, hand-drawn marker style, [共通スタイル]`

## コマ7 — やる気の芽生え（引き）
- 【構図】拳を握る さくら、背景に輝き。前向き。
- 【セリフ】さくら「数字、ちょっと面白いかも。私、簿記やってみます！」
- 【ナレーション】こうして さくら の学びが始まった。― 第1章へ
- 【AI】`Sakura clenching her fist with sparkling determined eyes, bright background, uplifting, upper body shot, [共通スタイル]`

---

## 写植テキスト（HTMLオーバーレイ用 / JSON下書き）
リーダーに渡す場合の素案（バブル位置は実画像に合わせて調整）：
```json
[
  {"panel":"panel-01.webp","bubbles":[{"text":"ハーバーランド、今日から私の職場！","pos":"tr"}]},
  {"panel":"panel-02.webp","bubbles":[{"text":"えっ、私…経営管理部…？","pos":"tl"}]},
  {"panel":"panel-03.webp","bubbles":[{"text":"一日でこんなに…！","pos":"tr"}]},
  {"panel":"panel-04.webp","bubbles":[{"text":"“いくら入ったか”だけじゃ会社は回らない","pos":"tl"}]},
  {"panel":"panel-05.webp","bubbles":[{"text":"原因と結果を左と右に分けて記録する。これが簿記だ","pos":"tr"}]},
  {"panel":"panel-06.webp","caption":"現金が増えた（借方）＝売上が立った（貸方）"},
  {"panel":"panel-07.webp","bubbles":[{"text":"私、簿記やってみます！","pos":"tl"}]}
]
```
