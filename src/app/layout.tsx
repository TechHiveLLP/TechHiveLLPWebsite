import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://tech-hive.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "TechHive - Innovative Software Solutions",
  description:
    "TechHive LLP — a forward-thinking software firm delivering IT consulting, custom software, cloud solutions, and AI-powered products that transform businesses.",
  keywords:
    "software development, IT consulting, cloud solutions, mobile apps, AI, machine learning, custom software, TechHive",
  authors: [{ name: "TechHive LLP" }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "TechHive",
    locale: "en_US",
    title: "TechHive - Innovative Software Solutions",
    description:
      "Where Innovation Meets Excellence. Delivering exceptional consulting services and custom software solutions.",
    url: siteUrl,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "TechHive — Innovative Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechHive - Innovative Software Solutions",
    description:
      "Where Innovation Meets Excellence. Delivering exceptional consulting services and custom software solutions.",
    images: ["/opengraph-image"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TechHive LLP",
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  description:
    "TechHive LLP is a forward-thinking software firm delivering IT consulting, custom software, cloud solutions, and AI-powered products.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "techhivellp@gmail.com",
    contactType: "customer support",
    availableLanguage: ["English"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "TechHive",
  url: siteUrl,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
