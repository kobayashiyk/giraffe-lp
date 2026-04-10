import { Check, ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";

const plans = [
  {
    name: "スターター",
    price: "お問い合わせ",
    desc: "まずは試したい方に",
    features: ["案件検索", "お気に入り", "基本ダッシュボード"],
    accent: false,
  },
  {
    name: "プロ",
    price: "お問い合わせ",
    desc: "本格的に営業効率化",
    features: ["全機能利用可能", "営業記録管理", "AIエージェント", "優先サポート"],
    accent: true,
  },
  {
    name: "エンタープライズ",
    price: "カスタム",
    desc: "大規模組織向け",
    features: ["カスタム対応", "専任CS", "API連携", "SLA保証"],
    accent: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-white py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-bright-green/20 bg-light-green px-5 py-2 text-xs font-bold tracking-wider text-dark-green">
            PRICING
          </span>
          <h2 className="mt-6 text-3xl font-black tracking-tight text-gray-900 md:text-5xl">
            料金プラン
          </h2>
          <p className="mt-4 text-base text-gray-500">
            御社の規模に合わせて最適なプランをお選びいただけます
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-3">
          {plans.map((p, i) => (
            <FadeIn key={p.name} delay={i * 120}>
              <div className={`card-lift relative h-full overflow-hidden rounded-3xl border p-8 md:p-10 ${
                p.accent
                  ? "border-bright-green bg-gradient-to-b from-dark-green to-mid-green text-white shadow-2xl shadow-dark-green/25 scale-[1.03]"
                  : "border-gray-200 bg-white text-gray-900 shadow-sm"
              }`}>
                {p.accent && (
                  <>
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-bright-green to-accent-yellow" />
                    <span className="absolute top-6 right-6 rounded-full bg-accent-yellow px-3 py-1 text-[10px] font-black text-navy">
                      推奨
                    </span>
                  </>
                )}

                <p className={`text-sm font-bold ${p.accent ? "text-bright-green" : "text-bright-green"}`}>{p.name}</p>
                <p className="mt-4 text-3xl font-black md:text-4xl">{p.price}</p>
                <p className={`mt-2 text-sm ${p.accent ? "text-gray-400" : "text-gray-500"}`}>{p.desc}</p>

                <div className={`my-8 h-px ${p.accent ? "bg-white/10" : "bg-gray-100"}`} />

                <ul className="space-y-4">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${
                        p.accent ? "bg-bright-green/20" : "bg-light-green"
                      }`}>
                        <Check className={`h-3 w-3 ${p.accent ? "text-bright-green" : "text-dark-green"}`} strokeWidth={3} />
                      </span>
                      <span className={p.accent ? "text-gray-300" : "text-gray-600"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://www.safaritech.jp/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 flex items-center justify-center gap-2 rounded-xl py-4 text-sm font-bold transition-all ${
                    p.accent
                      ? "bg-white text-dark-green hover:bg-gray-100"
                      : "bg-dark-green text-white hover:bg-navy"
                  }`}
                >
                  お問い合わせ
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
