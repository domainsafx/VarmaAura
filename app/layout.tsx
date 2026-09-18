import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Curtain from "@/components/layout/Curtain";
import PageTransition from "@/components/layout/PageTransition";
import { BookingProvider } from "@/components/booking/BookingProvider";
import Overlay from "@/components/booking/Overlay";
import BookingDrawer from "@/components/booking/BookingDrawer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "VARMA AURA — Live the Resort Life",
    template: "%s — VARMA AURA",
  },
  description:
    "VARMA AURA is a 10-acre resort living destination near Bobbili, Andhra Pradesh — where nature, recreation and community come together.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="overflow-x-hidden bg-cream font-sans text-ink antialiased">
        <BookingProvider>
          <Curtain />
          <Navbar />
          <PageTransition>
            <main>{children}</main>
            <Footer />
          </PageTransition>
          <Overlay />
          <BookingDrawer />
        </BookingProvider>
      </body>
    </html>
  );
}
