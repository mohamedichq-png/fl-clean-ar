"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, AlertCircle, Phone, MessageSquare, Shield, Clock, RefreshCw } from "lucide-react";
import { businessConfig } from "@/config/business";
import { servicesData } from "@/config/services";

function QuoteFormInner() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  const [customerType, setCustomerType] = useState<"Particulier" | "Professionnel">("Particulier");
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    preferredDate: "",
    message: "",
    consent: false,
    website_trap: "", // Honeypot field for bots
  });

  const [submittedSnapshot, setSubmittedSnapshot] = useState<{
    fullName: string;
    location: string;
    service: string;
    message: string;
  } | null>(null);

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

    // Client-side validation check
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
        setSubmittedSnapshot({
          fullName: formData.fullName,
          location: formData.location,
          service: formData.service,
          message: formData.message,
        });

        setStatus({
          type: "success",
          message: data.message || "Votre demande a bien été transmise à FL Clean AR. Nous vous recontacterons très prochainement.",
        });

        // Reset inputs
        setFormData({
          fullName: "",
          companyName: "",
          email: "",
          phone: "",
          service: "",
          location: "",
          preferredDate: "",
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
        message: `Impossible de joindre le serveur. Vous pouvez contacter directement Farid Hammoudi au ${businessConfig.phone.display}.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppSummaryUrl = () => {
    if (!submittedSnapshot) return businessConfig.whatsapp.url;
    const text = `Bonjour Farid Hammoudi (FL Clean AR), je viens de vous envoyer une demande de devis sur votre site :%0A- Nom : ${encodeURIComponent(submittedSnapshot.fullName)}%0A- Ville : ${encodeURIComponent(submittedSnapshot.location)}%0A- Prestation : ${encodeURIComponent(submittedSnapshot.service || "Non spécifié")}%0A- Précisions : ${encodeURIComponent(submittedSnapshot.message || "Étude de devis")}`;
    return `https://wa.me/${businessConfig.whatsapp.number}?text=${text}`;
  };

  return (
    <div className="quote-form-card" id="devis">
      <div className="form-header">
        <h3 className="form-title">Demande de devis personnalisé</h3>
        <p className="form-subtitle">
          Remplissez ce formulaire pour recevoir une proposition adaptée à vos surfaces. Réponse sous 24h à 48h.
        </p>
      </div>

      {status.type === "success" ? (
        <div className="status-box status-success" role="alert" aria-live="polite">
          <CheckCircle2 size={28} className="status-icon" aria-hidden="true" />
          <div className="status-body">
            <h4 className="status-title">Demande transmise avec succès</h4>
            <p className="status-text">{status.message}</p>

            {businessConfig.whatsapp.enabled && (
              <div className="status-wa-prompt">
                <p className="status-wa-hint">
                  <strong>Vous souhaitez une réponse encore plus rapide ?</strong> Transmettez également un récapitulatif directement sur le WhatsApp de Farid Hammoudi :
                </p>
                <a
                  href={getWhatsAppSummaryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm btn-wa-followup"
                >
                  <MessageSquare size={16} />
                  <span>Envoyer un message sur WhatsApp</span>
                </a>
              </div>
            )}

            <div className="status-call-prompt">
              <span>Ou appelez directement : </span>
              <a href={businessConfig.phone.href} className="status-phone-link">
                <strong>{businessConfig.phone.display}</strong>
              </a>
            </div>

            <button
              type="button"
              className="btn btn-outline btn-sm reset-form-btn"
              onClick={() => {
                setStatus({ type: "idle", message: "" });
                setSubmittedSnapshot(null);
              }}
            >
              <RefreshCw size={14} />
              <span>Faire une autre demande</span>
            </button>
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
            <label className="form-label" id="customer-type-label">Vous êtes :</label>
            <div
              className="type-toggle-group"
              role="radiogroup"
              aria-labelledby="customer-type-label"
            >
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
                Professionnel (Bureau / Commerce / Cabinet / Agence)
              </button>
            </div>
          </div>

          {/* Row 1: Name & Company (if pro or optional) */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fullName" className="form-label">
                Nom &amp; Prénom <span className="req">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                aria-required="true"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Ex. Jean Dupont"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="companyName" className="form-label">
                {customerType === "Professionnel" ? "Raison sociale / Société *" : "Nom de l'entreprise (facultatif)"}
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder={customerType === "Professionnel" ? "Ex. Cabinet Médical / Boutique..." : "Facultatif"}
                className="form-input"
              />
            </div>
          </div>

          {/* Row 2: Phone & Email */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Téléphone <span className="req">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                aria-required="true"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Ex. 07 66 54 92 35"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Adresse email <span className="req">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                aria-required="true"
                value={formData.email}
                onChange={handleChange}
                placeholder="Ex. contact@exemple.fr"
                className="form-input"
              />
            </div>
          </div>

          {/* Row 3: Location & Service */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="location" className="form-label">
                Commune ou Code Postal (secteur 66) <span className="req">*</span>
              </label>
              <input
                type="text"
                id="location"
                name="location"
                required
                aria-required="true"
                value={formData.location}
                onChange={handleChange}
                placeholder="Ex. Thuir, Perpignan, Canet..."
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="service" className="form-label">
                Type de prestation
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
                <option value="Autre demande">Autre configuration spécifique</option>
              </select>
            </div>
          </div>

          {/* Row 4: Preferred Date */}
          <div className="form-group">
            <label htmlFor="preferredDate" className="form-label">
              Période d&apos;intervention souhaitée (facultatif)
            </label>
            <input
              type="text"
              id="preferredDate"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              placeholder="Ex. Dès que possible, dans le mois, au printemps..."
              className="form-input"
            />
          </div>

          {/* Message Area */}
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Description de votre besoin &amp; des surfaces
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Indiquez par exemple le nombre approximatif de vitres ou fenêtres, la présence d'une verrière, véranda ou baie vitrée en hauteur, les éventuelles contraintes d'accès..."
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
              aria-required="true"
              checked={formData.consent}
              onChange={handleChange}
              className="form-checkbox"
            />
            <label htmlFor="consent" className="checkbox-label">
              J&apos;accepte que les informations saisies soient traitées par FL Clean AR afin d&apos;étudier mon besoin et d&apos;établir un devis, conformément à la{" "}
              <a href="/politique-de-confidentialite" target="_blank" className="privacy-link">
                politique de confidentialité
              </a>. <span className="req">*</span>
            </label>
          </div>

          {/* Error Notice */}
          {status.type === "error" && (
            <div className="status-box status-error" role="alert" aria-live="assertive">
              <AlertCircle size={20} className="status-icon" aria-hidden="true" />
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

          {/* Reassurance items */}
          <div className="form-guarantees">
            <div className="guarantee-item">
              <Shield size={14} />
              <span>Devis personnalisé sans engagement</span>
            </div>
            <div className="guarantee-item">
              <Clock size={14} />
              <span>Étude attentive sous 24h à 48h</span>
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
