'use client';

import { useState, memo, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FiSearch,
  FiArrowUpRight,
  FiCheckCircle,
  FiCode,
  FiBriefcase,
  FiShoppingBag,
  FiGlobe,
  FiSmartphone,
  FiCpu,
  FiCloud,
  FiBarChart2,
  FiAward,
  FiSliders,
  FiInfo
} from 'react-icons/fi';

const CATEGORIES = [
  'All',
  'Software & Apps',
  'Business Operations',
  'Commerce & Web',
  'Cloud & Data',
  'Tech Training & Hub'
];

const SOLUTIONS_DATA = [
  {
    id: '01',
    number: '01',
    category: 'Software & Apps',
    title: 'Custom Software Solutions',
    description: "Tailored software designed around your company's specific workflows, requirements, and growth goals.",
    icon: <FiCode className="w-6 h-6 text-(--navbar-text)" />,
    includes: [
      'Business management systems',
      'Enterprise applications',
      'Internal tools',
      'Custom platforms',
      'Workflow automation'
    ]
  },
  {
    id: '02',
    number: '02',
    category: 'Business Operations',
    title: 'Business Management Solutions',
    description: 'Digitize and centralize your day-to-day business operations for maximum clarity.',
    icon: <FiBriefcase className="w-6 h-6 text-(--navbar-text)" />,
    includes: [
      'Inventory management',
      'Sales & POS systems',
      'HR management',
      'Accounting integrations',
      'CRM & Procurement',
      'Reporting & analytics'
    ]
  },
  {
    id: '03',
    number: '03',
    category: 'Commerce & Web',
    title: 'E-Commerce Solutions',
    description: 'Build scalable digital commerce experiences for businesses ready to sell online.',
    icon: <FiShoppingBag className="w-6 h-6 text-(--navbar-text)" />,
    includes: [
      'Online stores',
      'Multi-vendor marketplaces',
      'Payment gateway integration',
      'Order & inventory management',
      'Customer accounts & delivery'
    ]
  },
  {
    id: '04',
    number: '04',
    category: 'Commerce & Web',
    title: 'Web & Digital Platforms',
    description: 'High-performance web applications designed to attract, engage and convert customers.',
    icon: <FiGlobe className="w-6 h-6 text-(--navbar-text)" />,
    includes: [
      'Corporate websites',
      'Booking platforms',
      'Customer portals',
      'SaaS platforms',
      'Custom web applications'
    ]
  },
  {
    id: '05',
    number: '05',
    category: 'Software & Apps',
    title: 'Mobile Solutions',
    description: 'Mobile experiences that keep your customers and enterprise teams connected anywhere.',
    icon: <FiSmartphone className="w-6 h-6 text-(--navbar-text)" />,
    includes: [
      'Android applications',
      'iOS applications',
      'Cross-platform apps',
      'Business mobile apps',
      'Customer applications'
    ]
  },
  {
    id: '06',
    number: '06',
    category: 'Business Operations',
    title: 'Automation & Integration',
    description: 'Connect your systems and automate repetitive business processes seamlessly.',
    icon: <FiCpu className="w-6 h-6 text-(--navbar-text)" />,
    includes: [
      'API integrations',
      'Payment gateways (MoMo & Cards)',
      'SMS & email integrations',
      'WhatsApp automation',
      'Third-party & workflow automation'
    ]
  },
  {
    id: '07',
    number: '07',
    category: 'Cloud & Data',
    title: 'Cloud & Digital Transformation',
    description: 'Modernize infrastructure and move your business toward scalable digital operations.',
    icon: <FiCloud className="w-6 h-6 text-(--navbar-text)" />,
    includes: [
      'Cloud migration & deployment',
      'Infrastructure architecture',
      'CI/CD deployment pipelines',
      'System modernization',
      'High-availability scalability'
    ]
  },
  {
    id: '08',
    number: '08',
    category: 'Cloud & Data',
    title: 'Data & Analytics',
    description: 'Turn raw business data into actionable insights for smarter executive decisions.',
    icon: <FiBarChart2 className="w-6 h-6 text-(--navbar-text)" />,
    includes: [
      'Business dashboards',
      'Custom reporting',
      'Data visualization',
      'Analytics systems',
      'KPI tracking & metrics'
    ]
  },
  {
    id: '09',
    number: '09',
    category: 'Tech Training & Hub',
    title: 'BF Tech Hub (Academy & Training)',
    description: 'Empowering talents and tech teams with practical training in software development, UI/UX design, cloud, and digital skills.',
    icon: <FiAward className="w-6 h-6 text-(--navbar-text)" />,
    includes: [
      'Software development bootcamps',
      'UI/UX design training',
      'Cloud & DevOps workshops',
      'Corporate tech upskilling',
      'Career & internship programs',
      'Tech hub co-working & community'
    ]
  }
];

const SolutionsComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSolutions = useMemo(() => {
    return SOLUTIONS_DATA.filter((sol) => {
      const matchesCat = selectedCategory === 'All' || sol.category === selectedCategory;
      const matchesSearch = sol.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sol.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sol.includes.some(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <section className="py-20 bg-background text-(--navbar-text) relative overflow-hidden transition-colors duration-300">
      {/* Ambient Background Glow Bubbles */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full pointer-events-none transition-opacity duration-300" style={{ background: 'radial-gradient(circle, rgba(185, 175, 122, 0.15) 0%, transparent 70%)' }} />

      <div className="max-w-350 mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header Section: 2-Column Split (Left: Text & Search | Right: Solutions Illustration with Ambient Glow) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14">
          {/* Left Column (Text & Search) */}
          <div className="lg:col-span-7 text-left">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#B9AF7A] bg-[#B9AF7A]/10 border border-[#B9AF7A]/20 uppercase mb-4">
              Enterprise Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Our <span className="text-[#B9AF7A]">Business Solutions</span>
            </h2>
            <p className="text-sm sm:text-base text-(--navbar-text) opacity-70 leading-relaxed font-medium mb-8 max-w-2xl">
              Purpose-built digital products engineered to solve operational bottlenecks, increase revenue, and scale enterprise growth.
            </p>

            {/* Full-width Search Bar with Card Border & Category Dropdown */}
            <div className="w-full max-w-xl bg-(--navbar-bg) border  border-[#B9AF7A]/60 rounded-2xl sm:rounded-[28px] px-4 sm:px-5 py-3 shadow-lg flex items-center justify-between gap-3 transition-all duration-300 group">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="text-(--navbar-text) opacity-50 flex items-center justify-center shrink-0">
                  <FiSearch className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search our solutions (e.g. POS, CRM, Training)..."
                  className="w-full bg-transparent border-none text-sm text-(--navbar-text) placeholder-(--navbar-text) placeholder-opacity-50 focus:outline-none py-1 font-medium min-w-0"
                />
              </div>

              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="text-xs text-(--navbar-text) opacity-60 hover:opacity-100 bg-white/10 px-3 py-1 rounded-full cursor-pointer shrink-0"
                >
                  Clear
                </button>
              )}

              {/* Category Filter Dropdown */}
              <div className="flex items-center gap-2 text-xs font-bold text-[#B9AF7A] bg-[#B9AF7A]/10 border border-[#B9AF7A]/20 px-3 py-1.5 rounded-full shrink-0">
                <FiSliders className="w-3.5 h-3.5 text-[#B9AF7A]" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  aria-label="Filter Solutions by Category"
                  className="bg-transparent text-[#B9AF7A] font-bold focus:outline-none cursor-pointer text-xs"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat} className="bg-slate-900 text-white font-medium">
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image with Ambient Radial Glow Bubbling Behind It */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative group">
            {/* Ambient Radial Glow Bubbling Behind the Image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-tr from-[#B9AF7A]/30 via-amber-500/20 to-transparent rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-700 opacity-85 z-0" />

            {/* Clean Floating Illustration (No Boxed Container) */}
            <Image
              src="/images/solutions.png"
              alt="Kigali BF Tech Group Solutions Illustration"
              width={600}
              height={450}
              className="w-full max-w-md lg:max-w-full h-auto object-contain relative z-10 drop-shadow-2xl group-hover:scale-103 transition-transform duration-500"
              priority
            />
          </div>
        </div>

        {/* Full Screen Edge-to-Edge Category Navigation Bar Strip */}
        <div className="w-screen relative left-1/2 right-1/2 border-white/15 -ml-[50vw] -mr-[50vw] bg-(--navbar-bg) border-y  py-4 mb-14 shadow-xl backdrop-blur-xl z-20">
          <div className="max-w-350 w-full mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-start overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2.5 sm:gap-3 whitespace-nowrap min-w-max">
              {CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-gradient-to-r from-[#B9AF7A] to-amber-500 text-slate-950 font-extrabold shadow-lg shadow-[#B9AF7A]/25 scale-105'
                        : 'bg-white/5 hover:bg-white/10 border border-white/10 text-(--navbar-text) opacity-70 hover:opacity-100'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Solutions Grid - 3 Cards Per Row */}
        {filteredSolutions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredSolutions.map((sol) => (
              <motion.div
                key={sol.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-(--navbar-bg) border border-(--navbar-border) hover:border-white/40 rounded-[28px] p-7 sm:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden min-h-96"
              >
                <div>
                  {/* Top Circle Icon & Number */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="w-12 h-12 rounded-full border border-(--navbar-border) bg-white/5 flex items-center justify-center text-(--navbar-text) transition-colors">
                      {sol.icon}
                    </div>
                    <span className="text-(--navbar-text) opacity-50 font-extrabold text-xs tracking-widest font-mono">
                      {sol.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-(--navbar-text) mb-2.5 leading-snug">
                    {sol.title}
                  </h3>

                  {/* Tagline Description */}
                  <p className="text-xs sm:text-sm text-(--navbar-text) opacity-65 leading-relaxed font-medium pb-5 border-b border-(--navbar-border)/60 mb-5">
                    {sol.description}
                  </p>

                  {/* Includes List */}
                  <div className="mb-6">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-(--navbar-text) opacity-60 mb-3">
                      Key Capabilities Included:
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {sol.includes.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-(--navbar-text) opacity-80 font-medium">
                          <FiCheckCircle className="w-3.5 h-3.5 text-(--navbar-text) opacity-50 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA Link (Solid White/Black Pill Button matching WhyUs.jsx) */}
                <div className="pt-5 border-t border-(--navbar-border)/60 mt-auto">
                  <Link
                    href={`/ContactUs?type=Solution&item=${encodeURIComponent(sol.title)}`}
                    className="w-full bg-white text-slate-950 hover:bg-slate-200 font-extrabold px-5 py-3 rounded-full text-xs flex items-center justify-center gap-2 transition-all duration-300 shadow-md no-underline group/btn cursor-pointer"
                  >
                    <span>Request Solution</span>
                    <FiArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-(--navbar-bg) rounded-3xl border border-(--navbar-border)">
            <FiInfo className="w-10 h-10 text-[#B9AF7A] mx-auto mb-3 opacity-80" />
            <h4 className="text-lg font-bold mb-1">No business solutions found</h4>
            <p className="text-xs text-(--navbar-text) opacity-60">Try searching for a different keyword or select another category filter.</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default memo(SolutionsComponent);
