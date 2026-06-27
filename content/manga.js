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
      { img: 'manga/boki3/ep01/panel-01.png', alt: '開園初日の朝、ゲート前で気合いを入れる さくら', ratio: '9/16',
        bubbles: [{ text: '配属先は会計部…でも、初日、頑張るぞー！', x: 40, y: 30, w: 175, tail: 'bl', type: 'speech' }],
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
    title: '第2話「合わない1円のナゾ」',
    sub: 'バックヤード会計部 ・ 簿記3級 第2章',
    panels: [
      { img: null, alt: '深夜のオフィス、目の下にクマを作って電卓を叩き続ける さくら', ratio: '16/9',
        bubbles: [{ text: '月末の集計…借方と貸方が、1円だけ合わない…！', pos: 'tr', type: 'speech' }],
        caption: '月末、最初の関門。' },
      { img: null, alt: '机に突っ伏す さくら、書類が雪崩を起こす', ratio: '4/3',
        bubbles: [{ text: 'どこで間違えたの…もう無理ぃ…', pos: 'br', type: 'speech' }] },
      { img: null, alt: 'ケイタがドーナツ片手にひょっこり、ドヤ顔', ratio: '4/3',
        bubbles: [{ text: '合わないのは“どこかでミスったよ”のサイン！こんな時こそ“試算表”！', pos: 'tl', type: 'speech' }] },
      { img: null, alt: 'ケイタが全勘定の残高を一覧にした試算表を見せる', ratio: '16/9',
        bubbles: [{ text: '全部の勘定の残高を一覧にして、借方合計＝貸方合計か確かめるんだ', pos: 'tr', type: 'speech' }],
        caption: '試算表＝記帳のチェックリスト。' },
      { img: null, alt: 'ある行の転記が抜けているのを発見、目を見開く さくら', ratio: '4/3',
        bubbles: [{ text: 'あっ！ここ、転記し忘れてる…！', pos: 'br', type: 'speech' }] },
      { img: null, alt: '楽が夜食のカップ麺を差し入れにドタバタ乱入', ratio: '4/3',
        bubbles: [{ text: 'まだ帰らんの!? 夜食どうぞー！', pos: 'tl', type: 'speech' },
                  { text: 'うわ、こぼれる！', pos: 'br', type: 'speech' }] },
      { img: null, alt: '財前が完成した損益計算書と貸借対照表を並べて見せる', ratio: '16/9',
        bubbles: [{ text: '集計できたら決算書だ。P/Lは“もうけ”、B/Sは“財産”を表す', pos: 'tl', type: 'speech' }] },
      { img: null, alt: 'ケイタが2枚の表を指して解説、うなずく さくら', ratio: '4/3',
        bubbles: [{ text: 'P/Lは会社の“通信簿”、B/Sは“持ち物リスト”！', pos: 'tl', type: 'speech' }],
        caption: '収益−費用＝利益／資産＝負債＋純資産。' },
      { img: null, alt: '完成した決算書を手に、達成感でガッツポーズの さくら', ratio: '16/9',
        bubbles: [{ text: '数字が、会社の姿を語ってる…！', pos: 'bl', type: 'speech' }],
        caption: 'たった1円が、全部をつないでいた。― 第2章へ' }
    ]
  },

  'boki3/3': {
    title: '第3話「売店は取引の宝庫」',
    sub: 'バックヤード会計部 ・ 簿記3級 第3章',
    panels: [
      { img: null, alt: '賑わうグッズショップ、楽が全力で呼び込み、巻き込まれる さくら', ratio: '16/9',
        bubbles: [{ text: 'さくらちゃん、今日は売店の経理ヘルプよろしくー！', pos: 'tr', type: 'speech' }] },
      { img: null, alt: '仕入伝票の山と約束手形を前にたじろぐ さくら', ratio: '4/3',
        bubbles: [{ text: '掛け仕入に、手形…現金以外のやりとりだらけ！', pos: 'bl', type: 'speech' }] },
      { img: null, alt: 'ケイタが手形を持って解説', ratio: '4/3',
        bubbles: [{ text: '後払いは“買掛金”、手形を振り出したら“支払手形”。ぜんぶ約束のしるし！', pos: 'tl', type: 'speech' }] },
      { img: null, alt: 'レジ締め、現金が帳簿と100円合わず青ざめる さくら', ratio: '4/3',
        bubbles: [{ text: 'レジのお金、帳簿と100円ずれてる…！？私のせい！？', pos: 'tr', type: 'speech' }] },
      { img: null, alt: 'ケイタが落ち着かせるように両手を上げる', ratio: '16/9',
        bubbles: [{ text: '落ち着いてー。原因不明なら一旦“現金過不足”で預かって、後で振り替えればOK！', pos: 'tr', type: 'speech' }],
        caption: '原因が分かるまでの一時置き場。' },
      { img: null, alt: '楽が「あ、それオレの釣り銭ミスだ！」と頭をかく、脱力する さくら', ratio: '4/3',
        bubbles: [{ text: 'あー！それオレが釣り銭まちがえた！てへ', pos: 'tl', type: 'speech' },
                  { text: '犯人、近くにいた…', pos: 'br', type: 'speech' }] },
      { img: null, alt: '給料明細を見て不思議がる さくら、財前が補足', ratio: '4/3',
        bubbles: [{ text: 'お給料から税金が引かれてる…？', pos: 'tl', type: 'speech' }] },
      { img: null, alt: 'ケイタが「預り金」の札を掲げる', ratio: '16/9',
        bubbles: [{ text: '会社が天引きして後で納める“預り金”！給料は総額で記録するのがコツ', pos: 'tr', type: 'speech' }],
        caption: '掛け・手形・現金過不足・預り金…現場は取引の教科書。― 第3章へ' }
    ]
  },

  'boki3/4': {
    title: '第4話「はじめての決算」',
    sub: 'バックヤード会計部 ・ 簿記3級 第4章',
    panels: [
      { img: null, alt: '年度末、ドアを開けて鶴見部長が豪快に登場、ビクッとする さくら', ratio: '16/9',
        bubbles: [{ text: 'いよいよ決算だ！今年のパークの成績、締めくくるぞ', pos: 'tr', type: 'speech' }],
        caption: 'はじめての、決算。' },
      { img: null, alt: 'ケイタが「決算整理」の旗を振って解説', ratio: '4/3',
        bubbles: [{ text: '決算整理は“期中のざっくり記録を実態に合わせる”仕上げ作業！', pos: 'tl', type: 'speech' }] },
      { img: null, alt: '観覧車を指さしながら減価償却を説明するケイタ', ratio: '16/9',
        bubbles: [{ text: 'アトラクションも毎年ちょっとずつ目減りする。それを費用にするのが“減価償却”！', pos: 'tr', type: 'speech' }],
        caption: '高い備品は、使う年数で分けて費用にする。' },
      { img: null, alt: '「しーくり・くりしー」の呪文に目を回す さくら、ケイタがノリノリ', ratio: '4/3',
        bubbles: [{ text: '売上原価は“しーくり・くりしー”！期首は仕入/繰越商品、期末は逆！', pos: 'tl', type: 'speech' },
                  { text: 'じゅ、呪文…？', pos: 'br', type: 'speech' }] },
      { img: null, alt: '冷静にフォローする財前、半泣きの さくら', ratio: '4/3',
        bubbles: [{ text: '焦らなくていい。一個ずつ、順番にやれば必ず合う', pos: 'tl', type: 'speech' }] },
      { img: null, alt: '精算表を1枚に仕上げ、つながりに感動する さくら', ratio: '16/9',
        bubbles: [{ text: '試算表→修正→P/L→B/S…精算表1枚で全部つながった！', pos: 'tr', type: 'speech' }],
        caption: '決算の流れが、1枚で見渡せる。' },
      { img: null, alt: '締め切り直前、伝票が山積み。楽が悲鳴', ratio: '4/3',
        bubbles: [{ text: '伝票まだこんなにー！間に合わないってー！', pos: 'br', type: 'speech' }] },
      { img: null, alt: 'ケイタが3種の伝票を掲げ、会計部みんなで猛ダッシュ作業', ratio: '16/9',
        bubbles: [{ text: '入金・出金・振替の3種で手分け！現金が増/減/動かないで分けるだけ！', pos: 'tl', type: 'speech' }] },
      { img: null, alt: '完成した決算書を掲げ、部長と先輩に囲まれ達成感の さくら', ratio: '16/9',
        bubbles: [{ text: '私、簿記3級…ちゃんと武器になってきた！', pos: 'bl', type: 'speech' },
                  { text: 'よくやった', pos: 'tr', type: 'speech' }],
        caption: 'さくら の最初の一歩、完了。― 次は簿記2級へ！' }
    ]
  }

};
