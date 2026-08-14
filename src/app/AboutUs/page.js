import AboutHero from "../../components/AboutHero";
import AboutUs from "../../components/aboutUs";
import Team from "../../components/Team";
import { FiTarget, FiEye, FiAward, FiUsers, FiArrowRight } from "react-icons/fi";

export const metadata = {
  title: "About Us | Kigali BF Tech Group",
  description: "Learn about Kigali BF Tech Group, our mission, vision, values, and expert engineering team in Kigali, Rwanda.",
};

const CORE_VALUES = [
  {
    icon: <FiTarget className="w-6 h-6 text-[#B9AF7A]" />,
    title: "Innovation & Excellence",
    description: "We push technical boundaries to deliver high-performing, future-proof digital solutions tailored for your growth."
  },
  {
    icon: <FiEye className="w-6 h-6 text-[#B9AF7A]" />,
    title: "Client-Centric Vision",
    description: "Your business success is our priority. We align our technology expertise directly with your strategic goals."
  },
  {
    icon: <FiAward className="w-6 h-6 text-[#B9AF7A]" />,
    title: "Quality & Reliability",
    description: "From code architecture to security, we uphold rigorous standards to ensure robust, dependable software."
  },
  {
    icon: <FiUsers className="w-6 h-6 text-[#B9AF7A]" />,
    title: "Collaborative Partnership",
    description: "We work alongside your team as dedicated tech partners, fostering transparent communication at every stage."
  }
];

export default function AboutUsPage() {
  return (
    <div className="bg-background text-(--navbar-text) transition-colors duration-300">
      <main style={{ paddingTop: '80px' }}>

        {/* 1. Flagship Hero Section (2-Column Hero + Isometric Hologram Pod) */}
        <AboutHero />

        {/* 2. Interactive 3D Earth Planet Section & Core Metrics */}
        <div id="impact-section">
          <AboutUs />
        </div>

        {/* 3. Core Values Section */}
        <section className="py-20 sm:py-24 bg-background border-t border-b border-(--navbar-border)">
          <div className="max-w-350 w-full mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold tracking-widest text-[#B9AF7A] uppercase mb-2 block">Our Pillars</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Our Core Values</h2>
              <p className="text-sm sm:text-base opacity-70 mt-3">The principles that guide our work, our team, and our commitment to our clients.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {CORE_VALUES.map((val, idx) => (
                <div key={idx} className="group p-8 rounded-[32px] bg-white [[data-theme='dark']_&]:bg-zinc-950 border-2 border-gray-100 [[data-theme='dark']_&]:border-zinc-800 hover:border-[#B9AF7A] transition-all duration-300">
                  <div className="w-12 h-12 rounded-full border border-gray-200 [[data-theme='dark']_&]:border-zinc-700 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#B9AF7A] transition-all">
                    {val.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-[#B9AF7A] transition-colors">{val.title}</h3>
                  <p className="text-xs sm:text-sm opacity-70 leading-relaxed font-normal">{val.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Mounted Team Section */}
        <section className="py-12">
          <Team />
        </section>

        {/* 5. Call To Action Banner */}
        <section className="py-20 bg-background border-t border-(--navbar-border)">
          <div className="max-w-350 w-full mx-auto px-6 sm:px-8 lg:px-12">
            <div className="p-10 sm:p-16 rounded-[40px] bg-gradient-to-r from-[#01333E] to-neutral-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
              <div className="max-w-xl">
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 text-white">Ready to start your next tech project?</h3>
                <p className="text-sm opacity-80 leading-relaxed text-white">Get in touch with our expert engineering team in Gisozi, Kigali today and let's turn your vision into reality.</p>
              </div>
              <a
                href="/ContactUs"
                className="bg-[#B9AF7A] hover:bg-[#a69c67] text-white font-bold px-8 py-4 rounded-full text-sm transition-all shadow-md whitespace-nowrap no-underline flex items-center gap-2"
              >
                <span>Contact Us Today</span>
                <FiArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
