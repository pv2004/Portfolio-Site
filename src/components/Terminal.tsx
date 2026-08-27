import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { projects } from "../data/projects";
import { experiments } from "../data/experiments";

interface Line {
  id: number;
  node: ReactNode;
}

let lineId = 0;
const makeLine = (node: ReactNode): Line => ({ id: ++lineId, node });

const COMMANDS = [
  ["help", "list every command"],
  ["whoami", "who is behind this portfolio"],
  ["projects", "the shipped work"],
  ["experiments", "side labs and play"],
  ["skills", "the toolbox"],
  ["contact", "reach out"],
  ["open <section>", "jump to a section"],
  ["clear", "wipe the screen"],
] as const;

const COMMAND_NAMES = COMMANDS.map(([name]) => name.split(" ")[0]);

const SECTIONS: Record<string, string | null> = {
  home: null,
  work: "#work",
  projects: "#work",
  archive: "#terminal",
  experiments: "#terminal",
  about: "#about",
  contact: "#contact",
};

function scrollToSection(target: string | null): boolean {
  if (target === null) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return true;
  }
  const el = document.querySelector<HTMLElement>(target);
  if (!el) return false;
  el.scrollIntoView({ behavior: "smooth" });
  return true;
}

function linkCls() {
  return "text-[#f09bc0] underline decoration-[#d62e69]/50 underline-offset-4 transition-colors hover:text-[#d62e69]";
}

function run(raw: string): Line[] {
  const input = raw.trim();
  const [cmd, ...args] = input.split(/\s+/).filter(Boolean);
  const out: Line[] = [];
  const name = (cmd ?? "").toLowerCase();

  switch (name) {
    case "":
      break;

    case "help":
      out.push(
        makeLine(
          <span className="text-[#f0eee8]">Available commands:</span>
        )
      );
      COMMANDS.forEach(([cname, desc]) =>
        out.push(
          makeLine(
            <span>
              <span className="text-[#f09bc0]">
                {cname.padEnd(16, "\u00a0")}
              </span>
              <span className="text-[#989898]">{desc}</span>
            </span>
          )
        )
      );
      out.push(
        makeLine(
          <span className="text-[#666]">
            Tip: ↑/↓ for history · Tab autocompletes · there may be secrets.
          </span>
        )
      );
      break;

    case "whoami":
      out.push(
        makeLine(
          <span className="leading-relaxed">
            <span className="text-[#f0eee8]">Pabolu Vineeth</span>
            <span className="text-[#666]"> — </span>
            <span className="text-[#f09bc0]">
              software developer
            </span>
            <br />
            <span className="text-[#989898]">
              B.Tech CSE @ SRM University. I turn messy data and complex
              problems into clean, working software.
            </span>
          </span>
        )
      );
      break;

    case "projects":
      projects.forEach((p) =>
        out.push(
          makeLine(
            <span className="leading-relaxed">
              <span className="text-[#f0eee8]">{p.title}</span>{" "}
              <span className="text-[#666]">({p.year})</span>
              <br />
              <span className="text-[#989898]">{p.description}</span>
              <br />
              <span className="text-[#7ac943]">{p.tags.join(" · ")}</span>
            </span>
          )
        )
      );
      out.push(
        makeLine(
          <span className="text-[#666]">
            Full view at{" "}
            <button
              type="button"
              onClick={() => scrollToSection("#work")}
              className={linkCls()}
            >
              #work
            </button>
          </span>
        )
      );
      break;

    case "experiments":
      experiments.forEach((e) =>
        out.push(
          makeLine(
            <span className="leading-relaxed">
              <span className="text-[#f0eee8]">{e.title}</span>
              <br />
              <span className="text-[#989898]">{e.description}</span>
              <br />
              <span className="text-[#7ac943]">{e.tags.join(" · ")}</span>
            </span>
          )
        )
      );
      break;

    case "skills": {
      const rows: Array<[string, string]> = [
        ["languages ", "Python · C · C++ · Java"],
        ["web & api ", "HTML/CSS · REST · Flask · FastAPI"],
        ["data & ai ", "Power BI · SQL · TensorFlow · Pandas"],
        ["iot & tools", "Arduino · ESP8266 · Raspberry Pi · Git"],
      ];
      rows.forEach(([k, v]) =>
        out.push(
          makeLine(
            <span>
              <span className="text-[#f09bc0]">{k}</span>
              <span className="text-[#666]">{" \u2502 "}</span>
              <span className="text-[#d8d5ce]">{v}</span>
            </span>
          )
        )
      );
      break;
    }

    case "contact":
      out.push(
        makeLine(
          <span className="leading-loose">
            <span className="text-[#989898]">email    </span>
            <a href="mailto:harivineeth51@gmail.com" className={linkCls()}>
              harivineeth51@gmail.com
            </a>
            <br />
            <span className="text-[#989898]">phone    </span>
            <a href="tel:+919100733701" className={linkCls()}>
              +91 91007 33701
            </a>
            <br />
            <span className="text-[#989898]">linkedin  </span>
            <a
              href="https://www.linkedin.com/in/pabolu-vineeth-129b4626b/"
              target="_blank"
              rel="noreferrer"
              className={linkCls()}
            >
              /in/pabolu-vineeth ↗
            </a>
            <br />
            <span className="text-[#989898]">github   </span>
            <a
              href="https://github.com/pv2004"
              target="_blank"
              rel="noreferrer"
              className={linkCls()}
            >
              /pv2004 ↗
            </a>
          </span>
        )
      );
      break;

    case "open": {
      const key = (args[0] ?? "").toLowerCase();
      if (!key || !(key in SECTIONS)) {
        out.push(
          makeLine(
            <span className="text-[#989898]">
              usage: open &lt;home | work | archive | about&gt;
            </span>
          )
        );
      } else if (scrollToSection(SECTIONS[key])) {
        out.push(
          makeLine(<span className="text-[#7ac943]">navigating to #{key}…</span>)
        );
      } else {
        out.push(
          makeLine(<span className="text-[#e06c75]">section not found.</span>)
        );
      }
      break;
    }

    case "clear":
      return [];

    case "ls":
      out.push(
        makeLine(
          <span className="text-[#d8d5ce]">
            <span className="text-[#42b8d9]">projects/</span>{" "}
            <span className="text-[#42b8d9]">experiments/</span> ideas.txt
            resume.pdf{" "}
            <span className="text-[#666]">secrets/</span>
          </span>
        )
      );
      break;

    case "cat":
      if ((args[0] ?? "") === "ideas.txt") {
        out.push(
          makeLine(
            <span className="text-[#989898]">
              1. gesture-controlled everything
              <br />
              2. a dashboard for my plants
              <br />3. ship something that matters.
            </span>
          )
        );
      } else if ((args[0] ?? "") === "resume.pdf") {
        out.push(
          makeLine(
            <span className="text-[#989898]">
              binary file — try{" "}
              <button
                type="button"
                onClick={() => scrollToSection("#contact")}
                className={linkCls()}
              >
                #contact
              </button>{" "}
              instead
            </span>
          )
        );
      } else {
        out.push(
          makeLine(
            <span className="text-[#e06c75]">
              cat: {(args[0] ?? "").length ? args[0] : "?"}: no such file
            </span>
          )
        );
      }
      break;

    case "sudo":
      if (input.toLowerCase().includes("hire")) {
        out.push(
          makeLine(
            <span className="leading-relaxed">
              <span className="text-[#7ac943]">[sudo] access granted.</span>
              <br />
              <span className="text-[#f0eee8]">
                Excellent decision. Let's talk →
              </span>{" "}
              <a href="mailto:harivineeth51@gmail.com" className={linkCls()}>
                harivineeth51@gmail.com
              </a>
            </span>
          )
        );
      } else {
        out.push(
          makeLine(
            <span className="text-[#989898]">
              vineeth is not in the sudoers file. This incident will be
              reported… to nobody. Try `sudo hire vineeth`.
            </span>
          )
        );
      }
      break;

    case "coffee":
      out.push(
        makeLine(
          <pre className="whitespace-pre text-[13px] leading-tight text-[#f09bc0]">
            {String.raw`   ( (
    ) )
  ........
  |      |]
  \      /
   ------
  brewing motivation…`}
          </pre>
        )
      );
      break;

    case "date":
      out.push(
        makeLine(
          <span className="text-[#989898]">{new Date().toString()}</span>
        )
      );
      break;

    case "echo":
      out.push(makeLine(<span className="text-[#d8d5ce]">{args.join(" ")}</span>));
      break;

    default:
      out.push(
        makeLine(
          <span className="leading-relaxed">
            <span className="text-[#e06c75]">
              command not found: {cmd}
            </span>
            <br />
            <span className="text-[#666]">
              try{" "}
              <button
                type="button"
                onClick={() => scrollToSection(null)}
                className={linkCls()}
              >
                help
              </button>{" "}
              — or just ask me over email.
            </span>
          </span>
        )
      );
  }

  return out;
}

export function Terminal() {
  const [lines, setLines] = useState<Line[]>([]);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setLines([
      makeLine(
        <span className="text-[#666]">
          Last login: {new Date().toDateString()} on ttys001
        </span>
      ),
      makeLine(
        <span className="leading-relaxed">
          <span className="text-[#f0eee8]">Welcome to vineeth.dev</span>
          <span className="text-[#666]"> — a portfolio you can talk to.</span>
          <br />
          <span className="text-[#989898]">
            Type <span className="text-[#f09bc0]">help</span> to look around.
          </span>
        </span>
      ),
    ]);
    return () => {
      lineId = 0;
    };
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  const focusInput = () => inputRef.current?.focus({ preventScroll: true });

  const executeCmd = (cmdToRun: string) => {
    const trimmed = cmdToRun.trim();
    setValue("");
    const echoed = makeLine(
      <span>
        <span className="text-[#7ac943]">➜</span>
        <span className="ml-2 text-[#42b8d9]">~/vineeth</span>
        <span className="ml-2 text-[#d62e69]">$</span>
        <span className="ml-2 text-[#f0eee8]">{trimmed}</span>
      </span>
    );
    const result = trimmed ? run(cmdToRun) : [];
    setLines((prev) => [...prev, echoed, ...result]);
    if (trimmed && trimmed !== "clear") {
      setHistory((prev) => [...prev, trimmed]);
    }
    setHistIdx(-1);
    focusInput();
  };

  const submit = () => {
    executeCmd(value);
  };

  const complete = () => {
    const token = value.trimStart().split(/\s+/)[0] ?? "";
    if (!token) return;
    const match = COMMAND_NAMES.find((c) => c.startsWith(token.toLowerCase()));
    if (match) setValue(match + " ");
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      submit();
    } else if (e.key === "Tab") {
      e.preventDefault();
      complete();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!history.length) return;
      const next = histIdx < 0 ? history.length - 1 : Math.max(0, histIdx - 1);
      setHistIdx(next);
      setValue(history[next]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIdx < 0) return;
      const next = histIdx + 1;
      if (next >= history.length) {
        setHistIdx(-1);
        setValue("");
      } else {
        setHistIdx(next);
        setValue(history[next]);
      }
    }
  };

  return (
    <div
      onClick={focusInput}
      className="overflow-hidden rounded-card border border-[#252525] bg-[#101010] shadow-soft transition-colors duration-500 hover:border-[#333]"
    >
      <div className="flex items-center gap-2 border-b border-[#1c1c1c] bg-[#141414] px-5 py-3.5">
        <span className="h-3 w-3 rounded-full bg-[#d62e69]" />
        <span className="h-3 w-3 rounded-full bg-[#f0c95a]" />
        <span className="h-3 w-3 rounded-full bg-[#7ac943]" />
        <span className="ml-3 select-none font-mono text-[12px] tracking-wide text-[#666]">
          vineeth@portfolio — zsh
        </span>
        <span className="ml-auto hidden font-mono text-[11px] uppercase tracking-[0.18em] text-[#4a4a4a] sm:block">
          interactive
        </span>
      </div>

      <div
        ref={scrollRef}
        aria-live="polite"
        aria-label="Interactive terminal output"
        className="no-scrollbar h-[380px] cursor-text overflow-y-auto px-5 py-5 font-mono text-[13.5px] leading-relaxed md:text-[14px]"
      >
        {lines.map((line) => (
          <div key={line.id} className="term-line whitespace-pre-wrap break-words">
            {line.node}
          </div>
        ))}

        <div className="flex flex-wrap items-baseline">
          <span className="mr-2 shrink-0 select-none">
            <span className="text-[#7ac943]">➜</span>
            <span className="ml-2 text-[#42b8d9]">~/vineeth</span>
            <span className="ml-2 text-[#d62e69]">$</span>
          </span>
          <span className="relative min-w-[40%] grow">
            <span className="text-[#f0eee8]">{value}</span>
            <span className="term-caret ml-px inline-block h-[15px] w-[8px] translate-y-[2px] bg-[#f0eee8]" />
            <input
              ref={inputRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={onKeyDown}
              aria-label="Terminal command input"
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
              className="absolute inset-0 h-full w-full cursor-text bg-transparent text-transparent caret-transparent opacity-0 outline-none"
            />
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 border-t border-[#1c1c1c] px-5 py-4">
        <span className="mr-1 hidden font-mono text-[11px] uppercase tracking-[0.18em] text-[#4a4a4a] sm:block">
          try:
        </span>
        {COMMAND_NAMES.filter((c) => !["clear", "open"].includes(c)).map((c) => (
          <button
            key={c}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              executeCmd(c);
            }}
            className="tag-dark px-3.5 py-1 font-mono text-[12px] transition-colors duration-300 hover:border-[#d62e69] hover:text-[#f09bc0]"
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
