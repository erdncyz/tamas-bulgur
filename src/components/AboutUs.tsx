import { motion } from "motion/react";
import { useLanguage } from "../contexts";
import { translations } from "../contexts/translations";

export default function AboutUs() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="py-24 bg-brand-cream dark:bg-gray-800 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/tamas.jpg"
                alt={language === "tr" ? "Geleneksel Üretim" : "Traditional Production"}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Experience Badge */}
            <div className="absolute -bottom-8 -right-8 bg-brand-green dark:bg-brand-green text-white p-8 rounded-2xl shadow-xl hidden md:block">
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
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-brown dark:text-white mb-8 leading-tight">
              {language === "tr" 
                ? "1994'ten Beri\nKaliteden Taviz Vermiyoruz"
                : "Quality Never\nCompromised Since 1994"
              }
            </h2>
            <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
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
              <p className="italic text-brand-brown dark:text-brand-green font-medium">
                {language === "tr"
                  ? "\"Bizim için üretim sadece bir iş değil, bir geleneğin devamıdır.\""
                  : "\"For us, production is not just a business, it is the continuation of a tradition.\""
                }
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12 border-t border-brand-brown/10 dark:border-white/10 pt-10">
              <div>
                <h4 className="font-serif text-xl font-bold text-brand-brown dark:text-white mb-2 uppercase tracking-wide">
                  {language === "tr" ? "Doğal Üretim" : "Natural Production"}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {language === "tr"
                    ? "Hiçbir katkı maddesi içermeyen, tamamen doğal üretim süreçleri."
                    : "Completely natural production processes without any additives."
                  }
                </p>
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold text-brand-brown dark:text-white mb-2 uppercase tracking-wide">
                  {language === "tr" ? "Kendi İmalatımız" : "Our Production"}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
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
