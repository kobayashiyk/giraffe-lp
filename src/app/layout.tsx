import type { Metadata } from "next";
import { Noto_Sans_JP, Zen_Old_Mincho, Space_Grotesk } from "next/font/google";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

const zenOldMincho = Zen_Old_Mincho({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-zen-old-mincho",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "GIRAFFE | 建設業特化の営業支援AIエージェント",
  description:
    "公共工事の入札情報を自動収集し、営業活動を一元管理。建設AI・土木DXで営業を、もっとスマートに。株式会社サファリテック提供。",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJp.variable} ${zenOldMincho.variable} ${spaceGrotesk.variable} ${notoSansJp.className}`}
    >
      <body>{children}</body>
    </html>
  );
}
