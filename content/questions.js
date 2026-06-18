/*
 * Finance for All — 問題バンク
 * --------------------------------------------------
 * 各バンクは question オブジェクトの配列です。
 *   q       … 問題文（HTML可。改行は <br>）
 *   choices … 選択肢の配列
 *   ans     … 正解の選択肢インデックス（0始まり）
 *   exp     … 解説文（HTML可）
 *
 * バンクIDは content/courses.js の quizzes[].bank / mocks[].bank と
 * 一致させてください。空配列のままにしておくと、画面では
 * 「準備中」と表示されます（追加待ちの目印になります）。
 *
 * 新しい問題を追加するときは、対応するバンクの配列に
 * オブジェクトを足すだけです。コード（index.html）は触りません。
 */
window.QUESTION_BANKS = {

  /* ===== 簿記3級 ===== */
  boki3_ch1: [
    { q: '次の取引の仕訳として正しいものを選びなさい。<br>「商品 ¥30,000 を掛けで仕入れた。」',
      choices: ['借方：仕入 30,000 ／ 貸方：現金 30,000', '借方：仕入 30,000 ／ 貸方：買掛金 30,000', '借方：買掛金 30,000 ／ 貸方：仕入 30,000', '借方：現金 30,000 ／ 貸方：仕入 30,000'],
      ans: 1, exp: '「掛けで仕入れた」とは代金未払いの仕入です。費用（仕入）→借方、後払い義務（買掛金）→貸方。' },
    { q: '次のうち、<strong style="font-weight:500;color:var(--color-text-primary)">資産</strong>に分類される勘定科目はどれか。',
      choices: ['売上', '買掛金', '現金', '資本金'],
      ans: 2, exp: '現金は会社が保有する財産（資産）です。売上→収益、買掛金→負債、資本金→純資産。' },
    { q: '貸方に記入すると残高が増える勘定科目はどれか。',
      choices: ['現金', '売掛金', '負債', '費用'],
      ans: 2, exp: '負債は「貸方残高」の勘定科目です。貸方に記入すると残高が増えます。' },
    { q: '「建物 ¥2,000,000 を現金で購入した」場合の借方科目は？',
      choices: ['現金', '費用', '建物', '資本金'],
      ans: 2, exp: '建物を取得すると資産（建物）が増加します。資産の増加は借方に記入します。' },
    { q: '試算表の作成目的として最も適切なものはどれか。',
      choices: ['利益の計算', '転記ミスの発見', '税金の計算', '仕訳の作成'],
      ans: 1, exp: '試算表は借方合計＝貸方合計を確認することで転記ミスを発見するために作成します。' }
  ],
  boki3_ch2: [
    { q: '決算整理で、当期の費用にすべき前払家賃を繰り延べる処理として正しいものは？',
      choices: ['前払費用（資産）として次期へ繰り延べる', '未払費用（負債）を計上する', '当期の費用を増やす', '収益として計上する'],
      ans: 0, exp: '前払家賃は当期の費用ではないため、前払費用（資産）として次期へ繰り延べます。' },
    { q: '損益計算書が表すものはどれか。',
      choices: ['一時点の財政状態', '一定期間の経営成績', '現金の増減', '株主構成'],
      ans: 1, exp: '損益計算書（P/L）は一定期間の収益と費用、すなわち経営成績を表します。' }
  ],
  boki3_ch3: [],
  boki3_mock1: [
    { q: '得意先から売掛金 ¥80,000 を現金で回収した。正しい仕訳は？',
      choices: ['借方：現金 ／ 貸方：売上', '借方：現金 ／ 貸方：売掛金', '借方：売掛金 ／ 貸方：現金', '借方：売上 ／ 貸方：現金'],
      ans: 1, exp: '現金（資産）が増え、売掛金（資産）が減ります。借方：現金／貸方：売掛金。' }
  ],
  boki3_mock2: [],
  boki3_mock3: [],

  /* ===== 簿記2級 ===== */
  boki2_ch1: [
    { q: '税効果会計で計上される「繰延税金資産」は、どの区分に表示されるか。',
      choices: ['負債', '純資産', '資産', '収益'],
      ans: 2, exp: '繰延税金資産は将来の税金軽減効果を表す資産として計上されます。' }
  ],
  boki2_ch2: [],
  boki2_mock1: [],
  boki2_mock2: [],
  boki2_mock3: [],

  /* ===== USCMA ===== */
  uscma_ch1: [
    { q: 'A flexible budget differs from a static budget in that it:',
      choices: ['Is prepared only at year-end', 'Adjusts for the actual level of activity', 'Ignores variable costs', 'Cannot be used for variance analysis'],
      ans: 1, exp: 'A flexible budget is adjusted to the actual activity level, enabling meaningful variance analysis.' }
  ],
  uscma_ch2: [],
  uscma_mock1: [],
  uscma_mock2: [],
  uscma_mock3: [],

  /* ===== TOEIC ===== */
  toeic_ch1: [
    { q: 'Choose the word that best completes the sentence.<br>"The new policy will ____ all employees starting next month."',
      choices: ['affect', 'effect', 'affection', 'effective'],
      ans: 0, exp: '動詞として「影響を与える」は affect。effect は主に名詞「影響・効果」です。' }
  ],
  toeic_ch2: [],
  toeic_mock1: [],
  toeic_mock2: [],
  toeic_mock3: []

};
