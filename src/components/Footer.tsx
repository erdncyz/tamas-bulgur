import { motion } from "motion/react";
import { useLanguage } from "../contexts";

export default function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-brown dark:bg-gray-950 text-white py-8 sm:py-12 px-4 border-t border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 text-center md:text-left">
        <div className="space-y-4">
          <a
            href="#"
            className="inline-flex bg-white/95 dark:bg-white p-2 rounded-xl shadow-sm ring-1 ring-white/20"
            aria-label={language === "tr" ? "Ana sayfa" : "Home"}
          >
            <img
              src="/logo.jpeg"
              alt={language === "tr" ? "Tamaş Bulgur logosu" : "Tamaş Bulgur logo"}
              className="h-12 sm:h-14 w-auto object-contain"
              loading="lazy"
              decoding="async"
            />
          </a>
          <p className="text-white/60 dark:text-white/50 text-sm max-w-xs mx-auto md:mx-0 transition-colors duration-300">
            {language === "tr"
              ? "Malatya Yeşilyurt'tan sofralarınıza uzanan geleneksel taş değirmen lezzeti. 1994'ten beri."
              : "Traditional stone mill flavor from Malatya Yeşilyurt to your tables. Since 1994."
            }
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-white/80 dark:text-white/70 font-medium transition-colors duration-300">
            © {currentYear} {language === "tr" ? "Tamaş Bulgur. Tüm Hakları Saklıdır." : "Tamaş Bulgur. All Rights Reserved."}
          </p>
          <div className="flex gap-4 text-white/50 dark:text-white/40 text-xs uppercase tracking-[0.2em] transition-colors duration-300">
            <a href="#" className="hover:text-white dark:hover:text-white transition-colors">
              {language === "tr" ? "KVKK" : "GDPR"}
            </a>
            <a href="#" className="hover:text-white dark:hover:text-white transition-colors">
              {language === "tr" ? "Çerez Politikası" : "Cookie Policy"}
            </a>
            <a href="https://www.instagram.com/tamasbulgur/" className="hover:text-white dark:hover:text-white transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
