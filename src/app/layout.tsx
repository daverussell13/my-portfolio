import "@/styles/globals.css";

import AppLayout from "@/components/layouts";

import type { Metadata } from "next";
import { Providers } from "./providers";
import cn from "@/libs/utils";
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
        <Providers>
          <AppLayout>{children}</AppLayout>
        </Providers>
      </body>
    </html>
  );
}
