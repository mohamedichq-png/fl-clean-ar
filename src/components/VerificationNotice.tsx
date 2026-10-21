import React from "react";
import Link from "next/link";
import { ShieldCheck, Phone, MapPin } from "lucide-react";
import { businessConfig } from "@/config/business";

export default function VerificationNotice() {
  return (
    <aside className="top-trust-bar" aria-label="Informations artisan et coordonnées professionnelles">
      <div className="container top-trust-inner">
        <div className="top-trust-item">
          <ShieldCheck size={14} className="top-trust-icon" aria-hidden="true" />
          <span>Artisan Laveur de Vitres • {businessConfig.address.city} ({businessConfig.serviceArea.departmentNumber})</span>
        </div>
        <div className="top-trust-item top-trust-zone">
          <MapPin size={14} className="top-trust-icon" aria-hidden="true" />
          <span>Intervention : Thuir, Perpignan &amp; Pyrénées-Orientales</span>
        </div>
        <div className="top-trust-item top-trust-contact">
          <Phone size={14} className="top-trust-icon" aria-hidden="true" />
          <a href={businessConfig.phone.href} className="top-trust-link">
            <span>Direct artisan : <strong>{businessConfig.phone.display}</strong></span>
          </a>
        </div>
      </div>
    </aside>
  );
}
