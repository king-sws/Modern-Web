import Cta from "./sections/Cta";
import Faqs from "./sections/Faqs";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Integration from "./sections/Integration";
import Introduction from "./sections/Introduction";
import LogoTicker from "./sections/LogoTicker";
import Navbar from "./sections/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <LogoTicker />
      <Introduction />
      <Features />
      <Integration />
      <Faqs />
      <Cta />
      <Footer />
    </div>
  );
}
