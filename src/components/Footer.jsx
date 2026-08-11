'use client';

import { useState, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiPhoneCall, FiMail, FiMapPin, FiInstagram, FiFacebook, FiTwitter, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/AboutUs', label: 'About Us' },
    { href: '/OurServices', label: 'Services' },
    { href: '/Solutions', label: 'Solutions' },
    { href: '/Technologies', label: 'Technologies' },
    { href: '/ContactUs', label: 'Contact Us' },
];

const Footer = () => {
    const [subEmail, setSubEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [subSuccess, setSubSuccess] = useState(false);
    const [subError, setSubError] = useState('');

    const handleSubscribe = async (e) => {
        e.preventDefault();
        if (!subEmail || !subEmail.includes('@')) {
            setSubError('Please enter a valid email address.');
            return;
        }

        setIsSubmitting(true);
        setSubError('');

        try {
            const res = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: subEmail })
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Failed to subscribe.');
            }

            setSubSuccess(true);
            setSubEmail('');
            setTimeout(() => setSubSuccess(false), 7000);
        } catch (err) {
            console.error('Subscription error:', err);
            setSubError(err.message || 'Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <footer className="relative bg-background text-(--navbar-text) overflow-hidden pt-32 pb-10 border-t border-(--navbar-border) transition-colors duration-300">
            {/* Advanced Glowing Separator Line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#B9AF7A]/50 to-transparent shadow-[0_2px_15px_rgba(185,175,122,0.5)]"></div>

            {/* Background Glow Effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none transition-opacity duration-300" style={{ background: 'radial-gradient(circle, rgba(185, 175, 122, 0.15) 0%, transparent 70%)' }}></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full pointer-events-none transition-opacity duration-300" style={{ background: 'radial-gradient(circle, rgba(217, 119, 6, 0.15) 0%, transparent 70%)' }}></div>

            <div className="max-w-350 mx-auto px-6 sm:px-8 relative z-10">
                {/* Top Section: Newsletter & Socials */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-16 border-b border-(--navbar-border)">
                    <div className="w-full lg:w-1/2 flex flex-col items-start gap-3">
                        <form onSubmit={handleSubscribe} className="relative w-full max-w-md">
                            <input
                                type="email"
                                required
                                value={subEmail}
                                onChange={(e) => setSubEmail(e.target.value)}
                                placeholder="Subscribe to tech updates..."
                                className="w-full bg-(--navbar-bg) border border-(--navbar-border) rounded-full pl-6 pr-36 py-4 text-sm text-(--navbar-text) placeholder-(--navbar-text) placeholder-opacity-50 focus:outline-none focus:border-[#B9AF7A] focus:ring-1 focus:ring-[#B9AF7A] transition-all shadow-sm font-medium"
                            />
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#B9AF7A] hover:bg-amber-500 text-slate-950 font-black px-6 rounded-full text-xs transition-colors duration-300 flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-50"
                            >
                                {isSubmitting ? 'Sending...' : 'Subscribe'}
                            </button>
                        </form>

                        {subSuccess && (
                            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-500">
                                <FiCheckCircle className="w-4 h-4 text-[#B9AF7A]" />
                                <span>Thank you for subscribing! Check your inbox soon.</span>
                            </div>
                        )}

                        {subError && (
                            <div className="text-xs font-semibold text-rose-500">
                                {subError}
                            </div>
                        )}
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="#" aria-label="Facebook" className="w-12 h-12 rounded-full bg-(--navbar-bg) border border-(--navbar-border) hover:bg-[#B9AF7A] hover:border-[#B9AF7A] hover:text-white flex items-center justify-center text-(--navbar-text) opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-sm">
                            <FiFacebook className="w-5 h-5" />
                        </a>
                        <a href="#" aria-label="Instagram" className="w-12 h-12 rounded-full bg-(--navbar-bg) border border-(--navbar-border) hover:bg-[#B9AF7A] hover:border-[#B9AF7A] hover:text-white flex items-center justify-center text-(--navbar-text) opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-sm">
                            <FiInstagram className="w-5 h-5" />
                        </a>
                        <a href="https://wa.me/250789321535" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-12 h-12 rounded-full bg-(--navbar-bg) border border-(--navbar-border) hover:bg-[#B9AF7A] hover:border-[#B9AF7A] hover:text-white flex items-center justify-center text-(--navbar-text) opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-sm">
                            <FaWhatsapp className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Middle Section: Links & Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
                    {/* Col 1: Brand Info */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="flex items-center gap-4 no-underline group w-fit">
                            <div className="flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-white border-2 border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-transform duration-300 group-hover:scale-105 overflow-hidden">
                                <Image
                                    src="/images/realsm.jpg.jpeg"
                                    alt="Kigali BF Tech Group Logo"
                                    width={80}
                                    height={80}
                                    className="h-full w-full object-contain"
                                />
                            </div>
                            <span className="text-lg font-extrabold tracking-tight text-(--navbar-text) transition-colors duration-300 group-hover:text-[#B9AF7A]">
                                Kigali BF Tech Group
                            </span>
                        </Link>
                        <p className="text-(--navbar-text) opacity-70 text-sm leading-relaxed max-w-xs transition-opacity duration-300 font-medium">
                            Your Technical Partner in Every Business Breakthrough. We help businesses and organizations build the future of technology with innovative and reliable digital solutions.
                        </p>
                    </div>

                    {/* Col 2: Quick Links */}
                    <div className="flex flex-col gap-5">
                        <h4 className="text-lg font-bold text-(--navbar-text) tracking-wide">Quick Links</h4>
                        <div className="flex flex-col gap-3">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-(--navbar-text) opacity-70 hover:opacity-100 hover:text-[#B9AF7A] text-sm flex items-center gap-2 transition-all duration-300 group w-fit no-underline font-medium"
                                >
                                    <FiArrowRight className="w-3.5 h-3.5 opacity-0 -ml-4 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0 text-[#B9AF7A]" />
                                    <span>{link.label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Col 3: Working Hours */}
                    <div className="flex flex-col gap-5">
                        <h4 className="text-lg font-bold text-(--navbar-text) tracking-wide">Working Hours</h4>
                        <div className="flex flex-col gap-4 text-sm text-(--navbar-text) opacity-70 transition-opacity duration-300 font-medium">
                            <div>
                                <p className="font-semibold text-(--navbar-text) opacity-100 mb-1">Monday - Friday:</p>
                                <p>08:00 AM to 06:00 PM</p>
                            </div>
                            <div>
                                <p className="font-semibold text-(--navbar-text) opacity-100 mb-1">Saturday:</p>
                                <p>09:00 AM to 02:00 PM</p>
                            </div>
                            <div>
                                <p className="font-semibold text-[#B9AF7A] opacity-100 mb-1">Sunday:</p>
                                <p>Closed</p>
                            </div>
                        </div>
                    </div>

                    {/* Col 4: Contact Info */}
                    <div className="flex flex-col gap-5">
                        <h4 className="text-lg font-bold text-(--navbar-text) tracking-wide">Contact Info</h4>
                        <div className="flex flex-col gap-4 text-sm text-(--navbar-text) opacity-70 transition-opacity duration-300 font-medium">
                            <div className="flex items-start gap-3 group">
                                <div className="mt-1 w-8 h-8 rounded-full bg-(--navbar-border) flex items-center justify-center text-[#B9AF7A] group-hover:bg-[#B9AF7A] group-hover:text-white transition-colors shrink-0">
                                    <FiMapPin className="w-4 h-4" />
                                </div>
                                <div className="flex-1">
                                    <a 
                                        href="https://www.google.com/maps/dir/?api=1&destination=-1.914773,30.064406"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group-hover:text-(--navbar-text) group-hover:opacity-100 transition-all no-underline text-inherit block"
                                    >
                                        Gisozi, Kigali, Rwanda
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 group">
                                <div className="mt-1 w-8 h-8 rounded-full bg-(--navbar-border) flex items-center justify-center text-[#B9AF7A] group-hover:bg-[#B9AF7A] group-hover:text-white transition-colors shrink-0">
                                    <FiMail className="w-4 h-4" />
                                </div>
                                <div className="flex-1">
                                    <a href="mailto:info@invexix.com" className="group-hover:text-(--navbar-text) group-hover:opacity-100 transition-all block">info@invexix.com</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 group">
                                <div className="mt-1 w-8 h-8 rounded-full bg-(--navbar-border) flex items-center justify-center text-[#B9AF7A] group-hover:bg-[#B9AF7A] group-hover:text-white transition-colors shrink-0">
                                    <FiPhoneCall className="w-4 h-4" />
                                </div>
                                <div className="flex-1">
                                    <a href="tel:+250789321535" className="group-hover:text-(--navbar-text) group-hover:opacity-100 transition-all block font-semibold">+250 789 321 535</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Copyright */}
                <div className="pt-8 border-t border-(--navbar-border) flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-(--navbar-text) opacity-60">
                    <p>© {new Date().getFullYear()} Kigali BF Tech Group. All Rights Reserved.</p>
                    <p className="font-semibold text-[#B9AF7A]">Empowering Innovations & Tech Talent</p>
                </div>
            </div>
        </footer>
    );
};

export default memo(Footer);
