import FadeIn from "./FadeIn";

const screens = [
  {
    title: "ダッシュボード",
    subtitle: "経営指標を一画面で",
    desc: "案件数・営業実績・売上推移をリアルタイム表示。AIが御社の受注傾向を学習し、勝率の高い案件をレコメンド。",
    image: "/screenshots/dashboard.png",
  },
  {
    title: "公募案件検索",
    subtitle: "必要な案件を瞬時に",
    desc: "全国100〜200自治体の案件を毎日自動収集。自治体・業種・金額・工期で柔軟にフィルタリング。",
    image: "/screenshots/dashboard2.png",
  },
  {
    title: "得意先・顧客分析",
    subtitle: "競合と類似案件を把握",
    desc: "得意先ごとの発注傾向・入札参加企業を一覧で比較分析。AIが類似案件を自動検出し、類似度スコアで優先度を可視化。",
    image: "/screenshots/analysis.png",
  },
  {
    title: "営業記録",
    subtitle: "状態遷移を自動追跡・通知",
    desc: "公募→入札→落札→工事の状態遷移を自動追跡し、フェーズごとに通知。見逃しゼロで受注機会を最大化。",
    image: "/screenshots/state-transition.png",
  },
  {
    title: "AIエージェント",
    subtitle: "聞くだけで答えが出る",
    desc: "「今週の埼玉県の案件は？」と聞くだけ。蓄積された営業データを活用し、戦略的な提案をAIがサポート。",
    image: "/screenshots/agent.png",
  },
  {
    title: "売上分析",
    subtitle: "チーム全体の成果を可視化",
    desc: "営業記録数・売上合計・受注数・受注率を一画面でKPI表示。担当者別の売上推移グラフでパフォーマンスを把握。",
    image: "/screenshots/analytics.png",
  },
  {
    title: "見積変換",
    subtitle: "PDF見積を自動Excel化",
    desc: "メーカーのPDF見積書を自社Excelテンプレートへ自動変換。ドラッグ&ドロップだけで見積作成が完了。",
    image: "/screenshots/estimates.png",
  },
];

export default function Screenshots() {
  return (
    <section id="product" className="relative overflow-hidden bg-white py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-bright-green/20 bg-light-green px-5 py-2 text-xs font-bold tracking-wider text-dark-green">
            PRODUCT
          </span>
          <h2 className="mt-6 text-3xl font-black tracking-tight text-gray-900 md:text-5xl">
            直感的に使えるプロダクト
          </h2>
        </FadeIn>

        {/* Demo Video - light version */}
        <FadeIn className="mt-14 md:mt-20">
          <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-light-green/50 to-white p-8 md:p-14">
            <div className="pointer-events-none absolute inset-0 dot-pattern opacity-20" />
            <div className="relative text-center">
              <h3 className="text-xl font-black text-gray-900 md:text-3xl">
                2分でわかるGIRAFFE
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                実際の操作画面をご覧ください
              </p>
            </div>
            <div className="relative mt-8 overflow-hidden rounded-2xl border border-gray-200 shadow-2xl shadow-gray-300/30">
              <video className="w-full" controls playsInline preload="metadata">
                <source src="/demo.mp4" type="video/mp4" />
                お使いのブラウザは動画再生に対応していません。
              </video>
            </div>
          </div>
        </FadeIn>

        {/* Screenshot cards */}
        <div className="mt-20 space-y-24 md:mt-28 md:space-y-32">
          {screens.map((s, i) => (
            <div
              key={i}
              className={`flex flex-col items-center gap-8 md:gap-14 ${
                i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <FadeIn direction={i % 2 === 0 ? "right" : "left"} className="w-full md:w-[320px] md:flex-shrink-0">
                <div className="text-center md:text-left">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-bright-green to-dark-green text-xs font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-2xl font-black text-gray-900 md:text-3xl">{s.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-bright-green">{s.subtitle}</p>
                  <p className="mt-4 text-sm leading-relaxed text-gray-500">{s.desc}</p>
                </div>
              </FadeIn>

              <FadeIn direction={i % 2 === 0 ? "left" : "right"} delay={150} className="w-full flex-1">
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl shadow-gray-200/50 transition-all duration-500 hover:shadow-2xl hover:shadow-bright-green/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.image} alt={`${s.title}の画面`} className="w-full" loading="lazy" />
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
