"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useRouter } from 'next/navigation'
import styled from "styled-components";
import LineButton from "@/atoms/LineButton";
import Header from "@/organisms/Header";

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
        <Header/>
        {children}
      </body>
    </html>
  );
}

const HeaderRow = styled.div`
    background-color: var(--primary);
    padding-top: 10px;
    padding-bottom: 5px;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    border-width: 0px 0px 1px 0px;
    border-color: var(--primary-foreground)
`;

const LogoButton = styled.text`
    font-size: 19px;
    &:hover{ 
        cursor: pointer;
    }
    font-family: var(--font-tea-hub);
`;

const StyledButton = styled(LineButton)`
    &:hover{
        cursor: pointer;
    }
`;
