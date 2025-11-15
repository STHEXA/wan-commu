import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";

const notoJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "wan-commu",
  description:
    "お気に入りの犬種についてゆるっと語れる犬好き専用掲示板アプリ。柴犬、トイプー、コーギーなど犬種ごとにスレッドが分かれているので、“その犬が好きな人だけ”で盛り上がれます。写真自慢、しつけ相談、日常のほっこり話までなんでもOK！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoJp.variable} antialiased bg-orange-100`}>
        <div className="flex justify-center items-center fixed z-[1000] mt-[15px] w-full">
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
