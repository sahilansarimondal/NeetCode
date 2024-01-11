import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import Provider from "./contex/Provider";

export const metadata: Metadata = {
  title: "NeetCode - The World's Leading Online Programming Language Site",
  description: "The World's Leading Online Programming Language Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
