import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

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
