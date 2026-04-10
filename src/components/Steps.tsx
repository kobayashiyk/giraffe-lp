import { MessageCircle, Rocket, HeartHandshake } from "lucide-react";
import FadeIn from "./FadeIn";

const steps = [
  {
    icon: MessageCircle,
    num: "01",
    title: "お問い合わせ",
    desc: "無料相談・最短即日対応",
  },
  {
    icon: Rocket,
    num: "02",
    title: "無料トライアル",
    desc: "全機能を1か月間無料でお試し",
  },
  {
    icon: HeartHandshake,
    num: "03",
    title: "本導入",
    desc: "初期設定から運用まで徹底サポート",
  },
];

export default function Steps() {
  return (
    <section className="relative overflow-hidden bg-bg-white py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-bright-green/20 bg-light-green px-5 py-2 text-xs font-bold tracking-wider text-dark-green">
            STEPS
          </span>
          <h2 className="mt-6 text-3xl font-black tracking-tight text-gray-900 md:text-5xl">
            導入ステップ
          </h2>
          <p className="mt-4 text-base text-gray-500">
            最短2週間。シンプルな3ステップで導入完了
          </p>
        </FadeIn>

        <div className="relative mt-14 grid gap-6 md:mt-20 md:grid-cols-3">
          {/* Connector line (desktop) */}
          <div className="pointer-events-none absolute top-16 left-[16.67%] right-[16.67%] hidden h-0.5 bg-gradient-to-r from-bright-green via-accent-yellow to-bright-green md:block" />

          {steps.map((s, i) => (
            <FadeIn key={i} delay={i * 150}>
              <div className="card-lift relative rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm">
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-bright-green to-dark-green shadow-lg shadow-bright-green/20">
                  <s.icon className="h-7 w-7 text-white" strokeWidth={1.5} />
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent-yellow text-[10px] font-black text-navy">
                    {s.num}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-black text-gray-900">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
