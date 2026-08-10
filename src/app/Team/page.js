import Navbar from "../components/navbar";
import Team from "../components/Team";
import Belt from "../components/belt";
import Footer from "../components/Footer";
import { FiArrowRight } from "react-icons/fi";

export const metadata = {
  title: "Our Team | Kigali BF Tech Group",
  description: "Meet the leadership, software engineers, full-stack developers, and UI/UX designers at Kigali BF Tech Group.",
};

export default function TeamPage() {
  return (
    <div className="bg-background text-(--navbar-text) transition-colors duration-300">
      <Navbar />
      <main style={{ paddingTop: '140px' }}>
        
        {/* Team Page Hero Banner */}
        <section className="py-16 sm:py-20 relative overflow-hidden border-b border-(--navbar-border)">
          <div className="max-w-350 w-full mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#B9AF7A] bg-[#B9AF7A]/10 border border-[#B9AF7A]/20 uppercase mb-4">
              Our Leadership & Tech Experts
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              Meet The Engineers & Designers <br className="hidden sm:inline" />
              <span className="text-[#B9AF7A]">Behind The Breakthroughs</span>
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg opacity-70 leading-relaxed">
              Our team consists of passionate full-stack developers, UI/UX designers, mobile app specialists, and IT consultants based in Kigali, Rwanda.
            </p>
          </div>
        </section>

        {/* Team Component */}
        <Team />

        {/* Partners Strip */}
        <Belt />

        {/* Call To Action */}
        <section className="py-20 bg-background border-t border-(--navbar-border)">
          <div className="max-w-350 w-full mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">Want To Work With Our Team?</h3>
            <p className="text-sm opacity-70 max-w-lg mx-auto mb-8">Reach out to start a conversation about your project or technical requirements.</p>
            <a
              href="/ContactUs"
              className="inline-flex items-center gap-2 bg-[#B9AF7A] hover:bg-[#a69c67] text-white font-bold px-8 py-4 rounded-full text-sm transition-all shadow-md no-underline"
            >
              <span>Get In Touch</span>
              <FiArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
