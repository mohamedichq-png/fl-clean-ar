import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, CheckCircle2, Phone, MessageCircle } from "lucide-react";
import { businessConfig } from "@/config/business";
import { assetInventory } from "@/config/assets";

export default function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      {/* Background Image Container */}
      <div className="hero-bg-wrapper">
        <Image
          src={assetInventory.projects[0].webpSrc || assetInventory.projects[0].src}
          alt={assetInventory.projects[0].alt}
          fill
          priority
          sizes="100vw"
          className="hero-bg-img"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Eyebrow badge */}
          <div className="hero-badge">
            <Sparkles size={14} className="badge-sparkle" />
            <span>Artisan Laveur de Vitres • Pyrénées-Orientales (66)</span>
          </div>

          {/* Main Headline */}
          <h1 id="hero-heading" className="hero-title">
            Nettoyage professionnel de{" "}
            <span className="hero-highlight">vitres, verrières &amp; façades</span>
          </h1>

          {/* Supporting Text */}
          <p className="hero-lead">
            Des solutions de nettoyage adaptées à vos locaux professionnels, vitrages et façades dans les Pyrénées-Orientales (Thuir, Perpignan et communes environnantes). Contactez-nous pour étudier votre besoin et obtenir un devis.
          </p>

          {/* Artisan badge in Hero */}
          <div className="hero-artisan-badge">
            <div className="artisan-badge-avatar">
              <Image
                src="/assets/images/farid-artisan-nacelle.webp"
                alt="Farid Hammoudi au travail"
                width={48}
                height={48}
                className="artisan-avatar-img"
              />
            </div>
            <div className="artisan-badge-info">
              <span className="artisan-name">Farid HAMMOUDI</span>
              <span className="artisan-role">Artisan Laveur de Vitres • Intervention toutes hauteurs</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-gold btn-lg hero-btn-primary">
              <span>Demander un devis</span>
              <ArrowRight size={18} />
            </Link>

            <Link href="/contact" className="btn btn-outline-white btn-lg">
              <span>Nous contacter</span>
            </Link>
          </div>

          {/* Direct Phone & WhatsApp actions */}
          <div className="hero-direct-actions">
            <a
              href={businessConfig.phone.href}
              className="hero-direct-pill"
              aria-label={`Appeler le ${businessConfig.phone.display}`}
            >
              <Phone size={15} />
              <span>Appeler au {businessConfig.phone.display}</span>
            </a>

            {businessConfig.whatsapp.enabled && (
              <a
                href={businessConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-direct-pill hero-whatsapp-pill"
                aria-label="Échanger directement par WhatsApp"
              >
                <MessageCircle size={15} />
                <span>Échanger par WhatsApp</span>
              </a>
            )}
          </div>

          {/* Reassurance Grid */}
          <div className="hero-reassurance-grid">
            <div className="reassurance-item">
              <CheckCircle2 size={18} className="reassurance-icon" />
              <span>Matériel pro &amp; nacelle certifiée</span>
            </div>
            <div className="reassurance-item">
              <CheckCircle2 size={18} className="reassurance-icon" />
              <span>Particuliers &amp; Locaux professionnels (66)</span>
            </div>
            <div className="reassurance-item">
              <CheckCircle2 size={18} className="reassurance-icon" />
              <span>Devis clair, adapté et sans engagement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
