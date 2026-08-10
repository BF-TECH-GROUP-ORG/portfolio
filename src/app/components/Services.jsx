'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { LuSmartphone, LuLayers, LuPalette, LuChartPie, LuMoveRight, LuImage, LuSettings, LuShieldCheck } from 'react-icons/lu';

const SERVICES_DATA = [
    {
        icon: <LuSmartphone className="text-3xl" />,
        title: "Mobile App Development",
        description: "We build fast, secure Android and iOS apps designed to scale and drive business growth.",
        accent: false
    },
    {
        icon: <LuLayers className="text-3xl" />,
        title: "Web Development",
        description: "We create modern, responsive, and secure websites built for performance and scalability.",
        accent: false
    },
    {
        icon: <LuPalette className="text-3xl" />,
        title: "UI/UX Design",
        description: "We design intuitive interfaces that improve usability and elevate digital experiences.",
        accent: false
    },
    {
        icon: <LuImage className="text-3xl" />,
        title: "Graphic Design & Branding",
        description: "We craft strong visual identities that communicate clearly and build lasting brand recognition.",
        accent: false
    },
    {
        icon: <LuSettings className="text-3xl" />,
        title: "IT Consulting & Strategy",
        description: "We provide expert guidance to help you choose and implement the right technology solutions.",
        accent: false
    },
    {
        icon: <LuShieldCheck className="text-3xl" />,
        title: "System Integration & Support",
        description: "We integrate and maintain your systems to ensure performance, security, and reliability.",
        accent: false
    }
];

const Services = () => {



    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 20
            }
        }
    };

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background Decorative Shapes */}
            <div className="absolute top-[10%] right-[5%] w-32 h-32 opacity-[0.08] pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#01333E] in-data-[theme='dark']:text-[#B9AF7A]">
                    <polygon points="50,5 95,95 5,95" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 4" />
                </svg>
            </div>
            <div className="absolute bottom-[10%] left-[5%] w-24 h-24 opacity-10 pointer-events-none">
                <div className="w-full h-full border-[1.5px] border-[#B9AF7A] rounded-full border-dashed animate-spin-slow"></div>
            </div>

            <motion.div
                className="container mx-auto px-6 md:px-12 lg:px-24"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                {/* Header: Split 2-column layout */}
                <div className="flex flex-col items-center text-center mb-24">

  {/* Preheader Badge */}
  <motion.div
    variants={itemVariants}
    className="
      mb-6 px-6 py-2 rounded-full text-xs font-semibold tracking-wider uppercase
      bg-[#B9AF7A]/10 text-[#B9AF7A]
      border border-[#B9AF7A]/20
      in-data-[theme='dark']:bg-[#B9AF7A]/10
      in-data-[theme='dark']:border-[#B9AF7A]/30
    "
  >
    Digital Expertise
  </motion.div>

  {/* Main Header */}
  <motion.h2
    variants={itemVariants}
    className="
      text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]
      text-[#01333E]
      in-data-[theme='dark']:text-white
      max-w-4xl
    "
  >
    Powerful Digital Solutions{" "}
    <span className="text-[#B9AF7A]">
      Built for Growth
    </span>
  </motion.h2>

  {/* Sub Header */}
  

</div>


                {/* Grid: 4-column layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-6">
                    {SERVICES_DATA.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className={`group p-10 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border transition-all duration-500 flex flex-col gap-8 h-full relative overflow-hidden
                                ${service.accent
                                    ? 'bg-[#01333E]/2 in-data-[theme="dark"]:bg-[#B9AF7A]/5 border-[#B9AF7A]/20'
                                    : 'bg-white in-data-[theme="dark"]:bg-transparent border-gray-100 in-data-[theme="dark"]:border-zinc-800'}`}
                        >
                                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500 
                                    ${service.accent    
                                        ? ' '    
                                        : 'text-gray-900 in-data-[theme="dark"]:text-white'}`
                                        }>
                                    {service.icon}
                                </div>

                            <div className="flex flex-col gap-3">
                                <h3 className={`text-xl font-bold transition-colors duration-500 leading-tight
                                    ${service.accent
                                        ? 'text-[#01333E] in-data-[theme="dark"]:text-[#B9AF7A]'
                                        : 'text-gray-900 in-data-[theme="dark"]:text-white'}`}>
                                    {service.title}
                                </h3>
                                <p className="text-sm text-gray-500 in-data-[theme='dark']:text-zinc-400 leading-relaxed font-medium">
                                    {service.description}
                                </p>
                            </div>

                            {/* <div className="mt-auto pt-4">
                                <button className={`flex items-center gap-2 transition-all duration-300 group-hover:gap-4 font-bold text-sm
                                    ${service.accent
                                        ? 'text-[#B9AF7A]'
                                        : 'text-gray-400 group-hover:text-[#01333E] [[data-theme="dark"]_&]:group-hover:text-[#B9AF7A]'}`}>
                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">Learn Details</span>
                                    <LuMoveRight className="text-2xl" />
                                </button>
                            </div> */}

                            {/* Accent card subtle glow */}
                            {service.accent && (
                                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#B9AF7A] opacity-[0.07] blur-2xl rounded-full"></div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            {/* <motion.p
    variants={itemVariants}
    className=" text-center flex items-center justify-center    
      mt-6 text-lg max-w-2xl
      text-gray-500
      [[data-theme='dark']_&]:text-zinc-400
      font-medium leading-relaxed
    "
  >
    Combining strategy, design, and advanced development to create reliable digital products that elevate performance and accelerate success.
  </motion.p> */}

            <style jsx>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 15s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default memo(Services);
