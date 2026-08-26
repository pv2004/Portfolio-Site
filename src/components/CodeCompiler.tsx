import {
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { useReducedMotion } from "framer-motion";

type Phase = "typing" | "compiling" | "running";

const SCRIPT = `# question: will it rain this week?
import requests

API = "https://api.openweathermap.org/data"

def forecast(city):
    res = requests.get(f"{API}/forecast/{city}")
    return res.json()["days"]

for day in forecast("Chennai"):
    print(day["label"], day["temp"], day["rain"])`;

const OUTPUT_ROWS = [
  ["Mon", "31°C", "rain 10%"],
  ["Tue", "29°C", "rain 65%"],
  ["Wed", "30°C", "rain 20%"],
];

const TOKEN_RE =
  /(#[^"\n]*)|(f?"[^"]*")|\b(import|from|def|return|for|in|print|if|else)\b|\b(\d+(?:\.\d+)?)\b/g;

function highlight(line: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const m of line.matchAll(TOKEN_RE)) {
    const idx = m.index ?? 0;
    if (idx > last) {
      nodes.push(
        <span key={key++} className="text-[#d8d5ce]">
          {line.slice(last, idx)}
        </span>
      );
    }
    const [full, comment, str, kw, num] = m;
    const cls = comment
      ? "italic text-[#666]"
      : str
        ? "text-[#7ac943]"
        : kw
          ? "text-[#d62e69]"
          : num
            ? "text-[#42b8d9]"
            : "";
    nodes.push(
      <span key={key++} className={cls}>
        {full}
      </span>
    );
    last = idx + full.length;
  }
  if (last < line.length) {
    nodes.push(
      <span key={key++} className="text-[#d8d5ce]">
        {line.slice(last)}
      </span>
    );
  }
  return nodes;
}

function StatusBar({ phase }: { phase: Phase }) {
  const config =
    phase === "typing"
      ? { dot: "bg-[#f0c95a]", label: "writing solution…" }
      : phase === "compiling"
        ? { dot: "bg-[#42b8d9]", label: "compiling" }
        : { dot: "bg-[#7ac943]", label: "running" };
  return (
    <div className="flex items-center justify-between border-t border-[#1c1c1c] bg-[#141414] px-5 py-2.5">
      <span className="flex items-center gap-2.5 font-mono text-[11.5px] text-[#989898]">
        <span
          className={`${config.dot} ${phase !== "typing" ? "pulse-dot" : ""} h-2 w-2 rounded-full`}
        />
        {config.label}
        {phase === "compiling" && (
          <span className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="pulse-dot h-1 w-1 rounded-full bg-[#989898]"
                style={{ animationDelay: `${i * 180}ms` }}
              />
            ))}
          </span>
        )}
      </span>
      <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#4a4a4a]">
        python 3.12
      </span>
    </div>
  );
}

export function CodeCompiler() {
  const reduced = useReducedMotion();
  const [count, setCount] = useState(reduced ? SCRIPT.length : 0);
  const [phase, setPhase] = useState<Phase>(reduced ? "running" : "typing");

  useEffect(() => {
    if (reduced || phase !== "typing") return;
    const iv = setInterval(() => {
      setCount((c) => {
        if (c + 1 >= SCRIPT.length) {
          clearInterval(iv);
          setPhase("compiling");
          return SCRIPT.length;
        }
        return c + 1;
      });
    }, 17);
    return () => clearInterval(iv);
  }, [phase, reduced]);

  useEffect(() => {
    if (reduced || phase !== "compiling") return;
    const t = setTimeout(() => setPhase("running"), 1000);
    return () => clearTimeout(t);
  }, [phase, reduced]);

  useEffect(() => {
    if (reduced || phase !== "running") return;
    const t = setTimeout(() => {
      setCount(0);
      setPhase("typing");
    }, 5600);
    return () => clearTimeout(t);
  }, [phase, reduced]);

  const lines = SCRIPT.slice(0, count).split("\n");

  return (
    <div className="overflow-hidden rounded-card border border-[#252525] bg-[#101010] shadow-soft transition-colors duration-500 hover:border-[#333]">
      <div className="flex items-center gap-2 border-b border-[#1c1c1c] bg-[#141414] px-5 py-3.5">
        <span className="h-3 w-3 rounded-full bg-[#d62e69]" />
        <span className="h-3 w-3 rounded-full bg-[#f0c95a]" />
        <span className="h-3 w-3 rounded-full bg-[#7ac943]" />
        <span className="ml-3 select-none font-mono text-[12px] tracking-wide text-[#666]">
          weather_app.py
        </span>
        <span className="ml-auto font-mono text-[11px] uppercase tracking-[0.18em] text-[#4a4a4a]">
          live demo
        </span>
      </div>

      <div className="flex h-[258px] gap-4 overflow-hidden px-5 py-4 font-mono text-[13px] leading-[1.5]">
        <div className="select-none pt-px text-right text-[#3a3a3a]">
          {lines.map((_, i) => (
            <div key={i}>{String(i + 1).padStart(2, " ")}</div>
          ))}
        </div>
        <pre className="min-w-0 flex-1 whitespace-pre-wrap break-words">
          {lines.map((line, i) => (
            <div key={i}>
              {highlight(line)}
              {i === lines.length - 1 && phase === "typing" && (
                <span className="term-caret ml-px inline-block h-[13px] w-[7px] translate-y-[2px] bg-[#f0eee8]" />
              )}
            </div>
          ))}
        </pre>
      </div>

      <div className="min-h-[132px] border-t border-[#1c1c1c] bg-[#0a0a0a] px-5 py-3.5 font-mono text-[12.5px] leading-relaxed">
        {phase === "running" || reduced ? (
          <>
            <div className="out-line text-[#666]">$ python weather_app.py</div>
            {OUTPUT_ROWS.map(([day, temp, rain], i) => (
              <div
                key={day}
                className="out-line text-[#d8d5ce]"
                style={{ animationDelay: `${300 + i * 350}ms` }}
              >
                <span className="text-[#f09bc0]">{day}</span>
                {"  "}
                {temp.padEnd(6, "\u00a0")}
                <span className={rain.includes("65") ? "text-[#42b8d9]" : ""}>
                  {rain}
                </span>
              </div>
            ))}
            <div
              className="out-line text-[#7ac943]"
              style={{ animationDelay: `${300 + OUTPUT_ROWS.length * 350}ms` }}
            >
              ✓ question answered — it&apos;s running code now.
            </div>
          </>
        ) : (
          <p className="italic text-[#4a4a4a]">
            ▸ output appears here when the program runs
          </p>
        )}
      </div>

      <StatusBar phase={phase} />
    </div>
  );
}
