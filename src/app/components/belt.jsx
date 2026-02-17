"use client";
import React, { memo } from "react";
import { motion } from "framer-motion";

const Belt = () => {
    return (
        <section className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
            {/* Background Image / Placeholder with Overlay */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop')",
                    }}
                />
                {/* Black Overlay */}
                <div className="absolute inset-0 bg-black/60 z-1" />
                <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black/80 z-1" />
                {/* Animated Accent Line - Using Secondary Color #B9AF7A */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#B9AF7A] to-transparent opacity-50" />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                        Building the <span className="text-[#B9AF7A]">Future</span> Together
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed font-medium">
                        Revolutionizing digital solutions through innovative design, cutting-edge technology,
                        and a relentless pursuit of excellence.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-[#B9AF7A] hover:bg-[#a69d6b] text-[#01333E] font-bold rounded-2xl transition-all duration-300 shadow-xl shadow-[#B9AF7A]/10"
                    >
                        Explore Our Solutions
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default memo(Belt);