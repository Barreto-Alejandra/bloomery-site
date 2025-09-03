import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/fadeUp";

const TESTIMONIALS = [
  { id: "t1", name: "Cliente A",      quote: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", role: "Asunción",        avatar: "" },
  { id: "t2", name: "Cliente B", quote: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", role: "Encarnación", avatar: "" },
  { id: "t3", name: "Cliente C",   quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.", role: "Ciudad del Este", avatar: "" },
];

function Card({ t }) {
  return (
    <figure
      className="
        flex flex-col items-center text-center
        rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-card)]
        h-full min-h-[220px] md:min-h-[240px] lg:min-h-[260px]
      "
    >
      <blockquote className="text-sm text-ink max-w-prose flex-1 flex items-center justify-center">
        “{t.quote}”
      </blockquote>

      <figcaption className="mt-4 flex flex-col items-center gap-2">
        {t.avatar ? (
          <img
            src={t.avatar}
            alt={`Foto de ${t.name}`}
            className="h-12 w-12 rounded-full object-cover border border-border"
            loading="lazy"
          />
        ) : (
          <div className="h-12 w-12 rounded-full bg-lavender-200 border border-border" aria-hidden="true" />
        )}
        <div>
          <p className="text-sm font-medium text-ink">{t.name}</p>
          <p className="text-xs text-muted">{t.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Testimonials({ items = TESTIMONIALS }) {
  return (
    <section aria-labelledby="testi-heading" className="bg-bg py-16 lg:py-20">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-6xl lg:max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 text-center"
      >
        <div className="mb-8 lg:mb-12">
          <h2 id="testi-heading" className="text-2xl md:text-3xl font-extrabold tracking-tight text-ink">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-2 text-muted">Experiencias reales contadas en pocas palabras.</p>
        </div>

        <Swiper
          className="testi-swiper"
          modules={[Pagination, Autoplay]}
          loop={true}
          breakpoints={{
            0:    { slidesPerView: 1, spaceBetween: 16 },
            768:  { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          style={{ paddingBottom: "2rem" }}
        >
          {items.map((t) => (
            <SwiperSlide key={t.id}>
              <Card t={t} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}