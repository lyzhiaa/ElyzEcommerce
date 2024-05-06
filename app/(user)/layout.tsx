import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import FooterComponent from "@/components/footer/FooterComponent";
import StoreProvider from "../StoreProvider";
import  SessionProvider  from "../SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ElyzShoppe Ecommerce",
  description:
    "ElyzShoppe Ecommerce is a web application for selling products.",
  openGraph: {
    title: "ElyzShoppe Ecommerce",
    description:
      "ElyzShoppe Ecommerce is a web application for selling products.",
    images: "https://store.istad.co/media/brand_images/sokea_AF6QosU.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionProvider>
        <body className={inter.className}>
          <StoreProvider>
            <header>
              <NavbarComponent />
            </header>
            {children}
            <footer>
              <FooterComponent />
            </footer>
          </StoreProvider>
        </body>
      </SessionProvider>
    </html>
  );
}
