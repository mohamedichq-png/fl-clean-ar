import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Anti-spam honeypot check
    if (body.website_trap && String(body.website_trap).trim() !== "") {
      return NextResponse.json({
        success: true,
        message: "Votre avis a bien été pris en compte.",
      });
    }

    const {
      authorName,
      customerType,
      serviceType,
      rating,
      location,
      comment,
      contactEmailOrPhone,
      consent,
    } = body;

    // 2. Strict validation
    if (!authorName || typeof authorName !== "string" || authorName.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Veuillez indiquer votre nom ou prénom (au moins 2 caractères)." },
        { status: 400 }
      );
    }

    const parsedRating = Number(rating);
    if (!Number.isInteger(parsedRating) || parsedRating < 1 || parsedRating > 5) {
      return NextResponse.json(
        { success: false, error: "Veuillez attribuer une note entre 1 et 5 étoiles." },
        { status: 400 }
      );
    }

    if (!location || typeof location !== "string" || location.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Veuillez préciser votre commune ou secteur d'intervention (ex: Thuir, Perpignan...)." },
        { status: 400 }
      );
    }

    if (!comment || typeof comment !== "string" || comment.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Veuillez rédiger un commentaire d'au moins 10 caractères décrivant votre expérience." },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { success: false, error: "Veuillez accepter les conditions de modération et de publication de votre avis." },
        { status: 400 }
      );
    }

    // 3. Structured Review Record
    const reviewRecord = {
      id: `rev-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      timestamp: new Date().toISOString(),
      authorName: authorName.trim(),
      customerType: customerType === "Professionnel" ? "Professionnel" : "Particulier",
      serviceType: (serviceType || "Nettoyage général").trim(),
      rating: parsedRating,
      location: location.trim(),
      comment: comment.trim(),
      contactVerification: contactEmailOrPhone ? String(contactEmailOrPhone).trim() : undefined,
      status: "pending_moderation", // Kept unpublished until approved by owner
    };

    console.log("[FL Clean AR Review Submitted - Pending Moderation]:", JSON.stringify(reviewRecord, null, 2));

    // Optional: write to pending_reviews.json file in src/data if writable
    try {
      const dataDir = path.join(process.cwd(), "src", "data");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const pendingFilePath = path.join(dataDir, "pending_reviews.json");
      let existing: unknown[] = [];
      if (fs.existsSync(pendingFilePath)) {
        try {
          const content = fs.readFileSync(pendingFilePath, "utf-8");
          existing = JSON.parse(content);
        } catch {
          existing = [];
        }
      }
      existing.push(reviewRecord);
      fs.writeFileSync(pendingFilePath, JSON.stringify(existing, null, 2), "utf-8");
    } catch (fsErr) {
      console.warn("Could not write to pending_reviews.json (read-only environment):", fsErr);
    }

    // Optional webhook forwarding
    const webhookUrl = process.env.REVIEW_WEBHOOK_URL || process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type: "customer_review", ...reviewRecord }),
        });
      } catch (webhookErr) {
        console.error("Erreur transmission webhook avis :", webhookErr);
      }
    }

    return NextResponse.json({
      success: true,
      message:
        "Merci pour votre avis ! Votre témoignage a bien été transmis. Conformément à notre charte d'authenticité, il sera examiné par Farid Hammoudi avant sa publication en ligne.",
      data: {
        id: reviewRecord.id,
        authorName: reviewRecord.authorName,
        rating: reviewRecord.rating,
      },
    });
  } catch (err) {
    console.error("Erreur soumission avis :", err);
    return NextResponse.json(
      {
        success: false,
        error: "Une erreur technique est survenue. Vous pouvez également nous contacter directement au 07 66 54 92 35.",
      },
      { status: 500 }
    );
  }
}
