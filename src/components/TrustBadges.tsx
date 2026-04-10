import { ShieldCheck, Clock, HeadphonesIcon, Server } from "lucide-react";
import FadeIn from "./FadeIn";

const badges = [
  { icon: ShieldCheck, title: "SSL / データ暗号化", desc: "通信・保存データを完全暗号化" },
  { icon: Server, title: "国内クラウド運用", desc: "国内データセンターで安全に管理" },
  { icon: Clock, title: "安定稼働", desc: "冗長構成で業務を止めない" },
  { icon: HeadphonesIcon, title: "専任サポート", desc: "導入から運用まで伴走支援" },
];

export default function TrustBadges() {
  return (
    <section className="border-t border-gray-100 bg-white py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {badges.map((b, i) => (
            <FadeIn key={b.title} delay={i * 80}>
              <div className="flex flex-col items-center gap-3 rounded-2xl border border-gray-100 bg-bg-white px-5 py-7 text-center transition-all hover:border-bright-green/20 hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-light-green">
                  <b.icon className="h-6 w-6 text-dark-green" strokeWidth={1.5} />
                </div>
                <p className="text-sm font-bold text-gray-900">{b.title}</p>
                <p className="text-[12px] leading-snug text-gray-400">{b.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
