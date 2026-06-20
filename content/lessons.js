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
    ]

  };
})();
