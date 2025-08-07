// src/app/layout.tsx
import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dr. [Psikolog Adı Soyadı] | Resmi Web Sitesi", 
  description: "Uzman Psikolog Dr. [Psikolog Adı Soyadı]'nın resmi web sitesi. Bireysel, çift ve online terapi hizmetleri hakkında bilgi alın.", // Güncellendi
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr"> 
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased flex flex-col min-h-screen`} // Font değişkenlerini ve layout sınıflarını ekledik
      >
        <Navbar />
        <main className="flex-grow"> 
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}