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
  }

};
