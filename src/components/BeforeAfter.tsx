import { ArrowRight, TrendingUp } from "lucide-react";
import FadeIn from "./FadeIn";

const rows = [
  { item: "入札情報の収集", before: "毎日複数サイトを手動チェック", after: "毎日自動収集＋AIが最適案件を厳選" },
  { item: "案件の見落とし", before: "情報が多すぎて本当に欲しい案件を見逃す", after: "AIおすすめ度で優先順位を自動判定" },
  { item: "営業進捗の共有", before: "担当者の頭の中・Excel管理で属人化", after: "全案件をリアルタイムで可視化・共有" },
  { item: "競合分析", before: "入札結果を1件ずつ手作業で調査", after: "入札情報・類似案件をAIが自動分析" },
  { item: "見積作成", before: "メーカーPDFを見ながら手入力", after: "PDF→自社Excelに自動変換" },
  { item: "データ出力", before: "CSVエクスポート非対応、手作業で転記", after: "CSV・Excelでワンクリック出力" },
];

export default function BeforeAfter() {
  return (
    <section id="before-after" className="relative overflow-hidden bg-bg-white py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-bright-green/20 bg-light-green px-5 py-2 text-xs font-bold tracking-wider text-dark-green">
            <TrendingUp className="h-3.5 w-3.5" />
            IMPACT
          </span>
          <h2 className="mt-6 text-3xl font-black tracking-tight text-gray-900 md:text-5xl">
            導入効果 &mdash; Before / After
          </h2>
        </FadeIn>

        {/* Desktop table */}
        <FadeIn className="mt-14 hidden md:block md:mt-20">
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl shadow-gray-200/50">
            <table className="w-full text-left text-sm">
              <thead>
                <tr>
                  <th className="border-b border-gray-100 bg-gray-50/80 px-8 py-5 text-xs font-bold uppercase tracking-wider text-gray-400">項目</th>
                  <th className="border-b border-gray-100 bg-gray-50/80 px-8 py-5 text-xs font-bold uppercase tracking-wider text-gray-400">Before</th>
                  <th className="w-10 border-b border-gray-100 bg-gray-50/80" />
                  <th className="border-b border-gray-100 bg-gradient-to-r from-dark-green to-mid-green px-8 py-5 text-xs font-bold uppercase tracking-wider text-white">
                    After (GIRAFFE)
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i} className="transition-colors hover:bg-light-green/30">
                    <td className="border-b border-gray-50 px-8 py-5 font-bold text-gray-800">{r.item}</td>
                    <td className="border-b border-gray-50 px-8 py-5 text-gray-400">{r.before}</td>
                    <td className="border-b border-gray-50 px-2">
                      <ArrowRight className="h-4 w-4 text-bright-green" />
                    </td>
                    <td className="border-b border-gray-50 bg-light-green/20 px-8 py-5 font-semibold text-dark-green">{r.after}</td>
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
                <p className="text-sm font-bold text-dark-green">{r.item}</p>
                <p className="mt-2 text-sm text-gray-400">{r.before}</p>
                <div className="my-2 flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-bright-green" strokeWidth={2.5} />
                  <p className="text-sm font-semibold text-dark-green">{r.after}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
