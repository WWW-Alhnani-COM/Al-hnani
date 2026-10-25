import type { Metadata } from "next";
import { Geist, Geist_Mono, Cairo, Manrope } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-arabic",
  subsets: ["arabic", "latin"],
  display: "swap",
});

const SITE_URL = "https://alhanani.onrender.com";

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "محمد الحناني | مبرمج فل استاك - Full-Stack Web Developer",
  description:
    "محمد الحناني، مبرمج فل استاك (Full-Stack) ومطور تطبيقات ويب وموبايل. خبرة 4+ سنوات في React، Next.js، Flutter، Laravel. أفضل مبرمج يمني متخصص في بناء حلول برمجية مبتكرة. الحناني للبرمجيات تقدم خدمات تطوير متكاملة.",
  keywords: [
    // الأسماء والعبارات المطلوبة
    "محمد الحناني",
    "الحناني",
    "مبرمجين يمنين",
    "مبرمجين فل استاك",
    "الحناني للبرمجيات",
    "افضل مبرمج يمني",
    // الكلمات الأساسية السابقة مع توسيعها
    "Full-Stack Web Developer",
    "React",
    "Next.js",
    "Flutter",
    "Laravel",
    "تطوير ويب",
    "برمجة",
    "Yemen",
    "Mohammed Al-Hanani",
    "مطور ويب",
    "مطور تطبيقات",
    "خدمات برمجية",
    "برمجة تطبيقات",
    "موقع شخصي",
    "بورتوليو",
  ],
  openGraph: {
    title: "محمد الحناني | مبرمج فل استاك - Full-Stack Web Developer",
    description:
      "محمد الحناني، مبرمج فل استاك ومطور ويب وموبايل. خبرة 4+ سنوات في React، Next.js، Flutter، Laravel. أفضل مبرمج يمني - الحناني للبرمجيات.",
    url: SITE_URL,
    siteName: "Mohammed Al-Hanani Portfolio",
    images: [
      {
        url: "https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mohammed Al-Hanani Portfolio",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "محمد الحناني | مبرمج فل استاك - Full-Stack Web Developer",
    description:
      "محمد الحناني، مبرمج فل استاك ومطور ويب وموبايل. خبرة 4+ سنوات.",
    images: ["https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/og-image.jpg"],
  },
  icons: {
    icon: "https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  // إضافات SEO مفيدة
  authors: [{ name: "Mohammed Al-Hanani" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
