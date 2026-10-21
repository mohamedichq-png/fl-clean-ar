import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Calendar, ChevronRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { servicesData } from "@/config/services";
import { businessConfig } from "@/config/business";

export const metadata = {
  title: "Nos Services de Nettoyage de Vitres & Verrières (66) | FL Clean AR",
  description:
    "Découvrez l'ensemble de nos prestations de nettoyage de surfaces vitrées dans les Pyrénées-Orientales : verrières, toitures vitrées, vitrines de magasins, vérandas, fenêtres et façades en hauteur.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Nos Services" }]} />

      {/* Page Header */}
      <section className="section section-light page-hero" aria-labelledby="services-hero-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Excellence &amp; Précision</span>
            <h1 id="services-hero-heading">Nos Services de Nettoyage de Surfaces Vitrées</h1>
            <div className="gold-line"></div>
            <p className="section-lead">
              FL Clean AR intervient auprès des particuliers et des professionnels dans les Pyrénées-Orientales pour restaurer la transparence et la clarté de tous types de vitrages, des plus classiques aux configurations les plus techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="section" aria-label="Liste détaillée des services">
        <div className="container">
          <div className="services-detailed-list">
            {servicesData.map((svc, index) => {
              const isEven = index % 2 === 1;
              return (
                <article
                  key={svc.id}
                  id={svc.slug}
                  className={`service-detail-item ${isEven ? "service-reversed" : ""}`}
                >
                  <div className="service-media-column">
                    <div className="service-img-wrapper">
                      <Image
                        src={svc.imageSrc}
                        alt={svc.imageAlt}
                        width={600}
                        height={400}
                        className="service-detail-img"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                      <div className="service-img-badge">
                        <span className="badge badge-gold">{svc.targetCustomer}</span>
                      </div>
                    </div>
                  </div>

                  <div className="service-content-column">
                    <span className="service-index">0{index + 1}</span>
                    <h2 className="service-detail-title">
                      <Link href={`/services/${svc.slug}`} className="service-title-anchor">
                        {svc.title}
                      </Link>
                    </h2>
                    <div className="gold-dash"></div>
                    <p className="service-full-text">{svc.fullDescription}</p>

                    <div className="service-features-box">
                      <h3 className="features-subheading">Points clés de notre intervention :</h3>
                      <ul className="features-list">
                        {svc.features.map((feat, fIdx) => (
                          <li key={fIdx} className="feature-li">
                            <CheckCircle2 size={16} className="feature-check-icon" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="frequency-box">
                      <Calendar size={15} className="frequency-icon" />
                      <span className="frequency-text">
                        <strong>Fréquences d&apos;intervention :</strong> {svc.frequencyOptions.join(" • ")}
                      </span>
                    </div>

                    <div className="service-action-row">
                      <Link
                        href={`/services/${svc.slug}`}
                        className="btn btn-outline"
                      >
                        <span>Fiche détaillée &amp; FAQ</span>
                        <ChevronRight size={16} />
                      </Link>

                      <Link
                        href={`/contact?service=${encodeURIComponent(svc.title)}`}
                        className="btn btn-primary"
                      >
                        <span>Demander un devis</span>
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Honest Scope Clarification Note */}
          <div className="scope-clarification-card">
            <div className="clarification-header">
              <Shield size={20} className="clarification-icon" />
              <h3 className="clarification-title">Périmètre technique &amp; éthique professionnelle</h3>
            </div>
            <p className="clarification-desc">
              Chez FL Clean AR, nous nous concentrons exclusivement sur notre cœur de métier : le <strong>nettoyage de surfaces vitrées, verrières, vérandas, façades et vitrines</strong>. Nous n&apos;affichons pas de prestations non vérifiées (décapage haute pression agressif, traitement de toitures non vitrées ou désinfection industrielle lourde) afin de vous garantir un niveau de qualité et d&apos;expertise irréprochable sur chaque chantier.
            </p>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="section section-primary" aria-label="Demande de devis">
        <div className="container text-center" style={{ textAlign: "center", maxWidth: "700px" }}>
          <span className="section-subtitle" style={{ color: "var(--color-gold-light)" }}>
            Sur-Mesure &amp; Sans Engagement
          </span>
          <h2 style={{ color: "#ffffff", marginBottom: "1rem" }}>
            Un projet pour vos vitrages ou votre verrière ?
          </h2>
          <p style={{ color: "rgba(255, 255, 255, 0.9)", marginBottom: "2rem" }}>
            Contactez FL Clean AR pour une estimation claire adaptée à vos contraintes de hauteur et de fréquence.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-gold btn-lg">
              <span>Demander un devis en ligne</span>
              <ArrowRight size={18} />
            </Link>
            <a href={businessConfig.phone.href} className="btn btn-outline-white btn-lg">
              <span>Appeler le {businessConfig.phone.display}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
