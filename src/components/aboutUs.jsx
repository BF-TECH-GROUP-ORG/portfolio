'use client';

import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin } from 'react-icons/fi';

const AboutUs = () => {
    const [hoveredCallout, setHoveredCallout] = useState(null);

    return (
        <section className="relative w-full bg-background text-(--navbar-text) pt-4 sm:pt-10 md:pt-14 pb-0 overflow-hidden flex flex-col justify-end select-none border-b border-(--navbar-border) transition-colors duration-300">
            {/* Soft Ambient Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[250px] sm:h-[350px] bg-[#B9AF7A]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] sm:w-[1100px] h-[300px] sm:h-[450px] bg-[#01333E]/20 rounded-full blur-3xl pointer-events-none" />

            {/* Compact Responsive Earth Globe Canvas Container */}
            <div className="relative w-full max-w-[1500px] mx-auto h-[280px] xs:h-[320px] sm:h-[540px] md:h-[620px] lg:h-[680px] flex items-end justify-center px-3 sm:px-8 lg:px-12">

                {/* --- CALLOUT 1: TOP LEFT (50+ / PROJECTS COMPLETED) --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    onMouseEnter={() => setHoveredCallout('c1')}
                    onMouseLeave={() => setHoveredCallout(null)}
                    className={`absolute top-[2%] sm:top-[12%] left-[3%] sm:left-[6%] md:left-[8%] z-30 max-w-[130px] xs:max-w-[160px] sm:max-w-[260px] md:max-w-[320px] text-left cursor-pointer transition-transform duration-300 ${
                        hoveredCallout === 'c1' ? 'scale-105' : ''
                    }`}
                >
                    <div className="text-lg xs:text-xl sm:text-3xl font-extrabold text-[#B9AF7A] tracking-tight flex items-center gap-1.5">
                        <span>50+</span>
                    </div>
                    <div className="text-[9px] xs:text-[10px] sm:text-sm font-semibold opacity-90 mt-0.5 leading-tight">
                        Projects Completed
                    </div>
                </motion.div>

                {/* --- CALLOUT 2: TOP RIGHT (10+ / EXPERT ENGINEERS) --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    onMouseEnter={() => setHoveredCallout('c2')}
                    onMouseLeave={() => setHoveredCallout(null)}
                    className={`absolute top-[2%] sm:top-[12%] right-[3%] sm:right-[6%] md:right-[8%] z-30 max-w-[130px] xs:max-w-[160px] sm:max-w-[260px] md:max-w-[320px] text-right cursor-pointer transition-transform duration-300 ${
                        hoveredCallout === 'c2' ? 'scale-105' : ''
                    }`}
                >
                    <div className="text-lg xs:text-xl sm:text-3xl font-extrabold text-sky-400 tracking-tight flex items-center justify-end gap-1.5">
                        <span>10+</span>
                    </div>
                    <div className="text-[9px] xs:text-[10px] sm:text-sm font-semibold opacity-90 mt-0.5 leading-tight">
                        Expert Engineers
                    </div>
                </motion.div>

                {/* --- CALLOUT 3: MID LEFT (99% / CLIENT SATISFACTION) --- */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    onMouseEnter={() => setHoveredCallout('c3')}
                    onMouseLeave={() => setHoveredCallout(null)}
                    className={`absolute top-[42%] sm:top-[62%] left-[2%] sm:left-[4%] md:left-[1%] z-30 max-w-[120px] xs:max-w-[150px] sm:max-w-[230px] md:max-w-[270px] text-left cursor-pointer transition-transform duration-300 ${
                        hoveredCallout === 'c3' ? 'scale-105' : ''
                    }`}
                >
                    <div className="text-base xs:text-lg sm:text-2xl font-extrabold text-amber-400 tracking-tight flex items-center gap-1.5">
                        <span>99%</span>
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-400 animate-ping"></span>
                    </div>
                    <div className="text-[9px] xs:text-[10px] sm:text-sm font-semibold opacity-90 mt-0.5 leading-tight">
                        Client Satisfaction
                    </div>
                </motion.div>

                {/* --- CALLOUT 4: MID RIGHT (KIGALI LOCATION & 5+ YEARS) --- */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    onMouseEnter={() => setHoveredCallout('c4')}
                    onMouseLeave={() => setHoveredCallout(null)}
                    className={`absolute top-[42%] sm:top-[61%] right-[2%] sm:right-[4%] md:right-[1%] z-30 max-w-[140px] xs:max-w-[170px] sm:max-w-[250px] md:max-w-[290px] text-right cursor-pointer transition-transform duration-300 ${
                        hoveredCallout === 'c4' ? 'scale-105' : ''
                    }`}
                >
                    <div className="text-base xs:text-lg sm:text-2xl font-extrabold text-emerald-500 tracking-tight flex items-center justify-end gap-1">
                        <FiMapPin className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-emerald-500" />
                        <span>Kigali, Rwanda</span>
                    </div>
                    <div className="text-[9px] xs:text-[10px] sm:text-sm font-semibold opacity-90 mt-0.5 leading-tight">
                        5+ Years of Excellence
                    </div>
                </motion.div>

                {/* SVG 3D EARTH GLOBE CANVAS */}
                <div className="absolute inset-0 z-10 pointer-events-none flex items-end justify-center">
                    <svg viewBox="0 0 1200 650" className="w-full h-full max-w-full" preserveAspectRatio="xMidYMax meet">
                        <defs>
                            {/* Radial Globe Atmosphere Gradient */}
                            <radialGradient id="massiveGlobeAtmosphere" cx="50%" cy="60%" r="60%">
                                <stop offset="0%" stopColor="#B9AF7A" stopOpacity="0.3" />
                                <stop offset="40%" stopColor="#01333E" stopOpacity="0.5" />
                                <stop offset="80%" stopColor="#070709" stopOpacity="0.9" />
                                <stop offset="100%" stopColor="#070709" stopOpacity="1" />
                            </radialGradient>

                            {/* Reduced Glow Filter (Shadow-LG Level: stdDeviation="8") */}
                            <filter id="superGlow" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="8" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>

                            <linearGradient id="lineC1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#B9AF7A" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#B9AF7A" stopOpacity="0.2" />
                            </linearGradient>

                            <linearGradient id="lineC2" x1="100%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
                            </linearGradient>
                        </defs>

                        {/* Outer Atmosphere Soft Glow Halo behind Planet */}
                        <circle cx="600" cy="720" r="510" fill="url(#massiveGlobeAtmosphere)" filter="url(#superGlow)" />

                        {/* Main Earth Sphere Base Curve */}
                        <circle cx="600" cy="720" r="480" fill="#09090c" stroke="#B9AF7A" strokeWidth="1.5" strokeOpacity="0.3" />

                        {/* Orbit Latitude Rings */}
                        <ellipse cx="600" cy="480" rx="470" ry="140" fill="none" stroke="#B9AF7A" strokeWidth="1.2" strokeDasharray="6 8" strokeOpacity="0.35" />
                        <ellipse cx="600" cy="400" rx="420" ry="110" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="5 7" strokeOpacity="0.3" />
                        <ellipse cx="600" cy="320" rx="340" ry="70" fill="none" stroke="#a855f7" strokeWidth="1" strokeDasharray="4 6" strokeOpacity="0.25" />

                        {/* Curved Orbital Particle Arc across Earth */}
                        <path d="M 150 480 Q 600 210 1050 480" fill="none" stroke="url(#lineC1)" strokeWidth="2" strokeDasharray="5 7" />

                        {/* World Dotted Mesh & Continent Pings */}
                        <g opacity="0.45">
                            {/* North America Mesh */}
                            <circle cx="380" cy="380" r="3.5" fill="#ffffff" />
                            <circle cx="410" cy="360" r="3" fill="#ffffff" />
                            <circle cx="440" cy="390" r="4" fill="#B9AF7A" />
                            <circle cx="470" cy="350" r="3" fill="#ffffff" />

                            {/* Africa & Kigali Rwanda Center Focus */}
                            <circle cx="600" cy="420" r="6" fill="#10b981" />
                            <circle cx="600" cy="420" r="14" fill="#10b981" opacity="0.3" className="animate-ping" />
                            <circle cx="620" cy="440" r="3.5" fill="#ffffff" />
                            <circle cx="580" cy="450" r="3" fill="#ffffff" />
                            <circle cx="630" cy="410" r="4" fill="#B9AF7A" />
                        </g>

                        {/* CALLOUT POINTER LEADER LINES */}
                        <path d="M 280 140 L 410 340" stroke="#B9AF7A" strokeWidth="1.2" strokeDasharray="3 3" opacity={hoveredCallout === 'c1' ? '1' : '0.6'} />
                        <circle cx="410" cy="340" r="5" fill="#B9AF7A" />

                        <path d="M 920 130 L 790 330" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="3 3" opacity={hoveredCallout === 'c2' ? '1' : '0.6'} />
                        <circle cx="790" cy="330" r="5" fill="#38bdf8" />

                        <path d="M 220 380 L 320 420" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="3 3" opacity={hoveredCallout === 'c3' ? '1' : '0.6'} />
                        <circle cx="320" cy="420" r="4.5" fill="#f59e0b" />

                        <path d="M 980 390 L 880 435" stroke="#10b981" strokeWidth="1.2" strokeDasharray="3 3" opacity={hoveredCallout === 'c4' ? '1' : '0.6'} />
                        <circle cx="880" cy="435" r="4.5" fill="#10b981" />

                        {/* Orbiting Pulsing Nodes */}
                        <circle cx="350" cy="290" r="4" fill="#38bdf8" className="animate-pulse" />
                        <circle cx="530" cy="260" r="5" fill="#B9AF7A" className="animate-bounce" />
                        <circle cx="680" cy="280" r="4" fill="#a855f7" />
                        <circle cx="850" cy="270" r="4.5" fill="#10b981" className="animate-pulse" />
                    </svg>
                </div>

                {/* Central Bottom Floating Brand Pill */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="relative z-30 mb-2 sm:mb-4 max-w-[90vw] bg-zinc-950/90 [[data-theme='light']_&]:bg-white/95 text-white [[data-theme='light']_&]:text-zinc-900 border border-[#B9AF7A]/40 backdrop-blur-md px-4 sm:px-7 py-2 sm:py-3 rounded-full shadow-lg flex items-center justify-center gap-2 text-[10px] xs:text-xs sm:text-sm font-extrabold truncate"
                >
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#B9AF7A] animate-ping shrink-0" />
                    <span className="tracking-wide truncate">Kigali BF Tech Group • Your Technical Partner</span>
                </motion.div>
            </div>
        </section>
    );
};

export default memo(AboutUs);