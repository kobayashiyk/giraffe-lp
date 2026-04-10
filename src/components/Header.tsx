"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const navLinks = [
  { label: "課題", href: "#problems" },
  { label: "機能", href: "#features" },
  { label: "他社比較", href: "#comparison" },
  { label: "導入効果", href: "#before-after" },
  { label: "料金", href: "#pricing" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-gray-200/60 bg-white/80 shadow-lg shadow-black/[0.03] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">
          <a href="https://www.safaritech.jp/giraffe" target="_blank" rel="noopener noreferrer" className="relative z-10">
            <Image src="/logo.png" alt="GIRAFFE" width={160} height={40} className="h-9 w-auto" />
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`rounded-lg px-4 py-2 text-[13px] font-medium transition-all duration-200 ${
                  scrolled
                    ? "text-gray-600 hover:bg-gray-100 hover:text-dark-green"
                    : "text-gray-500 hover:bg-gray-100 hover:text-dark-green"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://www.safaritech.jp/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 flex items-center gap-2 rounded-full bg-bright-green px-6 py-2.5 text-[13px] font-bold text-white shadow-lg shadow-bright-green/25 transition-all duration-200 hover:bg-dark-green hover:shadow-dark-green/25"
            >
              無料で試す
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </nav>

          <button
            className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="メニュー"
          >
            <span className={`block h-0.5 w-5 rounded-full transition-all duration-300 ${scrolled ? "bg-gray-700" : "bg-gray-700"} ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 rounded-full transition-all duration-300 ${scrolled ? "bg-gray-700" : "bg-gray-700"} ${open ? "scale-0 opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 rounded-full transition-all duration-300 ${scrolled ? "bg-gray-700" : "bg-gray-700"} ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>

        <div className={`overflow-hidden transition-all duration-300 md:hidden ${open ? "max-h-96" : "max-h-0"}`}>
          <nav className="border-t border-gray-100 bg-white px-6 pb-6 pt-2">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-gray-50 py-3.5 text-[15px] font-medium text-gray-700">
                {l.label}
              </a>
            ))}
            <a
              href="https://www.safaritech.jp/contact"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-bright-green py-3.5 text-[15px] font-bold text-white"
            >
              無料トライアルを申し込む
              <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      </header>

      <div
        className={`fixed bottom-0 left-0 z-50 w-full bg-white/90 px-4 py-3 backdrop-blur-xl transition-transform duration-500 md:hidden ${
          scrolled ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ boxShadow: "0 -4px 32px rgba(0,0,0,0.08)" }}
      >
        <a
          href="https://www.safaritech.jp/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl bg-bright-green py-3.5 text-[14px] font-bold text-white shadow-lg shadow-bright-green/25"
        >
          無料トライアルを申し込む
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </>
  );
}
