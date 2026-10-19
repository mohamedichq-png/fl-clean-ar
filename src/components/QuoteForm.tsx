"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, AlertCircle, Phone, MessageSquare, Shield, Clock } from "lucide-react";
import { businessConfig } from "@/config/business";
import { servicesData } from "@/config/services";

function QuoteFormInner() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  const [customerType, setCustomerType] = useState<"Particulier" | "Professionnel">("Particulier");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    preferredDate: "",
    surfaceDetails: "",
    message: "",
    consent: false,
    website_trap: "", // Honeypot field for bots
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    // Client-side quick check
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.location.trim()) {
      setStatus({
        type: "error",
        message: "Veuillez renseigner tous les champs obligatoires marqués d'un astérisque (*).",
      });
      setIsSubmitting(false);
      return;
    }

    if (!formData.consent) {
      setStatus({
        type: "error",
        message: "Veuillez accepter le traitement de vos données pour l'étude de votre devis.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          customerType,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: "success",
          message: data.message || "Votre demande a bien été envoyée. Nous vous contacterons très prochainement.",
        });
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          service: "",
          location: "",
          preferredDate: "",
          surfaceDetails: "",
          message: "",
          consent: false,
          website_trap: "",
        });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Une erreur est survenue lors de l'envoi de votre demande.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Impossible de joindre le serveur. Vous pouvez nous contacter par téléphone au 07 66 54 92 35.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="quote-form-card" id="devis">
      <div className="form-header">
        <h3 className="form-title">Demande de devis gratuit & personnalisé</h3>
        <p className="form-subtitle">
          Remplissez ce formulaire pour recevoir une proposition adaptée à vos surfaces. Réponse sous 24h à 48h.
        </p>
      </div>

      {status.type === "success" ? (
        <div className="status-box status-success" role="alert">
          <CheckCircle2 size={24} className="status-icon" />
          <div>
            <h4 className="status-title">Demande enregistrée avec succès</h4>
            <p className="status-text">{status.message}</p>
            <p className="status-sub">
              Besoin d'un renseignement immédiat ? Contactez-nous directement au{" "}
              <a href={businessConfig.phone.href} className="status-phone-link">
                <strong>{businessConfig.phone.display}</strong>
              </a>
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="quote-form">
          {/* Honeypot field hidden from real users */}
          <div style={{ display: "none" }} aria-hidden="true">
            <label htmlFor="website_trap">Ne pas remplir ce champ si vous êtes humain</label>
            <input
              type="text"
              id="website_trap"
              name="website_trap"
              value={formData.website_trap}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Customer Type Selector */}
          <div className="form-group">
            <label className="form-label">Vous êtes :</label>
            <div className="type-toggle-group" role="radiogroup" aria-label="Type de client">
              <button
                type="button"
                role="radio"
                aria-checked={customerType === "Particulier"}
                className={`type-btn ${customerType === "Particulier" ? "type-btn-active" : ""}`}
                onClick={() => setCustomerType("Particulier")}
              >
                Particulier (Maison / Appartement)
              </button>
              <button
                type="button"
                role="radio"
                aria-checked={customerType === "Professionnel"}
                className={`type-btn ${customerType === "Professionnel" ? "type-btn-active" : ""}`}
                onClick={() => setCustomerType("Professionnel")}
              >
                Professionnel (Commerce / Bureau / Agence)
              </button>
            </div>
          </div>

          {/* Row 1: Name & Phone */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fullName" className="form-label">
                Nom & Prénom <span className="req">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Ex. Farid Hammoudi"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Téléphone <span className="req">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Ex. 07 66 54 92 35"
                className="form-input"
              />
            </div>
          </div>

          {/* Row 2: Email & Location */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Adresse email <span className="req">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Ex. contact@exemple.fr"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="location" className="form-label">
                Ville ou Code Postal (66) <span className="req">*</span>
              </label>
              <input
                type="text"
                id="location"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                placeholder="Ex. Thuir, Perpignan, Canet..."
                className="form-input"
              />
            </div>
          </div>

          {/* Row 3: Service Requested & Preferred Date */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="service" className="form-label">
                Prestation souhaitée
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Sélectionnez un service...</option>
                {servicesData.map((svc) => (
                  <option key={svc.id} value={svc.title}>
                    {svc.title}
                  </option>
                ))}
                <option value="Autre demande">Autre demande spécifique</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="preferredDate" className="form-label">
                Période d'intervention souhaitée (facultatif)
              </label>
              <input
                type="text"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                placeholder="Ex. Dès que possible, fin du mois..."
                className="form-input"
              />
            </div>
          </div>

          {/* Message Area */}
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Précisions sur vos surfaces & vos besoins
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Indiquez par exemple le nombre approximatif de fenêtres, la présence d'une verrière ou véranda, la hauteur d'accès ou toute contrainte particulière..."
              className="form-textarea"
            ></textarea>
          </div>

          {/* Consent Checkbox */}
          <div className="form-checkbox-group">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              required
              checked={formData.consent}
              onChange={handleChange}
              className="form-checkbox"
            />
            <label htmlFor="consent" className="checkbox-label">
              J'accepte que les informations saisies soient traitées par FL Clean AR afin d'établir mon devis personnalisé, conformément à la{" "}
              <a href="/politique-de-confidentialite" target="_blank" className="privacy-link">
                politique de confidentialité
              </a>. <span className="req">*</span>
            </label>
          </div>

          {/* Error Notice */}
          {status.type === "error" && (
            <div className="status-box status-error" role="alert">
              <AlertCircle size={20} className="status-icon" />
              <span>{status.message}</span>
            </div>
          )}

          {/* Submit Button */}
          <div className="form-action-wrap">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-gold btn-lg submit-btn"
            >
              {isSubmitting ? (
                <span>Transmission en cours...</span>
              ) : (
                <>
                  <span>Envoyer ma demande de devis</span>
                  <Send size={18} />
                </>
              )}
            </button>
          </div>

          {/* Reassurance text */}
          <div className="form-guarantees">
            <div className="guarantee-item">
              <Shield size={14} />
              <span>Devis gratuit & sans engagement</span>
            </div>
            <div className="guarantee-item">
              <Clock size={14} />
              <span>Réponse sous 24h à 48h</span>
            </div>
          </div>
        </form>
      )}

      {/* Alternative Direct Channels */}
      <div className="direct-channels-box">
        <h4 className="direct-title">Vous préférez un échange direct ?</h4>
        <div className="direct-buttons-row">
          <a href={businessConfig.phone.href} className="btn btn-outline btn-sm">
            <Phone size={15} />
            <span>Appeler le {businessConfig.phone.display}</span>
          </a>

          {businessConfig.whatsapp.enabled && (
            <a
              href={businessConfig.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <MessageSquare size={15} />
              <span>Écrire sur WhatsApp</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function QuoteForm() {
  return (
    <Suspense fallback={<div className="form-loading">Chargement du formulaire de devis...</div>}>
      <QuoteFormInner />
    </Suspense>
  );
}
