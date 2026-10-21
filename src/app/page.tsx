import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Sparkles, CheckCircle2, Phone, MessageSquare, MapPin, Building2, Store, Stethoscope } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ProjectGallery from "@/components/ProjectGallery";
import ProcessSection from "@/components/ProcessSection";
import CustomerReviews from "@/components/CustomerReviews";
import HomeFAQ from "@/components/HomeFAQ";
import QuoteForm from "@/components/QuoteForm";
import { servicesData, serviceCategories } from "@/config/services";
import { businessConfig } from "@/config/business";

export const metadata = {
  title: "FL Clean AR | Nettoyage Professionnel de Vitres, Bureaux & Locaux (66)",
  description:
    "Nettoyage professionnel de vitres, verrières, bureaux, commerces et espaces professionnels dans les Pyrénées-Orientales (Thuir, Perpignan). Artisan qualifié, matériel adapté et devis personnalisé.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
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
              <h3 className="trust-title">Finitions soignées sans traces</h3>
              <p className="trust-desc">
                Matériel professionnel de haute précision (raclettes ergonomiques, mouilleurs microfibres, perches carbone eau pure, aspiration et lavage des sols) pour un résultat net et durable.
              </p>
            </div>

            <div className="trust-card">
              <div className="trust-icon-box">
                <ShieldCheck size={24} />
              </div>
              <h3 className="trust-title">Vitrages &amp; Locaux Professionnels</h3>
              <p className="trust-desc">
                Prestations adaptées aux vitres toutes hauteurs (nacelle jusqu&apos;au 4ème étage) ainsi qu&apos;aux bureaux, commerces et cabinets de soins pour une propreté continue.
              </p>
            </div>

            <div className="trust-card">
              <div className="trust-icon-box">
                <MapPin size={24} />
              </div>
              <h3 className="trust-title">Artisan Local de Proximité (66)</h3>
              <p className="trust-desc">
                Basé à Thuir (Mas Maurette), Farid Hammoudi intervient sur l&apos;ensemble des Pyrénées-Orientales : Thuir, communauté urbaine de Perpignan Méditerranée et communes environnantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 4 Main Categories Overview */}
      <section className="section categories-overview-section" aria-labelledby="categories-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Nos Domaines d&apos;Intervention</span>
            <h2 id="categories-heading">Une offre complète de nettoyage professionnel</h2>
            <div className="gold-line"></div>
            <p className="section-lead">
              FL Clean AR élargit ses prestations pour répondre aux besoins des professionnels tout en conservant son savoir-faire historique sur les surfaces vitrées.
            </p>
          </div>

          <div className="categories-card-grid">
            {serviceCategories.map((cat) => {
              const Icon =
                cat.id === "vitres"
                  ? Sparkles
                  : cat.id === "bureaux"
                  ? Building2
                  : cat.id === "commerces"
                  ? Store
                  : Stethoscope;

              return (
                <div key={cat.id} className="category-overview-card">
                  <div className="cat-card-header">
                    <div className="cat-card-icon">
                      <Icon size={24} />
                    </div>
                    <span className="cat-target-badge">{cat.targetAudience}</span>
                  </div>
                  <h3 className="cat-card-title">{cat.title}</h3>
                  <p className="cat-card-desc">{cat.shortDescription}</p>

                  <ul className="cat-scope-list">
                    {cat.scopePoints.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="cat-scope-item">
                        <CheckCircle2 size={15} className="cat-scope-check" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {cat.importantNotice && (
                    <div className="cat-notice-box">
                      <span className="cat-notice-tag">Précision déontologique</span>
                      <p className="cat-notice-text">{cat.importantNotice}</p>
                    </div>
                  )}

                  <div className="cat-card-footer">
                    <Link href={`/services#${cat.id}`} className="btn btn-outline btn-sm">
                      <span>Voir les prestations</span>
                      <ArrowRight size={14} />
                    </Link>
                    <Link
                      href={`/contact?service=${encodeURIComponent(cat.title)}`}
                      className="btn btn-primary btn-sm"
                    >
                      <span>Demander un devis</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Detailed Services Grid */}
      <section className="section section-light" aria-labelledby="services-preview-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Prestations Détaillées</span>
            <h2 id="services-preview-heading">Nos services adaptés à chaque besoin</h2>
            <div className="gold-line"></div>
            <p className="section-lead">
              De la verrière résidentielle et l&apos;accès en nacelle élévatrice au nettoyage de bureaux, boutiques et cabinets de soins.
            </p>
          </div>

          <div className="services-grid">
            {allServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="services-footer-cta">
            <Link href="/services" className="btn btn-outline btn-lg">
              <span>Consulter l&apos;ensemble de nos services en détail</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Portfolio Preview Section (Authentic Photos Only) */}
      <section className="section" aria-labelledby="portfolio-preview-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Photographies Authentiques</span>
            <h2 id="portfolio-preview-heading">Nos réalisations &amp; espaces entretenus</h2>
            <div className="gold-line"></div>
            <p className="section-lead">
              Photographies réelles sans filtre : nacelle élévatrice, baies vitrées cathédrale, verrières, espaces pause d&apos;entreprises, laboratoires commerciaux et cabinets de soins dans les Pyrénées-Orientales.
            </p>
          </div>

          <ProjectGallery initialLimit={6} showFilters={true} />

          <div className="portfolio-footer-cta">
            <Link href="/realisations" className="btn btn-primary btn-lg">
              <span>Voir toute la galerie de nos réalisations</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Customer Reviews Section (PHASE 2.1) */}
      <CustomerReviews />

      {/* 7. Process Section */}
      <ProcessSection />

      {/* 8. FAQ Section */}
      <HomeFAQ />

      {/* 9. Local Identity & Values Section */}
      <section className="section local-section" aria-labelledby="local-heading">
        <div className="container">
          <div className="local-grid">
            <div className="local-text-col">
              <span className="section-subtitle">Artisanat &amp; Proximité</span>
              <h2 id="local-heading">Farid Hammoudi — Votre artisan de confiance dans le 66</h2>
              <div className="gold-line gold-line-left"></div>
              <p>
                Basé à <strong>Thuir (Mas Maurette)</strong>, <strong>FL Clean AR</strong> intervient auprès des particuliers et des professionnels exigeants qui recherchent une propreté irréprochable et un interlocuteur de confiance.
              </p>
              <p>
                Farid Hammoudi assure personnellement le suivi et la réalisation des chantiers avec un outillage adapté : nacelle élévatrice pour les façades hautes, perches télescopiques à eau pure déminéralisée, raclage manuel précis pour les vitrages intérieurs, et protocoles soignés pour l&apos;entretien des sols et bureaux.
              </p>

              <div className="local-keypoints">
                <div className="keypoint">
                  <CheckCircle2 size={18} className="keypoint-icon" />
                  <span>Interventions toutes hauteurs (sol, perche télescopique &amp; nacelle articulée)</span>
                </div>
                <div className="keypoint">
                  <CheckCircle2 size={18} className="keypoint-icon" />
                  <span>Entretien régulier ou ponctuel de bureaux, commerces et espaces professionnels</span>
                </div>
                <div className="keypoint">
                  <CheckCircle2 size={18} className="keypoint-icon" />
                  <span>Interventions sur Thuir, Perpignan Méditerranée et l&apos;ensemble du 66</span>
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
                  <span className="badge-caption-title">Farid Hammoudi</span>
                  <span className="badge-caption-sub">Artisan FL Clean AR • Thuir (66)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Final Quote Section */}
      <section className="section section-primary" id="contact" aria-labelledby="final-cta-heading">
        <div className="container">
          <div className="quote-section-grid">
            <div className="quote-info-col">
              <span className="section-subtitle" style={{ color: "var(--color-gold-light)" }}>
                Parlons de vos besoins
              </span>
              <h2 id="final-cta-heading" style={{ color: "#ffffff" }}>
                Contactez-nous pour étudier votre besoin et demander un devis
              </h2>
              <div className="gold-line gold-line-left"></div>
              <p style={{ color: "rgba(255, 255, 255, 0.9)" }}>
                Particulier ou professionnel, transmettez-nous les détails de vos surfaces vitrées, bureaux ou espaces d&apos;activité. Nous analysons votre demande et vous apportons une proposition sur mesure sous 24h à 48h.
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
                  * Devis personnalisé gratuit et sans engagement. Déplacement pour visite technique si nécessaire selon la configuration du site.
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
