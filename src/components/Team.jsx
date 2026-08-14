'use client';

import { useState, memo, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ProfileCard from './ProfileCard';

const TEAM_MEMBERS = [
    {
        id: 0,
        name: "BAHIRWA Frank",
        title: "CEO & Founder",
        phone: "+250 798 725 288",
        portfolioUrl: "https://ceo.invexix.com/",
        handle: "frank_design",
        status: "Online",
        avatarUrl: "/images/frank.jpeg",
        innerGradient: "linear-gradient(145deg, #1f29378c 0%, #B9AF7A44 100%)",
        behindGlowColor: "rgba(31, 41, 55, 0.4)"
    },
    {
        id: 1,
        name: "BARAKA Joshua",
        title: "Managing Director",
        phone: "+250 789 411 780",
        portfolioUrl: "https://barakajoshua.vercel.app/",
        handle: "baraka_j",
        status: "Online",
        avatarUrl: "/images/josh.jpeg",
        innerGradient: "linear-gradient(145deg, #ef44448c 0%, #B9AF7A44 100%)",
        behindGlowColor: "rgba(239, 68, 68, 0.4)"
    },
    {
        id: 2,
        name: "NIYONIZERA Patrick",
        title: "FrontEnd Developer",
        phone: "+250 798 618 528",
        portfolioUrl: "https://patrick-portfolio.com",
        handle: "patrick_dev",
        status: "Online",
        avatarUrl: "/images/patrick.jpeg",
        innerGradient: "linear-gradient(145deg, #f59e0b8c 0%, #B9AF7A44 100%)",
        behindGlowColor: "rgba(245, 158, 11, 0.4)"
    },

    {
        id: 5,
        name: "Mugisha Germain",
        title: "FrontEnd & Mobile Developer",
        phone: "+250 783 126 308",
        portfolioUrl: "https://germain-portfolio.com",
        handle: "germain_s",
        status: "Away",
        avatarUrl: "/images/germain.jpeg",
        innerGradient: "linear-gradient(145deg, #0d94888c 0%, #71C4FF44 100%)",
        behindGlowColor: "rgba(13, 148, 136, 0.4)"
    },
    {
        id: 6,
        name: "NGENDAHAYO Valentin",
        title: "BackEnd Developer",
        phone: "+250 798 738 972",
        portfolioUrl: "https://germain-portfolio.com",
        handle: "valentin_n",
        status: "Away",
        avatarUrl: "/images/valentin.jpeg",
        innerGradient: "linear-gradient(145deg, #0d94888c 0%, #71C4FF44 100%)",
        behindGlowColor: "rgba(13, 148, 136, 0.4)"
    },
    {
        id: 7,
        name: "SHINJAGIRA Arnold",
        title: "BackEnd Developer",
        phone: "+250 790 857 716",
        portfolioUrl: "https://shinjxgira.vercel.app/",
        handle: "Arnold_sh",
        status: "Online",
        avatarUrl: null,
        innerGradient: "linear-gradient(145deg, #1f29378c 0%, #B9AF7A44 100%)",
        behindGlowColor: "rgba(31, 41, 55, 0.4)"
    },
    {
        id: 8,
        name: "IRASUBIZA Jules",
        title: "FrontEnd & UI/UX Designer",
        phone: "+250 783 126 308",
        portfolioUrl: "https://jules-portfolio.com",
        handle: "jules_s",
        status: "Away",
        avatarUrl: "/images/jules.jpeg",
        innerGradient: "linear-gradient(145deg, #0d94888c 0%, #71C4FF44 100%)",
        behindGlowColor: "rgba(13, 148, 136, 0.4)"
    }
];

const Team = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handlePrev = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + TEAM_MEMBERS.length) % TEAM_MEMBERS.length);
    }, []);

    const handleNext = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % TEAM_MEMBERS.length);
    }, []);

    return (
        <section className="py-24 min-h-screen overflow-hidden relative">
            {/* Next.js Background Image with Blur Effect */}
            <Image
                src="/images/team-background.jpg"
                alt="Team Section Background"
                fill
                priority
                className="object-cover object-center filter blur-md  scale-105 z-0"
            />
            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-black/80 z-0" />

            {/* Ambient Background Glow Bubbles at Edges */}
            <div className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none z-1 transition-opacity duration-300" style={{ background: 'radial-gradient(circle, rgba(185, 175, 122, 0.25) 0%, transparent 70%)' }}></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none z-1 transition-opacity duration-300" style={{ background: 'radial-gradient(circle, rgba(217, 119, 6, 0.2) 0%, transparent 70%)' }}></div>
            <div className="absolute top-1/2 -right-32 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none z-1 transition-opacity duration-300" style={{ background: 'radial-gradient(circle, rgba(185, 175, 122, 0.18) 0%, transparent 70%)' }}></div>
            <div className="absolute top-1/3 -left-32 w-80 h-80 rounded-full pointer-events-none z-1 transition-opacity duration-300" style={{ background: 'radial-gradient(circle, rgba(217, 119, 6, 0.15) 0%, transparent 70%)' }}></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-24 relative z-10">
                <div className="flex flex-col text-white lg:flex-row items-center gap-16">
                    {/* Middle: Focal Carousel with ProfileCards */}
                    <div className="flex-1 relative flex items-center justify-center min-h-150 perspective-[1500px]">

                        {/* Side Navigation Arrow - Left */}
                        <button
                            onClick={handlePrev}
                            aria-label="Previous Team Member"
                            className="absolute left-32 sm:left-0 lg:-left-16 top-1/2 -translate-y-1/2 z-[100] w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-[#B9AF7A] border border-white/30 hover:border-[#B9AF7A] text-white hover:text-slate-950 shadow-2xl backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group cursor-pointer"
                        >
                            <FiChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover:-translate-x-0.5" />
                        </button>

                        {/* Side Navigation Arrow - Right */}
                        <button
                            onClick={handleNext}
                            aria-label="Next Team Member"
                            className="absolute right-32 sm:right-0 lg:-right-16 top-1/2 -translate-y-1/2 z-[100] w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-[#B9AF7A] border border-white/30 hover:border-[#B9AF7A] text-white hover:text-slate-950 shadow-2xl backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group cursor-pointer"
                        >
                            <FiChevronRight className="w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover:translate-x-0.5" />
                        </button>

                        {/* Dynamic Background Glow */}
                        <motion.div
                            animate={{
                                backgroundColor: TEAM_MEMBERS[activeIndex].behindGlowColor,
                                opacity: 0.15,
                                scale: 1.2
                            }}
                            style={{
                                background: 'radial-gradient(circle, currentColor 0%, transparent 70%)'
                            }}
                            className="absolute inset-0 pointer-events-none rounded-full"
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        />
                        <div className="flex items-center justify-center w-full h-full relative">
                            {TEAM_MEMBERS.map((member, index) => {
                                // Calculate circular distance for infinite loop feel
                                const N = TEAM_MEMBERS.length;
                                let diff = index - activeIndex;
                                if (diff > N / 2) diff -= N;
                                if (diff < -N / 2) diff += N;

                                const absDiff = Math.abs(diff);
                                const isActive = index === activeIndex;

                                // Allow cards to be visible if they are within range in the circular loop
                                if (absDiff > 2) return null;

                                const xOffset = diff * (isMobile ? 180 : 260);
                                const scale = 1.15 - (absDiff * 0.25);
                                const zIndex = 50 - absDiff;
                                const opacity = 1 - (absDiff * 0.4);

                                return (
                                    <motion.div
                                        key={member.id}
                                        onClick={() => setActiveIndex(index)}
                                        initial={false}
                                        animate={{
                                            x: xOffset,
                                            scale: scale,
                                            z: isActive ? 100 : 0,
                                            opacity: opacity,
                                            filter: `grayscale(${isActive ? 0 : 100}%)`,
                                        }}
                                        transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
                                        style={{ zIndex }}
                                        className={`absolute cursor-pointer ${isActive ? 'w-[75vw] max-w-[310px] sm:max-w-none sm:w-92.5' : 'w-56 sm:w-70'}`}
                                    >
                                        <ProfileCard
                                            name={member.name}
                                            title={member.title}
                                            phone={member.phone}
                                            portfolioUrl={member.portfolioUrl}
                                            handle={member.handle}
                                            status={member.status}
                                            avatarUrl={member.avatarUrl}
                                            innerGradient={member.innerGradient}
                                            behindGlowColor={member.behindGlowColor}
                                            behindGlowEnabled={isActive}
                                            enableTilt={isActive}
                                            showUserInfo={isActive}
                                            reducedEffects={!isActive}
                                            className="w-full"
                                        />
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Pagination & Navigation Bar */}
                        <div className="absolute -bottom-14 flex items-center justify-center gap-4 sm:gap-6 z-50 bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-2xl">
                            <button
                                onClick={handlePrev}
                                aria-label="Previous"
                                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-[#B9AF7A] border border-white/20 hover:border-[#B9AF7A] text-white hover:text-slate-950 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer shrink-0"
                            >
                                <FiChevronLeft className="w-5 h-5" />
                            </button>

                            <div className="flex items-center gap-2.5 font-bold">
                                {TEAM_MEMBERS.map((_, i) => (
                                    <span
                                        key={i}
                                        onClick={() => setActiveIndex(i)}
                                        className={`text-sm cursor-pointer transition-all duration-300 ${i === activeIndex ? 'text-lg text-[#B9AF7A] font-extrabold scale-125' : 'opacity-40 hover:opacity-100 text-white'}`}
                                    >
                                        {i + 1}
                                    </span>
                                ))}
                            </div>

                            <div className="relative w-28 sm:w-40 h-1 bg-white/20 rounded-full overflow-hidden hidden sm:block">
                                <motion.div
                                    animate={{ x: `${(activeIndex / (TEAM_MEMBERS.length - 1)) * 100}%` }}
                                    className="absolute inset-0 bg-[#B9AF7A] transition-transform duration-500 origin-left rounded-full"
                                    style={{ width: `${100 / TEAM_MEMBERS.length}%` }}
                                />
                            </div>

                            <button
                                onClick={handleNext}
                                aria-label="Next"
                                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-[#B9AF7A] border border-white/20 hover:border-[#B9AF7A] text-white hover:text-slate-950 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer shrink-0"
                            >
                                <FiChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default memo(Team);