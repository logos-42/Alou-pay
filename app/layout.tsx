import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alou Pay - AI Agent Payment Platform",
  description: "Secure payment solutions for AI agents based on encrypted wallet private key technology",
  icons: {
    icon: [
      { url: "/icons/icon.png", sizes: "any" },
      { url: "/icons/32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/icons/128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/icons/128x128@2x.png", sizes: "256x256", type: "image/png" },
    ],
    apple: [
      { url: "/icons/Square150x150Logo.png", sizes: "150x150", type: "image/png" },
      { url: "/icons/Square310x310Logo.png", sizes: "310x310", type: "image/png" },
    ],
    shortcut: "/icons/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

