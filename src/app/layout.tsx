import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "GIRAFFE | 建設業特化の営業支援エージェント",
  description:
    "公共工事の入札情報を自動収集し、営業活動を一元管理。建設業の営業を、もっとスマートに。",
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
    <html lang="ja" className={notoSansJp.className}>
      <body>{children}</body>
    </html>
  );
}
