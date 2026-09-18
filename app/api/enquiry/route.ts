import { NextResponse } from "next/server";
import { sendNotificationEmail } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, contactMethod, message } = body ?? {};

    if (!name || !phone || !email) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    await sendNotificationEmail({
      subject: "New Private Ownership Enquiry",
      rows: [
        { label: "Name", value: String(name) },
        { label: "Phone", value: String(phone) },
        { label: "Email", value: String(email) },
        { label: "Preferred Contact", value: String(contactMethod ?? "") },
        { label: "Message", value: String(message ?? "—") },
      ],
      replyTo: String(email),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[api/enquiry] failed:", err);
    return NextResponse.json(
      { ok: false, error: "Could not send enquiry." },
      { status: 500 }
    );
  }
}
