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

function SectionBanner({
  src,
  alt,
  imageClassName,
}: {
  src: string;
  alt: string;
  imageClassName?: string;
}) {
  return (
    <section className="py-3 sm:py-5 lg:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="surface-card luxury-border grain-overlay relative rounded-[1.8rem] sm:rounded-[2rem] overflow-hidden p-2.5 sm:p-3.5">
          <img
            src={src}
            alt={alt}
            className={`w-full h-32 sm:h-44 lg:h-52 object-cover rounded-2xl ${imageClassName ?? "object-center"}`}
            loading="lazy"
            decoding="async"
          />
          <div className="pointer-events-none absolute inset-0 rounded-[1.8rem] bg-gradient-to-r from-brand-brown/20 via-transparent to-brand-green/20" />
        </div>
      </div>
    </section>
  );
}

function AppContent() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative overflow-hidden transition-colors duration-500">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-80">
        <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full blur-3xl bg-brand-green/25 dark:bg-brand-green/20" />
        <div className="absolute top-[32%] -right-20 h-96 w-96 rounded-full blur-3xl bg-brand-brown/20 dark:bg-brand-brown/20" />
        <div className="absolute bottom-[4%] left-[42%] h-72 w-72 rounded-full blur-3xl bg-amber-300/20 dark:bg-amber-100/10" />
      </div>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-green/80 via-amber-600/70 to-brand-brown/80 z-[100] origin-left"
        style={{ scaleX }}
      />
      <Navbar />
      <main className="relative z-10 space-y-1 sm:space-y-2">
        <Hero />
        <AboutUs />
        <SectionBanner
          src="/banner1.webp"
          alt="Tamaş Bulgur banner görseli 1"
          imageClassName="object-[50%_42%]"
        />
        <Features />
        <SectionBanner
          src="/banner2.webp"
          alt="Tamaş Bulgur banner görseli 2"
          imageClassName="object-[60%_74%] scale-[1.08]"
        />
        <div className="h-3 sm:h-6 lg:h-8" />
        <Products />
        <SectionBanner
          src="/banner3.webp"
          alt="Tamaş Bulgur banner görseli 3"
          imageClassName="object-[50%_46%]"
        />
        <div className="h-3 sm:h-6 lg:h-8" />
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


