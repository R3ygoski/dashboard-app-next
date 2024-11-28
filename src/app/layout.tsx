import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CardProvider } from "@/context/CardContext";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: "normal",
});

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
      <CardProvider>
        <body
          className={`bg-main-light-background dark:bg-main-dark-background ${inter.className}`}
        >
          <div className="absolute w-full h-60 rounded-b-3xl -z-10 bg-main-light-background-top dark:bg-main-dark-background-top"></div>
          {children}
        </body>
      </CardProvider>
    </html>
  );
}
