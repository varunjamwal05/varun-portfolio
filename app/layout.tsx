import type { Metadata } from "next";
import { Inter, Outfit, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import AnimatedGradient from "@/components/AnimatedGradient";
import Navbar from "@/components/Navbar";

import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Varun Jamwal | Frontend Developer",
  description: "Portfolio of Varun Jamwal, a creative Frontend Developer crafting interactive web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        inter.variable,
        outfit.variable,
        bricolage.variable,
        "font-sans antialiased selection:bg-white/20 selection:text-white"
      )}>
        <LenisProvider>
          <AnimatedGradient />
          <Navbar />
          <main className="relative z-10 w-full min-h-screen pb-12">
            {children}
          </main>
        </LenisProvider>
      </body>
    </html>
  );
}
