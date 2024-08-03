import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "@/lib/assets/globals.css";
import NextTopLoader from "nextjs-toploader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <ToastContainer position="bottom-center" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
        {children}
      </body>
    </html>
  );
}
