import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const getPoppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "ZBR Rowery - Serwis rowerowy",
  description:
    "Serwis rowerowy ZBR Rowery w Ostródzie. Naprawa rowerów, serwis, doradztwo, sprzedaż części i akcesoriów rowerowych.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${getPoppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
