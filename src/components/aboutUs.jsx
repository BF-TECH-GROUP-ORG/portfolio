'use client';
import { memo } from 'react';
import { motion } from 'framer-motion';
import { HiHeart, HiShare, HiPlay, HiLocationMarker, HiSparkles } from 'react-icons/hi';

const AboutUs = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 70,
                damping: 20,
                duration: 0.8
            }
        }
    };

    return (
        <section className="py-24 bg-background min-h-[70vh] flex items-center overflow-hidden">
            <motion.div
                className="container mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                {/* Left Side: Content */}
                <motion.div className="flex flex-col gap-8 text-start" variants={itemVariants}>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-950 [[data-theme='dark']_&]:text-white leading-[1.1] tracking-tight">
                            Navigating the<br />
                            <span className="text-[#B9AF7A]  px-2 rounded-lg inline-block ">digital landscape</span> <br />
                            for success
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 [[data-theme='dark']_&]:text-zinc-400 font-medium leading-relaxed max-w-xl">
                            At KBTG, we specialize in bridging the gap between complex technology and business growth.
                            From cloud infrastructure to custom software development, we provide the technical foundation
                            your business needs to thrive in the modern era.
                        </p>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-fit px-8 py-4 bg-gray-950 [[data-theme='dark']_&]:bg-white text-white [[data-theme='dark']_&]:text-black font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                        Book a consultation
                    </motion.button>
                </motion.div>

                {/* Right Side: Visual Illustration */}
                <motion.div className="relative flex justify-center items-center h-full" variants={itemVariants}>
                    {/* Background Decorative Rings */}
                    <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-20 [[data-theme='dark']_&]:opacity-10">
                        <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] border border-gray-400 rounded-full animate-pulse"></div>
                        <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] border border-gray-300 rounded-full animate-reverse-spin"></div>
                    </div>

                    {/* Custom Vector Illustration (IT Implementation) */}
                    <div className="relative z-10 w-full max-w-[500px]">
                        <svg viewBox="0 0 500 500" className="w-full h-auto drop-shadow-2xl">
                            {/* Main Hub Node */}
                            <circle cx="250" cy="250" r="80" className="fill-[#B9AF7A] opacity-90" />
                            <circle cx="250" cy="250" r="60" className="fill-white" />
                            <path d="M220 250h60M250 220v60" stroke="black" strokeWidth="4" strokeLinecap="round" />

                            {/* Orbiting Tech Nodes */}
                            <g className="animate-float">
                                <circle cx="120" cy="150" r="40" className="fill-gray-900" />
                                <text x="120" y="150" textAnchor="middle" dy=".3em" fill="white" className="text-2xl font-bold">
                                    <HiPlay />
                                </text>
                            </g>

                            <g className="animate-float-delayed">
                                <circle cx="380" cy="120" r="35" className="fill-[#B9AF7A]" />
                                <text x="380" y="120" textAnchor="middle" dy=".3em" fill="black" className="text-2xl font-bold">
                                    <HiShare />
                                </text>
                            </g>

                            <g className="animate-float">
                                <circle cx="420" cy="280" r="45" className="fill-gray-900" />
                                <text x="420" y="280" textAnchor="middle" dy=".3em" fill="white" className="text-2xl font-bold">
                                    <HiLocationMarker />
                                </text>
                            </g>

                            <g className="animate-float-delayed">
                                <circle cx="150" cy="380" r="30" className="fill-gray-400 opacity-50" />
                                <text x="150" y="380" textAnchor="middle" dy=".3em" fill="black">
                                    <HiSparkles />
                                </text>
                            </g>

                            {/* Connection Lines (Abstract) */}
                            <path d="M250 170 C 250 100, 120 100, 120 150" stroke="black" fill="none" strokeWidth="2" strokeDasharray="4 4" className="opacity-30" />
                            <path d="M250 330 C 250 400, 150 400, 150 380" stroke="black" fill="none" strokeWidth="2" strokeDasharray="4 4" className="opacity-30" />
                            <path d="M330 250 C 400 250, 400 280, 420 280" stroke="black" fill="none" strokeWidth="2" strokeDasharray="4 4" className="opacity-30" />

                            {/* Central Icon Background Shape from Reference */}
                            <path d="M280 350 L320 380 L300 320 Z" className="fill-black opacity-90" />
                            <circle cx="100" cy="300" r="15" className="fill-black" />
                            <circle cx="400" cy="400" r="10" className="fill-[#B9AF7A]" />
                        </svg>

                        {/* Relative Floating UI Icons (React Icons) */}
                        <div className="absolute top-1/4 right-[5%] p-4 bg-gray-950 rounded-full text-[#B9AF7A] shadow-lg animate-bounce duration-[3s]">
                            <HiHeart className="text-2xl" />
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            <style jsx>{`
                @keyframes reverse-spin {
                    from { transform: rotate(360deg); }
                    to { transform: rotate(0deg); }
                }
                .animate-reverse-spin {
                    animation: reverse-spin 20s linear infinite;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
                .animate-float-delayed {
                    animation: float 4s ease-in-out infinite;
                    animation-delay: 2s;
                }
            `}</style>
        </section>
    );
};

export default memo(AboutUs);