import { Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import AIAssistant from "./components/AIAssistant";
import StructuredData from "@/components/StructuredData";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://company.invexix.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kigali BF Tech Group | Best Software & IT Company in Rwanda & Africa",
    template: "%s | Kigali BF Tech Group",
  },
  description:
    "Kigali BF Tech Group is a leading technology company in Kigali, Rwanda. We deliver top-tier Custom Software Development, Mobile Apps, Cyber Security, Cloud Solutions, and Enterprise IT Consulting across Rwanda and East Africa.",
  keywords: [
    "Kigali BF Tech Group",
    "BF Tech Group",
    "Best tech company in Rwanda",
    "Best software company in Rwanda",
    "Software Development Kigali",
    "IT company Kigali Rwanda",
    "Tech company Africa",
    "Mobile app development Kigali",
    "Cyber Security services Rwanda",
    "Web development agency Kigali",
    "Cloud engineering East Africa",
    "Enterprise IT solutions Rwanda",
    "Digital transformation Africa",
  ],
  authors: [{ name: "Kigali BF Tech Group", url: siteUrl }],
  creator: "Kigali BF Tech Group",
  publisher: "Kigali BF Tech Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Kigali BF Tech Group | Premier Technology & Software Firm in Rwanda",
    description:
      "Empowering businesses across Rwanda, East Africa, and globally with high-performance software, mobile applications, cloud architecture, and security services.",
    siteName: "Kigali BF Tech Group",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Kigali BF Tech Group Rwanda",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Kigali BF Tech Group | Premier Tech Company in Rwanda",
    description:
      "Leading Custom Software Engineering, Cloud Architecture, Cyber Security & Mobile Apps in Kigali, Rwanda.",
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistMono.variable} ${poppins.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <WhatsAppButton />
          <AIAssistant />
        </ThemeProvider>
      </body>
    </html>
  );
}
