"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation'
import styled from "styled-components";
import LineButton from "@/atoms/LineButton";

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
        <HeaderRow>
          <LogoButton
            onClick={() => router.push("/wiki")}
          >
              TEA-HUB
          </LogoButton>
          <StyledButton
            Nome="Login"
            onClick={() => router.push("/login")}
          />
        </HeaderRow>
        {children}
      </body>
    </html>
  );
}

const HeaderRow = styled.div`
  padding-top: 2px;
  padding-left: 3px;
  padding-right: 3px;
  
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const LogoButton = styled(Button)`
  font-size: 17px;
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
