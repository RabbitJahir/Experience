import type { Metadata } from "next";
import "./globals.css";
import Header from "./Components/Header/page";
import Footer from "./Components/Footer";

export const metadata: Metadata = {
  title: "Kazi Rabit Jahir",
  description: "Space",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        WORK IN PROGRESS
        <Header />
        <main className="flex-grow bg-gray-50">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
