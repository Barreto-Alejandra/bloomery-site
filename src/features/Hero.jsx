// src/features/Hero.jsx
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "../animations/fadeUp";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

export default function Hero({
  imageSrc = "",
  alt = "Bouquet Bloomery con tonos lavanda y crema",
  videoSrc = "/assets/hero-video1.mp4" 
}) {
  const prefersReducedMotion = useReducedMotion();
  const showVideo = Boolean(videoSrc);

  return (
    <section aria-label="Presentación Bloomery" className="relative overflow-hidden bg-bg">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full blur-3xl opacity-40
                        bg-gradient-to-tr from-lavender-200 via-lavender-300 to-lavender-400" />
        <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full blur-3xl opacity-30
                        bg-gradient-to-tr from-rose via-lavender-200 to-primary" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative max-w-6xl lg:max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 py-16 lg:py-28"
      >
        <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-2">
          <div>
            <motion.h1 variants={fadeUp} className="text-4xl/tight md:text-5xl/tight font-extrabold tracking-tight text-ink">
              Taller de bouquets donde <span className="text-primary">cada detalle</span> importa
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-4 text-base md:text-lg text-muted max-w-prose">
              Composiciones florales únicas para regalos, eventos y momentos que florecen.
              Diseñamos, personalizamos y entregamos en el día.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#catalogo" className="inline-flex items-center justify-center rounded-full bg-primary hover:bg-primary-600
                           text-white px-6 py-3 text-sm md:text-base transition
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50">
                Ver catálogo
              </a>
              <a href="#contacto" className="inline-flex items-center justify-center rounded-full border border-border bg-surface
                           hover:border-primary hover:text-primary px-6 py-3 text-sm md:text-base transition
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/40">
                Hablar con un florista
              </a>
            </motion.div>

            <motion.ul variants={fadeUp} className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              <li className="inline-flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-lavender-600" />Entregas en el día*</li>
              <li className="inline-flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-gold" />Personalización</li>
              <li className="inline-flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-leaf" />Flores frescas</li>
            </motion.ul>
          </div>

          <motion.figure
            variants={fadeUp}
            className="relative aspect-[4/5] w-full max-w-[520px] lg:ml-auto rounded-3xl
                       bg-surface border border-border shadow-[var(--shadow-card)] overflow-hidden"
          >
            {showVideo ? (
              <video
                src={videoSrc}
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                controls={false}
                aria-label="Video de colección Bloomery"
                poster={imageSrc || undefined}
              />
            ) : (
              <motion.picture
                initial={false}
                whileHover={
                  prefersReducedMotion ? {} : { scale: 1.03, transition: { duration: 0.35, ease: "easeOut" } }
                }
                className="block h-full w-full"
              >
                <img
                  src={imageSrc}
                  alt={alt}
                  className="h-full w-full object-cover will-change-transform"
                  loading="eager"
                />
              </motion.picture>
            )}

            <figcaption className="pointer-events-none absolute left-4 bottom-4
                                   rounded-full bg-bg/80 backdrop-blur px-3 py-1.5 text-xs text-ink border border-border">
              Colección Primavera · 2025
            </figcaption>

            {!showVideo && !useReducedMotion && (
              <>
                <motion.span
                  aria-hidden="true"
                  className="absolute -right-2 top-6 w-10 h-10 rounded-full bg-rose/60 blur"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.span
                  aria-hidden="true"
                  className="absolute -left-3 bottom-8 w-8 h-8 rounded-full bg-lavender-300/60 blur"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity }}
                />
              </>
            )}
          </motion.figure>
        </div>
      </motion.div>
    </section>
  );
}
