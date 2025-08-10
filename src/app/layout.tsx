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
  title: "Oblivion - D'Code NSUT",
  description: "Dive into the depths of innovation at Oblivion 2025, D'Code NSUT's flagship technical extravaganza.",
  openGraph: {
    title: "Oblivion - D'Code NSUT",
    description:
      "Dive into the depths of innovation at Oblivion 2025, D'Code NSUT's flagship technical extravaganza. Experience cutting-edge competitions, workshops, and events that push the boundaries of technology and creativity.",
    type: "website",
    url: "https://oblivionnsut.com/",
    siteName: "D'Code NSUT",
    images: [
      {
        url: "https://oblivionnsut.com/og-main.png",
        width: 1200,
        height: 630,
        alt: "D'Code NSUT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oblivion - D'Code NSUT",
    description:
      "Dive into the depths of innovation at Oblivion 2025, D'Code NSUT's flagship technical extravaganza. Experience cutting-edge competitions, workshops, and events that push the boundaries of technology and creativity.",
    images: ["https://oblivionnsut.com/og-main.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          async
          src="https://us.umami.is/script.js"
          data-website-id="c42ec8bf-dba5-4dd9-ba08-161c9285525f"
        ></script>
      </head>
      <body className={`${pirata.variable} ${robotoMono.variable} ${bebasNeue.variable} ${sourceSans.variable}`}>
        {/* <Nav /> */}
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
