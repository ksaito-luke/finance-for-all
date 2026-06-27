# 漫画量産パイプライン仕様書

「台本 → JSON → 画像生成（ComfyUI）→ 写植 → 自動QA」を、後で迷わず実装できるよう定義する。
ComfyUI導入前でも、ここを読めば全体像と各工程の入出力が分かる。

---

## 全体フロー
```
①台本(ネーム)
   ↓  LLM（Claude/GPT, JSON出力）
②パネルJSON（キャラ・表情・ポーズ・背景・セリフ）
   ↓  プロンプト組み立て（②＋STORY_BIBLEのキャラ固定文＋共通スタイル）
③画像生成プロンプト
   ↓  ComfyUI API（LoRA＋IP-Adapter＋ControlNet）※空き吹き出し/余白で生成
④コマ画像（.webp）
   ↓  manga.js に img として登録（セリフはJSONのまま）
⑤サイトの漫画リーダーで写植オーバーレイ表示
   ↓  Vision LLMで採点（キャラ崩れ/破綻）
⑥低スコアは③に戻して再生成
```

## ② パネルJSONスキーマ
1コマ＝1オブジェクト。LLMにはこの形式“のみ”を出力させる。
```json
{
  "id": "boki3-ep01-p05",
  "characters": [
    { "name": "sakura", "expression": "curious", "pose": "leaning in, looking at whiteboard" },
    { "name": "ren", "expression": "calm", "pose": "drawing a vertical line on whiteboard" }
  ],
  "shot": "two-shot, medium",
  "background": "office with whiteboard, daytime",
  "ratio": "16/9",
  "bubbles": [
    { "speaker": "ren", "type": "speech", "text": "お金が動いたら、原因と結果を左と右に分けて記録する。これが簿記だ", "pos": "tr" }
  ],
  "caption": ""
}
```
- `name` は STORY_BIBLE のキャラID（sakura / ren / gaku / keita / bucho）。
- `pos` は tl/tr/bl/br/ct（リーダーの吹き出し位置と一致）。
- 複数キャラのコマは生成が難しいので、可能なら1コマ1キャラに割る。

## 「台本→JSON」LLMプロンプト（雛形）
```
あなたは漫画のネーム構成作家です。次の章の学習ポイントと物語メモを、
1ページ5〜6コマのウェブトゥーン用パネルJSON配列に変換してください。
制約：
- 出力はJSON配列のみ（説明文なし）。
- 各コマは {id, characters[{name,expression,pose}], shot, background, ratio, bubbles[{speaker,type,text,pos}], caption} 。
- キャラ name は sakura/ren/gaku/keita/bucho のみ使用。
- セリフは短く口語。1コマのbubblesは2つまで。難語は避ける。
- 物語の山場＝その章の学習論点になるようにする。
【章の学習ポイント】...
【物語メモ】...
```

## ③ 画像生成プロンプトの組み立て（②から自動生成）
最終プロンプト ＝ **キャラ固定文（STORY_BIBLE）** ＋ **表情/ポーズ（JSON）** ＋ **背景/ショット** ＋ **共通スタイル** ＋ **「空の吹き出し（セリフは描かない）」**。
例（さくら1キャラ・コマ5）：
```
Ren (28yo Japanese man, neat short black hair, thin silver-framed glasses, light blue dress shirt, calm gentle smile, tall slim), calm expression, drawing a vertical line on a whiteboard, with Sakura leaning in curiously, office with whiteboard daytime, two-shot medium, full color anime/manga illustration, clean lineart, soft cel shading, bright theme-park palette, empty speech bubbles, no text
```
- ComfyUI側：チェックポイント→該当キャラLoRA→上記プロンプト→(任意)ControlNetでポーズ→生成。
- ネガティブ：`text, watermark, extra fingers, deformed hands, multiple heads, inconsistent face`。

## ④→⑤ 画像の組み込み（コード不要）
1. 生成画像を `manga/<course>/<episode>/panel-XX.webp` に保存。
2. `content/manga.js` の該当パネルの `img: null` を上記パスに書き換える。
3. セリフ（bubbles）はJSONのままサイトがオーバーレイ表示。→ **誤字直し・翻訳はJSON編集だけ**。

## ⑥ 自動QA（Vision LLM 採点）プロンプト
生成画像をAIに見せて0〜100で採点し、しきい値未満は再生成キューへ。
```
この漫画コマ画像を評価してください。基準：
1. キャラ一貫性（指定の容姿と一致しているか）
2. 破綻の有無（手指・顔・余分な人物・崩れ）
3. 指定の表情・ポーズ・背景に合っているか
4. 吹き出しが空で、画像内に文字が描かれていないか
各10点満点で採点し、合計（0-40を100換算）と、減点理由、再生成すべきか(boolean)をJSONで返す。
```

## 当面の割り切り（量産優先）
- ウェブトゥーン縦読み・コマ比率は 16/9 と 4/3 の2種に固定（リーダーと一致）。
- 1コマ1キャラ構図を基本に（複数キャラは別生成して合成 or 手直し）。
- セリフは焼き込まずオーバーレイ固定。

## 役割
- 台本（ネーム）・JSON・プロンプト組み立て・自動QAプロンプト：私（メイン/各コンテンツ役）
- ComfyUI実行・LoRA学習・画像選別：ユーザー/委託（自宅GPUやクラウド）
- 画像の取り込み（manga.js編集）：どちらでも可（コード不要）
