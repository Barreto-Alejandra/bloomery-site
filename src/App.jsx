import { useInView } from "react-intersection-observer";
import { useReducedMotion } from "framer-motion";
import { useLenis } from "./lib/useLenis";

import Header from "./features/Header";
import Hero from "./features/Hero";
import Gallery from "./features/Gallery";
import BenefitsMarquee from "./features/BenefitsMarquee";
import WhyUs from "./features/WhyUs";
import Contact from "./features/Contact";
import Testimonials from "./features/Testimonials";
import Instagram from "./features/Instagram";
import Footer from "./features/Footer";

export default function App() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const reduce = useReducedMotion();
  useLenis({ enabled: !reduce });

  return (
    <div className="min-h-screen bg-bg text-ink">
      <Header />
      <main id="main">
        <Hero />
        <Gallery />
        <BenefitsMarquee />
        <WhyUs />
        <Contact />
        <Testimonials />
        <Instagram />
      </main>
      <Footer />
    </div>
  );
}