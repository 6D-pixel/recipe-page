import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Young_Serif } from "next/font/google";

const youngSerif = Young_Serif({
  subsets: ["latin"],
  variable: "--font-young-serif",
  weight: "400",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Recipe page",
  description: "frontend mentor challange",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${youngSerif.variable} antialiased bg-skin text-[#75716E]`}
      >
        {children}
      </body>
    </html>
  );
}
