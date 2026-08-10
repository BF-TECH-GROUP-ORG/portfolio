'use client';

import { useState, memo } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhoneCall, FiMail, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
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

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setSubmitted(false), 5000);
        }, 1000);
    };

    return (
        <section id="contact" className="py-24 bg-background min-h-screen relative overflow-hidden transition-colors duration-300">
            {/* Main Container - Matches navbar & other section width */}
            <div className="max-w-350 w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
                
                {/* Top Row: 3 Contact Cards Styled Exactly Like WhyUs Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {CONTACT_CARDS.map((card) => (
                        <motion.a
                            key={card.id}
                            href={card.actionUrl}
                            target={card.target}
                            rel={card.target === '_blank' ? 'noopener noreferrer' : undefined}
                            whileHover={{ y: -6 }}
                            transition={{ duration: 0.2 }}
                            className="group bg-white [[data-theme='dark']_&]:bg-transparent border-2 border-gray-100 [[data-theme='dark']_&]:border-zinc-800 rounded-[32px] p-8 shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between relative overflow-hidden min-h-[250px] no-underline cursor-pointer"
                        >
                            {/* Card Top: Icon + Title + Info */}
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

                            {/* Card Bottom: Action Label + Brand Khaki Circle Arrow Button */}
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

                {/* Bottom Row: 2 Columns - Left Form & Right Map + Actions */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
                    
                    {/* Left Column: Send A Message Form */}
                    <div className="lg:col-span-6 bg-white [[data-theme='dark']_&]:bg-transparent border-2 border-gray-100 [[data-theme='dark']_&]:border-zinc-800 rounded-[32px] p-8 sm:p-10 shadow-xs transition-all duration-500 flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl font-extrabold text-gray-900 [[data-theme='dark']_&]:text-white mb-6 tracking-tight">
                                Send A Message
                            </h2>

                            {submitted ? (
                                <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 [[data-theme='dark']_&]:text-emerald-400 flex items-center gap-3">
                                    <FiCheckCircle className="w-6 h-6 shrink-0 text-[#B9AF7A]" />
                                    <span className="text-sm font-medium">Thank you! Your message has been sent successfully.</span>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-700 [[data-theme='dark']_&]:text-zinc-300 mb-2 uppercase tracking-wider">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                className="w-full bg-gray-50 [[data-theme='dark']_&]:bg-zinc-900/50 border border-gray-200 [[data-theme='dark']_&]:border-zinc-800 rounded-2xl p-4 text-sm text-gray-900 [[data-theme='dark']_&]:text-white placeholder:text-gray-400 [[data-theme='dark']_&]:placeholder:text-zinc-500 focus:outline-none focus:border-[#B9AF7A] focus:ring-1 focus:ring-[#B9AF7A] transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-700 [[data-theme='dark']_&]:text-zinc-300 mb-2 uppercase tracking-wider">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="john@example.com"
                                                className="w-full bg-gray-50 [[data-theme='dark']_&]:bg-zinc-900/50 border border-gray-200 [[data-theme='dark']_&]:border-zinc-800 rounded-2xl p-4 text-sm text-gray-900 [[data-theme='dark']_&]:text-white placeholder:text-gray-400 [[data-theme='dark']_&]:placeholder:text-zinc-500 focus:outline-none focus:border-[#B9AF7A] focus:ring-1 focus:ring-[#B9AF7A] transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-gray-700 [[data-theme='dark']_&]:text-zinc-300 mb-2 uppercase tracking-wider">
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            rows="5"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="How can we assist you?"
                                            className="w-full bg-gray-50 [[data-theme='dark']_&]:bg-zinc-900/50 border border-gray-200 [[data-theme='dark']_&]:border-zinc-800 rounded-2xl p-4 text-sm text-gray-900 [[data-theme='dark']_&]:text-white placeholder:text-gray-400 [[data-theme='dark']_&]:placeholder:text-zinc-500 focus:outline-none focus:border-[#B9AF7A] focus:ring-1 focus:ring-[#B9AF7A] transition-all resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-[#B9AF7A] hover:bg-[#a69c67] text-white font-bold py-4 rounded-2xl text-sm transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer mt-2"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Google Map + Action Buttons */}
                    <div className="lg:col-span-6 flex flex-col justify-between">
                        {/* Map View Frame */}
                        <div className="w-full h-[340px] sm:h-[380px] rounded-[32px] overflow-hidden border-2 border-gray-100 [[data-theme='dark']_&]:border-zinc-800 shadow-xs bg-gray-100 [[data-theme='dark']_&]:bg-zinc-900/50 mb-6 flex-1">
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
                                className="w-full bg-white [[data-theme='dark']_&]:bg-zinc-900/50 border-2 border-gray-100 [[data-theme='dark']_&]:border-zinc-800 hover:border-[#B9AF7A] text-gray-900 [[data-theme='dark']_&]:text-white font-bold py-4 px-6 rounded-2xl text-sm text-center transition-all no-underline flex items-center justify-center shadow-xs"
                            >
                                Get Directions
                            </a>

                            <a
                                href="https://wa.me/250789321535?text=Hello%20Kigali%20BF%20Tech%20Group"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-4 px-6 rounded-2xl text-sm text-center transition-all no-underline flex items-center justify-center gap-2 shadow-md"
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
