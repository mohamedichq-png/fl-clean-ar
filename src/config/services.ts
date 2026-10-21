/**
 * FL Clean AR — Confirmed Services Configuration
 * 
 * In accordance with Phase 2.1 guidelines:
 * - Clear organization into 4 professional categories:
 *   1. Nettoyage de vitres et surfaces vitrées
 *   2. Nettoyage de bureaux et locaux professionnels
 *   3. Nettoyage de commerces et espaces professionnels
 *   4. Nettoyage de cabinets et espaces de soins (avec réserve déontologique claire)
 * - Concise, natural French descriptions focused on client needs.
 * - Clear "Demander un devis" CTAs.
 * - Strict integrity: No fake certifications or claims of medical-grade surgical disinfection.
 */

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  categoryId: "vitres" | "bureaux" | "commerces" | "soins";
  categoryLabel: string;
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
  scopePoints?: string[];
  importantNotice?: string;
}

export interface ServiceCategory {
  id: "vitres" | "bureaux" | "commerces" | "soins";
  title: string;
  shortDescription: string;
  longDescription: string;
  targetAudience: string;
  iconName: string;
  imageSrc: string;
  imageAlt: string;
  scopePoints: string[];
  importantNotice?: string;
  serviceSlugs: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "vitres",
    title: "Nettoyage de vitres et surfaces vitrées",
    shortDescription:
      "Vitrages résidentiels, baies vitrées de prestige, verrières de toit, vitrines et façades d'immeubles toutes hauteurs.",
    longDescription:
      "Notre cœur de métier historique : redonner une transparence absolue et durable à tous vos vitrages, intérieurs comme extérieurs. Du pavillon résidentiel aux façades tertiaires jusqu'au 4ème étage en nacelle élévatrice ou perche télescopique à eau pure osmosée.",
    targetAudience: "Particuliers & Professionnels",
    iconName: "Sparkles",
    imageSrc: "/assets/images/chantier-baie-vitree-luxe.webp",
    imageAlt: "Immense baie vitrée salon cathédrale nettoyée sans trace",
    scopePoints: [
      "Nettoyage de vitres et fenêtres classiques, oscillo-battantes et fenêtres de toit (Velux)",
      "Grandes baies vitrées coulissantes, vérandas et verrières d'atelier",
      "Toitures vitrées, puits de jour et verrières d'accès difficile",
      "Vitrines de magasins, boutiques et devantures commerciales",
      "Vitrages de bureaux, cloisons modulaires intérieures et sas vitrés",
      "Interventions en hauteur certifiées en nacelle élévatrice et perche carbone à eau pure"
    ],
    serviceSlugs: [
      "vitres-fenetres-particuliers",
      "verandas-baies-vitrees",
      "verrieres-toitures-vitrees",
      "vitrines-commerciales",
      "locaux-professionnels",
      "acces-hauteur-adapte"
    ]
  },
  {
    id: "bureaux",
    title: "Nettoyage de bureaux et locaux professionnels",
    shortDescription:
      "Entretien régulier ou ponctuel des espaces de travail, bureaux, accueils, circulations et sanitaires d'entreprises.",
    longDescription:
      "Un environnement de travail propre et soigné favorise le bien-être de vos équipes et valorise l'image de votre établissement auprès de vos visiteurs. FL Clean AR assure le nettoyage méticuleux de vos locaux d'entreprises à Thuir, Perpignan et dans le 66.",
    targetAudience: "Entreprises, Sièges administratifs, Agences & PME",
    iconName: "Building2",
    imageSrc: "/assets/images/chantier-bureaux-espace-pause.webp",
    imageAlt: "Espace pause et bureaux d'entreprise avec mobilier relevé pour le lavage complet des sols",
    scopePoints: [
      "Bureaux et espaces de travail individuels et partagés (dépoussiérage mobilier, écrans, téléphones)",
      "Accueil, hall d'entrée et espaces de réception clientèle",
      "Espaces communs, couloirs, escaliers et circulations",
      "Surfaces et mobilier accessibles (tables de réunion, plans de travail, dessertes)",
      "Sols et autres surfaces intérieures (aspiration minutieuse, lavage carrelages et sols thermoplastiques)",
      "Espaces de pause, kitchenettes et réfectoires (nettoyage tables, éviers, plans)",
      "Désinfection de contact et gestion des corbeilles selon consignes"
    ],
    serviceSlugs: [
      "nettoyage-bureaux-locaux",
      "locaux-professionnels"
    ]
  },
  {
    id: "commerces",
    title: "Nettoyage de commerces et espaces professionnels",
    shortDescription:
      "Entretien des surfaces de vente, étalages, comptoirs, arrière-boutiques et réserves commerciales.",
    longDescription:
      "Pour les commerçants de centre-ville et centres d'activités, la propreté est le premier critère de confiance. Nous intervenons sur vos espaces de vente, vitrines et zones de service avec des horaires adaptés à votre activité commerciale.",
    targetAudience: "Commerces de proximité, Boutiques, Showrooms & Agences",
    iconName: "Store",
    imageSrc: "/assets/images/chantier-arriere-boutique-laboratoire.webp",
    imageAlt: "Arrière-boutique et laboratoire commercial avec dessertes inox et sol carrelé lavé",
    scopePoints: [
      "Locaux commerciaux, boutiques et points de vente au détail",
      "Espaces de vente, étalages, présentoirs et comptoirs d'accueil clientèle",
      "Arrière-boutiques, réserves de marchandises et espaces de service",
      "Laboratoires de préparation et zones de découpe (sols drainés, rayonnages)",
      "Vitrines extérieures et portes vitrées d'entrée",
      "Interventions matinales avant l'ouverture ou en soirée après fermeture"
    ],
    serviceSlugs: [
      "nettoyage-commerces-boutiques",
      "vitrines-commerciales"
    ]
  },
  {
    id: "soins",
    title: "Nettoyage de cabinets et espaces de soins",
    shortDescription:
      "Entretien soigné des cabinets de kinésithérapie, cabinets dentaires, praticiens de santé et salles d'attente.",
    longDescription:
      "Les espaces de santé et de rééducation requièrent une rigueur quotidienne irréprochable. Farid Hammoudi assure le dépoussiérage, l'entretien des tables de soins, le lavage des sols techniques et la netteté des miroirs et vitrages dépolis, avec une discrétion absolue.",
    targetAudience: "Cabinets de kinésithérapie, Cabinets dentaires, Praticiens de santé",
    iconName: "Stethoscope",
    imageSrc: "/assets/images/chantier-cabinet-kinesitherapie-aspres.webp",
    imageAlt: "Salle de soins en cabinet de kinésithérapie avec table de manipulation et sol carrelé grand format",
    scopePoints: [
      "Cabinets de kinésithérapie, cabinets dentaires et praticiens libéraux",
      "Salles de consultation et de manipulation (mobilier surélevé pour le lavage des sols)",
      "Plateaux techniques, espaces de rééducation et zones d'exercices physiques",
      "Salles d'attente, sas d'accueil et banques de secrétariat",
      "Sanitaires patients et vestiaires avec protocole d'hygiène soigné",
      "Grands miroirs muraux de contrôle postural et fenêtres dépolies sans traces"
    ],
    importantNotice:
      "Prestation d'entretien courant et d'hygiène rigoureuse des locaux professionnels. Ne constitue pas une prestation de stérilisation chirurgicale, de désinfection hospitalière de bloc opératoire ni de conformité salle blanche, conformément aux directives éthiques et professionnelles de FL Clean AR.",
    serviceSlugs: [
      "nettoyage-cabinets-soins",
      "locaux-professionnels"
    ]
  }
];

export const servicesData: ServiceItem[] = [
  // 1. Verrières & Toitures
  {
    id: "verrieres-toitures-vitrees",
    slug: "verrieres-toitures-vitrees",
    categoryId: "vitres",
    categoryLabel: "Nettoyage de vitres & surfaces vitrées",
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

  // 2. Vérandas & Baies Vitrées
  {
    id: "verandas-baies-vitrees",
    slug: "verandas-baies-vitrees",
    categoryId: "vitres",
    categoryLabel: "Nettoyage de vitres & surfaces vitrées",
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

  // 3. Vitres Résidentielles
  {
    id: "vitres-fenetres-particuliers",
    slug: "vitres-fenetres-particuliers",
    categoryId: "vitres",
    categoryLabel: "Nettoyage de vitres & surfaces vitrées",
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

  // 4. Vitrines Commerciales
  {
    id: "vitrines-commerciales",
    slug: "vitrines-commerciales",
    categoryId: "commerces",
    categoryLabel: "Nettoyage de commerces & espaces professionnels",
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
    relatedSlugs: ["nettoyage-commerces-boutiques", "locaux-professionnels", "acces-hauteur-adapte"],
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

  // 5. Vitrages de bureaux et locaux
  {
    id: "locaux-professionnels",
    slug: "locaux-professionnels",
    categoryId: "vitres",
    categoryLabel: "Nettoyage de vitres & surfaces vitrées",
    title: "Nettoyage de vitrages de bureaux & cloisons vitrées",
    metaTitle: "Nettoyage de Vitrages de Bureaux & Cloisons Vitrées (66) | FL Clean AR",
    metaDescription: "Entretien de cloisons vitrées, baies vitrées de bureaux, sas d'accueil et cabinets d'entreprises dans les Pyrénées-Orientales. Intervention soignée et discrète.",
    shortDescription: "Entretien des cloisons vitrées intérieures, portes automatiques, fenêtres de bureaux et sas d'entreprises.",
    fullDescription: "Pour les agences, sièges administratifs, cabinets libéraux et locaux professionnels, nous assurons la propreté irréprochable de vos parois vitrées intérieures et baies extérieures, renforçant l'image de marque et le confort de vos collaborateurs et visiteurs.",
    detailedParagraphs: [
      "Dans les locaux d'entreprises, la clarté des cloisons modulaires vitrées et des sas d'entrée participe directement à l'hygiène perçue et au bien-être au travail.",
      "Nous prenons en charge les baies extérieures, les cloisons vitrées intérieures, les portes coulissantes et les miroirs de salles d'eau avec une discrétion absolue et le respect strict des consignes de confidentialité.",
      "Nos protocoles s'adaptent aux exigences de vos équipes pour des interventions rapides et sans nuisances."
    ],
    targetCustomer: "Professionnels",
    features: [
      "Nettoyage des traces de doigts sur cloisons modulaires et portes vitrées",
      "Traitement des baies vitrées de bureaux et salles de réunion",
      "Respect strict des consignes de discrétion et de sécurité",
      "Planning d'intervention sur mesure selon vos horaires d'ouverture"
    ],
    imageSrc: "/assets/images/chantier-centre-medical-moderne.webp",
    imageAlt: "Bâtiment tertiaire aux vitrages entretenus avec soin dans les Pyrénées-Orientales",
    hasAuthenticPhoto: true,
    frequencyOptions: [
      "Contrat annuel régulier",
      "Intervention trimestrielle ou mensuelle",
      "Remise en état ponctuelle"
    ],
    relatedSlugs: ["nettoyage-bureaux-locaux", "vitrines-commerciales", "acces-hauteur-adapte"],
    faqs: [
      {
        question: "Les interventions perturbent-elles le travail des collaborateurs ?",
        answer: "Non, nos interventions sont silencieuses, rapides et organisées bureau par bureau ou en dehors des créneaux de réunions pour respecter le travail de vos collaborateurs."
      },
      {
        question: "Nettoyez-vous les films dépolis d'intimité sans les dégrader ?",
        answer: "Oui, nous appliquons des solutions douces sans ammoniaque ni solvants abrasifs, préservant l'adhérence et l'aspect mat des vitrophanies dépolies."
      },
      {
        question: "Fournissez-vous des bons de passage ou factures professionnelles ?",
        answer: "Chaque prestation fait l'objet d'un bon d'intervention et d'une facture détaillée avec TVA, facilitant votre gestion comptable."
      }
    ]
  },

  // 6. Accès Hauteur & Nacelle
  {
    id: "acces-hauteur-adapte",
    slug: "acces-hauteur-adapte",
    categoryId: "vitres",
    categoryLabel: "Nettoyage de vitres & surfaces vitrées",
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
  },

  // 7. Nettoyage de Bureaux et Locaux Professionnels (NEW)
  {
    id: "nettoyage-bureaux-locaux",
    slug: "nettoyage-bureaux-locaux",
    categoryId: "bureaux",
    categoryLabel: "Nettoyage de bureaux & locaux professionnels",
    title: "Nettoyage de bureaux & locaux professionnels",
    metaTitle: "Nettoyage de Bureaux & Locaux Professionnels (66) | FL Clean AR",
    metaDescription: "Entretien soigné de bureaux, espaces de travail, réceptions et sols professionnels à Thuir et Perpignan (66). Contrats réguliers, passages programmés et devis gratuit.",
    shortDescription: "Entretien régulier ou ponctuel des postes de travail, espaces d'accueil, circulations, mobilier accessible et sols intérieurs.",
    fullDescription: "Des bureaux propres et sains renforcent la productivité de vos collaborateurs et projettent une image irréprochable auprès de vos clients. FL Clean AR assure l'entretien méthodique de vos espaces de travail, halls d'accueil, salles de réunion, sanitaires et espaces de pause dans l'ensemble des Pyrénées-Orientales.",
    detailedParagraphs: [
      "Le nettoyage de locaux tertiaires demande méthode, discrétion et régularité. Notre protocole intègre le dépoussiérage des plans de travail, écrans et équipements accessibles, l'essuyage soigné des points de contact (poignées, interrupteurs), ainsi que le vidage et le tri des corbeilles.",
      "Nous prenons en charge l'aspiration minutieuse des moquettes et tapis d'entrée, ainsi que le lavage des sols carrelés et revêtements thermoplastiques avec du matériel et des produits professionnels neutres.",
      "Les interventions sont programmées selon vos contraintes d'exploitation : tôt le matin avant l'arrivée de vos équipes, en fin de journée ou durant les heures creuses, avec un planning d'intervention souple et un interlocuteur unique."
    ],
    targetCustomer: "Professionnels",
    features: [
      "Dépoussiérage et essuyage soigné des bureaux, tables et mobilier accessible",
      "Entretien des halls d'accueil, sas vitrés et salles de réunion",
      "Aspiration et lavage soigné des sols carrelés et thermoplastiques",
      "Nettoyage et désinfection d'hygiène des sanitaires et points d'eau",
      "Entretien des espaces de pause, kitchenettes et réfectoires",
      "Horaires adaptés pour préserver la concentration de vos collaborateurs"
    ],
    imageSrc: "/assets/images/chantier-bureaux-espace-pause.webp",
    imageAlt: "Espace pause et bureaux professionnels d'entreprise préparé pour l'entretien des sols",
    hasAuthenticPhoto: true,
    frequencyOptions: [
      "Passage hebdomadaire ou bi-hebdomadaire",
      "Entretien quotidien régulier",
      "Intervention bimensuelle ou mensuelle",
      "Grand nettoyage de remise en état ou fin de chantier"
    ],
    relatedSlugs: ["locaux-professionnels", "vitrines-commerciales", "nettoyage-commerces-boutiques"],
    faqs: [
      {
        question: "Quels sont les créneaux horaires d'intervention pour les bureaux ?",
        answer: "Nous pouvons intervenir très tôt le matin avant l'arrivée de vos salariés, en fin de journée après la fermeture des bureaux, ou en journée selon la formule qui convient le mieux à votre organisation."
      },
      {
        question: "Fournissez-vous les consommables d'hygiène (savon, essuie-mains, sacs poubelle) ?",
        answer: "Sur demande, nous pouvons intégrer l'approvisionnement et le réassort régulier des consommables sanitaires dans le cadre de votre contrat d'entretien."
      },
      {
        question: "Pouvez-vous combiner le nettoyage des bureaux avec celui des vitrages et façades ?",
        answer: "Tout à fait ! C'est l'un des points forts de FL Clean AR : nous centralisons l'entretien intérieur de vos locaux et le lavage complet de vos vitres et baies vitrées avec un interlocuteur artisanal unique."
      }
    ]
  },

  // 8. Nettoyage de Commerces et Espaces de Vente (NEW)
  {
    id: "nettoyage-commerces-boutiques",
    slug: "nettoyage-commerces-boutiques",
    categoryId: "commerces",
    categoryLabel: "Nettoyage de commerces & espaces professionnels",
    title: "Nettoyage de commerces, boutiques & espaces de vente",
    metaTitle: "Nettoyage de Commerces & Boutiques (66) | FL Clean AR",
    metaDescription: "Entretien de locaux commerciaux, espaces de vente, comptoirs, arrière-boutiques et réserves dans les Pyrénées-Orientales. Horaires flexibles et devis pro.",
    shortDescription: "Entretien complet des surfaces de vente, étalages, comptoirs d'accueil, arrière-boutiques et réserves commerciales.",
    fullDescription: "Pour un commerce, la netteté des étalages, du sol et de la vitrine est directement liée à l'acte d'achat. FL Clean AR vous accompagne pour maintenir un niveau d'hygiène et de propreté constant sur l'ensemble de votre boutique : espace clientèle, caisse, comptoirs, arrière-boutiques et zones de préparation.",
    detailedParagraphs: [
      "L'accueil des clients dans un magasin exige une propreté sans défaut. Les allées de circulation, les plinthes et les zones de caisse accumulent quotidiennement poussières et salissures extérieures.",
      "Nous assurons le balayage humide, le dépoussiérage soigné du mobilier de présentation, l'essuyage des comptoirs et le lavage des sols avec des autolaveuses ou du matériel professionnel adapté à la superficie de votre commerce.",
      "Pour les commerces disposant d'arrière-boutiques, laboratoires de préparation ou réserves réfrigérées (comme illustré dans nos photographies d'intervention), nous assurons également l'entretien des zones de stockage et sols drainés, dans le respect de vos impératifs de propreté."
    ],
    targetCustomer: "Professionnels",
    features: [
      "Lavage des sols des espaces de vente, allées et zones de caisse",
      "Dépoussiérage et essuyage soigné des comptoirs, étagères et mobilier",
      "Entretien des arrière-boutiques, réserves et zones de service",
      "Lavage des vitrines d'entrée et portes automatiques",
      "Passages programmés tôt le matin avant l'ouverture au public",
      "Facturation mensuelle claire et transparente"
    ],
    imageSrc: "/assets/images/chantier-arriere-boutique-laboratoire.webp",
    imageAlt: "Arrière-boutique et zone de préparation professionnelle entretenue par FL Clean AR",
    hasAuthenticPhoto: true,
    frequencyOptions: [
      "Passage hebdomadaire ou bi-hebdomadaire",
      "Entretien quotidien avant ouverture",
      "Passage mensuel approfondi",
      "Remise en état avant inventaire ou période de soldes"
    ],
    relatedSlugs: ["vitrines-commerciales", "nettoyage-bureaux-locaux", "locaux-professionnels"],
    faqs: [
      {
        question: "Intervenez-vous avant l'ouverture de la boutique aux clients ?",
        answer: "Oui, la majorité de nos interventions en commerce se déroulent tôt le matin avant l'ouverture pour que les sols soient parfaitement secs et la boutique impeccable dès votre premier client."
      },
      {
        question: "Prenez-vous en charge les arrière-boutiques et réserves commerciales ?",
        answer: "Oui, notre périmètre peut inclure les espaces de stockage, réserves, chambres froides et laboratoires de préparation selon le cahier des charges défini ensemble."
      },
      {
        question: "Comment adaptez-vous les passages en période de congés ou de forte affluence ?",
        answer: "Nos contrats sont modulables : vous pouvez renforcer la fréquence durant les fêtes ou soldes, ou suspendre temporairement les passages lors de vos congés annuels sur simple préavis."
      }
    ]
  },

  // 9. Nettoyage de Cabinets et Espaces de Soins (NEW)
  {
    id: "nettoyage-cabinets-soins",
    slug: "nettoyage-cabinets-soins",
    categoryId: "soins",
    categoryLabel: "Nettoyage de cabinets & espaces de soins",
    title: "Nettoyage de cabinets médicaux, kinésithérapie & espaces de soins",
    metaTitle: "Nettoyage de Cabinets de Kinésithérapie & Soins (66) | FL Clean AR",
    metaDescription: "Entretien soigné de cabinets de kinésithérapie, cabinets dentaires, salles d'examen et d'attente dans les Pyrénées-Orientales. Hygiène rigoureuse et discrétion.",
    shortDescription: "Entretien méticuleux des salles de consultation, tables de soins, plateaux techniques d'exercices, salles d'attente et sanitaires.",
    fullDescription: "Les cabinets de kinésithérapie, cabinets dentaires et praticiens libéraux de santé exigent un niveau d'hygiène rigoureux et un respect absolu de la confidentialité. FL Clean AR assure le nettoyage soigné de vos salles de consultation, plateaux techniques d'exercices, bureaux d'accueil et salles d'attente dans les Pyrénées-Orientales.",
    detailedParagraphs: [
      "Dans un cabinet de soins, la propreté perçue rassure immédiatement vos patients. Chaque passage est organisé avec rigueur : surélévation des tabourets et chaises pour libérer l'accès aux sols, dépoussiérage méticuleux des dessertes et plans de consultation, et nettoyage sans trace des grands miroirs muraux utilisés pour la rééducation posturale.",
      "Nous entretenons les sols carrelés grand format et sols techniques avec des solutions professionnelles neutres, sans glissance résiduelle pour la sécurité des patients.",
      "Nous portons une attention particulière aux sanitaires et à la salle d'attente, tout en respectant scrupuleusement la confidentialité des dossiers et la tranquillité de vos praticiens."
    ],
    targetCustomer: "Professionnels",
    features: [
      "Entretien des salles de soins et consultation avec mobilier surélevé pour le lavage des sols",
      "Nettoyage des plateaux techniques d'exercices, rééducation et zones de kinésithérapie",
      "Nettoyage sans trace des grands miroirs de contrôle postural et fenêtres dépolies",
      "Entretien soigné des salles d'attente, banque d'accueil et sanitaires patients",
      "Lavage des sols carrelés grand format avec produits professionnels sécurisés",
      "Discrétion absolue et respect des règles déontologiques des professions de santé"
    ],
    imageSrc: "/assets/images/chantier-cabinet-kinesitherapie-aspres.webp",
    imageAlt: "Salle de soins de kinésithérapie avec table de manipulation et sol carrelé entretenu",
    hasAuthenticPhoto: true,
    frequencyOptions: [
      "Passage régulier pluri-hebdomadaire",
      "Contrat hebdomadaire d'entretien approfondi",
      "Passage bimensuel ou mensuel",
      "Remise en état ponctuelle"
    ],
    relatedSlugs: ["nettoyage-bureaux-locaux", "locaux-professionnels", "vitrines-commerciales"],
    importantNotice:
      "Important : Prestation d'entretien courant et d'hygiène des locaux professionnels de santé. Ne constitue pas une prestation de stérilisation chirurgicale, de désinfection hospitalière de bloc opératoire ni de conformité salle blanche, conformément aux directives éthiques et professionnelles de FL Clean AR.",
    faqs: [
      {
        question: "Quels types de structures de soins prenez-vous en charge ?",
        answer: "Nous intervenons auprès des cabinets de kinésithérapie, cabinets dentaires, cabinets infirmiers, ostéopathes, podologues, centres de rééducation et maisons de santé pluridisciplinaires."
      },
      {
        question: "Assurez-vous la stérilisation du matériel médical ou chirurgical ?",
        answer: "Non. Par souci de transparence et d'éthique professionnelle, nous précisons que nous assurons exclusivement l'entretien de propreté et d'hygiène des locaux (sols, surfaces, mobilier accessible, sanitaires, vitrages). Nous n'intervenons pas sur les actes de stérilisation d'instruments ni sur les protocoles hospitaliers de blocs opératoires."
      },
      {
        question: "À quelle heure intervenez-vous pour ne pas croiser les patients ?",
        answer: "Nous adaptons nos horaires en fonction de vos consultations : soit tôt le matin avant le premier rendez-vous patient, soit en soirée après la fin des soins, soit pendant la pause méridienne si le cabinet est fermé."
      }
    ]
  }
];

export function getServicesByCategory(categoryId: string): ServiceItem[] {
  return servicesData.filter((s) => s.categoryId === categoryId);
}
