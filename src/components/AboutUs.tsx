import { motion } from "motion/react";
import { useLanguage } from "../contexts";
import { translations } from "../contexts/translations";

export default function AboutUs() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="py-8 sm:py-10 lg:py-12 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-shell rounded-[2rem] sm:rounded-[2.5rem] p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/30 dark:ring-white/10">
              <img
                src="/tamas.png"
                alt={language === "tr" ? "Geleneksel Üretim" : "Traditional Production"}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Experience Badge */}
            <div className="absolute -bottom-8 -right-8 bg-brand-green text-white p-8 rounded-2xl shadow-xl hidden md:block border border-white/25">
              <div className="text-4xl font-bold font-serif mb-1">30+</div>
              <div className="text-xs uppercase tracking-widest font-medium opacity-80">
                {language === "tr" ? "Yıllık Tecrübe" : "Years Experience"}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-brand-green dark:text-brand-green font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">
              {t.about.title}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-[color:var(--text-primary)] mb-6 sm:mb-8 leading-tight">
              {language === "tr" 
                ? "1994'ten Beri\nKaliteden Taviz Vermiyoruz"
                : "Quality Never\nCompromised Since 1994"
              }
            </h2>
            <div className="space-y-4 sm:space-y-6 leading-relaxed text-base sm:text-lg">
              <p>
                {language === "tr"
                  ? "Tamaş Bulgur olarak Malatya'nın Yeşilyurt ilçesinde başlayan yolculuğumuzda, geleneksel tadı günümüz teknolojisiyle harmanlıyoruz."
                  : "As Tamaş Bulgur, in our journey starting in Malatya's Yeşilyurt district, we blend traditional flavor with modern technology."
                }
              </p>
              <p>
                {language === "tr"
                  ? "Taş Değirmen usulüyle yaptığımız üretimde, buğdayın özündeki doğallığı ve lezzeti korumayı kendimize ilke edindik. 1994 yılından bu yana değişmeyen kalitemiz ve müşteri odaklı hizmet anlayışımızla bölgenin öncü üreticilerinden biri olmayı başardık."
                  : "In our Stone Mill production method, we have made it our principle to preserve the natural essence and flavor of wheat. Since 1994, with our unwavering quality and customer-centric approach, we have become one of the leading producers in the region."
                }
              </p>
              <p className="italic text-brand-brown dark:text-brand-green font-semibold">
                {language === "tr"
                  ? "\"Bizim için üretim sadece bir iş değil, bir geleneğin devamıdır.\""
                  : "\"For us, production is not just a business, it is the continuation of a tradition.\""
                }
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5 sm:gap-8 mt-8 sm:mt-12 border-t border-brand-brown/10 dark:border-white/10 pt-6 sm:pt-10">
              <div>
                <h4 className="font-serif text-xl font-bold text-[color:var(--text-primary)] mb-2 uppercase tracking-wide">
                  {language === "tr" ? "Doğal Üretim" : "Natural Production"}
                </h4>
                <p className="text-sm">
                  {language === "tr"
                    ? "Hiçbir katkı maddesi içermeyen, tamamen doğal üretim süreçleri."
                    : "Completely natural production processes without any additives."
                  }
                </p>
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold text-[color:var(--text-primary)] mb-2 uppercase tracking-wide">
                  {language === "tr" ? "Kendi İmalatımız" : "Our Production"}
                </h4>
                <p className="text-sm">
                  {language === "tr"
                    ? "Tüm ürünlerimiz kendi tesislerimizde titizlikle hazırlanmaktadır."
                    : "All our products are carefully prepared in our own facilities."
                  }
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
