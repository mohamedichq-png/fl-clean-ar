import React, { Suspense } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageSquare, Clock, ShieldCheck, CheckCircle2, ExternalLink } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteForm from "@/components/QuoteForm";
import { businessConfig } from "@/config/business";

export const metadata = {
  title: "Contact & Devis Personnalisé | FL Clean AR (66)",
  description:
    "Demandez votre devis personnalisé de nettoyage de vitres, verrières, vérandas et vitrines dans les Pyrénées-Orientales. Réponse rapide. Contact par formulaire, téléphone ou WhatsApp.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact & Devis" }]} />

      {/* Header */}
      <section className="section section-light page-hero" aria-labelledby="contact-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Devis Personnalisé &amp; Sans Engagement</span>
            <h1 id="contact-heading">Contactez FL Clean AR</h1>
            <div className="gold-line"></div>
            <p className="section-lead">
              Une demande pour vos fenêtres, une verrière d&apos;accès délicat, une vitrine commerciale ou une façade d&apos;immeuble en hauteur ? Contactez-nous par formulaire, téléphone ou messagerie WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Form + Coordinates Grid */}
      <section className="section" aria-label="Formulaire de devis et coordonnées">
        <div className="container">
          <div className="contact-layout-grid">
            {/* Left: Contact Info Cards */}
            <div className="contact-details-col">
              <div className="info-card">
                <h3 className="info-card-title">Nos Coordonnées</h3>
                <div className="gold-dash"></div>

                <ul className="info-list">
                  <li className="info-item">
                    <div className="info-icon-box">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="info-label">Téléphone direct</span>
                      <a href={businessConfig.phone.href} className="info-value-link">
                        <strong>{businessConfig.phone.display}</strong>
                      </a>
                      <span className="info-hint">Appel ou SMS du lundi au samedi (Farid Hammoudi)</span>
                    </div>
                  </li>

                  {businessConfig.whatsapp.enabled && (
                    <li className="info-item">
                      <div className="info-icon-box whatsapp-bg">
                        <MessageSquare size={18} />
                      </div>
                      <div>
                        <span className="info-label">WhatsApp professionnel</span>
                        <a
                          href={businessConfig.whatsapp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="info-value-link"
                        >
                          Échanger en direct
                        </a>
                        <span className="info-hint">Pratique pour nous envoyer vos photos de vitrages</span>
                      </div>
                    </li>
                  )}

                  <li className="info-item">
                    <div className="info-icon-box">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="info-label">Email</span>
                      <a href={businessConfig.email.href} className="info-value-link">
                        {businessConfig.email.address}
                      </a>
                    </div>
                  </li>

                  <li className="info-item">
                    <div className="info-icon-box">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className="info-label">Localisation & Siège</span>
                      <address className="info-address">
                        <span>{businessConfig.address.fullAddress}</span>
                        <a
                          href={businessConfig.address.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="map-link"
                        >
                          <span>Itinéraire Google Maps</span>
                          <ExternalLink size={12} />
                        </a>
                      </address>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Service Area Card */}
              <div className="service-area-card">
                <h4 className="area-title">Zone d&apos;intervention</h4>
                <p className="area-text">
                  Interventions régulières sur <strong>Thuir</strong>, la communauté urbaine de <strong>Perpignan</strong> et l&apos;ensemble des Pyrénées-Orientales (66).
                </p>
                <div className="badges-list">
                  <span className="mini-badge">Thuir</span>
                  <span className="mini-badge">Perpignan</span>
                  <span className="mini-badge">Canet</span>
                  <span className="mini-badge">Cabestany</span>
                  <span className="mini-badge">Saint-Estève</span>
                  <span className="mini-badge">Ponteilla</span>
                  <span className="mini-badge">Toulouges</span>
                  <span className="mini-badge">Argelès</span>
                </div>
              </div>

              {/* Reassurance Checklist */}
              <div className="guarantees-card">
                <h4 className="guarantees-title">Nos Engagements</h4>
                <ul className="guarantees-list">
                  <li>
                    <CheckCircle2 size={16} className="check-gold" />
                    <span>Devis gratuit sous 24h à 48h</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="check-gold" />
                    <span>Tarifs clairs sans frais cachés</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="check-gold" />
                    <span>Nacelle élévatrice & perches télescopiques eau pure</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="check-gold" />
                    <span>Respect scrupuleux de vos installations & sécurité</span>
                  </li>
                </ul>
              </div>

              {/* Business Card Trust Box */}
              <div className="contact-card-badge">
                <div className="card-badge-header">
                  <ShieldCheck size={18} className="check-gold" />
                  <span>Artisan certifié FL Clean AR</span>
                </div>
                <div className="card-badge-img-box">
                  <Image
                    src="/assets/images/carte-visite-fl-clean-ar.webp"
                    alt="Carte de visite FL Clean AR - Mas Maurette 66300 Thuir"
                    width={380}
                    height={272}
                    className="card-badge-img"
                  />
                </div>
                <p className="card-badge-caption">
                  Farid HAMMOUDI • 07 66 54 92 35<br />
                  Mas Maurette, 66300 THUIR
                </p>
              </div>
            </div>

            {/* Right: Quote Form */}
            <div className="contact-form-col">
              <Suspense fallback={<div className="form-loading">Chargement du formulaire...</div>}>
                <QuoteForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
