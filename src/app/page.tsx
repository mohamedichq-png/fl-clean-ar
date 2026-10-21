import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Sparkles, CheckCircle2, Phone, MessageSquare, MapPin } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ProjectGallery from "@/components/ProjectGallery";
import ProcessSection from "@/components/ProcessSection";
import HomeFAQ from "@/components/HomeFAQ";
import QuoteForm from "@/components/QuoteForm";
import { servicesData } from "@/config/services";
import { businessConfig } from "@/config/business";

export const metadata = {
  title: "FL Clean AR | Nettoyage Professionnel de Vitres, Verrières & Façades (66)",
  description:
    "Nettoyage professionnel de vitres, verrières, vérandas, vitrines et façades d'immeubles dans les Pyrénées-Orientales (Thuir, Perpignan). Artisan qualifié, matériel adapté et devis personnalisé.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  // Show all confirmed services with dedicated authentic photography
  const allServices = servicesData;

  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Authentic Reassurance Section */}
      <section className="section section-light trust-section" aria-labelledby="trust-heading">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-card">
              <div className="trust-icon-box">
                <Sparkles size={24} />
              </div>
              <h3 className="trust-title">Finitions sans traces</h3>
              <p className="trust-desc">
                Utilisation de matériel professionnel (raclettes de précision, perches télescopiques eau pure, mouilleurs microfibres) pour un résultat net sans rayures.
              </p>
            </div>

            <div className="trust-card">
              <div className="trust-icon-box">
                <ShieldCheck size={24} />
              </div>
              <h3 className="trust-title">Toutes Hauteurs &amp; Sécurité</h3>
              <p className="trust-desc">
                Intervention en nacelle élévatrice articulée et perches carbone pour atteindre en toute sécurité les façades vitrées et verrières jusqu&apos;au 4ème étage.
              </p>
            </div>

            <div className="trust-card">
              <div className="trust-icon-box">
                <MapPin size={24} />
              </div>
              <h3 className="trust-title">Ancrage Local (66)</h3>
              <p className="trust-desc">
                Basé à Thuir (Mas Maurette), nous intervenons sur l&apos;ensemble des Pyrénées-Orientales auprès des particuliers comme des commerçants et locaux d&apos;entreprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Preview Section */}
      <section className="section" aria-labelledby="services-preview-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Nos Domaines d&apos;Expertise</span>
            <h2 id="services-preview-heading">Prestations de nettoyage sur mesure</h2>
            <div className="gold-line"></div>
            <p className="section-lead">
              De la verrière résidentielle de caractère à la façade vitrée d&apos;immeuble en nacelle, découvrez nos solutions d&apos;entretien professionnelles.
            </p>
          </div>

          <div className="services-grid">
            {allServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="services-footer-cta">
            <Link href="/services" className="btn btn-outline btn-lg">
              <span>Découvrir le détail de tous nos services</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Portfolio Preview Section (Authentic Photos Only) */}
      <section className="section section-light" aria-labelledby="portfolio-preview-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Chantiers Réels &amp; Photographies Authentiques</span>
            <h2 id="portfolio-preview-heading">Nos réalisations en images</h2>
            <div className="gold-line"></div>
            <p className="section-lead">
              Photographies 100% authentiques issues de nos interventions réelles dans les Pyrénées-Orientales : nacelle élévatrice, baies vitrées de prestige, atriums et perche eau pure.
            </p>
          </div>

          <ProjectGallery initialLimit={6} showFilters={true} />

          <div className="portfolio-footer-cta">
            <Link href="/realisations" className="btn btn-primary btn-lg">
              <span>Voir l&apos;ensemble de nos réalisations en détail</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Process Section */}
      <ProcessSection />

      {/* 6. FAQ Section */}
      <HomeFAQ />

      {/* 7. Local Identity & Values Section */}
      <section className="section local-section" aria-labelledby="local-heading">
        <div className="container">
          <div className="local-grid">
            <div className="local-text-col">
              <span className="section-subtitle">Artisanat &amp; Proximité</span>
              <h2 id="local-heading">Farid Hammoudi — Votre artisan vitres de confiance dans le 66</h2>
              <div className="gold-line gold-line-left"></div>
              <p>
                Basé à <strong>Thuir</strong>, <strong>FL Clean AR</strong> (FL Vitre 66) intervient auprès des particuliers et des professionnels exigeants qui recherchent une propreté irréprochable et durable.
              </p>
              <p>
                Farid Hammoudi réalise lui-même chaque prestation avec des équipements professionnels certifiés : nacelle élévatrice articulée pour les immeubles et accès complexes, perches télescopiques en fibre de carbone à eau pure osmosée, et raclage manuel sans rayures pour les vérandas et intérieurs.
              </p>

              <div className="local-keypoints">
                <div className="keypoint">
                  <CheckCircle2 size={18} className="keypoint-icon" />
                  <span>Interventions toutes hauteurs (sol, perche télescopique &amp; nacelle)</span>
                </div>
                <div className="keypoint">
                  <CheckCircle2 size={18} className="keypoint-icon" />
                  <span>Système eau pure déminéralisée écologique sans chimie</span>
                </div>
                <div className="keypoint">
                  <CheckCircle2 size={18} className="keypoint-icon" />
                  <span>Déplacement dans tout le département des Pyrénées-Orientales</span>
                </div>
              </div>

              <div className="local-cta-box">
                <a href={businessConfig.phone.href} className="btn btn-primary">
                  <Phone size={16} />
                  <span>Joindre Farid Hammoudi au {businessConfig.phone.display}</span>
                </a>
              </div>
            </div>

            <div className="local-media-col">
              <div className="local-image-frame">
                <Image
                  src="/assets/images/farid-artisan-nacelle.webp"
                  alt="Farid Hammoudi au travail dans le panier de la nacelle élévatrice"
                  width={600}
                  height={750}
                  className="local-img"
                  loading="lazy"
                />
                <div className="local-caption-badge">
                  <span className="badge-caption-title">Farid Hammoudi en nacelle</span>
                  <span className="badge-caption-sub">Artisan laveur de vitre • FL Clean AR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final Quote Section */}
      <section className="section section-primary" id="contact" aria-labelledby="final-cta-heading">
        <div className="container">
          <div className="quote-section-grid">
            <div className="quote-info-col">
              <span className="section-subtitle" style={{ color: "var(--color-gold-light)" }}>
                Parlons de votre projet
              </span>
              <h2 id="final-cta-heading" style={{ color: "#ffffff" }}>
                Contactez-nous pour étudier votre besoin et obtenir un devis
              </h2>
              <div className="gold-line gold-line-left"></div>
              <p style={{ color: "rgba(255, 255, 255, 0.9)" }}>
                Particulier ou professionnel, transmettez-nous les détails de vos surfaces vitrées. Nous analysons votre demande et vous apportons une réponse claire adaptée à vos contraintes.
              </p>

              <div className="contact-direct-cards">
                <a href={businessConfig.phone.href} className="direct-card">
                  <div className="direct-card-icon">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="direct-card-label">Appel direct</span>
                    <strong className="direct-card-val">{businessConfig.phone.display}</strong>
                  </div>
                </a>

                {businessConfig.whatsapp.enabled && (
                  <a
                    href={businessConfig.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="direct-card"
                  >
                    <div className="direct-card-icon whatsapp-icon-bg">
                      <MessageSquare size={20} />
                    </div>
                    <div>
                      <span className="direct-card-label">WhatsApp professionnel</span>
                      <strong className="direct-card-val">Échanger par messagerie</strong>
                    </div>
                  </a>
                )}
              </div>

              <div className="quote-guarantee-note">
                <p>
                  * Devis personnalisé sans engagement. Déplacement pour repérage technique si nécessaire selon la configuration du site.
                </p>
              </div>
            </div>

            <div className="quote-form-col">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
