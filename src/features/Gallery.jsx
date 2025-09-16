import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/fadeUp";

const defaultItems = [
  { id: "ligereza", name: "Ligereza", img: "/assets/gallery-1.jpg", alt: "Bouquet Ligereza en tonos lavanda y crema", price: "Gs. 180.000" },
  { id: "blancanieve", name: "Blancanieve", img: "/assets/gallery-2.jpg", alt: "Bouquet Blancanieve con rosas blancas y toques dorados", price: "Gs. 210.000" },
  { id: "primavera", name: "Primavera", img: "/assets/gallery-3.jpg", alt: "Bouquet Primavera con flores mixtas en tonos pastel", price: "Gs. 200.000" },
];

function Card({ item }) {
  return (
    <article className="group bg-surface border border-border rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={item.img}
          alt={item.alt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 will-change-transform"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 ring-0 ring-primary/0 group-hover:ring-2 group-hover:ring-primary/15 transition" />
      </div>

      <div className="p-4">
        <h3 className="text-base font-semibold text-ink">{item.name}</h3>
        <p className="text-sm text-muted mt-1">{item.price}</p>

        <div className="mt-4 flex items-center gap-2">
          <a
            href={`#catalogo-${item.id}`}
            className="inline-flex items-center justify-center px-4 py-2 text-sm rounded-full border border-border hover:border-primary hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            Ver detalle
          </a>
          <button
            type="button"
            className="ml-auto inline-flex items-center justify-center px-4 py-2 text-sm rounded-full bg-primary hover:bg-primary-600 text-white transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50"
            aria-label={`Hacer pedido ${item.name}`}
          >
            Hacer pedido
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Gallery({ items = defaultItems, title = "Bouquets destacados" }) {
  return (
    <section id="catalogo" className="bg-bg py-16 lg:py-24">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl lg:max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20"
      >
        <div className="mb-8 lg:mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-ink">
            {title}
          </h2>
          <p className="mt-2 text-muted max-w-prose">
            Selección curada para regalar o hacer florecer tu espacio.
          </p>
        </div>

        <div className="block md:hidden">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1.1}
            spaceBetween={16}
            pagination={{ clickable: true }}
            className="gallery-swiper"
            style={{ paddingBottom: "2.5rem" }}
          >
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <Card item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card item={item} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
