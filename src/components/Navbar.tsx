import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const links = [
  { label: "Work", href: "#work" },
  { label: "Terminal", href: "#terminal" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-[80]">
      <nav
        className={`flex h-20 items-center justify-between px-6 transition-colors duration-500 md:px-12 ${
          scrolled ? "bg-[var(--bg)]/85 backdrop-blur-md" : "bg-transparent"
        }`}
        aria-label="Primary"
      >
        <a
          href="#top"
          className="group"
          aria-label="Pabolu Vineeth — back to top"
          onClick={() => setOpen(false)}
        >
          <img
            src="/logo-v.png"
            alt="Pabolu Vineeth"
            className="h-[44px] w-auto transition-opacity duration-300 group-hover:opacity-80"
          />
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((link, i) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`relative text-[14px] font-medium uppercase tracking-[0.08em] transition-colors duration-300 hover:text-[var(--text-primary)] ${
                  i === 0 ? "text-[var(--accent)]" : "text-[var(--text-secondary)]"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={toggle}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-light)] text-[var(--text-secondary)] transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          </li>
        </ul>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-light)] text-[var(--text-primary)] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="relative block h-[14px] w-[20px]">
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-full bg-current transition-all duration-300 ${
                open ? "translate-y-[6.25px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-[1.5px] w-full bg-current transition-all duration-300 ${
                open ? "-translate-y-[6.25px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div className="gradient-line h-[2px] w-full" />

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-x-0 bottom-0 top-[82px] z-[-1] flex flex-col justify-center bg-[var(--bg)] px-8"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <ul className="space-y-6">
              {links.map((link, i) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`font-serif text-5xl leading-tight ${
                      i === 0 ? "text-[var(--accent)]" : "text-[var(--text-primary)]"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-16 text-sm uppercase tracking-[0.2em] text-[var(--text-muted)]">
              Software Developer
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
