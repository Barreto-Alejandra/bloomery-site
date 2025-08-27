import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp } from "./animations/fadeUp";

import Header from "./features/Header";
import Hero from "./features/Hero";
import Footer from "./features/Footer";

export default function App() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="min-h-screen bg-bg text-ink">
      <Header />
      <main id="main">
        <section id="hero"><Hero /></section>
      </main>
      <Footer />
    </div>
  );
}