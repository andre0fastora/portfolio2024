import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "/home/andre0fastora/projects/personalSite2024/my-portfolio/components/Navbar/Navbar.jsx"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andre Jacques Pujol",
  description: "Web Solutions for the Future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <Navbar/>
        {children}
        </body>
    </html>
  );
}
