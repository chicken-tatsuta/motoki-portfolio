/* ==================================================
   制作物データ
   作品を増やすときは、この配列にオブジェクトを追加してください。
   index.html の一覧と work.html の詳細は、この同じデータから生成されます。
   ================================================== */
const workGroups = [
  { id: "all", label: "すべて" },
  {
    id: "hanabi",
    label: "Hanabi",
    title: "Hanabi",
    description: "国際ロボコンの代表を通して行った仕事を、領域ごとにまとめています。",
  },
  {
    id: "creative",
    label: "Creative",
    title: "Creative",
    description: "ゲーム、グッズ、ブランドなど、僕の世界をかたちにした制作です。",
  },
  {
    id: "engineering",
    label: "Engineering",
    title: "Engineering",
    description: "AIなどを使い、ちょっと便利で面白いものを作ってきました。",
  },
  {
    id: "experiments",
    label: "Experiments",
    title: "Experiments",
    description: "他に行った自分の経験をまとめています。",
  },
];

const hanabiShared = {
  group: "hanabi",
  series: "Hanabi",
  tools: ["Notion", "Figma", "Adobe Illustrator"],
  period: "2024.4 - 2026.4",
  type: "チームプロジェクト",
};

const works = [
  {
    ...hanabiShared,
    id: "hanabi-sales",
    featured: true,
    seriesIndex: "01",
    icon: "link",
    title: "協賛・営業活動",
    category: "Hanabi / Business Development",
    description: "チームの活動の価値を言語化、外部とのコミュニケーション。",
    tags: ["営業", "提案設計", "外部連携"],
    roleLabel: "営業設計・提案・渉外",
    // 営業ページには無理に写真枠を表示しません。
    visuals: [],
    outputs: [
      { label: "営業資料", title: "営業資料", url: "#", note: "相手に合わせて価値を伝えるための資料" },
    ],
    results: [
      { value: "00", label: "提案・連絡" },
      { value: "00", label: "面談・商談" },
    ],
    summary: {
      background:
        "活動の中で多額の金額が必要になるHanabiでは、スポンサーの方との関係を構築することが何よりも重要でした。",
      concept:
        "「相手企業になぜ出して欲しいのか」「この契約にはどういう価値があるか」を常に考え続けました。",
      overview:
        "候補先の整理、接点づくり、チーム紹介、提案資料の作成、面談、フォローアップまで、外部連携に必要な流れを設計・実行しました。",
      role: [
        "メール文の作成",
        "資料作成、読み込み、アポ",
        "後輩のフォローアップ",
      ],
      process: [
        "チームが必要としている協力と自分たちの提供価値を整理",
        "候補先ごとに伝える内容と接点を設計",
        "提案資料と連絡文面を作成",
        "面談や返信をもとに内容を改善",
      ],
      result:
        "提案数、返信数、面談数、協賛・連携実績などを成果として追加できる構成です。実際の資料と判断の変化を中心にまとめます。",
      metrics: [
        { value: "150+", label: "メール作成数" },
        { value: "38", label: "アポイントメント数" },
        { value: "25", label: "成約数" },
      ],
      learning:
        "それまで根性や勢いが重要だと考えていた営業も、相手企業を分析し、論理的に戦略を立てて臨むことが大切だと学びました。",
    },
  },
  {
    ...hanabiShared,
    id: "hanabi-event",
    seriesIndex: "02",
    icon: "map",
    title: "イベント企画・運営",
    category: "Hanabi / Event Planning",
    description: "PRから当日運営、振り返りまでをつなげたイベント設計。",
    tags: ["イベント企画", "運営設計", "コミュニティ"],
    roleLabel: "企画・告知・当日運営",
    visuals: [
      {
        layout: "lead",
        label: "イベントの様子",
        caption: "参加者にイベントルールを説明する様子",
        src: "assets/hanabi-event-presentation.jpg",
        alt: "スクリーンの前でマイクを持ち、参加者にイベントルールを説明する様子",
      },
    ],
    results: [
      { value: "83", label: "開催・企画数" },
      { value: "15,000+", label: "参加者数" },
    ],
    summary: {
      background:
        "日本に広まっていないSTEM教育を子供達に認知してもらい、実際に学んでもらうことが必要でした。",
      concept:
        "STEMを通じてものづくりの楽しさに触れてもらうことを大事にイベント運営を行いました。",
      overview:
        "イベントの目的設定、企画内容、役割分担、当日進行、参加者対応、振り返りまでを横断して担当しました。",
      role: ["イベントマネージャ", "当日責任者", "KPTの作成"],
      process: ["開催目的を定義", "企画内容と当日導線を設計", "告知と運営準備を実施", "参加者や運営メンバーの反応をもとに改善"],
      result:
        "開催数、参加人数、満足度、次回参加、当日の運営改善などを成果として追加できます。企画書から当日の写真までを一連の流れで見せます。",
      metrics: [
        { value: "83", label: "開催数" },
        { value: "15,000+", label: "参加人数" },
      ],
      learning:
        "本当に多種多様な人が参加しているので、人それぞれにあった対応をするのが大事なのだと学びました。",
    },
  },
  {
    ...hanabiShared,
    id: "hanabi-global",
    seriesIndex: "03",
    icon: "folder",
    title: "英語資料・国際対応",
    category: "Hanabi / Global Communication",
    description: "海外の審査員に活動を正確に届けるための英語書類の作成、プレゼンテーション。",
    tags: ["英語", "書類作成", "国際対応"],
    roleLabel: "英文作成・編集・連絡",
    visuals: [],
    outputs: [
      { label: "DOCUMENT", title: "excective summary", url: "#", note: "審査基準に沿ったチームの魅力をまとめた英語資料" },
    ],
    results: [
      { value: "00", label: "英語資料" },
      { value: "00", label: "海外対応" },
    ],
    summary: {
      background:
        "国や文化が異なる相手に対して、チームの活動、必要な情報、依頼内容を誤解なく伝えるための英語コミュニケーションが必要でした。",
      concept:
        "直訳ではなく、相手が判断するために必要な情報と前提を整理し、読み手に合わせて文章の構造と表現を設計しました。",
      overview:
        "英語での申請書、提案書、メール、プレゼン資料などを作成・編集し、チーム内外の確認を通して精度を高めました。",
      role: ["英語書類の作成、編集、校正", "海外チームとの連絡"],
      process: ["審査条件を整理", "日本語でプレ制作", "英語に翻訳", "海外チームとの壁打ち","審査員に提出"],
      result:
        "作成した書類数、対応した国・組織、採択や承認、やり取りの回数などを追加できます。公開可能な範囲で実際の文面を掲載します。",
      metrics: [
        { value: "04", label: "英語資料数" },
        { value: "30,000+", label: "文字数" },
      ],
      learning:
        "日本だと当たり前の前提を、文字数が制限されている中でどう伝えるかが難しいポイントでした。価値観が違う中で自分たちのストロングポイントを表現できたのは本当に貴重な経験でした。",
    },
  },
  {
    ...hanabiShared,
    id: "hanabi-communication",
    seriesIndex: "04",
    icon: "users",
    title: "チーム設計・コミュニケーション",
    category: "Hanabi / Team Communication",
    description: "メンバーが役割を理解し、協力しやすくなるためのチーム運営。",
    tags: ["チーム運営", "ミーティング", "プロジェクト管理"],
    roleLabel: "進行管理・会議設計・情報整理",
    results: [
      { value: "130+", label: "MTG" },
    ],
    summary: {
      background:
        "経験や年齢の異なるメンバーが活動する中で、次の行動が共有される状態をつくる必要がありました。",
      concept:
        "メンバー一人一人にしっかり寄り添うことで、人となりを把握することを大切にしました。",
      overview:
        "ミーティング設計、議事録、タスク整理、役割の可視化、仮入部など、チームが動き続けるための運用を整えました。",
      role: ["アジェンダの設計", "決定事項とタスクの可視化", "意思決定"],
      process: ["新入生を仮入部させる", "知識を手を動かしながらつける", "BS", "渡航、渡航後のFB"],
      result:
        "ミーティング数、意思決定数、タスク完了、参加メンバー、オンボーディングなどの記録を追加できます。運用前後の変化を中心に見せます。",
      metrics: [
        { value: "270+", label: "ミーティング" },
        { value: "50+", label: "参加メンバー" },
      ],
      learning:
        "遠回りと感じるような丁寧なマネジメントをすることが、結果的に1番の近道なんだと学びました。これからの自分のプロジェクトでも、人を大切にしていきたいです。",
    },
  },
  {
    id: "card-game",
    group: "creative",
    icon: "gamepad",
    title: "ZERONIKA",
    category: "ゲームデザイン",
    description: "斬新なゲームシステムを軸としたオリジナルTCG。",
    tags: ["ゲームデザイン", "世界観設計", "グラフィック"],
    tools: ["Notion", "Figma", "Adobe Illustrator"],
    period: "2026.5 - 2026.6",
    roleLabel: "企画・進行・デザイン",
    type: "自主制作",
    visuals: [
      {
        layout: "full",
        label: "カード",
        caption: "青を基調とした属性のユニットカード",
        src: "assets/zeronika-depth-cards.png",
        alt: "ZERONIKAの深淵属性カード8種類を並べた一覧",
      },
      {
        layout: "full",
        label: "カード",
        caption: "黄緑を基調とした属性のユニットカード",
        src: "assets/zeronika-forest-cards.png",
        alt: "ZERONIKAの闘壊属性カード8種類を並べた一覧",
      },
      {
        layout: "full",
        label: "属性カード",
        caption: "赤を基調とした属性のユニットカード",
        src: "assets/zeronika-lava-cards.png",
        alt: "ZERONIKAの修冠属性カード8種類を並べた一覧",
      },
    ],
    outputs: [
      { label: "途中成果", title: "検証用モック / プレ版", url: "#", note: "制作過程のPDFや試作画像を置く場所" },
      { label: "DEMO", title: "デモ・プロトタイプ", url: "#", note: "動くものや動画を置く場所" },
    ],
    results: [
      { value: "10", label: "試遊・検証回数" },
      { value: "100+", label: "カード" },
    ],
    summary: {
      background:
        "授業の合間が暇だと言うことで開発されました。",
      concept:
        "「いままでにないゲームシステム」をコンセプトに制作しました。",
      overview:
        "基本ルール、カード分類、ビジュアルの方向性、世界観を設計しました。今後はプレイテストを通じて、バランス調整やカード追加を進めます。",
      role: [
        "ゲームルールの設計",
        "カード情報の見せ方",
        "世界観の構築",
      ],
      process: [
        "目指すプレイ体験とゲームの流れを定義",
        "カードの種類、行動、勝利条件をスケッチ",
        "テスト用カードを作成して試遊",
        "わかりにくさ、テンポ、駆け引きをもとに調整",
      ],
      metrics: [
        { value: "100+", label: "カード数" },
        { value: "10", label: "試遊回数" },
        { value: "04", label: "ルール案" },
      ],
      learning:
        "斬新なゲームルールを今回は「ひらめき」で思いついてしまいました。再現性のあるひらめきを追求したいです。",
    },
  },
  {
    id: "lemon-pie-and-tyrannosaurus",
    group: "creative",
    icon: "gamepad",
    title: "レモンパイとティラノサウルス",
    category: "ボードゲームデザイン",
    description: "オリジナルボードゲーム「レモンパイとティラノサウルス」の企画・制作。",
    tags: ["ゲームデザイン", "ルール設計", "グラフィック"],
    tools: ["Notion", "Figma", "Adobe Illustrator"],
    period: "2026.5 - 2026.6",
    roleLabel: "企画・ルール設計・デザイン",
    type: "自主制作",
    results: [
      { value: "00", label: "試作数" },
      { value: "00", label: "試遊回数" },
    ],
    summary: {
      background:
        "偶然生まれた二つの単語をどうゲームに落とし込むかが課題でした。",
      concept:
        "かわいいテイストなのにしたたかでないと勝てないゲームをテーマに作成しました。",
      overview:
        "ゲームの目的、進行、勝利条件、コンポーネント、グラフィックを設計し、試作と試遊を重ねました。",
      role: ["ゲームのテーマと基本ルールの設計", "カードや盤面などの構成検討", "試作、試遊、ルール調整"],
      process: ["テーマと目指す体験を整理", "基本ルールと勝利条件を設計", "紙の試作品を制作", "試遊をもとにテンポとバランスを調整"],
      metrics: [
        { value: "04", label: "試作数" },
        { value: "01", label: "試遊回数" },
        { value: "30+", label: "コンポーネント" },
      ],
      learning:
        "テーマのおもしろさを、ルールとして体験できる形にすることの大切さを学びました。",
    },
  },
  {
    id: "creative-goods",
    group: "creative",
    icon: "box",
    title: "404 CAT FOUND",
    category: "イラスト",
    description: "ねこのイラスト制作。",
    tags: ["イラスト", "プロダクトデザイン", "ブランディング"],
    tools: ["Notion", "Figma", "Google Workspace"],
    period: "2024.4 - 2026.6",
    roleLabel: "企画・進行・デザイン",
    type: "自主制作",
    results: [
      { value: "80+", label: "ラフ / デザイン案" },
    ],
    summary: {
      background:
        "息抜きで描いていた絵がいつの間にかプロジェクトへと膨らんでいました。",
      concept:
        "とにかく「それかわいいね」と言われるねこを描くことを心がけました。",
      overview:
        "。",
      role: [
        "モチーフやイラスト案の制作",
        "グッズ化に向けたレイアウト調整",
        "パッケージ、価格、展示方法の検討",
      ],
      process: [
        "絵を描く"
      ],
      result:
        "小さなブランドとして展開できるグッズの方向性を整理できました。今後は制作数、販売数、人気カテゴリなどの数字を追加できます。",
      metrics: [
        { value: "30+", label: "イラスト数" },

      ],
      learning:
        "これからも絵を描き続けます。",
    },
  },
  {
    id: "web-ai-tools",
    group: "engineering",
    icon: "layout",
    title: "Web / AIツール",
    category: "Web開発",
    description: "Web技術とAIを使って、日常の作業を助けるツールを試作。",
    tags: ["HTML", "CSS", "JavaScript", "AI"],
    tools: ["Notion", "Figma", "Google Workspace"],
    period: "20XX.X - 20XX.X",
    roleLabel: "企画・進行・デザイン",
    type: "自主制作",
    outputs: [
      { label: "途中成果", title: "検証用モック / プレ版", url: "#", note: "制作過程のPDFや試作画像を置く場所" },
      { label: "DEMO", title: "デモ・プロトタイプ", url: "#", note: "動くものや動画を置く場所" },
    ],
    results: [
      { value: "00", label: "プロトタイプ数" },
      { value: "00", label: "改善・検証回数" },
    ],
    summary: {
      background:
        "繰り返し作業を減らしたり、考えを整理したりする小さなツールには価値があります。大きなシステムではなく、すぐ試せて役に立つプロトタイプをつくることを重視しました。",
      concept:
        "ひとつの作業を少し楽にする、軽量なWebツールをつくることを目指しました。AIは主役ではなく、文章化、整理、比較、判断を助ける補助として使う方針です。",
      overview:
        "HTML、CSS、JavaScriptを使って、ブラウザ上で動く試作品を制作しました。使いやすさ、素早い改善、わかりやすい画面構成を重視しています。",
      role: [
        "ユーザーフローと画面構成の設計",
        "プレーンなWeb技術でのフロントエンド実装",
        "AIをどこに使うと役立つかの検証",
      ],
      process: [
        "作業の中で繰り返し発生する面倒さを発見",
        "最小限で役に立つ操作フローを設計",
        "ブラウザで動くプロトタイプを実装",
        "実際の利用シーンを試しながらUIを改善",
      ],
      result:
        "小さく試せる形にしたことで、アイデアの価値を早く確認できました。今後は利用者数、作業時間の短縮率、完了セッション数などを記録できます。",
      metrics: [
        { value: "00", label: "ツール数" },
        { value: "00", label: "利用者数" },
        { value: "00%", label: "時間短縮" },
      ],
      learning:
        "便利なソフトウェアは、使う人の注意力を大切にするところから始まります。小さくても目的が明確なツールは、大きく曖昧な仕組みより役に立つことがあります。",
    },
  },
  {
    id: "booth-design",
    group: "experiments",
    icon: "map",
    title: "ブースデザイン",
    category: "展示",
    description: "商品を販売・発表するためのブース体験を設計。",
    tags: ["空間設計", "ビジュアル設計", "企画"],
    tools: ["Notion", "Figma", "Google Workspace"],
    period: "20XX.X - 20XX.X",
    roleLabel: "企画・進行・デザイン",
    type: "自主制作",
    outputs: [
      { label: "途中成果", title: "検証用モック / プレ版", url: "#", note: "制作過程のPDFや試作画像を置く場所" },
      { label: "DEMO", title: "デモ・プロトタイプ", url: "#", note: "動くものや動画を置く場所" },
    ],
    results: [
      { value: "00", label: "レイアウト案" },
      { value: "00", label: "設営・導線検討" },
    ],
    summary: {
      background:
        "展示会では、来場者が立ち止まるかどうかを短い時間で判断します。何を見てほしいのか、どこで話しかけるのか、どう商品を理解してもらうのかを設計する必要がありました。",
      concept:
        "遠くから気づき、近づくと内容がわかり、自然に会話が生まれるブースを目指しました。空間全体を、来場者とのコミュニケーションのためのインターフェースとして考えました。",
      overview:
        "ブースのレイアウト、商品の配置、サイン、視線誘導、スタッフの動き方を整理しました。雰囲気づくりと、設営・販売・説明のしやすさを両立する計画です。",
      role: [
        "ブースレイアウトと展示優先度の設計",
        "サイン、商品配置、見え方の整理",
        "設営時間やスタッフ導線を踏まえた計画",
      ],
      process: [
        "来場者に最初に見てほしいものを定義",
        "商品群と人の動きをマッピング",
        "遠距離・中距離・近距離での見え方を検討",
        "設営条件やスペース制約に合わせて調整",
      ],
      result:
        "商品を見つけやすく、説明しやすいブース計画をつくれました。今後は来場者数、販売数、会話数などを成果として入れられます。",
      metrics: [
        { value: "00", label: "来場者数" },
        { value: "00", label: "販売数" },
        { value: "00", label: "展示物数" },
      ],
      learning:
        "空間もひとつのUIです。よい空間設計は、来場者の迷いを減らし、自然な次の行動をつくるものだと学びました。",
    },
  },
  {
    id: "brand-logo-design",
    group: "creative",
    icon: "pen",
    title: "ブランド / ロゴデザイン",
    category: "ブランディング",
    description: "プロジェクトやチームのためのビジュアルアイデンティティ制作。",
    tags: ["ロゴ", "タイポグラフィ", "アイデンティティ"],
    tools: ["Notion", "Figma", "Google Workspace"],
    period: "20XX.X - 20XX.X",
    roleLabel: "企画・進行・デザイン",
    type: "自主制作",
    outputs: [
      { label: "途中成果", title: "検証用モック / プレ版", url: "#", note: "制作過程のPDFや試作画像を置く場所" },
      { label: "DEMO", title: "デモ・プロトタイプ", url: "#", note: "動くものや動画を置く場所" },
    ],
    results: [
      { value: "00", label: "ロゴ / 展開案" },
      { value: "00", label: "使用シーン検証" },
    ],
    summary: {
      background:
        "プロジェクトは、わかりやすい見た目や名前の扱いがあると記憶されやすくなります。長い説明の前に、その活動らしさが伝わる視覚的な入口が必要でした。",
      concept:
        "シンプルで、展開しやすく、プロジェクトの目的とつながるアイデンティティを目指しました。小さなアイコン、資料、SNS、物理物など、複数の場面で使えることを重視しました。",
      overview:
        "ロゴ、文字組み、色、使い方のルールを検討しました。装飾ではなく、活動の方向性をそろえるための道具としてのブランディングです。",
      role: [
        "プロジェクトのトーン、対象者、使用場面の整理",
        "ロゴ案のスケッチと方向性の比較",
        "色、文字、展開ルールの簡易設計",
      ],
      process: [
        "キーワードと参考イメージを収集",
        "ロゴの形とタイポグラフィを複数案検討",
        "アイコン、資料、SNSなど実際の使用場面でテスト",
        "使いやすい方向性に絞ってブラッシュアップ",
      ],
      result:
        "プロジェクトを一貫して見せるための土台をつくれました。今後は制作したロゴ数、展開物数、利用シーン、フィードバックなどを追加できます。",
      metrics: [
        { value: "00", label: "ロゴ案" },
        { value: "00", label: "展開物" },
        { value: "00", label: "使用場面" },
      ],
      learning:
        "ブランディングは見た目を飾るだけではなく、関わる人の認識をそろえるための道具です。よいロゴは、派手なものではなく、継続して使えるものだと学びました。",
    },
  },
].filter((work) => !["web-ai-tools", "booth-design", "brand-logo-design"].includes(work.id));

/* ==================================================
   小さな補助関数
   描画処理を読みやすくするために分けています。
   ================================================== */
const createTagMarkup = (tags) => tags.map((tag) => `<span class="work-tag">${tag}</span>`).join("");

const getIcon = (name) => window.portfolioIcons?.[name] ?? "";

/*
 * 完成ビジュアルの初期スロットです。
 * 作品ごとに変えたい場合は、works 内の各作品に visuals 配列を追加してください。
 * src を指定するとプレースホルダーが画像に置き換わります。
 */
const defaultVisuals = [
  {
    layout: "lead",
    label: "完成ビジュアル",
    caption: "作品の全体像が伝わる写真・画面",
  },
  {
    layout: "portrait",
    label: "使用シーン",
    caption: "人や場所との関わりがわかる記録",
  },
  {
    layout: "wide",
    label: "展開・バリエーション",
    caption: "成果物を横断して見せるビジュアル",
  },
];

const setCurrentYear = () => {
  const yearElement = document.querySelector("#current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
};

const hydrateIcons = () => {
  document.querySelectorAll("[data-icon]").forEach((element) => {
    const iconName = element.dataset.icon;
    element.innerHTML = getIcon(iconName);
  });
};

/* ==================================================
   一覧ページの描画
   ================================================== */
const renderWorkGroupIntro = (groupId) => {
  const intro = document.querySelector("#work-group-intro");
  if (!intro) return;

  const group = workGroups.find((item) => item.id === groupId);
  if (!group || group.id === "all") {
    intro.innerHTML = "";
    intro.removeAttribute("data-group");
    intro.hidden = true;
    return;
  }

  intro.hidden = false;
  intro.dataset.group = group.id;
  intro.innerHTML = `
    <p class="section-label">カテゴリ</p>
    <div>
      <h3>${group.title}</h3>
      <p>${group.description}</p>
    </div>
  `;
};

const createWorkCardMarkup = (work) => `
  <a class="work-card${work.featured ? " work-card--featured" : ""}" href="work.html?id=${work.id}" aria-label="${work.title}のケーススタディを見る">
    <div class="work-thumb" data-work-id="${work.id}" data-work-group="${work.group}" aria-hidden="true">
      <span class="work-thumb-index">${work.seriesIndex ?? String(works.indexOf(work) + 1).padStart(2, "0")}</span>
      <span class="work-thumb-icon">${getIcon(work.icon ?? "folder")}</span>
      <span class="work-thumb-name">${work.title}</span>
    </div>
    <div class="work-card-body">
      <p class="work-category">${work.featured ? `Featured Work / ${work.series ?? work.category}` : work.category}</p>
      <h3>${work.title}</h3>
      <p>${work.description}</p>
      <div class="tag-list">${createTagMarkup(work.tags)}</div>
      <span class="card-link">詳細を見る${getIcon("arrowRight")}</span>
    </div>
  </a>
`;

const renderWorkCards = (groupId = "all") => {
  const grid = document.querySelector("#works-grid");
  if (!grid) return;

  const visibleWorks = groupId === "all" ? works : works.filter((work) => work.group === groupId);
  if (!visibleWorks.length) {
    grid.dataset.activeGroup = groupId;
    grid.innerHTML = `<p class="works-empty">まだなにもないようです</p>`;
    renderWorkGroupIntro(groupId);
    return;
  }

  const featuredWork = visibleWorks.find((work) => work.featured);
  const railWorks = featuredWork ? visibleWorks.filter((work) => work !== featuredWork) : visibleWorks;
  const groupLabel = workGroups.find((group) => group.id === groupId)?.label ?? "制作物";

  grid.dataset.activeGroup = groupId;
  grid.innerHTML = `
    ${featuredWork ? createWorkCardMarkup(featuredWork) : ""}
    ${
      railWorks.length
        ? `<div class="work-card-rail" tabindex="0" aria-label="${groupLabel}の実績一覧">
            ${railWorks.map(createWorkCardMarkup).join("")}
          </div>`
        : ""
    }
  `;

  renderWorkGroupIntro(groupId);
};

const activateWorkGroup = (groupId, focusTab = false, syncUrl = false) => {
  const tabs = Array.from(document.querySelectorAll(".work-tab"));
  const selectedTab = tabs.find((tab) => tab.dataset.workGroup === groupId);
  if (!selectedTab) return;

  tabs.forEach((tab) => {
    const isSelected = tab === selectedTab;
    tab.setAttribute("aria-selected", String(isSelected));
    tab.tabIndex = isSelected ? 0 : -1;
  });

  const grid = document.querySelector("#works-grid");
  if (grid) grid.setAttribute("aria-labelledby", selectedTab.id);
  renderWorkCards(groupId);

  // 選択中のカテゴリをURLに残し、再読み込みや共有でも同じ一覧を開けるようにする。
  if (syncUrl) {
    const url = new URL(window.location.href);
    if (groupId === "all") {
      url.searchParams.delete("group");
    } else {
      url.searchParams.set("group", groupId);
    }
    window.history.replaceState({}, "", url);
  }

  if (focusTab) selectedTab.focus();
};

const renderWorkTabs = () => {
  const tabList = document.querySelector("#work-tabs");
  if (!tabList) return;

  tabList.innerHTML = workGroups
    .map(
      (group, index) => `
        <button
          class="work-tab"
          id="work-tab-${group.id}"
          type="button"
          role="tab"
          data-work-group="${group.id}"
          aria-controls="works-grid"
          aria-selected="${index === 0}"
          tabindex="${index === 0 ? 0 : -1}"
        >${group.label}</button>
      `
    )
    .join("");

  const tabs = Array.from(tabList.querySelectorAll(".work-tab"));
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activateWorkGroup(tab.dataset.workGroup, false, true));
    tab.addEventListener("keydown", (event) => {
      let nextIndex = index;
      if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
      if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = tabs.length - 1;
      if (nextIndex === index) return;

      event.preventDefault();
      activateWorkGroup(tabs[nextIndex].dataset.workGroup, true, true);
    });
  });
};

/* ==================================================
   詳細ページの描画
   ================================================== */
const renderVisualItem = (visual, index) => {
  const media = visual.src
    ? `<img src="${visual.src}" alt="${visual.alt ?? visual.label}" />`
    : `
        <span class="visual-slot-index">${String(index + 1).padStart(2, "0")}</span>
        <span class="visual-slot-label">${visual.label}</span>
      `;

  return `
    <figure class="visual-item visual-item--${visual.layout ?? "detail"}">
      <div class="visual-placeholder">${media}</div>
      <figcaption>
        <strong>${visual.label}</strong>
        <span>${visual.caption ?? ""}</span>
      </figcaption>
    </figure>
  `;
};

const renderMainVisual = (work) => {
  if (work.heroImage) {
    return `<img src="${work.heroImage}" alt="${work.heroAlt ?? `${work.title}のキービジュアル`}" />`;
  }

  return `
    <span class="main-visual-label">Key Visual / ${work.seriesIndex ?? "Project"}</span>
    <span class="main-visual-icon">${getIcon(work.icon ?? "folder")}</span>
    <strong>${work.title}</strong>
  `;
};

const renderArtifactItem = (output, index) => {
  const content = `
    <span class="artifact-index">${String(index + 1).padStart(2, "0")}</span>
    <span class="artifact-copy">
      <small>${output.label}</small>
      <strong>${output.title}</strong>
      <span>${output.note}</span>
    </span>
    ${output.url && output.url !== "#" ? getIcon("arrowRight") : ""}
  `;

  return output.url && output.url !== "#"
    ? `<a class="artifact-item" href="${output.url}">${content}</a>`
    : `<div class="artifact-item">${content}</div>`;
};

const setupChapterNavigation = () => {
  const links = Array.from(document.querySelectorAll(".chapter-navigation a"));
  const chapters = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);
  if (!links.length || !chapters.length || !("IntersectionObserver" in window)) return;

  const setCurrentChapter = (chapterId) => {
    links.forEach((link) => {
      if (link.getAttribute("href") === `#${chapterId}`) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleChapter = entries.find((entry) => entry.isIntersecting);
      if (visibleChapter) setCurrentChapter(visibleChapter.target.id);
    },
    { rootMargin: "-22% 0px -62%", threshold: 0 }
  );

  chapters.forEach((chapter) => observer.observe(chapter));
};

const renderWorkDetail = () => {
  const detail = document.querySelector("#work-detail");
  if (!detail) return;

  // ブラウザ表示とリンク共有に使われるメタ情報を作品データに揃えます。
  const updatePageMetadata = ({ title, description, robots = "index, follow" }) => {
    const pageTitle = `${title} | Motoki Tatsuta`;
    const metadata = {
      'meta[name="description"]': description,
      'meta[name="robots"]': robots,
      'meta[property="og:title"]': pageTitle,
      'meta[property="og:description"]': description,
      'meta[property="og:url"]': window.location.href,
      'meta[name="twitter:title"]': pageTitle,
      'meta[name="twitter:description"]': description,
    };

    document.title = pageTitle;
    Object.entries(metadata).forEach(([selector, content]) => {
      document.querySelector(selector)?.setAttribute("content", content);
    });
  };

  const params = new URLSearchParams(window.location.search);
  const requestedId = params.get("id");
  const currentId = requestedId === "hanabi" ? "hanabi-sales" : requestedId;
  const currentIndex = works.findIndex((work) => work.id === currentId);
  const work = works[currentIndex];

  if (!work) {
    detail.innerHTML = `
      <section class="not-found">
        <p class="section-label">見つかりませんでした</p>
        <h1>制作物が見つかりません</h1>
        <p>URLの id に対応する制作物が見つかりませんでした。</p>
        <a class="button primary" href="index.html#works">制作物一覧へ戻る</a>
      </section>
    `;
    updatePageMetadata({
      title: "制作物が見つかりません",
      description: "指定された制作物は見つかりませんでした。Motoki Tatsutaの制作物一覧をご覧ください。",
      robots: "noindex, follow",
    });
    return;
  }

  const relatedWorks = works.filter((item) => item.group === work.group);
  const relatedIndex = relatedWorks.findIndex((item) => item.id === work.id);
  const nextWork =
    relatedWorks.length > 1 ? relatedWorks[(relatedIndex + 1) % relatedWorks.length] : works[(currentIndex + 1) % works.length];
  const backLink = document.querySelector(".back-link");
  if (backLink) backLink.href = `index.html?group=${work.group}#works`;
  updatePageMetadata({ title: work.title, description: work.description });

  const seriesNavigation = work.series
    ? `
        <nav class="series-navigation" aria-label="${work.series}内のケーススタディ">
          <div class="series-navigation-links">
            ${relatedWorks
              .map(
                (item) => `
                  <a href="work.html?id=${item.id}"${item.id === work.id ? ' aria-current="page"' : ""}>
                    <span>${item.seriesIndex}</span>${item.title}
                  </a>
                `
              )
              .join("")}
          </div>
        </nav>
      `
    : "";

  const metrics = work.summary.metrics ?? work.results;
  const outputs = work.outputs ?? [];
  const artifactSection = outputs.length
    ? `
        <div class="artifact-section">
          <div class="artifact-heading">
            <p class="section-label">Artifacts / Demo</p>
            <h3>過程で生まれたもの</h3>
          </div>
          <div class="artifact-list">
            ${outputs.map(renderArtifactItem).join("")}
          </div>
        </div>
      `
    : "";
  const visuals = work.visuals ?? defaultVisuals;
  const visualSection = visuals.length
    ? `
        <section class="visual-section" aria-labelledby="visual-heading">
          <div class="visual-section-heading">
            <p class="section-label">Final Output</p>
            <h2 id="visual-heading">完成したもの</h2>
          </div>
          <div class="visual-grid">
            ${visuals.map(renderVisualItem).join("")}
          </div>
        </section>
      `
    : "";

  detail.innerHTML = `
    <article class="project-article">
      <section class="project-header">
        <div class="project-copy">
          <p class="section-label">${work.series ? `${work.series} / ${work.seriesIndex}` : work.category}</p>
          <h1>${work.title}</h1>
          <p class="project-lead">${work.description}</p>
          <div class="tag-list">${createTagMarkup(work.tags)}</div>
        </div>
        <dl class="project-meta" aria-label="プロジェクト情報">
          <div>
            <dt>使用ツール</dt>
            <dd>${work.tools.join(" / ")}</dd>
          </div>
          <div>
            <dt>期間</dt>
            <dd>${work.period}</dd>
          </div>
          <div>
            <dt>担当</dt>
            <dd>${work.roleLabel}</dd>
          </div>
          <div>
            <dt>種別</dt>
            <dd>${work.type}</dd>
          </div>
        </dl>
      </section>

      ${seriesNavigation}

      <div class="main-visual" data-work-group="${work.group}" aria-label="${work.title}のメインビジュアル">
        ${renderMainVisual(work)}
      </div>

      <section class="case-study-layout" aria-label="ケーススタディ本文">
        <nav class="chapter-navigation" aria-label="ケーススタディ目次">
          <p class="section-label">Case Study</p>
          <a href="#chapter-problem" aria-current="true"><span>01</span>課題</a>
          <a href="#chapter-concept"><span>02</span>判断</a>
          <a href="#chapter-action"><span>03</span>実行</a>
          <a href="#chapter-process"><span>04</span>過程</a>
          <a href="#chapter-result"><span>05</span>結果</a>
          <a href="#chapter-learning"><span>06</span>学び</a>
        </nav>

        <div class="story-flow">
          <section id="chapter-problem" class="story-chapter story-chapter--problem">
            <p class="chapter-number">01 / Problem</p>
            <h2>なぜ、この取り組みが必要だったか。</h2>
            <p class="story-lead">${work.summary.background}</p>
          </section>

          <section id="chapter-concept" class="story-chapter story-chapter--concept">
            <p class="chapter-number">02 / Decision</p>
            <h2>何を大切にして、どう考えたか。</h2>
            <p class="story-lead">${work.summary.concept}</p>
          </section>

          <section id="chapter-action" class="story-chapter story-chapter--action">
            <p class="chapter-number">03 / Action</p>
            <h2>何を実行したか。</h2>
            <p class="story-lead">${work.summary.overview}</p>
            <ol class="role-list">
              ${work.summary.role
                .map(
                  (item, index) => `
                    <li><span>${String(index + 1).padStart(2, "0")}</span><strong>${item}</strong></li>
                  `
                )
                .join("")}
            </ol>

            ${artifactSection}
          </section>

          <section id="chapter-process" class="story-chapter story-chapter--process">
            <p class="chapter-number">04 / Process</p>
            <h2>活動の軌跡</h2>
            <ol class="process-timeline">
              ${work.summary.process
                .map(
                  (item, index) => `
                    <li>
                      <span>${String(index + 1).padStart(2, "0")}</span>
                      <p>${item}</p>
                    </li>
                  `
                )
                .join("")}
            </ol>
          </section>

          <section id="chapter-result" class="story-chapter story-chapter--result">
            <p class="chapter-number">05 / Result</p>
            <h2>数字で見る実績。</h2>
            <div class="result-metrics">
              ${metrics
                .map((metric) => {
                  const displayedValue = /^0+$/.test(String(metric.value).trim()) ? "—" : metric.value;
                  return `
                    <div>
                      <strong>${displayedValue}</strong>
                      <span>${metric.label}</span>
                    </div>
                  `;
                })
                .join("")}
            </div>
          </section>

          <section id="chapter-learning" class="story-chapter story-chapter--learning">
            <p class="chapter-number">06 / Learning</p>
            <h2>この経験を通して得た学び。</h2>
            <blockquote>${work.summary.learning}</blockquote>
          </section>
        </div>
      </section>

      ${visualSection}

      <section class="next-work">
        <p class="section-label">${work.series ? `${work.series}の次のケース` : "次の制作物"}</p>
        <h2>${nextWork.title}</h2>
        <a class="next-work-link" href="work.html?id=${nextWork.id}">次のケーススタディを見る${getIcon("arrowRight")}</a>
      </section>
    </article>
  `;

  requestAnimationFrame(setupChapterNavigation);
};

/* ==================================================
   初期化
   ================================================== */
setCurrentYear();
renderWorkTabs();
const requestedWorkGroup = new URLSearchParams(window.location.search).get("group");
const initialWorkGroup = workGroups.some((group) => group.id === requestedWorkGroup) ? requestedWorkGroup : "all";
activateWorkGroup(initialWorkGroup);
renderWorkDetail();
hydrateIcons();
