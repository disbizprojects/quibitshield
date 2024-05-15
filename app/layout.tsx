"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="   dark:bg-black">
      <SessionProvider>
        <body className="font-[Axiforma-heavy] bg-black p-4  lg:py-10 lg:px-32">
          {children}
        </body>
      </SessionProvider>
    </html>
  );
}
