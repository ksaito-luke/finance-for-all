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
    title: '第1章「わたしの居場所」',
    sub: 'ドリーム・ハーバー・パーク ・ 簿記3級 第1章',
    fullpage: true,
    panels: [
      { img: 'manga/boki3/ep01/page-01.png', alt: '開園の朝、正門で社員証を握りしめる さくら', ratio: '9/16' },
      { img: 'manga/boki3/ep01/page-02.png', alt: '幼い頃の記憶。父に肩車され、年間パスポートを握る さくら', ratio: '9/16' },
      { img: 'manga/boki3/ep01/page-03.png', alt: '高校〜大学、7年間のお土産屋アルバイト。ここが居場所に', ratio: '9/16' },
      { img: 'manga/boki3/ep01/page-04.png', alt: '狭き門を突破、内定。入社式へ向かう さくら', ratio: '9/16' },
      { img: 'manga/boki3/ep01/page-05.png', alt: '新人研修。たくさんの部署＝ひとつの街を動かす', ratio: '9/16' },
      { img: 'manga/boki3/ep01/page-06.png', alt: '配属発表前、同期の結衣と期待に胸をふくらませる', ratio: '9/16' },
      { img: 'manga/boki3/ep01/page-07.png', alt: '配属は経理部。「経理部って、なに！？」', ratio: '9/16' },
      { img: 'manga/boki3/ep01/page-08.png', alt: '廊下でひとり。頬を叩いて前を向く決意', ratio: '9/16' },
      { img: 'manga/boki3/ep01/page-09.png', alt: '静かな経理部へ。美咲先輩の出迎え', ratio: '9/16' },
      { img: 'manga/boki3/ep01/page-10.png', alt: '鶴見部長が「春川」の姓に、ふと反応する', ratio: '9/16' },
      { img: 'manga/boki3/ep01/page-11.png', alt: '「きちっとした仕事が、お客さんの笑顔につながる」', ratio: '9/16' },
      { img: 'manga/boki3/ep01/page-12.png', alt: '指導員・月島との出会い。ことりと跳ねる胸', ratio: '9/16' },
      { img: 'manga/boki3/ep01/page-13.png', alt: '「聞いたことは必ず書き留める」メモの教え', ratio: '9/16' },
      { img: 'manga/boki3/ep01/page-14.png', alt: '「ところで、“簿記”って勉強したことある？」', ratio: '9/16' },
      { img: 'manga/boki3/ep01/page-15.png', alt: '相棒ケイタの影と、夕暮れの観覧車', ratio: '9/16' },
      { img: 'manga/boki3/ep01/page-16.png', alt: '父の遺した手帳。はじめての“簿記”の物語が始まる', ratio: '9/16' }
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
