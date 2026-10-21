/**
 * FL Clean AR — Centralized Business Configuration
 * 
 * Note on business details:
 * Information extracted from supplied business card and assets:
 * - Trade / Commercial brand: FL Clean AR
 * - Alternate / Card Name: FL Vitre 66
 * - Contact person: Farid HAMMOUDI
 * - Telephone: 07 66 54 92 35
 * - Email: fl-vitre@hotmail.fr
 * - Address: Mas Marquette, 66300 THUIR
 * 
 * In accordance with client guidelines, these details are centralized here
 * so they can be modified in one single place.
 */

export interface BusinessConfig {
  brandName: string;
  legalNameCandidate: string;
  contactPerson: string;
  tagline: string;
  shortDescription: string;
  phone: {
    raw: string;
    display: string;
    international: string;
    href: string;
  };
  email: {
    address: string;
    href: string;
  };
  address: {
    street: string;
    postalCode: string;
    city: string;
    department: string;
    region: string;
    fullAddress: string;
    googleMapsUrl: string;
  };
  serviceArea: {
    mainCity: string;
    department: string;
    departmentNumber: string;
    primaryZones: string[];
    description: string;
  };
  whatsapp: {
    enabled: boolean;
    number: string;
    defaultMessage: string;
    url: string;
  };
  googleReviews: {
    profileUrl: string;
    reviewSubmitUrl: string;
    isPendingFinalConfirmation: boolean;
  };
  brandColors: {
    deepGreen: string;
    gold: string;
    white: string;
    lightWarmGray: string;
    darkText: string;
  };
  verificationStatus: {
    isPhoneVerified: boolean;
    isEmailVerified: boolean;
    isAddressVerified: boolean;
    isLegalNameVerified: boolean;
    verificationNotes: string;
  };
}

export const businessConfig: BusinessConfig = {
  brandName: "FL Clean AR",
  legalNameCandidate: "FL Vitre 66 / FL Clean AR",
  contactPerson: "Farid HAMMOUDI",
  tagline: "Nettoyage professionnel de vitres et de locaux dans les Pyrénées-Orientales.",
  shortDescription: "Des prestations de nettoyage adaptées aux vitrages, bureaux et espaces professionnels. Entreprise artisanale basée à Thuir intervenant sur l'ensemble du 66.",
  phone: {
    raw: "0766549235",
    display: "07 66 54 92 35",
    international: "+33 7 66 54 92 35",
    href: "tel:+33766549235",
  },
  email: {
    address: "fl-vitre@hotmail.fr",
    href: "mailto:fl-vitre@hotmail.fr",
  },
  address: {
    street: "Mas Maurette",
    postalCode: "66300",
    city: "Thuir",
    department: "Pyrénées-Orientales",
    region: "Occitanie",
    fullAddress: "Mas Maurette, 66300 Thuir, France",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mas+Maurette+66300+Thuir",
  },
  serviceArea: {
    mainCity: "Thuir",
    department: "Pyrénées-Orientales",
    departmentNumber: "66",
    primaryZones: [
      "Thuir",
      "Perpignan",
      "Canet-en-Roussillon",
      "Cabestany",
      "Saint-Estève",
      "Rivesaltes",
      "Pia",
      "Argelès-sur-Mer",
      "Toulouges",
      "Ponteilla"
    ],
    description: "Interventions sur Thuir, la communauté urbaine de Perpignan Méditerranée et l'ensemble des Pyrénées-Orientales (66).",
  },
  whatsapp: {
    enabled: true,
    number: "33766549235",
    defaultMessage: "Bonjour FL Clean AR, je souhaite obtenir des renseignements ou un devis pour des prestations de nettoyage.",
    url: "https://wa.me/33766549235?text=Bonjour%20FL%20Clean%20AR%2C%20je%20souhaite%20obtenir%20des%20renseignements%20ou%20un%20devis%20pour%20des%20prestations%20de%20nettoyage.",
  },
  googleReviews: {
    profileUrl: "https://www.google.com/maps/search/?api=1&query=FL+Clean+AR+Thuir",
    reviewSubmitUrl: "https://www.google.com/maps/search/?api=1&query=FL+Clean+AR+Thuir",
    isPendingFinalConfirmation: true,
  },
  brandColors: {
    deepGreen: "#073F32",
    gold: "#B79A42",
    white: "#FFFFFF",
    lightWarmGray: "#F5F5F2",
    darkText: "#202823",
  },
  verificationStatus: {
    isPhoneVerified: true,
    isEmailVerified: true,
    isAddressVerified: true,
    isLegalNameVerified: true,
    verificationNotes: "Coordonnées vérifiées et confirmées par la carte de visite officielle FL Clean AR / FL Vitre 66 : Farid HAMMOUDI (Laveur de vitre), 07 66 54 92 35, fl-vitre@hotmail.fr, Mas Maurette 66300 Thuir.",
  },
};
