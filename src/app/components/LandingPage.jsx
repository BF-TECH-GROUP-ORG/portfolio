'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { LuCode } from 'react-icons/lu';
import Threads from './Threads';

const PARTNERS_DATA = [
    { name: 'asana', logo: '/path/to/asana.svg' },
    { name: 'airbnb', logo: '/path/to/airbnb.svg' },
    { name: 'Adobe', logo: '/path/to/adobe.svg' },
    { name: 'Microsoft', logo: '/path/to/microsoft.svg' },
    { name: 'slack', logo: '/path/to/slack.svg' },
    { name: 'Google', logo: '/path/to/google.svg' }
];

const Partners = () => {

    return (
        <div className="partners-section">
            <p className="partners-label text-sm opacity-50 font-medium">
                Previously worked with
            </p>
            <div className="partners-grid flex justify-center items-center gap-12 flex-wrap opacity-70">
                {PARTNERS_DATA.map((partner) => (
                    <div key={partner.name} className="partner-item transition-all duration-300 hover:opacity-100 hover:scale-105">
                        <h6 className="partner-name text-lg font-bold tracking-tight">
                            {partner.name}
                        </h6>
                    </div>
                ))}
            </div>
        </div>
    );
};

const LandingPage = () => {
    const { actualTheme } = useTheme();
    const isDark = actualTheme === 'dark';

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <div className="landing-page-v2 relative min-h-screen pt-32 pb-20 overflow-hidden bg-background text-foreground font-sans">
            {/* Dynamic Background */}
            <div className="threads-background-container absolute inset-0 z-0 pointer-events-none opacity-60">
                <div className="light-bubble bubble-1 absolute rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
                <div className="light-bubble bubble-2 absolute rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
                <div className="light-bubble bubble-3 absolute rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
                <div className="light-bubble bubble-4 absolute rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
                <Threads
                    amplitude={3.0}
                    distance={0}
                    enableMouseInteraction
                    color={isDark ? [1, 1, 1] : [0, 0, 0]}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="hero-v2-content flex flex-col items-center gap-16 text-center"
                >
                    {/* Header Copy */}
                    <div className="hero-v2-text flex flex-col items-center">
                        <motion.div variants={itemVariants}>
                            <div className="new-background-pill mb-8 px-5 py-2 inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md text-sm font-medium">
                                <LuCode className="text-base" />
                                <span>Kigali BF Tech Group</span>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <h1 className="hero-v2-title text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8 tracking-tight">
                                Your Technical Partner in Every <span className="text-[#01333E] [[data-theme='dark']_&]:text-[#B9AF7A]">Business Breakthrough</span>

                            </h1>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <p className=" text-lg md:text-xl  max-w-2xl mb-14  font-medium">
                                <span className="text-white">We help businesses and organizations</span> to
                                <span className='text-foreground/60 '> build the future of the technology.</span>
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="hero-v2-actions flex flex-wrap justify-center gap-6">
                            <button
                                className="hero-btn cursor-pointer primary px-8 py-3.5 rounded-xl font-bold text-base transition-all duration-300 bg-[#B9AF7A] text-background hover:scale-105 active:scale-95 shadow-lg shadow-foreground/10"
                            >
                                View Our Work
                            </button>
                            <button className="border cursor-pointer secondary px-8 py-3.5 rounded-xl font-bold text-base transition-all duration-300 bg-transparent hover:bg-foreground/5 hover:border-foreground active:scale-95">
                                Contact Us
                            </button>
                        </motion.div>
                    </div>

                    {/* Partners Part */}
                    <motion.div variants={itemVariants} className="w-full">
                        <Partners />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default memo(LandingPage);