import { Quote } from "lucide-react";
import FadeIn from "./FadeIn";

const testimonials = [
  {
    quote: "毎朝3つのサイトを巡回していた時間がほぼゼロに。AIが案件を絞り込んでくれるので、営業活動に集中できるようになりました。",
    role: "建設会社 営業部長",
    industry: "総合建設",
  },
  {
    quote: "他社ツールではCSV出力ができず困っていましたが、GIRAFFEは出力も自由で社内共有がスムーズになりました。",
    role: "設備工事会社 営業課長",
    industry: "電気設備",
  },
  {
    quote: "見積のPDF変換機能が決め手でした。メーカー資料から自社フォーマットへの転記作業がなくなり、ミスも減っています。",
    role: "建設会社 経営企画室",
    industry: "土木建設",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-bright-green/20 bg-light-green px-5 py-2 text-xs font-bold tracking-wider text-dark-green">
            <Quote className="h-3.5 w-3.5" />
            VOICE
          </span>
          <h2 className="mt-6 text-3xl font-black tracking-tight text-gray-900 md:text-5xl">
            ご利用企業の声
          </h2>
          <p className="mt-4 text-sm text-gray-500">
            ※ お客様のプライバシー保護のため、企業名・個人名は非公開としています
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 120}>
              <div className="card-lift group relative h-full overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-sm md:p-10">
                {/* Decorative quote */}
                <div className="absolute -top-2 -right-2 text-[120px] font-black leading-none text-light-green/50 select-none">
                  &ldquo;
                </div>

                <div className="relative">
                  <p className="text-[15px] leading-relaxed text-gray-600">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-bright-green to-dark-green" />
                    <div>
                      <p className="text-sm font-bold text-gray-900">{t.role}</p>
                      <span className="mt-1 inline-block rounded-full bg-light-green px-3 py-0.5 text-[11px] font-semibold text-dark-green">
                        {t.industry}
                      </span>
                    </div>
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
