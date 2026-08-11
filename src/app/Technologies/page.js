import TechnologiesComponent from "../../components/Technologies";
import Belt from "../../components/belt";
import { FiArrowRight } from "react-icons/fi";

export const metadata = {
  title: "Technologies We Use | Kigali BF Tech Group",
  description: "Explore the modern technologies, frameworks, databases, cloud DevOps, and design tools powering software solutions engineered by Kigali BF Tech Group.",
};

export default function TechnologiesPage() {
  return (
    <div className="bg-background text-(--navbar-text) transition-colors duration-300">
      <main style={{ paddingTop: '130px' }}>

        {/* Technologies Showcase Component */}
        <TechnologiesComponent />

        {/* Call To Action Banner */}
        <section className="py-20 bg-background border-t border-(--navbar-border)">
          <div className="max-w-350 w-full mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <h3 className="text-2xl sm:text-4xl font-extrabold mb-4">Have A Specific Tech Stack In Mind?</h3>
            <p className="text-sm sm:text-base opacity-70 max-w-lg mx-auto mb-8 leading-relaxed">
              Consult with our engineering team to architect and build scalable software customized to your technology preferences.
            </p>
            <a
              href="/ContactUs"
              className="inline-flex items-center gap-2 bg-[#B9AF7A] hover:bg-[#a69c67] text-slate-950 font-extrabold px-8 py-4 rounded-full text-sm transition-all shadow-md no-underline"
            >
              <span>Discuss Your Tech Stack</span>
              <FiArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}
