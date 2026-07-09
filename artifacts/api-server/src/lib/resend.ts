import { Resend } from "resend";
import { logger } from "./logger";

const resend = new Resend(process.env.RESEND_API_KEY);

const NOTIFY_EMAIL = "info@mouthpiecemedia.org";
// Once mouthpiecemedia.org is verified in Resend dashboard, change to:
// "The Mouthpiece <noreply@mouthpiecemedia.org>"
const FROM_EMAIL = "The Mouthpiece <onboarding@resend.dev>";

export async function sendStorySubmissionEmail(data: {
  fullName: string;
  email: string;
  phone?: string | null;
  story: string;
  preferredContactMethod: string;
}) {
  try {
    const { data: result, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [NOTIFY_EMAIL],
      replyTo: data.email,
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
    });
    if (error) {
      logger.error({ error }, "Resend story submission email failed");
    } else {
      logger.info({ id: result?.id }, "Story submission email sent");
    }
  } catch (err) {
    logger.error({ err }, "Resend story submission email exception");
  }
}

export async function sendContactMessageEmail(data: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    const { data: result, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [NOTIFY_EMAIL],
      replyTo: data.email,
      subject: `New Contact Message from ${data.name}`,
      html: `
        <h2>New Contact Message - The Mouthpiece</h2>
        <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td><strong>Name</strong></td><td>${data.name}</td></tr>
          <tr><td><strong>Email</strong></td><td>${data.email}</td></tr>
          <tr><td valign="top"><strong>Message</strong></td><td style="white-space:pre-wrap">${data.message}</td></tr>
        </table>
      `,
    });
    if (error) {
      logger.error({ error }, "Resend contact message email failed");
    } else {
      logger.info({ id: result?.id }, "Contact message email sent");
    }
  } catch (err) {
    logger.error({ err }, "Resend contact message email exception");
  }
}
