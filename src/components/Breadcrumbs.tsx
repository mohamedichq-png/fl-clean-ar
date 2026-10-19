import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Generate JSON-LD BreadcrumbList
  const schemaBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://flclean-ar.fr",
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        ...(item.href ? { "item": `https://flclean-ar.fr${item.href}` } : {}),
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }}
      />
      <nav aria-label="Fil d'Ariane" className="breadcrumbs-nav">
        <div className="container">
          <ol className="breadcrumbs-list">
            <li className="breadcrumb-item">
              <Link href="/" className="breadcrumb-link" title="Retour à l'accueil">
                <Home size={14} className="home-icon" />
                <span>Accueil</span>
              </Link>
            </li>

            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              return (
                <li key={index} className="breadcrumb-item">
                  <ChevronRight size={13} className="separator-icon" aria-hidden="true" />
                  {isLast || !item.href ? (
                    <span className="breadcrumb-current" aria-current="page">
                      {item.label}
                    </span>
                  ) : (
                    <Link href={item.href} className="breadcrumb-link">
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>

        
      </nav>
    </>
  );
}
