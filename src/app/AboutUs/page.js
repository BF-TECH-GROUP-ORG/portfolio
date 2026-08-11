import Navbar from "../components/navbar";
import AboutUs from "../components/aboutUs";
import Team from "../components/Team";
import Belt from "../components/belt";
import Footer from "../components/Footer";
import { FiTarget, FiEye, FiAward, FiUsers, FiCheckCircle, FiArrowRight } from "react-icons/fi";

export const metadata = {
  title: "About Us | Kigali BF Tech Group",
  description: "Learn about Kigali BF Tech Group, our mission, vision, values, and expert engineering team in Kigali, Rwanda.",
};

const COMPANY_STATS = [
  { label: "Projects Completed", value: "50+" },
  { label: "Client Satisfaction", value: "99%" },
  { label: "Expert Engineers", value: "10+" },
  { label: "Years of Excellence", value: "5+" }
];

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
      <main style={{ paddingTop: '140px' }}>
        
        {/* Page Hero Banner */}
        <section className="py-16 sm:py-20 relative overflow-hidden border-b border-(--navbar-border)">
          <div className="max-w-350 w-full mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#B9AF7A] bg-[#B9AF7A]/10 border border-[#B9AF7A]/20 uppercase mb-4">
              About Kigali BF Tech Group
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              Your Technical Partner In Every <br className="hidden sm:inline" />
              <span className="text-[#B9AF7A]">Business Breakthrough</span>
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg opacity-70 leading-relaxed">
              We are a premier technology enterprise based in Kigali, Rwanda. We specialize in building robust digital products, custom software, web platforms, and mobile apps that empower businesses across Africa and worldwide.
            </p>
          </div>
        </section>

        {/* Company Stats Counter */}
        <section className="py-12 bg-background border-b border-(--navbar-border)">
          <div className="max-w-350 w-full mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {COMPANY_STATS.map((stat, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white [[data-theme='dark']_&]:bg-transparent border-2 border-gray-100 [[data-theme='dark']_&]:border-zinc-800">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#B9AF7A] mb-2">{stat.value}</div>
                  <div className="text-xs sm:text-sm font-semibold opacity-70 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Primary About Us Section */}
        <AboutUs />

        {/* Core Values Section */}
        <section className="py-20 sm:py-24 bg-background border-t border-b border-(--navbar-border)">
          <div className="max-w-350 w-full mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold tracking-widest text-[#B9AF7A] uppercase mb-2 block">Our Pillars</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Our Core Values</h2>
              <p className="text-sm sm:text-base opacity-70 mt-3">The principles that guide our work, our team, and our commitment to our clients.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {CORE_VALUES.map((val, idx) => (
                <div key={idx} className="group p-8 rounded-[32px] bg-white [[data-theme='dark']_&]:bg-transparent border-2 border-gray-100 [[data-theme='dark']_&]:border-zinc-800 hover:border-[#B9AF7A] transition-all duration-300">
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

        {/* Mounted Team Section */}
        <section className="py-12">
          <Team />
        </section>


        {/* Call To Action Banner */}
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
