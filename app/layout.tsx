import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "/styles/globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

import { cn } from "@/lib/utils"
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Kashlan Law",
  description: "Kashlan Law is a law firm based in Atlanta, Georgia. We specialize in criminal law and personal injury.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
