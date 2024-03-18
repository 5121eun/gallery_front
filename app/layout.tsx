import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "./ui/nav/topnav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Gallery',
    default: 'Gallery'
  },
  description: "Share your photo"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen  ${inter.className} space-y-10 p-10 text-gray-500 dark:text-gray-300`}>
          <TopNav/>
          {children}
      </body>
    </html>
  );
}
