/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";
import { ThemeProvider, LanguageProvider } from "./contexts";

function AppContent() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative overflow-hidden transition-colors duration-500">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
        <div className="absolute -top-32 -left-28 h-80 w-80 rounded-full blur-3xl bg-brand-green/20 dark:bg-brand-green/15" />
        <div className="absolute top-[34%] -right-24 h-96 w-96 rounded-full blur-3xl bg-brand-brown/15 dark:bg-brand-green/10" />
      </div>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-green/80 via-brand-brown/70 to-brand-green/90 z-[100] origin-left"
        style={{ scaleX }}
      />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <AboutUs />
        <Features />
        <div className="h-6 sm:h-8 lg:h-10" />
        <Products />
        <div className="h-6 sm:h-8 lg:h-10" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}


