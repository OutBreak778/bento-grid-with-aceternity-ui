import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Headers from "@/components/Headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FormulateAI",
  description:
    "FormulateAI: Smart form generator, effortlessly designed and developed by Nikhil.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Headers />
        {children}
      </body>
    </html>
  );
}
