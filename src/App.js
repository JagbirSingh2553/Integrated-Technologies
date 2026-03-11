import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBadges from "./components/TrustBadges";
import About from "./components/About";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Brands from "./components/Brands";
import AMCSection from "./components/AMCSection";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBadges />
      <About />
      <Services />
      <Industries />
      <Brands />
      <AMCSection />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </>
  );
}