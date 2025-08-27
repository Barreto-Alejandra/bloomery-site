import { useEffect, useState, useMemo } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const LINKS = [
  { href: "#catalogo", label: "Catálogo" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const headerClasses = useMemo(
    () =>
      [
        "sticky top-0 z-50 transition",
        scrolled
          ? "bg-bg/70 backdrop-blur border-b border-border"
          : "bg-transparent",
      ].join(" "),
    [scrolled]
  );

  const mobilePanel = {
    hidden: { opacity: 0, y: -8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0 : 0.22, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -8,
      transition: { duration: prefersReducedMotion ? 0 : 0.18, ease: "easeIn" },
    },
  };

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-ink focus:text-bg px-3 py-2 rounded-md"
      >
        Saltar al contenido
      </a>

      <header className={headerClasses}>
        <div className="max-w-6xl lg:max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 h-16 lg:h-20 flex items-center justify-between">
          <a href="#hero" className="inline-flex items-center gap-2" aria-label="Inicio">
            <span className="inline-block w-3 h-3 rounded-full bg-gold" />
            <span className="text-xl lg:text-2xl font-extrabold tracking-tight text-ink">
              Bloomery
            </span>
          </a>

          <nav className="hidden lg:block" aria-label="Navegación principal">
            <ul className="flex items-center gap-8">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-ink/80 hover:text-ink transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <a
              href="#catalogo"
              className="inline-flex items-center justify-center rounded-full bg-primary hover:bg-primary-600
                         text-white px-5 py-2.5 text-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50"
            >
              Ver catálogo
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-border bg-surface
                       hover:border-primary hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary/40"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Abrir menú"
          >
            <span className="sr-only">Abrir menú</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              {open ? (
                <path d="M18.3 5.71 12 12.01l6.3 6.29-1.41 1.41L10.59 13.4l-6.3 6.3-1.41-1.42 6.29-6.29-6.3-6.3L4.3 4.3l6.29 6.3L16.9 4.3z"/>
              ) : (
                <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/>
              )}
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              key="mobile"
              variants={mobilePanel}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="lg:hidden border-t border-border bg-bg/95 backdrop-blur"
            >
              <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
                <nav aria-label="Navegación móvil">
                  <ul className="flex flex-col gap-4">
                    {LINKS.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="block text-ink text-base py-2"
                          onClick={() => setOpen(false)}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="mt-6">
                  <a
                    href="#catalogo"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center rounded-full bg-primary hover:bg-primary-600
                               text-white px-6 py-3 text-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50"
                  >
                    Ver catálogo
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
