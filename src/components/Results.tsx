import { Trophy, Clock, MessageSquare } from "lucide-react";
import FadeIn from "./FadeIn";

export default function Results() {
  return (
    <section className="relative overflow-hidden bg-light-green/30 py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-bright-green/20 bg-white px-5 py-2 text-xs font-bold tracking-wider text-dark-green">
            <Trophy className="h-3.5 w-3.5" />
            RESULTS
          </span>
          <h2 className="mt-6 text-3xl font-black tracking-tight text-gray-900 md:text-5xl">
            導入実績
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-2">
          <FadeIn delay={0}>
            <div className="card-lift relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-sm md:p-10">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-bright-green to-accent-yellow" />
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-light-green">
                <Trophy className="h-7 w-7 text-dark-green" strokeWidth={1.5} />
              </div>
              <p className="mt-6 text-sm font-medium text-gray-500">見落としていた案件を発見</p>
              <p className="mt-2 text-4xl font-black text-dark-green md:text-5xl">
                2,000<span className="text-2xl md:text-3xl">万円</span>
              </p>
              <p className="mt-1 text-sm font-semibold text-bright-green">の受注に繋がった</p>
              <p className="mt-4 text-sm leading-relaxed text-gray-500">
                GIRAFFEのAIレコメンド機能により、これまで見逃していた案件を発見。新たな営業機会の創出に成功。
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="card-lift relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-sm md:p-10">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent-yellow to-bright-green" />
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-light-green">
                <Clock className="h-7 w-7 text-dark-green" strokeWidth={1.5} />
              </div>
              <p className="mt-6 text-sm font-medium text-gray-500">案件を探す時間の削減</p>
              <p className="mt-2 text-4xl font-black text-dark-green md:text-5xl">
                月 10<span className="text-2xl md:text-3xl">時間</span>
              </p>
              <p className="mt-1 text-sm font-semibold text-bright-green">の工数削減を実現</p>
              <p className="mt-4 text-sm leading-relaxed text-gray-500">
                入札情報の収集・確認作業を自動化。営業担当者が提案活動に集中できる環境を実現。
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Quote */}
        <FadeIn className="mt-8">
          <div className="rounded-3xl border border-bright-green/20 bg-white p-8 text-center shadow-sm md:p-10">
            <MessageSquare className="mx-auto h-6 w-6 text-bright-green/40" />
            <p className="mt-4 text-lg font-bold leading-relaxed text-gray-800 md:text-xl">
              「入札情報のチェック時間が1日2時間から15分に短縮されました。」
            </p>
            <p className="mt-3 text-sm text-gray-400">— 建設会社 営業部長</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
