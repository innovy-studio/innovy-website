import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const font = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Innovy",
  description:
    "Innovy in web & mobile apps. We provide SaaS solutions for your problems!",
  authors: [{ name: "Mounir Melzi" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${font.variable} antialiased`}>{children}</body>
    </html>
  );
}
