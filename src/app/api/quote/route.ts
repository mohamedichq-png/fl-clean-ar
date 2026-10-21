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
      companyName,
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
        { success: false, error: "Veuillez accepter le traitement de vos données pour l'étude de votre devis." },
        { status: 400 }
      );
    }

    // 3. Structured Lead Record
    const leadRecord = {
      timestamp: new Date().toISOString(),
      fullName: fullName.trim(),
      companyName: companyName ? String(companyName).trim() : undefined,
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      customerType: customerType || "Particulier",
      service: service || "Non spécifié",
      location: location.trim(),
      preferredDate: preferredDate ? String(preferredDate).trim() : "Non précisée",
      message: (message || "").trim(),
    };

    console.log("[FL Clean AR Lead]", JSON.stringify(leadRecord, null, 2));

    // Optional webhook forwarding if environment variable is set
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(leadRecord),
        });
      } catch (webhookErr) {
        console.error("Erreur transmission webhook lead :", webhookErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Votre demande de devis a bien été transmise à FL Clean AR. Farid Hammoudi étudiera votre demande avec attention et vous recontactera rapidement.",
      data: {
        fullName: leadRecord.fullName,
        location: leadRecord.location,
        service: leadRecord.service,
        phone: leadRecord.phone,
      },
    });
  } catch (err) {
    console.error("Erreur traitement devis :", err);
    return NextResponse.json(
      {
        success: false,
        error: "Une erreur technique s'est produite lors de l'envoi. Vous pouvez nous contacter directement par téléphone au 07 66 54 92 35.",
      },
      { status: 500 }
    );
  }
}
