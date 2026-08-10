'use client';

import { memo } from 'react';
import Link from 'next/link';
import { FiPhoneCall, FiMail, FiMapPin, FiInstagram, FiFacebook, FiTwitter, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/AboutUs', label: 'About Us' },
    { href: '/OurServices', label: 'Services' },
    { href: '/Solutions', label: 'Solutions' },
    { href: '/Projects', label: 'Projects' },
    { href: '/Team', label: 'Team' },
    { href: '/ContactUs', label: 'Contact Us' },
];

const Footer = () => {
    return (
        <footer className="relative bg-background text-(--navbar-text) overflow-hidden pt-32 pb-10 border-t border-(--navbar-border) transition-colors duration-300">
            {/* Background Glow Effects - Optimized for performance */}
            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none transition-opacity duration-300" style={{ background: 'radial-gradient(circle, rgba(185, 175, 122, 0.15) 0%, transparent 70%)' }}></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full pointer-events-none transition-opacity duration-300" style={{ background: 'radial-gradient(circle, rgba(217, 119, 6, 0.15) 0%, transparent 70%)' }}></div>

            <div className="max-w-350 mx-auto px-6 sm:px-8 relative z-10">
                {/* Top Section: Newsletter & Socials */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-16 border-b border-(--navbar-border)">
                    <div className="w-full lg:w-1/2 flex flex-col sm:flex-row items-center gap-4">
                        <div className="relative w-full max-w-md">
                            <input 
                                type="email" 
                                placeholder="Email address to Subscribe" 
                                className="w-full bg-(--navbar-bg) border border-(--navbar-border) rounded-full px-6 py-4 text-sm text-(--navbar-text) placeholder-(--navbar-text) placeholder-opacity-50 focus:outline-none focus:border-[#B9AF7A] focus:ring-1 focus:ring-[#B9AF7A] transition-all shadow-sm"
                            />
                            <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#B9AF7A] hover:bg-amber-500 text-white font-bold px-6 rounded-full text-sm transition-colors duration-300 flex items-center gap-2 shadow-md">
                                Subscribe
                            </button>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <a href="#" aria-label="Facebook" className="w-12 h-12 rounded-full bg-(--navbar-bg) border border-(--navbar-border) hover:bg-[#B9AF7A] hover:border-[#B9AF7A] hover:text-white flex items-center justify-center text-(--navbar-text) opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-sm">
                            <FiFacebook className="w-5 h-5" />
                        </a>
                        <a href="#" aria-label="Instagram" className="w-12 h-12 rounded-full bg-(--navbar-bg) border border-(--navbar-border) hover:bg-[#B9AF7A] hover:border-[#B9AF7A] hover:text-white flex items-center justify-center text-(--navbar-text) opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-sm">
                            <FiInstagram className="w-5 h-5" />
                        </a>
                        <a href="#" aria-label="WhatsApp" className="w-12 h-12 rounded-full bg-(--navbar-bg) border border-(--navbar-border) hover:bg-[#B9AF7A] hover:border-[#B9AF7A] hover:text-white flex items-center justify-center text-(--navbar-text) opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-sm">
                            <FaWhatsapp className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Middle Section: Links & Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 py-24">
                    {/* Col 1: Brand Info */}
                    <div className="flex flex-col gap-8">
                        <Link href="/" className="flex items-center gap-4 no-underline group w-fit">
                            <div className="flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full bg-white border-2 border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-transform duration-300 group-hover:scale-105 overflow-hidden">
                                <img 
                                    src="/images/realsm.jpg.jpeg" 
                                    alt="Kigali BF Tech Group Logo" 
                                    className="h-full w-full object-contain" 
                                />
                            </div>
                            <span className="text-lg font-extrabold tracking-tight text-(--navbar-text) transition-colors duration-300 group-hover:text-[#B9AF7A]">
                                Kigali BF Tech Group
                            </span>
                        </Link>
                        <p className="text-(--navbar-text) opacity-70 text-sm leading-relaxed max-w-xs transition-opacity duration-300">
                            Your Technical Partner in Every Business Breakthrough. We help businesses and organizations build the future of technology with innovative and reliable digital solutions.
                        </p>
                    </div>

                    {/* Col 2: Quick Links */}
                    <div className="flex flex-col gap-5">
                        <h4 className="text-lg font-bold text-(--navbar-text) tracking-wide">Quick Links</h4>
                        <div className="flex flex-col gap-3">
                            {NAV_LINKS.slice(0, 5).map((link) => (
                                <Link 
                                    key={link.href} 
                                    href={link.href}
                                    className="text-(--navbar-text) opacity-70 hover:opacity-100 hover:text-[#B9AF7A] text-sm flex items-center gap-2 transition-all duration-300 group w-fit no-underline"
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
                        <div className="flex flex-col gap-4 text-sm text-(--navbar-text) opacity-70 transition-opacity duration-300">
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
                        <div className="flex flex-col gap-4 text-sm text-(--navbar-text) opacity-70 transition-opacity duration-300">
                            <div className="flex items-start gap-3 group">
                                <div className="mt-1 w-8 h-8 rounded-full bg-(--navbar-border) flex items-center justify-center text-[#B9AF7A] group-hover:bg-[#B9AF7A] group-hover:text-white transition-colors">
                                    <FiMapPin className="w-4 h-4" />
                                </div>
                                <div className="flex-1">
                                    <p className="group-hover:text-(--navbar-text) group-hover:opacity-100 transition-all cursor-pointer">KN 3 Ave, Kigali, Rwanda</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 group">
                                <div className="mt-1 w-8 h-8 rounded-full bg-(--navbar-border) flex items-center justify-center text-[#B9AF7A] group-hover:bg-[#B9AF7A] group-hover:text-white transition-colors">
                                    <FiMail className="w-4 h-4" />
                                </div>
                                <div className="flex-1">
                                    <a href="mailto:info@invexix.com" className="group-hover:text-(--navbar-text) group-hover:opacity-100 transition-all">info@invexix.com</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 group">
                                <div className="mt-1 w-8 h-8 rounded-full bg-(--navbar-border) flex items-center justify-center text-[#B9AF7A] group-hover:bg-[#B9AF7A] group-hover:text-white transition-colors">
                                    <FiPhoneCall className="w-4 h-4" />
                                </div>
                                <div className="flex-1">
                                    <a href="tel:+250789321535" className="group-hover:text-(--navbar-text) group-hover:opacity-100 transition-all">+250 789 321 535</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Copyright */}
                <div className="py-6 border-t border-(--navbar-border) flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-(--navbar-text) opacity-60 transition-opacity duration-300">
                    <p>&copy; {new Date().getFullYear()} Kigali BF Tech Group. All rights reserved.</p>
                    <p>
                        Developed By <span className="text-[#B9AF7A] font-semibold opacity-100">Kigali BF Tech Group</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default memo(Footer);
