import Navbar from "../components/navbar";
import WhyUs from "../components/WhyUs";
import Belt from "../components/belt";
import Footer from "../components/Footer";
import { FiArrowRight, FiCheck } from "react-icons/fi";

export const metadata = {
  title: "Solutions | Kigali BF Tech Group",
  description: "Enterprise software solutions, cloud systems, web platforms, and mobile apps engineered by Kigali BF Tech Group.",
};

const SOLUTIONS_DATA = [
  {
    title: "Enterprise Web Applications",
    desc: "Robust, high-performance web platforms engineered with Next.js, React, and modern microservices architecture."
  },
  {
    title: "Mobile Solutions (iOS & Android)",
    desc: "Native and cross-platform mobile apps built for seamless user experience, offline support, and high performance."
  },
  {
    title: "Cloud Architecture & Integration",
    desc: "Scalable cloud deployment, API integrations, database optimization, and continuous security compliance."
  },
  {
    title: "Bespoke UI/UX & Brand Design",
    desc: "User-centered design systems, interactive prototypes, and modern branding that captivate customers."
  }
];

export default function SolutionsPage() {
  return (
    <div className="bg-background text-(--navbar-text) transition-colors duration-300">
      <Navbar />
      <main style={{ paddingTop: '140px' }}>
        
        {/* Solutions Page Hero Banner */}
        <section className="py-16 sm:py-20 relative overflow-hidden border-b border-(--navbar-border)">
          <div className="max-w-350 w-full mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#B9AF7A] bg-[#B9AF7A]/10 border border-[#B9AF7A]/20 uppercase mb-4">
              Enterprise Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              Tailored Technical Solutions <br className="hidden sm:inline" />
              <span className="text-[#B9AF7A]">For Complex Challenges</span>
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg opacity-70 leading-relaxed">
              We help startups and growing organizations solve critical business bottlenecks with end-to-end software development.
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 bg-background border-b border-(--navbar-border)">
          <div className="max-w-350 w-full mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SOLUTIONS_DATA.map((sol, idx) => (
                <div key={idx} className="p-8 sm:p-10 rounded-[32px] bg-white [[data-theme='dark']_&]:bg-transparent border-2 border-gray-100 [[data-theme='dark']_&]:border-zinc-800 hover:border-[#B9AF7A] transition-all">
                  <div className="w-10 h-10 rounded-full bg-[#B9AF7A]/10 border border-[#B9AF7A]/30 text-[#B9AF7A] flex items-center justify-center mb-6">
                    <FiCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{sol.title}</h3>
                  <p className="text-sm opacity-70 leading-relaxed">{sol.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WhyUs Component */}
        <WhyUs />

        {/* Partners Strip */}
        <Belt />

        {/* Call To Action */}
        <section className="py-20 bg-background border-t border-(--navbar-border)">
          <div className="max-w-350 w-full mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">Have A Technical Challenge To Solve?</h3>
            <p className="text-sm opacity-70 max-w-lg mx-auto mb-8">Consult with our engineering team to design the perfect architecture for your platform.</p>
            <a
              href="/ContactUs"
              className="inline-flex items-center gap-2 bg-[#B9AF7A] hover:bg-[#a69c67] text-white font-bold px-8 py-4 rounded-full text-sm transition-all shadow-md no-underline"
            >
              <span>Consult Our Experts</span>
              <FiArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
