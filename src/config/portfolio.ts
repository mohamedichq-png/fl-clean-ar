/**
 * FL Clean AR — Real Projects & Gallery Configuration
 * 
 * Strict rule: Every entry here corresponds to genuine user-supplied photographs.
 * Captions are neutral, fact-based, and highlight real techniques and equipment.
 */

export interface ProjectItem {
  id: string;
  title: string;
  category: "all" | "hauteur" | "residentiel" | "verrieres" | "tertiaire" | "eau-pure" | "bureaux" | "commerces" | "soins";
  categoryLabel: string;
  imageSrc: string;
  imageWebp: string;
  originalFileName: string;
  alt: string;
  caption: string;
  surfaceType: string;
  techniquesUsed: string[];
  aspectRatio: string;
  isSpaceTypology?: boolean;
}

export const portfolioCategories = [
  { id: "all", label: "Toutes nos réalisations" },
  { id: "hauteur", label: "Grande Hauteur & Nacelle" },
  { id: "residentiel", label: "Résidences & Baies Vitrées" },
  { id: "verrieres", label: "Verrières & Toitures de verre" },
  { id: "bureaux", label: "Bureaux & Espaces d'entreprises" },
  { id: "commerces", label: "Commerces & Arrière-boutiques" },
  { id: "soins", label: "Cabinets & Espaces de soins" },
  { id: "eau-pure", label: "Système Eau Pure & Perche" },
] as const;

export const portfolioProjects: ProjectItem[] = [
  {
    id: "chantier-immeuble-nacelle",
    title: "Intervention en nacelle élévatrice au 4ème étage",
    category: "hauteur",
    categoryLabel: "Grande Hauteur & Nacelle",
    imageSrc: "/assets/images/chantier-immeuble-nacelle.jpg",
    imageWebp: "/assets/images/chantier-immeuble-nacelle.webp",
    originalFileName: "new_photo_19.jpeg",
    alt: "Intervention en nacelle élévatrice télescopique au 4ème étage d'un immeuble tertiaire moderne",
    caption: "Lavage des baies vitrées et des profilés architecturaux brise-soleil sur un immeuble de 4 étages. Utilisation d'une nacelle élévatrice télescopique avec balisage réglementaire au sol.",
    surfaceType: "Façade vitrée 4 étages avec brise-soleil",
    techniquesUsed: [
      "Nacelle élévatrice articulée télescopique",
      "Équipements de protection individuelle (harnais certifié, casque)",
      "Balisage de sécurité au sol (cônes et périmètre réservé)",
      "Raclage manuel régulier et séchage des montants"
    ],
    aspectRatio: "3/4",
  },
  {
    id: "chantier-baie-vitree-luxe",
    title: "Baie vitrée salon cathédrale de 8 mètres",
    category: "residentiel",
    categoryLabel: "Résidences & Baies Vitrées",
    imageSrc: "/assets/images/chantier-baie-vitree-luxe.jpg",
    imageWebp: "/assets/images/chantier-baie-vitree-luxe.webp",
    originalFileName: "new_photo_04.jpeg",
    alt: "Nettoyage d'une immense baie vitrée double hauteur avec vue sur la montagne dans un salon cathédrale",
    caption: "Lavage intégral de grandes baies vitrées dans un salon sous plafond cathédrale face au panorama montagnard. Transparence absolue sans trace ni voile.",
    surfaceType: "Double vitrage grand format 8m de hauteur sous plafond",
    techniquesUsed: [
      "Lavage soigné des deux faces (intérieure et extérieure)",
      "Mouilleurs microfibres haute densité",
      "Protection intégrale des parquets et menuiseries nobles",
      "Finition manuelle anti-traces sur les montants métalliques"
    ],
    aspectRatio: "3/4",
  },
  {
    id: "farid-artisan-nacelle",
    title: "Précision artisanale en nacelle élévatrice",
    category: "hauteur",
    categoryLabel: "Grande Hauteur & Nacelle",
    imageSrc: "/assets/images/farid-artisan-nacelle.jpg",
    imageWebp: "/assets/images/farid-artisan-nacelle.webp",
    originalFileName: "new_photo_12.jpeg",
    alt: "Farid Hammoudi équipé en nacelle avec casque et gilet de sécurité pour le nettoyage de vitres en hauteur",
    caption: "Farid Hammoudi en plein geste technique à la raclette professionnelle depuis la nacelle élévatrice. Le coup de main artisanal assure un résultat parfait.",
    surfaceType: "Vitrages extérieurs de grande hauteur",
    techniquesUsed: [
      "Pilotage de nacelle élévatrice en sécurité",
      "Geste artisanal au mouilleur et à la raclette professionnelle",
      "Contrôle minutieux de l'absence de coulures",
      "Équipement complet homologué pour le travail aérien"
    ],
    aspectRatio: "4/5",
  },
  {
    id: "chantier-hall-atrium",
    title: "Grand atrium vitré & hall professionnel",
    category: "tertiaire",
    categoryLabel: "Bureaux, Magasins & Santé",
    imageSrc: "/assets/images/chantier-hall-atrium.jpg",
    imageWebp: "/assets/images/chantier-hall-atrium.webp",
    originalFileName: "new_photo_08.jpeg",
    alt: "Grand hall d'accueil vitré de 2 étages avec portes automatiques impeccablement nettoyé",
    caption: "Entretien complet d'un hall d'accueil avec verrière double hauteur et sas vitré à portes automatiques. Valorisation maximale de l'image de marque de l'établissement.",
    surfaceType: "Façade vitrée intérieure / extérieure et portes coulissantes",
    techniquesUsed: [
      "Lavage intégral double face",
      "Traitement anti-traces sur les zones de contact et vitrines",
      "Essuyage des profilés aluminium laqué",
      "Intervention programmée en dehors des heures de forte affluence"
    ],
    aspectRatio: "3/4",
  },
  {
    id: "chantier-toiture-avant-apres",
    title: "Verrière de toiture : Décrassage & avant/après",
    category: "verrieres",
    categoryLabel: "Verrières & Toitures de verre",
    imageSrc: "/assets/images/chantier-toiture-avant-apres.jpg",
    imageWebp: "/assets/images/chantier-toiture-avant-apres.webp",
    originalFileName: "new_photo_20.jpeg",
    alt: "Résultat avant/après sur verrière de toiture montrant la différence de transparence",
    caption: "Démonstration concrète sur toiture vitrée en pente : panneau encrassé par les pluies et pollutions (à gauche) opposé aux panneaux nettoyés et cristallins (à droite).",
    surfaceType: "Vitrages armés de toiture entourés de tuiles canal",
    techniquesUsed: [
      "Formule de dégraissage neutre pour les joints d'étanchéité",
      "Élimination douce des dépôts sans rayer le vitrage",
      "Rinçage d'eau sans pression agressive préservant les tuiles",
      "Séchage des bordures pour éviter tout ruissellement"
    ],
    aspectRatio: "3/4",
  },
  {
    id: "chantier-perche-hauteur-pro",
    title: "Façade rideau à la perche télescopique eau pure",
    category: "eau-pure",
    categoryLabel: "Système Eau Pure & Perche",
    imageSrc: "/assets/images/chantier-perche-hauteur-pro.jpg",
    imageWebp: "/assets/images/chantier-perche-hauteur-pro.webp",
    originalFileName: "new_photo_18.jpeg",
    alt: "Nettoyage à la perche télescopique à eau pure d'une façade rideau vitrée bleue",
    caption: "Nettoyage en cours d'un mur-rideau vitré à la perche télescopique en fibre de carbone. L'eau pure osmosée dissout les impuretés et sèche sans traces de calcaire.",
    surfaceType: "Mur-rideau vitré teinté bleu",
    techniquesUsed: [
      "Canne télescopique haute rigidité en fibre de carbone",
      "Eau 100% déminéralisée par filtration et osmose inverse",
      "Brosse à soies douces anti-rayures pour les profilés",
      "Séchage naturel écologique sans résidu minéral"
    ],
    aspectRatio: "9/16",
  },
  {
    id: "chantier-mediatheque-eau-pure",
    title: "Médiathèque municipale & verrières d'étage",
    category: "eau-pure",
    categoryLabel: "Système Eau Pure & Perche",
    imageSrc: "/assets/images/chantier-mediatheque-eau-pure.jpg",
    imageWebp: "/assets/images/chantier-mediatheque-eau-pure.webp",
    originalFileName: "new_photo_13.jpeg",
    alt: "Lavage des baies vitrées d'une médiathèque municipale à l'aide d'une perche télescopique et station mobile",
    caption: "Entretien des vitrages du 1er étage d'un équipement culturel public. La station mobile de filtration au sol alimente la perche télescopique sans bloquer le parvis.",
    surfaceType: "Ouvrants cintrés et verrière d'étage sur bâtiment communal",
    techniquesUsed: [
      "Station mobile de déminéralisation d'eau au sol",
      "Perche carbone permettant d'atteindre le 2ème niveau depuis le sol",
      "Respect des menuiseries et décors cintrés",
      "Absence de nacelle encombrante préservant la zone piétonne"
    ],
    aspectRatio: "4/5",
  },
  {
    id: "chantier-centre-medical-moderne",
    title: "Centre médical & modules vitrés en avancée",
    category: "tertiaire",
    categoryLabel: "Bureaux, Magasins & Santé",
    imageSrc: "/assets/images/chantier-centre-medical-moderne.jpg",
    imageWebp: "/assets/images/chantier-centre-medical-moderne.webp",
    originalFileName: "new_photo_03.jpeg",
    alt: "Façade contemporaine d'un centre médical avec boîtes vitrées saillantes",
    caption: "Lavage régulier des modules vitrés contemporains en saillie architecturale d'un pôle de santé. Une géométrie spécifique requérant des techniques précises.",
    surfaceType: "Caissons vitrés cubiques en saillie de façade",
    techniquesUsed: [
      "Technique d'accès articulée adaptée aux débords de façade",
      "Dégraissage minutieux des angles et contours",
      "Essuyage des profilés laqués bruns",
      "Garantie de clarté pour les professionnels de santé"
    ],
    aspectRatio: "14/10",
  },
  {
    id: "chantier-verriere-interieur",
    title: "Véranda & verrière intérieure après intervention",
    category: "verrieres",
    categoryLabel: "Verrières & Toitures de verre",
    imageSrc: "/assets/images/chantier-verriere-interieur.jpg",
    imageWebp: "/assets/images/chantier-verriere-interieur.webp",
    originalFileName: "media_1792363180319.jpg",
    alt: "Vue intérieure d'une verrière de véranda impeccable avec ciel visible et plantes",
    caption: "Vue intérieure après nettoyage complet des verres de toiture d'une véranda de caractère. Restitution totale de la lumière du jour et clarté sur la pierre.",
    surfaceType: "Double vitrage toiture véranda",
    techniquesUsed: [
      "Lavage intégral face extérieure et finition intérieure",
      "Traitement anti-traces sans solvants agressifs",
      "Finition microfibre haute densité sur les montants",
      "Protection du dallage et du mobilier intérieur"
    ],
    aspectRatio: "3/4",
  },
  {
    id: "chantier-verriere-intervention",
    title: "Nettoyage en cours sur verrière cintrée",
    category: "verrieres",
    categoryLabel: "Verrières & Toitures de verre",
    imageSrc: "/assets/images/chantier-verriere-intervention.jpg",
    imageWebp: "/assets/images/chantier-verriere-intervention.webp",
    originalFileName: "media_1792363180214.jpg",
    alt: "Intervention en cours sur verrière cintrée avec raclette et bac de nettoyage",
    caption: "Nettoyage soigné sur toiture vitrée cintrée. Dégraissage et passage de raclette professionnelle pour un résultat limpide et durable.",
    surfaceType: "Verre feuilleté incurvé sur châssis aluminium laqué",
    techniquesUsed: [
      "Mouillage avec solution dégraissante neutre",
      "Raclage manuel précis avec lame souple professionnelle",
      "Essuyage soigné des profilés et contours",
      "Équipement d'accès adapté aux pentes délicates"
    ],
    aspectRatio: "16/10",
  },
  {
    id: "chantier-cabinet-sante",
    title: "Cabinet de kinésithérapie & hygiène vitrée",
    category: "tertiaire",
    categoryLabel: "Bureaux, Magasins & Santé",
    imageSrc: "/assets/images/chantier-cabinet-sante.jpg",
    imageWebp: "/assets/images/chantier-cabinet-sante.webp",
    originalFileName: "new_photo_15.jpeg",
    alt: "Salle de soins d'un cabinet de kinésithérapie avec fenêtres à film occultant impeccablement entretenues",
    caption: "Entretien des ouvertures vitrées et miroirs d'un cabinet médical. Propreté hygiénique, absence de poussières et préservation des films d'intimité.",
    surfaceType: "Fenêtres oscillo-battantes avec film dépoli et grands miroirs muraux",
    techniquesUsed: [
      "Nettoyage des vitres intérieures et extérieures",
      "Entretien des miroirs sans altération du tain",
      "Essuyage des menuiseries et poignées de portes",
      "Produits respectueux des normes d'hygiène des cabinets libéraux"
    ],
    aspectRatio: "3/4",
  },
  {
    id: "chantier-bureaux-espace-pause",
    title: "Espace pause & détente d'entreprise",
    category: "bureaux",
    categoryLabel: "Bureaux & Espaces d'entreprises",
    imageSrc: "/assets/images/chantier-bureaux-espace-pause.jpg",
    imageWebp: "/assets/images/chantier-bureaux-espace-pause.webp",
    originalFileName: "WhatsApp Image 2026-10-21 at 03.55.39 (3).jpeg",
    alt: "Espace pause d'entreprise avec kitchenette, table en bois et chaises relevées pour l'entretien des sols",
    caption: "Espace pause et réfectoire d'entreprise préparé pour l'intervention : mobilier surélevé pour permettre un dépoussiérage et un lavage soigné de l'ensemble du sol carrelé.",
    surfaceType: "Espace pause & réfectoire professionnel",
    techniquesUsed: [
      "Mobilier surélevé pour un accès total à l'ensemble du sol",
      "Nettoyage et essuyage des plans de travail et crédences",
      "Aspiration et lavage soigné du sol carrelé",
      "Tri et évacuation des corbeilles selon protocole"
    ],
    aspectRatio: "3/4",
    isSpaceTypology: true,
  },
  {
    id: "chantier-cabinet-kinesitherapie-aspres",
    title: "Salle de soins en cabinet de kinésithérapie",
    category: "soins",
    categoryLabel: "Cabinets & Espaces de soins",
    imageSrc: "/assets/images/chantier-cabinet-kinesitherapie-aspres.jpg",
    imageWebp: "/assets/images/chantier-cabinet-kinesitherapie-aspres.webp",
    originalFileName: "WhatsApp Image 2026-10-21 at 03.55.39 (4).jpeg",
    alt: "Salle de consultation de kinésithérapie avec table de manipulation, mobilier relevé et cadre mural Les Aspres",
    caption: "Salle de soins en cabinet de kinésithérapie : préparation du sol par surélévation des assises, dépoussiérage méticuleux et lavage du carrelage grand format.",
    surfaceType: "Cabinet de kinésithérapie & salle de soins",
    techniquesUsed: [
      "Mobilier et tabourets surélevés pour lavage continu sans obstacle",
      "Entretien du sol carrelé grand format avec solution neutre",
      "Nettoyage minutieux des vitrages et films dépolis",
      "Respect rigoureux de la confidentialité et du matériel de soins"
    ],
    aspectRatio: "3/4",
    isSpaceTypology: true,
  },
  {
    id: "chantier-plateau-technique-reeducation",
    title: "Plateau technique & équipement de rééducation",
    category: "soins",
    categoryLabel: "Cabinets & Espaces de soins",
    imageSrc: "/assets/images/chantier-plateau-technique-reeducation.jpg",
    imageWebp: "/assets/images/chantier-plateau-technique-reeducation.webp",
    originalFileName: "WhatsApp Image 2026-10-21 at 03.55.40 (4).jpeg",
    alt: "Plateau technique de rééducation avec rack de poids, haltères et matériel d'entraînement physique",
    caption: "Plateau technique et salle d'exercices de rééducation : dépoussiérage et entretien régulier des sols techniques autour des équipements sportifs.",
    surfaceType: "Plateau technique & zone d'exercices rééducatifs",
    techniquesUsed: [
      "Dépoussiérage soigné autour des racks de poids et structures de musculation",
      "Lavage des sols techniques antidérapants",
      "Précision et respect absolu des équipements de rééducation"
    ],
    aspectRatio: "3/4",
    isSpaceTypology: true,
  },
  {
    id: "chantier-cabinet-soins-table-manipulation",
    title: "Cabinet de consultation & miroir mural",
    category: "soins",
    categoryLabel: "Cabinets & Espaces de soins",
    imageSrc: "/assets/images/chantier-cabinet-soins-table-manipulation.jpg",
    imageWebp: "/assets/images/chantier-cabinet-soins-table-manipulation.webp",
    originalFileName: "WhatsApp Image 2026-10-21 at 03.55.40 (2).jpeg",
    alt: "Cabinet de consultation avec table de manipulation, grand miroir mural et sol carrelé",
    caption: "Salle de soins et manipulation : entretien du sol carrelé moderne, dépoussiérage des dessertes et nettoyage sans trace du grand miroir mural de contrôle postural.",
    surfaceType: "Cabinet médical / paramédical & table de soin",
    techniquesUsed: [
      "Nettoyage sans trace du grand miroir mural de rééducation",
      "Lavage soigné du sol carrelé dégagé de tout obstacle",
      "Hygiène quotidienne et soin attentif apporté aux surfaces"
    ],
    aspectRatio: "3/4",
    isSpaceTypology: true,
  },
  {
    id: "chantier-arriere-boutique-laboratoire",
    title: "Arrière-boutique & laboratoire de préparation",
    category: "commerces",
    categoryLabel: "Commerces & Arrière-boutiques",
    imageSrc: "/assets/images/chantier-arriere-boutique-laboratoire.jpg",
    imageWebp: "/assets/images/chantier-arriere-boutique-laboratoire.webp",
    originalFileName: "WhatsApp Image 2026-10-21 at 03.55.39 (2).jpeg",
    alt: "Arrière-boutique et laboratoire de préparation alimentaire avec chariots inox, plan de travail et sol carrelé lavé",
    caption: "Espace arrière-boutique et laboratoire commercial : dégagement des allées, entretien des plinthes et lavage du sol carrelé professionnel avec évacuation vers siphon.",
    surfaceType: "Laboratoire de préparation & arrière-boutique",
    techniquesUsed: [
      "Entretien des sols carrelés professionnels avec évacuation au sol",
      "Nettoyage des circulations autour des dessertes inox",
      "Protocoles adaptés aux exigences de propreté commerciale"
    ],
    aspectRatio: "3/4",
    isSpaceTypology: true,
  },
  {
    id: "chantier-arriere-boutique-decoupe-materiel",
    title: "Espace de découpe & réserve commerciale",
    category: "commerces",
    categoryLabel: "Commerces & Arrière-boutiques",
    imageSrc: "/assets/images/chantier-arriere-boutique-decoupe-materiel.jpg",
    imageWebp: "/assets/images/chantier-arriere-boutique-decoupe-materiel.webp",
    originalFileName: "WhatsApp Image 2026-10-21 at 03.55.39.jpeg",
    alt: "Espace arrière-boutique avec matériel de découpe inox, rayonnages et seau de nettoyage professionnel",
    caption: "Zone de service et préparation boucherie-traiteur : entretien régulier du sol et des abords des équipements avec matériel de lavage professionnel.",
    surfaceType: "Zone de découpe & réserve de magasin",
    techniquesUsed: [
      "Dégagement du sol pour lavage et brossage des carreaux",
      "Utilisation de matériel professionnel de lavage des sols",
      "Respect des installations et rayonnages de réserve"
    ],
    aspectRatio: "3/4",
    isSpaceTypology: true,
  },
  {
    id: "chantier-commerce-reserve-froide",
    title: "Chambre froide & réserve commerciale",
    category: "commerces",
    categoryLabel: "Commerces & Arrière-boutiques",
    imageSrc: "/assets/images/chantier-commerce-reserve-froide.jpg",
    imageWebp: "/assets/images/chantier-commerce-reserve-froide.webp",
    originalFileName: "WhatsApp Image 2026-10-21 at 03.55.39 (1).jpeg",
    alt: "Chambre froide et réserve carrelée avec étagères métalliques et sol lavé",
    caption: "Espace de stockage frigorifique et réserve professionnelle : sol carrelé entretenu avec rayonnages métalliques et plinthes soignées.",
    surfaceType: "Chambre froide & réserve de stockage",
    techniquesUsed: [
      "Lavage du sol carrelé antidérapant résistant au froid",
      "Nettoyage des plinthes et angles de réserves",
      "Séchage soigné des zones de circulation"
    ],
    aspectRatio: "3/4",
    isSpaceTypology: true,
  },
];
