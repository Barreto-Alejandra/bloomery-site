import { useMemo, useRef, useState, useLayoutEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { asset } from "../lib/asset";

const IG_DEFAULT = [
  { id: "ig1", src: asset("assets/instagram-1.jpg"), alt: "Detalle floral 1" },
  { id: "ig2", src: asset("assets/instagram-2.png"), alt: "Detalle floral 2" },
  { id: "ig3", src: asset("assets/instagram-3.jpg"), alt: "Detalle floral 3" },
  { id: "ig4", src: asset("assets/instagram-4.jpg"), alt: "Detalle floral 4" },
  { id: "ig5", src: asset("assets/instagram-5.jpg"), alt: "Detalle floral 5" },
  { id: "ig6", src: asset("assets/instagram-1.jpg"), alt: "Detalle floral 6" },
];

function makeSeamless(items, times = 3) {
  return Array.from({ length: times }).flatMap((_, cloneIndex) =>
    items.map((it, i) => ({
      ...it,
      key: `${it.id}__c${cloneIndex}__i${i}`,
      cloneIndex,
    }))
  );
}

function Header({ handle = "@bloomery-on-instagram", url = "https://instagram.com/bloomery-on-instagram" }) {
  return (
    <div className="mb-6 lg:mb-10 flex items-end justify-between gap-4">
      <div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl md:text-3xl font-extrabold tracking-tight text-ink hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/40 rounded-sm transition"
        >
          {handle}
        </a>
        <p className="mt-2 text-muted">Un vistazo a nuestro universo floral.</p>
      </div>
    </div>
  );
}

function Card({ it, href, reduce }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Abrir Instagram: ${it.alt || "Publicación"}`}
      className="group relative block w-[68vw] sm:w-[40vw] lg:w-[28vw] aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-surface shadow-[var(--shadow-card)]"
      whileHover={reduce ? undefined : { scale: 1.02 }}
      whileTap={reduce ? undefined : { scale: 0.985 }}
      transition={reduce ? undefined : { type: "spring", stiffness: 260, damping: 24 }}
    >
      <img
        src={it.src}
        alt={it.alt || ""}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
        sizes="(min-width:1024px) 28vw, (min-width:640px) 40vw, 68vw"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition"
      />
    </motion.a>
  );
}

export default function InstagramCarousel({
  items = IG_DEFAULT,
  handle = "@bloomery-on-instagram",
  profileUrl = "https://instagram.com/bloomery-on-instagram",
  pxPerSec = 80,
  clones = 3,
}) {
  const reduce = useReducedMotion();

  const list = useMemo(
    () => (items || IG_DEFAULT).map((it, i) => ({
      id: it.id ?? `ig-${i}`,
      src: it.src ?? asset("assets/instagram-1.jpg"),
      alt: it.alt ?? "",
    })),
    [items]
  );
  const lane = useMemo(() => makeSeamless(list, clones), [list, clones]);

  const ref = useRef(null);
  const [duration, setDuration] = useState(40);
  useLayoutEffect(() => {
    const calc = () => {
      if (!ref.current) return;
      const half = ref.current.scrollWidth / 2;
      setDuration(Math.max(10, half / pxPerSec));
    };
    calc();
    const ro = new ResizeObserver(calc);
    if (ref.current) ro.observe(ref.current);
    window.addEventListener("resize", calc);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", calc);
    };
  }, [pxPerSec]);

  if (reduce) {
    return (
      <section className="bg-bg py-16 lg:py-24" aria-label="Bloomery en Instagram">
        <div className="max-w-6xl lg:max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <Header handle={handle} url={profileUrl} />
          <div
            className="no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto snap-x snap-mandatory"
            onWheel={(e) => {
              const el = e.currentTarget;
              if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                el.scrollLeft += e.deltaY;
                e.preventDefault();
              }
            }}
            aria-roledescription="carrusel"
            aria-label="Publicaciones de Instagram (desliza horizontalmente)"
          >
            <ul className="flex items-stretch gap-4 sm:gap-6" role="list">
              {list.map((it) => (
                <li key={it.id} className="snap-center shrink-0">
                  <Card it={it} href={profileUrl} reduce />
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
        <Header handle={handle} url={profileUrl} />
      </div>

      <div className="overflow-hidden">
        <motion.ul
          ref={ref}
          className="flex items-stretch gap-4 sm:gap-6 will-change-transform"
          initial={false}
          whileInView={{ x: ["0%", "-50%"] }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ ease: "linear", duration, repeat: Infinity }}
          aria-roledescription="carrusel"
          aria-label="Publicaciones de Instagram (animación continua)"
          role="list"
        >
          {lane.map((it) => (
            <li
              key={it.key}
              className="shrink-0"
              aria-hidden={it.cloneIndex > 0 ? "true" : undefined}
            >
              <Card
                it={it}
                href={profileUrl}
                reduce={false}
                {...(it.cloneIndex > 0 ? { tabIndex: -1 } : {})}
              />
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
