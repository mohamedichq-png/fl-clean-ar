/**
 * FL Clean AR — Confirmed Services Configuration
 * 
 * In accordance with client rules:
 * - Only services corresponding to confirmed business reality and authentic user photographs are listed.
 * - Pressure washing, solar panels or industrial sanitation are NOT advertised as established services.
 */

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  shortDescription: string;
  fullDescription: string;
  detailedParagraphs: string[];
  targetCustomer: "Particuliers" | "Professionnels" | "Particuliers & Professionnels";
  features: string[];
  imageSrc: string;
  imageAlt: string;
  hasAuthenticPhoto: boolean;
  frequencyOptions: string[];
  relatedSlugs: string[];
  faqs: ServiceFAQ[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "verrieres-toitures-vitrees",
    slug: "verrieres-toitures-vitrees",
    title: "Nettoyage de verrières & toitures vitrées",
    metaTitle: "Nettoyage de Verrières & Toitures Vitrées (66) | FL Clean AR",
    metaDescription: "Nettoyage professionnel de verrières, puits de lumière et toitures vitrées dans les Pyrénées-Orientales. Élimination des mousses, calcaire et pollutions. Devis sur mesure.",
    shortDescription: "Entretien soigné des verrières, puits de jour, verrières d'atelier et toitures en verre difficiles d'accès.",
    fullDescription: "Les verrières et toitures vitrées sont particulièrement exposées aux intempéries, pollutions, poussières et mousses. FL Clean AR intervient avec un matériel spécialisé pour décrasser en douceur et en profondeur chaque panneau, en garantissant une transparence cristalline et le respect des profilés et joints d'étanchéité.",
    detailedParagraphs: [
      "Qu'il s'agisse d'une verrière d'atelier, d'une toiture vitrée en pente ou d'un puits de lumière zénithal, l'exposition permanente aux pluies sableuses, pollutions et retombées végétales altère progressivement la clarté et l'apport lumineux.",
      "Nous adaptons la méthode selon la pente et la configuration du bâti : dégraissage à la solution neutre préservant les joints en caoutchouc et mastics, rinçage soigné, et utilisation de perches carbone à eau déminéralisée ou raclage manuel sur perche.",
      "Le résultat restitue toute la clarté naturelle à vos pièces à vivre ou à vos espaces professionnels sans risque d'infiltration ni rayure des vitrages."
    ],
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
    frequencyOptions: [
      "Intervention ponctuelle de remise en état",
      "Entretien saisonnier (printemps / automne)",
      "Contrat régulier annuel"
    ],
    relatedSlugs: ["verandas-baies-vitrees", "acces-hauteur-adapte", "vitres-fenetres-particuliers"],
    faqs: [
      {
        question: "À quelle fréquence faut-il faire nettoyer une toiture vitrée ou verrière ?",
        answer: "Dans les Pyrénées-Orientales, en raison des épisodes de vent (tramontane) et des pluies sableuses méditerranéennes, un nettoyage semestriel (au printemps et en automne) est généralement recommandé pour conserver un apport de lumière optimal."
      },
      {
        question: "Montez-vous directement sur les vitres de la verrière ?",
        answer: "Non, pour des raisons évidentes de sécurité et pour ne pas fragiliser les panneaux ni les joints, nous intervenons depuis l'extérieur à l'aide de perches télescopiques légères ou d'équipements d'accès sécurisés adaptés à la configuration du toit."
      },
      {
        question: "Les produits employés risquent-ils d'endommager les joints d'étanchéité ?",
        answer: "Nous utilisons exclusivement des solutions dégraissantes neutres et de l'eau pure osmosée qui n'attaquent ni les joints EPDM, ni les menuiseries en aluminium laqué, ni les tuiles environnantes."
      }
    ]
  },
  {
    id: "verandas-baies-vitrees",
    slug: "verandas-baies-vitrees",
    title: "Nettoyage de vérandas & baies vitrées de prestige",
    metaTitle: "Nettoyage de Vérandas & Grandes Baies Vitrées (66) | FL Clean AR",
    metaDescription: "Entretien méticuleux de vérandas, baies vitrées coulissantes et salons cathédrale dans les Pyrénées-Orientales (Thuir, Perpignan). Finition sans traces.",
    shortDescription: "Remise en état et entretien régulier de l'ensemble des surfaces vitrées de vos vérandas, baies coulissantes et salons cathédrale.",
    fullDescription: "La véranda et les baies coulissantes sont le cœur lumineux de votre lieu de vie. Nous traitons l'ensemble des vitres verticales, baies coulissantes surdimensionnées, fenêtres cathédrale et toitures translucides pour vous offrir une vue panoramique sans aucun défaut.",
    detailedParagraphs: [
      "Les grandes surfaces vitrées, particulièrement celles ouvrant sur un jardin ou face aux panoramas du Roussillon, requièrent une technique irréprochable : le moindre voile ou reflet se remarque immédiatement à contre-jour.",
      "Notre protocole comprend le dépoussiérage des feuillures et rails coulissants, le mouillage manuel aux microfibres haute densité, le raclage avec lames professionnelles souples et l'essuyage minutieux des bordures.",
      "Nous protégeons scrupuleusement vos sols intérieurs (parquets, tomettes, carrelages) lors de chaque passage pour une intervention propre et sereine."
    ],
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
    frequencyOptions: [
      "À la demande (ponctuel)",
      "Abonnement bimestriel ou trimestriel",
      "Remise en état complète de début de saison"
    ],
    relatedSlugs: ["verrieres-toitures-vitrees", "vitres-fenetres-particuliers", "acces-hauteur-adapte"],
    faqs: [
      {
        question: "Nettoyez-vous également les profilés et les rails des baies coulissantes ?",
        answer: "Oui, l'entretien complet comprend l'essuyage des profilés aluminium ou PVC et le retrait des poussières accumulées dans les rails coulissants pour assurer un fonctionnement fluide."
      },
      {
        question: "Comment gérez-vous les vitrages très hauts sous plafond cathédrale ?",
        answer: "Nous utilisons du matériel d'intérieur adapté (perches télescopiques légères, mouilleurs et raclettes articulées) avec protections au sol afin de traiter les parties hautes en toute sécurité sans échafaudage encombrant."
      },
      {
        question: "Faut-il être présent pendant toute l'intervention ?",
        answer: "Une présence est nécessaire au début pour l'accueil et l'accès aux surfaces intérieures, ainsi qu'à la fin pour constater ensemble le résultat impeccable du chantier."
      }
    ]
  },
  {
    id: "vitres-fenetres-particuliers",
    slug: "vitres-fenetres-particuliers",
    title: "Nettoyage de vitres et fenêtres résidentielles",
    metaTitle: "Nettoyage de Vitres Particuliers Maison & Appartement (66) | FL Clean AR",
    metaDescription: "Lavage de vitres pour particuliers dans les Pyrénées-Orientales (Thuir, Perpignan). Fenêtres classiques, oscillo-battantes, Velux et garde-corps. Devis gratuit.",
    shortDescription: "Pour maisons individuelles et appartements : fenêtres classiques, oscillo-battantes, fenêtres de toit et garde-corps vitrés.",
    fullDescription: "Profitez d'un intérieur baigné de lumière sans la contrainte du nettoyage de vitres. FL Clean AR assure le lavage méthodique de l'ensemble des fenêtres de votre logement, y compris les fenêtres de toit (type Velux) et les balustrades vitrées.",
    detailedParagraphs: [
      "Le lavage des vitres d'une maison ou d'un appartement représente souvent une corvée fastidieuse et chronophage, particulièrement pour les fenêtres en étage, les châssis fixes ou les vitres de toit.",
      "Farid Hammoudi intervient avec minutie pour nettoyer les deux faces de chaque ouvrant, en essuyant systématiquement les rebords, poignées et pourtours pour un rendu net et durable.",
      "Chaque devis est ajusté au nombre exact de fenêtres et à leur configuration, sans surprise ni surcoût imprévu."
    ],
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
    frequencyOptions: [
      "Intervention ponctuelle",
      "Grand nettoyage de printemps",
      "Passage régulier semestriel ou trimestriel"
    ],
    relatedSlugs: ["verandas-baies-vitrees", "verrieres-toitures-vitrees"],
    faqs: [
      {
        question: "Comment est calculé le tarif pour une maison ou un appartement ?",
        answer: "Le tarif dépend du nombre de fenêtres, portes-fenêtres, baies coulissantes ou Velux, ainsi que de leur accessibilité. Vous pouvez nous décrire votre logement ou nous envoyer quelques photos pour une estimation rapide."
      },
      {
        question: "Prenez-vous en charge les vitrages après travaux ou rénovation ?",
        answer: "Oui, nous effectuons les remises en état après chantier pour éliminer les projections de plâtre, peintures fraîches ou résidus d'adhésifs, à l'aide de grattoirs professionnels sécurisés qui ne rayent pas le verre."
      },
      {
        question: "Intervenez-vous en appartement sans balcon pour les vitres extérieures ?",
        answer: "Oui, selon le type d'ouverture (oscillo-battant, battant intérieur) ou depuis l'extérieur à la perche télescopique selon l'étage."
      }
    ]
  },
  {
    id: "vitrines-commerciales",
    slug: "vitrines-commerciales",
    title: "Nettoyage de vitrines & devantures de magasins",
    metaTitle: "Nettoyage de Vitrines de Magasins & Commerces (66) | FL Clean AR",
    metaDescription: "Entretien régulier de vitrines commerciales et devantures de boutiques à Perpignan, Thuir et dans le 66. Horaires flexibles, passages programmés et devis pro.",
    shortDescription: "Offrez à votre commerce une visibilité éclatante avec des vitrines impeccables qui valorisent vos produits.",
    fullDescription: "La vitrine est le premier contact visuel entre votre enseigne et vos clients. FL Clean AR propose des interventions ponctuelles ou des contrats d'entretien réguliers adaptés à votre activité commerciale, avec une flexibilité horaire totale pour ne pas perturber votre clientèle.",
    detailedParagraphs: [
      "Traces de doigts, poussières urbaines, éclaboussures de pluie : les vitrines de commerce nécessitent un passage régulier et rigoureux pour refléter le professionnalisme de votre marque et mettre vos étalages en valeur.",
      "Nous proposons des créneaux matinaux avant l'ouverture ou en fin de journée pour travailler discrètement sans gêner la circulation de vos clients.",
      "Une facturation mensuelle claire et transparente est établie avec possibilité de suspendre ou d'ajuster les fréquences lors des périodes de congés."
    ],
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
    frequencyOptions: [
      "Hebdomadaire (1 fois par semaine)",
      "Bimensuel (toutes les 2 semaines)",
      "Mensuel",
      "Intervention ponctuelle (inauguration, soldes, fêtes)"
    ],
    relatedSlugs: ["locaux-professionnels", "acces-hauteur-adapte"],
    faqs: [
      {
        question: "Pouvez-vous intervenir avant l'ouverture de ma boutique aux clients ?",
        answer: "Absolument. Nous planifions nos passages tôt le matin afin que vos vitrines soient impeccables et sèches dès l'accueil de votre premier client."
      },
      {
        question: "Comment se déroule la facturation pour un commerce ?",
        answer: "Nous établissons une facture mensuelle récapitulative détaillée selon la fréquence choisie, simplifiant ainsi votre gestion comptable."
      },
      {
        question: "Nettoyez-vous également les stickers ou vitrophanies commerciales ?",
        answer: "Nous nettoyons délicatement autour des stickers publicitaires et vitrophanies avec des microfibres et produits neutres pour ne pas décoller les marquages adhésifs."
      }
    ]
  },
  {
    id: "locaux-professionnels",
    slug: "locaux-professionnels",
    title: "Nettoyage de vitrages de bureaux & locaux d'entreprises",
    metaTitle: "Nettoyage de Vitres de Bureaux & Cabinets Médicaux (66) | FL Clean AR",
    metaDescription: "Entretien de cloisons vitrées, baies vitrées de bureaux, sas d'accueil et cabinets de santé dans les Pyrénées-Orientales. Intervention soignée et discrète.",
    shortDescription: "Entretien des cloisons vitrées, portes automatiques, fenêtres de bureaux et cabinets de santé.",
    fullDescription: "Pour les agences, cabinets médicaux, centres de soins, sièges administratifs et locaux professionnels, nous assurons la propreté irréprochable de vos parois vitrées intérieures et baies extérieures, renforçant l'image de marque et le confort de vos collaborateurs et visiteurs.",
    detailedParagraphs: [
      "Dans les locaux d'entreprises et cabinets de santé, la clarté des cloisons modulaires vitrées et des sas d'entrée participe directement à l'hygiène perçue et au bien-être au travail.",
      "Nous prenons en charge les baies extérieures, les cloisons vitrées intérieures, les portes coulissantes et les miroirs de salles de soins avec une discrétion absolue et le respect strict des consignes de confidentialité.",
      "Nos protocoles s'adaptent aux exigences spécifiques des professions médicales et libérales."
    ],
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
    frequencyOptions: [
      "Contrat annuel régulier",
      "Intervention trimestrielle",
      "Remise en état ponctuelle"
    ],
    relatedSlugs: ["vitrines-commerciales", "acces-hauteur-adapte"],
    faqs: [
      {
        question: "Intervenez-vous dans les établissements de santé et cabinets médicaux ?",
        answer: "Oui, nous intervenons régulièrement dans les cabinets de kinésithérapie, pôles médicaux et centres de soins en appliquant un protocole propre et en préservant les films d'intimité dépolis."
      },
      {
        question: "Les interventions perturbent-elles le travail des collaborateurs ?",
        answer: "Non, nos interventions sont silencieuses, rapides et organisées bureau par bureau ou en dehors des réunions importantes pour respecter le travail de vos équipes."
      },
      {
        question: "Fournissez-vous des attestations pour le registre de sécurité ?",
        answer: "Oui, chaque prestation fait l'objet d'un bon d'intervention validé et d'une facture détaillée conforme aux normes professionnelles."
      }
    ]
  },
  {
    id: "acces-hauteur-adapte",
    slug: "acces-hauteur-adapte",
    title: "Nettoyage en hauteur : nacelle élévatrice & perche eau pure",
    metaTitle: "Nettoyage de Vitres en Hauteur & Nacelle (66) | FL Clean AR",
    metaDescription: "Lavage professionnel de vitrages en hauteur dans les Pyrénées-Orientales. Nacelle élévatrice télescopique jusqu'au 4ème étage et perches carbone eau pure.",
    shortDescription: "Accès certifié pour vitrages d'immeubles, façades et verrières hautes jusqu'au 4ème étage et plus.",
    fullDescription: "Les vitres d'immeubles, façades rideaux et verrières de toiture inaccessibles depuis le sol nécessitent un équipement professionnel certifié. Nous intervenons en nacelle élévatrice articulée pour les accès complexes, ou à l'aide de perches télescopiques en carbone à eau pure (eau osmosée sans produit chimique) pour un séchage naturel sans calcaire.",
    detailedParagraphs: [
      "Le nettoyage de vitrages en hauteur ne s'improvise pas. Il engage la sécurité des intervenants, des usagers du bâtiment et des piétons au sol.",
      "Farid Hammoudi dispose du savoir-faire et des habilitations requises pour le pilotage de nacelles élévatrices articulées télescopiques. Chaque intervention comprend la mise en place d'un balisage de sécurité au sol (cônes et périmètre de sécurité) et le port des équipements de protection individuelle homologués (harnais, casque).",
      "Lorsque la configuration s'y prête, nous combinons la nacelle avec nos perches télescopiques en fibre de carbone ultra-rigides alimentées par une station mobile d'osmose inverse au sol, garantissant un lavage complet sans risque pour les menuiseries."
    ],
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
    frequencyOptions: [
      "Sur devis après étude technique des accès et de la hauteur",
      "Intervention annuelle ou semestrielle pour copropriétés et sièges"
    ],
    relatedSlugs: ["verrieres-toitures-vitrees", "locaux-professionnels", "vitrines-commerciales"],
    faqs: [
      {
        question: "Jusqu'à quelle hauteur pouvez-vous intervenir ?",
        answer: "Grâce à nos nacelles télescopiques articulées et perches de carbone, nous intervenons couramment jusqu'au 4ème étage et plus sur les immeubles tertiaires et copropriétés des Pyrénées-Orientales."
      },
      {
        question: "Quelles sont les démarches préalables pour une intervention en nacelle sur voie publique ?",
        answer: "Si la nacelle doit stationner sur le domaine public ou un trottoir communal, une déclaration préalable d'occupation temporaire peut être requise auprès des services municipaux de la commune concernée. Nous vous guidons dans cette démarche."
      },
      {
        question: "Que se passe-t-il en cas de vent fort (tramontane) ?",
        answer: "La sécurité des personnes est prioritaire : les opérations en nacelle élévatrice sont strictement soumises aux limites de vitesse de vent réglementaires. En cas de rafales excessives, le créneau est reporté d'un commun accord sans pénalité."
      }
    ]
  }
];
