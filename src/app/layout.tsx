import "./globals.css";

import type { Metadata } from "next";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jesús Beleño",
  description: "Portfolio of Jesús Beleño",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} " bg-slate-100 dark:absolute dark:top-0 dark:z-[-2] dark:h-screen dark:w-screen dark:bg-pdark bg-custom-gradient`}
      >
        {children}
      </body>
    </html>
  );
}
