import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

type Mode = "idle" | "hover" | "view";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<Mode>("idle");
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-200);
  const y = useMotionValue(-200);

  const dotX = useTransform(useSpring(x, { stiffness: 1000, damping: 60 }), (v) => v - 5);
  const dotY = useTransform(useSpring(y, { stiffness: 1000, damping: 60 }), (v) => v - 5);
  const ringX = useTransform(useSpring(x, { stiffness: 260, damping: 28, mass: 0.7 }), (v) => v - 24);
  const ringY = useTransform(useSpring(y, { stiffness: 260, damping: 28, mass: 0.7 }), (v) => v - 24);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    document.body.classList.add("has-custom-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const view = target.closest<HTMLElement>("[data-cursor='view']");
      const hover = target.closest<HTMLElement>(
        "[data-cursor='hover'], a, button, [role='button']"
      );
      setMode(view ? "view" : hover ? "hover" : "idle");
    };

    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    document.documentElement.addEventListener("mouseenter", enter);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.documentElement.removeEventListener("mouseenter", enter);
    };
  }, [x, y]);

  if (!enabled) return null;

  const size = mode === "view" ? 88 : mode === "hover" ? 40 : 12;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100] h-[10px] w-[10px] rounded-full bg-[#f0eee8]"
        style={{ x: dotX, y: dotY }}
        animate={{
          opacity: visible && mode !== "view" ? 1 : 0,
        }}
        transition={{ duration: 0.25 }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100] h-[48px] w-[48px]"
        style={{ x: ringX, y: ringY, opacity: visible ? 1 : 0 }}
      >
        <motion.div
          className="absolute inset-0 rounded-full border border-[#f0eee8]/70"
          animate={{
            scale: size / 48,
            backgroundColor:
              mode === "view" ? "rgba(214, 46, 105, 0.92)" : "rgba(8, 8, 8, 0)",
            borderColor:
              mode === "view"
                ? "rgba(214, 46, 105, 0.92)"
                : "rgba(240, 238, 232, 0.7)",
          }}
          transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
        />
        {mode === "view" && (
          <span className="absolute inset-0 flex items-center justify-center text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f0eee8]">
            View
          </span>
        )}
      </motion.div>
    </>
  );
}
