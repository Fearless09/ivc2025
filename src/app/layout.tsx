import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IVC 2025 - Guarding the Heart",
  description:
    "An ultra-modern, high-performance registration and payment confirmation platform for the 9th Annual Islamic Vacation Course (IVC) 2025.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <section className="flex min-h-dvh flex-col">
          <Navbar />
          <main className="grid flex-1">{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
