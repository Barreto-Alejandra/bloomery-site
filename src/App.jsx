import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp } from "./animations/fadeUp";

import Hero from "./features/Hero";
import Footer from "./features/Footer";

export default function App() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <div className="flex-1"></div>
      <Footer />
    </main>
  );
}