'use client';

import { useState, memo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhoneCall, FiMail, FiArrowRight, FiCheckCircle, FiBriefcase, FiLayers, FiHelpCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const CONTACT_CARDS = [
    {
        id: 'location',
        icon: <FiMapPin className="w-5 h-5 text-gray-900 [[data-theme='dark']_&]:text-white group-hover:text-[#B9AF7A] transition-colors" />,
        title: 'Location',
        details: 'Gisozi, Kigali, Rwanda',
        actionLabel: 'Get Directions',
        actionUrl: 'https://www.google.com/maps/dir/?api=1&destination=-1.914773,30.064406',
        target: '_blank'
    },
    {
        id: 'phone',
        icon: <FiPhoneCall className="w-5 h-5 text-gray-900 [[data-theme='dark']_&]:text-white group-hover:text-[#B9AF7A] transition-colors" />,
        title: 'Phone',
        details: '+250 789 321 535',
        actionLabel: 'Call Now',
        actionUrl: 'tel:+250789321535',
        target: '_self'
    },
    {
        id: 'email',
        icon: <FiMail className="w-5 h-5 text-gray-900 [[data-theme='dark']_&]:text-white group-hover:text-[#B9AF7A] transition-colors" />,
        title: 'Email',
        details: 'info@invexix.com',
        actionLabel: 'Send Email',
        actionUrl: 'mailto:info@invexix.com',
        target: '_self'
    }
];

const SERVICE_OPTIONS = [
    'Technology Consulting',
    'Product Discovery & Strategy',
    'UI/UX Design',
    'Software Development',
    'System Integration',
    'Cloud & DevOps',
    'Software Testing & QA',
    'Maintenance & Support',
    'BF Tech Hub & Academy'
];

const SOLUTION_OPTIONS = [
    'Custom Software Solutions',
    'Business Management Solutions',
    'E-Commerce Solutions',
    'Web & Digital Platforms',
    'Mobile Solutions',
    'Automation & Integration',
    'Cloud & Digital Transformation',
    'Data & Analytics',
    'BF Tech Hub (Academy & Training)'
];

const GENERAL_OPTIONS = [
    'General Technical Inquiry',
    'Partnership & Collaboration',
    'Career & Hiring',
    'Other Custom Request'
];

// Intelligent URL Query Parameters Handler
function SearchParamsHandler({ setInquiryType, setFormData }) {
    const searchParams = useSearchParams();

    useEffect(() => {
        if (!searchParams) return;
        const typeParam = searchParams.get('type');
        const itemParam = searchParams.get('item') || searchParams.get('service') || searchParams.get('solution');

        let detectedType = 'Service';
        if (typeParam) {
            const cap = typeParam.charAt(0).toUpperCase() + typeParam.slice(1).toLowerCase();
            if (['Service', 'Solution', 'General'].includes(cap)) {
                detectedType = cap;
            }
        } else if (searchParams.get('solution')) {
            detectedType = 'Solution';
        } else if (searchParams.get('service')) {
            detectedType = 'Service';
        }

        setInquiryType(detectedType);

        if (itemParam) {
            const decodedItem = decodeURIComponent(itemParam);
            const allOpts = [...SERVICE_OPTIONS, ...SOLUTION_OPTIONS, ...GENERAL_OPTIONS];
            const match = allOpts.find(opt => opt.toLowerCase().includes(decodedItem.toLowerCase()));
            if (match) {
                setFormData(prev => ({ ...prev, selectedOption: match }));
            } else {
                setFormData(prev => ({ ...prev, selectedOption: decodedItem }));
            }
        }
    }, [searchParams, setInquiryType, setFormData]);

    return null;
}

const ContactSection = () => {
    const [inquiryType, setInquiryType] = useState('Service'); // 'Service' | 'Solution' | 'General'
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        selectedOption: SERVICE_OPTIONS[0],
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleTypeChange = (type) => {
        setInquiryType(type);
        let defaultOpt = SERVICE_OPTIONS[0];
        if (type === 'Solution') defaultOpt = SOLUTION_OPTIONS[0];
        if (type === 'General') defaultOpt = GENERAL_OPTIONS[0];
        setFormData({ ...formData, selectedOption: defaultOpt });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage('');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, inquiryType })
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Failed to submit request.');
            }

            setSubmitted(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                selectedOption: SERVICE_OPTIONS[0],
                message: ''
            });
            setTimeout(() => setSubmitted(false), 9000);
        } catch (error) {
            console.error('Form submission error:', error);
            setErrorMessage(error.message || 'Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const getCurrentOptions = () => {
        if (inquiryType === 'Solution') return SOLUTION_OPTIONS;
        if (inquiryType === 'General') return GENERAL_OPTIONS;
        return SERVICE_OPTIONS;
    };

    return (
        <section id="contact" className="py-24 bg-background min-h-screen relative overflow-hidden transition-colors duration-300">
            {/* Intelligent URL Search Parameters Reader */}
            <Suspense fallback={null}>
                <SearchParamsHandler setInquiryType={setInquiryType} setFormData={setFormData} />
            </Suspense>

            {/* Main Container - Matches navbar & section width */}
            <div className="max-w-350 w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#B9AF7A] bg-[#B9AF7A]/10 border border-[#B9AF7A]/20 capitalize mb-4">
                        Get In Touch & Order Now
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-black text-gray-900 [[data-theme='dark']_&]:text-white tracking-tight mb-4">
                        Request a Service or <span className="text-[#B9AF7A]">Enterprise Solution</span>
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 [[data-theme='dark']_&]:text-zinc-400 font-medium leading-relaxed">
                        Specify your project scope, choose your required service or solution, and get a tailored proposal from our engineering team.
                    </p>
                </div>

                {/* Top Row: 3 Quick Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
                    {CONTACT_CARDS.map((card) => (
                        <motion.a
                            key={card.id}
                            href={card.actionUrl}
                            target={card.target}
                            rel={card.target === '_blank' ? 'noopener noreferrer' : undefined}
                            whileHover={{ y: -6 }}
                            transition={{ duration: 0.2 }}
                            className="group bg-white [[data-theme='dark']_&]:bg-transparent border-2 border-gray-100 [[data-theme='dark']_&]:border-zinc-800 rounded-[32px] p-8 shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between relative overflow-hidden min-h-[230px] no-underline cursor-pointer"
                        >
                            <div>
                                <div className="w-14 h-14 rounded-full flex items-center justify-center border border-gray-200 [[data-theme='dark']_&]:border-zinc-700 text-gray-900 [[data-theme='dark']_&]:text-white group-hover:scale-110 group-hover:border-[#B9AF7A] transition-all duration-300 mb-6">
                                    {card.icon}
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 [[data-theme='dark']_&]:text-white mb-2 tracking-tight group-hover:text-[#B9AF7A] transition-colors">
                                    {card.title}
                                </h3>

                                <p className="text-sm text-gray-500 [[data-theme='dark']_&]:text-zinc-400 leading-relaxed font-medium">
                                    {card.details}
                                </p>
                            </div>

                            <div className="mt-auto pt-6 border-t border-gray-100 [[data-theme='dark']_&]:border-zinc-800 flex items-center justify-between">
                                <span className="text-sm font-bold text-gray-900 [[data-theme='dark']_&]:text-white group-hover:text-[#B9AF7A] transition-colors">
                                    {card.actionLabel}
                                </span>

                                <div className="w-10 h-10 rounded-full bg-[#B9AF7A] hover:bg-[#a69c67] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-300">
                                    <FiArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Bottom Main Content: Form Left & Interactive Map/WhatsApp Right */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                    
                    {/* Left Column: Clean Streamlined Project Request Form */}
                    <div className="lg:col-span-7 bg-white [[data-theme='dark']_&]:bg-transparent border-2 border-gray-100 [[data-theme='dark']_&]:border-zinc-800 rounded-[32px] p-8 sm:p-10 shadow-lg transition-all duration-500">
                        
                        <div className="mb-8">
                            <h3 className="text-2xl font-extrabold text-gray-900 [[data-theme='dark']_&]:text-white tracking-tight mb-2">
                                Project Request Form
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-500 [[data-theme='dark']_&]:text-zinc-400 font-medium">
                                Fill in your details below to request a service or enterprise solution.
                            </p>
                        </div>

                        {submitted ? (
                            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 [[data-theme='dark']_&]:text-emerald-400 flex items-start gap-4">
                                <FiCheckCircle className="w-6 h-6 shrink-0 text-[#B9AF7A] mt-0.5" />
                                <div>
                                    <h4 className="text-base font-bold text-emerald-600 [[data-theme='dark']_&]:text-emerald-400 mb-1">Request Received Successfully!</h4>
                                    <p className="text-xs sm:text-sm opacity-90 leading-relaxed font-medium">
                                        Thank you! Your request has been dispatched to <strong>info@invexix.com</strong>. Our engineering lead will review your specifications and contact you shortly.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                {errorMessage && (
                                    <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs font-semibold">
                                        {errorMessage}
                                    </div>
                                )}

                                {/* Step 1: Request Category Selector Pills */}
                                <div>
                                    <div className="grid grid-cols-3 gap-2.5 p-1.5 bg-gray-100 [[data-theme='dark']_&]:bg-zinc-900/60 rounded-2xl border border-gray-200 [[data-theme='dark']_&]:border-zinc-800">
                                        <button
                                            type="button"
                                            onClick={() => handleTypeChange('Service')}
                                            className={`py-3 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                                                inquiryType === 'Service'
                                                    ? 'bg-[#B9AF7A] text-slate-950 shadow-md font-black'
                                                    : 'text-gray-600 [[data-theme=\'dark\']_&]:text-zinc-400 hover:text-gray-900 [[data-theme=\'dark\']_&]:hover:text-white'
                                            }`}
                                        >
                                            <FiLayers className="w-4 h-4" />
                                            <span>Services</span>
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => handleTypeChange('Solution')}
                                            className={`py-3 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                                                inquiryType === 'Solution'
                                                    ? 'bg-[#B9AF7A] text-slate-950 shadow-md font-black'
                                                    : 'text-gray-600 [[data-theme=\'dark\']_&]:text-zinc-400 hover:text-gray-900 [[data-theme=\'dark\']_&]:hover:text-white'
                                            }`}
                                        >
                                            <FiBriefcase className="w-4 h-4" />
                                            <span>Solutions</span>
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => handleTypeChange('General')}
                                            className={`py-3 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                                                inquiryType === 'General'
                                                    ? 'bg-[#B9AF7A] text-slate-950 shadow-md font-black'
                                                    : 'text-gray-600 [[data-theme=\'dark\']_&]:text-zinc-400 hover:text-gray-900 [[data-theme=\'dark\']_&]:hover:text-white'
                                            }`}
                                        >
                                            <FiHelpCircle className="w-4 h-4" />
                                            <span>General</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Step 2: Specific Service / Solution Dropdown */}
                                <div>
                                    <select
                                        name="selectedOption"
                                        aria-label="Select Specific Service or Solution"
                                        value={formData.selectedOption}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 [[data-theme='dark']_&]:bg-zinc-900/60 border border-gray-200 [[data-theme='dark']_&]:border-zinc-800 rounded-2xl p-4 text-sm font-semibold text-gray-900 [[data-theme='dark']_&]:text-white focus:outline-none focus:border-[#B9AF7A] focus:ring-1 focus:ring-[#B9AF7A] transition-all cursor-pointer"
                                    >
                                        {getCurrentOptions().map((opt) => (
                                            <option key={opt} value={opt} className="bg-white [[data-theme='dark']_&]:bg-zinc-900 text-gray-900 [[data-theme='dark']_&]:text-white font-medium">
                                                {opt}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Step 3: Contact Info (Full Name & Email Address) */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Full Name *"
                                            className="w-full bg-gray-50 [[data-theme='dark']_&]:bg-zinc-900/50 border border-gray-200 [[data-theme='dark']_&]:border-zinc-800 rounded-2xl p-4 text-sm text-gray-900 [[data-theme='dark']_&]:text-white placeholder:text-gray-400 [[data-theme='dark']_&]:placeholder:text-zinc-500 focus:outline-none focus:border-[#B9AF7A] focus:ring-1 focus:ring-[#B9AF7A] transition-all font-medium"
                                        />
                                    </div>

                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email Address *"
                                            className="w-full bg-gray-50 [[data-theme='dark']_&]:bg-zinc-900/50 border border-gray-200 [[data-theme='dark']_&]:border-zinc-800 rounded-2xl p-4 text-sm text-gray-900 [[data-theme='dark']_&]:text-white placeholder:text-gray-400 [[data-theme='dark']_&]:placeholder:text-zinc-500 focus:outline-none focus:border-[#B9AF7A] focus:ring-1 focus:ring-[#B9AF7A] transition-all font-medium"
                                        />
                                    </div>
                                </div>

                                {/* Step 4: Phone / WhatsApp (Full Width) */}
                                <div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone or WhatsApp Number"
                                        className="w-full bg-gray-50 [[data-theme='dark']_&]:bg-zinc-900/50 border border-gray-200 [[data-theme='dark']_&]:border-zinc-800 rounded-2xl p-4 text-sm text-gray-900 [[data-theme='dark']_&]:text-white placeholder:text-gray-400 [[data-theme='dark']_&]:placeholder:text-zinc-500 focus:outline-none focus:border-[#B9AF7A] focus:ring-1 focus:ring-[#B9AF7A] transition-all font-medium"
                                    />
                                </div>

                                {/* Step 5: Project Details Textarea */}
                                <div>
                                    <textarea
                                        name="message"
                                        rows="5"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Describe your project goals or requirements... *"
                                        className="w-full bg-gray-50 [[data-theme='dark']_&]:bg-zinc-900/50 border border-gray-200 [[data-theme='dark']_&]:border-zinc-800 rounded-2xl p-4 text-sm text-gray-900 [[data-theme='dark']_&]:text-white placeholder:text-gray-400 [[data-theme='dark']_&]:placeholder:text-zinc-500 focus:outline-none focus:border-[#B9AF7A] focus:ring-1 focus:ring-[#B9AF7A] transition-all resize-none font-medium"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#B9AF7A] hover:bg-[#a69c67] text-slate-950 font-black py-4 rounded-2xl text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-xl disabled:opacity-50 cursor-pointer flex items-center justify-center gap-3 tracking-wide capitalize"
                                >
                                    {isSubmitting ? (
                                        <span>Submitting Request...</span>
                                    ) : (
                                        <>
                                            <span>Submit Request</span>
                                            <FiArrowRight className="w-5 h-5" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Right Column: Google Map + Action Buttons */}
                    <div className="lg:col-span-5 flex flex-col justify-between gap-6 h-full">
                        {/* Location Header Info Box */}
                        <div className="bg-white [[data-theme='dark']_&]:bg-transparent border-2 border-gray-100 [[data-theme='dark']_&]:border-zinc-800 rounded-[32px] p-6 shadow-xs">
                            <h4 className="text-lg font-bold text-gray-900 [[data-theme='dark']_&]:text-white mb-2">
                                Head Office & Tech Hub
                            </h4>
                            <p className="text-xs text-gray-500 [[data-theme='dark']_&]:text-zinc-400 leading-relaxed font-medium">
                                Visit our development offices in Gisozi, Kigali or request an on-site technical workshop with our architects.
                            </p>
                        </div>

                        {/* Map View Frame */}
                        <div className="w-full h-[320px] sm:h-[400px] rounded-[32px] overflow-hidden border-2 border-gray-100 [[data-theme='dark']_&]:border-zinc-800 shadow-md bg-gray-100 [[data-theme='dark']_&]:bg-zinc-900/50">
                            <iframe
                                title="Kigali Rwanda Gisozi Map Location"
                                src="https://maps.google.com/maps?q=-1.914773,30.064406&z=15&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                            />
                        </div>

                        {/* Buttons Underneath Map: Get Directions & WhatsApp */}
                        <div className="grid grid-cols-2 gap-4">
                            <a
                                href="https://www.google.com/maps/dir/?api=1&destination=-1.914773,30.064406"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-white [[data-theme='dark']_&]:bg-zinc-900/50 border-2 border-gray-100 [[data-theme='dark']_&]:border-zinc-800 hover:border-[#B9AF7A] text-gray-900 [[data-theme='dark']_&]:text-white font-bold py-4 px-4 sm:px-6 rounded-2xl text-xs sm:text-sm text-center transition-all no-underline flex items-center justify-center shadow-xs"
                            >
                                Get Directions
                            </a>

                            <a
                                href="https://wa.me/250789321535?text=Hello%20Kigali%20BF%20Tech%20Group%20I%20would%20like%20to%20request%20a%20quote"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-4 px-4 sm:px-6 rounded-2xl text-xs sm:text-sm text-center transition-all no-underline flex items-center justify-center gap-2 shadow-md"
                            >
                                <FaWhatsapp className="w-4.5 h-4.5" />
                                WhatsApp
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default memo(ContactSection);
