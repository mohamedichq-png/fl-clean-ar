import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileContactBar from "@/components/MobileContactBar";
import VerificationNotice from "@/components/VerificationNotice";
import { businessConfig } from "@/config/business";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flclean-ar.fr"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "FL Clean AR | Nettoyage de Vitres Professionnel & Particulier (66)",
    template: "%s | FL Clean AR",
  },
  description:
    "Entreprise de nettoyage professionnel de vitres, verrières, vérandas, vitrines et façades pour particuliers et locaux professionnels dans les Pyrénées-Orientales (Thuir, Perpignan). Devis sur mesure.",
  keywords: [
    "nettoyage de vitres professionnel",
    "nettoyage vitres thuir",
    "nettoyage vitres perpignan",
    "nettoyage verrière pyrénées orientales",
    "nettoyage vitrines magasins 66",
    "nettoyage véranda 66",
    "laveur de vitre 66",
    "nettoyage façades vitrées",
    "nacelle laveur de vitre 66",
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
    title: "FL Clean AR | Nettoyage de Vitres Professionnel & Particulier (66)",
    description: "Le nettoyage de vitres professionnel, en toute transparence. Verrières, vérandas, vitrines et façades dans les Pyrénées-Orientales.",
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
    <html lang="fr" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        <VerificationNotice />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileContactBar />
      </body>
    </html>
  );
}
