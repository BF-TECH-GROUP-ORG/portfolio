import Navbar from "../components/navbar";
import SolutionsComponent from "../components/Solutions";
import Belt from "../components/belt";
import Footer from "../components/Footer";
import { FiArrowRight } from "react-icons/fi";

export const metadata = {
  title: "Our Solutions | Kigali BF Tech Group",
  description: "Explore business-focused software solutions, management platforms, e-commerce, cloud transformation, and analytics engineered by Kigali BF Tech Group.",
};

export default function SolutionsPage() {
  return (
    <div className="bg-background text-(--navbar-text) transition-colors duration-300">
      <Navbar />
      <main style={{ paddingTop: '130px' }}>
        
        {/* Recommended Solutions Component */}
        <SolutionsComponent />

        {/* Partners Strip */}
        <Belt />

        {/* Call To Action */}
        <section className="py-20 bg-background border-t border-(--navbar-border)">
          <div className="max-w-350 w-full mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <h3 className="text-2xl sm:text-4xl font-extrabold mb-4">Have A Business Challenge To Solve?</h3>
            <p className="text-sm sm:text-base opacity-70 max-w-lg mx-auto mb-8 leading-relaxed">
              Consult with our engineering team to design and deploy the perfect software solution for your enterprise.
            </p>
            <a
              href="/ContactUs"
              className="inline-flex items-center gap-2 bg-[#B9AF7A] hover:bg-[#a69c67] text-slate-950 font-extrabold px-8 py-4 rounded-full text-sm transition-all shadow-md no-underline"
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
