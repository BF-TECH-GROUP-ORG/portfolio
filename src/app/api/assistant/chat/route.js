import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';
import { buildSystemPrompt } from '@/lib/assistant/systemPrompt';

export async function POST(request) {
    try {
        const body = await request.json();
        const { messages = [] } = body;

        const lastUserMessage = (messages[messages.length - 1]?.content || '').trim();
        const queryLower = lastUserMessage.toLowerCase();

        const groqApiKey = process.env.GROQ_API_KEY || process.env.NEXT_PUBLIC_GROQ_API_KEY;

        // If Groq API Key is configured, use ultra-fast Groq Llama-3.3-70B model
        if (groqApiKey) {
            const groq = new Groq({ apiKey: groqApiKey });
            const systemPrompt = buildSystemPrompt();

            const completion = await groq.chat.completions.create({
                model: 'llama-3.3-70b-versatile',
                messages: [
                    { role: 'system', content: systemPrompt },
                    ...messages.map((m) => ({ role: m.role, content: m.content }))
                ],
                temperature: 0.6,
                max_tokens: 350
            });

            const reply = completion.choices[0]?.message?.content || 'How can I assist you with your project today?';
            return NextResponse.json({ reply });
        }

        // Smart Knowledge Base & Human Conversational Fallback Engine
        let fallbackReply = '';
        let needsEscalation = false;

        // 1. Quote / Pricing / Proposal / Direct Escalation Request (Checked FIRST before portfolio)
        if (queryLower.includes('quote') || queryLower.includes('price') || queryLower.includes('cost') || queryLower.includes('estimate') || queryLower.includes('proposal') || queryLower.includes('request custom') || queryLower.includes('order') || queryLower.includes('custom project') || queryLower.includes('contact me')) {
            fallbackReply = `I am going to forward your request directly to our senior engineering team at **info@invexix.com** for a custom proposal and quote!\n\nCould you please share your **full name**?`;
            needsEscalation = true;
        }
        // 2. Human Greetings & Salutations
        else if (queryLower.match(/^(hello|hi|hey|greetings|good morning|good afternoon|good evening|howdy|muraho|mwiriwe|bite)/i) || queryLower === 'hi' || queryLower === 'hello' || queryLower === 'hey') {
            fallbackReply = `Hello! 👋 I am **Inara**, your AI Assistant at **Kigali BF Tech Group**.\n\nHow can I help you with your software, web, or mobile project today?`;
        }
        // 3. Thank you / Gratitude
        else if (queryLower.includes('thank') || queryLower.includes('thanks') || queryLower.includes('merci') || queryLower.includes('murakoze') || queryLower.includes('appreciate')) {
            fallbackReply = `You are very welcome! 😊 It is a pleasure assisting you. Let me know if you have any questions about our services or software solutions!`;
        }
        // 4. How are you / Identity
        else if (queryLower.includes('how are you') || queryLower.includes('how do you do') || queryLower.includes('how is it going')) {
            fallbackReply = `I am doing great and ready to help! 🚀 How can **Kigali BF Tech Group** support your business vision today?`;
        }
        else if (queryLower.includes('who are you') || queryLower.includes('what is your name') || queryLower.includes('your name')) {
            fallbackReply = `I am **Inara**, the official AI Technical Assistant for **Kigali BF Tech Group** (established in 2024 in Kigali, Rwanda). I help visitors explore our software platforms, tech stack, and portfolio!`;
        }
        // 5. Affirmations / Small Talk
        else if (queryLower.match(/^(ok|okay|cool|great|awesome|perfect|sounds good|alright|nice)/i)) {
            fallbackReply = `Awesome! 👍 Feel free to ask anything about our services, tech stack, or past projects whenever you are ready!`;
        }
        else if (queryLower.includes('bye') || queryLower.includes('goodbye') || queryLower.includes('see you')) {
            fallbackReply = `Goodbye and have a wonderful day! 👋 Reach out to us anytime at **info@invexix.com** or **+250 789 321 535**.`;
        }
        // 6. Portfolio & Past Projects
        else if (queryLower.includes('experience') || queryLower.includes('portfolio') || queryLower.includes('built') || queryLower.includes('track record') || queryLower.includes('past work') || queryLower.includes('hotel') || queryLower.includes('rental') || queryLower.includes('invexis') || queryLower.includes('invexix')) {
            fallbackReply = `Since **2024**, **Kigali BF Tech Group** has engineered major software platforms across East Africa:\n\n` +
                `- 🏢 **Invexis (Invexix)**: Flagship ERP & multi-branch business management system live at [invexix.com](https://invexix.com) with iOS/Android scanner apps.\n` +
                `- 🚗 **Car Rental Platform**: Enterprise booking platform live at [rental.dutumegroup.com](https://rental.dutumegroup.com).\n` +
                `- 🏨 **Hotels & Hospitality**: Websites & reservation engines for Kivu Breeze Hotel, Five Paradise Hotel, Clement Motel, Twiga Hotel, Saint Nolan Hotel, Musanze River Motel & in-hotel ordering system for Kigufi Resort.\n` +
                `- 🛍️ **E-Commerce**: Custom exchange store built for Badils Exchange Company.\n` +
                `- 🌐 **Corporate Portals**: [dutumegroup.com](https://dutumegroup.com), [bidecgroup.net](https://bidecgroup.net), [lominous.org](https://lominous.org).\n\n` +
                `Would you like to discuss a custom system for your business?`;
        }
        // 7. Core Services
        else if (queryLower.includes('service') || queryLower.includes('what do you do') || queryLower.includes('offer')) {
            fallbackReply = `At **Kigali BF Tech Group** (Est. 2024), we deliver:\n\n` +
                `- **Software Engineering**: Web apps, mobile apps, REST APIs & SaaS.\n` +
                `- **Enterprise Solutions**: ERP, CRM, POS, HR & Business Intelligence.\n` +
                `- **System Integrations**: Mobile Money (MTN/Airtel), Payment Gateways & APIs.\n` +
                `- **Cloud & DevOps**: AWS, Docker, Kubernetes & CI/CD.\n` +
                `- **UI/UX & Training**: Design systems & BF Tech Hub Bootcamps.\n\n` +
                `How can we support your technical vision today?`;
        }
        // 8. Business Solutions
        else if (queryLower.includes('solution') || queryLower.includes('erp') || queryLower.includes('crm') || queryLower.includes('pos')) {
            fallbackReply = `Our core business solutions include:\n\n` +
                `- **Invexis ERP & POS** ([invexix.com](https://invexix.com))\n` +
                `- **Car Rental Management System** ([rental.dutumegroup.com](https://rental.dutumegroup.com))\n` +
                `- **Hotel Reservation & Resort Ordering Systems**\n` +
                `- **E-Commerce Engines & Mobile Money Integrations**\n\n` +
                `Would you like me to connect you with our team for a personalized demo?`;
        }
        // 9. Tech Stack
        else if (queryLower.includes('tech') || queryLower.includes('stack') || queryLower.includes('python') || queryLower.includes('react') || queryLower.includes('vue')) {
            fallbackReply = `Our engineering stack:\n\n` +
                `- **Frontend**: React.js, Next.js, Vue.js, TailwindCSS\n` +
                `- **Backend**: Node.js, Python (Django/FastAPI), Symfony (PHP), Java (Spring Boot)\n` +
                `- **Mobile**: React Native, Flutter, iOS & Android Native\n` +
                `- **Cloud & DevOps**: AWS, Kubernetes, Docker, Terraform, Nginx\n\n` +
                `We select the best technology tailored to your performance & security requirements.`;
        }
        // 10. Location & Contact
        else if (queryLower.includes('location') || queryLower.includes('where') || queryLower.includes('office') || queryLower.includes('kigali') || queryLower.includes('contact')) {
            fallbackReply = `📍 **Location & Contacts:**\n\n` +
                `- **Office**: Gisozi, Kigali, Rwanda (Est. 2024)\n` +
                `- **Phone**: +250 789 321 535\n` +
                `- **Email**: info@invexix.com\n` +
                `- **WhatsApp**: [+250 789 321 535](https://wa.me/250789321535)`;
        }
        // 11. Complex Out-of-Scope Technical Inquiry
        else {
            fallbackReply = `I don't have the exact technical details for that specific query, but I am going to forward your request directly to our senior engineering team at **info@invexix.com** for advanced assistance!\n\nCould you please share your **full name**?`;
            needsEscalation = true;
        }

        return NextResponse.json({ reply: fallbackReply, needsEscalation });
    } catch (error) {
        console.error('AI Chatbot Route Error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to process AI chat message.' },
            { status: 500 }
        );
    }
}
