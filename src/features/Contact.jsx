import { motion } from "framer-motion";
import { fadeUp } from "../animations/fadeUp";

const ADDRESS_TEXT = "Av. de las Flores 123, Asunción, PY";

export default function Contact() {
  return (
    <section
      id="contacto"
      aria-labelledby="contact-heading"
      className="relative bg-bg py-16 lg:py-20 overflow-hidden"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-[42rem] rounded-full blur-3xl opacity-40
                        bg-gradient-to-r from-lavender-200 via-lavender-300 to-rose" />
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="relative max-w-2xl mx-auto px-4 sm:px-6"
      >
        <div className="text-center">
          <h2
            id="contact-heading"
            className="text-2xl md:text-3xl font-extrabold tracking-tight text-ink"
          >
            Hablemos de tu próximo bouquet
          </h2>
          <p className="mt-2 text-muted">
            Escríbenos o visitanos en el taller. ¡Nos encanta asesorarte!
          </p>
        </div>

        <ul className="mt-10 space-y-6 text-center">
          <li>
            <p className="text-sm font-medium text-ink">Dirección</p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                ADDRESS_TEXT
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:underline"
            >
              {ADDRESS_TEXT}
            </a>
          </li>

          <li>
            <p className="text-sm font-medium text-ink">Teléfono</p>
            <a
              href="tel:+59500000000"
              className="text-sm text-muted hover:underline"
            >
              +595 000 000 00
            </a>
          </li>

          <li>
            <p className="text-sm font-medium text-ink">Email</p>
            <a
              href="mailto:hola@bloomery.com"
              className="text-sm text-muted hover:underline"
            >
              hola@bloomery.com
            </a>
          </li>

          <li>
            <p className="text-sm font-medium text-ink">Horario</p>
            <p className="text-sm text-muted">Lun–Sáb: 09:00–19:00</p>
          </li>
        </ul>

        <div className="mt-8 flex justify-center">
          <a
            href="https://wa.me/59500000000"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center rounded-full bg-primary hover:bg-primary-600 text-white px-6 py-3 text-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}