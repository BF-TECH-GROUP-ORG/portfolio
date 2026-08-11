'use client';
import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-4 right-4 z-50"
    >
      <a
        href="https://wa.me/250789321535"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center p-4 group"
        aria-label="Contact us on WhatsApp"
      >
        {/* Animated Background Glow */}
        <div className="absolute inset-0 bg-[#25D366]/20 rounded-full blur-xl group-hover:bg-[#25D366]/40 transition-colors duration-500" />

        {/* Circular Progress Stroke */}
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 70 70">
          {/* Static Track */}
          <circle
            cx="35"
            cy="35"
            r="30"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="text-zinc-100/10"
          />
          {/* Animated Progress */}
          <motion.circle
            cx="35"
            cy="35"
            r="30"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            style={{
              pathLength: scrollYProgress,
            }}
            className="text-[#25D366]"
          />
        </svg>

        {/* Whatsapp Button Inner */}
        <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-all duration-500 border border-white/20">
          <FaWhatsapp className="text-3xl" />
        </div>

        {/* Hover Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-zinc-900 text-white text-xs font-bold rounded-lg  opacity-100 transition-opacity whitespace-nowrap pointer-events-none capitalize tracking-widest">
          let's talk
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-zinc-900" />
        </div>
      </a>
    </motion.div>
  );
};

export default WhatsAppButton;