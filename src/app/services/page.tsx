import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Calendar, ChevronRight, Sparkles, Building2, Store, Stethoscope, AlertCircle } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { servicesData, serviceCategories } from "@/config/services";
import { businessConfig } from "@/config/business";

export const metadata = {
  title: "Nos Services de Nettoyage de Vitres, Bureaux & Locaux (66) | FL Clean AR",
  description:
    "Découvrez nos prestations de nettoyage dans les Pyrénées-Orientales : vitres, verrières, vitrines, bureaux et locaux d'entreprises, commerces et cabinets de soins. Devis gratuit sur mesure.",
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
            <span className="section-subtitle">Excellence &amp; Savoir-Faire Artisanal</span>
            <h1 id="services-hero-heading">Nos Services de Nettoyage Professionnel</h1>
            <div className="gold-line"></div>
            <p className="section-lead">
              FL Clean AR intervient auprès des particuliers, entreprises, commerçants et professionnels de santé dans l&apos;ensemble des Pyrénées-Orientales pour des prestations sur mesure de nettoyage de vitres, bureaux et locaux professionnels.
            </p>
          </div>

          {/* Quick Jump Anchors */}
          <div className="services-jump-bar" role="navigation" aria-label="Accès rapide aux catégories">
            {serviceCategories.map((cat) => (
              <a key={cat.id} href={`#cat-${cat.id}`} className="jump-link">
                <span>{cat.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Categorized Services Presentation */}
      <section className="section" aria-label="Prestations organisées par catégorie">
        <div className="container">
          {serviceCategories.map((category, catIndex) => {
            const Icon =
              category.id === "vitres"
                ? Sparkles
                : category.id === "bureaux"
                ? Building2
                : category.id === "commerces"
                ? Store
                : Stethoscope;

            const categoryServices = servicesData.filter((s) => s.categoryId === category.id);

            return (
              <div key={category.id} id={`cat-${category.id}`} className="category-service-block">
                {/* Category Header Banner */}
                <div className="category-block-header">
                  <div className="category-block-title-row">
                    <div className="cat-icon-wrap">
                      <Icon size={24} />
                    </div>
                    <div>
                      <span className="cat-number">Catégorie 0{catIndex + 1}</span>
                      <h2 className="cat-heading">{category.title}</h2>
                    </div>
                    <span className="badge badge-gold cat-audience-tag">{category.targetAudience}</span>
                  </div>

                  <p className="cat-desc-paragraph">{category.longDescription}</p>

                  {/* Scope Checklist Box */}
                  <div className="category-scope-box">
                    <h3 className="scope-box-title">Périmètre des prestations incluses :</h3>
                    <div className="scope-grid-2">
                      {category.scopePoints.map((point, pIdx) => (
                        <div key={pIdx} className="scope-grid-item">
                          <CheckCircle2 size={16} className="scope-check-icon" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Important ethical caveat for care spaces */}
                  {category.importantNotice && (
                    <div className="care-category-notice" role="note">
                      <AlertCircle size={20} className="notice-alert-icon" />
                      <div className="notice-body">
                        <strong>Précision déontologique &amp; périmètre d&apos;intervention :</strong>
                        <p>{category.importantNotice}</p>
                      </div>
                    </div>
                  )}

                  <div className="cat-header-cta-row">
                    <Link
                      href={`/contact?service=${encodeURIComponent(category.title)}`}
                      className="btn btn-gold btn-sm"
                    >
                      <span>Demander un devis pour cette catégorie</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>

                {/* Services List in this Category */}
                <div className="category-services-list">
                  {categoryServices.map((svc, index) => {
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
                              loading={catIndex === 0 && index === 0 ? "eager" : "lazy"}
                            />
                            <div className="service-img-badge">
                              <span className="badge badge-gold">{svc.targetCustomer}</span>
                            </div>
                          </div>
                        </div>

                        <div className="service-content-column">
                          <span className="service-index">0{index + 1}</span>
                          <h3 className="service-detail-title">
                            <Link href={`/services/${svc.slug}`} className="service-title-anchor">
                              {svc.title}
                            </Link>
                          </h3>
                          <div className="gold-dash"></div>
                          <p className="service-full-text">{svc.fullDescription}</p>

                          <div className="service-features-box">
                            <h4 className="features-subheading">Points clés de l&apos;intervention :</h4>
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
                              <strong>Fréquences possibles :</strong> {svc.frequencyOptions.join(" • ")}
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
              </div>
            );
          })}

          {/* Honest Scope Clarification Note */}
          <div className="scope-clarification-card">
            <div className="clarification-header">
              <Shield size={20} className="clarification-icon" />
              <h3 className="clarification-title">Périmètre technique &amp; éthique professionnelle FL Clean AR</h3>
            </div>
            <p className="clarification-desc">
              Chez FL Clean AR, nous nous concentrons sur les prestations que nous maîtrisons parfaitement : le <strong>nettoyage de surfaces vitrées toutes hauteurs (jusqu&apos;au 4ème étage en nacelle et perche eau pure)</strong> et l&apos;<strong>entretien courant de bureaux, commerces et cabinets de soins</strong> dans les Pyrénées-Orientales. Nous n&apos;affichons pas de prestations non vérifiées (décapage haute pression agressif, traitement de toitures non vitrées, ou désinfection hospitalière de bloc chirurgical) afin de vous garantir un niveau de qualité, de sécurité et d&apos;expertise irréprochable sur chaque chantier.
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
            Un projet pour vos vitres, bureaux ou locaux professionnels ?
          </h2>
          <p style={{ color: "rgba(255, 255, 255, 0.9)", marginBottom: "2rem" }}>
            Contactez FL Clean AR pour une estimation claire adaptée à la superficie de vos locaux et à la fréquence souhaitée.
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
