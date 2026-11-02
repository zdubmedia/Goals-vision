// Sends PMT's feedback to the agency's inbox through Netlify Forms. The form
// is declared (hidden) in index.html so Netlify knows its fields; Netlify then
// emails each submission to the address set under Forms → Form notifications.

export const FEEDBACK_FORM = 'pmt-feedback';

export async function emailFeedback(fields: { subject: string; batch: string; summary: string; feedback: string; name: string; link: string }): Promise<void> {
  const body = new URLSearchParams({ 'form-name': FEEDBACK_FORM, ...fields });
  try {
    await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body.toString() });
  } catch {
    // The answers are already saved on the dashboard; the email is a convenience.
  }
}
