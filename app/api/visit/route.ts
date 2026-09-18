import { NextResponse } from "next/server";
import { sendNotificationEmail } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, date, visitors, email, experience } = body ?? {};

    if (!name || !phone || !date || !email) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    await sendNotificationEmail({
      subject: "New Visit Request",
      rows: [
        { label: "Name", value: String(name) },
        { label: "Phone", value: String(phone) },
        { label: "Email", value: String(email) },
        { label: "Preferred Date", value: String(date) },
        { label: "Visitors", value: String(visitors ?? "") },
        { label: "Preferred Experience", value: String(experience ?? "") },
      ],
      replyTo: String(email),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[api/visit] failed:", err);
    return NextResponse.json(
      { ok: false, error: "Could not send visit request." },
      { status: 500 }
    );
  }
}
