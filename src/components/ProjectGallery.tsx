"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2, Check, Sparkles } from "lucide-react";
import { portfolioProjects, portfolioCategories, ProjectItem } from "@/config/portfolio";

interface ProjectGalleryProps {
  initialLimit?: number;
  showFilters?: boolean;
}

export default function ProjectGallery({ initialLimit, showFilters = true }: ProjectGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredProjects = portfolioProjects.filter((p) => {
    if (activeCategory === "all") return true;
    return p.category === activeCategory;
  });

  const displayedProjects = initialLimit ? filteredProjects.slice(0, initialLimit) : filteredProjects;

  // Open Lightbox
  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  // Close Lightbox
  const closeLightbox = useCallback(() => {
    setActiveLightboxIndex(null);
  }, []);

  // Previous Image
  const prevImage = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : filteredProjects.length - 1));
  }, [activeLightboxIndex, filteredProjects.length]);

  // Next Image
  const nextImage = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev! < filteredProjects.length - 1 ? prev! + 1 : 0));
  }, [activeLightboxIndex, filteredProjects.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex, closeLightbox, prevImage, nextImage]);

  // Prevent background scroll when lightbox is open
  useEffect(() => {
    if (activeLightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeLightboxIndex]);

  const activeProject: ProjectItem | undefined =
    activeLightboxIndex !== null ? filteredProjects[activeLightboxIndex] : undefined;

  return (
    <div className="gallery-container">
      {/* Category Filter Tabs */}
      {showFilters && (
        <div className="gallery-filters" role="tablist" aria-label="Filtrer les réalisations">
          {portfolioCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`filter-btn ${activeCategory === cat.id ? "filter-btn-active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      {/* Projects Grid */}
      <div className="projects-grid">
        {displayedProjects.map((project, idx) => (
          <article
            key={project.id}
            className="gallery-card"
            onClick={() => openLightbox(idx)}
            role="button"
            tabIndex={0}
            aria-label={`Agrandir la photo : ${project.title}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openLightbox(idx);
              }
            }}
          >
            <div className="gallery-img-wrap">
              <Image
                src={project.imageWebp || project.imageSrc}
                alt={project.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-zoom-icon" aria-hidden="true">
                  <Maximize2 size={24} />
                </span>
                <span className="gallery-overlay-badge">{project.categoryLabel}</span>
              </div>
            </div>

            <div className="gallery-caption-box">
              <span className="gallery-surface-tag">{project.surfaceType}</span>
              <h4 className="gallery-title">{project.title}</h4>
              <p className="gallery-text">{project.caption}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Accessible Lightbox Modal */}
      {activeLightboxIndex !== null && activeProject && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`Visualisation de l'image : ${activeProject.title}`}
        >
          <div className="lightbox-backdrop" onClick={closeLightbox}></div>

          <div className="lightbox-modal">
            {/* Close Button */}
            <button
              type="button"
              className="lightbox-control-btn lightbox-close"
              onClick={closeLightbox}
              aria-label="Fermer la vue agrandie (Échap)"
            >
              <X size={26} />
            </button>

            {/* Prev Button */}
            <button
              type="button"
              className="lightbox-control-btn lightbox-prev"
              onClick={prevImage}
              aria-label="Image précédente (Flèche gauche)"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Next Button */}
            <button
              type="button"
              className="lightbox-control-btn lightbox-next"
              onClick={nextImage}
              aria-label="Image suivante (Flèche droite)"
            >
              <ChevronRight size={32} />
            </button>

            {/* Main Lightbox Content */}
            <div className="lightbox-inner">
              <div className="lightbox-media-wrapper">
                <Image
                  src={activeProject.imageSrc}
                  alt={activeProject.alt}
                  width={1024}
                  height={800}
                  className="lightbox-img"
                  priority
                />
              </div>

              <div className="lightbox-details">
                <div className="lightbox-badge-row">
                  <span className="badge badge-gold">{activeProject.categoryLabel}</span>
                  <span className="lightbox-counter">
                    {activeLightboxIndex + 1} / {filteredProjects.length}
                  </span>
                </div>

                <h3 className="lightbox-title">{activeProject.title}</h3>
                <p className="lightbox-caption">{activeProject.caption}</p>

                {activeProject.isSpaceTypology && (
                  <div className="lightbox-typology-notice">
                    <span className="typology-icon-star">✦</span>
                    <span>
                      Photographie authentique d&apos;espace professionnel (bureaux, commerces ou cabinet de soins). Présentation des typologies de locaux pris en charge par FL Clean AR.
                    </span>
                  </div>
                )}

                <div className="lightbox-techniques">
                  <h5 className="techniques-title">Techniques & procédés mis en œuvre :</h5>
                  <ul className="techniques-list">
                    {activeProject.techniquesUsed.map((tech, i) => (
                      <li key={i} className="technique-item">
                        <Check size={14} className="tech-icon" />
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      
    </div>
  );
}
