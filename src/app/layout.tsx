import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CardProvider } from "@/context/CardContext";
import { FilterProvider } from "@/context/FilterContext";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: "normal",
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Social Dashboard App",
  description: "A social media dashboard app challenge from Frontend Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CardProvider>
        <FilterProvider>
          <body
            className={`h-screen bg-main-light-background dark:bg-main-dark-background ${inter.className} xl:overflow-clip`}
          >
            <div className="absolute w-full h-60 rounded-b-3xl -z-10 bg-main-light-background-top dark:bg-main-dark-background-top"></div>
            {children}
          </body>
        </FilterProvider>
      </CardProvider>
    </html>
  );
}
