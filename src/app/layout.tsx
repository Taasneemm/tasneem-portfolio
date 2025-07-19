"use client";

import "./globals.css";
import localFont from "next/font/local";
import FooterMessage from "@/components/shared/FooterMessage";
import FooterBar from "@/components/shared/FooterBar";
import NavBar from "@/components/shared/NavBar";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { motion } from "framer-motion";

// Fonts
const fredoka = localFont({
  src: [
    {
      path: "../../public/fonts/Fredoka-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Fredoka-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Fredoka-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-fredoka",
});
const outfit = localFont({
  src: [
    {
      path: "../../public/fonts/Outfit-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Outfit-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Outfit-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-outfit",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <html lang="en">
      <body
        className={`${fredoka.variable} ${outfit.variable} bg-secondary-300 dark:bg-primary-900`}
      >
        {/* Header */}
        <NavBar />

        <div className="mx-auto flex flex-col gap-[120px] lg:gap-[160px] pt-[120px] lg:pt-[160px] pb-[60px] lg:pb-[80px] px-[16px] md:px-[32px] lg:px-[calc((100vw-1128px)/2)]">
          {children}

          {/* Footer */}
          <FooterMessage />
          <FooterBar />

        </div>
        <Analytics />
      </body>
    </html>
  );
}
