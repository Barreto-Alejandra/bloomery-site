import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

const IG = [
  { id: "ig1", src: "/assets/instagram-1.jpg", alt: "Detalle floral 1" },
  { id: "ig2", src: "/assets/instagram-2.png", alt: "Detalle floral 2" },
  { id: "ig3", src: "/assets/instagram-3.jpg", alt: "Detalle floral 3" },
  { id: "ig4", src: "/assets/instagram-4.jpg", alt: "Detalle floral 4" },
  { id: "ig5", src: "/assets/instagram-5.jpg", alt: "Detalle floral 5" },
  { id: "ig6", src: "/assets/instagram-1.jpg", alt: "Detalle floral 6" },
];

function makeSeamless(items, times = 2) {
  return Array.from({ length: times }).flatMap((_, i) =>
    items.map((it) => ({ ...it, key: `${it.id}-${i}` }))
  );
}

export default function InstagramCarousel({
  items = IG,
  profileUrl = "https://instagram.com/",
}) {
  const reduce = useReducedMotion();
  const lane = useMemo(() => makeSeamless(items, 3), [items]);

  const DURATION = 40;

  if (reduce) {
    return (
      <section className="bg-bg py-16 lg:py-24" aria-label="Bloomery en Instagram">
        <div className="max-w-6xl lg:max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <Header profileUrl={profileUrl} />
          <div
            className="no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto snap-x snap-mandatory"
            onWheel={(e) => {
              const el = e.currentTarget;
              if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                el.scrollLeft += e.deltaY;
                e.preventDefault();
              }
            }}
          >
            <ul className="flex items-stretch gap-4 sm:gap-6">
              {items.map((it) => (
                <li key={it.id} className="snap-center shrink-0">
                  <Card it={it} profileUrl={profileUrl} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-bg py-16 lg:py-24" aria-label="Bloomery en Instagram">
      <div className="max-w-6xl lg:max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        <Header profileUrl={profileUrl} />
      </div>

      <div className="overflow-hidden">
        <motion.ul
          className="flex items-stretch gap-4 sm:gap-6 will-change-transform"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: DURATION, repeat: Infinity }}
        >
          {lane.map((it) => (
            <li key={it.key} className="shrink-0">
              <Card it={it} profileUrl={profileUrl} />
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}


function Header({ profileUrl }) {
  return (
    <div className="mb-6 lg:mb-10 flex items-end justify-between gap-4">
      <div>
        <a
          href="https://instagram.com/bloomery-on-instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl md:text-3xl font-extrabold tracking-tight text-ink hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/40 rounded-sm transition"
        >
          @bloomery-on-instagram
        </a>
        <p className="mt-2 text-muted">Un vistazo a nuestro universo floral.</p>
      </div>
    </div>
  );
}

function Card({ it, profileUrl }) {
  return (
    <motion.a
      href={profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Abrir Instagram: ${it.alt}`}
      className="group relative block w-[68vw] sm:w-[40vw] lg:w-[28vw] aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-surface shadow-[var(--shadow-card)]"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
    >
      <img
        src={it.src}
        alt={it.alt}
        loading="lazy"
        className="h-full w-full object-cover"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition"
      />
    </motion.a>
  );
}
