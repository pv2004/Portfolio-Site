import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const quotes = [
  "Software isn\u2019t magic. It\u2019s organised clarity.",
  "Build small, ship fast, learn faster.",
  "Code is poetry written for machines, read by humans.",
  "Simplicity is the ultimate sophistication.",
  "First, solve the problem. Then, write the code.",
  "Good code is its own best documentation.",
  "Make it work, make it right, make it fast.",
  "Talk is cheap. Show me the code. \u2014 Linus Torvalds",
  "Programs must be written for people to read.",
  "The best error message is the one that never shows up.",
];

const roles = ["Developer", "Builder", "Creator"];

function useTypingEffect(words: string[], typingSpeed = 100, deletingSpeed = 60, pauseTime = 2000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.substring(0, text.length + 1));
          if (text === currentWord) {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          setText(currentWord.substring(0, text.length - 1));
          if (text === "") {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}

function Folder() {
  const [quote, setQuote] = useState(quotes[0]);
  const typedRole = useTypingEffect(roles);

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);
  return (
    <div className="relative mx-auto w-[min(940px,100%)]" aria-hidden="true">
      <div
        className="float-slow absolute left-1/2 top-0 h-24 w-[240px] -translate-x-1/2 rounded-t-[26px]"
        style={{
          background: "linear-gradient(135deg, #E0A8F0, #B878E0)",
          boxShadow: "0 24px 60px -24px rgba(184,120,224,0.45)",
        }}
      />
      <div
        className="float-slow relative h-[480px] w-full rounded-[30px] sm:h-[560px]"
        style={{
          background:
            "linear-gradient(150deg, #E8C0F8 0%, #D89AF0 34%, #B878E0 72%, #9C5DE5 100%)",
          boxShadow: "0 60px 120px -40px rgba(156,93,229,0.5)",
        }}
      >
        <div className="absolute inset-x-10 top-10 flex items-start justify-between sm:inset-x-14 sm:top-14">
          <div>
            <p className="text-[12px] uppercase tracking-[0.24em] text-[#4a2a63]">
              Pabolu Vineeth
            </p>
            <p className="mt-2 font-serif text-2xl text-[#2e163f]">Developer Portfolio</p>
          </div>
          <span className="rounded-full border border-[#5a2a80]/50 px-4 py-1.5 text-[12px] uppercase tracking-[0.18em] text-[#4a2a63]">
            {typedRole}
            <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-[#4a2a63]">&nbsp;</span>
          </span>
        </div>

        <div className="absolute inset-x-10 top-1/2 -translate-y-1/2 sm:inset-x-14">
          <div className="flex flex-wrap gap-3">
            {["Clean Code", "Curiosity", "User First", "Ship Fast"].map((value) => (
              <span
                key={value}
                className="rounded-full border border-[#5a2a80]/40 bg-[#3a1a50]/20 px-5 py-2 text-[13px] uppercase tracking-[0.16em] text-[#4a2a63]"
              >
                {value}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute inset-x-10 bottom-12 sm:inset-x-14 sm:bottom-16">
          <p className="max-w-[24ch] font-serif text-[22px] italic leading-snug text-[#3a1a50] sm:text-[26px]">
            &ldquo;{quote}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}

export function Theory() {
  return (
    <section id="about" className="relative overflow-hidden bg-[var(--bg)]">
      <div className="mx-auto max-w-content px-6 pt-36 pb-0 md:px-12 lg:pt-44">
        <Reveal>
          <SectionLabel>About</SectionLabel>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-6 max-w-[12ch] font-serif text-[clamp(44px,5.4vw,76px)] leading-[1.02] text-[var(--text-primary)]">
            How I think about{" "}
            <em className="italic text-[#E0A8F0]">building</em>
          </h2>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mt-8 max-w-[44ch] text-[18px] leading-[1.65] text-[var(--text-secondary)]">
            I'm Vineeth — a software developer who enjoys turning complex
            problems into clean, working software. I'm curious about how things
            connect, and I like building across the full stack.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.15} y={60}>
        <div className="mt-24 pb-0 md:mt-32">
          <div className="mx-auto w-[min(940px,100%)]">
            <Folder />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
