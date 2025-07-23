import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/lenis-provider";
import NavContainer from "@/components/nav/nav-container";

export const metadata: Metadata = {
  title: "Oblivion",
  description: "Dcode Flagship event",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavContainer />
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
