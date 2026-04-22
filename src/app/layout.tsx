import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
});

const rustic = localFont({
  src: "../../public/fonts/RusticRoadway.otf",
  variable: "--font-rustic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arova.design"),
  title: {
    default: "Arova · Interior Architecture · Hyderabad",
    template: "%s · Arova",
  },
  description:
    "Arova is an interior architecture studio in Hyderabad designing turnkey penthouses, private villas, hospitality rooms, and corporate floors across Telangana.",
  keywords: [
    "interior designer Hyderabad",
    "luxury interior design Telangana",
    "penthouse interiors",
    "villa design Hyderabad",
    "corporate interiors India",
  ],
  openGraph: {
    title: "Arova · Interior Architecture",
    description:
      "A Hyderabad studio designing rooms that remember you — penthouses, villas, hospitality, and corporate floors.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${GeistSans.variable} ${GeistMono.variable} ${rustic.variable}`}
    >
      <body className="bg-bone text-ink antialiased selection:bg-midnight selection:text-bone">
        <SmoothScroll>
          <Cursor />
          <div className="grain-overlay" aria-hidden />
          <Navigation />
          <PageTransition>
            <main className="relative">{children}</main>
            <Footer />
          </PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}
