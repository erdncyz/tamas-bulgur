import { motion } from "motion/react";
import { Menu, X, Phone, Instagram, Sun, Moon, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTheme, useLanguage } from "../contexts";
import { translations } from "../contexts/translations";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPhoneMenuOpen, setIsPhoneMenuOpen] = useState(false);
  const desktopPhoneMenuRef = useRef<HTMLDivElement | null>(null);
  const mobilePhoneMenuRef = useRef<HTMLDivElement | null>(null);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const isSolid = isScrolled || isOpen;
  const phoneNumbers = [
    { label: "(0422) 238 39 22", href: "tel:+904222383922" },
    { label: "0533 570 65 92", href: "tel:+905335706592" },
    { label: "0537 418 27 62", href: "tel:+905374182762" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onMouseDown = (event: MouseEvent) => {
      const target = event.target as Node;
      const isInsideDesktop = desktopPhoneMenuRef.current?.contains(target) ?? false;
      const isInsideMobile = mobilePhoneMenuRef.current?.contains(target) ?? false;
      if (!isInsideDesktop && !isInsideMobile) {
        setIsPhoneMenuOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsPhoneMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const navLinks = [
    { name: t.navbar.home, href: "#" },
    { name: t.navbar.about, href: "#about" },
    { name: t.navbar.products, href: "#products" },
    { name: t.navbar.contact, href: "#contact" },
  ];

  return (
    <nav
      className="fixed w-full z-50 transition-all duration-500"
      style={{
        backgroundColor: "transparent",
        borderBottom: "none",
        backdropFilter: "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4">
        <div
          className={`flex justify-between h-16 sm:h-[4.6rem] items-center rounded-2xl sm:rounded-[1.4rem] px-3 sm:px-4 transition-all duration-500 ${
            isSolid
              ? "surface-card luxury-border shadow-xl"
              : "bg-white/8 dark:bg-black/10 backdrop-blur-md border border-white/25 dark:border-white/15"
          }`}
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <a
              href="#"
              className="bg-white/95 dark:bg-[#ece5d8] p-1.5 sm:p-2 rounded-xl shadow-lg ring-1 ring-brand-brown/10 dark:ring-white/15 transition-transform duration-300 hover:scale-[1.02]"
              aria-label={language === "tr" ? "Ana sayfa" : "Home"}
            >
              <img
                src="/logo.webp"
                alt={language === "tr" ? "Tamaş Bulgur logosu" : "Tamaş Bulgur logo"}
                className="h-10 sm:h-11 w-auto object-contain"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </a>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[0.92rem] font-semibold transition-colors uppercase tracking-[0.19em] ${
                  isSolid
                    ? "text-[color:var(--text-secondary)] dark:text-[#d4d0c8] hover:text-brand-green"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className={`flex items-center gap-2 ml-2 pl-5 border-l ${isSolid ? "border-brand-brown/20 dark:border-white/20" : "border-white/30"}`}>
              {/* Language Toggle */}
              <button
                onClick={() => setLanguage(language === "tr" ? "en" : "tr")}
                className={`inline-flex h-12 min-w-[4.75rem] items-center justify-center px-4 text-[0.95rem] font-semibold rounded-full transition-colors duration-300 uppercase tracking-[0.13em] border ${
                  isSolid
                    ? "text-brand-brown dark:text-brand-green hover:bg-brand-cream/80 dark:hover:bg-white/10 border-brand-brown/15 dark:border-white/10"
                    : "text-white hover:bg-white/10 border-white/35"
                }`}
                title={language === "tr" ? "Switch to English" : "Türkçe'ye geç"}
              >
                {language === "tr" ? "EN" : "TR"}
              </button>
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`inline-flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-300 border ${
                  isSolid
                    ? "text-brand-brown dark:text-brand-green hover:bg-brand-cream/80 dark:hover:bg-white/10 border-brand-brown/15 dark:border-white/10"
                    : "text-white hover:bg-white/10 border-white/35"
                }`}
                title={theme === "light" ? "Dark mode" : "Light mode"}
              >
                {theme === "light" ? <Moon size={20} strokeWidth={2} /> : <Sun size={20} strokeWidth={2} />}
              </button>
              <div className="relative" ref={desktopPhoneMenuRef}>
                <button
                  onClick={() => setIsPhoneMenuOpen((prev) => !prev)}
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-300 border ${
                    isSolid
                      ? "text-brand-brown dark:text-brand-green hover:bg-brand-cream/80 dark:hover:bg-white/10 border-brand-brown/15 dark:border-white/10"
                      : "text-white hover:bg-white/10 border-white/35"
                  }`}
                  title={language === "tr" ? "Telefon numaraları" : "Phone numbers"}
                  aria-expanded={isPhoneMenuOpen}
                  aria-haspopup="menu"
                >
                  <Phone size={20} strokeWidth={2} />
                </button>

                {isPhoneMenuOpen && (
                  <div className="absolute right-0 top-12 w-52 rounded-2xl border border-brand-brown/10 dark:border-white/10 bg-brand-white/95 dark:bg-[#1e252d]/95 backdrop-blur-xl shadow-xl p-2 z-[60]">
                    <p className="px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-brand-green dark:text-brand-green font-semibold">
                      {language === "tr" ? "Aranabilir Numara" : "Callable Numbers"}
                    </p>
                    {phoneNumbers.map((phone) => (
                      <a
                        key={phone.href}
                        href={phone.href}
                        onClick={() => setIsPhoneMenuOpen(false)}
                        className="block px-2 py-2 rounded-lg text-sm text-[color:var(--text-secondary)] dark:text-gray-200 hover:bg-brand-cream/70 dark:hover:bg-white/10 transition-colors"
                      >
                        {phone.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <a
                href="https://www.instagram.com/tamasbulgur/"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-300 border ${
                  isSolid
                    ? "text-brand-brown dark:text-brand-green hover:bg-brand-cream/80 dark:hover:bg-white/10 border-brand-brown/15 dark:border-white/10"
                    : "text-white hover:bg-white/10 border-white/35"
                }`}
              >
                <Instagram size={20} strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-1.5">
            {/* Language Toggle Mobile */}
            <button
              onClick={() => setLanguage(language === "tr" ? "en" : "tr")}
              className={`px-2.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] rounded-full border ${
                isSolid
                  ? "text-brand-brown dark:text-brand-green border-brand-brown/20 dark:border-white/20"
                  : "text-white border-white/35"
              }`}
            >
              {language === "tr" ? "EN" : "TR"}
            </button>
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full border ${
                isSolid
                  ? "text-brand-brown dark:text-brand-green border-brand-brown/20 dark:border-white/20"
                  : "text-white border-white/35"
              }`}
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={language === "tr" ? "Menüyü aç" : "Open menu"}
              className={`p-2 rounded-full border ${
                isSolid
                  ? "text-brand-brown dark:text-brand-green border-brand-brown/20 dark:border-white/20"
                  : "text-white border-white/35"
              }`}
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
          className="md:hidden mx-4 mt-2 rounded-2xl surface-card luxury-border px-3 pt-3 pb-6 space-y-2 transition-colors duration-300"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3.5 text-[15px] font-semibold text-[color:var(--text-secondary)] dark:text-gray-200 hover:bg-brand-cream/70 dark:hover:bg-white/10 rounded-xl uppercase tracking-[0.14em] transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-wrap items-center gap-5 pt-4 px-3" ref={mobilePhoneMenuRef}>
            <div className="relative">
              <button
                onClick={() => setIsPhoneMenuOpen((prev) => !prev)}
                className="text-brand-brown dark:text-brand-green"
                title={language === "tr" ? "Telefon numaraları" : "Phone numbers"}
                aria-expanded={isPhoneMenuOpen}
                aria-haspopup="menu"
              >
                <Phone size={24} />
              </button>
              {isPhoneMenuOpen && (
                <div className="absolute left-0 top-10 w-56 rounded-2xl border border-brand-brown/10 dark:border-white/10 bg-brand-white/95 dark:bg-[#1e252d]/95 backdrop-blur-xl shadow-xl p-2 z-[60]">
                  <p className="px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-brand-green dark:text-brand-green font-semibold">
                    {language === "tr" ? "Aranabilir Numara" : "Callable Numbers"}
                  </p>
                  {phoneNumbers.map((phone) => (
                    <a
                      key={phone.href}
                      href={phone.href}
                      onClick={() => {
                        setIsPhoneMenuOpen(false);
                        setIsOpen(false);
                      }}
                      className="block px-2 py-2 rounded-lg text-sm text-[color:var(--text-secondary)] dark:text-gray-200 hover:bg-brand-cream/70 dark:hover:bg-white/10 transition-colors"
                    >
                      {phone.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href="https://www.instagram.com/tamasbulgur/" target="_blank" rel="noopener noreferrer" className="text-brand-brown dark:text-brand-green">
              <Instagram size={24} />
            </a>
          </div>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-green px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-lg shadow-brand-green/30"
          >
            {language === "tr" ? "Teklif Al" : "Get a Quote"}
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      )}
    </nav>
  );
}
