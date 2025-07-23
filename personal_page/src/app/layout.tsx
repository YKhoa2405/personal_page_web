import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/Headers";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Khoa's Portfolio",
  description: "Khoa's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <link rel="icon" href="/images/logoweb.png" type="image/x-icon" />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
