/*
 * Finance for All — 漫画データ
 * --------------------------------------------------
 * window.MANGA['コースID/章番号'] = { title, panels:[...] }
 * 各 panel = {
 *   img:     画像URL（未作成なら null → プレースホルダー表示）
 *   alt:     コマの説明（プレースホルダー兼 代替テキスト）
 *   ratio:   アスペクト比 '16/9' など（プレースホルダー時の高さ。既定 '4/3'）
 *   bubbles: [ { text, pos:'tl|tr|bl|br|ct', type:'speech|narration' } ]
 *   caption: コマ下部の地の文（任意）
 * }
 *
 * セリフは画像に焼き込まず、ここ（HTMLオーバーレイ）で乗せる。
 * → 誤字修正・多言語化・問題との整合修正が一瞬。
 *
 * 画像が用意できたら img に 'manga/boki3/ep01/panel-01.webp' のように設定するだけ。
 */
window.MANGA = {

  'boki3/1': {
    title: '第1話「はじめての仕訳」',
    sub: 'バックヤード会計部 ・ 簿記3級 第1章',
    panels: [
      { img: null, alt: '開園初日の朝、ゲート前で気合いを入れる さくら。背景で楽が陽気に呼び込み', ratio: '16/9',
        bubbles: [{ text: '配属先は会計部…でも、初日、頑張るぞー！', pos: 'tr', type: 'speech' }],
        caption: 'ドリーム・ハーバー・パーク、開園初日。' },
      { img: null, alt: 'オフィスのモニターにチケット売上がぐんぐん増えていく。目を丸くする さくら', ratio: '4/3',
        bubbles: [{ text: 'お金がどんどん動いてる…！', pos: 'tl', type: 'speech' }] },
      { img: null, alt: 'ノートを前にペンを持ったまま固まる さくら（汗）', ratio: '4/3',
        bubbles: [{ text: 'で、これ…どこに、どう書けばいいの！？', pos: 'br', type: 'speech' }],
        caption: 'さっそく つまずく さくら。' },
      { img: null, alt: '机の上に電卓マスコット ケイタ がピョコッと飛び出す。驚くさくら', ratio: '4/3',
        bubbles: [{ text: 'カイケイのお困り、ボクが解決！相棒のケイタだよ！', pos: 'tl', type: 'speech' },
                  { text: 'しゃ、喋った!?', pos: 'br', type: 'speech' }] },
      { img: null, alt: 'ケイタが「借方」「貸方」の札を両手に持ってドヤ顔', ratio: '16/9',
        bubbles: [{ text: '簿記はね、お金が動いた“原因と結果”を【左＝借方】【右＝貸方】に分けて書くだけ！', pos: 'tr', type: 'speech' }] },
      { img: null, alt: '眼鏡を直しながら登場する 財前（先輩）、落ち着いた笑み', ratio: '4/3',
        bubbles: [{ text: 'いい説明だ。じゃあ実際にやってみよう。「チケットを現金1,000円で売った」', pos: 'tl', type: 'speech' }] },
      { img: null, alt: 'ホワイトボードのT字勘定アップ。左「現金 1,000」右「売上 1,000」', ratio: '16/9',
        bubbles: [{ text: '現金が“増えた”→左（借方）。売上が“起きた”→右（貸方）', pos: 'tr', type: 'speech' }],
        caption: 'これが「仕訳」。取引を左と右に分けて記録する。' },
      { img: null, alt: 'ケイタが知ったかぶりで解説、さくらがジト目でツッコミ', ratio: '4/3',
        bubbles: [{ text: 'ちなみに現金は“資産”、売上は“収益”。むずかしく言うとねぇ〜', pos: 'tl', type: 'speech' },
                  { text: '急に賢ぶった!?', pos: 'br', type: 'speech' }] },
      { img: null, alt: '楽がドタバタ乱入「釣り銭が足りないー！」、慌てる一同', ratio: '16/9',
        bubbles: [{ text: 'さくらちゃーん！売店の釣り銭たりないー！', pos: 'tr', type: 'speech' },
                  { text: '…ほら、それも立派な“取引”だよ', pos: 'bl', type: 'speech' }] },
      { img: null, alt: 'さくらがノートに仕訳を書けて、ぱぁっと笑顔', ratio: '4/3',
        bubbles: [{ text: 'できた…！左と右、ちゃんと釣り合ってる！', pos: 'tr', type: 'speech' }],
        caption: '借方合計＝貸方合計。これが仕訳の鉄則！' },
      { img: null, alt: '拳を握る さくら、背景にきらめき。ケイタと楽も笑顔', ratio: '16/9',
        bubbles: [{ text: '数字、ちょっと好きになれそう…！', pos: 'bl', type: 'speech' }],
        caption: 'さくら の簿記が、いま始まった。― 第1章で「仕訳」をマスターしよう！' }
    ]
  },

  'boki3/2': {
    title: '第2話「合わない1円」',
    sub: 'バックヤード会計部 ・ 簿記3級 第2章',
    panels: [
      { img: null, alt: '深夜のオフィス、電卓を叩き続ける さくら', ratio: '16/9',
        bubbles: [{ text: '月末の集計…借方と貸方が、合わない…！', pos: 'tr', type: 'speech' }] },
      { img: null, alt: '机に突っ伏す さくら、書類の山', ratio: '4/3',
        bubbles: [{ text: 'どこかで間違えてる…でもどこ！？', pos: 'br', type: 'speech' }] },
      { img: null, alt: '財前が「試算表」を指し示す', ratio: '4/3',
        bubbles: [{ text: '落ち着いて。“試算表”を作れば、左右が合うかで間違いを見つけられる', pos: 'tl', type: 'speech' }] },
      { img: null, alt: '試算表で1か所の転記ミスを発見', ratio: '16/9',
        bubbles: [{ text: 'あっ、ここの転記が抜けてた！', pos: 'tr', type: 'speech' }],
        caption: '借方合計＝貸方合計。試算表は記帳のチェックリスト。' },
      { img: null, alt: '完成した損益計算書と貸借対照表を眺める二人', ratio: '16/9',
        bubbles: [{ text: 'P/Lは“もうけ”、B/Sは“財産”。会社の通信簿だね', pos: 'tl', type: 'speech' }],
        caption: '数字が、会社の姿を語り始めた。― 第2章へ' }
    ]
  },

  'boki3/3': {
    title: '第3話「売店は取引の宝庫」',
    sub: 'バックヤード会計部 ・ 簿記3級 第3章',
    panels: [
      { img: null, alt: '賑わうグッズショップ、日比野楽が陽気に呼び込み', ratio: '16/9',
        bubbles: [{ text: 'さくらちゃん、今日は売店の経理ヘルプよろしく！', pos: 'tr', type: 'speech' }] },
      { img: null, alt: '在庫を掛けで仕入れる伝票、約束手形', ratio: '4/3',
        bubbles: [{ text: '掛け仕入に、手形に…現金以外のやりとりがいっぱい！', pos: 'bl', type: 'speech' }] },
      { img: null, alt: 'レジの現金が帳簿と合わず慌てる さくら', ratio: '4/3',
        bubbles: [{ text: 'レジのお金、帳簿と100円ずれてる…！', pos: 'tr', type: 'speech' }] },
      { img: null, alt: '財前が現金過不足の処理を説明', ratio: '4/3',
        bubbles: [{ text: '原因が分かるまで“現金過不足”で預かる。慌てなくて大丈夫', pos: 'tl', type: 'speech' }] },
      { img: null, alt: '給料日、源泉徴収の天引きを学ぶ', ratio: '16/9',
        bubbles: [{ text: '給料から預かった税金は“預り金”。後でまとめて納めるんだ', pos: 'tr', type: 'speech' }],
        caption: '現場には、取引のすべてが詰まっていた。― 第3章へ' }
    ]
  },

  'boki3/4': {
    title: '第4話「はじめての決算」',
    sub: 'バックヤード会計部 ・ 簿記3級 第4章',
    panels: [
      { img: null, alt: '年度末、ピリッとした空気のオフィス。鶴見部長が登場', ratio: '16/9',
        bubbles: [{ text: 'いよいよ決算だ。今年のパークの成績、締めくくるぞ', pos: 'tr', type: 'speech' }] },
      { img: null, alt: '減価償却・売上原価の整理に取り組む さくら', ratio: '4/3',
        bubbles: [{ text: '期中の記録を、実態に合わせて整える…これが決算整理！', pos: 'bl', type: 'speech' }] },
      { img: null, alt: '精算表を1枚に仕上げていく', ratio: '16/9',
        bubbles: [{ text: '試算表→修正→P/L→B/S。精算表1枚で全部つながった！', pos: 'tr', type: 'speech' }],
        caption: '決算の流れが、1枚の表で見渡せる。' },
      { img: null, alt: '伝票を分担で処理する会計部のみんな', ratio: '4/3',
        bubbles: [{ text: '入金・出金・振替の伝票で、みんなで手分けだ', pos: 'tl', type: 'speech' }] },
      { img: null, alt: '完成した決算書を手に、達成感の さくら（部長と先輩）', ratio: '16/9',
        bubbles: [{ text: '私、簿記3級…ちゃんと武器になってきた気がする！', pos: 'bl', type: 'speech' }],
        caption: 'さくら の最初の一歩、完了。― 次は簿記2級へ！' }
    ]
  }

};
