"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ArrowRight, ShieldCheck } from "lucide-react";
import { businessConfig } from "@/config/business";
import { assetInventory } from "@/config/assets";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change or Escape key
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/realisations", label: "Réalisations" },
    { href: "/a-propos", label: "À propos" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`header ${isScrolled ? "header-scrolled" : ""}`}
        role="banner"
      >
        <div className="container header-container">
          {/* Logo */}
          <Link href="/" className="logo-link" aria-label="FL Clean AR - Retour à l'accueil">
            <div className="logo-wrapper">
              <Image
                src={assetInventory.logos.banner.src}
                alt="FL Clean AR - Nettoyage de vitres professionnel et particulier"
                width={240}
                height={82}
                priority
                className="logo-img"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Navigation principale">
            <ul className="nav-list">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href} className="nav-item">
                    <Link
                      href={link.href}
                      className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Action Area */}
          <div className="header-actions">
            <a
              href={businessConfig.phone.href}
              className="phone-quick-link"
              title="Appeler FL Clean AR"
              aria-label={`Téléphone: ${businessConfig.phone.display}`}
            >
              <span className="phone-icon-box">
                <Phone size={16} />
              </span>
              <span className="phone-number">{businessConfig.phone.display}</span>
            </a>

            <Link href="/contact" className="btn btn-gold btn-sm header-cta">
              <span>Demander un devis</span>
              <ArrowRight size={15} />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        id="mobile-navigation"
        className={`mobile-drawer ${mobileMenuOpen ? "mobile-drawer-open" : ""}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          className="mobile-backdrop"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div className="mobile-drawer-content" role="dialog" aria-modal="true" aria-label="Menu principal">
          <div className="mobile-drawer-header">
            <div className="mobile-logo-wrap">
              <Image
                src={assetInventory.logos.emblem.src}
                alt="FL Clean AR"
                width={50}
                height={46}
                className="mobile-logo"
              />
              <span className="mobile-logo-text">FL CLEAN AR</span>
            </div>
            <button
              type="button"
              className="mobile-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Fermer le menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`mobile-nav-link ${isActive ? "mobile-nav-link-active" : ""}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mobile-drawer-footer">
            <a
              href={businessConfig.phone.href}
              className="btn btn-outline btn-block mb-3"
            >
              <Phone size={18} />
              <span>{businessConfig.phone.display}</span>
            </a>

            <Link
              href="/contact"
              className="btn btn-gold btn-block"
            >
              <span>Demander un devis</span>
              <ArrowRight size={16} />
            </Link>

            <div className="mobile-footer-tagline">
              <ShieldCheck size={14} className="tagline-icon" />
              <span>Interventions dans les Pyrénées-Orientales (66)</span>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
}
