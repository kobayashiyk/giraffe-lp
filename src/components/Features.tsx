import { Sparkles, Search, BarChart3, ClipboardList, Download, FileSpreadsheet, MessageSquare, TrendingUp, Landmark } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import FadeIn from "./FadeIn";

const features: { icon: LucideIcon; title: string; desc: string; badge: string | null }[] = [
  {
    icon: Sparkles,
    title: "AIレコメンド",
    desc: "御社の受注傾向を学習し、勝率の高い案件を自動でピックアップ。毎朝おすすめ案件が届きます。",
    badge: "人気",
  },
  {
    icon: Search,
    title: "案件一覧・検索",
    desc: "工事落札・公告・設計を横断検索。自治体・業種・金額で柔軟にフィルタリング。",
    badge: null,
  },
  {
    icon: BarChart3,
    title: "案件分析・入札情報",
    desc: "入札企業・落札金額・類似案件をワンストップで表示。競合分析も自動化。",
    badge: null,
  },
  {
    icon: ClipboardList,
    title: "営業記録管理",
    desc: "進捗ステータス・温度ランク・金額・担当者を一元管理。チーム全体の動きが見える。",
    badge: null,
  },
  {
    icon: Download,
    title: "CSV・Excelエクスポート",
    desc: "案件情報・営業データをCSV/Excelで自由に出力。社内共有や自社分析に活用できます。",
    badge: "新機能",
  },
  {
    icon: FileSpreadsheet,
    title: "見積自動変換",
    desc: "メーカーPDF見積を自社Excelテンプレートに自動変換。手入力の手間をゼロに。",
    badge: "新機能",
  },
  {
    icon: MessageSquare,
    title: "AIエージェント",
    desc: "「今週の埼玉県の案件は？」と聞くだけ。自然言語で案件を検索・分析できます。",
    badge: null,
  },
  {
    icon: TrendingUp,
    title: "担当者別売上分析",
    desc: "営業記録数・売上合計・受注率を担当者別にグラフ表示。マネジメントの意思決定を支援。",
    badge: null,
  },
  {
    icon: Landmark,
    title: "取引先管理",
    desc: "発注者・落札企業の情報を蓄積・活用。取引先DBとして成長し続けます。",
    badge: null,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-white py-28 md:py-36">
      {/* Decorative */}
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-light-green/50 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-bright-green/20 bg-light-green px-5 py-2 text-xs font-bold tracking-wider text-dark-green">
            <Sparkles className="h-3.5 w-3.5" />
            FEATURES
          </span>
          <h2 className="mt-6 text-3xl font-black tracking-tight text-gray-900 md:text-5xl">
            「探す」から「届く」へ
          </h2>
          <p className="mt-4 text-base text-gray-500">
            入札情報の検索だけではありません。発見から受注まで、営業活動の全てをカバーします。
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:mt-20">
          {features.map((f, i) => (
            <FadeIn key={i} delay={i * 60}>
              <div className="card-lift group relative h-full overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                {/* Top accent line on hover */}
                <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-bright-green to-accent-yellow transition-transform duration-500 group-hover:scale-x-100" />

                {f.badge && (
                  <span className={`absolute top-6 right-6 rounded-full px-3 py-1 text-[10px] font-bold text-white ${
                    f.badge === "新機能"
                      ? "bg-gradient-to-r from-blue-500 to-violet-500"
                      : "bg-gradient-to-r from-bright-green to-dark-green"
                  }`}>
                    {f.badge}
                  </span>
                )}

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-light-green to-white transition-transform duration-300 group-hover:scale-110">
                  <f.icon className="h-6 w-6 text-dark-green" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 text-base font-bold text-gray-900">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{f.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
