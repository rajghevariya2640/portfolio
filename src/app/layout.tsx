import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Urbanist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ScrollProgress } from "@/components/scroll-progress";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LoaderProvider } from "@/components/loader";
import { Cursor } from "@/components/cursor";

const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"] });
const urbanist = Urbanist({ variable: "--font-urbanist", subsets: ["latin"] });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raj Ghevariya — Senior Web Designer & Front-End UI Engineer",
  description:
    "Portfolio of Raj Ghevariya, a Surat-based Senior Web Designer & UI Engineer crafting high-performance, mobile-first web experiences.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${urbanist.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="noise min-h-full flex flex-col">
        <ScrollProgress />
        <LoaderProvider>
          <SmoothScroll>
            <Navbar />
            {children}
            <Footer />
          </SmoothScroll>
        </LoaderProvider>
        <Cursor />
      </body>
    </html>
  );
}
