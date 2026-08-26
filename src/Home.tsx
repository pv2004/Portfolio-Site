import { motion } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Work } from "./components/Work";
import { Theory } from "./components/Theory";
import { Experiments } from "./components/Experiments";
import { FeaturedVisual } from "./components/FeaturedVisual";
import { Footer } from "./components/Footer";

export function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <Navbar />
      <Hero />
      <Work />
      <Theory />
      <Experiments />
      <FeaturedVisual />
      <Footer />
    </motion.main>
  );
}
