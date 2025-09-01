import { motion } from "framer-motion";
import { fadeUp } from "../animations/fadeUp";

const FEATURES = [
  {
    id: "calidad",
    title: "Calidad que se nota",
    desc: "Flores frescas seleccionadas a mano y materiales premium.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
        <path fill="currentColor" d="M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 2.2 6.8 3.8v8.1L12 20.8 5.2 16V7.9L12 4.2ZM7 12l4 4 6-7-1.5-1.3L11 13.2 8.5 10.7 7 12Z"/>
      </svg>
    ),
  },
  {
    id: "personalizacion",
    title: "Personalización real",
    desc: "Componemos a tu medida: colores, flores y dedicaciones.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
        <path fill="currentColor" d="M12 21.35 10.55 20.03C5.4 15.36 2 12.28 2 8.5A4.5 4.5 0 0 1 6.5 4C8.24 4 9.91 4.81 11 6.09 12.09 4.81 13.76 4 15.5 4A4.5 4.5 0 0 1 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35Z"/>
      </svg>
    ),
  },
  {
    id: "envio",
    title: "Envío en el día*",
    desc: "Cobertura en la ciudad con logística pensada para regalos.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
        <path fill="currentColor" d="M3 7h13v10H3V7Zm13 0h3l2 3v7h-5V7ZM5 9h9v6H5V9Zm2 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm10 0a2 2 0 1 0 .001 3.999A2 2 0 0 0 17 18Z"/>
      </svg>
    ),
  },
  {
    id: "sustentable",
    title: "Empaque sustentable",
    desc: "Papeles y cintas responsables con el ambiente.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
        <path fill="currentColor" d="M12 2a8 8 0 0 0-8 8v1h6v11h4V11h6v-1a8 8 0 0 0-8-8Z"/>
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section
      aria-labelledby="whyus-heading"
      className="bg-bg py-16 lg:py-24"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl lg:max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20"
      >
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-center justify-center text-center lg:items-start">
            <h2
              id="whyus-heading"
              className="text-2xl md:text-3xl font-extrabold tracking-tight text-ink"
            >
              ¿Por qué elegir Bloomery?
            </h2>
            <p className="mt-2 text-muted max-w-prose">
              Detalle, frescura y una experiencia pensada para sorprender.
            </p>
            <p className="mt-6 text-xs text-muted">
              * Envíos sujetos a zona y franja horaria.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <motion.article
                key={f.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow-card)] hover:border-primary transition"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-lavender-100 text-deeplav mb-3">
                  {f.icon}
                </div>
                <h3 className="text-base font-semibold text-ink">{f.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{f.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

