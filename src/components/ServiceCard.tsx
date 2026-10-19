import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ServiceItem } from "@/config/services";

interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
}

export default function ServiceCard({ service, featured = false }: ServiceCardProps) {
  return (
    <article className={`service-card ${featured ? "service-card-featured" : ""}`} id={service.slug}>
      <div className="card-image-wrap">
        <Image
          src={service.imageSrc}
          alt={service.imageAlt}
          width={600}
          height={380}
          className="service-img"
          loading="lazy"
        />
        <div className="card-badge-overlay">
          <span className="badge badge-gold">
            {service.targetCustomer}
          </span>
        </div>
      </div>

      <div className="card-content">
        <h3 className="service-title">{service.title}</h3>
        <p className="service-desc">{service.shortDescription}</p>

        <ul className="service-features-list">
          {service.features.slice(0, 3).map((feat, index) => (
            <li key={index} className="feature-item">
              <span className="feature-check">
                <Check size={14} />
              </span>
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        <div className="card-footer">
          <Link
            href={`/contact?service=${encodeURIComponent(service.title)}`}
            className="btn btn-primary btn-sm service-cta"
          >
            <span>Demander un devis</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      
    </article>
  );
}
