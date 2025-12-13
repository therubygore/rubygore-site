import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Ruby Gore - Portland Tattoo Artist",
  description: "Custom floral tattoo artist in Portland, Oregon. Specializing in custom tattoo design, scar cover-ups, trauma-informed care, botanical and nature-inspired designs.",
  keywords: "portland floral tattoo artist, floral tattoo portland, botanical tattoo portland, best floral tattoo artists portland, Ruby Gore, Black Thorne Tattoo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
