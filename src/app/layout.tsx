import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Providers from "./redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mini E-commerce",
  description: "Mini e-commerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Providers>
          <Navbar />
          <main className="pl-20 pr-20 mt-10">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
