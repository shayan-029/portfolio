import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://portfolio-seven-omega-1wafwkngqc.vercel.app/"; // 🔁 change this

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Shayan | Full Stack Developer & Digital Growth Specialist",
    template: "%s | Shayan",
  },
  description:
    "I build fast, modern websites and web apps that grow your business. Specializing in React, Next.js, Node.js, SEO, and Google My Business.",

  keywords: [
    "Full Stack Developer",
    "Web Developer Pakistan",
    "Next.js Developer",
    "React Developer",
    "SEO Specialist",
    "Google My Business",
    "Digital Marketing",
    "Freelance Developer",
  ],
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },

  authors: [{ name: "Shayan", url: BASE_URL }],
  creator: "Shayan",

  openGraph: {
    type: "website",
    url: BASE_URL,
    title: "Shayan | Full Stack Developer & Digital Growth Specialist",
    description:
      "Building digital solutions that actually work. Fast websites, web apps, SEO & more.",
    siteName: "Shayan Portfolio",
    images: [
      {
        url: "/og-image.png", // 🔁 add a 1200x630 image to /public
        width: 1200,
        height: 630,
        alt: "Shayan – Full Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Shayan | Full Stack Developer",
    description:
      "Building digital solutions that actually work. Fast websites, web apps, SEO & more.",
    images: ["/og-image.png"], // 🔁 same image
    // creator: "@yourhandle",  // 🔁 uncomment and add your Twitter handle
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  alternates: {
    canonical: BASE_URL,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full" cz-shortcut-listen="true">{children}</body>
    </html>
  );
}