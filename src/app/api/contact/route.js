import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      inquiryType,
      selectedOption,
      message
    } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message requirements are required.' },
        { status: 400 }
      );
    }

    // Dynamic, clear subject line for instant identification in inbox
    const emailSubject = `[${inquiryType || 'Project Request'}] ${selectedOption ? `${selectedOption} — ` : ''}${name}`;

    // Safely check if email is a real external email address for replyTo header
    const isRealEmail =
      email &&
      email.includes('@') &&
      !email.includes('@invexix.com') &&
      !email.includes('@client.invexix.com');

    const destinationEmail = process.env.TO_EMAIL || 'bflabscompany@gmail.com';

    const mailOptions = {
      from: 'Kigali BF Tech Group <onboarding@resend.dev>',
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
                background-color: #f3f4f6;
                margin: 0;
                padding: 30px 15px;
                color: #1f2937;
              }
              .card {
                max-width: 620px;
                margin: 0 auto;
                background: #ffffff;
                border-radius: 16px;
                overflow: hidden;
                box-shadow: 0 10px 25px rgba(0,0,0,0.06);
                border: 1px solid #e5e7eb;
              }
              .header {
                background: #111115;
                padding: 30px;
                text-align: left;
                border-bottom: 3px solid #B9AF7A;
              }
              .header h2 {
                margin: 0 0 6px 0;
                color: #ffffff;
                font-size: 22px;
                font-weight: 800;
                letter-spacing: -0.5px;
              }
              .header h2 span {
                color: #B9AF7A;
              }
              .header p {
                margin: 0;
                color: #9ca3af;
                font-size: 13px;
                font-weight: 500;
              }
              .badge-bar {
                margin-top: 14px;
              }
              .badge {
                display: inline-block;
                padding: 6px 14px;
                background: rgba(185, 175, 122, 0.15);
                border: 1px solid #B9AF7A;
                color: #B9AF7A;
                font-size: 11px;
                font-weight: 800;
                border-radius: 50px;
                text-transform: uppercase;
                letter-spacing: 0.8px;
              }
              .body-content {
                padding: 30px;
              }
              .section-title {
                font-size: 11px;
                font-weight: 800;
                text-transform: uppercase;
                letter-spacing: 1.2px;
                color: #6b7280;
                margin-bottom: 8px;
              }
              .message-card {
                background: #ffffff;
                border: 1px solid #e5e7eb;
                border-left: 4px solid #B9AF7A;
                border-radius: 12px;
                padding: 20px;
                margin-top: 10px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.02);
              }
              .message-text {
                font-size: 15px;
                line-height: 1.7;
                color: #1f2937;
                white-space: pre-wrap;
                margin: 0;
              }
              .footer {
                background: #f9fafb;
                padding: 20px 30px;
                text-align: center;
                border-top: 1px solid #f3f4f6;
                font-size: 12px;
                color: #9ca3af;
              }
            </style>
          </head>
          <body>
            <div class="card">
              <!-- Header Banner -->
              <div class="header">
                <h2>Kigali BF Tech Group <span>• ${inquiryType === 'AI Assistant Lead' ? 'AI Bot Inquiry' : 'Contact Inquiry'}</span></h2>
                <p>New client project request submitted from portfolio website</p>
                <div class="badge-bar">
                  <span class="badge">${inquiryType || 'Service'} • ${selectedOption || 'Custom'}</span>
                </div>
              </div>

              <!-- Body Details -->
              <div class="body-content">
                
                <!-- Client Details Table -->
                <div class="section-title">Client Contact Details</div>
                <div style="margin-bottom: 24px;">
                  <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px; margin-bottom: 12px;">
                    <div style="font-size: 11px; font-weight: 700; color: #9ca3af; text-transform: uppercase; margin-bottom: 4px;">Full Name</div>
                    <div style="font-size: 16px; font-weight: 700; color: #111827;">${name}</div>
                  </div>

                  <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px; margin-bottom: 12px;">
                    <div style="font-size: 11px; font-weight: 700; color: #9ca3af; text-transform: uppercase; margin-bottom: 4px;">Email Address / Contact</div>
                    <div style="font-size: 15px; font-weight: 600; color: #111827;">
                      ${isRealEmail ? `<a href="mailto:${email}" style="color: #B9AF7A; text-decoration: underline;">${email}</a>` : email}
                    </div>
                  </div>

                  ${phone ? `
                  <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px; margin-bottom: 12px;">
                    <div style="font-size: 11px; font-weight: 700; color: #9ca3af; text-transform: uppercase; margin-bottom: 4px;">Phone / WhatsApp</div>
                    <div style="font-size: 15px; font-weight: 600; color: #111827;">${phone}</div>
                  </div>` : ''}

                  <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px;">
                    <div style="font-size: 11px; font-weight: 700; color: #9ca3af; text-transform: uppercase; margin-bottom: 4px;">Requested ${inquiryType || 'Service'}</div>
                    <div style="font-size: 16px; font-weight: 800; color: #B9AF7A;">${selectedOption}</div>
                  </div>
                </div>

                <!-- Message Description Box -->
                <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.2px; color: #6b7280; margin-bottom: 8px;">
                  Project Requirements & Inquiry Details
                </div>
                <div class="message-card">
                  <p class="message-text">${message}</p>
                </div>

              </div>

              <!-- Footer -->
              <div class="footer">
                Kigali BF Tech Group Website Notification • ${new Date().toLocaleString()}
              </div>
            </div>
          </body>
        </html>
      `
    };

    if (isRealEmail) {
      mailOptions.replyTo = email;
    }

    const emailData = await resend.emails.send(mailOptions);

    return NextResponse.json({ success: true, data: emailData });
  } catch (error) {
    console.error('Resend Email Error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send project request.' },
      { status: 500 }
    );
  }
}
