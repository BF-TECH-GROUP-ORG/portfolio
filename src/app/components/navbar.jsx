'use client';

import { useState, useEffect, useRef, memo, useMemo } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';
import { HiSun, HiMoon, HiDesktopComputer } from 'react-icons/hi';
import { RiMenu3Fill, RiCloseFill } from 'react-icons/ri';
import { IoChevronDown } from 'react-icons/io5';
import { FiPhoneCall, FiMail, FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/AboutUs', label: 'About Us' },
    { href: '/OurServices', label: 'Services' },
    { href: '/Solutions', label: 'Solutions' },
    { href: '/ContactUs', label: 'Contact' },
];

const THEME_OPTIONS = [
    { mode: 'light', label: 'Light', icon: HiSun },
    { mode: 'dark', label: 'Dark', icon: HiMoon },
    { mode: 'system', label: 'System', icon: HiDesktopComputer },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
    const { themeMode, setTheme } = useTheme();
    const themeMenuRef = useRef(null);
    const pathname = usePathname();

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const scrolled = latest > 30;
        if (scrolled !== isScrolled) {
            setIsScrolled(scrolled);
        }
    });

    // Close theme menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (themeMenuRef.current && !themeMenuRef.current.contains(event.target)) {
                setIsThemeMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const ThemeIcon = useMemo(() => {
        const option = THEME_OPTIONS.find(opt => opt.mode === themeMode);
        return option ? option.icon : HiSun;
    }, [themeMode]);

    const isActiveLink = (href) => {
        if (!pathname) return false;
        if (href === '/') {
            return pathname === '/';
        }
        return pathname.toLowerCase() === href.toLowerCase();
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-1000">
            {/* Top Contact Bar */}
            <div className="bg-[#01333E] text-(--navbar-text) border-b border-(--navbar-border) backdrop-blur-md transition-all duration-300 relative z-50">
                <div className="w-full max-w-450 mx-auto px-2 sm:px-4 md:px-0 md:pl-10 lg:pl-16 md:pr-0 flex items-stretch justify-center md:justify-between gap-4 text-xs sm:text-sm">
                    {/* Left: Contact Information */}
                    <div className="flex items-center justify-center w-full md:w-auto gap-4 md:gap-6 flex-wrap py-3 md:pr-4">
                        {/* Phone */}
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#B9AF7A]/20 border border-[#B9AF7A]/40 flex items-center justify-center text-[#B9AF7A] shrink-0 shadow-xs">
                                <FiPhoneCall className="w-4 h-4" />
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="hidden sm:inline opacity-70 font-normal">Call Us Anytime:</span>
                                <a href="tel:+250789321535" className="font-bold text-(--navbar-text) hover:text-[#B9AF7A] transition-colors">
                                    +250 789 321 535
                                </a>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="hidden sm:block w-px h-4 bg-(--navbar-border)" />

                        {/* Email */}
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#B9AF7A]/20 border border-[#B9AF7A]/40 flex items-center justify-center text-[#B9AF7A] shrink-0 shadow-xs">
                                <FiMail className="w-4 h-4" />
                            </div>
                            <a href="mailto:info@invexix.com" className="font-bold text-(--navbar-text) hover:text-[#B9AF7A] transition-colors">
                                info@invexix.com
                            </a>
                        </div>
                    </div>

                    {/* Right: Social Media & Status Pill */}
                    <div className="hidden md:flex items-center gap-4 py-3 pl-4 pr-10 bg-white/5 border-l border-(--navbar-border)">
                        <div className="flex items-center gap-3">
                            <span className="font-bold tracking-wide text-xs opacity-90">Follow Us:</span>
                            <div className="flex items-center gap-2">
                                <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-background hover:bg-[#B9AF7A] hover:text-white flex items-center justify-center text-foreground transition-all duration-200 shadow-xs">
                                    <FiInstagram className="w-4 h-4" />
                                </a>
                                <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-background hover:bg-[#B9AF7A] hover:text-white flex items-center justify-center text-foreground transition-all duration-200 shadow-xs">
                                    <FiFacebook className="w-4 h-4" />
                                </a>
                                <a href="https://wa.me/250789321535" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-8 h-8 rounded-full bg-background hover:bg-[#B9AF7A] hover:text-white flex items-center justify-center text-foreground transition-all duration-200 shadow-xs">
                                    <FaWhatsapp className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className={`relative backdrop-blur-[20px] transition-all duration-400 ease-in-out
                ${isScrolled
                    ? 'bg-(--glass-bg) shadow-[0_8px_32px_var(--navbar-shadow)]'
                    : 'bg-(--navbar-bg) shadow-[0_10px_40px_var(--navbar-shadow)]'}`}
            >
                {/* Advanced Glowing Separator Line */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#B9AF7A]/50 to-transparent shadow-[0_2px_15px_rgba(185,175,122,0.5)]"></div>
                
                <div className="max-w-350 mx-auto px-6 sm:px-8 py-4 flex items-center justify-between relative z-10">
                    {/* Logo */}
                    <Link href="/" className="relative z-10 no-underline flex items-center gap-3 group" onClick={() => setIsMenuOpen(false)}>
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white border border-neutral-200 shadow-xs transition-transform duration-300 group-hover:scale-105 overflow-hidden">
                            <Image 
                                src="/images/realsm.jpg.jpeg" 
                                alt="Kigali BF Tech Group Logo" 
                                width={48}
                                height={48}
                                className="h-full w-full object-contain p-0.5" 
                            />
                        </div>

                        {/* Brand Name */}
                        <span className="hidden md:block text-lg lg:text-xl font-extrabold tracking-tight text-(--navbar-text) transition-colors duration-300 group-hover:text-[#B9AF7A]">
                            Kigali BF Tech Group
                        </span>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex gap-1 lg:gap-2 items-center">
                        {NAV_LINKS.map((link) => {
                            const active = isActiveLink(link.href);
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`relative overflow-hidden no-underline px-4 lg:px-5 py-2.5 text-[0.9375rem] font-semibold rounded-xl transition-all duration-300 ease-in-out tracking-wide group/navlink ${
                                        active 
                                            ? 'text-[#B9AF7A] font-bold bg-[#B9AF7A]/10 border border-[#B9AF7A]/30' 
                                            : 'text-(--navbar-text) hover:text-[#B9AF7A] hover:-translate-y-0.5'
                                    }`}
                                >
                                    <span className="relative z-2">{link.label}</span>
                                    <div className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 w-[60%] h-[2.5px] bg-[#B9AF7A] transition-transform duration-300 ease-out rounded-xs z-1 ${active ? 'scale-x-100' : 'scale-x-0 group-hover/navlink:scale-x-100'}`}></div>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Theme Toggle & CTA Action */}
                    <div className="flex items-center gap-3">
                        {/* Get Started CTA Button */}
                        <Link
                            href="/ContactUs"
                            className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#B9AF7A] to-amber-500 hover:from-amber-400 hover:to-[#B9AF7A] text-slate-950 font-bold text-xs tracking-wider uppercase shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 no-underline"
                        >
                            Get Started
                        </Link>

                        {/* Theme Switcher Dropdown */}
                        <div className="relative" ref={themeMenuRef}>
                            <button
                                onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                                className="bg-(--glass-bg) h-fit backdrop-blur-[10px] border-2 border-(--glass-border) text-(--navbar-text) px-3.5 py-2 rounded-full flex items-center gap-2 cursor-pointer transition-all duration-350 ease-in-out font-semibold shadow-[0_4px_12px_var(--navbar-shadow)] hover:bg-(--navbar-border) hover:border-(--navbar-text) hover:-translate-y-0.5 group/theme"
                                aria-label="Toggle theme menu"
                            >
                                <ThemeIcon className="w-4.5 h-4.5 transition-transform duration-350 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover/theme:rotate-20 group-hover/theme:scale-110" />
                                <IoChevronDown className={`w-3.5 h-3.5 transition-transform duration-350 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isThemeMenuOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Theme Dropdown Menu */}
                            <div className={`absolute top-[calc(100%+0.75rem)] right-0 bg-(--glass-bg) backdrop-blur-[20px] border-2 border-(--glass-border) rounded-2xl p-2 min-w-40 shadow-[0_10px_40px_var(--navbar-shadow)] transition-all duration-350 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-100 ${isThemeMenuOpen ? 'opacity-100 visible translate-y-0 scale-100' : 'opacity-0 invisible -translate-y-2.5 scale-95'}`}>
                                {THEME_OPTIONS.map((option) => {
                                    const OptionIcon = option.icon;
                                    return (
                                        <button
                                            key={option.mode}
                                            onClick={() => {
                                                setTheme(option.mode);
                                                setIsThemeMenuOpen(false);
                                            }}
                                            className={`w-full flex items-center gap-3 px-4 py-3 bg-transparent border-none rounded-xl text-(--navbar-text) cursor-pointer transition-all duration-300 ease-in-out text-[0.9375rem] relative text-left hover:bg-(--navbar-border) hover:translate-x-1 ${themeMode === option.mode ? 'bg-(--navbar-border) font-semibold' : 'font-medium'}`}
                                        >
                                            <OptionIcon className="w-4.5 h-4.5 shrink-0" />
                                            <span>{option.label}</span>
                                            {themeMode === option.mode && (
                                                <div className="absolute left-1 top-1/2 -translate-y-1/2 w-0.75 h-[60%] bg-(--navbar-text) rounded-xs animate-[slideIn_0.3s_cubic-bezier(0.34,1.56,0.64,1)]"></div>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="flex md:hidden bg-(--glass-bg) backdrop-blur-[10px] border-2 border-(--glass-border) text-(--navbar-text) w-10 h-10 rounded-xl items-center justify-center cursor-pointer transition-all duration-350 ease-in-out shadow-[0_4px_12px_var(--navbar-shadow)] hover:bg-(--navbar-border) hover:border-(--navbar-text) hover:-translate-y-0.5 group/mobile"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <RiCloseFill className="w-6 h-6 transition-transform duration-350 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover/mobile:rotate-90" />
                            ) : (
                                <RiMenu3Fill className="w-6 h-6 transition-transform duration-350 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover/mobile:rotate-90" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden flex flex-col overflow-hidden transition-[max-height] duration-500 ease-in-out bg-(--glass-bg) backdrop-blur-[20px] ${isMenuOpen ? 'max-h-150 border-t border-(--navbar-border)' : 'max-h-0'}`}>
                    <div className="flex flex-col gap-2 p-6 px-8">
                        {NAV_LINKS.map((link, index) => {
                            const active = isActiveLink(link.href);
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`no-underline p-4 text-[1.0625rem] font-semibold rounded-xl transition-all duration-350 ease-in-out flex items-center justify-between relative overflow-hidden group/mobilelink
                                        ${active ? 'text-[#B9AF7A] font-bold bg-[#B9AF7A]/10 border border-[#B9AF7A]/30' : 'text-(--navbar-text) border-2 border-transparent'}
                                        ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
                                    style={{
                                        transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                                    }}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <span>{link.label}</span>
                                    <div className={`transition-all duration-350 text-[1.25rem] font-bold ${active ? 'opacity-100 translate-x-0 text-[#B9AF7A]' : 'opacity-0 -translate-x-2.5 group-hover/mobilelink:opacity-100 group-hover/mobilelink:translate-x-0'}`}>→</div>
                                    <div className={`absolute left-0 top-0 bottom-0 w-1 bg-[#B9AF7A] transition-transform duration-350 ${active ? 'scale-y-100' : 'scale-y-0 group-hover/mobilelink:scale-y-100'}`}></div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default memo(Navbar);