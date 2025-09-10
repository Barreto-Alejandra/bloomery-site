import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const LINKS = [
  { href: "#catalogo",    label: "Catálogo" },
  { href: "#beneficios",  label: "Beneficios" },
  { href: "#porque",      label: "Por qué elegirnos" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto",    label: "Contacto" },
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
    document.body.classList.toggle("overflow-hidden", open);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  const headerClasses = useMemo(
    () =>
      [
        "sticky top-0 z-[80] h-16 lg:h-20",
        "transition-colors duration-300",
        "border-b",
        (scrolled || open)
          ? "bg-bg/90 supports-[backdrop-filter]:bg-bg/70 supports-[backdrop-filter]:backdrop-blur border-border"
          : "bg-transparent border-transparent",
      ].join(" "),
    [scrolled, open]
  );

  const mobilePanel = {
    hidden: { opacity: 0, y: -8 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: prefersReducedMotion ? 0 : 0.22, ease: "easeOut" },
    },
    exit: {
      opacity: 0, y: -8,
      transition: { duration: prefersReducedMotion ? 0 : 0.18, ease: "easeIn" },
    },
  };

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[90] focus:bg-ink focus:text-bg px-3 py-2 rounded-md"
      >
        Saltar al contenido
      </a>

      <header className={headerClasses}>
        <div className="max-w-6xl lg:max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 h-full flex items-center justify-between">
          <a href="#hero" className="inline-flex items-center gap-2" aria-label="Ir al inicio">
            <span className="inline-block w-3 h-3 rounded-full bg-gold" />
            <span className="text-xl lg:text-2xl font-extrabold tracking-tight text-ink">Bloomery</span>
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

          <button
            onClick={() => setOpen(v => !v)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-border bg-surface
                       hover:border-primary hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary/40 z-[90]"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
              {open ? (
                <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M6 6l12 12" />
                  <path d="M18 6l-12 12" />
                </g>
              ) : (
                <path fill="currentColor" d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
              )}
            </svg>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menú móvil"
            key="mobile"
            variants={mobilePanel}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[70] bg-bg supports-[backdrop-filter]:bg-bg supports-[backdrop-filter]:backdrop-blur"
            onClick={() => setOpen(false)}
          >
            <div className="pt-20 lg:pt-24 h-full px-4 sm:px-6">
              <nav
                className="max-w-md mx-auto w-full"
                aria-label="Navegación móvil"
                onClick={(e) => e.stopPropagation()}
              >
                <ul className="flex flex-col gap-1">
                  {LINKS.map(link => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="block text-lg px-6 py-4 text-ink hover:bg-ink/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30"
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
