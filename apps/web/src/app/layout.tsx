import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { MobileCallBar } from "@/components/site/mobile-call-bar";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JB Training",
  description:
    "Build a stronger you with Jamal Baqleh, NCSF Certified Personal Trainer.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pb-16 sm:pb-0">
        {children}
        <MobileCallBar />
      </body>
    </html>
  );
}
