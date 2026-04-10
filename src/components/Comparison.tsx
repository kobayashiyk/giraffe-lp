import { Check, X, Zap } from "lucide-react";
import FadeIn from "./FadeIn";

const rows = [
  { item: "案件情報の表示", other: "大量の検索結果から自分で探す", giraffe: "AIが御社に合う案件を自動レコメンド" },
  { item: "情報収集の時間", other: "毎日1〜2時間かけて手動チェック", giraffe: "自動収集+通知で15分に短縮" },
  { item: "CSV/Excel出力", other: "非対応または制限あり", giraffe: "全データを自由に出力" },
  { item: "営業管理機能", other: "なし（別途Excel等が必要）", giraffe: "営業記録・進捗・温度ランクを一元管理" },
  { item: "見積作成", other: "対応なし", giraffe: "メーカーPDFを自社Excelに自動変換" },
  { item: "AI分析", other: "なし", giraffe: "自然言語で案件分析・類似案件検出" },
  { item: "担当者別分析", other: "なし", giraffe: "売上・受注率をグラフで可視化" },
];

export default function Comparison() {
  return (
    <section id="comparison" className="relative overflow-hidden bg-bg-white py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />

      <div className="relative mx-auto max-w-6xl px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-bright-green/20 bg-light-green px-5 py-2 text-xs font-bold tracking-wider text-dark-green">
            <Zap className="h-3.5 w-3.5" />
            COMPARISON
          </span>
          <h2 className="mt-6 text-3xl font-black tracking-tight text-gray-900 md:text-5xl">
            入札情報検索ツールとの違い
          </h2>
          <p className="mt-4 text-base text-gray-500">
            GIRAFFEは「検索ツール」ではありません。営業支援エージェントです。
          </p>
        </FadeIn>

        {/* Desktop table */}
        <FadeIn className="mt-14 hidden md:block md:mt-20">
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl shadow-gray-200/50">
            <table className="w-full text-left text-sm">
              <thead>
                <tr>
                  <th className="border-b border-gray-100 bg-gray-50/80 px-8 py-5 text-xs font-bold uppercase tracking-wider text-gray-400 w-1/5">
                    比較項目
                  </th>
                  <th className="border-b border-gray-100 bg-gray-50/80 px-8 py-5 text-center text-xs font-bold uppercase tracking-wider text-gray-400 w-2/5">
                    一般的な入札情報検索サービス
                  </th>
                  <th className="border-b border-gray-100 bg-gradient-to-r from-dark-green to-mid-green px-8 py-5 text-center text-xs font-bold uppercase tracking-wider text-white w-2/5">
                    GIRAFFE
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i} className="transition-colors hover:bg-light-green/30">
                    <td className="border-b border-gray-50 px-8 py-5 font-bold text-gray-800">{r.item}</td>
                    <td className="border-b border-gray-50 px-8 py-5 text-center text-gray-400">
                      <span className="flex items-center justify-center gap-2">
                        <X className="h-4 w-4 flex-shrink-0 text-gray-300" strokeWidth={2.5} />
                        {r.other}
                      </span>
                    </td>
                    <td className="border-b border-gray-50 bg-light-green/20 px-8 py-5">
                      <span className="flex items-center gap-2 font-semibold text-dark-green">
                        <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-bright-green">
                          <Check className="h-3 w-3 text-white" strokeWidth={3} />
                        </span>
                        {r.giraffe}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>

        {/* Mobile cards */}
        <div className="mt-10 space-y-3 md:hidden">
          {rows.map((r, i) => (
            <FadeIn key={i} delay={i * 60}>
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <p className="text-sm font-bold text-gray-900">{r.item}</p>
                <div className="mt-3 flex items-start gap-2.5">
                  <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-300" strokeWidth={2.5} />
                  <p className="text-sm text-gray-400">{r.other}</p>
                </div>
                <div className="mt-2 flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-bright-green">
                    <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
                  </span>
                  <p className="text-sm font-semibold text-dark-green">{r.giraffe}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* ROI */}
        <div className="mt-14 grid gap-4 sm:grid-cols-3 md:mt-20">
          {[
            { num: "月40時間", label: "情報収集の工数削減", desc: "営業5人 x 1日2時間 → 15分" },
            { num: "年間数千万〜", label: "案件見落とし防止", desc: "AIレコメンドで取りこぼしゼロへ" },
            { num: "即日", label: "データ出力・共有", desc: "CSV/Excel出力で社内分析に即活用" },
          ].map((item, i) => (
            <FadeIn key={item.num} delay={i * 100}>
              <div className="card-lift relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-bright-green to-accent-yellow" />
                <p className="text-3xl font-black text-dark-green md:text-4xl">{item.num}</p>
                <p className="mt-3 text-sm font-bold text-gray-900">{item.label}</p>
                <p className="mt-1 text-xs text-gray-500">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
