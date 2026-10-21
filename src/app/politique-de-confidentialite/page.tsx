import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, CheckCircle2 } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { businessConfig } from "@/config/business";

export const metadata = {
  title: "Politique de Confidentialité & RGPD | FL Clean AR",
  description: "Politique de protection des données personnelles de FL Clean AR conformément au RGPD.",
  alternates: {
    canonical: "/politique-de-confidentialite",
  },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Politique de confidentialité" }]} />

      <section className="section section-light page-hero">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Protection de vos Données</span>
            <h1>Politique de Confidentialité (RGPD)</h1>
            <div className="gold-line"></div>
            <p className="section-lead">
              FL Clean AR s'engage à respecter la vie privée de ses utilisateurs et clients conformément au Règlement Général sur la Protection des Données (RGPD 2016/679).
            </p>
          </div>
        </div>

        
      </section>

      <section className="section">
        <div className="container container-narrow">
          <div className="privacy-card-summary">
            <div className="summary-icon">
              <Lock size={22} />
            </div>
            <div>
              <h3 className="summary-title">Engagement de transparence et de sécurité</h3>
              <p className="summary-text">
                Vos informations ne sont jamais revendues, louées ou cédées à des tiers. Elles sont uniquement utilisées pour traiter votre demande de devis et organiser nos interventions techniques.
              </p>
            </div>
          </div>

          <div className="privacy-body">
            <h2>1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données collectées sur le site est :<br />
              <strong>{businessConfig.brandName}</strong> ({businessConfig.contactPerson})<br />
              Adresse : {businessConfig.address.fullAddress}<br />
              Email : <a href={businessConfig.email.href}>{businessConfig.email.address}</a><br />
              Téléphone : <a href={businessConfig.phone.href}>{businessConfig.phone.display}</a>
            </p>

            <h2>2. Données collectées et finalités</h2>
            <p>
              Lorsque vous utilisez le formulaire de demande de devis sur notre site, nous collectons les données suivantes :
            </p>
            <ul>
              <li><strong>Nom et prénom :</strong> pour identifier l'interlocuteur et personnaliser l'échange.</li>
              <li><strong>Adresse email et numéro de téléphone :</strong> pour vous adresser votre devis et convenir des modalités d'intervention.</li>
              <li><strong>Ville ou code postal :</strong> pour vérifier la faisabilité géographique de l'intervention dans notre zone de chalandise (Pyrénées-Orientales).</li>
              <li><strong>Type de client (Particulier / Professionnel) et détails des surfaces :</strong> pour adapter l'estimation tarifaire et le matériel requis.</li>
            </ul>

            <h2>3. Base légale du traitement</h2>
            <p>
              Le traitement de vos données repose sur votre <strong>consentement explicite</strong> (case à cocher obligatoire avant l'envoi du formulaire) ainsi que sur l'exécution de mesures précontractuelles prises à votre demande (établissement d'un devis).
            </p>

            <h2>4. Durée de conservation</h2>
            <p>
              Les données relatives à une demande de devis non suivie d'intervention sont conservées pendant une durée maximale de <strong>3 ans</strong> à compter du dernier contact émanant de votre part. Si l'intervention est réalisée, les données nécessaires à la facturation sont conservées conformément aux obligations comptables et fiscales légales en vigueur (10 ans).
            </p>

            <h2>5. Vos droits informatiques et libertés</h2>
            <p>
              Conformément à la réglementation européenne, vous disposez des droits suivants sur vos données :
            </p>
            <ul>
              <li>Droit d'accès et de rectification de vos informations.</li>
              <li>Droit à l'effacement de vos données (« droit à l'oubli »).</li>
              <li>Droit à la limitation du traitement.</li>
              <li>Droit d'opposition pour motif légitime.</li>
            </ul>
            <p>
              Pour exercer l'un de ces droits, vous pouvez contacter directement le responsable par email à l'adresse suivante :{" "}
              <a href={businessConfig.email.href}><strong>{businessConfig.email.address}</strong></a> ou par courrier à l'adresse du siège.
            </p>

            <h2>6. Cookies et traceurs</h2>
            <p>
              Le site FL Clean AR privilégie une navigation respectueuse sans traceurs publicitaires intrusifs ni revente d'audience. Aucun cookie de profilage commercial tiers n'est déposé sans votre accord exprès.
            </p>

            <h2>7. Réclamation auprès de la CNIL</h2>
            <p>
              Si vous estimez que le traitement de vos données ne respecte pas le RGPD, vous disposez du droit d'introduire une réclamation auprès de l'autorité de contrôle compétente en France : la CNIL (Commission Nationale de l'Informatique et des Libertés - <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>).
            </p>
          </div>
        </div>

        
      </section>
    </>
  );
}
