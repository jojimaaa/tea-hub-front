"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const router = useRouter();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className={"pt-2 px-3 flex flex-row justify-evenly"}>
          <Button
            className={'hover: cursor-pointer'}
            onClick={() => router.push("/wiki")}
          >
              TEA-HUB
          </Button>
          teste
        </div>
        {children}
      </body>
    </html>
  );
}
