import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'A valid email address is required.' },
        { status: 400 }
      );
    }

    const emailData = await resend.emails.send({
      from: 'Kigali BF Tech Group <onboarding@resend.dev>',
      to: process.env.TO_EMAIL || 'bflabscompany@gmail.com',
      replyTo: email,
      subject: `[Newsletter] New Subscriber: ${email}`,
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
                max-width: 580px;
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
                margin-top: 12px;
              }
              .body-content {
                padding: 30px;
              }
              .info-box {
                background: #f9fafb;
                border: 1px solid #e5e7eb;
                border-left: 4px solid #B9AF7A;
                border-radius: 12px;
                padding: 20px;
                margin-top: 10px;
              }
              .email-text {
                font-size: 18px;
                font-weight: 700;
                color: #111827;
                margin: 0;
              }
              .email-link {
                color: #B9AF7A;
                text-decoration: underline;
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
                <h2>Kigali BF Tech Group <span>• Newsletter</span></h2>
                <p>New subscriber joined your updates & newsletter list</p>
                <div>
                  <span class="badge">Newsletter Subscription</span>
                </div>
              </div>

              <!-- Body Details -->
              <div class="body-content">
                <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.2px; color: #6b7280; margin-bottom: 8px;">
                  Subscriber Email Address
                </div>
                <div class="info-box">
                  <p class="email-text">
                    <a href="mailto:${email}" class="email-link">${email}</a>
                  </p>
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
    });

    return NextResponse.json({ success: true, data: emailData });
  } catch (error) {
    console.error('Newsletter Subscription Error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to subscribe to newsletter.' },
      { status: 500 }
    );
  }
}
