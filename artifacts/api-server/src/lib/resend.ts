import { ReplitConnectors } from "@replit/connectors-sdk";

const connectors = new ReplitConnectors();

const NOTIFY_EMAIL = "info@mouthpiecemedia.org";
const FROM_EMAIL = "noreply@mouthpiecemedia.org";

export async function sendStorySubmissionEmail(data: {
  fullName: string;
  email: string;
  phone?: string | null;
  story: string;
  preferredContactMethod: string;
}) {
  try {
    await connectors.proxy("resend", "/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [NOTIFY_EMAIL],
        reply_to: data.email,
        subject: `New Story Submission from ${data.fullName}`,
        html: `
          <h2>New Story Submission - The Mouthpiece</h2>
          <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:600px">
            <tr><td><strong>Name</strong></td><td>${data.fullName}</td></tr>
            <tr><td><strong>Email</strong></td><td>${data.email}</td></tr>
            ${data.phone ? `<tr><td><strong>Phone</strong></td><td>${data.phone}</td></tr>` : ""}
            <tr><td><strong>Preferred Contact</strong></td><td>${data.preferredContactMethod}</td></tr>
            <tr><td valign="top"><strong>Story</strong></td><td style="white-space:pre-wrap">${data.story}</td></tr>
          </table>
        `,
      }),
    });
  } catch (err) {
    // Non-fatal: log but don't fail the submission
    console.error("Resend story submission email failed:", err);
  }
}

export async function sendContactMessageEmail(data: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    await connectors.proxy("resend", "/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [NOTIFY_EMAIL],
        reply_to: data.email,
        subject: `New Contact Message from ${data.name}`,
        html: `
          <h2>New Contact Message - The Mouthpiece</h2>
          <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:600px">
            <tr><td><strong>Name</strong></td><td>${data.name}</td></tr>
            <tr><td><strong>Email</strong></td><td>${data.email}</td></tr>
            <tr><td valign="top"><strong>Message</strong></td><td style="white-space:pre-wrap">${data.message}</td></tr>
          </table>
        `,
      }),
    });
  } catch (err) {
    console.error("Resend contact message email failed:", err);
  }
}
