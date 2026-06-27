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
    title: '第1話「はじめての数字」',
    sub: 'バックヤード会計部 ・ 簿記3級 第1章',
    panels: [
      { img: null, alt: 'テーマパーク全景（朝・きらめく空）', ratio: '16/9',
        bubbles: [{ text: 'ここは、ドリーム・ハーバー・パーク。', pos: 'tr', type: 'narration' }] },
      { img: null, alt: 'ゲートを見上げる さくら（後ろ姿）', ratio: '4/3',
        bubbles: [{ text: '今日から私の職場！', pos: 'tr', type: 'speech' }],
        caption: '新卒入社した 月島さくら。' },
      { img: null, alt: 'オフィスのモニターに「本日のチケット売上 ¥1,280,000」', ratio: '4/3',
        bubbles: [{ text: 'えっ、私…経営管理部…？', pos: 'tl', type: 'speech' },
                  { text: '一日でこんなに動くの！？', pos: 'br', type: 'speech' }] },
      { img: null, alt: 'コーヒー片手に声をかける 財前（先輩）', ratio: '4/3',
        bubbles: [{ text: 'すごいだろ？ でも“いくら入ったか”だけじゃ会社は回らない', pos: 'tl', type: 'speech' }] },
      { img: null, alt: 'ホワイトボードに縦線を引く財前、のぞき込むさくら', ratio: '16/9',
        bubbles: [{ text: 'お金が動いたら、原因と結果を左と右に分けて記録する。これが「簿記」だ', pos: 'tr', type: 'speech' }] },
      { img: null, alt: 'ホワイトボードのアップ（借方：現金／貸方：売上）', ratio: '16/9',
        caption: '現金が増えた（借方）＝売上が立った（貸方）。これが仕訳の第一歩！' },
      { img: null, alt: '拳を握る さくら（背景にきらめき）', ratio: '4/3',
        bubbles: [{ text: '数字、ちょっと面白いかも。私、簿記やってみます！', pos: 'bl', type: 'speech' }],
        caption: 'こうして さくら の学びが始まった。― 第1章へ' }
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
