import React from "react";
import { MessageSquare, ClipboardCheck, Calculator, CalendarCheck } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Prise de contact",
      desc: "Vous nous adressez votre demande en ligne, par téléphone ou via WhatsApp en décrivant vos surfaces à nettoyer.",
    },
    {
      number: "02",
      icon: ClipboardCheck,
      title: "Évaluation du besoin",
      desc: "Nous étudions ensemble la typologie des vitrages, la hauteur d'accès, l'état d'encrassement et vos contraintes horaires.",
    },
    {
      number: "03",
      icon: Calculator,
      title: "Devis adapté & gratuit",
      desc: "Une proposition tarifaire claire et sans engagement vous est transmise, détaillant les prestations convenues.",
    },
    {
      number: "04",
      icon: CalendarCheck,
      title: "Intervention planifiée",
      desc: "La date et le créneau d'intervention sont fixés selon vos disponibilités et validés par confirmation préalable avec l'entreprise.",
    },
  ];

  return (
    <section className="section section-light" aria-labelledby="process-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Déroulement & Méthode</span>
          <h2 id="process-heading">Un processus simple, rapide et transparent</h2>
          <div className="gold-line"></div>
          <p className="section-lead">
            De la demande initiale jusqu'à la finition de vos vitrages, chaque étape est orchestrée avec rigueur et clarté.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="process-step-card">
                <div className="step-header">
                  <span className="step-number">{step.number}</span>
                  <div className="step-icon-wrap">
                    <Icon size={24} />
                  </div>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="process-note">
          <p>
            * <em>Note sur le planning :</em> La programmation définitive de l'intervention est soumise à validation conjointe et confirmation météorologique pour les travaux extérieurs.
          </p>
        </div>
      </div>

      
    </section>
  );
}
