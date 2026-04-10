import { AlertTriangle, Clock, FileX, Users, Building2, FileText } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import FadeIn from "./FadeIn";

const problems: { icon: LucideIcon; title: string; desc: string; highlight: boolean }[] = [
  {
    icon: AlertTriangle,
    title: "入札情報が多すぎて追いきれない",
    desc: "毎日数百件の公告。全部チェックするのは不可能。結果、自社に合う案件を見逃していませんか？",
    highlight: true,
  },
  {
    icon: Clock,
    title: "情報収集だけで1日が終わる",
    desc: "複数サイトの巡回、条件設定、結果の確認…。営業活動の時間がどんどん削られていませんか？",
    highlight: true,
  },
  {
    icon: FileX,
    title: "データをCSVで出力できない",
    desc: "せっかく見つけた案件情報を、社内共有や分析のために手作業で転記していませんか？",
    highlight: true,
  },
  {
    icon: Users,
    title: "営業進捗が属人化している",
    desc: "担当者の頭の中やExcelにしか情報がなく、チームで共有できていませんか？",
    highlight: false,
  },
  {
    icon: Building2,
    title: "競合の動向がわからない",
    desc: "どの競合がどの案件に入札しているか、把握できていますか？",
    highlight: false,
  },
  {
    icon: FileText,
    title: "見積作成に時間がかかりすぎる",
    desc: "メーカー見積のPDFを見ながら、自社フォーマットに手入力していませんか？",
    highlight: false,
  },
];

export default function Problems() {
  return (
    <section id="problems" className="relative overflow-hidden bg-bg-white py-28 md:py-36">
      <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-red-50/60 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-5 py-2 text-xs font-bold tracking-wider text-red-500">
            <AlertTriangle className="h-3.5 w-3.5" />
            PROBLEMS
          </span>
          <h2 className="mt-6 text-3xl font-black tracking-tight text-gray-900 md:text-5xl">
            入札情報ツール、
            <br className="sm:hidden" />
            こんな<span className="text-red-500">不満</span>ありませんか？
          </h2>
          <p className="mt-4 text-base text-gray-500">
            既存ツールを使っていても解決しきれない課題
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:mt-20">
          {problems.map((p, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className={`card-lift group relative h-full overflow-hidden rounded-2xl border p-8 ${
                p.highlight
                  ? "border-bright-green/30 bg-white shadow-sm"
                  : "border-gray-100 bg-white shadow-sm"
              }`}>
                {p.highlight && (
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-bright-green to-accent-yellow" />
                )}
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                  p.highlight ? "bg-gradient-to-br from-bright-green/10 to-accent-yellow/10" : "bg-gray-50"
                }`}>
                  <p.icon className={`h-5 w-5 ${p.highlight ? "text-bright-green" : "text-gray-400"}`} strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-base font-bold text-gray-900">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{p.desc}</p>
                {p.highlight && (
                  <span className="mt-5 inline-flex items-center rounded-full bg-bright-green/8 px-3 py-1 text-[11px] font-bold text-dark-green">
                    よくある声
                  </span>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Banner - light version */}
        <FadeIn className="mt-16 md:mt-20">
          <div className="relative overflow-hidden rounded-3xl border border-bright-green/20 bg-gradient-to-r from-light-green to-white p-10 text-center md:p-16">
            <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />
            <p className="relative text-xl font-black leading-snug text-gray-900 md:text-3xl">
              情報は「たくさん見る」時代から、
              <br className="sm:hidden" />
              「必要なものだけ届く」時代へ。
            </p>
            <p className="relative mt-4 text-sm text-gray-500 md:text-base">
              GIRAFFEは、入札情報の収集から営業管理・受注まで一気通貫で支援します。
            </p>
            <a href="#features" className="relative mt-6 inline-flex items-center gap-2 rounded-full bg-dark-green px-7 py-3 text-sm font-bold text-white shadow-lg shadow-dark-green/15 transition-all hover:bg-bright-green">
              機能を見る &darr;
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
