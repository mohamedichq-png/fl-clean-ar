/**
 * FL Clean AR — Genuine Customer Reviews Configuration
 * 
 * Strict Client Guidelines:
 * - Do not invent fake reviews, fake customer names, or fabricated star ratings.
 * - Genuine reviews are displayed only when confirmed and approved by the owner.
 * - Submissions from the on-site review form are held in moderation until verified.
 * - Official Google Business Profile review link is provided for direct public reviews.
 */

export interface CustomerReview {
  id: string;
  authorName: string; // e.g. "Laurent M." or "Cabinet de Santé"
  customerType: "Particulier" | "Professionnel";
  serviceCategory: "vitres" | "bureaux" | "commerces" | "soins" | "autre";
  serviceName: string; // e.g. "Nettoyage de verrière", "Entretien de bureaux"
  rating: number; // 1 to 5
  date: string; // e.g. "2026-09"
  comment: string;
  location: string; // e.g. "Thuir", "Perpignan"
  isVerified: boolean;
  source: "direct" | "google";
}

/**
 * List of genuine, approved customer reviews.
 * Kept strictly authentic: only reviews provided and confirmed by the business owner are displayed.
 */
export const verifiedReviews: CustomerReview[] = [];

/**
 * Review system settings
 */
export const reviewsConfig = {
  sectionTitle: "Avis clients",
  sectionSubtitle: "Retours d'Expérience & Transparence",
  supportingText:
    "Votre avis nous aide à améliorer nos prestations et à accompagner nos futurs clients dans leur choix.",
  transparencyNotice:
    "Chez FL Clean AR, nous accordons une importance primordiale à l'authenticité : aucun avis n'est inventé ou acheté. Tous les témoignages présentés sont issus de prestations réelles réalisées dans les Pyrénées-Orientales.",
  moderationNotice:
    "Afin de garantir la sécurité et la sincérité des retours, chaque avis soumis via notre site fait l'objet d'une modération avant publication. Seuls le prénom et l'initiale de votre nom sont diffusés publiquement.",
  googleReviews: {
    label: "Donner votre avis sur Google",
    searchQuery: "FL Clean AR Mas Maurette Thuir",
    profileUrl: "https://www.google.com/maps/search/?api=1&query=FL+Clean+AR+Thuir",
    isPendingOwnerDirectUrl: true,
  },
  availableServiceChoices: [
    "Nettoyage de vitres et fenêtres",
    "Nettoyage de verrière ou véranda",
    "Nettoyage de vitrage en hauteur / nacelle",
    "Nettoyage de bureaux et locaux professionnels",
    "Nettoyage de commerce ou boutique",
    "Nettoyage de cabinet de soins / kinésithérapie",
    "Autre prestation de nettoyage",
  ],
};
