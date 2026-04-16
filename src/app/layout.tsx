import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TechHive - Innovative Software Solutions",
  description:
    "TechHive - A cutting-edge software firm delivering exceptional consulting services, custom software solutions, and innovative products that transform businesses.",
  keywords:
    "software development, IT consulting, cloud solutions, mobile apps, AI, machine learning, custom software",
  authors: [{ name: "TechHive" }],
  openGraph: {
    type: "website",
    title: "TechHive - Innovative Software Solutions",
    description:
      "Where Innovation Meets Excellence. Delivering exceptional consulting services and custom software solutions.",
    url: "https://tech-hive.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
