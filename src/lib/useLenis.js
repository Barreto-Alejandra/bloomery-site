import { useEffect } from "react";
import Lenis from "lenis";

export function useLenis({ enabled = true } = {}) {
  useEffect(() => {
    if (!enabled) return;

    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
      lerp: 0.1,
    });

    let rafId;
    const raf = (time) => { lenis.raf(time); rafId = requestAnimationFrame(raf); };
    rafId = requestAnimationFrame(raf);

    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const hash = a.getAttribute("href");
      if (!hash || hash.length <= 1) return;
      const el = document.querySelector(hash);
      if (!el) return;
      e.preventDefault();
      const header = document.querySelector("header");
      const offset = header ? -header.offsetHeight - 8 : 0;
      lenis.scrollTo(el, { offset, duration: 0.9 });
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      document.removeEventListener("click", onClick);
      document.documentElement.style.scrollBehavior = prev || "";
    };
  }, [enabled]);
}
