'use client';

import { useState, memo, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import ProfileCard from './ProfileCard';

const TEAM_MEMBERS = [
    {
        id: 0,
        name: "BARAKA Joshua",
        title: "MD,FrontEnd & UI/UX",
        phone: "+250 789 411 780",
        portfolioUrl: "https://barakajoshua.vercel.app/",
        handle: "baraka_j",
        status: "Online",
        avatarUrl: "/images/josh.jpeg",
        innerGradient: "linear-gradient(145deg, #ef44448c 0%, #B9AF7A44 100%)",
        behindGlowColor: "rgba(239, 68, 68, 0.4)"
    },
    {
        id: 1,
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
        id: 2,
        name: "RURANGWA Yesaya",
        title: "FrontEnd Developer",
        phone: "+250 793 082 769",
        portfolioUrl: "https://yesaya-portfolio.com",
        handle: "yesaya_tech",
        status: "In a meeting",
        avatarUrl: "/images/isiah.jpeg",
        innerGradient: "linear-gradient(145deg, #eab3088c 0%, #B9AF7A44 100%)",
        behindGlowColor: "rgba(234, 179, 8, 0.4)"
    },
    {
        id: 3,
        name: "NGABONZIZA Marc",
        title: "FrontEnd & UI/UX",
        phone: "+250 798 420 126",
        portfolioUrl: "https://ngabonzizamarc.vercel.app/",
        handle: "marc_codes",
        status: "Online",
        avatarUrl: "/images/marc.jpeg",
        innerGradient: "linear-gradient(145deg, #01333e8c 0%, #71C4FF44 100%)",
        behindGlowColor: "rgba(1, 51, 62, 0.4)"
    },
    {
        id: 4,
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
        id: 5,
        name: "BAHIRWA Frank",
        title: "CEO & FullStack Developer",
        phone: "+250 798 725 288",
        portfolioUrl: "https://bahirwa-frank.vercel.app/",
        handle: "frank_design",
        status: "Online",
        avatarUrl: "/images/frank.jpeg",
        innerGradient: "linear-gradient(145deg, #1f29378c 0%, #B9AF7A44 100%)",
        behindGlowColor: "rgba(31, 41, 55, 0.4)"
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
        avatarUrl: "/images/arnold.jpeg",
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
        },
    ];
const AUTO_SCROLL_INTERVAL = 4000;

const Team = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const [isPaused, setIsPaused] = useState(false);

    const nextMember = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % TEAM_MEMBERS.length);
    }, []);

    useEffect(() => {
        if (isPaused) return;

        const timer = setInterval(nextMember, AUTO_SCROLL_INTERVAL);
        return () => clearInterval(timer);
    }, [isPaused, nextMember]);

    return (
        <section
            className="py-24 min-h-screen overflow-hidden relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{
                backgroundImage: 'url(/images/team-background.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Dark overlay for better contrast */}
            <div className="absolute inset-0 bg-black/80 z-0" />

            <div className="container mx-auto px-6 lg:px-24 relative z-10">
                <div className="flex flex-col text-white lg:flex-row items-center gap-16">
                    {/* Left Side: Text Branding */}
                    <div className="lg:w-1/4 space-y-4">
                        <h3 className="text-5xl font-bold tracking-tight leading-tight">
                            Meet the<br />
                            Architects of<br />
                            <span className='text-[#B9AF7A]'>Innovation</span>
                        </h3>
                        <p className="text-lg  text-white/40 font-medium leading-relaxed">
                            Our team of experts is dedicated to building the future of technology.
                            <br /><br />

                        </p>
                    </div>

                    {/* Middle: Focal Carousel with ProfileCards */}
                    <div className="flex-1 relative flex items-center justify-center min-h-[600px] perspective-[1500px]">
                        {/* Dynamic Background Glow - Simplified for performance */}
                        <motion.div
                            animate={{
                                backgroundColor: TEAM_MEMBERS[activeIndex].behindGlowColor,
                                opacity: 0.15,
                                scale: 1.2
                            }}
                            className="absolute inset-0 pointer-events-none blur-[120px] rounded-full"
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

                                const xOffset = diff * 220; // Spatial distribution
                                const scale = 1.15 - (absDiff * 0.25);
                                const zIndex = 50 - absDiff;
                                const opacity = 1 - (absDiff * 0.4);
                                const blur = absDiff * 2;

                                return (
                                    <motion.div
                                        key={member.id}
                                        onClick={() => {
                                            setActiveIndex(index);
                                            setIsPaused(true);
                                        }}
                                        initial={false}
                                        animate={{
                                            x: xOffset,
                                            scale: scale,
                                            z: isActive ? 100 : 0,
                                            opacity: opacity,
                                            filter: `grayscale(${isActive ? 0 : 100}%)`,
                                        }}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        style={{ zIndex }}
                                        className={`absolute cursor-pointer transition-all duration-500
                                            ${isActive ? 'w-[320px]' : 'w-[240px]'}`}
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

                        {/* Pagination Indicator */}
                        <div className="absolute -bottom-10 right-0 flex items-center gap-8">
                            <div className="flex items-center gap-1 font-bold text-lg">
                                {TEAM_MEMBERS.map((_, i) => (
                                    <span
                                        key={i}
                                        onClick={() => {
                                            setActiveIndex(i);
                                            setIsPaused(true);
                                        }}
                                        className={`text-sm cursor-pointer transition-all duration-300 ${i === activeIndex ? 'text-2xl translate-y-[-2px] text-red-600' : 'opacity-20 hover:opacity-100'}`}
                                    >
                                        {i + 1}
                                    </span>
                                ))}
                            </div>
                            <div className="relative w-48 h-[2px] bg-foreground/10 overflow-hidden">
                                <motion.div
                                    animate={{ x: `${(activeIndex / (TEAM_MEMBERS.length - 1)) * 100}%` }}
                                    className="absolute inset-0 bg-red-600  transition-transform duration-500 origin-left"
                                    style={{ width: `${100 / TEAM_MEMBERS.length}%` }}
                                />
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </section>
    );
};

export default memo(Team);