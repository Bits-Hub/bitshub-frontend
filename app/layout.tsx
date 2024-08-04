import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "@/lib/assets/globals.css";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";
import "react-toastify/dist/ReactToastify.css";
import AppProvider from "@/redux/provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  variable: "--font-inter"
});

const pjs = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  variable: "--font-pjs"
});


export const metadata: Metadata = {
  title: {
    default: "Bitshub",
    template: "%s — Bitshub",
  },
  icons: "/logo.png",
  description: "...the hub of bits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.variable} ${pjs.variable}`} suppressHydrationWarning={true}>
        <NextTopLoader color="#FF6709" showSpinner={false} />
        <Toaster position='top-right' richColors closeButton />
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
