import { Check, ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";

const plans = [
  {
    name: "Free",
    price: "無料",
    unit: "",
    desc: "1か月限定 / 3名まで",
    features: ["AIエージェント 10回/日", "基本ダッシュボード"],
    accent: false,
  },
  {
    name: "Basic",
    price: "10万円",
    unit: "/月",
    desc: "5名（追加 2.0万円/人）",
    features: [
      "AIエージェント 30回/日",
      "基本ダッシュボード",
      "通知付き保存 10件",
      "メール / 電話サポート",
    ],
    accent: false,
  },
  {
    name: "Pro",
    price: "25万円",
    unit: "/月",
    desc: "15名（追加 1.7万円/人）",
    features: [
      "AIエージェント 50回/日",
      "カスタムダッシュボード",
      "通知付き保存 無制限",
      "専任担当 / 電話サポート",
    ],
    accent: true,
  },
  {
    name: "Enterprise",
    price: "要相談",
    unit: "",
    desc: "ユーザー数 無制限",
    features: [
      "AIエージェント 無制限",
      "カスタムダッシュボード",
      "通知付き保存 無制限",
      "専任担当 / 電話サポート",
    ],
    accent: false,
  },
];

const notes = [
  "税別表記",
  "初期費用：セットアップ無料・研修5万円/回",
  "無料トライアル：30日間・3名・クレカ不要",
  "年間契約で10%割引（Basic / Pro）",
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-white py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-bright-green/20 bg-light-green px-5 py-2 text-xs font-bold tracking-wider text-dark-green">
            PRICING
          </span>
          <h2 className="mt-6 text-3xl font-medium tracking-tight text-gray-900 md:text-5xl">
            料金プラン
          </h2>
          <p className="mt-4 text-base text-gray-500">
            無料トライアルから大規模組織まで、4つのプランをご用意しています
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((p, i) => (
            <FadeIn key={p.name} delay={i * 100}>
              <div
                className={`card-lift relative flex h-full flex-col overflow-hidden rounded-3xl border p-7 md:p-8 ${
                  p.accent
                    ? "border-bright-green bg-gradient-to-b from-dark-green to-mid-green text-white shadow-2xl shadow-dark-green/25 lg:scale-[1.04]"
                    : "border-gray-200 bg-white text-gray-900 shadow-sm"
                }`}
              >
                {p.accent && (
                  <>
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-bright-green to-accent-yellow" />
                    <span className="absolute right-5 top-5 rounded-full bg-accent-yellow px-3 py-1 text-[10px] font-black text-white">
                      推奨
                    </span>
                  </>
                )}

                <p className="text-sm font-bold text-bright-green">{p.name}</p>
                <p className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-black md:text-4xl">{p.price}</span>
                  {p.unit && (
                    <span className={`text-sm ${p.accent ? "text-gray-300" : "text-gray-500"}`}>
                      {p.unit}
                    </span>
                  )}
                </p>
                <p className={`mt-2 text-sm ${p.accent ? "text-gray-300" : "text-gray-500"}`}>
                  {p.desc}
                </p>

                <div className={`my-7 h-px ${p.accent ? "bg-white/10" : "bg-gray-100"}`} />

                <ul className="flex-1 space-y-3.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span
                        className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${
                          p.accent ? "bg-bright-green/20" : "bg-light-green"
                        }`}
                      >
                        <Check
                          className={`h-3 w-3 ${p.accent ? "text-bright-green" : "text-dark-green"}`}
                          strokeWidth={3}
                        />
                      </span>
                      <span className={p.accent ? "text-gray-200" : "text-gray-600"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://www.safaritech.jp/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-7 flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold transition-all ${
                    p.accent
                      ? "bg-white text-dark-green hover:bg-gray-100"
                      : "bg-dark-green text-white hover:bg-mid-green"
                  }`}
                >
                  お問い合わせ
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <ul className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-gray-500">
            {notes.map((n) => (
              <li key={n} className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-bright-green" />
                {n}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
