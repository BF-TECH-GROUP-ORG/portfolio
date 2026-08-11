'use client';

import { useState, memo, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiArrowRight, FiArrowUpRight, FiCheckCircle, FiX, FiInfo, FiSliders } from 'react-icons/fi';
import {
    LuLightbulb,
    LuCompass,
    LuPalette,
    LuCode,
    LuCpu,
    LuCloud,
    LuLifeBuoy,
    LuAward
} from 'react-icons/lu';

const CATEGORIES = [
    'All',
    'Consulting & Strategy',
    'Product Discovery',
    'UI/UX Design',
    'Software Development',
    'System Integration',
    'Cloud & DevOps',
    'QA & Testing',
    'Maintenance & Support',
    'Tech Training & Hub'
];

const SERVICES_DATA = [
    {
        id: '01',
        slug: 'technology-consulting',
        number: '01',
        category: 'Consulting & Strategy',
        title: 'Technology Consulting',
        description: 'Help clients understand what they actually need before development begins.',
        badges: ['Strategic', 'Consulting'],
        icon: <LuLightbulb className="text-3xl text-(--navbar-text)" />,
        details: 'Comprehensive business and technology assessments to map technical feasibility, strategy, and architecture before writing code.',
        features: [
            'Business & Technology Assessment',
            'Digital Transformation Consulting',
            'Software Architecture Consulting',
            'Technology Selection & Stack Planning',
            'Technical Feasibility Studies',
            'IT Strategy & System Audits'
        ]
    },
    {
        id: '02',
        slug: 'product-discovery-strategy',
        number: '02',
        category: 'Product Discovery',
        title: 'Product Discovery & Strategy',
        description: 'Turn an idea into a clear, actionable product plan and roadmap.',
        badges: ['Planning', 'Discovery'],
        icon: <LuCompass className="text-3xl text-(--navbar-text)" />,
        details: 'In-depth market research, user analysis, MVP scoping, and technical specification definitions that turn raw concepts into launch-ready product plans.',
        features: [
            'Requirements Gathering & Business Analysis',
            'User Research & Persona Scoping',
            'Product Strategy & MVP Scope Definition',
            'Feature Definition & Technical Specs',
            'Interactive Project Roadmap Creation'
        ]
    },
    {
        id: '03',
        slug: 'ui-ux-design',
        number: '03',
        category: 'UI/UX Design',
        title: 'UI/UX Design',
        description: 'Transform requirements into intuitive, engaging digital experiences.',
        badges: ['Creative', 'UI/UX'],
        icon: <LuPalette className="text-3xl text-(--navbar-text)" />,
        details: 'High-fidelity UI design, component systems, user journeys, wireframes, and interactive prototypes built for maximum engagement and accessibility.',
        features: [
            'User Flow Architecture & Wireframing',
            'Interactive High-Fidelity Prototypes',
            'UI Design & Custom Design Systems',
            'Responsive Mobile & Web Layouts',
            'Usability Testing & UX Optimization'
        ]
    },
    {
        id: '04',
        slug: 'software-development',
        number: '04',
        category: 'Software Development',
        title: 'Software Development',
        description: 'Full-stack Web, Mobile, Backend, and Frontend engineering built for scale.',
        badges: ['Featured', 'Core Service'],
        icon: <LuCode className="text-3xl text-(--navbar-text)" />,
        details: 'End-to-end custom software development ranging from corporate portals and SaaS platforms to REST APIs, admin dashboards, and native mobile apps.',
        features: [
            'Web Dev: Corporate Websites, SaaS & Portals',
            'Backend: REST APIs, Microservices & Databases',
            'Frontend: Responsive Dashboards & Applications',
            'Mobile: Native Android, iOS & Cross-Platform'
        ]
    },
    {
        id: '05',
        slug: 'system-integration',
        number: '05',
        category: 'System Integration',
        title: 'System Integration',
        description: 'Help different systems, APIs, and third-party tools communicate seamlessly.',
        badges: ['Integration', 'API & Money'],
        icon: <LuCpu className="text-3xl text-(--navbar-text)" />,
        details: 'Bridge existing enterprise software with payment gateways, mobile money, ERP/CRM systems, messaging channels, and custom external APIs.',
        features: [
            'Payment Gateways & Mobile Money Integration',
            'ERP & CRM Platform Connections',
            'Custom REST APIs & Webhook Setup',
            'SMS, Email & WhatsApp Automation'
        ]
    },
    {
        id: '06',
        slug: 'cloud-devops',
        number: '06',
        category: 'Cloud & DevOps',
        title: 'Cloud & DevOps',
        description: 'Take software from "it works on my computer" straight to production.',
        badges: ['Infrastructure', 'Cloud'],
        icon: <LuCloud className="text-3xl text-(--navbar-text)" />,
        details: 'Cloud architecture design, containerized deployments, automated CI/CD pipelines, server configuration, and high-availability database scaling.',
        features: [
            'AWS, Azure & Cloud Hosting Deployment',
            'Dockerization & Microservice Containers',
            'CI/CD Automated Integration Pipelines',
            'Database Scaling, Backups & Security'
        ]
    },
    {
        id: '07',
        slug: 'software-testing-qa',
        number: '07',
        category: 'QA & Testing',
        title: 'Software Testing & QA',
        description: 'Don\'t just build software — make sure it works reliably under any workload.',
        badges: ['Quality', 'QA & Testing'],
        icon: <FiCheckCircle className="text-3xl text-(--navbar-text)" />,
        details: 'Rigorous automated and manual testing, API audits, security vulnerability checks, performance load tests, and user acceptance testing (UAT).',
        features: [
            'Functional & Automated Testing',
            'API Integration & Performance Load Tests',
            'Security Audits & Penetration Testing',
            'User Acceptance Testing (UAT) & Bug Fixing'
        ]
    },
    {
        id: '08',
        slug: 'maintenance-support',
        number: '08',
        category: 'Maintenance & Support',
        title: 'Maintenance & Support',
        description: 'Software delivery shouldn\'t be the end of the relationship — we stay with you.',
        badges: ['24/7 Support', 'Maintenance'],
        icon: <LuLifeBuoy className="text-3xl text-(--navbar-text)" />,
        details: 'Long-term SLA technical support, bug fixing, security updates, continuous feature improvements, and infrastructure uptime monitoring.',
        features: [
            '24/7 SLA Technical Support & Monitoring',
            'Rapid Bug Fixes & Security Patches',
            'Performance & Database Optimization',
            'Continuous Feature Improvements & Upgrades'
        ]
    },
    {
        id: '09',
        slug: 'bf-tech-hub',
        number: '09',
        category: 'Tech Training & Hub',
        title: 'BF Tech Hub & Academy',
        description: 'Empowering talents, developers, and corporate teams with practical software development, UI/UX design, cloud, and digital skills.',
        badges: ['Academy', 'Tech Hub'],
        icon: <LuAward className="text-3xl text-(--navbar-text)" />,
        details: 'Practical technology training programs, developer bootcamps, UI/UX masterclasses, and corporate upskilling in a collaborative tech hub ecosystem.',
        features: [
            'Software Development Bootcamps (Full-Stack & Mobile)',
            'UI/UX Design & Prototyping Masterclasses',
            'Cloud Architecture & DevOps Workshops',
            'Corporate Digital Transformation Upskilling',
            'Developer Internships & Mentorship Programs',
            'Co-working Tech Hub Space & Community Events'
        ]
    }
];

const Services = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [activeServiceModal, setActiveServiceModal] = useState(null);

    // Filter services based on category and search query
    const filteredServices = useMemo(() => {
        return SERVICES_DATA.filter((service) => {
            const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
            const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                service.number.includes(searchTerm);
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchTerm]);

    return (
        <section className="py-20 bg-background text-(--navbar-text) relative overflow-hidden transition-colors duration-300">
            {/* Ambient Background Glow Bubbles */}
            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none transition-opacity duration-300" style={{ background: 'radial-gradient(circle, rgba(185, 175, 122, 0.15) 0%, transparent 70%)' }}></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full pointer-events-none transition-opacity duration-300" style={{ background: 'radial-gradient(circle, rgba(217, 119, 6, 0.15) 0%, transparent 70%)' }}></div>

            <div className="max-w-350 mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                {/* Header Section: 2-Column Split (Left: Text & Search | Right: Services Image) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14">
                    {/* Left Column (Text & Search) */}
                    <div className="lg:col-span-7 text-left">
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#B9AF7A] bg-[#B9AF7A]/10 border border-[#B9AF7A]/20 uppercase mb-4">
                            Capabilities & Offerings
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                            Our <span className="text-[#B9AF7A]">Technical Services</span>
                        </h2>
                        <p className="text-sm sm:text-base text-(--navbar-text) opacity-70 leading-relaxed font-medium mb-8 max-w-2xl">
                            From strategic technology consulting to enterprise software development, system integrations, cloud DevOps, and digital academy training.
                        </p>

                        {/* Full-width Search Bar with Card Border */}
                        <div className="w-full max-w-xl bg-(--navbar-bg) border border-[#B9AF7A]/60 rounded-2xl sm:rounded-[28px] px-4 sm:px-5 py-3 shadow-lg flex items-center justify-between gap-3 transition-all duration-300 group">
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                                <div className="text-(--navbar-text) opacity-50 flex items-center justify-center shrink-0">
                                    <FiSearch className="w-5 h-5" />
                                </div>
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Search services (e.g. Consulting, UI/UX, Cloud, Tech Hub)..."
                                    className="w-full bg-transparent border-none text-sm text-(--navbar-text) placeholder-(--navbar-text) placeholder-opacity-50 focus:outline-none py-1 font-medium min-w-0"
                                />
                            </div>

                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm('')}
                                    className="text-xs text-(--navbar-text) opacity-60 hover:opacity-100 bg-white/10 px-3 py-1 rounded-full cursor-pointer shrink-0"
                                >
                                    Clear
                                </button>
                            )}

                            {/* Category Filter Dropdown */}
                            <div className="flex items-center gap-2 text-xs font-bold text-[#B9AF7A] bg-[#B9AF7A]/10 border border-[#B9AF7A]/20 px-3 py-1.5 rounded-full shrink-0">
                                <FiSliders className="w-3.5 h-3.5 text-[#B9AF7A]" />
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    aria-label="Filter Services by Category"
                                    className="bg-transparent text-[#B9AF7A] font-bold focus:outline-none cursor-pointer text-xs"
                                >
                                    {CATEGORIES.map((cat) => (
                                        <option key={cat} value={cat} className="bg-slate-900 text-white font-medium">
                                            {cat}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Hero Image with Ambient Radial Glow Bubbling Behind It */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end relative group">
                        {/* Ambient Radial Glow Bubbling Behind the Image */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-tr from-[#B9AF7A]/30 via-amber-500/20 to-transparent rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-700 opacity-85 z-0" />

                        {/* Clean Floating Illustration (No Boxed Container) */}
                        <Image
                            src="/images/services_imagess.png"
                            alt="Kigali BF Tech Group Services Illustration"
                            width={600}
                            height={450}
                            className="w-full max-w-md lg:max-w-full h-auto object-contain relative z-10 drop-shadow-2xl group-hover:scale-103 transition-transform duration-500"
                            priority
                        />
                    </div>
                </div>

                {/* Full Screen Edge-to-Edge Category Navigation Bar Strip */}
                <div className="w-screen relative left-1/2 right-1/2 border-white/15 -ml-[50vw] -mr-[50vw] bg-(--navbar-bg) border-y  py-4 mb-14 shadow-xl backdrop-blur-xl z-20">
                    <div className="max-w-350 w-full mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-start overflow-x-auto no-scrollbar">
                        <div className="flex items-center gap-2.5 sm:gap-3 whitespace-nowrap min-w-max">
                            {CATEGORIES.map((category) => {
                                const isActive = selectedCategory === category;
                                return (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer whitespace-nowrap ${
                                            isActive
                                                ? 'bg-gradient-to-r from-[#B9AF7A] to-amber-500 text-slate-950 font-extrabold shadow-lg shadow-[#B9AF7A]/25 scale-105'
                                                : 'bg-white/5 hover:bg-white/10 border border-white/10 text-(--navbar-text) opacity-70 hover:opacity-100'
                                        }`}
                                    >
                                        {category}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Services Cards Grid - 3 Cards Per Row */}
                {filteredServices.length > 0 ? (
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                    >
                        {filteredServices.map((service) => (
                            <Link
                                key={service.id}
                                href={`/OurServices/${service.slug}`}
                                className="no-underline text-inherit block h-full"
                            >
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-(--navbar-bg) border border-(--navbar-border) hover:border-white/40 rounded-[28px] p-7 sm:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden min-h-80 h-full"
                                >
                                    <div>
                                        {/* Top Circle Icon Container */}
                                        <div className="w-12 h-12 rounded-full border border-(--navbar-border) bg-white/5 flex items-center justify-center text-(--navbar-text) transition-colors">
                                            {service.icon}
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-extrabold text-(--navbar-text) mt-6 mb-3 leading-snug">
                                            {service.title}
                                        </h3>

                                        {/* Description with bottom divider */}
                                        <p className="text-sm text-(--navbar-text) opacity-65 leading-relaxed font-medium pb-6 border-b border-(--navbar-border)/60">
                                            {service.description}
                                        </p>
                                    </div>

                                    {/* Bottom Row: Action Label + Solid White Circle Arrow Button */}
                                    <div className="flex items-center justify-between pt-6 mt-auto">
                                        <span className="font-extrabold text-xs text-(--navbar-text) opacity-80 group-hover:opacity-100 transition-colors uppercase tracking-wider">
                                            Learn More
                                        </span>

                                        <div className="w-10 h-10 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-slate-200">
                                            <FiArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </motion.div>
                ) : (
                    <div className="text-center py-16 bg-(--navbar-bg) rounded-3xl border border-(--navbar-border)">
                        <FiInfo className="w-10 h-10 text-[#B9AF7A] mx-auto mb-3 opacity-80" />
                        <h4 className="text-lg font-bold mb-1">No services found</h4>
                        <p className="text-xs text-(--navbar-text) opacity-60">Try searching for a different keyword or select another category filter.</p>
                    </div>
                )}
            </div>

            {/* Service Details Modal Popup */}
            <AnimatePresence>
                {activeServiceModal && (
                    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-(--navbar-bg) border border-(--navbar-border) rounded-3xl p-8 max-w-lg w-full relative shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setActiveServiceModal(null)}
                                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-[#B9AF7A] text-(--navbar-text) hover:text-slate-950 flex items-center justify-center transition-all cursor-pointer z-10"
                                aria-label="Close modal"
                            >
                                <FiX className="w-5 h-5" />
                            </button>

                            {/* Header */}
                            <div className="flex items-center gap-4 mb-4 pr-8">
                                <div className="w-12 h-12 rounded-2xl bg-[#B9AF7A]/10 border border-[#B9AF7A]/30 flex items-center justify-center shrink-0">
                                    {activeServiceModal.icon}
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[#B9AF7A] font-extrabold text-xs font-mono">{activeServiceModal.number} —</span>
                                        <span className="text-xs font-bold text-[#B9AF7A] uppercase tracking-wider block">
                                            {activeServiceModal.category}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-extrabold text-(--navbar-text)">
                                        {activeServiceModal.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Details Text */}
                            <p className="text-sm text-(--navbar-text) opacity-80 leading-relaxed mb-6">
                                {activeServiceModal.details}
                            </p>

                            {/* Features / Services Offered List */}
                            <div className="mb-8">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-(--navbar-text) opacity-70 mb-3">Services & Deliverables Included:</h4>
                                <div className="flex flex-col gap-2.5">
                                    {activeServiceModal.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 text-xs text-(--navbar-text)">
                                            <FiCheckCircle className="w-4 h-4 text-[#B9AF7A] shrink-0" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center justify-between gap-4 pt-4 border-t border-(--navbar-border)">
                                <button
                                    onClick={() => setActiveServiceModal(null)}
                                    className="px-5 py-2.5 rounded-full text-xs font-semibold border border-(--navbar-border) hover:bg-white/10 transition-colors cursor-pointer"
                                >
                                    Close
                                </button>
                                <Link
                                    href={`/ContactUs?type=Service&item=${encodeURIComponent(activeServiceModal.title)}`}
                                    className="bg-gradient-to-r from-[#B9AF7A] to-amber-500 hover:from-amber-400 hover:to-[#B9AF7A] text-slate-950 font-bold px-6 py-2.5 rounded-full text-xs flex items-center gap-2 shadow-lg transition-all no-underline"
                                >
                                    <span>Inquire For This Service</span>
                                    <FiArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default memo(Services);

