import { useLanguage } from "../contexts";

export default function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-brand-brown via-[#2f241c] to-[#241a13] dark:from-[#0c1218] dark:via-[#101922] dark:to-[#0b1117] text-white py-8 sm:py-12 px-4 border-t border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 text-center md:text-left">
        <div className="space-y-4">
          <a
            href="#"
            className="inline-flex bg-white/95 dark:bg-[#f2ede3] p-2 rounded-xl shadow-sm ring-1 ring-white/20"
            aria-label={language === "tr" ? "Ana sayfa" : "Home"}
          >
            <img
              src="/logo.webp"
              alt={language === "tr" ? "Tamaş Bulgur logosu" : "Tamaş Bulgur logo"}
              className="h-12 sm:h-14 w-auto object-contain"
              loading="lazy"
              decoding="async"
            />
          </a>
          <p className="text-white/65 dark:text-white/55 text-sm max-w-xs mx-auto md:mx-0 transition-colors duration-300 leading-relaxed">
            {language === "tr"
              ? "Malatya Yeşilyurt'tan sofralarınıza uzanan geleneksel taş değirmen lezzeti. 1994'ten beri."
              : "Traditional stone mill flavor from Malatya Yeşilyurt to your tables. Since 1994."
            }
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-white/85 dark:text-white/75 font-medium transition-colors duration-300">
            © {currentYear} {language === "tr" ? "Tamaş Bulgur. Tüm Hakları Saklıdır." : "Tamaş Bulgur. All Rights Reserved."}
          </p>
          <a
            href="https://erdincyilmaz.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold tracking-wide text-white/80 underline underline-offset-4 decoration-white/40 hover:text-white hover:decoration-white transition-colors duration-300 rounded-md px-2 py-1 hover:bg-white/10"
            aria-label="Developed by Erdinç Yılmaz"
          >
            Developed by Erdinç Yılmaz
          </a>
        </div>
      </div>
    </footer>
  );
}
