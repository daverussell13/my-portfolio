import "@/styles/globals.css";

import AppLayout from "@/components/layouts";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import cn from "@/libs/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dave Russell Portfolio",
  description:
    "Dave is a computer science student who is really passionate in programming world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark text-foreground bg-background">
      <body className={cn("min-h-screen antialiased", inter.className)}>
        <Providers>
          <AppLayout>{children}</AppLayout>
        </Providers>
      </body>
    </html>
  );
}
