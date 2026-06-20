import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: " Kousik Dasari — iOS Engineer",
  description:
    "The portfolio of Kousik Dasari, Software Engineer II & iOS Engineer. An interactive iOS-inspired experience showcasing work, impact, and craft.",
  authors: [{ name: "Kousik Dasari" }],
  keywords: ["iOS Engineer", "Swift", "SwiftUI", "iOS Components", "Kousik Dasari", "Portfolio"],
  openGraph: {
    title: " Kousik Dasari — iOS Engineer",
    description: "An interactive iOS-inspired portfolio OS.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-black text-white">{children}</body>
    </html>
  );
}
