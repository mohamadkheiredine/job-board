import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MainHeader from "./main-header/main-header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Job Board",
  description: "Find Your Future Job",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[url(/background.png)] bg-cover bg-center bg-no-repeat h-full`}
      >
        <main className="min-h-screen">
          <MainHeader />
          {children}
        </main>
      </body>
    </html>
  );
}
