import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Calendar, Phone, MessageSquare, ChevronDown, ChevronRight, ShieldCheck } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { servicesData, ServiceItem } from "@/config/services";
import { businessConfig } from "@/config/business";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return servicesData.map((svc) => ({
    slug: svc.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service introuvable | FL Clean AR",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://flclean-ar.fr/services/${service.slug}`,
      images: [
        {
          url: service.imageSrc,
          alt: service.imageAlt,
        },
      ],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = servicesData.filter((s) => service.relatedSlugs?.includes(s.slug));

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.shortDescription,
    "provider": {
      "@type": "LocalBusiness",
      "name": businessConfig.brandName,
      "telephone": businessConfig.phone.display,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": businessConfig.address.street,
        "addressLocality": businessConfig.address.city,
        "postalCode": businessConfig.address.postalCode,
        "addressCountry": "FR",
      },
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Pyrénées-Orientales",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: "Nos Services", href: "/services" },
          { label: service.title },
        ]}
      />

      {/* Hero Header */}
      <section className="section section-light page-hero" aria-labelledby="service-h1">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-gold" style={{ marginBottom: "1rem" }}>
              {service.targetCustomer}
            </span>
            <h1 id="service-h1">{service.title}</h1>
            <div className="gold-line"></div>
            <p className="section-lead">{service.shortDescription}</p>
          </div>
        </div>
      </section>

      {/* Main Detail Section */}
      <section className="section" aria-label="Description de la prestation">
        <div className="container">
          <div className="service-detail-grid">
            {/* Left Content Column */}
            <div className="service-main-content">
              {/* Authentic Photo */}
              <div className="service-detail-image-box">
                <Image
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  width={800}
                  height={520}
                  priority
                  className="service-detail-hero-img"
                />
                <div className="service-detail-photo-caption">
                  <ShieldCheck size={16} className="caption-shield" />
                  <span>Chantier réel FL Clean AR dans les Pyrénées-Orientales (66)</span>
                </div>
              </div>

              {/* In-depth Editorial Content */}
              <div className="service-editorial-body">
                <h2>Présentation de la prestation</h2>
                <p className="lead-paragraph">{service.fullDescription}</p>

                {service.detailedParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Key Features */}
              <div className="service-key-features-card">
                <h3>Nos engagements &amp; procédés techniques</h3>
                <ul className="features-checklist">
                  {service.features.map((feat, i) => (
                    <li key={i} className="checklist-item">
                      <CheckCircle2 size={18} className="check-gold" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Frequencies */}
              <div className="service-frequency-card">
                <div className="freq-header">
                  <Calendar size={20} className="freq-icon" />
                  <h4>Fréquences &amp; modalités d&apos;intervention</h4>
                </div>
                <ul className="frequency-options-list">
                  {service.frequencyOptions.map((opt, i) => (
                    <li key={i} className="freq-option-item">
                      <span className="bullet-dash">•</span>
                      <span>{opt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specific FAQs */}
              {service.faqs && service.faqs.length > 0 && (
                <div className="service-faq-block">
                  <h2>Questions fréquentes sur ce service</h2>
                  <div className="faq-accordion-list">
                    {service.faqs.map((faq, i) => (
                      <details key={i} className="faq-item">
                        <summary className="faq-question">
                          <span className="faq-q-text">{faq.question}</span>
                          <ChevronDown size={18} className="faq-icon" aria-hidden="true" />
                        </summary>
                        <div className="faq-answer">
                          <p>{faq.answer}</p>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar: Contact & Conversion */}
            <aside className="service-sidebar" aria-label="Demande de devis pour ce service">
              <div className="sidebar-sticky-card">
                <h3 className="sidebar-title">Demander un devis</h3>
                <p className="sidebar-subtitle">
                  Proposition claire et personnalisée pour vos surfaces vitrées à Thuir, Perpignan et dans tout le 66.
                </p>

                <div className="sidebar-actions">
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="btn btn-gold btn-block"
                  >
                    <span>Demander un devis</span>
                    <ArrowRight size={16} />
                  </Link>

                  <a href={businessConfig.phone.href} className="btn btn-outline btn-block">
                    <Phone size={16} />
                    <span>{businessConfig.phone.display}</span>
                  </a>

                  {businessConfig.whatsapp.enabled && (
                    <a
                      href={businessConfig.whatsapp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-block"
                    >
                      <MessageSquare size={16} />
                      <span>WhatsApp direct</span>
                    </a>
                  )}
                </div>

                <div className="sidebar-guarantees">
                  <div className="guarantee-row">
                    <CheckCircle2 size={15} className="check-gold" />
                    <span>Artisan expérimenté &amp; déclaré</span>
                  </div>
                  <div className="guarantee-row">
                    <CheckCircle2 size={15} className="check-gold" />
                    <span>Matériel pro (nacelle &amp; eau pure)</span>
                  </div>
                  <div className="guarantee-row">
                    <CheckCircle2 size={15} className="check-gold" />
                    <span>Étude technique sans engagement</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* Related Services Navigation */}
          {relatedServices.length > 0 && (
            <div className="related-services-section">
              <div className="section-header" style={{ marginBottom: "2rem" }}>
                <span className="section-subtitle">Surfaces Complémentaires</span>
                <h3>Autres prestations associées</h3>
              </div>
              <div className="related-services-grid">
                {relatedServices.map((rel) => (
                  <article key={rel.id} className="related-service-card">
                    <div className="related-img-wrap">
                      <Image
                        src={rel.imageSrc}
                        alt={rel.imageAlt}
                        width={400}
                        height={260}
                        className="related-img"
                        loading="lazy"
                      />
                    </div>
                    <div className="related-content">
                      <h4 className="related-title">{rel.title}</h4>
                      <p className="related-desc">{rel.shortDescription}</p>
                      <Link href={`/services/${rel.slug}`} className="related-link">
                        <span>En savoir plus</span>
                        <ChevronRight size={15} />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
