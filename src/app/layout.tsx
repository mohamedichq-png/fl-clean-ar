import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileContactBar from "@/components/MobileContactBar";
import VerificationNotice from "@/components/VerificationNotice";
import { businessConfig } from "@/config/business";

export const metadata: Metadata = {
  metadataBase: new URL("https://flclean-ar.fr"),
  title: {
    default: "FL Clean AR | Nettoyage de Vitres Professionnel & Particulier (66)",
    template: "%s | FL Clean AR",
  },
  description:
    "Entreprise de nettoyage professionnel de vitres, verrières, vérandas, vitrines et surfaces vitrées pour particuliers et professionnels dans les Pyrénées-Orientales (Thuir, Perpignan). Devis gratuit.",
  keywords: [
    "nettoyage de vitres professionnel",
    "nettoyage vitres thur",
    "nettoyage vitres perpignan",
    "nettoyage verrière pyrénées orientales",
    "nettoyage vitrines magasins 66",
    "nettoyage véranda 66",
    "laveur de vitre 66",
    "FL Clean AR",
    "FL Vitre 66"
  ],
  authors: [{ name: "FL Clean AR" }],
  creator: "FL Clean AR",
  publisher: "FL Clean AR",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/assets/images/favicon.ico",
    apple: "/assets/images/logo-emblem.png",
  },
  openGraph: {
    title: "FL Clean AR | Nettoyage de Vitres Professionnel & Particulier",
    description: "Le nettoyage de vitres professionnel, en toute transparence. Verrières, vitrines et fenêtres dans les Pyrénées-Orientales (66).",
    url: "https://flclean-ar.fr",
    siteName: "FL Clean AR",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/assets/images/chantier-verriere-intervention.jpg",
        width: 1024,
        height: 640,
        alt: "FL Clean AR - Intervention sur toiture verrière",
      },
    ],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org LocalBusiness JSON-LD with confirmed information only
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessConfig.brandName,
    "alternateName": businessConfig.legalNameCandidate,
    "image": "https://flclean-ar.fr/assets/images/logo-banner.png",
    "logo": "https://flclean-ar.fr/assets/images/logo-emblem.png",
    "url": "https://flclean-ar.fr",
    "telephone": businessConfig.phone.display,
    "email": businessConfig.email.address,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessConfig.address.street,
      "addressLocality": businessConfig.address.city,
      "postalCode": businessConfig.address.postalCode,
      "addressRegion": businessConfig.address.department,
      "addressCountry": "FR",
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Pyrénées-Orientales",
      },
      {
        "@type": "City",
        "name": "Thuir",
      },
      {
        "@type": "City",
        "name": "Perpignan",
      },
    ],
    "description": businessConfig.shortDescription,
  };

  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <VerificationNotice />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileContactBar />
      </body>
    </html>
  );
}
