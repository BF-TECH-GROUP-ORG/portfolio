'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import {
    EditNoteOutlined,
    OpenInFullOutlined,
    SavedSearchOutlined,
    CodeOutlined,
    ThumbUpOutlined,
    CheckCircleOutlined,
    BookmarkBorderOutlined,
    ArrowForwardOutlined
} from '@mui/icons-material';

const FEATURES_DATA = [
    {
        icon: <EditNoteOutlined sx={{ fontSize: 24 }} />,
        title: "Creative Expertise",
        subtitle: "Updated 1 day ago",
        description: "Unique designs tailored to your brand, captivating users with innovative visuals.",
        tags: ["Creative", "Design"],
        price: "$99/hr"
    },
    {
        icon: <OpenInFullOutlined sx={{ fontSize: 24 }} />,
        title: "Responsive Designs",
        subtitle: "Active now",
        description: "Ensuring seamless experiences across all devices, maximizing user engagement.",
        tags: ["Mobile", "UX"],
        price: "$85/hr"
    },
    {
        icon: <SavedSearchOutlined sx={{ fontSize: 24 }} />,
        title: "SEO Optimization",
        subtitle: "5 days ago",
        description: "Elevating your online presence with strategies that boost search engine rankings.",
        tags: ["SEO", "Growth"],
        price: "$120/hr"
    },
    {
        icon: <CodeOutlined sx={{ fontSize: 24 }} />,
        title: "Custom Solutions",
        subtitle: "Available now",
        description: "Crafting bespoke websites that meet your specific needs and functionality.",
        tags: ["React", "Next.js"],
        price: "$150/hr"
    },
    {
        icon: <ThumbUpOutlined sx={{ fontSize: 24 }} />,
        title: "Quick Turnaround",
        subtitle: "Express delivery",
        description: "Meeting deadlines consistently, providing reliable services without compromise.",
        tags: ["Fast", "Reliable"],
        price: "$75/hr"
    },
    {
        icon: <CheckCircleOutlined sx={{ fontSize: 24 }} />,
        title: "Exceptional Support",
        subtitle: "24/7 Support",
        description: "Dedicated assistance during and after project completion, ensuring success.",
        tags: ["Support", "Expert"],
        price: "Free"
    }
];

const WhyUs = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 60, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 60,
                damping: 20,
                duration: 1
            }
        }
    };

    return (
        <section className="py-24 bg-background min-h-screen flex items-center overflow-hidden">
            <motion.div
                className="container mx-auto px-6 md:px-12 lg:px-24"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                <motion.div className="text-start mb-16 px-4" variants={itemVariants}>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 [[data-theme='dark']_&]:text-white mb-6 tracking-tight">
                        Why Choose Us <br className="hidden md:block" />
                    </h2>
                    <p className="text-xl text-gray-500 [[data-theme='dark']_&]:text-zinc-400 font-medium mx-auto">
                        Reliable technology. Real business impact.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {FEATURES_DATA.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group bg-white [[data-theme='dark']_&]:bg-transparent border-2 border-gray-100 [[data-theme='dark']_&]:border-zinc-800 rounded-[40px] p-8 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col gap-6 relative overflow-hidden h-full"
                        >
                            {/* Top Section */}
                            <div className="flex justify-between items-start">
                                <div className="w-14 h-14 rounded-full flex items-center justify-center border [[data-theme='dark']_&]:border-zinc-700 text-gray-900 [[data-theme='dark']_&]:text-white group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                            </div>

                            {/* Middle Section */}
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <h3 className="text-xl font-bold text-gray-900 [[data-theme='dark']_&]:text-white">{feature.title}</h3>
                                </div>
                                <p className="text-sm text-gray-500 [[data-theme='dark']_&]:text-zinc-400 leading-relaxed line-clamp-2">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Tags Section */}
                            <div className="flex flex-wrap gap-2">
                                {feature.tags.map((tag, tIdx) => (
                                    <span key={tIdx} className="px-4 py-1.5 rounded-full bg-gray-50 [[data-theme='dark']_&]:bg-zinc-800/30 text-xs font-semibold text-gray-600 [[data-theme='dark']_&]:text-zinc-300 border border-transparent hover:border-gray-200 [[data-theme='dark']_&]:hover:border-zinc-700 transition-all cursor-default">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default memo(WhyUs);   