/**
 * FL Clean AR — Confirmed Services Configuration
 * 
 * In accordance with client rules:
 * - Only services corresponding to confirmed business reality and authentic user photographs are listed.
 * - Pressure washing, solar panels or industrial sanitation are NOT advertised as established services.
 */

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  targetCustomer: "Particuliers" | "Professionnels" | "Particuliers & Professionnels";
  features: string[];
  imageSrc: string;
  imageAlt: string;
  hasAuthenticPhoto: boolean;
  frequencyOptions: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "verrieres-toitures-vitrees",
    slug: "verrieres-toitures-vitrees",
    title: "Nettoyage de verrières & toitures vitrées",
    shortDescription: "Entretien soigné des verrières, puits de jour, verrières d'atelier et toitures en verre difficiles d'accès.",
    fullDescription: "Les verrières et toitures vitrées sont particulièrement exposées aux intempéries, pollutions, poussières et mousses. FL Clean AR intervient avec un matériel spécialisé pour décrasser en douceur et en profondeur chaque panneau, en garantissant une transparence cristalline et le respect des profilés et joints d'étanchéité.",
    targetCustomer: "Particuliers & Professionnels",
    features: [
      "Élimination des dépôts de calcaire, mousses et pollutions atmosphériques",
      "Matériel ergonomique et adapté pour un travail sécurisé",
      "Respect des joints d'étanchéité et structures aluminium/bois",
      "Restauration de la luminosité naturelle de vos pièces"
    ],
    imageSrc: "/assets/images/chantier-toiture-avant-apres.webp",
    imageAlt: "Dégraissage et remise en état de verrière de toit avec résultat visible avant/après",
    hasAuthenticPhoto: true,
    frequencyOptions: ["Intervention ponctuelle de remise en état", "Entretien saisonnier (printemps / automne)", "Contrat régulier"]
  },
  {
    id: "verandas-baies-vitrees",
    slug: "verandas-baies-vitrees",
    title: "Nettoyage de vérandas & baies vitrées de prestige",
    shortDescription: "Remise en état et entretien régulier de l'ensemble des surfaces vitrées de vos vérandas, baies coulissantes et salons cathédrale.",
    fullDescription: "La véranda et les baies coulissantes sont le cœur lumineux de votre lieu de vie. Nous traitons l'ensemble des vitres verticales, baies coulissantes surdimensionnées, fenêtres cathédrale et toitures translucides pour vous offrir une vue panoramique sans aucun défaut.",
    targetCustomer: "Particuliers",
    features: [
      "Traitement intérieur et extérieur de toutes les faces vitrées",
      "Dépoussiérage et essuyage soigné des encadrements et rails coulissants",
      "Finition manuelle au chiffon microfibre sans traces ni reflets gênants",
      "Intervention soignée et protection de vos sols et mobilier intérieur"
    ],
    imageSrc: "/assets/images/chantier-baie-vitree-luxe.webp",
    imageAlt: "Nettoyage de grandes baies vitrées de salon cathédrale face aux montagnes",
    hasAuthenticPhoto: true,
    frequencyOptions: ["À la demande", "Abonnement bimestriel ou trimestriel"]
  },
  {
    id: "vitres-fenetres-particuliers",
    slug: "vitres-fenetres-particuliers",
    title: "Nettoyage de vitres et fenêtres résidentielles",
    shortDescription: "Pour maisons individuelles et appartements : fenêtres classiques, oscillo-battantes, fenêtres de toit et garde-corps vitrés.",
    fullDescription: "Profitez d'un intérieur baigné de lumière sans la contrainte du nettoyage de vitres. FL Clean AR assure le lavage méthodique de l'ensemble des fenêtres de votre logement, y compris les fenêtres de toit (type Velux) et les balustrades vitrées.",
    targetCustomer: "Particuliers",
    features: [
      "Nettoyage minutieux face intérieure et extérieure",
      "Essuyage des rebords, menuiseries et poignées",
      "Intervention soignée et respect absolu de votre intérieur",
      "Devis personnalisé selon le nombre d'ouvrants"
    ],
    imageSrc: "/assets/images/chantier-verriere-interieur.webp",
    imageAlt: "Vue intérieure lumineuse après lavage soigné des vitrages résidentiels",
    hasAuthenticPhoto: true,
    frequencyOptions: ["Intervention ponctuelle", "Grand nettoyage de printemps", "Passage régulier"]
  },
  {
    id: "vitrines-commerciales",
    slug: "vitrines-commerciales",
    title: "Nettoyage de vitrines & devantures de magasins",
    shortDescription: "Offrez à votre commerce une visibilité éclatante avec des vitrines impeccables qui valorisent vos produits.",
    fullDescription: "La vitrine est le premier contact visuel entre votre enseigne et vos clients. FL Clean AR propose des interventions ponctuelles ou des contrats d'entretien réguliers adaptés à votre activité commerciale, avec une flexibilité horaire totale pour ne pas perturber votre clientèle.",
    targetCustomer: "Professionnels",
    features: [
      "Transparence totale pour mettre en valeur vos étalages et produits",
      "Passages programmés (hebdomadaires, bimensuels ou mensuels)",
      "Intervention discrète avant l'ouverture ou après la fermeture au public",
      "Facturation claire et adaptée aux professionnels"
    ],
    imageSrc: "/assets/images/chantier-hall-atrium.webp",
    imageAlt: "Façade vitrée commerciale et portes automatiques éclatantes de propreté",
    hasAuthenticPhoto: true,
    frequencyOptions: ["Hebdomadaire", "Bimensuel", "Mensuel", "Ponctuel"]
  },
  {
    id: "locaux-professionnels",
    slug: "locaux-professionnels",
    title: "Nettoyage de vitrages de bureaux & locaux d'entreprises",
    shortDescription: "Entretien des cloisons vitrées, portes automatiques, fenêtres de bureaux et cabinets de santé.",
    fullDescription: "Pour les agences, cabinets médicaux, centres de soins, sièges administratifs et locaux professionnels, nous assurons la propreté irréprochable de vos parois vitrées intérieures et baies extérieures, renforçant l'image de marque et le confort de vos collaborateurs et visiteurs.",
    targetCustomer: "Professionnels",
    features: [
      "Nettoyage des traces sur cloisons séparatives et portes vitrées",
      "Traitement des baies vitrées de bureaux et salles de réunion",
      "Respect strict des consignes de sécurité, d'hygiène et de discrétion",
      "Planning d'intervention sur mesure"
    ],
    imageSrc: "/assets/images/chantier-centre-medical-moderne.webp",
    imageAlt: "Bâtiment tertiaire et centre médical aux vitrages entretenus avec soin",
    hasAuthenticPhoto: true,
    frequencyOptions: ["Contrat annuel", "Intervention trimestrielle", "Remise en état après travaux"]
  },
  {
    id: "acces-hauteur-adapte",
    slug: "acces-hauteur-adapte",
    title: "Nettoyage en hauteur : nacelle élévatrice & perche eau pure",
    shortDescription: "Accès certifié pour vitrages d'immeubles, façades et verrières hautes jusqu'au 4ème étage et plus.",
    fullDescription: "Les vitres d'immeubles, façades rideaux et verrières de toiture inaccessibles depuis le sol nécessitent un équipement professionnel certifié. Nous intervenons en nacelle élévatrice articulée pour les accès complexes, ou à l'aide de perches télescopiques en carbone à eau pure (eau osmosée sans produit chimique) pour un séchage naturel sans calcaire.",
    targetCustomer: "Particuliers & Professionnels",
    features: [
      "Intervention certifiée en nacelle élévatrice articulée (jusqu'à 4 étages et plus)",
      "Système de perche télescopique carbone à eau pure déminéralisée",
      "Balisage de sécurité au sol (cônes, périmètre de sécurité)",
      "Élimination totale des traces, calcaire et salissures aériennes"
    ],
    imageSrc: "/assets/images/chantier-immeuble-nacelle.webp",
    imageAlt: "Intervention en nacelle élévatrice télescopique au 4ème étage d'un immeuble moderne",
    hasAuthenticPhoto: true,
    frequencyOptions: ["Sur devis après étude technique des accès et de la hauteur"]
  }
];
