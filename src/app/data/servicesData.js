export const SERVICES_DATA = [
    {
        id: '01',
        slug: 'technology-consulting',
        number: '01',
        category: 'Consulting & Strategy',
        title: 'Technology Consulting',
        description: 'Help clients understand what they actually need before development begins.',
        badges: ['Strategic', 'Consulting'],
        iconName: 'LuLightbulb',
        details: 'Comprehensive business and technology assessments to map technical feasibility, strategy, and software architecture before writing code.',
        heroSubtitle: 'Before investing in expensive software builds, align your enterprise goals with proven technical architecture and strategic digital roadmaps.',
        deliverables: [
            'Business & Technology Needs Assessment',
            'Digital Transformation Strategy & Roadmap',
            'Software Architecture & System Design',
            'Tech Stack Selection & Vendor Audits',
            'Technical Feasibility Studies & Proof of Concepts',
            'System Security & Legacy Codebase Audits'
        ],
        steps: [
            { step: '01', title: 'Discovery & Needs Assessment', desc: 'We audit your existing systems, workflows, and business goals to pinpoint actual requirements.' },
            { step: '02', title: 'Technical Feasibility & Architecture', desc: 'Our architects evaluate tech stacks, cloud infrastructure, and data schemas for scalability.' },
            { step: '03', title: 'Strategy & Roadmap Blueprint', desc: 'We create a phased execution plan detailing timeline, budgets, risk mitigation, and tools.' },
            { step: '04', title: 'Handoff & Governance', desc: 'Final deliverables including architecture diagrams, stack recommendations, and ROI projections.' }
        ],
        benefits: [
            'Avoid costly technical debt and misaligned software choices',
            'Accelerate time-to-market with clear technical blueprints',
            'Ensure seamless enterprise security and scalability standards'
        ],
        techStack: ['Enterprise Architecture', 'Cloud Infrastructure', 'Microservices', 'API Strategy', 'Security Auditing']
    },
    {
        id: '02',
        slug: 'product-discovery-strategy',
        number: '02',
        category: 'Product Discovery',
        title: 'Product Discovery & Strategy',
        description: 'Turn an idea into a clear, actionable product plan and roadmap.',
        badges: ['Planning', 'Discovery'],
        iconName: 'LuCompass',
        details: 'In-depth market research, user analysis, MVP scoping, and technical specification definitions that turn raw concepts into launch-ready product plans.',
        heroSubtitle: 'Transform abstract digital ideas into structured, user-tested product specifications ready for agile development teams.',
        deliverables: [
            'Requirements Gathering & Stakeholder Alignment',
            'User Research & Target Audience Personas',
            'Product Strategy & Minimum Viable Product (MVP) Scope',
            'Feature Matrix & Functional Specifications',
            'Interactive Product Roadmap & Sprint Backlog'
        ],
        steps: [
            { step: '01', title: 'User & Market Research', desc: 'Analyzing target market needs, user behavior, competitor landscape, and pain points.' },
            { step: '02', title: 'MVP Scope & Feature Matrix', desc: 'Prioritizing core high-impact features for initial launch to maximize market feedback.' },
            { step: '03', title: 'Technical Specification', desc: 'Writing exact user stories, acceptance criteria, and system requirements.' },
            { step: '04', title: 'Roadmap & Sprint Execution Plan', desc: 'Delivering a timeline and backlog ready for engineering execution.' }
        ],
        benefits: [
            'Validate product market fit before heavy development spend',
            'Clear developer-ready feature specifications',
            'Faster time to initial MVP launch'
        ],
        techStack: ['Figma', 'Jira / Linear', 'User Personas', 'MVP Frameworks', 'Agile Backlogs']
    },
    {
        id: '03',
        slug: 'ui-ux-design',
        number: '03',
        category: 'UI/UX Design',
        title: 'UI/UX Design',
        description: 'Transform requirements into intuitive, engaging digital experiences.',
        badges: ['Creative', 'UI/UX'],
        iconName: 'LuPalette',
        details: 'High-fidelity UI design, component systems, user journeys, wireframes, and interactive prototypes built for maximum engagement and accessibility.',
        heroSubtitle: 'Craft human-centric digital interfaces that convert visitors into loyal users with stunning visual aesthetics and intuitive navigation.',
        deliverables: [
            'User Flow Architecture & Wireframing',
            'Interactive High-Fidelity Prototypes',
            'Custom UI Design & Component Design Systems',
            'Responsive Layouts for Mobile, Tablet & Desktop',
            'Usability Testing & Conversion Rate Optimization'
        ],
        steps: [
            { step: '01', title: 'Wireframing & UX Flow', desc: 'Mapping user journeys and low-fidelity structural skeletons for fast layout validation.' },
            { step: '02', title: 'Visual UI Design', desc: 'Applying modern typography, color palettes, micro-interactions, and glassmorphism styling.' },
            { step: '03', title: 'Design System & Components', desc: 'Building reusable UI kits and style guides for consistent brand scaling.' },
            { step: '04', title: 'Interactive Prototyping & Handoff', desc: 'Delivering click-through prototypes and pixel-perfect design assets for developers.' }
        ],
        benefits: [
            'Increased user retention and lower bounce rates',
            'Consistent visual identity across web and mobile platforms',
            'Seamless developer-designer handoff workflow'
        ],
        techStack: ['Figma', 'Framer', 'Design Systems', 'TailwindCSS / CSS3', 'Usability Testing']
    },
    {
        id: '04',
        slug: 'software-development',
        number: '04',
        category: 'Software Development',
        title: 'Software Development',
        description: 'Full-stack Web, Mobile, Backend, and Frontend engineering built for scale.',
        badges: ['Featured', 'Core Service'],
        iconName: 'LuCode',
        details: 'End-to-end custom software development ranging from corporate portals and SaaS platforms to REST APIs, admin dashboards, and native mobile apps.',
        heroSubtitle: 'High-performance, secure, and maintainable web and mobile applications engineered with modern enterprise frameworks.',
        deliverables: [
            'Web Development: Corporate Websites, SaaS Platforms & Portals',
            'Backend Engineering: REST APIs, Microservices & Databases',
            'Frontend Engineering: Responsive Dashboards & Web Apps',
            'Mobile App Dev: Native Android, iOS & React Native Solutions',
            'Custom CMS & Admin Control Dashboards'
        ],
        steps: [
            { step: '01', title: 'Sprint Architecture & Setup', desc: 'Setting up repository environments, CI/CD, database models, and API endpoints.' },
            { step: '02', title: 'Agile Frontend & Backend Build', desc: 'Writing scalable TypeScript/JavaScript code, backend logic, and responsive UI components.' },
            { step: '03', title: 'Code Audits & Integration', desc: 'Continuous automated testing, code reviews, and API connectivity.' },
            { step: '04', title: 'Deployment & Production Launch', desc: 'Deploying high-speed production environments with zero downtime.' }
        ],
        benefits: [
            'Blazing fast performance & SEO optimization',
            'Robust security protocols & encrypted database architecture',
            'Scalable codebase ready for high volume enterprise traffic'
        ],
        techStack: ['Next.js / React', 'Node.js / Express', 'Python / Django', 'PostgreSQL / MongoDB', 'React Native / Flutter']
    },
    {
        id: '05',
        slug: 'system-integration',
        number: '05',
        category: 'System Integration',
        title: 'System Integration',
        description: 'Help different systems, APIs, and third-party tools communicate seamlessly.',
        badges: ['Integration', 'API & Money'],
        iconName: 'LuCpu',
        details: 'Bridge existing enterprise software with payment gateways, mobile money, ERP/CRM systems, messaging channels, and custom external APIs.',
        heroSubtitle: 'Unify your software ecosystem. We connect isolated databases, mobile money providers, ERP systems, and third-party tools.',
        deliverables: [
            'Payment Gateway & Mobile Money Integration (MTN Mobile Money, Airtel Money, Visa/Mastercard)',
            'ERP & CRM Platform Connections (Salesforce, Odoo, SAP)',
            'Custom REST & GraphQL Webhook API Pipelines',
            'Automated SMS, Email & WhatsApp Notification Channels',
            'Data Synchronization & Real-time Webhooks'
        ],
        steps: [
            { step: '01', title: 'API Audit & Security Analysis', desc: 'Reviewing API documentation, authentication keys, and protocol formats.' },
            { step: '02', title: 'Middleware & Middleware Engine', desc: 'Building custom adapter layers and webhooks for data translation.' },
            { step: '03', title: 'Sandbox & Live Environment Testing', desc: 'Simulating transaction flows, payment callbacks, and failure recovery.' },
            { step: '04', title: 'Production Sync & Monitoring', desc: 'Deploying live webhooks with real-time error logging and monitoring.' }
        ],
        benefits: [
            'Automate manual data entry across enterprise tools',
            'Enable instant Mobile Money and card payments for African & global clients',
            'High uptime and automated payload retry mechanisms'
        ],
        techStack: ['REST APIs', 'GraphQL', 'Mobile Money SDKs', 'Webhooks', 'OAuth2 / JWT', 'Zapier / Custom Middleware']
    },
    {
        id: '06',
        slug: 'cloud-devops',
        number: '06',
        category: 'Cloud & DevOps',
        title: 'Cloud & DevOps',
        description: 'Take software from "it works on my computer" straight to production.',
        badges: ['Infrastructure', 'Cloud'],
        iconName: 'LuCloud',
        details: 'Cloud architecture design, containerized deployments, automated CI/CD pipelines, server configuration, and high-availability database scaling.',
        heroSubtitle: 'Reliable, automated, and secure cloud infrastructure designed for maximum server uptime and instant automated deployments.',
        deliverables: [
            'AWS, Azure & Google Cloud Infrastructure Provisioning',
            'Dockerization & Microservice Containerization',
            'CI/CD Automated Deployment Pipelines (GitHub Actions, GitLab CI)',
            'Database Replication, Automated Backups & Disaster Recovery',
            'Server Security, SSL & DDoS Protection Monitoring'
        ],
        steps: [
            { step: '01', title: 'Cloud Infrastructure Assessment', desc: 'Evaluating server load requirements, bandwidth, and security protocols.' },
            { step: '02', title: 'Containerization & Pipeline Setup', desc: 'Creating Docker images and configuring automated CI/CD build actions.' },
            { step: '03', title: 'Server Configuration & Hardening', desc: 'Setting up SSL, firewalls, environment variables, and auto-scaling rules.' },
            { step: '04', title: 'Live Health & Uptime Monitoring', desc: 'Configuring real-time alerts, CPU/Memory telemetry, and database snapshots.' }
        ],
        benefits: [
            '99.9% uptime for business critical platforms',
            'Automated deployments on every git code push',
            'Cost-optimized cloud resource utilization'
        ],
        techStack: ['AWS', 'Docker', 'Kubernetes', 'Nginx', 'GitHub Actions', 'PostgreSQL / Redis']
    },
    {
        id: '07',
        slug: 'software-testing-qa',
        number: '07',
        category: 'QA & Testing',
        title: 'Software Testing & QA',
        description: 'Don\'t just build software — make sure it works reliably under any workload.',
        badges: ['Quality', 'QA & Testing'],
        iconName: 'FiCheckCircle',
        details: 'Rigorous automated and manual testing, API audits, security vulnerability checks, performance load tests, and user acceptance testing (UAT).',
        heroSubtitle: 'Deliver bulletproof digital products. We eliminate bugs, security vulnerabilities, and performance bottlenecks before your users encounter them.',
        deliverables: [
            'Functional Manual & Automated Test Suites',
            'API Performance, Stress & Load Testing',
            'Security Penetration & Vulnerability Audits',
            'Cross-Browser & Multi-Device Compatibility Verification',
            'User Acceptance Testing (UAT) & Bug Remediation'
        ],
        steps: [
            { step: '01', title: 'Test Plan & Case Definition', desc: 'Writing comprehensive test scenarios covering user flows and edge cases.' },
            { step: '02', title: 'Automated Scripting & Execution', desc: 'Running Cypress/Playwright automated scripts across browsers.' },
            { step: '03', title: 'Load & Vulnerability Audit', desc: 'Simulating concurrent users and scanning for security weaknesses.' },
            { step: '04', title: 'Bug Report & Quality Sign-Off', desc: 'Providing clear bug reports to engineers until zero critical defects remain.' }
        ],
        benefits: [
            'Protect brand reputation from public software bugs',
            'Ensure compliance with data security standards',
            'Smooth user experience across all screen sizes'
        ],
        techStack: ['Cypress', 'Playwright', 'Jest', 'Postman', 'JMeter', 'OWASP Security']
    },
    {
        id: '08',
        slug: 'maintenance-support',
        number: '08',
        category: 'Maintenance & Support',
        title: 'Maintenance & Support',
        description: 'Software delivery shouldn\'t be the end of the relationship — we stay with you.',
        badges: ['24/7 Support', 'Maintenance'],
        iconName: 'LuLifeBuoy',
        details: 'Long-term SLA technical support, bug fixing, security updates, continuous feature improvements, and infrastructure uptime monitoring.',
        heroSubtitle: 'Keep your digital applications fast, secure, and compatible with evolving operating systems and security standards.',
        deliverables: [
            '24/7 SLA Technical Support & Emergency Response',
            'Routine Bug Fixing & Framework Version Upgrades',
            'Database Optimization & Storage Cleanup',
            'Continuous Security Patching & SSL Renewal',
            'Ongoing Feature Enhancements & Performance Audits'
        ],
        steps: [
            { step: '01', title: 'System Onboarding & Audit', desc: 'Analyzing existing codebases, server logs, and third-party dependencies.' },
            { step: '02', title: 'SLA Support Setup', desc: 'Establishing dedicated communication channels (WhatsApp, Slack, Helpdesk).' },
            { step: '03', title: 'Continuous Monitoring & Maintenance', desc: 'Executing weekly backups, security patches, and server health checks.' },
            { step: '04', title: 'Monthly Reports & Improvements', desc: 'Delivering regular maintenance logs and recommending feature updates.' }
        ],
        benefits: [
            'Peace of mind with guaranteed response time SLAs',
            'Protection against emerging web vulnerabilities',
            'Proactive maintenance prevents emergency downtime'
        ],
        techStack: ['24/7 SLA', 'Uptime Monitoring', 'Security Patching', 'Version Upgrades', 'Helpdesk Support']
    },
    {
        id: '09',
        slug: 'bf-tech-hub',
        number: '09',
        category: 'Tech Training & Hub',
        title: 'BF Tech Hub & Academy',
        description: 'Empowering talents, developers, and corporate teams with practical software development, UI/UX design, cloud, and digital skills.',
        badges: ['Academy', 'Tech Hub'],
        iconName: 'LuAward',
        details: 'Practical technology training programs, developer bootcamps, UI/UX masterclasses, and corporate upskilling in a collaborative tech hub ecosystem.',
        heroSubtitle: 'Comprehensive tech academy and incubator empowering developers, designers, and organizations with cutting-edge software and design skills.',
        deliverables: [
            'Software Development Bootcamps (Full-Stack & Mobile)',
            'UI/UX Design & Prototyping Masterclasses',
            'Cloud Architecture & DevOps Workshops',
            'Corporate Digital Transformation Upskilling',
            'Developer Internships & Mentorship Programs',
            'Co-working Tech Hub Space & Community Events'
        ],
        steps: [
            { step: '01', title: 'Skill Assessment & Track Enrollment', desc: 'Evaluating individual or team baseline technical skills to select the optimal training track.' },
            { step: '02', title: 'Intensive Bootcamps & Hands-on Workshops', desc: 'Practical, project-based training led by active Kigali BF Tech Group senior engineers.' },
            { step: '03', title: 'Real-World Client Project Execution', desc: 'Trainees build real production-grade applications under direct mentorship.' },
            { step: '04', title: 'Graduation, Certification & Placement', desc: 'Issuing accredited certifications and placing top graduates in tech engineering roles.' }
        ],
        benefits: [
            'Hands-on practical projects built for real industry requirements',
            'Direct mentorship from senior Kigali BF Tech Group software engineers',
            'Direct recruitment pipeline to active client software projects'
        ],
        techStack: ['React / Next.js', 'Framer & Figma', 'Node.js & Python', 'Cloud & DevOps', 'Git & GitHub']
    }
];
