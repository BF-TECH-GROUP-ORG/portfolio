'use client';

import { useState, useEffect, useRef, memo, useMemo } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from './ThemeProvider';
import { HiSun, HiMoon, HiDesktopComputer } from 'react-icons/hi';
import { RiMenu3Fill, RiCloseFill } from 'react-icons/ri';
import { IoChevronDown } from 'react-icons/io5';

const NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/AboutUs', label: 'About Us' },
    { href: '/OurServices', label: 'Services' },
    { href: '/Solutions', label: 'Solutions' },
    { href: '/Projects', label: 'Projects' },
    { href: '/Team', label: 'Team' },
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
    const { themeMode, actualTheme, setTheme } = useTheme();
    const themeMenuRef = useRef(null);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const scrolled = latest > 20;
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

    return (
        <nav className={`fixed top-0 left-0 right-0 z-1000 backdrop-blur-[20px] transition-all duration-400 ease-in-out border-b 
            ${isScrolled
                ? 'bg-(--glass-bg) border-(--navbar-border) shadow-[0_8px_32px_var(--navbar-shadow)] in-data-[theme="dark"]:shadow-[0_8px_32px_rgba(255,255,255,0.02)]'
                : 'bg-(--navbar-bg) border-transparent'}`}
        >
            <div className="max-w-[1400px] mx-auto px-8 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="relative z-10 no-underline group" onClick={() => setIsMenuOpen(false)}>
                    <div className="relative inline-block">
                        <span className="text-[2rem] font-extrabold tracking-[-0.03em] bg-(--accent-gradient) bg-clip-text text-transparent transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)] inline-block group-hover:scale-108 group-hover:-translate-y-0.5 group-hover:tracking-[0.08em] leading-none">
                            KBTG
                        </span>
                        <div className="absolute -bottom-1 left-0 w-0 h-[3px] transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)] rounded-[2px] group-hover:w-full bg-(--accent-gradient)"></div>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-2 items-center">
                    {NAV_LINKS.map((link, index) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="relative overflow-hidden text-(--navbar-text) no-underline px-6 py-3 text-[0.9375rem] font-semibold rounded-xl transition-all duration-350 ease-in-out tracking-wide hover:text-(--navbar-hover) hover:-translate-y-0.5 group/navlink"
                        >
                            <span className="relative z-2">{link.label}</span>
                            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 scale-x-0 w-[70%] h-[2.5px] bg-(--navbar-text) transition-transform duration-350 ease-[cubic-bezier(0.34,1.56,0.64,1)] rounded-[2px] z-1 group-hover/navlink:scale-x-100"></div>
                            <div className="absolute inset-0 bg-(--navbar-border) opacity-0 transition-opacity duration-350 ease-linear z-0 group-hover/navlink:opacity-100"></div>
                        </Link>
                    ))}
                </div>

                {/* Theme Toggle & Mobile Menu Button */}
                <div className="flex items-center gap-3">
                    {/* Theme Switcher Dropdown */}
                    <div className="relative" ref={themeMenuRef}>
                        <button
                            onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                            className="bg-(--glass-bg) h-fit backdrop-blur-[10px] border-2 border-(--glass-border) text-(--navbar-text) px-4 py-2.5 rounded-full flex items-center gap-2 cursor-pointer transition-all duration-350 ease-in-out font-semibold shadow-[0_4px_12px_var(--navbar-shadow)] hover:bg-(--navbar-border) hover:border-(--navbar-text) hover:-translate-y-0.5 hover:shadow-[0_6px_20px_var(--navbar-shadow)] group/theme"
                            aria-label="Toggle theme menu"
                        >
                            <ThemeIcon className="w-5 h-5 transition-transform duration-350 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover/theme:rotate-20 group-hover/theme:scale-110" />
                            <IoChevronDown className={`w-4 h-4 transition-transform duration-350 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isThemeMenuOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Theme Dropdown Menu */}
                        <div className={`absolute top-[calc(100%+0.75rem)] right-0 bg-(--glass-bg) backdrop-blur-[20px] border-2 border-(--glass-border) rounded-2xl p-2 min-w-[160px] shadow-[0_10px_40px_var(--navbar-shadow)] transition-all duration-350 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-100 ${isThemeMenuOpen ? 'opacity-100 visible translate-y-0 scale-100' : 'opacity-0 invisible -translate-y-[10px] scale-95'}`}>
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
                                            <div className="absolute left-1 top-1/2 -translate-y-1/2 w-[3px] h-[60%] bg-(--navbar-text) rounded-[2px] animate-[slideIn_0.3s_cubic-bezier(0.34,1.56,0.64,1)]"></div>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="flex md:hidden bg-(--glass-bg) backdrop-blur-[10px] border-2 border-(--glass-border) text-(--navbar-text) w-11 h-11 rounded-xl items-center justify-center cursor-pointer transition-all duration-350 ease-in-out shadow-[0_4px_12px_var(--navbar-shadow)] hover:bg-(--navbar-border) hover:border-(--navbar-text) hover:-translate-y-0.5 hover:shadow-[0_6px_20px_var(--navbar-shadow)] group/mobile"
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
            <div className={`md:hidden flex flex-col overflow-hidden transition-[max-height] duration-500 ease-in-out bg-(--glass-bg) backdrop-blur-[20px] ${isMenuOpen ? 'max-h-[600px] border-t border-(--navbar-border)' : 'max-h-0'}`}>
                <div className="flex flex-col gap-2 p-6 px-8">
                    {NAV_LINKS.map((link, index) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-(--navbar-text) no-underline p-4 text-[1.0625rem] font-semibold rounded-xl transition-all duration-350 ease-in-out border-2 border-transparent flex items-center justify-between relative overflow-hidden group/mobilelink
                                ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
                            style={{
                                transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                            }}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <span>{link.label}</span>
                            <div className="opacity-0 -translate-x-2.5 transition-all duration-350 ease-[cubic-bezier(0.34,1.56,0.64,1)] text-[1.25rem] font-bold group-hover/mobilelink:opacity-100 group-hover/mobilelink:translate-x-0">→</div>
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-(--navbar-text) scale-y-0 transition-transform duration-350 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover/mobilelink:scale-y-100"></div>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default memo(Navbar);   