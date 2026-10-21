import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Camera, Sparkles } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProjectGallery from "@/components/ProjectGallery";
import { businessConfig } from "@/config/business";

export const metadata = {
  title: "Nos Réalisations & Espaces Entretenus (66) | FL Clean AR",
  description:
    "Galerie authentique de nos chantiers de vitrages (nacelle, vérandas, verrières) et typologies d'espaces professionnels (bureaux, commerces, cabinets de soins) dans les Pyrénées-Orientales.",
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
            <span className="section-subtitle">Photographies Authentiques</span>
            <h1 id="portfolio-page-heading">Nos Réalisations &amp; Espaces Entretenus (66)</h1>
            <div className="gold-line"></div>
            <p className="section-lead">
              Découvrez nos interventions concrètes sur verrières résidentielles, toitures vitrées, baies cathédrale et typologies d&apos;espaces professionnels (bureaux, commerces, cabinets de soins). Chez FL Clean AR, nous présentons exclusivement des photographies authentiques.
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
              <h3 className="transparency-title">Charte d&apos;authenticité photographique FL Clean AR</h3>
              <p className="transparency-desc">
                Conformément à notre engagement de transparence intégrale, tous les clichés présentés ci-dessous correspondent à de véritables photographies de terrain. Nous n&apos;utilisons aucune image de synthèse ni visuel de banque d&apos;images générique. Les photographies d&apos;intérieurs professionnels (bureaux, réserves de commerces, cabinets de kinésithérapie) illustrent les typologies d&apos;espaces pris en charge par notre entreprise dans les Pyrénées-Orientales.
              </p>
            </div>
          </div>

          {/* Full Interactive Gallery with Lightbox */}
          <ProjectGallery showFilters={true} />

          {/* Project Inquiry Banner */}
          <div className="gallery-cta-banner">
            <div className="banner-content">
              <span className="banner-eyebrow">Votre espace mérite la même exigence</span>
              <h3 className="banner-heading">Vous disposez d&apos;un local, de bureaux ou de vitrages à entretenir ?</h3>
              <p className="banner-p">
                Chaque surface a ses spécificités d&apos;accès, de fréquence et d&apos;exposition. Nous nous déplaçons ou étudions vos photos pour vous proposer un devis sur mesure gratuit.
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
