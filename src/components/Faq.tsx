"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import FadeIn from "./FadeIn";

const faqs = [
  {
    q: "料金の目安を教えてください",
    a: "ご利用人数や必要な機能に応じてプランが異なります。具体的な料金はお問い合わせいただければ、御社の規模に合わせたお見積もりをお出しします。無料トライアルもご用意しています。",
  },
  {
    q: "導入前に必要な準備はありますか？",
    a: "特別な準備は不要です。ブラウザがあればすぐにご利用いただけます。既存ツールからのデータ移行が必要な場合は、CSVインポート機能をご用意しています。",
  },
  {
    q: "入札情報はどの範囲をカバーしていますか？",
    a: "全国の自治体・官公庁の入札情報を毎日収集しています。対象範囲の詳細や、特定の自治体のカバー状況についてはお気軽にお問い合わせください。",
  },
  {
    q: "AIレコメンドの精度はどのくらいですか？",
    a: "御社の過去の入札履歴や関心分野を学習し、使うほど精度が向上します。初期設定時に業種や対象地域を登録いただくことで、最初から関連性の高い案件を表示できます。",
  },
  {
    q: "セキュリティ面は大丈夫ですか？",
    a: "通信はSSL/TLSで暗号化し、データは国内クラウドで管理しています。詳細なセキュリティポリシーについてはお問い合わせ時にご説明いたします。",
  },
  {
    q: "1名でも利用できますか？",
    a: "はい、1名からご利用可能です。少人数でも大人数でも、チーム規模に合わせたプランをお選びいただけます。",
  },
  {
    q: "契約期間の縛りはありますか？",
    a: "月単位でのご契約です。解約金はかからず、いつでも解約可能です。まずは無料トライアルからお試しください。",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative overflow-hidden bg-bg-white py-28 md:py-36">
      <div className="mx-auto max-w-3xl px-6">
        <FadeIn className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-bright-green/20 bg-light-green px-5 py-2 text-xs font-bold tracking-wider text-dark-green">
            <HelpCircle className="h-3.5 w-3.5" />
            FAQ
          </span>
          <h2 className="mt-6 text-3xl font-black tracking-tight text-gray-900 md:text-5xl">
            よくあるご質問
          </h2>
        </FadeIn>

        <div className="mt-14 space-y-3 md:mt-20">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 50}>
              <div className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 ${
                openIndex === i ? "border-bright-green/30 shadow-md shadow-bright-green/5" : "border-gray-100"
              }`}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left md:px-8 md:py-6"
                >
                  <span className="flex items-center gap-4 pr-4">
                    <span className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-colors ${
                      openIndex === i ? "bg-bright-green text-white" : "bg-gray-100 text-gray-400"
                    }`}>
                      Q
                    </span>
                    <span className="text-[15px] font-bold text-gray-900">{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-gray-400 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180 text-bright-green" : ""
                    }`}
                  />
                </button>
                <div className={`accordion-grid ${openIndex === i ? "is-open" : ""}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 pl-[72px] text-sm leading-relaxed text-gray-500 md:px-8 md:pb-6 md:pl-[88px]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
