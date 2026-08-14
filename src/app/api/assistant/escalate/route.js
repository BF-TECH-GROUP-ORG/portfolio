import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, contact, question, email, phone } = body;

    const clientName = name || 'Anonymous Client';
    const clientContact = contact || email || phone || 'Not Provided';
    const clientQuestion = question || 'Custom project request via Inara AI Assistant.';

    const destinationEmail = process.env.TO_EMAIL || 'bflabscompany@gmail.com';

    const isRealEmail =
      clientContact &&
      clientContact.includes('@') &&
      !clientContact.includes('@invexix.com') &&
      !clientContact.includes('@client.invexix.com');

    const emailSubject = `[Inara AI Assistant Lead] ${clientName} — ${clientContact}`;

    const mailOptions = {
      from: 'Kigali BF Tech Group AI <onboarding@resend.dev>',
      to: destinationEmail,
      subject: emailSubject,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                background-color: #0d0d10;
                margin: 0;
                padding: 30px 15px;
                color: #e4e4e7;
              }
              .card {
                max-width: 620px;
                margin: 0 auto;
                background: #18181b;
                border-radius: 16px;
                overflow: hidden;
                box-shadow: 0 10px 30px rgba(0,0,0,0.5);
                border: 1px solid #27272a;
              }
              .header {
                background: #000000;
                padding: 30px;
                text-align: left;
                border-bottom: 3px solid #B9AF7A;
              }
              .header h2 {
                margin: 0 0 6px 0;
                color: #ffffff;
                font-size: 22px;
                font-weight: 800;
              }
              .header h2 span {
                color: #B9AF7A;
              }
              .header p {
                margin: 0;
                color: #a1a1aa;
                font-size: 13px;
              }
              .badge {
                display: inline-block;
                margin-top: 12px;
                padding: 6px 14px;
                background: rgba(185, 175, 122, 0.15);
                border: 1px solid #B9AF7A;
                color: #B9AF7A;
                font-size: 11px;
                font-weight: 800;
                border-radius: 50px;
                text-transform: uppercase;
              }
              .body-content {
                padding: 30px;
              }
              .field-box {
                background: #09090b;
                border: 1px solid #27272a;
                border-radius: 12px;
                padding: 16px;
                margin-bottom: 14px;
              }
              .field-label {
                font-size: 11px;
                font-weight: 700;
                color: #71717a;
                text-transform: uppercase;
                margin-bottom: 4px;
              }
              .field-value {
                font-size: 15px;
                font-weight: 700;
                color: #ffffff;
              }
              .message-card {
                background: #09090b;
                border: 1px solid #27272a;
                border-left: 4px solid #B9AF7A;
                border-radius: 12px;
                padding: 20px;
                margin-top: 10px;
              }
              .message-text {
                font-size: 14px;
                line-height: 1.7;
                color: #e4e4e7;
                white-space: pre-wrap;
                margin: 0;
              }
              .footer {
                background: #09090b;
                padding: 20px 30px;
                text-align: center;
                border-top: 1px solid #27272a;
                font-size: 12px;
                color: #71717a;
              }
            </style>
          </head>
          <body>
            <div class="card">
              <!-- Header Banner -->
              <div class="header">
                <h2>Inara AI Assistant <span>• Escalated Inquiry</span></h2>
                <p>A client requested a direct follow-up via AI Assistant chat on the portfolio website</p>
                <div class="badge">🤖 AI Chat Lead • ${new Date().toLocaleDateString()}</div>
              </div>

              <!-- Body Details -->
              <div class="body-content">
                <div class="field-box">
                  <div class="field-label">Client Full Name</div>
                  <div class="field-value">${clientName}</div>
                </div>

                <div class="field-box">
                  <div class="field-label">Email / Phone Contact Info</div>
                  <div class="field-value" style="color: #B9AF7A;">
                    ${isRealEmail ? `<a href="mailto:${clientContact}" style="color: #B9AF7A; text-decoration: underline;">${clientContact}</a>` : clientContact}
                  </div>
                </div>

                <div class="field-label" style="margin-top: 20px;">Client Inquiry / Technical Requirement</div>
                <div class="message-card">
                  <p class="message-text">${clientQuestion}</p>
                </div>
              </div>

              <!-- Footer -->
              <div class="footer">
                Sent to ${destinationEmail} • Kigali BF Tech Group AI Assistant Engine
              </div>
            </div>
          </body>
        </html>
      `
    };

    if (isRealEmail) {
      mailOptions.replyTo = clientContact;
    }

    const emailData = await resend.emails.send(mailOptions);

    return NextResponse.json({ success: true, data: emailData });
  } catch (error) {
    console.error('AI Bot Email Escalation Error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send AI Bot email notification.' },
      { status: 500 }
    );
  }
}
