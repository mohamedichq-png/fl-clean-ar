import React from "react";
import { Info } from "lucide-react";
import { businessConfig } from "@/config/business";

export default function VerificationNotice() {
  return (
    <aside className="verification-banner" aria-label="Avis de validation des coordonnées">
      <div className="container banner-inner">
        <Info size={16} className="banner-icon" />
        <p className="banner-text">
          <strong>Validation préalable :</strong> Les coordonnées indiquées ({businessConfig.phone.display} • {businessConfig.email.address} • {businessConfig.address.fullAddress}) sont issues des éléments de la carte de visite transmise et configurées de manière centralisée pour toute mise à jour.
        </p>
      </div>

      
    </aside>
  );
}
