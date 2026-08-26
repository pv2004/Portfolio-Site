import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";

export function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-[42px] lg:gap-[56px]">
      {projects.map((project, i) => (
        <Reveal
          key={project.id}
          delay={(i % 2) * 0.12}
          className={i % 2 === 1 ? "lg:mt-24" : undefined}
        >
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </div>
  );
}
