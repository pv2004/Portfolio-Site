import { Link } from "react-router-dom";
import { Artwork } from "./Artwork";
import type { Project } from "../data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/project/${project.id}`}
      data-cursor="view"
      className="group block"
      aria-label={`${project.title} — ${project.tags.join(", ")}`}
    >
      <div className="relative aspect-[1.35/1] overflow-hidden rounded-card shadow-soft">
        <div className="absolute inset-0 transition-transform duration-[800ms] ease-premium group-hover:scale-[1.03]">
          <Artwork variant={project.art} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/35 via-transparent to-transparent opacity-80" />
        <span className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#f0eee8] text-[#080808] opacity-0 transition-all duration-500 group-hover:opacity-100">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>

      <h3 className="mt-7 font-serif text-[30px] leading-[1.1] text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[#d62e69]">
        {project.title}
      </h3>
      <p className="mt-3 max-w-[46ch] text-[17px] leading-[1.5] text-[var(--text-secondary)]">
        {project.description}
      </p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag} className="tag px-4 py-1.5 text-[13px]">
            {tag}
          </li>
        ))}
      </ul>
    </Link>
  );
}
