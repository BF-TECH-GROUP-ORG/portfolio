import Navbar from "../components/navbar";
import Services from "../components/Services";
import Belt from "../components/belt";
import Footer from "../components/Footer";
import { FiArrowRight } from "react-icons/fi";

export const metadata = {
  title: "Our Services | Kigali BF Tech Group",
  description: "Explore custom web development, mobile apps, UI/UX design, IT consulting, and branding services by Kigali BF Tech Group.",
};

export default function ServicesPage() {
  return (
    <div className="bg-background text-(--navbar-text) transition-colors duration-300">
     
      <main style={{ paddingTop: '140px' }}>
        {/* Services Component */}
        <Services />

        {/* Partners Strip */}
        <Belt />

        {/* Call To Action */}
        <section className="py-20 bg-background border-t border-(--navbar-border)">
          <div className="max-w-350 w-full mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">Need A Custom Technical Solution?</h3>
            <p className="text-sm opacity-70 max-w-lg mx-auto mb-8">Let's discuss how our services can elevate your enterprise software and customer experience.</p>
            <a
              href="/ContactUs"
              className="inline-flex items-center gap-2 bg-[#B9AF7A] hover:bg-[#a69c67] text-white font-bold px-8 py-4 rounded-full text-sm transition-all shadow-md no-underline"
            >
              <span>Request A Proposal</span>
              <FiArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

      </main>
     
    </div>
  );
}
