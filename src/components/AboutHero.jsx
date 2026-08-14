'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle, FiShield, FiCpu } from 'react-icons/fi';

const AboutHero = () => {
    return (
        <section className="relative w-full min-h-[calc(100vh-80px)] bg-background text-(--navbar-text) overflow-hidden border-b border-(--navbar-border) flex flex-col justify-center items-center select-none transition-colors duration-300 pt-10 sm:pt-16 lg:pt-20 pb-12">
            {/* Background Ambient Glows */}
            <div className="absolute top-1/3 left-10 w-[450px] h-[300px] bg-[#B9AF7A]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/3 right-10 w-[550px] h-[350px] bg-[#01333E]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-350 w-full mx-auto px-6 sm:px-8 lg:px-12 mt-16 lg:mt-32 relative z-10 my-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* Left Column: Headline, Story & CTAs */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-6 flex flex-col items-start text-left"
                    >
                        {/* Headline set to text-4xl as requested */}
                        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-extrabold tracking-tight leading-[1.18] mb-6">
                            Building The Digital Future <br className="hidden sm:inline" />
                            <span className="text-[#B9AF7A]">Through Code & Innovation</span>
                        </h1>

                        <p className="text-base sm:text-lg opacity-80 leading-relaxed font-normal mb-8 max-w-xl">
                            At Kigali BF Tech Group, we bridge the gap between complex technology and business growth. From enterprise software and mobile applications to cloud infrastructure and POS reservation engines, we provide the technical foundation your business needs to scale globally.
                        </p>

                        {/* Highlight Feature Badges */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 w-full max-w-lg">
                            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white [[data-theme='dark']_&]:bg-zinc-900/60 border border-gray-100 [[data-theme='dark']_&]:border-zinc-800 shadow-sm">
                                <div className="p-2 rounded-xl bg-[#B9AF7A]/15 text-[#B9AF7A]">
                                    <FiCheckCircle className="w-5 h-5" />
                                </div>
                                <span className="text-xs sm:text-sm font-bold">Custom Software Systems</span>
                            </div>
                            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white [[data-theme='dark']_&]:bg-zinc-900/60 border border-gray-100 [[data-theme='dark']_&]:border-zinc-800 shadow-sm">
                                <div className="p-2 rounded-xl bg-[#01333E]/20 text-[#38bdf8]">
                                    <FiShield className="w-5 h-5" />
                                </div>
                                <span className="text-xs sm:text-sm font-bold">24/7 SLA Reliability</span>
                            </div>
                        </div>

                        {/* Action CTAs */}
                        <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                            <a
                                href="/ContactUs"
                                className="w-full sm:w-auto bg-[#B9AF7A] hover:bg-[#a69c67] text-white font-bold px-8 py-4 rounded-full text-sm transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2.5 no-underline"
                            >
                                <span>Book a Consultation</span>
                                <FiArrowRight className="w-4 h-4" />
                            </a>
                            <a
                                href="#impact-section"
                                className="w-full sm:w-auto border border-gray-300 [[data-theme='dark']_&]:border-zinc-700 hover:border-[#B9AF7A] font-bold px-7 py-4 rounded-full text-sm transition-all text-center no-underline"
                            >
                                Explore Our Impact
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Isometric Futuristic Command Console & Beam Graphic */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="lg:col-span-6 relative flex items-center justify-center min-h-[400px] sm:min-h-[480px]"
                    >
                        {/* 3D Isometric Stage Platform & Hologram Beam */}
                        <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
                            
                            {/* SVG Isometric Stage & Light Beam */}
                            <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-2xl">
                                <defs>
                                    <linearGradient id="lightBeamGrad" x1="50%" y1="0%" x2="50%" y2="100%">
                                        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                                        <stop offset="50%" stopColor="#B9AF7A" stopOpacity="0.4" />
                                        <stop offset="100%" stopColor="#B9AF7A" stopOpacity="0" />
                                    </linearGradient>

                                    <linearGradient id="platformGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#1e1b4b" stopOpacity="0.9" />
                                        <stop offset="100%" stopColor="#0f172a" stopOpacity="0.95" />
                                    </linearGradient>

                                    <filter id="hologramGlow" x="-20%" y="-20%" width="140%" height="140%">
                                        <feGaussianBlur stdDeviation="10" result="blur" />
                                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                    </filter>
                                </defs>

                                {/* Base Isometric Stage Base */}
                                <polygon points="250,380 440,280 250,180 60,280" fill="url(#platformGrad)" stroke="#B9AF7A" strokeWidth="2" strokeOpacity="0.5" />
                                <polygon points="60,280 250,380 250,410 60,310" fill="#020617" opacity="0.8" />
                                <polygon points="250,380 440,280 440,310 250,410" fill="#090d16" opacity="0.9" />

                                {/* Circular Hologram Console Pod */}
                                <ellipse cx="250" cy="280" rx="140" ry="70" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
                                <ellipse cx="250" cy="280" rx="110" ry="55" fill="none" stroke="#B9AF7A" strokeWidth="1.5" strokeDasharray="6 6" />
                                <ellipse cx="250" cy="280" rx="70" ry="35" fill="#38bdf8" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="1" />

                                {/* Upward Glowing Light Beam */}
                                <polygon points="210,280 290,280 310,60 190,60" fill="url(#lightBeamGrad)" filter="url(#hologramGlow)" />
                                <line x1="250" y1="280" x2="250" y2="40" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.8" className="animate-pulse" />

                                {/* Floating Isometric Cards */}
                                <g transform="translate(110, 160)">
                                    <rect x="0" y="0" width="70" height="40" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
                                    <line x1="10" y1="12" x2="50" y2="12" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
                                    <line x1="10" y1="24" x2="35" y2="24" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                                </g>

                                <g transform="translate(320, 150)">
                                    <rect x="0" y="0" width="75" height="45" rx="8" fill="#1e293b" stroke="#B9AF7A" strokeWidth="1.5" />
                                    <circle cx="20" cy="22" r="8" fill="#B9AF7A" />
                                    <line x1="34" y1="17" x2="60" y2="17" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                                    <line x1="34" y1="27" x2="50" y2="27" stroke="#ffffff" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" />
                                </g>

                                <g transform="translate(340, 260)">
                                    <rect x="0" y="0" width="80" height="40" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
                                    <polyline points="10,25 25,15 40,22 65,10" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
                                </g>

                                {/* Floating Data Particles */}
                                <circle cx="210" cy="140" r="4" fill="#38bdf8" className="animate-bounce" />
                                <circle cx="290" cy="120" r="5" fill="#B9AF7A" className="animate-pulse" />
                                <circle cx="250" cy="100" r="3" fill="#ffffff" />
                            </svg>

                            {/* Floating Overlay Badge on Hologram */}
                            <motion.div 
                                animate={{ y: [-6, 6, -6] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute top-[8%] right-[5%] bg-white/95 [[data-theme='dark']_&]:bg-zinc-900/95 backdrop-blur-md border border-[#B9AF7A]/40 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 text-xs font-bold text-gray-900 [[data-theme='dark']_&]:text-white"
                            >
                                <span className="w-2.5 h-2.5 rounded-full bg-[#B9AF7A] animate-ping" />
                               
                            </motion.div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default memo(AboutHero);
