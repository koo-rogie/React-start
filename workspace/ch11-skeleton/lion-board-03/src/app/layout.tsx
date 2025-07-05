import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

import { Metadata } from "next";

export const metadata: Metadata = {
  // url 관련 metadata 설정시 사용될 기본 경로 지정
  metadataBase: new URL("https://lion-board.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className="flex flex-col min-h-screen dark:bg-gray-700 dark:text-gray-200 transition-color duration-500 ease-in-out">
          <Header />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
