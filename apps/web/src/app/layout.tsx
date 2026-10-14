import type { Metadata } from "next";
import { Anton, Inter, Geist_Mono } from "next/font/google";
import { MobileCallBar } from "@/components/site/mobile-call-bar";
import { Motion } from "@/components/site/motion";
import "lenis/dist/lenis.css";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JB Training",
  description:
    "Stop being weak. Strength, speed and conditioning coaching with Jamal Baqleh, NCSF Certified Personal Trainer. First session free.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${anton.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Lets CSS hide split headlines before GSAP animates them in; skipped for reduced motion. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion')",
          }}
        />
      </head>
      <body className="min-h-full flex flex-col pb-16 sm:pb-0">
        {children}
        <MobileCallBar />
        <Motion />
      </body>
    </html>
  );
}
