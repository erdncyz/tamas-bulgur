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
import { ThemeProvider, LanguageProvider, useTheme } from "./contexts";

function AppContent() {
  const { scrollYProgress } = useScroll();
  const { theme } = useTheme();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div 
      className="relative transition-colors duration-300"
      style={{
        backgroundColor: theme === 'dark' ? '#111827' : '#FCF9F5',
        color: theme === 'dark' ? '#ffffff' : '#1f2937'
      }}
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-green z-[100] origin-left"
        style={{ scaleX }}
      />
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Features />
        <div className="h-40" style={{
          background: theme === 'dark' 
            ? 'linear-gradient(to bottom, #1f2937, #111827)' 
            : 'linear-gradient(to bottom, #F5F2ED, #FCF9F5)'
        }} />
        <Products />
        <div className="h-40" style={{
          background: theme === 'dark' 
            ? 'linear-gradient(to bottom, #111827, #1f2937)' 
            : 'linear-gradient(to bottom, #FCF9F5, #F5F2ED)'
        }} />
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


