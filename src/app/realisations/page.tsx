import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Camera, Sparkles } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProjectGallery from "@/components/ProjectGallery";
import { businessConfig } from "@/config/business";

export const metadata = {
  title: "Nos Réalisations & Chantiers de Nettoyage de Vitres (66) | FL Clean AR",
  description:
    "Galerie de nos chantiers réels de nettoyage de verrières, vérandas, façades et toitures vitrées dans les Pyrénées-Orientales. Photographies authentiques sans retouche artificielle.",
  alternates: {
    canonical: "/realisations",
  },
};

export default function RealisationsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Réalisations" }]} />

      {/* Page Header */}
      <section className="section section-light page-hero" aria-labelledby="portfolio-page-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Photographies de Chantiers</span>
            <h1 id="portfolio-page-heading">Nos Réalisations en Pyrénées-Orientales</h1>
            <div className="gold-line"></div>
            <p className="section-lead">
              Découvrez nos interventions concrètes sur verrières résidentielles, toitures vitrées et vérandas. Chez FL Clean AR, nous présentons exclusivement des photographies réelles de notre travail, garantissant une authenticité sans filtre ni retouche.
            </p>
          </div>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="section" aria-label="Galerie interactive des réalisations">
        <div className="container">
          {/* Transparency Statement Card */}
          <div className="transparency-card">
            <div className="transparency-icon-wrap">
              <Camera size={22} />
            </div>
            <div className="transparency-text">
              <h3 className="transparency-title">Charte d&apos;authenticité photographique</h3>
              <p className="transparency-desc">
                Conformément à notre charte de transparence, les clichés présentés ci-dessous correspondent fidèlement à nos interventions réelles. Nous n&apos;utilisons aucune image de synthèse, aucun faux avant/après monté de toutes pièces, et aucun visuel d&apos;illustration tiers déconnecté de notre savoir-faire. Cliquez sur chaque cliché pour l&apos;agrandir et découvrir le détail des finitions.
              </p>
            </div>
          </div>

          {/* Full Interactive Gallery with Lightbox */}
          <ProjectGallery showFilters={true} />

          {/* Project Inquiry Banner */}
          <div className="gallery-cta-banner">
            <div className="banner-content">
              <span className="banner-eyebrow">Votre chantier mérite la même exigence</span>
              <h3 className="banner-heading">Vous disposez d&apos;une verrière ou de vitrages similaires ?</h3>
              <p className="banner-p">
                Chaque surface a ses spécificités d&apos;accès et d&apos;exposition. Nous nous déplaçons ou étudions vos photos pour vous proposer un devis sur mesure.
              </p>
            </div>
            <div className="banner-action">
              <Link href="/contact" className="btn btn-gold btn-lg">
                <span>Demander un devis</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
