import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "./ui/nav/topnav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-gray-500 dark:text-gray-300`}>
        <div className="w-full">
          <TopNav/>
        </div>
        <div className="w-full min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
