import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { Terminal } from "./Terminal";

export function Experiments() {
  return (
    <section id="terminal" className="relative bg-[var(--bg)] pt-32 pb-32 md:pt-40">
      <div className="mx-auto max-w-content px-6 md:px-12">
        <Reveal>
          <SectionLabel>Terminal</SectionLabel>
          <h2 className="mt-6 max-w-[13ch] font-serif text-[clamp(40px,4.8vw,64px)] leading-[1.04] text-[var(--text-primary)]">
            Talk to the{" "}
            <em className="italic text-[#F09BC0]">terminal</em>
          </h2>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 max-w-content px-6 md:mt-20 md:px-12">
        <Reveal>
          <Terminal />
        </Reveal>
      </div>
    </section>
  );
}
