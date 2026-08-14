import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import Groq from 'groq-sdk';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, contact, question, chatHistory, email, phone } = body;

    const clientName = name || 'Anonymous Client';
    const clientContact = contact || email || phone || 'Not Provided';
    const rawQuestion = question || 'Custom inquiry via Inara AI Assistant.';

    const destinationEmail = process.env.TO_EMAIL || 'bflabscompany@gmail.com';

    const isRealEmail =
      clientContact &&
      clientContact.includes('@') &&
      !clientContact.includes('@invexix.com') &&
      !clientContact.includes('@client.invexix.com');

    // Synthesize an executive, well-structured inquiry summary via Groq AI
    let craftedInquiryBrief = '';
    const groqApiKey = process.env.GROQ_API_KEY || process.env.NEXT_PUBLIC_GROQ_API_KEY;

    if (groqApiKey && (chatHistory || rawQuestion)) {
      try {
        const groq = new Groq({ apiKey: groqApiKey });
        const completion = await groq.chat.completions.create({
          model: 'llama-3.3-70b-versatile',
          messages: [
            {
              role: 'system',
              content: `You are an AI Technical & Business Analyst at Kigali BF Tech Group.
Analyze the user conversation history and determine their actual inquiry, request, critical question, or goal.
Synthesize a professional, well-written Executive Summary email for our management and engineering team.

Categorize the inquiry into one of:
• Project & Software Engineering Request
• Partnership & Business Collaboration
• Critical Support & Technical Inquiry
• Proposal, Pricing & Contract Request
• General Business Inquiry

Structure your summary clearly:
• Inquiry Category & Client Intent (What the client wants, asks, or needs help with)
• Key Details & Context Provided by Client
• Recommended Action for Kigali BF Tech Group Team

Keep it crisp, executive-ready, professional, and clear. Do not include conversational greetings.`
            },
            {
              role: 'user',
              content: `Client Name: ${clientName}\nClient Contact: ${clientContact}\n\nClient Discussion & Context:\n${chatHistory || rawQuestion}`
            }
          ],
          temperature: 0.3,
          max_tokens: 450
        });

        craftedInquiryBrief = completion.choices[0]?.message?.content?.trim() || '';
      } catch (err) {
        console.error('Failed to generate inquiry brief via Groq:', err);
      }
    }

    // Fallback if AI synthesis is unavailable
    if (!craftedInquiryBrief) {
      craftedInquiryBrief = `Client **${clientName}** submitted an inquiry via Inara AI Assistant.\n\nInquiry Details & Context:\n${rawQuestion}`;
    }

    const emailSubject = `[Inara AI Inquiry] ${clientName} — ${clientContact}`;

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
                background-color: #f3f4f6;
                margin: 0;
                padding: 30px 15px;
                color: #1f2937;
              }
              .card {
                max-width: 640px;
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
              .brief-card {
                background: #ffffff;
                border: 1px solid #e5e7eb;
                border-left: 4px solid #B9AF7A;
                border-radius: 12px;
                padding: 22px;
                margin-top: 6px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.02);
              }
              .brief-text {
                font-size: 15px;
                line-height: 1.7;
                color: #1f2937;
                white-space: pre-wrap;
                margin: 0;
              }
              .transcript-box {
                background: #f9fafb;
                border: 1px solid #e5e7eb;
                border-radius: 10px;
                padding: 16px;
                margin-top: 6px;
                font-size: 12px;
                font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
                color: #4b5563;
                white-space: pre-wrap;
                max-height: 250px;
                overflow-y: auto;
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
                <h2>Kigali BF Tech Group <span>• AI Assistant Lead</span></h2>
                <p>New client inquiry submitted via Inara AI Assistant</p>
                <div class="badge-bar">
                  <span class="badge">🤖 Executive AI Lead Brief • ${new Date().toLocaleDateString()}</span>
                </div>
              </div>

              <!-- Body Details -->
              <div class="body-content">
                
                <!-- Client Details Table -->
                <div class="section-title">Client Contact Details</div>
                <div style="margin-bottom: 24px;">
                  <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px; margin-bottom: 12px;">
                    <div style="font-size: 11px; font-weight: 700; color: #9ca3af; text-transform: uppercase; margin-bottom: 4px;">Client Full Name</div>
                    <div style="font-size: 16px; font-weight: 700; color: #111827;">${clientName}</div>
                  </div>

                  <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px; margin-bottom: 12px;">
                    <div style="font-size: 11px; font-weight: 700; color: #9ca3af; text-transform: uppercase; margin-bottom: 4px;">Email Address / Contact Info</div>
                    <div style="font-size: 15px; font-weight: 600; color: #111827;">
                      ${isRealEmail ? `<a href="mailto:${clientContact}" style="color: #B9AF7A; text-decoration: underline;">${clientContact}</a>` : clientContact}
                    </div>
                  </div>

                  <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px;">
                    <div style="font-size: 11px; font-weight: 700; color: #9ca3af; text-transform: uppercase; margin-bottom: 4px;">Channel</div>
                    <div style="font-size: 15px; font-weight: 800; color: #B9AF7A;">Inara AI Inquiry Synthesizer</div>
                  </div>
                </div>

                <!-- Crafted Executive Inquiry Brief -->
                <div class="section-title">Executive Inquiry Brief & Client Context</div>
                <div class="brief-card" style="margin-bottom: 24px;">
                  <p class="brief-text">${craftedInquiryBrief}</p>
                </div>

                ${chatHistory ? `
                <!-- Raw Chat Reference -->
                <div class="section-title">Reference: Raw Conversation Log</div>
                <div class="transcript-box">${chatHistory}</div>
                ` : ''}

              </div>

              <!-- Footer -->
              <div class="footer">
                Kigali BF Tech Group AI Dispatch Engine • Sent to ${destinationEmail} • ${new Date().toLocaleString()}
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
