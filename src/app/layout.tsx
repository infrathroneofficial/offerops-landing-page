import { SITE_CONFIG } from "@/config/site";
import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  display: "swap",
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  display: "swap",
  variable: "--font-sora",
  subsets: ["latin"],
});

const ogImageUrl = `${SITE_CONFIG.siteUrl}/infrathrone-yellow.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  keywords: [
    "DevOps interview",
    "interview preparation",
    "30-day war room",
    "mock interviews",
    "production stories",
    "InfraThrone",
    "OfferOps",
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.siteUrl }],
  creator: "InfraThrone",
  icons: {
    icon: "/infrathrone-yellow.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.siteUrl,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "InfraThrone – OfferOps: 30-day DevOps Interview War Room",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [ogImageUrl],
    creator: "@sauravstwt",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${sora.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
