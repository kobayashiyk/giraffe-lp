import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Soft green gradient blob */}
        <div className="absolute -top-40 right-0 h-[700px] w-[700px] rounded-full bg-bright-green/6 blur-[120px]" />
        <div className="absolute bottom-0 -left-20 h-[500px] w-[500px] rounded-full bg-light-green/60 blur-[100px]" />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-bright-green/20 bg-light-green px-5 py-2 text-[13px] font-medium text-dark-green">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-bright-green opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-bright-green" />
            </span>
            建設業特化の営業支援エージェント
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-black leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
            入札情報、多すぎて
            <br />
            <span className="bg-gradient-to-r from-dark-green to-bright-green bg-clip-text text-transparent">追えていますか？</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-500 md:mt-8 md:text-lg">
            毎日大量の入札情報をチェックして、本当に欲しい案件を見落としていませんか？
            <br className="hidden md:block" />
            GIRAFFEなら、AIが<span className="font-semibold text-gray-900">御社に合う案件だけ</span>を届けます。
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:mt-12">
            <a
              href="https://www.safaritech.jp/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-dark-green px-8 py-4 text-[15px] font-bold text-white shadow-xl shadow-dark-green/20 transition-all duration-300 hover:bg-bright-green hover:shadow-bright-green/25 sm:w-auto"
            >
              まずは無料で試す
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#product"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-8 py-4 text-[15px] font-semibold text-gray-700 transition-all duration-300 hover:border-bright-green/30 hover:bg-light-green sm:w-auto"
            >
              <Play className="h-4 w-4 text-bright-green" />
              デモを見る
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4 md:mt-20">
          {[
            { num: "19,000+", label: "案件情報" },
            { num: "AI搭載", label: "自動レコメンド" },
            { num: "全国対応", label: "全自治体を網羅" },
            { num: "CSV対応", label: "自由にデータ出力" },
          ].map((s) => (
            <div key={s.num} className="rounded-2xl border border-gray-100 bg-white px-4 py-5 text-center shadow-sm">
              <p className="text-lg font-black text-dark-green sm:text-xl md:text-2xl">{s.num}</p>
              <p className="mt-1 text-[11px] font-medium text-gray-400 sm:text-xs">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Screenshot */}
        <div className="mt-16 md:mt-20">
          <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-1.5 shadow-2xl shadow-gray-300/30 sm:rounded-3xl sm:p-2">
            <Image
              src="/ss-dashboard.png"
              alt="GIRAFFEダッシュボード"
              width={1400}
              height={788}
              className="relative rounded-xl sm:rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
