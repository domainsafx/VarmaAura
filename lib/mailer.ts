import nodemailer from "nodemailer";

/**
 * Reads SMTP settings from environment variables. See .env.example for the
 * full list. Required: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO.
 */
function getEnv() {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    SMTP_SECURE,
    MAIL_FROM,
    MAIL_TO,
  } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !MAIL_TO) {
    return null;
  }

  return {
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === "true" || Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    from: MAIL_FROM || SMTP_USER,
    to: MAIL_TO,
  };
}

let cachedTransporter: nodemailer.Transporter | null = null;

function getTransporter(config: NonNullable<ReturnType<typeof getEnv>>) {
  if (cachedTransporter) return cachedTransporter;
  cachedTransporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: config.auth,
  });
  return cachedTransporter;
}

export async function sendNotificationEmail({
  subject,
  rows,
  replyTo,
}: {
  subject: string;
  rows: { label: string; value: string }[];
  replyTo?: string;
}) {
  const config = getEnv();

  if (!config) {
    // SMTP isn't configured yet (e.g. local dev without .env). Fail loudly
    // in the server logs but don't crash the request — the route handler
    // decides how to respond to the client.
    console.error(
      "[mailer] Missing SMTP env vars — see .env.example. Email not sent."
    );
    throw new Error("SMTP is not configured");
  }

  const transporter = getTransporter(config);

  const html = `
    <div style="font-family: Arial, sans-serif; font-size: 15px; color: #1B2118;">
      <h2 style="font-family: Georgia, serif; margin-bottom: 18px;">${subject}</h2>
      <table cellpadding="6" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 480px;">
        ${rows
          .map(
            (r) => `
          <tr style="border-bottom: 1px solid #eee;">
            <td style="font-weight: 600; padding-right: 16px; white-space: nowrap; vertical-align: top;">${escapeHtml(
              r.label
            )}</td>
            <td>${escapeHtml(r.value)}</td>
          </tr>`
          )
          .join("")}
      </table>
      <p style="margin-top: 24px; color: #777; font-size: 12px;">
        Sent automatically from the Varma Aura website.
      </p>
    </div>
  `;

  const text = rows.map((r) => `${r.label}: ${r.value}`).join("\n");

  await transporter.sendMail({
    from: `"Varma Aura Website" <${config.from}>`,
    to: config.to,
    replyTo,
    subject,
    text,
    html,
  });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
