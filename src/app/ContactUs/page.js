import Navbar from "../components/navbar";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contact Us | Kigali BF Tech Group",
  description: "Get in touch with Kigali BF Tech Group in Gisozi, Kigali, Rwanda. Phone: +250 789 321 535, Email: info@invexix.com.",
};

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <main style={{ paddingTop: '140px' }}>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
