import "@/styles/globals.css";

import TopLoader from "@/components/elements/top-loader";
import Providers from "@/app/providers";
import AppLayout from "@/components/layouts/app";
import cn from "@/libs/cn";

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { firaCode, jakartaSans, soraSans } from "@/styles/font";

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
    <html
      lang="en"
      className={cn(
        "text-foreground bg-background",
        jakartaSans.variable,
        soraSans.variable,
        firaCode.variable
      )}
    >
      <body className="min-h-screen antialiased">
        <Providers>
          <TopLoader />
          <Analytics />
          {children}
        </Providers>
      </body>
    </html>
  );
}
