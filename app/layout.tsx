"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="   dark:bg-black">
      <SessionProvider>
        <body className="font-[Axiforma-heavy] bg-black p-4  lg:py-2 lg:px-32">
          {children}
        </body>
        <Toaster />
      </SessionProvider>
    </html>
  );
}
