import { motion, useReducedMotion } from "framer-motion";
import type { MotionProps } from "framer-motion";

export function Hero() {
  const reduce = useReducedMotion();

  const fade = (delay: number): MotionProps =>
    reduce
      ? { initial: false }
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1, delay, ease: [0.2, 0.7, 0.2, 1] },
        };

  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100vh-82px)] flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-24 md:px-12"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(45,55,180,0.25), transparent 35%), radial-gradient(circle at 75% 45%, rgba(180,55,90,0.15), transparent 35%), var(--bg)",
        }}
      />

      <div
        aria-hidden="true"
        className="prism-blur pointer-events-none absolute left-1/2 top-1/2 h-[110vmin] w-[110vmin]"
      />

      <div className="relative z-10 flex max-w-[900px] flex-col items-center text-center">
        <motion.p
          {...fade(0.1)}
          className="mb-10 text-[18px] text-[var(--text-secondary)] md:text-[19px]"
        >
          Hey! I am{" "}
          <span className="font-serif italic text-[var(--text-primary)]">Pabolu Vineeth</span>
        </motion.p>

        <motion.h1
          {...fade(0.28)}
          className="font-display font-serif text-[clamp(42px,10vw,96px)] leading-[0.98] text-[var(--text-primary)]"
        >
          Building for the way people{" "}
          <em className="italic text-[#d62e69]">think, work</em> and connect.
        </motion.h1>

        <motion.p
          {...fade(0.5)}
          className="mt-10 text-[18px] tracking-[0.04em] text-[var(--text-secondary)]"
        >
          Software Developer
        </motion.p>

        <motion.div {...fade(0.66)} className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#work"
            className="inline-block rounded-full border border-[var(--border-light)] px-7 py-[14px] text-[15px] text-[var(--text-primary)] transition-all duration-300 hover:bg-[var(--text-primary)] hover:text-[var(--bg)]"
          >
            View work
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border-light)] px-7 py-[14px] text-[15px] text-[var(--text-primary)] transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Resume
          </a>
        </motion.div>
      </div>

      <motion.div
        {...fade(1.1)}
        className="absolute inset-x-6 bottom-9 flex items-center justify-between text-[12px] uppercase tracking-[0.18em] text-[var(--text-dim)] md:inset-x-12"
      >
        <span>Based in India · 2026</span>
        <span className="hidden items-center gap-3 md:flex">
          Open to opportunities
          <span className="relative flex h-[7px] w-[7px]">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7ac943] opacity-60" />
            <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-[#7ac943]" />
          </span>
        </span>
        <span className="md:hidden">Scroll</span>
      </motion.div>
    </section>
  );
}
