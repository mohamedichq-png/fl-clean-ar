import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2, Phone } from "lucide-react";
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
            <span>Spécialiste surfaces vitrées & toitures de verrières • 66</span>
          </div>

          {/* Main Headline */}
          <h1 id="hero-heading" className="hero-title">
            Le nettoyage de vitres professionnel,{" "}
            <span className="hero-highlight">en toute transparence.</span>
          </h1>

          {/* Supporting Text */}
          <p className="hero-lead">
            Des vitres impeccables et des façades soignées pour vos espaces professionnels et résidentiels. Chaque intervention est étudiée sur mesure pour respecter vos matériaux et sublimer la luminosité naturelle.
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
              <span>Demander un devis gratuit</span>
              <ArrowRight size={18} />
            </Link>

            <Link href="/realisations" className="btn btn-outline-white btn-lg">
              <span>Découvrir nos 11 réalisations</span>
            </Link>
          </div>

          {/* Reassurance Grid */}
          <div className="hero-reassurance-grid">
            <div className="reassurance-item">
              <CheckCircle2 size={18} className="reassurance-icon" />
              <span>Matériel pro & nacelle certifiée</span>
            </div>
            <div className="reassurance-item">
              <CheckCircle2 size={18} className="reassurance-icon" />
              <span>Particuliers & Entreprises (66)</span>
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
