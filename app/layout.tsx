import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adetola R, Adenusi PhD. ",
  description: "My services and portfolio page",
};

export default function RootLayout({ children, }: Readonly <{ children: React.ReactNode; }> ) {
  return (
    <html lang="en">
      <body className="bg-purple-50 dark:bg-black text-gray-700 dark:text-purple-100">{children}</body>
    </html>
  );
}
