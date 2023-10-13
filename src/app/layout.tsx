import "@/styles/globals.css";

import NextTopLoader from "nextjs-toploader";
import Providers from "@/app/providers";
import AppLayout from "@/components/layouts";
import cn from "@/libs/utils";

import type { Metadata } from "next";
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
        "dark text-foreground bg-background",
        jakartaSans.variable,
        soraSans.variable,
        firaCode.variable
      )}
    >
      <body className="min-h-screen antialiased">
        <NextTopLoader
          color="#05b6d3"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #05b6d3,0 0 5px #45c6c0"
        />
        <Providers>
          <AppLayout>{children}</AppLayout>
        </Providers>
      </body>
    </html>
  );
}
