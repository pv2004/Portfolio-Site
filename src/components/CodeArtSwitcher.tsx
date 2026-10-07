import { useTheme } from "../context/ThemeContext";

/**
 * Code / Art portfolio switcher.
 *
 * Rendered at page level (outside the fixed navbar) so it sits directly under
 * the navbar at rest and scrolls away with the page instead of being pinned.
 * z-[70] keeps it above page content but below the navbar (z-[80]), so it
 * slides cleanly under the frosted nav as you scroll.
 */
export function CodeArtSwitcher() {
  const { theme } = useTheme();

  return (
    <div className="absolute left-1/2 top-[94px] z-[70] -translate-x-1/2">
      <div className="flex items-center gap-1 rounded-full border border-[var(--border-light)] bg-[var(--bg-card)] p-1 shadow-soft">
        <div className="group relative flex items-center">
          <span className="cursor-default rounded-full bg-[var(--accent)] px-5 py-2.5 text-[12px] font-bold uppercase leading-none tracking-[0.12em] text-white shadow-sm">
            Code
          </span>
          <span className="pointer-events-none absolute left-1/2 top-full z-50 mt-2.5 -translate-x-1/2 whitespace-nowrap rounded-md bg-[var(--text-primary)] px-2.5 py-1.5 text-[11px] font-medium text-[var(--bg)] opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100">
            You are here
          </span>
        </div>
        <div className="group relative flex items-center">
          <a
            href={`https://design-portfolio-weld.vercel.app/?theme=${theme}`}
            className="rounded-full px-5 py-2.5 text-[12px] font-bold uppercase leading-none tracking-[0.12em] text-[var(--text-secondary)] transition-colors duration-300 hover:bg-[var(--bg)] hover:text-[var(--text-primary)]"
          >
            Art
          </a>
          <span className="pointer-events-none absolute left-1/2 top-full z-50 mt-2.5 -translate-x-1/2 whitespace-nowrap rounded-md bg-[var(--text-primary)] px-2.5 py-1.5 text-[11px] font-medium text-[var(--bg)] opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100">
            View Design Portfolio
          </span>
        </div>
      </div>
    </div>
  );
}
