"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Star, MessageSquare, ShieldCheck, CheckCircle2, AlertCircle, X, ExternalLink, Send, Sparkles } from "lucide-react";
import { verifiedReviews, reviewsConfig, CustomerReview } from "@/config/reviews";
import { businessConfig } from "@/config/business";

export default function CustomerReviews() {
  const [modalOpen, setModalOpen] = useState(false);
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [customerType, setCustomerType] = useState<"Particulier" | "Professionnel">("Particulier");
  const [authorName, setAuthorName] = useState("");
  const [serviceType, setServiceType] = useState(reviewsConfig.availableServiceChoices[0]);
  const [location, setLocation] = useState("");
  const [comment, setComment] = useState("");
  const [contactEmailOrPhone, setContactEmailOrPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [websiteTrap, setWebsiteTrap] = useState(""); // honeypot
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  // Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && modalOpen) {
        setModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen]);

  // Lock scroll when modal is open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "idle", message: "" });

    if (!authorName.trim() || authorName.trim().length < 2) {
      setSubmitStatus({
        type: "error",
        message: "Veuillez renseigner votre prénom ou nom.",
      });
      setIsSubmitting(false);
      return;
    }

    if (!location.trim() || location.trim().length < 2) {
      setSubmitStatus({
        type: "error",
        message: "Veuillez préciser votre commune (ex: Thuir, Perpignan, etc.).",
      });
      setIsSubmitting(false);
      return;
    }

    if (!comment.trim() || comment.trim().length < 10) {
      setSubmitStatus({
        type: "error",
        message: "Veuillez rédiger un commentaire d'au moins 10 caractères.",
      });
      setIsSubmitting(false);
      return;
    }

    if (!consent) {
      setSubmitStatus({
        type: "error",
        message: "Veuillez cocher la case autorisant la publication de votre avis.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          authorName: authorName.trim(),
          customerType,
          serviceType,
          rating,
          location: location.trim(),
          comment: comment.trim(),
          contactEmailOrPhone: contactEmailOrPhone.trim(),
          consent,
          website_trap: websiteTrap,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          type: "success",
          message: data.message,
        });
        // Clear inputs
        setAuthorName("");
        setLocation("");
        setComment("");
        setContactEmailOrPhone("");
        setConsent(false);
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Une erreur est survenue lors de l'envoi de votre avis.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Impossible de joindre le serveur. Vous pouvez laisser votre avis directement sur Google.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const hasVerifiedReviews = verifiedReviews.length > 0;

  return (
    <section className="section reviews-section" aria-labelledby="reviews-heading" id="avis">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">{reviewsConfig.sectionSubtitle}</span>
          <h2 id="reviews-heading">{reviewsConfig.sectionTitle}</h2>
          <div className="gold-line"></div>
          <p className="section-lead">{reviewsConfig.supportingText}</p>
        </div>

        {/* Action Header Banner */}
        <div className="reviews-action-bar">
          <div className="reviews-badges-row">
            <div className="review-badge-pill">
              <ShieldCheck size={16} className="badge-pill-icon" />
              <span>Avis 100% réels &amp; vérifiés</span>
            </div>
            <div className="review-badge-pill">
              <CheckCircle2 size={16} className="badge-pill-icon" />
              <span>Sans faux profils ni notes automatisées</span>
            </div>
          </div>

          <div className="reviews-cta-buttons">
            <button
              type="button"
              className="btn btn-gold btn-md"
              onClick={() => {
                setSubmitStatus({ type: "idle", message: "" });
                setModalOpen(true);
              }}
              aria-haspopup="dialog"
            >
              <MessageSquare size={16} />
              <span>Laisser un avis</span>
            </button>

            <a
              href={businessConfig.googleReviews.reviewSubmitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-md google-review-btn"
              title="Donner votre avis public sur la fiche Google Business FL Clean AR"
            >
              <span>{reviewsConfig.googleReviews.label}</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Reviews List OR Transparency Callout when collecting */}
        {hasVerifiedReviews ? (
          <div className="reviews-grid">
            {verifiedReviews.map((rev) => (
              <article key={rev.id} className="review-card">
                <div className="review-card-top">
                  <div className="review-stars" aria-label={`Note : ${rev.rating} sur 5 étoiles`}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={16}
                        className={star <= rev.rating ? "star-filled" : "star-empty"}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span className="review-date">{rev.date}</span>
                </div>

                <p className="review-comment">&ldquo;{rev.comment}&rdquo;</p>

                <div className="review-author-row">
                  <div className="author-avatar">{rev.authorName.charAt(0)}</div>
                  <div className="author-info">
                    <span className="author-name">{rev.authorName}</span>
                    <span className="author-meta">
                      {rev.serviceName} • {rev.location}
                    </span>
                  </div>
                  {rev.isVerified && (
                    <span className="verified-seal" title="Prestation réalisée et vérifiée">
                      <ShieldCheck size={14} />
                      <span>Vérifié</span>
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="reviews-collection-card">
            <div className="collection-icon-wrap">
              <Sparkles size={28} className="collection-sparkle" />
            </div>
            <div className="collection-content">
              <h3 className="collection-title">Votre retour d&apos;expérience est précieux</h3>
              <p className="collection-text">
                Chez FL Clean AR, la satisfaction et la fidélité de nos clients particuliers, commerçants et professionnels de santé sont au cœur de nos engagements.
              </p>
              <p className="collection-subtext">
                Vous avez récemment fait appel à Farid Hammoudi pour vos vitres, vérandas, bureaux ou locaux professionnels ? Prenez 1 minute pour partager votre appréciation ou déposez un avis sur Google !
              </p>
              <div className="collection-btn-row">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    setSubmitStatus({ type: "idle", message: "" });
                    setModalOpen(true);
                  }}
                >
                  <MessageSquare size={16} />
                  <span>Partager mon avis sur FL Clean AR</span>
                </button>
                <a
                  href={businessConfig.googleReviews.reviewSubmitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <span>Déposer un avis Google</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Transparency Charter Footer */}
        <div className="reviews-transparency-note">
          <p>
            <strong>Charte de transparence FL Clean AR :</strong> {reviewsConfig.transparencyNotice} Les avis soumis sont vérifiés en toute neutralité pour garantir un retour honnête à nos futurs clients.
          </p>
        </div>
      </div>

      {/* Review Submission Modal */}
      {modalOpen && (
        <div
          className="review-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-review-title"
        >
          <div className="review-modal-backdrop" onClick={() => setModalOpen(false)}></div>
          <div className="review-modal-card">
            <div className="review-modal-header">
              <div>
                <span className="modal-eyebrow">FL Clean AR • Témoignage client</span>
                <h3 id="modal-review-title" className="modal-title">
                  Laisser un avis sur votre prestation
                </h3>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setModalOpen(false)}
                aria-label="Fermer la boîte de dialogue"
              >
                <X size={22} />
              </button>
            </div>

            {submitStatus.type === "success" ? (
              <div className="modal-success-state">
                <div className="success-icon-box">
                  <CheckCircle2 size={40} />
                </div>
                <h4>Merci pour votre contribution !</h4>
                <p>{submitStatus.message}</p>
                <div className="modal-success-actions">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setModalOpen(false)}
                  >
                    Fermer la fenêtre
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="review-modal-form" noValidate>
                {submitStatus.type === "error" && (
                  <div className="form-alert form-alert-error" role="alert">
                    <AlertCircle size={18} className="alert-icon" />
                    <span>{submitStatus.message}</span>
                  </div>
                )}

                {/* Rating selection */}
                <div className="form-group">
                  <label className="form-label">
                    Votre note globale <span className="required-star">*</span>
                  </label>
                  <div
                    className="rating-select-group"
                    role="radiogroup"
                    aria-label="Sélectionnez une note de 1 à 5 étoiles"
                  >
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className={`star-select-btn ${
                          (hoverRating || rating) >= star ? "star-active" : ""
                        }`}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        aria-label={`${star} étoile${star > 1 ? "s" : ""} sur 5`}
                        role="radio"
                        aria-checked={rating === star}
                      >
                        <Star size={28} />
                      </button>
                    ))}
                    <span className="rating-text-indicator">
                      {rating === 5 && "Excellent (5/5)"}
                      {rating === 4 && "Très satisfait (4/5)"}
                      {rating === 3 && "Satisfaisant (3/5)"}
                      {rating === 2 && "Moyen (2/5)"}
                      {rating === 1 && "Insuffisant (1/5)"}
                    </span>
                  </div>
                </div>

                {/* Customer Type */}
                <div className="form-group">
                  <label className="form-label">Vous êtes :</label>
                  <div className="radio-group-horizontal">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="customerTypeReview"
                        value="Particulier"
                        checked={customerType === "Particulier"}
                        onChange={() => setCustomerType("Particulier")}
                      />
                      <span>Particulier</span>
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="customerTypeReview"
                        value="Professionnel"
                        checked={customerType === "Professionnel"}
                        onChange={() => setCustomerType("Professionnel")}
                      />
                      <span>Professionnel (Entreprise, Commerce, Cabinet)</span>
                    </label>
                  </div>
                </div>

                {/* Name & Location Grid */}
                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="reviewAuthor" className="form-label">
                      Votre prénom et nom <span className="required-star">*</span>
                    </label>
                    <input
                      type="text"
                      id="reviewAuthor"
                      className="form-input"
                      placeholder="Ex : Marc D. ou Cabinet Santé"
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      required
                    />
                    <span className="field-hint">
                      Respect de la vie privée : seule l&apos;initiale du nom sera affichée.
                    </span>
                  </div>

                  <div className="form-group">
                    <label htmlFor="reviewLocation" className="form-label">
                      Commune d&apos;intervention <span className="required-star">*</span>
                    </label>
                    <input
                      type="text"
                      id="reviewLocation"
                      className="form-input"
                      placeholder="Ex : Thuir, Perpignan, Canet..."
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Service type */}
                <div className="form-group">
                  <label htmlFor="reviewService" className="form-label">
                    Prestation effectuée
                  </label>
                  <select
                    id="reviewService"
                    className="form-select"
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                  >
                    {reviewsConfig.availableServiceChoices.map((choice) => (
                      <option key={choice} value={choice}>
                        {choice}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Comment */}
                <div className="form-group">
                  <label htmlFor="reviewComment" className="form-label">
                    Votre avis détaillé <span className="required-star">*</span>
                  </label>
                  <textarea
                    id="reviewComment"
                    rows={4}
                    className="form-textarea"
                    placeholder="Qualité de l'intervention, ponctualité, finitions sans traces, propreté des sols..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                  ></textarea>
                </div>

                {/* Optional Email/Phone for verification */}
                <div className="form-group">
                  <label htmlFor="reviewContact" className="form-label">
                    Email ou téléphone de contact{" "}
                    <span className="field-optional">(pour vérification interne uniquement)</span>
                  </label>
                  <input
                    type="text"
                    id="reviewContact"
                    className="form-input"
                    placeholder="Non publié publiquement — réservé à la vérification"
                    value={contactEmailOrPhone}
                    onChange={(e) => setContactEmailOrPhone(e.target.value)}
                  />
                </div>

                {/* Honeypot anti-spam */}
                <div style={{ display: "none" }} aria-hidden="true">
                  <label htmlFor="rev_website_trap">Ne pas remplir</label>
                  <input
                    type="text"
                    id="rev_website_trap"
                    value={websiteTrap}
                    onChange={(e) => setWebsiteTrap(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Consent */}
                <div className="form-checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      required
                    />
                    <span>
                      J&apos;atteste que cet avis reflète mon expérience réelle avec FL Clean AR et j&apos;accepte qu&apos;il soit publié après vérification.
                    </span>
                  </label>
                </div>

                {/* Buttons */}
                <div className="modal-actions-row">
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => setModalOpen(false)}
                    disabled={isSubmitting}
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="btn btn-gold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>Envoi en cours...</span>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Envoyer mon avis</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
