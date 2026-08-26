import { ProjectGrid } from "./ProjectGrid";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function Work() {
  return (
    <section id="work" className="relative bg-cream text-[#0a0a0a]">
      <div className="mx-auto max-w-content px-6 pt-32 pb-40 md:px-12 lg:pt-40">
        <Reveal>
          <SectionLabel>Projects</SectionLabel>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-6 max-w-[15ch] font-serif text-[clamp(44px,5vw,66px)] leading-[1.02] text-[#0a0a0a] md:mx-auto md:text-center">
            Code for purpose,{" "}
            <em className="italic text-[#d62e69]">people</em> and solutions.
          </h2>
        </Reveal>

        <div className="mt-24 md:mt-32">
          <ProjectGrid />
        </div>
      </div>
    </section>
  );
}
