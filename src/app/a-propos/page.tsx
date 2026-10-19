import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2, MapPin, Eye, Sparkles, Sliders, Wrench, Award } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { businessConfig } from "@/config/business";
import { assetInventory } from "@/config/assets";

export const metadata = {
  title: "À Propos de FL Clean AR | Artisan Laveur de Vitres (66)",
  description:
    "Découvrez FL Clean AR et son fondateur Farid Hammoudi : artisan laveur de vitres intervenant à Thuir et dans toutes les Pyrénées-Orientales, toutes hauteurs en nacelle et perche eau pure.",
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "À propos" }]} />

      {/* Hero Section */}
      <section className="section section-light page-hero" aria-labelledby="about-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Notre Entreprise & Notre Philosophie</span>
            <h1 id="about-heading">À Propos de FL Clean AR</h1>
            <div className="gold-line"></div>
            <p className="section-lead">
              Spécialiste artisan du lavage et de l&apos;entretien de toutes surfaces vitrées pour particuliers et professionnels dans les Pyrénées-Orientales.
            </p>
          </div>
        </div>
      </section>

      {/* Main Presentation Section */}
      <section className="section" aria-label="Présentation détaillée">
        <div className="container">
          <div className="about-main-grid">
            <div className="about-text-col">
              <span className="section-subtitle">Exigence & Clarté</span>
              <h2 className="about-section-title">Une approche artisanale et rigoureuse du nettoyage de vitres</h2>
              <div className="gold-dash"></div>

              <div className="about-editorial">
                <p className="lead-paragraph">
                  Fondée et dirigée par <strong>Farid Hammoudi</strong>, l&apos;entreprise <strong>FL Clean AR</strong> (FL Vitre 66) est basée à <strong>Thuir</strong> et intervient dans l&apos;ensemble du département des Pyrénées-Orientales (66).
                </p>
                <p>
                  Qu&apos;il s&apos;agisse d&apos;une grande baie vitrée de salon cathédrale, d&apos;une verrière résidentielle cintrée, d&apos;un hall d&apos;accueil d&apos;entreprise ou d&apos;une façade d&apos;immeuble de plusieurs étages nécessitant une <strong>nacelle élévatrice</strong>, chaque chantier bénéficie d&apos;un soin minutieux et d&apos;un outillage de pointe.
                </p>
                <p>
                  Notre engagement repose sur une <strong>transparence intégrale</strong> : devis préalables clairs et détaillés, respect scrupuleux des délais, maîtrise des protocoles de sécurité en hauteur et restitution d&apos;une clarté parfaite sans rayures ni traces.
                </p>
              </div>

              {/* Pillars */}
              <div className="pillars-grid">
                <div className="pillar-item">
                  <div className="pillar-icon-box">
                    <Eye size={20} />
                  </div>
                  <h4 className="pillar-title">Précision du geste</h4>
                  <p className="pillar-text">Raclage manuel précis au millimètre et finitions microfibres pour un résultat net sous tous les angles de lumière.</p>
                </div>

                <div className="pillar-item">
                  <div className="pillar-icon-box">
                    <Sliders size={20} />
                  </div>
                  <h4 className="pillar-title">Accès toutes hauteurs</h4>
                  <p className="pillar-text">Nacelle élévatrice télescopique certifiée et perches carbone à eau pure déminéralisée pour atteindre jusqu&apos;à 4 étages.</p>
                </div>
              </div>
            </div>

            <div className="about-media-col">
              <div className="logo-card-frame">
                <div className="photo-display-box">
                  <Image
                    src="/assets/images/farid-artisan-nacelle.webp"
                    alt="Farid Hammoudi équipé en nacelle avec casque et gilet de sécurité"
                    width={600}
                    height={750}
                    className="about-project-img"
                    priority
                  />
                  <div className="photo-overlay-caption">
                    <span className="caption-tag">Farid HAMMOUDI</span>
                    <span className="caption-text">Artisan laveur de vitres • Intervention en nacelle</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Business Card & Equipment Credentials */}
      <section className="section section-light" aria-labelledby="credentials-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Authenticité & Carte Professionnelle</span>
            <h2 id="credentials-heading">Un artisan déclaré et équipé pour tous vos besoins</h2>
            <div className="gold-line"></div>
            <p className="section-lead">
              Retrouvez nos coordonnées officielles et nos équipements d&apos;intervention sur site.
            </p>
          </div>

          <div className="about-credentials-grid">
            <div className="credential-card">
              <div className="credential-img-wrapper">
                <Image
                  src="/assets/images/carte-visite-fl-clean-ar.webp"
                  alt="Carte de visite officielle FL Clean AR / FL Vitre 66 - Farid Hammoudi"
                  width={540}
                  height={387}
                  className="credential-img"
                />
              </div>
              <div className="credential-content">
                <h4 className="credential-title">Carte Professionnelle Officielle</h4>
                <p className="credential-desc">
                  Farid HAMMOUDI • Laveur de vitre professionnel & particulier<br />
                  <strong>FL Vitre 66 / FL Clean AR</strong> • Mas Maurette, 66300 THUIR<br />
                  Téléphone : <strong>07 66 54 92 35</strong> • Email : <strong>fl-vitre@hotmail.fr</strong>
                </p>
              </div>
            </div>

            <div className="credential-card">
              <div className="credential-img-wrapper">
                <Image
                  src="/assets/images/chantier-immeuble-nacelle.webp"
                  alt="Intervention en nacelle élévatrice sur façade d'immeuble 4 étages"
                  width={540}
                  height={720}
                  className="credential-img"
                />
              </div>
              <div className="credential-content">
                <h4 className="credential-title">Intervention Grande Hauteur</h4>
                <p className="credential-desc">
                  Équipé pour les accès complexes d&apos;immeubles de bureaux, copropriétés et bâtiments communaux grâce à des nacelles élévatrices homologuées et un balisage strict.
                </p>
              </div>
            </div>

            <div className="credential-card">
              <div className="credential-img-wrapper">
                <Image
                  src="/assets/images/chantier-mediatheque-eau-pure.webp"
                  alt="Station mobile eau pure et perche télescopique sur médiathèque"
                  width={540}
                  height={673}
                  className="credential-img"
                />
              </div>
              <div className="credential-content">
                <h4 className="credential-title">Technologie Eau Pure Osmosée</h4>
                <p className="credential-desc">
                  Station mobile de déminéralisation et cannes carbone : séchage spontané sans calcaire ni produit nocif, dans le respect de l&apos;environnement et de votre bâti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Card */}
      <section className="section" aria-labelledby="area-heading">
        <div className="container">
          <div className="area-box">
            <div className="area-icon-wrap">
              <MapPin size={28} />
            </div>
            <div className="area-text">
              <span className="section-subtitle">Secteur Géographique</span>
              <h3 id="area-heading" className="area-heading">Zone d&apos;intervention : Pyrénées-Orientales (66)</h3>
              <p className="area-desc">
                Implanté à <strong>Thuir (66300)</strong>, FL Clean AR se déplace auprès des particuliers et professionnels de la région :
              </p>
              <div className="cities-tag-list">
                {businessConfig.serviceArea.primaryZones.map((city, idx) => (
                  <span key={idx} className="city-pill">
                    {city}
                  </span>
                ))}
              </div>
              <p className="area-note">
                Vous résidez dans une autre commune des Pyrénées-Orientales ? N&apos;hésitez pas à nous solliciter : chaque demande fait l&apos;objet d&apos;une confirmation de faisabilité géographique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="section section-light" style={{ textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "680px" }}>
          <h2>Prêt à redonner de l&apos;éclat à vos vitrages ?</h2>
          <div className="gold-line"></div>
          <p style={{ marginBottom: "2rem" }}>
            Contactez Farid Hammoudi pour une étude personnalisée et un devis sans engagement adapté à votre habitation ou à votre local commercial.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-gold btn-lg">
              <span>Demander un devis gratuit</span>
              <ArrowRight size={18} />
            </Link>
            <a href={businessConfig.phone.href} className="btn btn-primary btn-lg">
              <span>Appeler le {businessConfig.phone.display}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
