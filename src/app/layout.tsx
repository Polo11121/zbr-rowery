import { ReactNode } from "react";
import { Poppins } from "next/font/google";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import "./globals.css";

const getPoppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "ZBR ROWERY - Serwis rowerowy w Ostródzie",
  description:
    "Serwis rowerowy ZBR ROWERY w Ostródzie. Naprawa rowerów, serwis, doradztwo, sprzedaż części i akcesoriów rowerowych.",
  keywords: [
    "serwis rowerowy Ostróda",
    "naprawa rowerów",
    "ZBR ROWERY",
    "rowerowe spa",
    "części rowerowe",
    "zabezpieczenie roweru folią",
    "konserwacja roweru",
    "serwis amortyzatorów",
    "rowery Ostróda",
  ],
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => (
  <html lang="pl">
    <body
      className={`${getPoppins.variable} antialiased flex flex-col min-h-screen`}
    >
      <Header />
      {children}
      <Footer />
    </body>
  </html>
);

export default RootLayout;
