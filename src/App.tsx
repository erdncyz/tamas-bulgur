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
    <section className="py-3 sm:py-4 lg:py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="surface-card relative rounded-3xl overflow-hidden p-2 sm:p-3">
          <img
            src={src}
            alt={alt}
            className={`w-full h-32 sm:h-40 lg:h-48 object-cover rounded-2xl ${imageClassName ?? "object-center"}`}
            loading="lazy"
            decoding="async"
          />
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r from-brand-brown/10 via-transparent to-brand-green/10" />
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
        <div className="h-6 sm:h-8 lg:h-10" />
        <Products />
        <SectionBanner
          src="/banner3.webp"
          alt="Tamaş Bulgur banner görseli 3"
          imageClassName="object-[50%_46%]"
        />
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


