import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ShieldCheck, ExternalLink, Calendar, CheckCircle2 } from "lucide-react";
import { businessConfig } from "@/config/business";
import { assetInventory } from "@/config/assets";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Column 1: Brand & Logo */}
          <div className="footer-col brand-col">
            <Link href="/" className="footer-logo-link">
              <Image
                src={assetInventory.logos.banner.src}
                alt="FL Clean AR"
                width={220}
                height={75}
                className="footer-logo"
              />
            </Link>
            <p className="footer-desc">
              {businessConfig.shortDescription}
            </p>
            <div className="brand-badges">
              <span className="badge badge-green">
                <CheckCircle2 size={13} />
                <span>Interventions 66</span>
              </span>
              <span className="badge badge-gold">
                <ShieldCheck size={13} />
                <span>Devis sur mesure</span>
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <div className="gold-dash"></div>
            <ul className="footer-links-list">
              <li>
                <Link href="/">Accueil</Link>
              </li>
              <li>
                <Link href="/services">Nos services de nettoyage</Link>
              </li>
              <li>
                <Link href="/realisations">Galerie &amp; réalisations</Link>
              </li>
              <li>
                <Link href="/#avis">Avis clients &amp; témoignages</Link>
              </li>
              <li>
                <Link href="/a-propos">À propos de l&apos;entreprise</Link>
              </li>
              <li>
                <Link href="/contact">Demande de devis</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Spécialisés */}
          <div className="footer-col">
            <h4 className="footer-col-title">Prestations</h4>
            <div className="gold-dash"></div>
            <ul className="footer-links-list">
              <li>
                <Link href="/services/verrieres-toitures-vitrees">Verrières &amp; toitures vitrées</Link>
              </li>
              <li>
                <Link href="/services/verandas-baies-vitrees">Vérandas &amp; baies coulissantes</Link>
              </li>
              <li>
                <Link href="/services/nettoyage-bureaux-locaux">Nettoyage de bureaux &amp; locaux</Link>
              </li>
              <li>
                <Link href="/services/nettoyage-commerces-boutiques">Commerces &amp; espaces de vente</Link>
              </li>
              <li>
                <Link href="/services/nettoyage-cabinets-soins">Cabinets de soins &amp; kinésithérapie</Link>
              </li>
              <li>
                <Link href="/services/acces-hauteur-adapte">Nettoyage en hauteur &amp; nacelle</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Service Area */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">Coordonnées</h4>
            <div className="gold-dash"></div>
            <ul className="contact-info-list">
              <li>
                <Phone size={18} className="contact-icon" />
                <a href={businessConfig.phone.href} className="contact-link">
                  <strong>{businessConfig.phone.display}</strong>
                </a>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <a href={businessConfig.email.href} className="contact-link">
                  {businessConfig.email.address}
                </a>
              </li>
              <li>
                <MapPin size={18} className="contact-icon" />
                <address className="contact-address">
                  <span>{businessConfig.address.fullAddress}</span>
                  <a
                    href={businessConfig.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="maps-external-link"
                    title="Voir sur Google Maps"
                  >
                    <span>Voir sur la carte</span>
                    <ExternalLink size={12} />
                  </a>
                </address>
              </li>
            </ul>
            <div className="service-area-badge">
              <span className="area-title">Zone d'intervention :</span>
              <p className="area-desc">{businessConfig.serviceArea.description}</p>
            </div>
          </div>
        </div>

        {/* Legal & Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright-text">
              © {currentYear} {businessConfig.brandName}. Tous droits réservés.
            </p>
            <ul className="legal-links">
              <li>
                <Link href="/mentions-legales">Mentions légales</Link>
              </li>
              <li className="separator">•</li>
              <li>
                <Link href="/politique-de-confidentialite">Politique de confidentialité</Link>
              </li>
              <li className="separator">•</li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="transparency-note">
            <span>FL Clean AR s'engage pour la clarté et l'authenticité de ses prestations et photographies de chantiers.</span>
          </div>
        </div>
      </div>

      
    </footer>
  );
}
