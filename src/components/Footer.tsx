import type { ComponentType } from "react";
import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { GradientLine } from "./GradientLine";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

type IconType = ComponentType<{ className?: string }>;

const links: Array<{ label: string; value: string; href: string; icon: IconType }> = [
  {
    label: "Email",
    value: "harivineeth51@gmail.com",
    href: "mailto:harivineeth51@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/pabolu-vineeth",
    href: "https://www.linkedin.com/in/pabolu-vineeth-129b4626b/",
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    value: "github.com/pv2004",
    href: "https://github.com/pv2004",
    icon: GithubIcon,
  },
  {
    label: "Phone",
    value: "+91 91007 33701",
    href: "tel:+919100733701",
    icon: Phone,
  },
];

const details = [
  {
    label: "Experience",
    lines: [
      ["Data Science Intern", "Zidio Development · Apr–May 2024"],
    ],
  },
  {
    label: "Education",
    lines: [
      ["B.Tech, CSE", "SRM University, Kattankulathur · CGPA 8.58"],
      ["Intermediate MPC", "Vidya Junior College, Chirala · 82.1%"],
    ],
  },
  {
    label: "Certifications",
    lines: [
      ["Database Management", "Scaler"],
      ["Data Science", "Cisco Networking Academy"],
      ["Full Stack Web Dev", "Udemy"],
    ],
  },
  {
    label: "Stack",
    lines: [
      ["Languages", "Python · C · C++ · Java"],
      ["Web & APIs", "HTML/CSS · REST · Flask · FastAPI"],
      ["Data & AI", "Power BI · SQL · TensorFlow · Pandas"],
      ["IOT & Tools", "Arduino · ESP8266 · Raspberry Pi · Git"],
    ],
  },
];

export function Footer() {
  return (
    <footer id="contact">
      <GradientLine />
      <div className="bg-[var(--bg)] px-6 pt-32 pb-10 md:px-12 lg:pt-40">
        <div className="mx-auto max-w-content">
          <Reveal>
            <SectionLabel>Contact</SectionLabel>
            <h2 className="mt-6 max-w-[11ch] font-serif text-[clamp(44px,6vw,88px)] leading-[1.02] text-[var(--text-primary)]">
              Let’s make something that{" "}
              <em className="italic text-[#d62e69]">matters.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-8 max-w-[42ch] text-[17px] leading-[1.65] text-[var(--text-secondary)]">
              I’m always open to interesting projects and collaborations.
              Whether it’s a product idea, a hackathon, or just a cool problem
              to solve — let’s talk.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
              {links.map((link) => (
                <div key={link.label}>
                  <link.icon className="h-5 w-5 shrink-0 text-[var(--text-muted)]" />
                  <a
                    href={link.href}
                    className="mt-3 inline-block break-all text-[15px] leading-[1.5] text-[var(--text-muted)] transition-colors duration-300 hover:text-[var(--accent)]"
                  >
                    {link.value}
                    <span aria-hidden="true" className="ml-2 whitespace-nowrap opacity-60">
                      ↗
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-20 grid gap-12 border-t border-[#1c1c1c] pt-14 sm:grid-cols-2 lg:grid-cols-4">
              {details.map((block) => (
                <div key={block.label}>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--text-dim)]">
                    {block.label}
                  </p>
                  <ul className="mt-5 space-y-4">
                    {block.lines.map(([title, meta]) => (
                      <li key={title}>
                        <p className="text-[15px] text-[var(--text-primary)]">{title}</p>
                        <p className="mt-0.5 text-[13px] leading-[1.5] text-[var(--text-muted)]">
                          {meta}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="mt-24 flex flex-col justify-between gap-4 border-t border-[var(--border)] pt-8 text-[13px] text-[var(--text-dim)] md:flex-row">
            <p>Pabolu Vineeth © 2026</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
