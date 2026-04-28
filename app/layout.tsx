import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";

export const metadata: Metadata = {
  metadataBase: new URL("https://gold365online.com"),
  verification: {
    google: "3hIk1gOGxPbU9g_iPNVTU9U0libzQmwTyTIIxdlAnZU",
  },
  icons: {
    icon: [{ url: "/images/gold365-logo.png", type: "image/png" }],
    shortcut: "/images/gold365-logo.png",
    apple: "/images/gold365-logo.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Gold365",
  url: "https://gold365online.com",
  logo: "https://gold365online.com/images/gold365-logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2nd Floor, 31 Ranipool",
    addressLocality: "Gangtok",
    addressRegion: "Sikkim",
    postalCode: "737135",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-84779-48072",
      contactType: "customer support",
      availableLanguage: ["English", "Hindi"],
      contactOption: "TollFree",
      areaServed: "IN",
    },
  ],
  sameAs: [
    "https://tinyurl.com/r32dj69c",
    "https://www.pinterest.com/gold365cricket/",
    "https://www.facebook.com/profile.php?id=61587749994980",
    "https://x.com/gold365bets",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Gold365",
  url: "https://gold365online.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://gold365online.com/?s={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SB8CL4QK09"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SB8CL4QK09');
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
        <FloatingWhatsapp />
        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" defer />
      </body>
    </html>
  );
}
