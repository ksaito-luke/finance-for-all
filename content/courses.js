/*
 * Finance for All — コース定義データ
 * --------------------------------------------------
 * このファイルだけを編集すれば、コースの概要・スキル・対象者・
 * ロードマップ・カリキュラム（章/単元）・確認問題・模試の一覧を
 * 追加・変更できます。問題そのものは content/questions.js を編集します。
 *
 * スキーマは CONTENT_GUIDE.md を参照してください。
 */
window.COURSES = {

  boki3: {
    name: '簿記3級 合格コース',
    glyph: 'ti-book',
    color: 'blue',
    sub: '3か月 ・ 全32単元 ・ 模擬テスト3回',
    pass: '合格基準は100点満点中70点。ロードマップ完走で合格率84%。',
    examTitle: '日商簿記3級 合格',
    totalHours: 90,
    lead: '日商簿記3級は、<strong>すべてのビジネスパーソンの「共通言語」</strong>となる会計の基礎資格です。簿記をまったく学んだことのない方でも、3か月で合格レベルに到達できるよう、スライド・テキスト・演習・模試を一本道のロードマップで提供します。',
    skills: [
      ['ti-pencil', '仕訳の技術', '日々の取引を借方・貸方に正確に記録できる'],
      ['ti-table', '試算表の作成', '転記ミスを発見し帳簿を締める力'],
      ['ti-report-money', '財務諸表の理解', '損益計算書・貸借対照表を読み解く'],
      ['ti-businessplan', '数字で語る力', '事業の状態を会計の視点で捉える']
    ],
    targets: [
      '会計をはじめて学ぶ学生・若手社会人',
      '営業・企画など非経理職で数字に強くなりたい方',
      '2級・USCMAへのステップにしたい方'
    ],
    roadmap: [
      ['done', '1か月目 ・ 第1〜2章', '簿記の基礎を固める', '仕訳・勘定科目・試算表まで。毎日30分の学習で土台を作ります。', ['スライド14枚', '確認問題 40問'], '完了'],
      ['active', '2か月目 ・ 第3〜4章', '決算処理をマスター', '決算整理・精算表・財務諸表の作成。試験で頻出の重要論点です。', ['スライド18枚', '確認問題 60問', 'check:第1回模試'], '学習中'],
      ['todo', '3か月目 ・ 総仕上げ', '問題演習と弱点補強', '過去問演習と模試2回で本番形式に慣れ、合格ラインを安定させます。', ['総合演習 120問', 'check:第2・3回模試'], '']
    ],
    curriculum: [
      { chapter: '第1章 — 簿記の基本', units: [
        { id: '1-1', title: '簿記とは何か', min: 12, status: 'done' },
        { id: '1-2', title: '資産・負債・純資産', min: 18, status: 'done' },
        { id: '1-3', title: '仕訳の基礎', min: 22, status: 'active' },
        { id: '1-4', title: '勘定科目と転記', min: 20, status: 'locked' }
      ]},
      { chapter: '第2章 — 決算と財務諸表', units: [
        { id: '2-1', title: '試算表の作成', min: 25, status: 'locked' },
        { id: '2-2', title: '損益計算書', min: 19, status: 'locked' },
        { id: '2-3', title: '貸借対照表', min: 21, status: 'locked' }
      ]},
      { chapter: '第3章 — いろいろな取引', units: [
        { id: '3-1', title: '商品売買の応用（返品・諸掛）', min: 20, status: 'locked' },
        { id: '3-2', title: '現金と預金', min: 23, status: 'locked' },
        { id: '3-3', title: '手形と貸し借り', min: 22, status: 'locked' }
      ]}
    ],
    quizzes: [
      { title: '第1章 確認問題', bank: 'boki3_ch1', status: 'done', score: 80 },
      { title: '第2章 確認問題', bank: 'boki3_ch2', status: 'active' },
      { title: '第3章 確認問題', bank: 'boki3_ch3', status: 'active' },
      { title: '仕訳ドリル（ランダム20問）', bank: 'boki3_drill', status: 'active', pick: 20 },
      { title: '仕訳ドリル（ランダム50問）', bank: 'boki3_drill', status: 'active', pick: 50 }
    ],
    mocks: [
      { title: '第1回 模擬テスト', bank: 'boki3_mock1', min: 120, status: 'active' },
      { title: '第2回 模擬テスト', bank: 'boki3_mock2', min: 120, status: 'locked' },
      { title: '第3回 模擬テスト', bank: 'boki3_mock3', min: 120, status: 'locked' }
    ]
  },

  boki2: {
    name: '簿記2級 合格コース',
    glyph: 'ti-books',
    color: 'teal',
    sub: '6か月 ・ 全64単元 ・ 模擬テスト3回',
    pass: '商業簿記・工業簿記の合計100点中70点が合格基準です。',
    examTitle: '日商簿記2級 合格',
    totalHours: 200,
    lead: '簿記2級は、<strong>製造業の原価計算や連結会計まで踏み込む、実務で評価される資格</strong>です。3級の知識を前提に、商業簿記の応用と工業簿記を半年でバランスよく習得します。',
    skills: [
      ['ti-building-factory', '工業簿記', '製造原価の計算と原価管理ができる'],
      ['ti-chart-dots', '原価計算', '標準原価・CVP分析で意思決定を支える'],
      ['ti-binary-tree', '連結会計の基礎', '企業グループの財務を理解する'],
      ['ti-receipt-tax', '商業簿記の応用', '税効果会計など実務論点に対応']
    ],
    targets: [
      '簿記3級を取得済みの方',
      '経理・財務でキャリアを伸ばしたい方',
      'USCMAや会計士を見据える方'
    ],
    roadmap: [
      ['active', '1〜2か月目 ・ 商業簿記', '商業簿記の応用を固める', '株式会社会計・税効果会計など、3級から一歩進んだ論点を学びます。', ['スライド24枚', '確認問題 80問'], '学習中'],
      ['todo', '3〜4か月目 ・ 工業簿記', '工業簿記を攻略', '製造原価の流れと原価計算。2級最大の山場を丁寧に解説します。', ['スライド22枚', '確認問題 70問', 'check:第1回模試'], ''],
      ['todo', '5か月目 ・ 原価計算', '意思決定に活かす原価計算', '標準原価計算・CVP分析。応用問題への対応力を高めます。', ['スライド14枚', '確認問題 50問', 'check:第2回模試'], ''],
      ['todo', '6か月目 ・ 総仕上げ', '本試験レベルの演習', '商工合わせた総合問題と模試で、合格ラインを安定させます。', ['総合演習 160問', 'check:第3回模試'], '']
    ],
    curriculum: [
      { chapter: '第1章 — 商業簿記の応用', units: [
        { id: '1-1', title: '株式会社の純資産', min: 20, status: 'active' },
        { id: '1-2', title: '税効果会計', min: 24, status: 'locked' },
        { id: '1-3', title: '商品売買の応用', min: 18, status: 'locked' }
      ]},
      { chapter: '第2章 — 工業簿記の基礎', units: [
        { id: '2-1', title: '原価の分類', min: 22, status: 'locked' },
        { id: '2-2', title: '材料費・労務費・経費', min: 26, status: 'locked' }
      ]}
    ],
    quizzes: [
      { title: '第1章 確認問題', bank: 'boki2_ch1', status: 'active' },
      { title: '第2章 確認問題', bank: 'boki2_ch2', status: 'locked' }
    ],
    mocks: [
      { title: '第1回 模擬テスト', bank: 'boki2_mock1', min: 120, status: 'locked' },
      { title: '第2回 模擬テスト', bank: 'boki2_mock2', min: 120, status: 'locked' },
      { title: '第3回 模擬テスト', bank: 'boki2_mock3', min: 120, status: 'locked' }
    ]
  },

  uscma: {
    name: 'USCMA 合格コース',
    glyph: 'ti-world-bolt',
    color: 'purple',
    sub: '1年3か月 ・ 全96単元 ・ 模擬テスト3回（Part別）',
    pass: 'Part1・Part2それぞれ500点満点中360点が合格基準です。',
    examTitle: 'USCMA（米国公認管理会計士）合格',
    totalHours: 400,
    lead: 'USCMAは、<strong>管理会計と財務マネジメントの国際資格</strong>。Part1（財務計画・実績・分析）とPart2（戦略的財務管理）を、英語教材にも対応しながら1年3か月で攻略します。',
    skills: [
      ['ti-chart-histogram', '予算と業績管理', '予実分析とKPIで事業を動かす'],
      ['ti-shield-dollar', '内部統制とリスク', 'ガバナンスとリスク管理を理解'],
      ['ti-coin', '投資意思決定', 'DCF・正味現在価値で投資を評価'],
      ['ti-world', 'グローバル財務', '為替・国際財務の視点を持つ']
    ],
    targets: [
      '経理・財務の実務経験がある方',
      '外資系・グローバル企業を目指す方',
      'MBA・CFO候補としての土台を作りたい方'
    ],
    roadmap: [
      ['active', '1〜4か月目 ・ Part1前半', '財務計画と予算管理', '計画立案・予算編成・予測の手法を学びます。Part1の土台です。', ['スライド28枚', '確認問題 120問'], '学習中'],
      ['todo', '5〜7か月目 ・ Part1後半', '業績評価とコスト管理', '原価管理・内部統制・分析。Part1の総仕上げに入ります。', ['スライド24枚', '確認問題 100問', 'check:Part1模試'], ''],
      ['todo', '8〜11か月目 ・ Part2前半', '財務分析と意思決定', '財務諸表分析・コーポレートファイナンスの中核を学びます。', ['スライド26枚', '確認問題 110問'], ''],
      ['todo', '12〜13か月目 ・ Part2後半', 'リスクと投資判断', 'リスク管理・投資意思決定・職業倫理を学びます。', ['スライド20枚', '確認問題 90問', 'check:Part2模試'], ''],
      ['todo', '14〜15か月目 ・ 総仕上げ', '本番形式の演習', 'Part1・2の総合演習とエッセイ対策で得点を固めます。', ['総合演習 200問', 'check:総合模試'], '']
    ],
    curriculum: [
      { chapter: 'Part1 — 財務計画・予算', units: [
        { id: '1-1', title: '予算編成プロセス', min: 28, status: 'active' },
        { id: '1-2', title: '予測技法', min: 24, status: 'locked' }
      ]},
      { chapter: 'Part1 — 業績管理', units: [
        { id: '2-1', title: '差異分析', min: 26, status: 'locked' },
        { id: '2-2', title: 'KPIとバランススコアカード', min: 22, status: 'locked' }
      ]}
    ],
    quizzes: [
      { title: 'Part1 前半 確認問題', bank: 'uscma_ch1', status: 'active' },
      { title: 'Part1 後半 確認問題', bank: 'uscma_ch2', status: 'locked' }
    ],
    mocks: [
      { title: 'Part1 模擬テスト', bank: 'uscma_mock1', min: 240, status: 'locked' },
      { title: 'Part2 模擬テスト', bank: 'uscma_mock2', min: 240, status: 'locked' },
      { title: '総合 模擬テスト', bank: 'uscma_mock3', min: 240, status: 'locked' }
    ]
  },

  toeic: {
    name: 'TOEIC 800点 突破コース',
    glyph: 'ti-language-hiragana',
    color: 'amber',
    sub: '6か月 ・ 全48単元 ・ 模擬テスト3回',
    pass: '990点満点中800点を目標。L400/R400のバランスを重視します。',
    examTitle: 'TOEIC 800点 達成',
    totalHours: 150,
    lead: 'TOEIC 800点は、<strong>ビジネスで「英語が使える」と評価される一つの基準</strong>です。リスニングとリーディングを半年でバランスよく伸ばし、ビジネス英語の頻出パターンを徹底的に身につけます。',
    skills: [
      ['ti-headphones', 'リスニング力', '会話・説明文を正確に聞き取る'],
      ['ti-book-2', 'リーディング力', '長文を速く正確に読み解く'],
      ['ti-vocabulary', 'ビジネス語彙', '頻出3000語を文脈で習得'],
      ['ti-clock-bolt', '時間配分', '本番で解き切るペース戦略']
    ],
    targets: [
      '就職・転職でスコアが必要な学生・社会人',
      '海外案件や外資を目指す方',
      '英語学習を習慣化したい方'
    ],
    roadmap: [
      ['active', '1〜2か月目 ・ 基礎固め', '文法と頻出語彙', 'Part5対策の文法と、ビジネス頻出語彙を集中インプットします。', ['スライド16枚', '確認問題 200問'], '学習中'],
      ['todo', '3〜4か月目 ・ リスニング', 'L セクション攻略', 'Part1〜4の解法。先読みとシャドーイングで聞く力を鍛えます。', ['スライド18枚', '確認問題 240問', 'check:第1回模試'], ''],
      ['todo', '5か月目 ・ リーディング', 'R セクション攻略', 'Part6・7の長文速読。設問タイプ別の解法を習得します。', ['スライド14枚', '確認問題 220問', 'check:第2回模試'], ''],
      ['todo', '6か月目 ・ 総仕上げ', '本番形式で得点最大化', '時間配分を意識した模試演習で、800点ラインを安定させます。', ['模試演習 2回', 'check:第3回模試'], '']
    ],
    curriculum: [
      { chapter: '第1章 — 文法と語彙', units: [
        { id: '1-1', title: '品詞と文型', min: 16, status: 'active' },
        { id: '1-2', title: 'ビジネス頻出語彙 1', min: 18, status: 'locked' }
      ]},
      { chapter: '第2章 — リスニング基礎', units: [
        { id: '2-1', title: 'Part1 写真描写', min: 14, status: 'locked' },
        { id: '2-2', title: 'Part2 応答問題', min: 17, status: 'locked' }
      ]}
    ],
    quizzes: [
      { title: '第1章 確認問題', bank: 'toeic_ch1', status: 'active' },
      { title: '第2章 確認問題', bank: 'toeic_ch2', status: 'locked' }
    ],
    mocks: [
      { title: '第1回 模擬テスト', bank: 'toeic_mock1', min: 120, status: 'locked' },
      { title: '第2回 模擬テスト', bank: 'toeic_mock2', min: 120, status: 'locked' },
      { title: '第3回 模擬テスト', bank: 'toeic_mock3', min: 120, status: 'locked' }
    ]
  }

};
