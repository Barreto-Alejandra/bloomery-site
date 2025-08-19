import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp } from "./animations/fadeUp";

import Footer from "./components/Footer";

export default function App() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <main className="min-h-screen flex flex-col">

      <div className="flex-1">{/* contenido principal */}</div>
      <Footer />
    </main>
  );
}