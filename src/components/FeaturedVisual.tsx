import { CodeCompiler } from "./CodeCompiler";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function FeaturedVisual() {
  return (
    <section id="showcase" className="relative overflow-hidden bg-[var(--bg)] py-32 md:py-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 80% 50%, rgba(180,55,90,0.08), transparent 40%), radial-gradient(circle at 15% 85%, rgba(66,184,217,0.06), transparent 45%)",
        }}
      />
      <div className="relative mx-auto max-w-content px-6 md:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
          <Reveal>
            <div>
              <SectionLabel>In motion</SectionLabel>
              <h2 className="mt-6 font-serif text-[clamp(40px,4.6vw,72px)] leading-[1.02] text-[var(--text-primary)]">
                It starts with a{" "}
                <em className="italic text-[#d62e69]">question,</em>
                <br />
                and becomes{" "}
                <em className="italic text-[#F09BC0]">code.</em>
              </h2>
              <p className="mt-8 max-w-[36ch] text-[17px] leading-[1.6] text-[var(--text-secondary)]">
                Watch a question turn into a running program — the same way
                every project here started: curiosity first, then code.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15} y={40}>
            <CodeCompiler />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
