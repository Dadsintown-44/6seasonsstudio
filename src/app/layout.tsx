import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import fs from "fs";
import path from "path";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "6Seasons Studio | Moments That Last Forever",
  description: "Luxury wedding and corporate events website",
  icons: {
    icon: [
      "/favicon.ico",
      "/favicon.svg",
      "/favicon-96x96.png",
    ],
    shortcut: "/favicon-96x96.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // try to discover a PDF in public/pdf
  let pdfPath: string | null = null;
  try {
    const pdfDir = path.join(process.cwd(), "public", "pdf");
    const files = fs.readdirSync(pdfDir);
    const pdfFile = files.find((f) => f.toLowerCase().endsWith(".pdf"));
    if (pdfFile) pdfPath = `/pdf/${encodeURIComponent(pdfFile)}`;
  } catch (e) {
    // ignore
  }

  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-serif antialiased`}>
        <Navbar pdfPath={pdfPath} />
        <SmoothScroll>
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
