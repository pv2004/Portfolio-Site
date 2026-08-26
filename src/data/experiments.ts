export interface Experiment {
  id: string;
  title: string;
  description: string;
  tags: string[];
  art: "prism" | "waveform" | "constellation" | "fabric";
}

export const experiments: Experiment[] = [
  {
    id: "motion-lab",
    title: "Motion Capture Lab",
    description:
      "An IOT experiment wiring an MPU6050 sensor to a Raspberry Pi to stream live orientation data — the start of a bigger gesture-control idea.",
    tags: ["IOT", "Embedded"],
    art: "prism",
  },
  {
    id: "vision-playground",
    title: "Computer Vision Playground",
    description:
      "Small OpenCV experiments in detection and tracking. Teaching models to see the same way we debug them — frame by frame.",
    tags: ["AI/ML", "Vision"],
    art: "waveform",
  },
  {
    id: "data-constellations",
    title: "Data Constellations",
    description:
      "Plotting the 10,000+ banking rows from the dashboard project as a night sky — where clusters live becomes a map of behaviour.",
    tags: ["Analytics", "Power BI"],
    art: "constellation",
  },
  {
    id: "generative-sketches",
    title: "Generative Sketches",
    description:
      "Creative coding with the Processing IDE — form, noise and randomness as a warm-up for the day's debugging.",
    tags: ["Creative Coding"],
    art: "fabric",
  },
];
