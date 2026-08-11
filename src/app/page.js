import LandingPage from "./components/LandingPage";
import WhyUs from "./components/WhyUs";
import AboutUs from "./AboutUs/page"
import Services from "./components/Services";
import Belt from "./components/belt";
import ContactSection from "./ContactUs/page";

export default function Home() {
  return (
    <div>
      <main style={{ paddingTop: '140px' }}>
        <LandingPage />
        <WhyUs />
        <AboutUs />
        <Services />
        <Belt />
        <ContactSection />
      </main>
    </div>
  );
}
