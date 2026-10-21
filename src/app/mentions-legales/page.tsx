import React from "react";
import Link from "next/link";
import { AlertCircle, Shield, FileText } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { businessConfig } from "@/config/business";

export const metadata = {
  title: "Mentions Légales | FL Clean AR",
  description: "Mentions légales du site officiel de FL Clean AR conformément aux dispositions de la loi française.",
  alternates: {
    canonical: "/mentions-legales",
  },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Mentions légales" }]} />

      <section className="section section-light page-hero">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Informations Réglementaires</span>
            <h1>Mentions Légales</h1>
            <div className="gold-line"></div>
            <p className="section-lead">
              Conformément aux dispositions de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN).
            </p>
          </div>
        </div>

        
      </section>

      <section className="section">
        <div className="container container-narrow">
          <div className="legal-notice-box">
            <div className="legal-alert-icon">
              <AlertCircle size={22} />
            </div>
            <div>
              <h3 className="legal-alert-title">Notice relative aux informations d'immatriculation</h3>
              <p className="legal-alert-text">
                Les coordonnées mentionnées ci-dessous sont issues des éléments transmis via la carte de visite de l'entreprise. En vertu des règles de conformité et de transparence, le numéro d'immatriculation au Répertoire des Entreprises (SIRET / RCS) est en cours de renseignement définitif par le gérant et sera complété dès validation de l'immatriculation.
              </p>
            </div>
          </div>

          <div className="legal-content">
            <h2>1. Éditeur du site internet</h2>
            <p>
              Le présent site internet est édité par :
            </p>
            <ul>
              <li><strong>Nom commercial :</strong> {businessConfig.brandName} (désignation commerciale) / {businessConfig.legalNameCandidate}</li>
              <li><strong>Responsable de la publication :</strong> {businessConfig.contactPerson}</li>
              <li><strong>Adresse :</strong> {businessConfig.address.fullAddress}</li>
              <li><strong>Téléphone :</strong> <a href={businessConfig.phone.href}>{businessConfig.phone.display}</a></li>
              <li><strong>Email de contact :</strong> <a href={businessConfig.email.href}>{businessConfig.email.address}</a></li>
              <li><strong>Numéro SIRET / RCS :</strong> <em>En cours d'enregistrement / de confirmation formelle</em></li>
              <li><strong>Activité principale :</strong> Nettoyage de vitres et surfaces vitrées pour particuliers et professionnels</li>
            </ul>

            <h2>2. Hébergement du site</h2>
            <p>
              Le site internet est hébergé par une infrastructure d'hébergement cloud haute disponibilité répondant aux normes de sécurité et de protection des données en vigueur au sein de l'Union Européenne (RGPD).
            </p>
            <p>
              <em>(À compléter avec les coordonnées exactes du fournisseur d'hébergement lors du déploiement définitif : ex. Vercel Inc., OVHcloud, ou o2switch).</em>
            </p>

            <h2>3. Propriété intellectuelle</h2>
            <p>
              L'ensemble des éléments constituant le site FL Clean AR (notamment le logo original, la charte graphique, les textes, ainsi que les <strong>photographies réelles de chantiers</strong> transmises par l'entreprise) sont la propriété exclusive de FL Clean AR ou font l'objet d'une autorisation d'utilisation.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est formellement interdite sans l'autorisation écrite préalable de l'éditeur.
            </p>

            <h2>4. Données personnelles</h2>
            <p>
              Pour toute information relative à la collecte, au traitement et aux droits relatifs à vos données personnelles (notamment via le formulaire de demande de devis), veuillez consulter notre{" "}
              <Link href="/politique-de-confidentialite" className="legal-inline-link">
                Politique de Confidentialité
              </Link>.
            </p>

            <h2>5. Liens hypertextes</h2>
            <p>
              Le site peut contenir des liens hypertextes vers d'autres sites (notamment Google Maps ou WhatsApp). FL Clean AR n'exerce aucun contrôle sur le contenu de ces sites tiers et décline toute responsabilité quant à leur contenu ou leurs politiques de confidentialité.
            </p>

            <h2>6. Droit applicable et attribution de juridiction</h2>
            <p>
              Tout litige en relation avec l'utilisation du site FL Clean AR est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents du ressort du siège social de l'entreprise.
            </p>
          </div>
        </div>

        
      </section>
    </>
  );
}
