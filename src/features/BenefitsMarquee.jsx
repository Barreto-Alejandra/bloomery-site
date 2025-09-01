import Marquee from "react-fast-marquee";

const items = [
  "🌸 Entregas en el día*",
  "✨ Personalización",
  "🎁 Regalos únicos",
  "💬 Asesoría de floristas",
];

export default function BenefitsMarquee() {
  return (
    <section
      aria-label="Beneficios Bloomery"
      className="bg-surface border-y border-border"
    >
      <Marquee
        gradient={false}
        pauseOnHover
        speed={40}
        autoFill
        className="py-3 text-sm text-ink/90"
      >
        {items.map((txt, i) => (
          <span key={i} className="mx-8 inline-flex items-center">
            {txt}
          </span>
        ))}
      </Marquee>
    </section>
  );
}