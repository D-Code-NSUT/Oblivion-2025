import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/lenis-provider";
// import Nav from '@/components/nav/nav';

import { Pirata_One, Roboto_Mono, Bebas_Neue, Source_Sans_3} from "next/font/google";

const pirata = Pirata_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pirata',
  display: "swap"
});

const robotoMono = Roboto_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: "swap"
});

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  display: "swap"
});
const sourceSans = Source_Sans_3({
  weight: ['400', '600', '700'], // Choose weights you need
  subsets: ['latin'],
  variable: '--font-source',
  display: "swap"
});



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
    <html lang="en" className="dark">
      <body className={`${pirata.variable} ${robotoMono.variable} ${bebasNeue.variable} ${sourceSans.variable}`}>
        {/* <Nav /> */}
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
