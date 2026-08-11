'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiLaravel,
  SiSymfony,
  SiPython,
  SiDjango,
  SiFastapi,
  SiSpringboot,
  SiFlutter,
  SiDart,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiGithubactions,
  SiLinux,
  SiVercel,
  SiDigitalocean,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiGitlab,
  SiNginx,
  SiCloudflare,
  SiSocketdotio,
  SiRabbitmq,
  SiSwagger,
  SiFigma,
  SiAdobe,
  SiGit,
  SiGithub
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';
import { FiSearch, FiSliders, FiChevronDown } from 'react-icons/fi';

const CATEGORIES = [
  'All',
  'Frontend',
  'Backend',
  'Mobile',
  'Databases',
  'DevOps & Cloud',
  'APIs & Communication',
  'Design',
  'Version Control'
];

const TECHNOLOGIES_DATA = [
  // Frontend
  { name: 'React', category: 'Frontend', level: 95, icon: SiReact, desc: 'Component-driven UI architecture', color: '#61DAFB' },
  { name: 'Next.js', category: 'Frontend', level: 92, icon: SiNextdotjs, desc: 'Full-stack React framework with SSR & SSG', color: '#000000' },
  { name: 'Vue.js', category: 'Frontend', level: 90, icon: SiVuedotjs, desc: 'Progressive JavaScript framework for building user interfaces', color: '#4FC08D' },
  { name: 'HTML5', category: 'Frontend', level: 98, icon: SiHtml5, desc: 'Semantic web layout & accessible structure', color: '#E34F26' },
  { name: 'CSS3', category: 'Frontend', level: 95, icon: SiCss3, desc: 'Modern responsive styling & CSS animations', color: '#1572B6' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 96, icon: SiTailwindcss, desc: 'Utility-first scalable design system', color: '#06B6D4' },
  { name: 'JavaScript', category: 'Frontend', level: 96, icon: SiJavascript, desc: 'Modern ES6+ dynamic client/server logic', color: '#F7DF1E' },

  // Backend
  { name: 'Java', category: 'Backend', level: 92, icon: FaJava, desc: 'Enterprise object-oriented programming language & JVM ecosystem', color: '#ED8B00' },
  { name: 'Spring Boot', category: 'Backend', level: 90, icon: SiSpringboot, desc: 'Production-ready Java framework for microservices & cloud apps', color: '#6DB33F' },
  { name: 'PHP', category: 'Backend', level: 88, icon: SiPhp, desc: 'Robust server-side scripting engine', color: '#777BB4' },
  { name: 'Laravel', category: 'Backend', level: 90, icon: SiLaravel, desc: 'Elegant PHP enterprise web application framework', color: '#FF2D20' },
  { name: 'Symfony', category: 'Backend', level: 88, icon: SiSymfony, desc: 'High-performance PHP framework & reusable component library', color: '#000000' },
  { name: 'Python', category: 'Backend', level: 94, icon: SiPython, desc: 'High-level programming language for backend, automation & AI', color: '#3776AB' },
  { name: 'Django', category: 'Backend', level: 92, icon: SiDjango, desc: 'Batteries-included Python web framework for rapid development', color: '#092E20' },
  { name: 'FastAPI', category: 'Backend', level: 90, icon: SiFastapi, desc: 'Modern high-performance Python framework for building REST APIs', color: '#009688' },
  { name: 'Node.js', category: 'Backend', level: 92, icon: SiNodedotjs, desc: 'Event-driven asynchronous backend runtime', color: '#339933' },
  { name: 'Express.js', category: 'Backend', level: 90, icon: SiExpress, desc: 'Fast minimal RESTful web framework', color: '#000000' },

  // Mobile
  { name: 'React Native', category: 'Mobile', level: 92, icon: SiReact, desc: 'Cross-platform native iOS & Android mobile application framework', color: '#61DAFB' },
  { name: 'Flutter', category: 'Mobile', level: 90, icon: SiFlutter, desc: 'Cross-platform native mobile UI toolkit', color: '#02569B' },
  { name: 'Dart', category: 'Mobile', level: 88, icon: SiDart, desc: 'Client-optimized object-oriented language', color: '#0175C2' },

  // Databases
  { name: 'PostgreSQL', category: 'Databases', level: 92, icon: SiPostgresql, desc: 'Advanced relational SQL database engine', color: '#4169E1' },
  { name: 'MySQL', category: 'Databases', level: 90, icon: SiMysql, desc: 'Reliable enterprise relational database management', color: '#4479A1' },
  { name: 'MongoDB', category: 'Databases', level: 88, icon: SiMongodb, desc: 'High-performance NoSQL document database', color: '#47A248' },
  { name: 'Redis', category: 'Databases', level: 86, icon: SiRedis, desc: 'In-memory data structure store & cache cluster', color: '#DC382D' },

  // DevOps & Cloud
  { name: 'DevOps & CI/CD', category: 'DevOps & Cloud', level: 94, icon: SiGithubactions, desc: 'Automated continuous integration, testing & deployment pipelines', color: '#B9AF7A' },
  { name: 'Docker', category: 'DevOps & Cloud', level: 92, icon: SiDocker, desc: 'Containerization & isolated application stack management', color: '#2496ED' },
  { name: 'Kubernetes', category: 'DevOps & Cloud', level: 88, icon: SiKubernetes, desc: 'Enterprise container orchestration & automated auto-scaling', color: '#326CE5' },
  { name: 'AWS (Amazon Cloud)', category: 'DevOps & Cloud', level: 90, icon: FaAws, desc: 'Scalable cloud infrastructure, S3, EC2 & cloud hosting', color: '#FF9900' },
  { name: 'Terraform (IaC)', category: 'DevOps & Cloud', level: 86, icon: SiTerraform, desc: 'Infrastructure as Code provisioning & multi-cloud deployment', color: '#7B42BC' },
  { name: 'Jenkins', category: 'DevOps & Cloud', level: 85, icon: SiJenkins, desc: 'Automated open-source continuous integration server', color: '#D24939' },
  { name: 'GitLab CI/CD', category: 'DevOps & Cloud', level: 88, icon: SiGitlab, desc: 'End-to-end DevOps platform & automated pipeline runner', color: '#FC6D26' },
  { name: 'Nginx', category: 'DevOps & Cloud', level: 92, icon: SiNginx, desc: 'High-performance web server, reverse proxy & load balancer', color: '#009639' },
  { name: 'Cloudflare', category: 'DevOps & Cloud', level: 94, icon: SiCloudflare, desc: 'Global CDN, DDoS security mitigation & DNS management', color: '#F38020' },
  { name: 'Linux', category: 'DevOps & Cloud', level: 96, icon: SiLinux, desc: 'Enterprise Linux administration, security hardening & bash', color: '#FCC624' },
  { name: 'Vercel', category: 'DevOps & Cloud', level: 95, icon: SiVercel, desc: 'Edge cloud hosting & serverless frontend deployment', color: '#000000' },
  { name: 'DigitalOcean', category: 'DevOps & Cloud', level: 90, icon: SiDigitalocean, desc: 'Cloud infrastructure & scalable Linux VPS droplets', color: '#0080FF' },

  // APIs & Communication
  { name: 'REST APIs', category: 'APIs & Communication', level: 96, icon: TbApi, desc: 'Standardized HTTP integration endpoints & enterprise microservices', color: '#B9AF7A' },
  { name: 'Swagger / OpenAPI', category: 'APIs & Communication', level: 94, icon: SiSwagger, desc: 'Interactive API documentation, testing schemas & contract specification', color: '#85EA2D' },
  { name: 'WebSockets', category: 'APIs & Communication', level: 88, icon: SiSocketdotio, desc: 'Real-time bidirectional event streaming & live data sync', color: '#010101' },
  { name: 'RabbitMQ', category: 'APIs & Communication', level: 85, icon: SiRabbitmq, desc: 'Enterprise message broker & queueing engine for asynchronous tasks', color: '#FF6600' },

  // Design
  { name: 'Figma', category: 'Design', level: 94, icon: SiFigma, desc: 'Collaborative UI/UX design & interactive prototypes', color: '#F24E1E' },
  { name: 'Adobe Tools', category: 'Design', level: 88, icon: SiAdobe, desc: 'Creative Cloud graphics, vector & asset design', color: '#FF0000' },

  // Version Control
  { name: 'Git', category: 'Version Control', level: 96, icon: SiGit, desc: 'Distributed source code version control', color: '#F05032' },
  { name: 'GitHub', category: 'Version Control', level: 96, icon: SiGithub, desc: 'Collaborative code hosting, review & CI', color: '#181717' }
];

export default function TechnologiesComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isExpanded, setIsExpanded] = useState(false);

  const filteredTech = useMemo(() => {
    return TECHNOLOGIES_DATA.filter((item) => {
      const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  // Collapsed view limits to initial 14 items when in All view without search
  const visibleTech = useMemo(() => {
    if (isExpanded || selectedCategory !== 'All' || searchTerm.trim() !== '') {
      return filteredTech;
    }
    return filteredTech.slice(0, 14);
  }, [filteredTech, isExpanded, selectedCategory, searchTerm]);

  return (
    <section className="py-20 bg-background text-(--navbar-text) relative overflow-hidden transition-colors duration-300">
      {/* Ambient Background Glow Bubbles */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full pointer-events-none transition-opacity duration-300" style={{ background: 'radial-gradient(circle, rgba(185, 175, 122, 0.15) 0%, transparent 70%)' }} />

      <div className="max-w-350 mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Header Section: 2-Column Split (Left: Text & Search | Right: Illustration with Ambient Glow) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14">
          {/* Left Column (Text & Search) */}
          <div className="lg:col-span-7 text-left">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#B9AF7A] bg-[#B9AF7A]/10 border border-[#B9AF7A]/20 uppercase mb-4">
              OUR TECH STACK
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Technologies <span className="text-[#B9AF7A]">We Use</span>
            </h2>
            <p className="text-sm sm:text-base text-(--navbar-text) opacity-70 leading-relaxed font-medium mb-8 max-w-2xl">
              We select technologies based on your project's requirements, scalability, performance, security, and long-term maintainability.
            </p>

            {/* Full-width Search Bar with Gold Border & Category Dropdown */}
            <div className="w-full max-w-xl bg-(--navbar-bg) border border-[#B9AF7A]/60 rounded-2xl sm:rounded-[28px] px-4 sm:px-5 py-3 shadow-lg flex items-center justify-between gap-3 transition-all duration-300 group">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="text-(--navbar-text) opacity-50 flex items-center justify-center shrink-0">
                  <FiSearch className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search technologies (e.g. React, Docker, Python)..."
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
                  aria-label="Filter Technologies by Category"
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

            {/* Clean Floating Illustration */}
            <Image
              src="/images/services_imagess.png"
              alt="Kigali BF Tech Group Technologies Illustration"
              width={600}
              height={450}
              className="w-full max-w-md lg:max-w-full h-auto object-contain relative z-10 drop-shadow-2xl group-hover:scale-103 transition-transform duration-500"
              priority
            />
          </div>
        </div>

        {/* Full Screen Edge-to-Edge Category Navigation Bar Strip */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-(--navbar-bg) border-y border-(--navbar-border) py-4 mb-14 shadow-xl backdrop-blur-xl z-20">
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

        {/* Top Icon Grid Showcase */}
        {filteredTech.length > 0 ? (
          <div className="space-y-16">
            {/* Logo Badge Cards Grid with Animation */}
            <motion.div
              layout
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6"
            >
              {visibleTech.map((tech) => {
                const IconComponent = tech.icon;
                return (
                  <motion.div
                    key={tech.name}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="bg-(--navbar-bg) border border-(--navbar-border) hover:border-[#B9AF7A]/80 p-5 rounded-2xl flex flex-col items-center text-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-md group cursor-default"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:border-[#B9AF7A]/50 transition-all duration-300">
                      <IconComponent className="w-6 h-6 transition-colors duration-300" style={{ color: tech.color === '#000000' || tech.color === '#181717' ? 'currentColor' : tech.color }} />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-(--navbar-text) tracking-tight">
                      {tech.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Animated Expand / Collapse Button */}
            {selectedCategory === 'All' && !searchTerm && filteredTech.length > 14 && (
              <div className="flex justify-center pt-2">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-(--navbar-bg) border border-[#B9AF7A]/60 hover:border-[#B9AF7A] text-[#B9AF7A] hover:bg-[#B9AF7A] hover:text-slate-950 font-extrabold text-xs tracking-wider capitalize transition-all duration-300 shadow-xl cursor-pointer"
                >
                  <span>
                    {isExpanded
                      ? 'Show Less'
                      : `Show All Technologies (+${filteredTech.length - 14} More)`}
                  </span>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiChevronDown className="w-4 h-4" />
                  </motion.div>
                </motion.button>
              </div>
            )}

            {/* Bottom 2-Column Animated Proficiency Progress Section (Inspired by sample image) */}
            <div className="bg-(--navbar-bg) border border-(--navbar-border) rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-(--navbar-border)">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                    Proficiency & Maintainability Metrics
                  </h3>
                  <p className="text-xs sm:text-sm opacity-60 mt-1 font-medium">
                    Demonstrated production efficiency, security compliance, and maintenance readiness.
                  </p>
                </div>
                <span className="hidden sm:inline-block px-4 py-1.5 rounded-full text-xs font-bold text-[#B9AF7A] bg-[#B9AF7A]/10 border border-[#B9AF7A]/20">
                  {visibleTech.length} Stack Items
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
                {visibleTech.map((tech) => {
                  const IconComp = tech.icon;
                  return (
                    <div key={`metric-${tech.name}`} className="space-y-2 group">
                      <div className="flex items-center justify-between text-xs sm:text-sm font-bold">
                        <div className="flex items-center gap-2.5">
                          <IconComp className="w-4 h-4" style={{ color: tech.color === '#000000' || tech.color === '#181717' ? 'currentColor' : tech.color }} />
                          <span className="text-(--navbar-text) group-hover:text-[#B9AF7A] transition-colors">{tech.name}</span>
                          <span className="text-[10px] opacity-40 font-normal hidden sm:inline">• {tech.category}</span>
                        </div>
                        <span className="text-[#B9AF7A] font-extrabold">{tech.level}%</span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="w-full bg-white/5 rounded-full h-2.5 overflow-hidden border border-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-[#B9AF7A] via-amber-400 to-amber-500 rounded-full shadow-sm"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16 bg-(--navbar-bg) border border-(--navbar-border) rounded-3xl">
            <p className="text-lg font-bold text-(--navbar-text) opacity-80">No technologies found matching your search.</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              className="mt-4 px-6 py-2.5 rounded-full bg-[#B9AF7A] text-slate-950 font-bold text-xs uppercase tracking-wider cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
