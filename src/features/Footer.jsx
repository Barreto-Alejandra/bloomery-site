import { motion } from "framer-motion";
import { fadeUp } from "../animations/fadeUp";

export default function Footer() {
  return (
    <footer className="bg-bg text-ink border-t border-border mt-16">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl lg:max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 xl:px-0 py-16"
      >
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-20">
          <div className="space-y-4">
            <a href="/" className="inline-flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-gold"></span>
              <span className="text-2xl font-extrabold tracking-tight text-deeplav">
                Bloomery
              </span>
            </a>
            <p className="text-muted max-w-prose">
              Taller de bouquets donde cada detalle importa. Composiciones
              únicas para regalos, eventos y momentos que florecen.
            </p>

            <div className="flex items-center gap-4 text-sm">
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-lavender-600"></span>
                Hecho con cariño
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose"></span>
                Entregas en el día*
              </span>
            </div>
          </div>

          <div className="space-y-3 lg:col-span-1">
            <h3 className="text-lg font-semibold">Suscríbete</h3>
            <p className="text-muted">
              Ofertas, lanzamientos y tips de cuidado floral. Sin spam.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Formulario de suscripción al boletín"
            >
              <div className="grow">
                <label htmlFor="newsletter" className="sr-only">
                  Email
                </label>
                <input
                  id="newsletter"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  required
                  placeholder="tu@email.com"
                  className="w-full rounded-full bg-surface border border-border px-4 py-2.5 outline-none
                             focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  aria-required="true"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-primary hover:bg-primary-600 text-white px-5 py-2.5
                           transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50"
              >
                Unirme
              </button>
            </form>
            <p className="text-xs text-muted">
              Al suscribirte aceptas nuestra{" "}
              <a
                href="#privacidad"
                className="underline underline-offset-2 hover:text-ink"
              >
                Política de Privacidad
              </a>.
            </p>
          </div>

          <nav
            className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:col-span-2 lg:col-span-1"
            aria-label="Enlaces de pie de página"
          >
            <div>
              <h4 className="text-sm font-semibold mb-3">Catálogo</h4>
              <ul className="space-y-2">
                <li><a className="hover:underline" href="#bouquets">Bouquets</a></li>
                <li><a className="hover:underline" href="#ocasion">Por ocasión</a></li>
                <li><a className="hover:underline" href="#colecciones">Colecciones</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3">Sobre</h4>
              <ul className="space-y-2">
                <li><a className="hover:underline" href="#historia">Nuestra historia</a></li>
                <li><a className="hover:underline" href="#taller">El taller</a></li>
                <li><a className="hover:underline" href="#preguntas">Preguntas frecuentes</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3">Soporte</h4>
              <ul className="space-y-2">
                <li><a className="hover:underline" href="#envios">Envíos</a></li>
                <li><a className="hover:underline" href="#cambios">Cambios y devoluciones</a></li>
                <li><a className="hover:underline" href="#contacto">Contacto</a></li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:gap-20">
          <address className="not-italic text-sm text-muted space-y-2">
          <strong className="block text-ink">Bloomery Taller</strong>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Av.+de+las+Flores+123,+Asunción,+PY"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:underline"
            >
              Av. de las Flores 123, Asunción, PY
            </a>

            <a className="block hover:underline text-ink" href="tel:+59500000000">
              +595 000 000 00
            </a>

            <a className="block hover:underline text-ink" href="mailto:hola@bloomery.com">
              hola@bloomery.com
            </a>
          </address>

          <div className="flex gap-4 md:justify-end">
            <a
              href="https://instagram.com/"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface border border-border
                         hover:border-primary hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary/40"
              title="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 
                3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 
                3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM18 6.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
            </a>

            <a
              href="https://facebook.com/"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface border border-border
                         hover:border-primary hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary/40"
              title="Facebook"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M13.5 22v-8h2.6l.4-3h-3v-1.9c0-.9.3-1.5 1.7-1.5H17V4.1c-.3 0-1.4-.1-2.6-.1C11.6 4 10 5.4 10 8v3H7v3h3v8h3.5z"/>
              </svg>
            </a>

            <a
              href="https://wa.me/59500000000"
              aria-label="WhatsApp"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface border border-border
                         hover:border-primary hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary/40"
              title="WhatsApp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20 3.8A10 10 0 0 0 4 17.7L3 22l4.4-1A10 10 0 0 0 12 22c5.5 0 10-4.4 10-9.8 0-2.6-1-5-2.9-6.9zM12 20a8 
                8 0 0 1-4.1-1.1l-.3-.2-2.6.6.6-2.5-.2-.3A8.1 8.1 0 1 1 12 20zm4.6-5.5c-.2-.1-1.4-.7-1.6-.7s-.4-.1-.6.1c-.2.3-.6.7-.7.9-.1.1-.2.1-.4.1s-.4 0-.7-.2a6.6 
                6.6 0 0 1-2-1.2 7.5 7.5 0 0 1-1.4-1.7c-.1-.2 0-.3.1-.4l.3-.3.2-.4c.1-.1 0-.3 0-.4l-.6-1.3c-.1-.3-.3-.3-.5-.3h-.4c-.1 
                0-.3 0-.4.2-.4.5-.6 1.1-.6 1.7 0 .2 0 .4.1.6a8.3 8.3 0 0 0 1.7 2.7 9.4 9.4 0 0 0 3 2c.4.2.8.3 1.1.4.4.1.7.1 1 .1.3 0 
                .7 0 1-.2.3-.1 1.4-.6 1.6-1 .2-.4.2-.8.1-.9z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-xs text-muted flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
          <p>© {new Date().getFullYear()} Bloomery.</p>
          <div className="flex gap-4">
            <a className="hover:underline" href="#terminos">Términos</a>
            <a className="hover:underline" href="#privacidad">Privacidad</a>
            <a className="hover:underline" href="#accesibilidad">Accesibilidad</a>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}