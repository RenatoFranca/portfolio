import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Renato França",
  description: "Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  const lang = headersList.get("X-Selected-Language")!!;

  return (
    <html lang={lang}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
