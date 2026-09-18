import { NextResponse } from "next/server";
import { sendNotificationEmail } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { activity, date, slot, players, name, phone } = body ?? {};

    if (!activity || !date || !slot || !name || !phone) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    await sendNotificationEmail({
      subject: `New Booking Request — ${activity}`,
      rows: [
        { label: "Activity", value: String(activity) },
        { label: "Date", value: String(date) },
        { label: "Time Slot", value: String(slot) },
        { label: "Players", value: String(players ?? "") },
        { label: "Name", value: String(name) },
        { label: "Phone", value: String(phone) },
      ],
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[api/book] failed:", err);
    return NextResponse.json(
      { ok: false, error: "Could not send booking request." },
      { status: 500 }
    );
  }
}
