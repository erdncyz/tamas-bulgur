import { motion } from "motion/react";
import { Menu, X, Phone, Instagram, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { useTheme, useLanguage } from "../contexts";
import { translations } from "../contexts/translations";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const navLinks = [
    { name: t.navbar.home, href: "#" },
    { name: t.navbar.about, href: "#about" },
    { name: t.navbar.products, href: "#products" },
    { name: t.navbar.contact, href: "#contact" },
  ];

  return (
    <nav 
      className="fixed w-full z-50 backdrop-blur-md transition-colors duration-300"
      style={{
        backgroundColor: theme === 'dark' ? 'rgba(31, 41, 55, 0.8)' : 'rgba(252, 249, 245, 0.8)',
        borderBottom: `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(61, 43, 31, 0.1)'}`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="bg-brand-brown dark:bg-brand-green text-white p-2 rounded-lg font-serif font-bold text-xl tracking-tighter transition-colors duration-300">
              TAMAS
            </div>
            <span className="font-serif text-2xl font-bold tracking-tight text-brand-brown dark:text-brand-green hidden sm:block transition-colors duration-300">
              BULGUR
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-brand-green dark:hover:text-brand-green transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-brand-brown/20 dark:border-white/20">
              {/* Language Toggle */}
              <button
                onClick={() => setLanguage(language === "tr" ? "en" : "tr")}
                className="px-3 py-1 text-sm font-bold text-brand-brown dark:text-brand-green hover:bg-brand-cream dark:hover:bg-gray-700 rounded-lg transition-colors duration-300 uppercase tracking-widest"
                title={language === "tr" ? "Switch to English" : "Türkçe'ye geç"}
              >
                {language === "tr" ? "EN" : "TR"}
              </button>
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 text-brand-brown dark:text-brand-green hover:bg-brand-cream dark:hover:bg-gray-700 rounded-lg transition-colors duration-300"
                title={theme === "light" ? "Dark mode" : "Light mode"}
              >
                {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
              </button>
              <a href="tel:04222383922" className="text-brand-brown dark:text-brand-green hover:text-brand-green dark:hover:text-yellow-400 transition-colors">
                <Phone size={18} />
              </a>
              <a href="https://www.instagram.com/tamasbulgur/" target="_blank" rel="noopener noreferrer" className="text-brand-brown dark:text-brand-green hover:text-brand-green dark:hover:text-yellow-400 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Language Toggle Mobile */}
            <button
              onClick={() => setLanguage(language === "tr" ? "en" : "tr")}
              className="px-2 py-1 text-xs font-bold text-brand-brown dark:text-brand-green uppercase tracking-widest"
            >
              {language === "tr" ? "EN" : "TR"}
            </button>
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 text-brand-brown dark:text-brand-green"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-brown dark:text-brand-green p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-brand-white dark:bg-gray-800 border-b border-brand-brown/10 dark:border-white/10 px-4 pt-2 pb-6 space-y-2 transition-colors duration-300"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-brand-cream dark:hover:bg-gray-700 rounded-md uppercase tracking-widest transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <div className="flex space-x-6 pt-4 px-3">
            <a href="tel:04222383922" className="text-brand-brown dark:text-brand-green">
              <Phone size={24} />
            </a>
            <a href="https://www.instagram.com/tamasbulgur/" target="_blank" rel="noopener noreferrer" className="text-brand-brown dark:text-brand-green">
              <Instagram size={24} />
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
