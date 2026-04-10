import { Building2, Landmark, HardHat, Factory } from "lucide-react";

const industries = [
  { icon: Building2, label: "総合建設" },
  { icon: HardHat, label: "設備工事" },
  { icon: Landmark, label: "官公庁取引" },
  { icon: Factory, label: "プラント" },
];

export default function SocialProof() {
  return (
    <section className="relative bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400">
          建設・設備・官公庁など、入札に関わる幅広い業種に対応
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {industries.map((ind) => (
            <div key={ind.label} className="flex items-center gap-2.5 text-gray-300 transition-colors hover:text-dark-green">
              <ind.icon className="h-5 w-5" strokeWidth={1.5} />
              <span className="text-[13px] font-semibold tracking-wide">{ind.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
