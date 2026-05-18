import type { Metadata } from "next";
import { Lora, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { PurchaseToast } from "@/components/purchase-toast";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Chenxi Azure Steel | Premium Watch & Bracelet Set",
  description:
    "Elevate every moment with the Chenxi Azure Steel Chronograph Watch and Sterling Strand Bracelet — the premium set for the modern professional. Free delivery in Lagos. Pay on delivery.",
  icons: {
    icon: "/assets/white-on-black-bg-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${poppins.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        {children}
        <Footer />
        <Toaster position="bottom-left" />
        <PurchaseToast />
      </body>
    </html>
  );
}
