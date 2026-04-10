import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <a href="https://www.safaritech.jp/" target="_blank" rel="noopener noreferrer">
            <Image src="/logo.png" alt="サファリテック" width={140} height={36} className="h-9 w-auto" />
          </a>

          <nav className="flex flex-wrap justify-center gap-6 text-[13px] text-gray-400">
            <a href="#problems" className="transition hover:text-dark-green">課題</a>
            <a href="#features" className="transition hover:text-dark-green">機能</a>
            <a href="#comparison" className="transition hover:text-dark-green">比較</a>
            <a href="#pricing" className="transition hover:text-dark-green">料金</a>
            <a href="https://www.safaritech.jp/company" target="_blank" rel="noopener noreferrer" className="transition hover:text-dark-green">会社概要</a>
            <a href="https://www.safaritech.jp/privacy-policy" target="_blank" rel="noopener noreferrer" className="transition hover:text-dark-green">プライバシーポリシー</a>
          </nav>
        </div>

        <div className="mt-8 border-t border-gray-50 pt-6 text-center text-[12px] text-gray-400">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <a href="https://www.safaritech.jp/" target="_blank" rel="noopener noreferrer" className="transition hover:text-dark-green">
              株式会社サファリテック
            </a>{" "}
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
