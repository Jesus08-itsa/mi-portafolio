import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Providers } from "@/components/providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Jesus Trocha | Frontend Developer",
  description:
    "Frontend Developer specializing in building scalable, modern, and high-performance web applications with React, TypeScript, and Tailwind CSS.",
  keywords: [
    "Frontend Developer",
    "Desarrollador Frontend",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Web Development",
    "UI/UX",
    "JavaScript",
    "Colombia",
  ],
  authors: [{ name: "Jesus Trocha" }],
  creator: "Jesus Trocha",
  openGraph: {
    type: "website",
    locale: "es_CO",
    alternateLocale: "en_US",
    title: "Jesus Trocha | Frontend Developer",
    description:
      "Frontend Developer specializing in building scalable, modern, and high-performance web applications.",
    siteName: "Jesus Trocha Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jesus Trocha | Frontend Developer",
    description:
      "Frontend Developer specializing in building scalable, modern, and high-performance web applications.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased bg-background`}
      >
        <Providers>
          {children}
          {process.env.NODE_ENV === "production" && <Analytics />}
        </Providers>
      </body>
    </html>
  );
}
