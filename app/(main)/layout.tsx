import Navbar from "@/components/Navbar";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hadith Tech",
  description: "???",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="py-2">{children}</main>
        <Footer />
        <div id="theRootElement"></div>
      </body>
    </html>
  );
}
