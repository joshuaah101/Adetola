import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adetola R, Adenusi PhD. ",
  description: "My services and portfolio page",
};

export default function RootLayout({ children, }: Readonly <{ children: React.ReactNode; }> ) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-purple-50`}>{children}</body>
    </html>
  );
}
