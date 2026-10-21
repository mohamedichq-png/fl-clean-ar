"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { businessConfig } from "@/config/business";

export default function MobileContactBar() {
  return (
    <nav className="mobile-contact-bar" aria-label="Actions rapides pour mobile">
      <a
        href={businessConfig.phone.href}
        className="mobile-bar-btn call-btn"
        aria-label={`Appeler le ${businessConfig.phone.display}`}
      >
        <Phone size={18} />
        <span>Appeler</span>
      </a>

      {businessConfig.whatsapp.enabled && (
        <a
          href={businessConfig.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-bar-btn whatsapp-btn"
          aria-label="Contacter via WhatsApp"
        >
          <MessageCircle size={18} />
          <span>WhatsApp</span>
        </a>
      )}

      <Link
        href="/contact"
        className="mobile-bar-btn quote-btn"
        aria-label="Demander un devis"
      >
        <FileText size={18} />
        <span>Devis</span>
      </Link>

      
    </nav>
  );
}
