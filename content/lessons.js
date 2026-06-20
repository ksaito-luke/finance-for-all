/*
 * Finance for All — 講義スライド（オリジナル教材）
 * --------------------------------------------------
 * すべて自作の図解・文章です。外部教材の図版・文言は使用していません。
 *
 * 形式： window.LESSONS['コースID/単元ID'] = [ スライド, ... ]
 *   各スライド = { h: '見出し', svg: '<svg>...図解...</svg>'(任意), body: '本文HTML' }
 *
 * 図解はインラインSVG。色はブランドカラーに統一：
 *   緑#0F6E56 / 青#185FA5 / 橙#BA7517 / 紫#534AB7（薄色は 50番台）
 *   文字#1a1a18・補助#5f5e5a・線#d3d1c7
 *
 * 新しい単元のスライドを追加するときは、ここにキーを足すだけです。
 */
(function () {
  // 共通スタイルの短縮（SVG内で使用）
  var T = 'font-family:sans-serif';

  window.LESSONS = {

    /* ============ 第1章 1-1 簿記とは何か ============ */
    'boki3/1-1': [
      { h: '簿記とは「お金の記録」',
        svg: '<svg viewBox="0 0 340 150" xmlns="http://www.w3.org/2000/svg" style="'+T+'">\
<rect x="128" y="48" width="84" height="58" rx="10" fill="#E1F5EE" stroke="#0F6E56"/>\
<text x="170" y="74" text-anchor="middle" font-size="14" fill="#0F6E56" font-weight="500">帳簿</text>\
<text x="170" y="92" text-anchor="middle" font-size="11" fill="#0F6E56">に記録</text>\
<line x1="38" y1="77" x2="118" y2="77" stroke="#185FA5" stroke-width="3"/>\
<polygon points="120,77 108,71 108,83" fill="#185FA5"/>\
<text x="76" y="66" text-anchor="middle" font-size="12" fill="#185FA5">お金が入る</text>\
<line x1="222" y1="77" x2="300" y2="77" stroke="#BA7517" stroke-width="3"/>\
<polygon points="302,77 290,71 290,83" fill="#BA7517"/>\
<text x="264" y="66" text-anchor="middle" font-size="12" fill="#BA7517">お金が出る</text></svg>',
        body: '<ul><li>簿記＝会社の<b>お金やモノの出入りを記録</b>する技術</li><li>毎日の取引を一定のルールで帳簿に書き残します</li></ul>' },
      { h: 'なぜ記録するの？',
        svg: '<svg viewBox="0 0 340 150" xmlns="http://www.w3.org/2000/svg" style="'+T+'">\
<rect x="20" y="55" width="74" height="46" rx="9" fill="#F1EFE8" stroke="#888780"/>\
<text x="57" y="83" text-anchor="middle" font-size="13" fill="#444441" font-weight="500">記録</text>\
<line x1="98" y1="78" x2="138" y2="78" stroke="#888780" stroke-width="2.5"/><polygon points="140,78 130,73 130,83" fill="#888780"/>\
<rect x="146" y="26" width="82" height="44" rx="9" fill="#FAEEDA" stroke="#BA7517"/>\
<text x="187" y="46" text-anchor="middle" font-size="12" fill="#854F0B" font-weight="500">損益計算書</text>\
<text x="187" y="61" text-anchor="middle" font-size="10.5" fill="#854F0B">もうけが分かる</text>\
<rect x="146" y="86" width="82" height="44" rx="9" fill="#E6F1FB" stroke="#185FA5"/>\
<text x="187" y="106" text-anchor="middle" font-size="12" fill="#185FA5" font-weight="500">貸借対照表</text>\
<text x="187" y="121" text-anchor="middle" font-size="10.5" fill="#185FA5">財産が分かる</text>\
<line x1="230" y1="48" x2="262" y2="48" stroke="#888780" stroke-width="2"/><polygon points="264,48 254,43 254,53" fill="#888780"/>\
<line x1="230" y1="108" x2="262" y2="108" stroke="#888780" stroke-width="2"/><polygon points="264,108 254,103 254,113" fill="#888780"/>\
<text x="300" y="52" text-anchor="middle" font-size="11" fill="#5f5e5a">成績</text>\
<text x="300" y="112" text-anchor="middle" font-size="11" fill="#5f5e5a">財政</text></svg>',
        body: '記録を集計すると、2つの大切な表ができます。<ul><li><b>損益計算書</b>… 一定期間で<span class="hl">いくら儲かったか</span></li><li><b>貸借対照表</b>… 今<span class="hl">どれだけ財産があるか</span></li></ul>' },
      { h: '簿記の全体の流れ',
        svg: '<svg viewBox="0 0 340 120" xmlns="http://www.w3.org/2000/svg" style="'+T+'">\
<rect x="6" y="48" width="58" height="34" rx="8" fill="#EEEDFE" stroke="#534AB7"/><text x="35" y="69" text-anchor="middle" font-size="11" fill="#534AB7">取引</text>\
<rect x="76" y="48" width="58" height="34" rx="8" fill="#E1F5EE" stroke="#0F6E56"/><text x="105" y="69" text-anchor="middle" font-size="11" fill="#0F6E56">仕訳</text>\
<rect x="146" y="48" width="58" height="34" rx="8" fill="#E1F5EE" stroke="#0F6E56"/><text x="175" y="69" text-anchor="middle" font-size="11" fill="#0F6E56">転記</text>\
<rect x="216" y="48" width="58" height="34" rx="8" fill="#E6F1FB" stroke="#185FA5"/><text x="245" y="69" text-anchor="middle" font-size="11" fill="#185FA5">試算表</text>\
<rect x="286" y="48" width="50" height="34" rx="8" fill="#FAEEDA" stroke="#BA7517"/><text x="311" y="65" text-anchor="middle" font-size="10" fill="#854F0B">決算</text><text x="311" y="77" text-anchor="middle" font-size="9" fill="#854F0B">＝財務諸表</text>\
<g stroke="#b4b2a9" stroke-width="2"><line x1="64" y1="65" x2="74" y2="65"/><line x1="134" y1="65" x2="144" y2="65"/><line x1="204" y1="65" x2="214" y2="65"/><line x1="274" y1="65" x2="284" y2="65"/></g></svg>',
        body: '取引が起きてから決算書ができるまで、<b>一本道の流れ</b>で進みます。<ul><li>この講座はこの流れに沿って学びます</li></ul>' },
      { h: 'まとめ', body: '<ul><li>簿記は<b>お金の出入りを記録</b>する技術</li><li>記録を集計して<b>損益計算書</b>と<b>貸借対照表</b>を作る</li><li>取引 → 仕訳 → 転記 → 試算表 → 決算の流れで進む</li></ul>' }
    ],

    /* ============ 第1章 1-2 資産・負債・純資産 ============ */
    'boki3/1-2': [
      { h: '会社の財産は3つに分ける',
        svg: '<svg viewBox="0 0 340 140" xmlns="http://www.w3.org/2000/svg" style="'+T+'">\
<rect x="10" y="40" width="100" height="62" rx="10" fill="#E6F1FB" stroke="#185FA5"/>\
<text x="60" y="66" text-anchor="middle" font-size="14" fill="#185FA5" font-weight="500">資産</text>\
<text x="60" y="86" text-anchor="middle" font-size="10.5" fill="#185FA5">持っている財産</text>\
<rect x="120" y="40" width="100" height="62" rx="10" fill="#FAEEDA" stroke="#BA7517"/>\
<text x="170" y="66" text-anchor="middle" font-size="14" fill="#854F0B" font-weight="500">負債</text>\
<text x="170" y="86" text-anchor="middle" font-size="10.5" fill="#854F0B">返す義務</text>\
<rect x="230" y="40" width="100" height="62" rx="10" fill="#E1F5EE" stroke="#0F6E56"/>\
<text x="280" y="66" text-anchor="middle" font-size="14" fill="#0F6E56" font-weight="500">純資産</text>\
<text x="280" y="86" text-anchor="middle" font-size="10.5" fill="#0F6E56">正味の元手</text></svg>',
        body: '<ul><li><b>資産</b>… 現金・建物など<span class="hl">プラスの財産</span></li><li><b>負債</b>… 借入金など<span class="hl">返す義務</span></li><li><b>純資産</b>… 資産から負債を引いた<span class="hl">正味の持ち分</span></li></ul>' },
      { h: '会計の基本等式',
        svg: '<svg viewBox="0 0 340 110" xmlns="http://www.w3.org/2000/svg" style="'+T+'">\
<rect x="14" y="38" width="92" height="44" rx="9" fill="#E6F1FB" stroke="#185FA5"/><text x="60" y="65" text-anchor="middle" font-size="14" fill="#185FA5" font-weight="500">資産</text>\
<text x="120" y="66" text-anchor="middle" font-size="22" fill="#5f5e5a">=</text>\
<rect x="138" y="38" width="84" height="44" rx="9" fill="#FAEEDA" stroke="#BA7517"/><text x="180" y="65" text-anchor="middle" font-size="14" fill="#854F0B" font-weight="500">負債</text>\
<text x="232" y="66" text-anchor="middle" font-size="22" fill="#5f5e5a">+</text>\
<rect x="248" y="38" width="86" height="44" rx="9" fill="#E1F5EE" stroke="#0F6E56"/><text x="291" y="65" text-anchor="middle" font-size="13" fill="#0F6E56" font-weight="500">純資産</text></svg>',
        body: '3つの関係は必ずこの式になります。<ul><li><b>資産 ＝ 負債 ＋ 純資産</b></li><li>これは貸借対照表の形そのものです（次のスライド）</li></ul>' },
      { h: '貸借対照表のかたち',
        svg: '<svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg" style="'+T+'">\
<rect x="40" y="20" width="110" height="112" fill="#E6F1FB" stroke="#185FA5"/>\
<text x="95" y="78" text-anchor="middle" font-size="14" fill="#185FA5" font-weight="500">資産</text>\
<rect x="150" y="20" width="110" height="50" fill="#FAEEDA" stroke="#BA7517"/>\
<text x="205" y="49" text-anchor="middle" font-size="13" fill="#854F0B" font-weight="500">負債</text>\
<rect x="150" y="70" width="110" height="62" fill="#E1F5EE" stroke="#0F6E56"/>\
<text x="205" y="105" text-anchor="middle" font-size="12" fill="#0F6E56" font-weight="500">純資産</text>\
<text x="95" y="14" text-anchor="middle" font-size="10" fill="#5f5e5a">左：借方</text>\
<text x="205" y="14" text-anchor="middle" font-size="10" fill="#5f5e5a">右：貸方</text></svg>',
        body: '左に<b>資産</b>、右に<b>負債と純資産</b>を並べると左右の金額が一致します。<ul><li>この左右一致が簿記の基本ルールです</li></ul>' },
      { h: '具体例で確認',
        body: '<ul><li>現金・売掛金・建物・備品 → <span class="hl">資産</span></li><li>買掛金・借入金 → <span class="hl">負債</span></li><li>資本金・繰越利益剰余金 → <span class="hl">純資産</span></li></ul>' },
      { h: 'まとめ', body: '<ul><li>財産は<b>資産・負債・純資産</b>の3つに分類</li><li><b>資産 ＝ 負債 ＋ 純資産</b> が必ず成立</li><li>これが貸借対照表（B/S）の形になる</li></ul>' }
    ],

    /* ============ 第1章 1-3 仕訳の基礎 ============ */
    'boki3/1-3': [
      { h: '仕訳＝左と右に分ける',
        svg: '<svg viewBox="0 0 300 130" xmlns="http://www.w3.org/2000/svg" style="'+T+'">\
<rect x="40" y="24" width="220" height="86" rx="8" fill="#ffffff" stroke="#888780"/>\
<line x1="150" y1="24" x2="150" y2="110" stroke="#888780" stroke-width="1.5"/>\
<line x1="40" y1="50" x2="260" y2="50" stroke="#d3d1c7"/>\
<text x="95" y="42" text-anchor="middle" font-size="13" fill="#185FA5" font-weight="500">借方（左）</text>\
<text x="205" y="42" text-anchor="middle" font-size="13" fill="#BA7517" font-weight="500">貸方（右）</text>\
<text x="95" y="84" text-anchor="middle" font-size="12" fill="#5f5e5a">増えた財産など</text>\
<text x="205" y="84" text-anchor="middle" font-size="12" fill="#5f5e5a">その原因など</text></svg>',
        body: '取引を<b>借方（かりかた・左）</b>と<b>貸方（かしかた・右）</b>に分けて書くことを<span class="hl">仕訳</span>といいます。<ul><li>「借」「貸」の漢字に深い意味はなく、左右の名前と覚えてOK</li></ul>' },
      { h: '大原則：左右の合計は必ず一致',
        svg: '<svg viewBox="0 0 300 130" xmlns="http://www.w3.org/2000/svg" style="'+T+'">\
<line x1="150" y1="20" x2="150" y2="40" stroke="#5f5e5a" stroke-width="3"/>\
<polygon points="60,46 240,46 230,58 70,58" fill="#E1F5EE" stroke="#0F6E56"/>\
<rect x="44" y="58" width="40" height="34" rx="5" fill="#E6F1FB" stroke="#185FA5"/><text x="64" y="80" text-anchor="middle" font-size="11" fill="#185FA5">借方</text>\
<rect x="216" y="58" width="40" height="34" rx="5" fill="#FAEEDA" stroke="#BA7517"/><text x="236" y="80" text-anchor="middle" font-size="11" fill="#BA7517">貸方</text>\
<circle cx="150" cy="44" r="6" fill="#0F6E56"/>\
<text x="150" y="112" text-anchor="middle" font-size="13" fill="#0F6E56" font-weight="500">借方合計 ＝ 貸方合計</text></svg>',
        body: '<ul><li>仕訳では必ず<b>借方の合計＝貸方の合計</b></li><li>天秤のように左右が釣り合います（複式簿記）</li></ul>' },
      { h: '増えたら借方？貸方？',
        svg: '<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" style="'+T+'">\
<rect x="10" y="20" width="145" height="104" rx="9" fill="#E6F1FB" stroke="#185FA5"/>\
<text x="82" y="40" text-anchor="middle" font-size="12" fill="#185FA5" font-weight="500">借方が増える</text>\
<text x="82" y="66" text-anchor="middle" font-size="12" fill="#0C447C">資産 の増加</text>\
<text x="82" y="90" text-anchor="middle" font-size="12" fill="#0C447C">費用 の発生</text>\
<rect x="165" y="20" width="145" height="104" rx="9" fill="#FAEEDA" stroke="#BA7517"/>\
<text x="237" y="40" text-anchor="middle" font-size="12" fill="#854F0B" font-weight="500">貸方が増える</text>\
<text x="237" y="62" text-anchor="middle" font-size="12" fill="#633806">負債 の増加</text>\
<text x="237" y="82" text-anchor="middle" font-size="12" fill="#633806">純資産 の増加</text>\
<text x="237" y="102" text-anchor="middle" font-size="12" fill="#633806">収益 の発生</text></svg>',
        body: 'どちら側に書くかは要素で決まります。<ul><li><b>借方が定位置</b>… 資産・費用</li><li><b>貸方が定位置</b>… 負債・純資産・収益</li><li>定位置の反対側に書くと「減少」を表します</li></ul>' },
      { h: '例題：現金で仕入れた',
        svg: '<svg viewBox="0 0 300 110" xmlns="http://www.w3.org/2000/svg" style="'+T+'">\
<rect x="30" y="30" width="240" height="56" rx="8" fill="#ffffff" stroke="#888780"/>\
<line x1="150" y1="30" x2="150" y2="86" stroke="#888780" stroke-width="1.5"/>\
<text x="90" y="54" text-anchor="middle" font-size="13" fill="#185FA5" font-weight="500">仕入</text>\
<text x="90" y="74" text-anchor="middle" font-size="12" fill="#5f5e5a">50,000</text>\
<text x="210" y="54" text-anchor="middle" font-size="13" fill="#BA7517" font-weight="500">現金</text>\
<text x="210" y="74" text-anchor="middle" font-size="12" fill="#5f5e5a">50,000</text></svg>',
        body: '「商品 ¥50,000 を現金で仕入れた」<ul><li>費用（仕入）が発生 → <b>借方</b></li><li>資産（現金）が減少 → <b>貸方</b></li></ul>' },
      { h: 'まとめ', body: '<ul><li>仕訳＝取引を<b>借方と貸方</b>に分けて記録</li><li><b>借方合計＝貸方合計</b>が必ず成立</li><li>資産・費用は借方、負債・純資産・収益は貸方が定位置</li></ul>' }
    ],

    /* ============ 第1章 1-4 勘定科目と転記 ============ */
    'boki3/1-4': [
      { h: '勘定科目は「分類のラベル」',
        svg: '<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" style="'+T+'">\
<rect x="20" y="44" width="70" height="34" rx="16" fill="#E6F1FB" stroke="#185FA5"/><text x="55" y="65" text-anchor="middle" font-size="12" fill="#185FA5">現金</text>\
<rect x="100" y="44" width="70" height="34" rx="16" fill="#E6F1FB" stroke="#185FA5"/><text x="135" y="65" text-anchor="middle" font-size="12" fill="#185FA5">売掛金</text>\
<rect x="180" y="44" width="70" height="34" rx="16" fill="#FAEEDA" stroke="#BA7517"/><text x="215" y="65" text-anchor="middle" font-size="12" fill="#854F0B">買掛金</text>\
<rect x="260" y="44" width="52" height="34" rx="16" fill="#E1F5EE" stroke="#0F6E56"/><text x="286" y="65" text-anchor="middle" font-size="12" fill="#0F6E56">売上</text></svg>',
        body: '取引につける<b>名前（ラベル）</b>を勘定科目といいます。<ul><li>現金・売掛金・買掛金・売上・仕入… など</li><li>同じ種類のお金の動きを同じ科目に集めます</li></ul>' },
      { h: '転記＝仕訳を科目ごとに集める',
        svg: '<svg viewBox="0 0 330 140" xmlns="http://www.w3.org/2000/svg" style="'+T+'">\
<rect x="14" y="44" width="110" height="50" rx="8" fill="#ffffff" stroke="#888780"/>\
<line x1="69" y1="44" x2="69" y2="94" stroke="#888780"/>\
<text x="41" y="64" text-anchor="middle" font-size="11" fill="#185FA5">現金</text><text x="41" y="84" text-anchor="middle" font-size="10" fill="#5f5e5a">50,000</text>\
<text x="97" y="64" text-anchor="middle" font-size="11" fill="#BA7517">売上</text><text x="97" y="84" text-anchor="middle" font-size="10" fill="#5f5e5a">50,000</text>\
<text x="69" y="36" text-anchor="middle" font-size="10" fill="#5f5e5a">仕訳</text>\
<line x1="130" y1="69" x2="168" y2="69" stroke="#888780" stroke-width="2.5"/><polygon points="170,69 159,64 159,74" fill="#888780"/>\
<text x="150" y="60" text-anchor="middle" font-size="10" fill="#5f5e5a">転記</text>\
<path d="M186 30 h120 v80 h-120 z" fill="#E1F5EE" stroke="#0F6E56"/>\
<line x1="246" y1="30" x2="246" y2="110" stroke="#0F6E56"/>\
<text x="246" y="24" text-anchor="middle" font-size="10" fill="#0F6E56">総勘定元帳（現金）</text>\
<text x="216" y="60" text-anchor="middle" font-size="11" fill="#0F6E56">借方</text>\
<text x="216" y="78" text-anchor="middle" font-size="10" fill="#0F6E56">50,000</text>\
<text x="276" y="60" text-anchor="middle" font-size="11" fill="#0F6E56">貸方</text></svg>',
        body: '仕訳を<b>科目ごとのページ（T字の勘定）</b>に書き写すことを<span class="hl">転記</span>といいます。<ul><li>科目ごとに集めることで、各科目の残高が分かります</li></ul>' },
      { h: 'まとめ', body: '<ul><li><b>勘定科目</b>＝取引につける分類のラベル</li><li><b>転記</b>＝仕訳を科目ごとの勘定（T字）に書き写す</li><li>これで各科目の残高が集計できる</li></ul>' }
    ],

    /* ============ 第2章 2-1 試算表の作成 ============ */
    'boki3/2-1': [
      { h: '試算表＝全科目の残高を一覧に',
        svg: '<svg viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg" style="'+T+'">\
<rect x="40" y="20" width="220" height="100" rx="6" fill="#ffffff" stroke="#888780"/>\
<line x1="110" y1="20" x2="110" y2="120" stroke="#d3d1c7"/><line x1="190" y1="20" x2="190" y2="120" stroke="#d3d1c7"/>\
<line x1="40" y1="44" x2="260" y2="44" stroke="#888780"/>\
<line x1="40" y1="96" x2="260" y2="96" stroke="#888780"/>\
<text x="75" y="37" text-anchor="middle" font-size="10" fill="#185FA5">借方</text>\
<text x="150" y="37" text-anchor="middle" font-size="10" fill="#5f5e5a">科目</text>\
<text x="225" y="37" text-anchor="middle" font-size="10" fill="#BA7517">貸方</text>\
<text x="150" y="64" text-anchor="middle" font-size="10" fill="#888780">現金・売上 …</text>\
<text x="150" y="82" text-anchor="middle" font-size="10" fill="#888780">買掛金 …</text>\
<text x="75" y="112" text-anchor="middle" font-size="11" fill="#0F6E56" font-weight="500">合計</text>\
<text x="225" y="112" text-anchor="middle" font-size="11" fill="#0F6E56" font-weight="500">＝合計</text></svg>',
        body: '転記した各勘定の残高を集めた表が<b>試算表</b>です。<ul><li>借方残高と貸方残高を一覧にします</li></ul>' },
      { h: '左右が合えば、ひとまず安心',
        svg: '<svg viewBox="0 0 300 110" xmlns="http://www.w3.org/2000/svg" style="'+T+'">\
<rect x="40" y="40" width="90" height="40" rx="8" fill="#E6F1FB" stroke="#185FA5"/><text x="85" y="65" text-anchor="middle" font-size="12" fill="#185FA5">借方合計</text>\
<text x="150" y="65" text-anchor="middle" font-size="20" fill="#0F6E56">=</text>\
<rect x="170" y="40" width="90" height="40" rx="8" fill="#FAEEDA" stroke="#BA7517"/><text x="215" y="65" text-anchor="middle" font-size="12" fill="#854F0B">貸方合計</text></svg>',
        body: '<ul><li>借方合計＝貸方合計なら、<span class="hl">転記のミスが少ない</span>と確認できる</li><li>もし一致しなければ、どこかで記入ミスがある合図</li></ul>' },
      { h: 'まとめ', body: '<ul><li>試算表は<b>全科目の残高の一覧表</b></li><li><b>借方合計＝貸方合計</b>で記帳のチェックができる</li><li>決算へ進む前の中間チェックポイント</li></ul>' }
    ],

    /* ============ 第2章 2-2 損益計算書 ============ */
    'boki3/2-2': [
      { h: '損益計算書＝もうけの計算書',
        svg: '<svg viewBox="0 0 300 130" xmlns="http://www.w3.org/2000/svg" style="'+T+'">\
<rect x="30" y="30" width="80" height="70" rx="9" fill="#E1F5EE" stroke="#0F6E56"/><text x="70" y="70" text-anchor="middle" font-size="13" fill="#0F6E56" font-weight="500">収益</text>\
<text x="123" y="70" text-anchor="middle" font-size="20" fill="#5f5e5a">−</text>\
<rect x="138" y="42" width="72" height="46" rx="9" fill="#FAEEDA" stroke="#BA7517"/><text x="174" y="70" text-anchor="middle" font-size="13" fill="#854F0B" font-weight="500">費用</text>\
<text x="223" y="70" text-anchor="middle" font-size="20" fill="#5f5e5a">=</text>\
<rect x="238" y="48" width="56" height="34" rx="9" fill="#E6F1FB" stroke="#185FA5"/><text x="266" y="64" text-anchor="middle" font-size="11" fill="#185FA5">利益</text><text x="266" y="77" text-anchor="middle" font-size="9" fill="#185FA5">（もうけ）</text></svg>',
        body: '一定期間の<b>収益から費用を引いた残り</b>が利益です。<ul><li><b>収益 − 費用 ＝ 当期純利益</b></li><li>収益…売上など／費用…仕入・給料など</li></ul>' },
      { h: 'まとめ', body: '<ul><li>損益計算書（P/L）は<b>一定期間の経営成績</b></li><li><b>収益 − 費用 ＝ 当期純利益</b></li></ul>' }
    ],

    /* ============ 第2章 2-3 貸借対照表 ============ */
    'boki3/2-3': [
      { h: '貸借対照表＝財産の一覧',
        svg: '<svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg" style="'+T+'">\
<rect x="40" y="20" width="110" height="112" fill="#E6F1FB" stroke="#185FA5"/><text x="95" y="80" text-anchor="middle" font-size="14" fill="#185FA5" font-weight="500">資産</text>\
<rect x="150" y="20" width="110" height="50" fill="#FAEEDA" stroke="#BA7517"/><text x="205" y="49" text-anchor="middle" font-size="13" fill="#854F0B" font-weight="500">負債</text>\
<rect x="150" y="70" width="110" height="62" fill="#E1F5EE" stroke="#0F6E56"/><text x="205" y="105" text-anchor="middle" font-size="12" fill="#0F6E56" font-weight="500">純資産</text></svg>',
        body: '決算日<b>その時点の財産</b>を示す表です。<ul><li>左の資産＝右の（負債＋純資産）で必ず一致</li><li>「いま会社に何があるか」が分かります</li></ul>' },
      { h: '利益は純資産を増やす',
        body: '<ul><li>損益計算書で計算した<b>当期純利益</b>は、貸借対照表の<span class="hl">純資産を増やします</span></li><li>こうして2つの表はつながっています</li></ul>' },
      { h: 'まとめ', body: '<ul><li>貸借対照表（B/S）は<b>一定時点の財政状態</b></li><li><b>資産 ＝ 負債 ＋ 純資産</b></li><li>当期純利益は純資産を増やし、P/LとB/Sが連動する</li></ul>' }
    ],

    /* ============ 第3章 3-1 商品売買の応用（返品・諸掛） ============ */
    'boki3/3-1': [
      { h: '返品は「逆の仕訳」で取り消す',
        svg: '<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" style="'+T+'">\
<rect x="14" y="30" width="130" height="34" rx="7" fill="#ffffff" stroke="#888780"/>\
<line x1="79" y1="30" x2="79" y2="64" stroke="#888780"/>\
<text x="46" y="51" text-anchor="middle" font-size="11" fill="#185FA5">仕入</text>\
<text x="112" y="51" text-anchor="middle" font-size="11" fill="#BA7517">買掛金</text>\
<text x="79" y="22" text-anchor="middle" font-size="10" fill="#5f5e5a">① 仕入れたとき</text>\
<rect x="14" y="84" width="130" height="34" rx="7" fill="#FCEBEB" stroke="#A32D2D"/>\
<line x1="79" y1="84" x2="79" y2="118" stroke="#A32D2D"/>\
<text x="46" y="105" text-anchor="middle" font-size="11" fill="#A32D2D">買掛金</text>\
<text x="112" y="105" text-anchor="middle" font-size="11" fill="#A32D2D">仕入</text>\
<text x="79" y="78" text-anchor="middle" font-size="10" fill="#A32D2D">② 返品（逆にする）</text>\
<text x="232" y="62" text-anchor="middle" font-size="12" fill="#5f5e5a">借方と貸方を</text>\
<text x="232" y="80" text-anchor="middle" font-size="12" fill="#5f5e5a">入れ替えるだけ</text></svg>',
        body: '返品や値引きは、最初の仕訳の<b>借方・貸方を入れ替えて取り消し</b>ます。<ul><li>仕入を返品 → 借方：買掛金 ／ 貸方：仕入</li><li>売上の返品 → 借方：売上 ／ 貸方：売掛金</li></ul>' },
      { h: '仕入諸掛は「仕入」に含める',
        svg: '<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" style="'+T+'">\
<rect x="40" y="36" width="84" height="42" rx="9" fill="#E1F5EE" stroke="#0F6E56"/><text x="82" y="55" text-anchor="middle" font-size="12" fill="#0F6E56">商品代金</text><text x="82" y="71" text-anchor="middle" font-size="10" fill="#0F6E56">50,000</text>\
<text x="135" y="62" text-anchor="middle" font-size="18" fill="#5f5e5a">+</text>\
<rect x="150" y="36" width="78" height="42" rx="9" fill="#FAEEDA" stroke="#BA7517"/><text x="189" y="55" text-anchor="middle" font-size="12" fill="#854F0B">引取運賃</text><text x="189" y="71" text-anchor="middle" font-size="10" fill="#854F0B">1,000</text>\
<text x="240" y="62" text-anchor="middle" font-size="16" fill="#5f5e5a">→</text>\
<rect x="256" y="36" width="58" height="42" rx="9" fill="#E6F1FB" stroke="#185FA5"/><text x="285" y="55" text-anchor="middle" font-size="11" fill="#185FA5">仕入</text><text x="285" y="71" text-anchor="middle" font-size="10" fill="#185FA5">51,000</text></svg>',
        body: '商品を仕入れる際にかかった<b>引取運賃（仕入諸掛）</b>は、商品代金に<span class="hl">含めて「仕入」</span>に計上します。<ul><li>例：商品50,000＋運賃1,000 → 仕入 51,000</li></ul>' },
      { h: 'まとめ', body: '<ul><li>返品・値引きは<b>逆の仕訳</b>で取り消す</li><li>仕入時の運賃などの<b>諸掛は仕入に含める</b></li></ul>' }
    ],

    /* ============ 第3章 3-2 現金と預金 ============ */
    'boki3/3-2': [
      { h: '現金過不足：合わない差を一時的に記録',
        svg: '<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" style="'+T+'">\
<rect x="20" y="42" width="84" height="40" rx="9" fill="#E6F1FB" stroke="#185FA5"/><text x="62" y="60" text-anchor="middle" font-size="11" fill="#185FA5">帳簿の残高</text><text x="62" y="76" text-anchor="middle" font-size="10" fill="#185FA5">10,000</text>\
<text x="116" y="66" text-anchor="middle" font-size="16" fill="#5f5e5a">≠</text>\
<rect x="128" y="42" width="84" height="40" rx="9" fill="#F1EFE8" stroke="#888780"/><text x="170" y="60" text-anchor="middle" font-size="11" fill="#444441">実際の有高</text><text x="170" y="76" text-anchor="middle" font-size="10" fill="#444441">9,000</text>\
<text x="224" y="66" text-anchor="middle" font-size="16" fill="#5f5e5a">→</text>\
<rect x="240" y="42" width="74" height="40" rx="9" fill="#FAEEDA" stroke="#BA7517"/><text x="277" y="60" text-anchor="middle" font-size="10.5" fill="#854F0B">現金過不足</text><text x="277" y="76" text-anchor="middle" font-size="10" fill="#854F0B">1,000</text></svg>',
        body: '帳簿と実際の現金が合わないとき、差額を一時的に<b>現金過不足</b>で記録します。<ul><li>原因が分かれば正しい科目へ振り替え</li><li>決算まで不明なら <span class="hl">雑損</span>（不足）／<span class="hl">雑益</span>（過剰）へ</li></ul>' },
      { h: '小口現金：少額の支払い用の財布',
        svg: '<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" style="'+T+'">\
<rect x="24" y="40" width="78" height="40" rx="9" fill="#E1F5EE" stroke="#0F6E56"/><text x="63" y="58" text-anchor="middle" font-size="11" fill="#0F6E56">会計係</text><text x="63" y="73" text-anchor="middle" font-size="9.5" fill="#0F6E56">前渡し</text>\
<line x1="104" y1="60" x2="138" y2="60" stroke="#888780" stroke-width="2"/><polygon points="140,60 130,55 130,65" fill="#888780"/>\
<rect x="142" y="40" width="78" height="40" rx="9" fill="#E6F1FB" stroke="#185FA5"/><text x="181" y="58" text-anchor="middle" font-size="11" fill="#185FA5">用度係</text><text x="181" y="73" text-anchor="middle" font-size="9.5" fill="#185FA5">小口現金</text>\
<line x1="222" y1="60" x2="256" y2="60" stroke="#888780" stroke-width="2"/><polygon points="258,60 248,55 248,65" fill="#888780"/>\
<rect x="260" y="40" width="54" height="40" rx="9" fill="#FAEEDA" stroke="#BA7517"/><text x="287" y="63" text-anchor="middle" font-size="10.5" fill="#854F0B">経費支払</text></svg>',
        body: '日々の少額支払い用に、一定額を担当者へ前渡しするしくみが<b>小口現金</b>です。<ul><li>使った分を後でまとめて補給（定額資金前渡法）</li></ul>' },
      { h: 'まとめ', body: '<ul><li>現金が合わない差は<b>現金過不足</b>で一時処理 → 決算で雑損／雑益</li><li><b>小口現金</b>は少額支払い用の前渡し金</li></ul>' }
    ],

    /* ============ 第3章 3-3 手形と貸し借り ============ */
    'boki3/3-3': [
      { h: '手形：受け取る人と支払う人',
        svg: '<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" style="'+T+'">\
<rect x="20" y="42" width="120" height="44" rx="9" fill="#E6F1FB" stroke="#185FA5"/>\
<text x="80" y="62" text-anchor="middle" font-size="12" fill="#185FA5" font-weight="500">受取手形</text>\
<text x="80" y="78" text-anchor="middle" font-size="10" fill="#185FA5">資産（もらう権利）</text>\
<rect x="180" y="42" width="120" height="44" rx="9" fill="#FAEEDA" stroke="#BA7517"/>\
<text x="240" y="62" text-anchor="middle" font-size="12" fill="#854F0B" font-weight="500">支払手形</text>\
<text x="240" y="78" text-anchor="middle" font-size="10" fill="#854F0B">負債（支払う義務）</text>\
<text x="160" y="36" text-anchor="middle" font-size="10" fill="#5f5e5a">同じ手形を…</text></svg>',
        body: '約束手形は、受け取る側と支払う側で科目が変わります。<ul><li>受け取った側 → <b>受取手形</b>（資産）</li><li>振り出した側 → <b>支払手形</b>（負債）</li></ul>' },
      { h: 'お金の貸し借り：貸付金と借入金',
        svg: '<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" style="'+T+'">\
<rect x="18" y="40" width="120" height="44" rx="9" fill="#E6F1FB" stroke="#185FA5"/><text x="78" y="60" text-anchor="middle" font-size="12" fill="#185FA5" font-weight="500">貸付金</text><text x="78" y="76" text-anchor="middle" font-size="10" fill="#185FA5">貸した側＝資産</text>\
<rect x="182" y="40" width="120" height="44" rx="9" fill="#FAEEDA" stroke="#BA7517"/><text x="242" y="60" text-anchor="middle" font-size="12" fill="#854F0B" font-weight="500">借入金</text><text x="242" y="76" text-anchor="middle" font-size="10" fill="#854F0B">借りた側＝負債</text>\
<text x="160" y="34" text-anchor="middle" font-size="10" fill="#5f5e5a">利息も発生</text></svg>',
        body: 'お金を貸すと<b>貸付金</b>（資産）、借りると<b>借入金</b>（負債）。<ul><li>利息は <span class="hl">受取利息</span>（収益）／<span class="hl">支払利息</span>（費用）で処理</li></ul>' },
      { h: '「商品か否か」で科目が変わる',
        svg: '<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" style="'+T+'">\
<text x="160" y="20" text-anchor="middle" font-size="11" fill="#5f5e5a">代金の後払い・後受け</text>\
<rect x="18" y="34" width="140" height="70" rx="9" fill="#E1F5EE" stroke="#0F6E56"/>\
<text x="88" y="56" text-anchor="middle" font-size="11" fill="#0F6E56" font-weight="500">商品の取引</text>\
<text x="88" y="76" text-anchor="middle" font-size="11" fill="#0F6E56">売掛金 / 買掛金</text>\
<rect x="166" y="34" width="140" height="70" rx="9" fill="#EEEDFE" stroke="#534AB7"/>\
<text x="236" y="56" text-anchor="middle" font-size="11" fill="#534AB7" font-weight="500">商品以外の取引</text>\
<text x="236" y="76" text-anchor="middle" font-size="11" fill="#534AB7">未収入金 / 未払金</text></svg>',
        body: '同じ「後払い・後受け」でも、<b>商品かどうか</b>で科目が分かれます。<ul><li>商品 → 売掛金・買掛金</li><li>備品など商品以外 → 未収入金・未払金</li></ul>' },
      { h: 'まとめ', body: '<ul><li>手形は <b>受取手形（資産）</b>と<b>支払手形（負債）</b></li><li>貸し借りは <b>貸付金（資産）</b>と<b>借入金（負債）</b>＋利息</li><li>後払いは<b>商品なら売掛/買掛</b>、商品以外なら未収入金/未払金</li></ul>' }
    ],

    /* ============ 第3章 3-4 税金と給料の処理 ============ */
    'boki3/3-4': [
      { h: '会社が負担する税金＝租税公課',
        svg: '<svg viewBox="0 0 320 100" xmlns="http://www.w3.org/2000/svg" style="'+T+'">\
<rect x="20" y="34" width="84" height="40" rx="9" fill="#FAEEDA" stroke="#BA7517"/><text x="62" y="52" text-anchor="middle" font-size="10.5" fill="#854F0B">収入印紙</text><text x="62" y="68" text-anchor="middle" font-size="9.5" fill="#854F0B">固定資産税</text>\
<text x="120" y="59" text-anchor="middle" font-size="16" fill="#5f5e5a">→</text>\
<rect x="140" y="34" width="92" height="40" rx="9" fill="#E1F5EE" stroke="#0F6E56"/><text x="186" y="58" text-anchor="middle" font-size="12" fill="#0F6E56" font-weight="500">租税公課（費用）</text></svg>',
        body: '会社が負担する税金（収入印紙・固定資産税・自動車税など）は<b>租税公課</b>という費用で処理します。<ul><li>例：収入印紙を現金購入 → 借方：租税公課 ／ 貸方：現金</li></ul>' },
      { h: '給料：預かって、あとで納める',
        svg: '<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" style="'+T+'">\
<rect x="14" y="40" width="80" height="42" rx="9" fill="#E1F5EE" stroke="#0F6E56"/><text x="54" y="60" text-anchor="middle" font-size="12" fill="#0F6E56" font-weight="500">給料</text><text x="54" y="75" text-anchor="middle" font-size="9.5" fill="#0F6E56">250,000</text>\
<text x="104" y="62" text-anchor="middle" font-size="14" fill="#5f5e5a">=</text>\
<rect x="120" y="40" width="86" height="42" rx="9" fill="#E6F1FB" stroke="#185FA5"/><text x="163" y="60" text-anchor="middle" font-size="11" fill="#185FA5">現金で支給</text><text x="163" y="75" text-anchor="middle" font-size="9.5" fill="#185FA5">235,000</text>\
<text x="210" y="62" text-anchor="middle" font-size="14" fill="#5f5e5a">+</text>\
<rect x="224" y="40" width="90" height="42" rx="9" fill="#FAEEDA" stroke="#BA7517"/><text x="269" y="58" text-anchor="middle" font-size="10" fill="#854F0B">所得税預り金</text><text x="269" y="73" text-anchor="middle" font-size="9.5" fill="#854F0B">15,000（負債）</text></svg>',
        body: '給料から天引きした源泉所得税や社会保険料は、会社が一時的に<b>預り金（負債）</b>として預かり、後日まとめて納付します。<ul><li>給料総額を借方、手取りと預り金を貸方に分けて記入</li></ul>' },
      { h: '消費税（税抜方式）',
        svg: '<svg viewBox="0 0 320 100" xmlns="http://www.w3.org/2000/svg" style="'+T+'">\
<rect x="14" y="34" width="92" height="40" rx="9" fill="#E6F1FB" stroke="#185FA5"/><text x="60" y="52" text-anchor="middle" font-size="10.5" fill="#185FA5">仮払消費税</text><text x="60" y="67" text-anchor="middle" font-size="9.5" fill="#185FA5">仕入時に支払</text>\
<rect x="120" y="34" width="92" height="40" rx="9" fill="#FAEEDA" stroke="#BA7517"/><text x="166" y="52" text-anchor="middle" font-size="10.5" fill="#854F0B">仮受消費税</text><text x="166" y="67" text-anchor="middle" font-size="9.5" fill="#854F0B">売上時に受取</text>\
<text x="224" y="59" text-anchor="middle" font-size="14" fill="#5f5e5a">→</text>\
<rect x="240" y="34" width="74" height="40" rx="9" fill="#E1F5EE" stroke="#0F6E56"/><text x="277" y="58" text-anchor="middle" font-size="10.5" fill="#0F6E56">差額を納付</text></svg>',
        body: '税抜方式では、支払った消費税は<b>仮払消費税</b>、受け取った消費税は<b>仮受消費税</b>で記録し、決算で<span class="hl">差額を納付</span>します。' },
      { h: 'まとめ', body: '<ul><li>会社負担の税金は<b>租税公課（費用）</b></li><li>給料の天引き分は<b>預り金（負債）</b>として後日納付</li><li>消費税は仮払・仮受で記録し差額を納付</li></ul>' }
    ],

    /* ============ 第4章 4-1 決算整理仕訳のまとめ ============ */
    'boki3/4-1': [
      { h: '決算整理＝記録を実態に合わせる',
        svg: '<svg viewBox="0 0 320 90" xmlns="http://www.w3.org/2000/svg" style="'+T+'">\
<rect x="20" y="28" width="84" height="40" rx="9" fill="#F1EFE8" stroke="#888780"/><text x="62" y="46" text-anchor="middle" font-size="11" fill="#444441">期中の記録</text><text x="62" y="61" text-anchor="middle" font-size="9.5" fill="#888780">ざっくり</text>\
<text x="120" y="52" text-anchor="middle" font-size="16" fill="#5f5e5a">→</text>\
<rect x="138" y="28" width="84" height="40" rx="9" fill="#FAEEDA" stroke="#BA7517"/><text x="180" y="52" text-anchor="middle" font-size="11" fill="#854F0B">決算整理</text>\
<text x="238" y="52" text-anchor="middle" font-size="16" fill="#5f5e5a">→</text>\
<rect x="256" y="28" width="58" height="40" rx="9" fill="#E1F5EE" stroke="#0F6E56"/><text x="285" y="52" text-anchor="middle" font-size="11" fill="#0F6E56">正しい額</text></svg>',
        body: '決算で、期中のざっくりした記録を<b>実態に合わせて調整</b>するのが決算整理仕訳です。<ul><li>これを経て正しい財務諸表ができます</li></ul>' },
      { h: '主な決算整理は5つ',
        svg: '<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" style="'+T+'">\
<rect x="10" y="16" width="150" height="32" rx="7" fill="#E6F1FB" stroke="#185FA5"/><text x="85" y="36" text-anchor="middle" font-size="11" fill="#185FA5">① 売上原価の算定</text>\
<rect x="166" y="16" width="148" height="32" rx="7" fill="#E1F5EE" stroke="#0F6E56"/><text x="240" y="36" text-anchor="middle" font-size="11" fill="#0F6E56">② 貸倒引当金</text>\
<rect x="10" y="52" width="150" height="32" rx="7" fill="#FAEEDA" stroke="#BA7517"/><text x="85" y="72" text-anchor="middle" font-size="11" fill="#854F0B">③ 減価償却</text>\
<rect x="166" y="52" width="148" height="32" rx="7" fill="#EEEDFE" stroke="#534AB7"/><text x="240" y="72" text-anchor="middle" font-size="11" fill="#534AB7">④ 経過勘定</text>\
<rect x="88" y="88" width="148" height="32" rx="7" fill="#F1EFE8" stroke="#888780"/><text x="162" y="108" text-anchor="middle" font-size="11" fill="#444441">⑤ 現金過不足・貯蔵品</text></svg>',
        body: '<ul><li>① 売上原価の算定 ② 貸倒引当金の設定</li><li>③ 固定資産の減価償却 ④ 費用・収益の前払/前受/未払/未収（経過勘定）</li><li>⑤ 現金過不足の整理・貯蔵品の振替 など</li></ul>' },
      { h: '売上原価は「しーくり・くりしー」',
        svg: '<svg viewBox="0 0 320 100" xmlns="http://www.w3.org/2000/svg" style="'+T+'">\
<rect x="16" y="30" width="140" height="44" rx="8" fill="#ffffff" stroke="#888780"/><line x1="86" y1="30" x2="86" y2="74" stroke="#888780"/>\
<text x="51" y="50" text-anchor="middle" font-size="10.5" fill="#185FA5">仕入</text><text x="121" y="50" text-anchor="middle" font-size="10.5" fill="#BA7517">繰越商品</text>\
<text x="86" y="24" text-anchor="middle" font-size="9.5" fill="#5f5e5a">期首分</text>\
<rect x="164" y="30" width="140" height="44" rx="8" fill="#ffffff" stroke="#888780"/><line x1="234" y1="30" x2="234" y2="74" stroke="#888780"/>\
<text x="199" y="50" text-anchor="middle" font-size="10.5" fill="#185FA5">繰越商品</text><text x="269" y="50" text-anchor="middle" font-size="10.5" fill="#BA7517">仕入</text>\
<text x="234" y="24" text-anchor="middle" font-size="9.5" fill="#5f5e5a">期末分</text></svg>',
        body: '売上原価の算定は2本の仕訳。<ul><li>期首：<b>仕入 / 繰越商品</b>（しーくり）</li><li>期末：<b>繰越商品 / 仕入</b>（くりしー）</li><li>結果、仕入勘定が売上原価になります</li></ul>' },
      { h: 'まとめ', body: '<ul><li>決算整理は記録を<b>実態に合わせる調整</b></li><li>主要5項目（売上原価・貸倒・減価償却・経過勘定・その他）</li><li>売上原価は「しーくり・くりしー」で求める</li></ul>' }
    ],

    /* ============ 第4章 4-2 精算表の作り方 ============ */
    'boki3/4-2': [
      { h: '精算表＝決算を1枚にまとめた表',
        svg: '<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" style="'+T+'">\
<rect x="8" y="20" width="304" height="100" rx="6" fill="#ffffff" stroke="#888780"/>\
<line x1="84" y1="20" x2="84" y2="120" stroke="#d3d1c7"/><line x1="160" y1="20" x2="160" y2="120" stroke="#d3d1c7"/><line x1="236" y1="20" x2="236" y2="120" stroke="#d3d1c7"/>\
<line x1="8" y1="48" x2="312" y2="48" stroke="#888780"/>\
<text x="46" y="38" text-anchor="middle" font-size="9.5" fill="#444441">試算表</text>\
<text x="122" y="38" text-anchor="middle" font-size="9.5" fill="#BA7517">修正記入</text>\
<text x="198" y="38" text-anchor="middle" font-size="9.5" fill="#0F6E56">損益計算書</text>\
<text x="274" y="38" text-anchor="middle" font-size="9.5" fill="#185FA5">貸借対照表</text>\
<text x="46" y="86" text-anchor="middle" font-size="9" fill="#b4b2a9">各勘定</text>\
<text x="122" y="86" text-anchor="middle" font-size="9" fill="#b4b2a9">決算整理</text>\
<text x="198" y="86" text-anchor="middle" font-size="9" fill="#b4b2a9">収益・費用</text>\
<text x="274" y="86" text-anchor="middle" font-size="9" fill="#b4b2a9">資産・負債</text></svg>',
        body: '精算表は<b>試算表→修正記入→損益計算書→貸借対照表</b>を横に並べ、決算の流れを1枚で見渡せる表です。' },
      { h: '作る手順',
        body: '<ul><li>① 試算表欄に各勘定の残高を書く</li><li>② 修正記入欄に決算整理仕訳を書く</li><li>③ 収益・費用は<b>損益計算書欄</b>、資産・負債・純資産は<b>貸借対照表欄</b>へ</li><li>④ 差額が<span class="hl">当期純利益</span>。左右が一致すれば完成</li></ul>' },
      { h: 'まとめ', body: '<ul><li>精算表は決算を1枚にまとめた表</li><li>修正記入→P/L欄・B/S欄へ振り分ける</li><li>当期純利益で左右が一致する</li></ul>' }
    ],

    /* ============ 第4章 4-3 伝票会計（3伝票制） ============ */
    'boki3/4-3': [
      { h: '伝票＝仕訳の代わりのメモ',
        body: '取引のたびに仕訳帳に書く代わりに、<b>伝票</b>という小さな用紙に記録する方法です。<ul><li>分担して記入でき、後でまとめて集計できます</li></ul>' },
      { h: '3伝票制：3種類に分ける',
        svg: '<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" style="'+T+'">\
<rect x="10" y="34" width="96" height="48" rx="9" fill="#E1F5EE" stroke="#0F6E56"/><text x="58" y="56" text-anchor="middle" font-size="12" fill="#0F6E56" font-weight="500">入金伝票</text><text x="58" y="72" text-anchor="middle" font-size="9.5" fill="#0F6E56">現金が増える</text>\
<rect x="112" y="34" width="96" height="48" rx="9" fill="#FAEEDA" stroke="#BA7517"/><text x="160" y="56" text-anchor="middle" font-size="12" fill="#854F0B" font-weight="500">出金伝票</text><text x="160" y="72" text-anchor="middle" font-size="9.5" fill="#854F0B">現金が減る</text>\
<rect x="214" y="34" width="96" height="48" rx="9" fill="#E6F1FB" stroke="#185FA5"/><text x="262" y="56" text-anchor="middle" font-size="12" fill="#185FA5" font-weight="500">振替伝票</text><text x="262" y="72" text-anchor="middle" font-size="9.5" fill="#185FA5">現金が動かない</text></svg>',
        body: '取引を現金の動きで3種類に分けます。<ul><li><b>入金伝票</b>… 現金が増える取引</li><li><b>出金伝票</b>… 現金が減る取引</li><li><b>振替伝票</b>… 現金が動かない取引</li></ul>' },
      { h: 'まとめ', body: '<ul><li>伝票は仕訳の代わりの記録用紙</li><li>3伝票制＝<b>入金・出金・振替</b>の3種類</li><li>現金が増える/減る/動かない で使い分ける</li></ul>' }
    ],

    /* ============ FP&A 1-1 FP&Aとは何か ============ */
    'fpa/1-1': [
      { h: 'FP&A＝数字で経営を導く役割',
        svg: '<svg viewBox="0 0 330 120" xmlns="http://www.w3.org/2000/svg" style="'+T+'">\
<rect x="6" y="44" width="62" height="34" rx="8" fill="#FAECE7" stroke="#D85A30"/><text x="37" y="65" text-anchor="middle" font-size="10.5" fill="#993C1D">分析</text>\
<rect x="76" y="44" width="62" height="34" rx="8" fill="#FAECE7" stroke="#D85A30"/><text x="107" y="65" text-anchor="middle" font-size="10.5" fill="#993C1D">予測</text>\
<rect x="146" y="44" width="62" height="34" rx="8" fill="#FAECE7" stroke="#D85A30"/><text x="177" y="65" text-anchor="middle" font-size="10.5" fill="#993C1D">計画</text>\
<rect x="216" y="44" width="62" height="34" rx="8" fill="#FAECE7" stroke="#D85A30"/><text x="247" y="65" text-anchor="middle" font-size="10.5" fill="#993C1D">業績報告</text>\
<text x="300" y="65" text-anchor="middle" font-size="16" fill="#5f5e5a">→</text>\
<rect x="252" y="14" width="74" height="24" rx="7" fill="#E1F5EE" stroke="#0F6E56"/><text x="289" y="30" text-anchor="middle" font-size="10" fill="#0F6E56">意思決定</text>\
<g stroke="#d3d1c7" stroke-width="2"><line x1="68" y1="61" x2="76" y2="61"/><line x1="138" y1="61" x2="146" y2="61"/><line x1="208" y1="61" x2="216" y2="61"/></g></svg>',
        body: 'FP&A（Financial Planning & Analysis）は、<b>分析・予測・計画・業績報告</b>を通じて、経営や事業の<span class="hl">意思決定を支える</span>役割です。<ul><li>「記録する簿記」から「活かす財務」への一歩</li></ul>' },
      { h: '必要な3つの知識',
        svg: '<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" style="'+T+'">\
<rect x="14" y="40" width="92" height="44" rx="9" fill="#E6F1FB" stroke="#185FA5"/><text x="60" y="66" text-anchor="middle" font-size="12" fill="#185FA5" font-weight="500">管理会計</text>\
<rect x="114" y="40" width="92" height="44" rx="9" fill="#E1F5EE" stroke="#0F6E56"/><text x="160" y="66" text-anchor="middle" font-size="12" fill="#0F6E56" font-weight="500">企業財務</text>\
<rect x="214" y="40" width="92" height="44" rx="9" fill="#EEEDFE" stroke="#534AB7"/><text x="260" y="66" text-anchor="middle" font-size="12" fill="#534AB7" font-weight="500">事業戦略</text>\
<text x="160" y="26" text-anchor="middle" font-size="11" fill="#5f5e5a">3つを統合して使う</text></svg>',
        body: 'FP&A人材には、<b>管理会計・企業財務・事業戦略</b>を統合的に扱う力が求められます。<ul><li>本コースはこの3領域を順に学びます</li></ul>' },
      { h: 'まとめ', body: '<ul><li>FP&Aは数字で意思決定を支える役割</li><li>分析・予測・計画・業績報告が中核業務</li><li>管理会計・企業財務・事業戦略の統合が鍵</li></ul>' }
    ]

  };
})();
