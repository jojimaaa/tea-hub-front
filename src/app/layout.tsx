import "./globals.css";
import { AuthContextProvider } from "@/contexts/AuthContextProvider";
import Header from "@/organisms/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body style={{overflowX: "hidden"}}>
        <AuthContextProvider>
            <Header/>
            {children}
        </AuthContextProvider>
      </body>

    </html>
  );
}
