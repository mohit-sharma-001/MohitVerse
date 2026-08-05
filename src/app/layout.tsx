import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#09090f",
};

export const metadata: Metadata = {
  title: "MOHITVERSE — Portfolio",
  description:
    "Building things I wish existed. Student by day, coder by night. Passionate about tech, open source & turning ideas into reality.",
  keywords: ["portfolio", "developer", "open source", "frontend", "full-stack"],
  authors: [{ name: "Mohit" }],
  openGraph: {
    title: "MOHITVERSE",
    description: "Building things I wish existed.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
