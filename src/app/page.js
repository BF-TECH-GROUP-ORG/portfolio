import Navbar from "./components/navbar";
import LandingPage from "./components/LandingPage";
import WhyUs from "./components/WhyUs";
import AboutUs from "./components/aboutUs";
import Services from "./components/Services";
import Belt from "./components/belt";
import Team from "./components/Team";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main style={{ paddingTop: '140px' }}>
        <LandingPage />
        <WhyUs />
        <AboutUs />
        <Services />
        <Belt />
        <Team />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
