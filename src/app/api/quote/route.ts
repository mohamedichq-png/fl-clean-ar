import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Anti-spam honeypot check
    if (body.website_trap && body.website_trap.trim() !== "") {
      // Silently discard bot submission
      return NextResponse.json({ success: true, message: "Demande reçue." });
    }

    const {
      fullName,
      email,
      phone,
      customerType,
      service,
      location,
      preferredDate,
      message,
      consent,
    } = body;

    // 2. Strict server-side validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Veuillez renseigner votre nom complet (au moins 2 caractères)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Veuillez renseigner une adresse email valide." },
        { status: 400 }
      );
    }

    const phoneRegex = /^[0-9+.\s()-]{8,20}$/;
    if (!phone || !phoneRegex.test(phone)) {
      return NextResponse.json(
        { success: false, error: "Veuillez renseigner un numéro de téléphone valide." },
        { status: 400 }
      );
    }

    if (!location || location.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Veuillez préciser votre commune ou code postal (secteur 66)." },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { success: false, error: "Veuillez cocher la case autorisant le traitement de vos données pour votre devis." },
        { status: 400 }
      );
    }

    // 3. Log or forward lead
    // In production, configure an email provider (Resend, SendGrid, SMTP) or CRM webhook.
    const leadRecord = {
      timestamp: new Date().toISOString(),
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      customerType: customerType || "Particulier",
      service: service || "Non spécifié",
      location: location.trim(),
      preferredDate: preferredDate || "Non précisée",
      message: (message || "").trim(),
    };

    console.log("Nouvelle demande de devis reçue :", JSON.stringify(leadRecord, null, 2));

    return NextResponse.json({
      success: true,
      message: "Votre demande de devis a bien été transmise à FL Clean AR. Nous l'étudions avec attention et vous recontacterons sous 24 à 48 heures.",
    });
  } catch (err) {
    console.error("Erreur traitement devis :", err);
    return NextResponse.json(
      { success: false, error: "Une erreur technique s'est produite lors de l'envoi. Vous pouvez nous contacter directement par téléphone au 07 66 54 92 35." },
      { status: 500 }
    );
  }
}
