import { ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";

export default function Cta() {
  return (
    <section id="cta" className="relative overflow-hidden bg-light-green/40 py-28 md:py-36">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-bright-green/8 blur-[120px]" />
        <div className="absolute inset-0 dot-pattern opacity-30" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <FadeIn>
          <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl md:text-6xl">
            まずは無料で
            <br />
            <span className="bg-gradient-to-r from-dark-green to-bright-green bg-clip-text text-transparent">お試しください</span>
          </h2>
          <p className="mt-6 text-base text-gray-500 md:text-lg">
            毎日の入札情報チェック、まだ手作業で続けますか？
            <br className="hidden sm:block" />
            導入のご相談・デモのご依頼もお気軽にどうぞ。
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:mt-12">
            <a
              href="https://www.safaritech.jp/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-dark-green px-10 py-4.5 text-[15px] font-bold text-white shadow-xl shadow-dark-green/20 transition-all duration-300 hover:bg-bright-green hover:shadow-bright-green/25 sm:w-auto"
            >
              無料トライアルを申し込む
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://www.safaritech.jp/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-10 py-4.5 text-[15px] font-semibold text-gray-700 transition-all duration-300 hover:border-bright-green/30 hover:bg-light-green sm:w-auto"
            >
              資料をダウンロード
            </a>
          </div>

          <p className="mt-8 text-xs text-gray-400">
            ※ クレジットカード不要・最短即日利用可能
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
