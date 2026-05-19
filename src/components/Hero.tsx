import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../contexts";
import { translations } from "../contexts/translations";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with placeholder overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=1920&auto=format&fit=crop"
          alt={language === "tr" ? "Bulgur Tarlası veya Değirmen" : "Bulgur Field or Mill"}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-brown/40 dark:bg-brand-brown/60 backdrop-brightness-75 dark:backdrop-brightness-50" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-brand-white/80 font-medium tracking-[0.3em] uppercase text-sm mb-4">
            {language === "tr" ? "Bereketli Toprakların Geleneksel Tadı" : "Traditional Taste from Fertile Lands"}
          </span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-6 tracking-tight leading-[0.9]">
            {language === "tr" ? "MALATYA TAŞ DEĞİRMEN BULGURU" : "MALATYA STONE MILL BULGUR"}
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            {language === "tr" 
              ? "1994'ten günümüze, atalarımızdan kalan taş değirmen usulüyle, en doğal ve en lezzetli bulgurları kendi imalatımızla sofralarınıza taşıyoruz."
              : "Since 1994, we have been bringing the most natural and delicious bulgur to your tables using traditional stone mill methods passed down from our ancestors."
            }
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#products"
              className="bg-white dark:bg-brand-green dark:text-white text-brand-brown px-10 py-4 rounded-full font-semibold uppercase tracking-widest text-sm transition-shadow hover:shadow-xl w-full sm:w-auto"
            >
              {language === "tr" ? "Ürünlerimizi Keşfedin" : "Discover Our Products"}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="border border-white dark:border-brand-green text-white dark:text-brand-green px-10 py-4 rounded-full font-semibold uppercase tracking-widest text-sm hover:bg-white/10 dark:hover:bg-brand-green/10 transition-colors w-full sm:w-auto"
            >
              {language === "tr" ? "Bize Ulaşın" : "Get in Touch"}
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
