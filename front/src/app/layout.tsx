import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Contexts from "@/context/context";

const primaryFont = Poppins({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "ShopTech",
  description: "Technology e-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Contexts>
      <html lang="en" className={primaryFont.className}>
        <head>
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        </head>
        <body>
          <div className="flex flex-col h-screen">
            <NavBar />
            <main className="flex-grow-1 wrapper pt-8">{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </Contexts>
  );
}
