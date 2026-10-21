import React from "react";
import Link from "next/link";
import { HelpCircle, ChevronDown, Phone, ArrowRight } from "lucide-react";
import { businessConfig } from "@/config/business";

export const homeFaqItems = [
  {
    question: "Quel est le secteur d'intervention de FL Clean AR ?",
    answer:
      "FL Clean AR est basé à Thuir (66300) au Mas Maurette. Nous intervenons sur l'ensemble du département des Pyrénées-Orientales (66), notamment sur Thuir, Perpignan, Canet-en-Roussillon, Cabestany, Saint-Estève, Rivesaltes, Toulouges, Ponteilla, Argelès-sur-Mer et les communes environnantes.",
  },
  {
    question: "Quels types de clients et de bâtiments prenez-vous en charge ?",
    answer:
      "Nous travaillons pour les particuliers (villas, maisons de village, appartements, vérandas, baies vitrées de prestige, verrières de toiture) ainsi que pour les professionnels (vitrines commerciales, devantures de boutiques, locaux d'entreprises, cabinets médicaux et façades de bureaux).",
  },
  {
    question: "Comment nettoyez-vous les vitres en hauteur ou d'accès difficile ?",
    answer:
      "Nous disposons de matériels professionnels adaptés : pour les hauteurs modérées et verrières de plain-pied ou d'étage, nous employons des perches télescopiques en fibre de carbone à eau pure déminéralisée. Pour les façades d'immeubles jusqu'au 4ème étage et les accès complexes, nous intervenons en nacelle élévatrice télescopique avec balisage réglementaire au sol.",
  },
  {
    question: "Comment se déroule une demande de devis ?",
    answer:
      "Vous pouvez nous contacter directement par téléphone au 07 66 54 92 35, par messagerie WhatsApp ou via notre formulaire de contact en ligne. Nous étudions votre demande (typologie de vitrages, hauteur, contraintes) et vous transmettons une proposition claire, adaptée et sans engagement sous 24 à 48 heures.",
  },
  {
    question: "Qu'est-ce que le système de nettoyage à l'eau pure déminéralisée ?",
    answer:
      "Il s'agit d'une technologie écologique utilisant une eau filtrée et débarrassée à 100% de ses minéraux et calcaires par osmose inverse. Appliquée à la brosse douce sur les vitrages, elle dissout les salissures et sèche naturellement sans laisser aucune trace ni résidu calcaire, sans aucun solvant chimique.",
  },
  {
    question: "Proposez-vous des contrats d'entretien réguliers ?",
    answer:
      "Oui. En plus des remises en état ponctuelles (après travaux, nettoyage printanier), nous proposons des rythmes réguliers personnalisés pour les professionnels (hebdomadaire, bimensuel ou mensuel pour les vitrines et bureaux) et les particuliers (bimestriel, trimestriel ou semestriel pour les baies vitrées et vérandas).",
  },
];

export default function HomeFAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": homeFaqItems.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <section className="section section-light faq-section" aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Questions Fréquentes</span>
          <h2 id="faq-heading">Tout savoir sur nos interventions</h2>
          <div className="gold-line"></div>
          <p className="section-lead">
            Retrouvez les réponses à vos questions sur notre zone d'intervention dans le 66, nos équipements en hauteur et les modalités de devis.
          </p>
        </div>

        <div className="faq-grid">
          {homeFaqItems.map((item, index) => (
            <details key={index} className="faq-item">
              <summary className="faq-question">
                <span className="faq-q-text">{item.question}</span>
                <ChevronDown size={18} className="faq-icon" aria-hidden="true" />
              </summary>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="faq-footer-box">
          <p className="faq-footer-text">
            Vous avez une question spécifique sur vos vitrages ou votre configuration d&apos;accès ?
          </p>
          <div className="faq-footer-actions">
            <Link href="/contact" className="btn btn-gold btn-sm">
              <span>Poser une question ou demander un devis</span>
              <ArrowRight size={15} />
            </Link>
            <a href={businessConfig.phone.href} className="btn btn-outline btn-sm">
              <Phone size={15} />
              <span>Appeler le {businessConfig.phone.display}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
