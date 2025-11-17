import "./globals.css";
import { AuthContextProvider } from "@/contexts/AuthContextProvider";
import Header from "@/organisms/Header";
import styled from "styled-components";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
            <Header/>
            {children}
        </AuthContextProvider>
      </body>

    </html>
  );
}
const StyledBody = styled.body`
  overflow-x: hidden;
`;
