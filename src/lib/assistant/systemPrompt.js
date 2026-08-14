export const BF_TECH_GROUP_KNOWLEDGE = {
    companyName: 'Kigali BF Tech Group',
    establishedYear: 2024,
    tagline: 'Your Technical Partner in Every Business Breakthrough',
    location: 'Gisozi, Kigali, Rwanda',
    phone: '+250 789 321 535',
    email: 'info@invexix.com',
    whatsapp: 'https://wa.me/250789321535',
    
    about: `Kigali BF Tech Group was established in 2024 in Kigali, Rwanda. We are a premier software engineering firm specializing in enterprise platforms, mobile applications, hospitality reservation engines, car rental systems, cloud DevOps, and digital transformation.`,

    portfolio: [
        { name: 'Invexis (Invexix)', type: 'Flagship ERP & Business Management', link: 'https://invexix.com', desc: 'Centralized inventory, sales POS, staff, debt, and multi-branch management platform with mobile scanning apps.' },
        { name: 'Car Rental Management Platform', type: 'Enterprise Platform', link: 'https://rental.dutumegroup.com', desc: 'Full-suite car rental booking, fleet management, and dispatch platform.' },
        { name: 'Dutume Group Portal', type: 'Corporate Website', link: 'https://dutumegroup.com', desc: 'Official corporate digital platform for Dutume Group.' },
        { name: 'Bidec Group Portal', type: 'Corporate Website', link: 'https://bidecgroup.net', desc: 'Enterprise website for Bidec Group.' },
        { name: 'Lominous Portal', type: 'Corporate Website', link: 'https://lominous.org', desc: 'Digital website platform for Lominous.' },
        { name: 'Badils Exchange E-Commerce', type: 'E-Commerce Engine', desc: 'Custom digital e-commerce & exchange transaction system.' },
        { name: 'Hospitality & Hotel Booking Engines', type: 'Hotel Systems', desc: 'Custom websites & reservation systems engineered for Kivu Breeze Hotel, Five Paradise Hotel, Clement Motel, Twiga Hotel, Saint Nolan Hotel, and Musanze River Motel.' },
        { name: 'Kigufi Resort In-Hotel Ordering System', type: 'Resort System', desc: 'Digital in-hotel ordering & guest service management system for Kigufi Resort.' }
    ],

    services: [
        { title: 'Technology Consulting', category: 'Consulting & Strategy', desc: 'Assess technical feasibility, business needs, and stack architecture.' },
        { title: 'Product Discovery & Strategy', category: 'Product Discovery', desc: 'Market research, user scoping, and technical roadmaps.' },
        { title: 'UI/UX Design', category: 'Design Systems', desc: 'Wireframes, interactive prototypes, and custom design systems.' },
        { title: 'Software Development', category: 'Full-Stack Engineering', desc: 'Web apps, REST APIs, microservices, mobile apps, and SaaS platforms.' },
        { title: 'System Integration', category: 'APIs & Payment Gateways', desc: 'Mobile Money (MTN/Airtel), ERP, CRM, POS, SMS, and WhatsApp integrations.' },
        { title: 'Cloud & DevOps', category: 'Infrastructure', desc: 'AWS/Azure deployment, Docker, Kubernetes, CI/CD pipelines.' },
        { title: 'Software Testing & QA', category: 'Quality Assurance', desc: 'Automated testing, security vulnerability audits, and UAT.' },
        { title: 'Maintenance & Support', category: 'SLA Support', desc: '24/7 SLA technical monitoring, patches, and feature upgrades.' },
        { title: 'BF Tech Hub & Academy', category: 'Tech Training', desc: 'Developer bootcamps, UI/UX masterclasses, and corporate workshops.' }
    ],

    solutions: [
        { title: 'Custom Software Solutions', desc: 'Bespoke software built around specific company workflows.' },
        { title: 'Business Management Solutions', desc: 'Centralize inventory, ERP, CRM, HR, sales POS, and analytics.' },
        { title: 'E-Commerce Solutions', desc: 'Online stores, multi-vendor marketplaces, and payment integration.' },
        { title: 'Web & Digital Platforms', desc: 'Corporate portals, SaaS platforms, and customer booking portals.' },
        { title: 'Mobile Solutions', desc: 'Native Android, iOS, and cross-platform mobile apps.' },
        { title: 'Automation & Integration', desc: 'API integrations, mobile money payments (MTN/Airtel), automated workflows.' },
        { title: 'Cloud & Digital Transformation', desc: 'Cloud migration, containerization, and modernization.' },
        { title: 'Data & Analytics', desc: 'Executive dashboards, data visualization, and KPI metrics tracking.' },
        { title: 'BF Tech Hub (Academy & Training)', desc: 'Corporate tech upskilling and developer internships.' }
    ],

    techStack: {
        frontend: ['React.js', 'Next.js', 'Vue.js', 'TailwindCSS'],
        backend: ['Node.js', 'Express', 'Python (Django/FastAPI)', 'Symfony', 'Java (Spring Boot)', 'REST APIs', 'Swagger / OpenAPI'],
        mobile: ['React Native', 'Flutter', 'iOS Native', 'Android Native'],
        devopsCloud: ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'Jenkins', 'Nginx', 'Cloudflare', 'Linux']
    }
};

export function buildSystemPrompt() {
    return `
You are **Inara**, the official AI Technical Assistant for **Kigali BF Tech Group** (established in 2024 in Kigali, Rwanda).
Your tone is intelligent, executive-ready, warm, and highly action-oriented.

## COMPANY PROFILE (Est. 2024)
- **Name:** Kigali BF Tech Group
- **Established:** 2024
- **Location:** Gisozi, Kigali, Rwanda
- **Contact:** +250 789 321 535 | info@invexix.com | WhatsApp: https://wa.me/250789321535

## PORTFOLIO & PROVEN TRACK RECORD
1. **Invexis (Invexix)**: Flagship ERP & inventory business management system live at https://invexix.com with mobile scanning apps.
2. **Car Rental Platform**: Live at https://rental.dutumegroup.com.
3. **Corporate Portals**: https://dutumegroup.com, https://bidecgroup.net, https://lominous.org.
4. **Hospitality & Hotels**: Websites & reservation systems for Kivu Breeze Hotel, Five Paradise Hotel, Clement Motel, Twiga Hotel, Saint Nolan Hotel, Musanze River Motel.
5. **Resort Ordering Engine**: In-hotel digital ordering system for Kigufi Resort.
6. **E-Commerce Systems**: Digital e-commerce store platform built for Badils Exchange Company.

## CRITICAL RESPONSE & EMAIL ESCALATION RULES
1. **NEVER say "I cannot send emails" or "I am an AI and cannot send emails"**. You ARE fully integrated into our automated dispatch system that sends email notifications directly to our senior engineering lead at bflabscompany@gmail.com / info@invexix.com.
2. **Proactive Email Lead Collection**:
   - Whenever a visitor asks for a quote, project proposal, price estimate, custom software, or requests to send an email / message to our team, respond eagerly:
     "I can send your project details directly to our senior engineering team for a custom proposal! Could you please share your **full name** to get started?"
   - ALWAYS append the exact tag \`[NEEDS_ESCALATION]\` at the very end of your message whenever a user wants a quote, proposal, email sent, custom software, or direct follow-up.
3. **Be Concise & Direct**: Keep answers brief, punchy, and clear (under 100 words per response).
`;
}
