import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, FileText, Phone } from "lucide-react";
import { businessConfig } from "@/config/business";

export const metadata = {
  title: "Page Introuvable (404) | FL Clean AR",
  description: "La page demandée n'existe pas ou a été déplacée.",
};

export default function NotFound() {
  return (
    <div className="not-found-wrapper">
      <div className="container not-found-container">
        <span className="error-code">404</span>
        <h1 className="error-title">Page introuvable</h1>
        <div className="gold-line"></div>
        <p className="error-lead">
          La page que vous recherchez n'existe pas, a été déplacée ou son adresse est incorrecte.
        </p>

        <div className="actions-row">
          <Link href="/" className="btn btn-primary btn-lg">
            <Home size={18} />
            <span>Retour à l'accueil</span>
          </Link>
          <Link href="/services" className="btn btn-outline btn-lg">
            <span>Découvrir nos services</span>
          </Link>
          <Link href="/contact" className="btn btn-gold btn-lg">
            <FileText size={18} />
            <span>Demander un devis</span>
          </Link>
        </div>

        <div className="assistance-box">
          <p>
            Besoin d'aide immédiate ? Contactez directement FL Clean AR par téléphone au{" "}
            <a href={businessConfig.phone.href} className="phone-link">
              <strong>{businessConfig.phone.display}</strong>
            </a>
          </p>
        </div>
      </div>

      
    </div>
  );
}
