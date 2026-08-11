import Navbar from "../../components/navbar";
import Belt from "../../components/belt";
import Footer from "../../components/Footer";
import { SERVICES_DATA } from "../../data/servicesData";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheckCircle,
  FiShield,
  FiZap,
  FiLayers,
  FiCheck
} from "react-icons/fi";
import {
  LuLightbulb,
  LuCompass,
  LuPalette,
  LuCode,
  LuCpu,
  LuCloud,
  LuLifeBuoy,
  LuAward
} from "react-icons/lu";

// Map icon strings to react-icons
const ICON_MAP = {
  LuLightbulb: <LuLightbulb className="w-8 h-8 text-[#B9AF7A]" />,
  LuCompass: <LuCompass className="w-8 h-8 text-[#B9AF7A]" />,
  LuPalette: <LuPalette className="w-8 h-8 text-[#B9AF7A]" />,
  LuCode: <LuCode className="w-8 h-8 text-[#B9AF7A]" />,
  LuCpu: <LuCpu className="w-8 h-8 text-[#B9AF7A]" />,
  LuCloud: <LuCloud className="w-8 h-8 text-[#B9AF7A]" />,
  FiCheckCircle: <FiCheckCircle className="w-8 h-8 text-[#B9AF7A]" />,
  LuLifeBuoy: <LuLifeBuoy className="w-8 h-8 text-[#B9AF7A]" />,
  LuAward: <LuAward className="w-8 h-8 text-[#B9AF7A]" />
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  if (!service) {
    return { title: "Service Not Found | Kigali BF Tech Group" };
  }
  return {
    title: `${service.title} | Kigali BF Tech Group Services`,
    description: service.description,
  };
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const iconElement = ICON_MAP[service.iconName] || <FiLayers className="w-8 h-8 text-[#B9AF7A]" />;

  return (
    <div className="bg-background text-(--navbar-text) transition-colors duration-300 min-h-screen flex flex-col">
      <Navbar />
      <main style={{ paddingTop: '130px' }} className="flex-grow">
        
        {/* Back Navigation Bar */}
        <section className="py-6 border-b border-(--navbar-border)/60 bg-background/50 backdrop-blur-sm sticky top-[90px] z-30">
          <div className="max-w-350 w-full mx-auto px-6 sm:px-8 lg:px-12 mt-5 flex items-center justify-between">
            <Link
              href="/OurServices"
              className="inline-flex  items-center gap-2 text-xs font-bold uppercase tracking-wider text-(--navbar-text) opacity-70 hover:opacity-100 hover:text-[#B9AF7A] transition-all no-underline"
            >
              <FiArrowLeft className="w-4 h-4" />
              <span>Back To All Services</span>
            </Link>
            <div className="text-xs font-mono text-[#B9AF7A] font-extrabold tracking-widest hidden sm:block">
              SERVICE {service.number} / 08
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-16 sm:py-20 relative overflow-hidden">
          {/* Background Ambient Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#B9AF7A]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-350 w-full mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Hero Left Content */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#B9AF7A] bg-[#B9AF7A]/10 border border-[#B9AF7A]/20 uppercase">
                    {service.category}
                  </span>
                  <span className="text-xs font-mono text-(--navbar-text) opacity-50 font-bold">
                    {service.number}
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                  {service.title}
                </h1>

                <p className="text-base sm:text-lg text-(--navbar-text) opacity-80 leading-relaxed max-w-2xl mb-8 font-medium">
                  {service.heroSubtitle}
                </p>

                {/* Call to Action Buttons - Equal Width & Identical Height */}
                <div className="flex flex-row items-center gap-3 w-full max-w-lg">
                  <Link
                    href={`/ContactUs?service=${encodeURIComponent(service.title)}`}
                    className="flex-1 h-12 sm:h-14 inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#B9AF7A] to-amber-500 hover:from-amber-400 hover:to-[#B9AF7A] text-slate-950 font-extrabold px-3 sm:px-6 rounded-full text-xs sm:text-sm transition-all shadow-xl hover:scale-105 no-underline whitespace-nowrap text-center"
                  >
                    <span>Request Service</span>
                    <FiArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  </Link>

                  <Link
                    href="/ContactUs"
                    className="flex-1 h-12 sm:h-14 inline-flex items-center justify-center gap-1.5 sm:gap-2 border  border-[#B9AF7A] bg-(--navbar-bg) hover:bg-white/5 text-(--navbar-text) font-extrabold px-3 sm:px-6 rounded-full text-xs sm:text-sm transition-all no-underline whitespace-nowrap text-center"
                  >
                    <span>Talk To Expert</span>
                  </Link>
                </div>
              </div>

              {/* Hero Right Visual Card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="bg-(--navbar-bg) border border-(--navbar-border) hover:border-[#B9AF7A]/60 rounded-[32px] p-8 shadow-2xl relative overflow-hidden w-full max-w-md group">
                  <div className="w-16 h-16 rounded-2xl bg-[#B9AF7A]/15 border border-[#B9AF7A]/30 flex items-center justify-center mb-6">
                    {iconElement}
                  </div>
                  
                  <h3 className="text-xl font-extrabold mb-3 text-[#B9AF7A]">Service Highlight</h3>
                  <p className="text-sm opacity-70 leading-relaxed mb-6 font-medium">
                    {service.details}
                  </p>

                  <div className="pt-6 border-t border-(--navbar-border)/60 flex items-center justify-between text-xs font-bold opacity-80">
                    <span className="flex items-center gap-2 text-emerald-400">
                      <FiShield className="w-4 h-4 text-emerald-400" /> Enterprise SLA Uptime
                    </span>
                    <span className="text-[#B9AF7A]">Kigali BF Tech</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Deliverables & Benefits Grid Section */}
        <section className="py-16 bg-(--navbar-bg)/40 border-y border-(--navbar-border)">
          <div className="max-w-350 w-full mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Left Column: Key Deliverables */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 text-[#B9AF7A] text-xs font-bold tracking-widest uppercase mb-3">
                  <FiZap className="w-4 h-4" />
                  <span>Scope of Work</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold mb-6">
                  Services & Key Deliverables Included
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-background border border-(--navbar-border) rounded-2xl p-4 flex items-start gap-3 shadow-sm hover:border-[#B9AF7A]/50 transition-all"
                    >
                      <FiCheckCircle className="w-5 h-5 text-[#B9AF7A] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-semibold leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Why Choose Us & Tech Stack */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[#B9AF7A] text-xs font-bold tracking-widest uppercase mb-3">
                    <FiShield className="w-4 h-4" />
                    <span>Business Value</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold mb-6">
                    Why Partner With Us
                  </h2>

                  <div className="flex flex-col gap-4 mb-8">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#B9AF7A]/20 text-[#B9AF7A] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                          <FiCheck className="w-3.5 h-3.5" />
                        </div>
                        <p className="text-sm opacity-80 leading-relaxed font-medium">
                          {benefit}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="bg-background border border-(--navbar-border) rounded-2xl p-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider opacity-60 mb-3">
                    Technologies & Frameworks
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-full text-xs font-bold bg-[#B9AF7A]/10 text-[#B9AF7A] border border-[#B9AF7A]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Visual Delivery Process Workflow */}
        <section className="py-20">
          <div className="max-w-350 w-full mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#B9AF7A] bg-[#B9AF7A]/10 border border-[#B9AF7A]/20 uppercase mb-4">
                Execution Methodology
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                Our <span className="text-[#B9AF7A]">Implementation Process</span>
              </h2>
              <p className="text-sm sm:text-base opacity-70 leading-relaxed">
                How we deliver {service.title} step-by-step to guarantee quality, speed, and reliability.
              </p>
            </div>

            {/* Vertical Timeline Process Steps (Full Width Section Alignment) */}
            <div className="relative w-full py-8">
              {/* Central Vertical Spine Line */}
              <div className="absolute left-5 sm:left-6 md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-1.5 bg-gradient-to-b from-[#B9AF7A] via-amber-500 to-[#B9AF7A] rounded-full opacity-60 pointer-events-none" />

              <div className="flex flex-col gap-10 md:gap-14 relative z-10">
                {service.steps.map((st, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <div
                      key={st.step}
                      className={`flex flex-col md:flex-row items-start md:items-center w-full relative ${
                        isEven ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      {/* Timeline Card Container */}
                      <div className="w-full md:w-1/2 pl-14 sm:pl-16 md:pl-0 md:px-10 lg:px-12">
                        <div className="bg-(--navbar-bg) border border-(--navbar-border) hover:border-[#B9AF7A]/60 rounded-3xl p-8 sm:p-9 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 relative group overflow-hidden">
                          {/* Gold Ambient Accent */}
                          <div className="absolute top-0 right-0 w-32 h-32 bg-[#B9AF7A]/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />

                          {/* Step Tag */}
                          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-extrabold text-[#B9AF7A] bg-[#B9AF7A]/10 border border-[#B9AF7A]/20 uppercase mb-4">
                            <span>PHASE {st.step}</span>
                          </div>

                          {/* Step Title */}
                          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 text-(--navbar-text) group-hover:text-[#B9AF7A] transition-colors leading-snug">
                            {st.title}
                          </h3>

                          {/* Description */}
                          <p className="text-sm sm:text-base text-(--navbar-text) opacity-75 leading-relaxed font-medium">
                            {st.desc}
                          </p>
                        </div>
                      </div>

                      {/* Glowing Node Dot on the Spine */}
                      <div className="absolute left-5 sm:left-6 md:left-1/2 -translate-x-1/2 top-8 md:top-1/2 md:-translate-y-1/2 w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-[#B9AF7A] text-slate-950 font-extrabold text-xs sm:text-sm flex items-center justify-center border-4 border-background shadow-xl shadow-[#B9AF7A]/40 shrink-0 z-20">
                        {st.step}
                      </div>

                      {/* Empty Spacer on Opposite Side */}
                      <div className="hidden md:block w-1/2" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="py-20 bg-background border-t border-(--navbar-border)">
          <div className="max-w-350 w-full mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <h3 className="text-2xl sm:text-4xl font-extrabold mb-4">
              Ready To Start Your <span className="text-[#B9AF7A]">{service.title}</span> Project?
            </h3>
            <p className="text-sm sm:text-base opacity-70 max-w-2xl mx-auto mb-8 leading-relaxed">
              Get in touch with Kigali BF Tech Group today. We will schedule a technical scoping call to discuss your exact requirements and provide a custom proposal.
            </p>
            <Link
              href={`/ContactUs?service=${encodeURIComponent(service.title)}`}
              className="inline-flex items-center gap-2 bg-[#B9AF7A] hover:bg-[#a69c67] text-slate-950 font-extrabold px-9 py-4 rounded-full text-sm transition-all shadow-xl hover:scale-105 no-underline"
            >
              <span>Request A Custom Proposal</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Belt Strip */}
        <Belt />

      </main>
      <Footer />
    </div>
  );
}
