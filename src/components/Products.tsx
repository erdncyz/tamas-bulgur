import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts";
import { translations } from "../contexts/translations";

export default function Products() {
  const { language } = useLanguage();
  const t = translations[language];

  const productsData = [
    {
      id: 1,
      name: language === "tr" ? "Pilavlık Bulgur" : "Pilaf Bulgur",
      description: language === "tr"
        ? "Taş değirmende öğütülmüş, geleneksel tane yapısına sahip birinci sınıf pilavlık bulgur."
        : "Stone mill ground, first-class pilaf bulgur with traditional grain structure.",
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 2,
      name: language === "tr" ? "Düğü (Köftelik Bulgur)" : "Dugh (Meatball Bulgur)",
      description: language === "tr"
        ? "Köfte ve kısırlarınız için ideal incelikte, lezzetiyle fark yaratan taş değirmen düğüsü."
        : "Stone mill dugh at ideal fineness for meatballs and kısır, distinctive in taste.",
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 3,
      name: language === "tr" ? "Aşurelik Dövme" : "Ashure Wheat",
      description: language === "tr"
        ? "Özel seçilmiş buğdaylardan hazırlanan, uzun süre bekletilmeden dövülen aşurelik buğday."
        : "Prepared from specially selected wheat, ashure wheat pounded without prolonged storage.",
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 4,
      name: language === "tr" ? "Yarma" : "Cracked Wheat",
      description: language === "tr"
        ? "Yöresel çorbalarınız ve yemekleriniz için taş değirmenlerin geleneksel yarması."
        : "Traditional stone mill cracked wheat for local soups and dishes.",
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400&auto=format&fit=crop",
    },
  ];

  return (
    <section id="products" className="py-8 sm:py-10 lg:py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-shell rounded-[2rem] sm:rounded-[2.5rem] p-4 sm:p-6 lg:p-8">
        <div className="text-center mb-10 sm:mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-green dark:text-brand-green font-semibold tracking-[0.2em] uppercase text-sm mb-4 block"
          >
            {language === "tr" ? "Lezzet Yelpazemiz" : "Our Taste Range"}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-[color:var(--text-primary)] mb-6"
          >
            {language === "tr" ? "Topraktan Sofranıza Gelen Şifa" : "Healing from Earth to Your Table"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-base sm:text-lg"
          >
            {language === "tr"
              ? "Her biri özenle seçilmiş tahıllardan, hiçbir katkı maddesi eklenmeden üretilen doğal ürünlerimizi keşfedin."
              : "Discover our natural products, each carefully produced from selected grains with no additives added."
            }
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pb-2 sm:pb-3">
          {productsData.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group surface-card rounded-3xl px-4 py-7 sm:px-5 sm:py-8"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl mb-4 sm:mb-6 bg-brand-cream dark:bg-gray-800">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-brown/30 dark:bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="bg-white dark:bg-brand-green text-brand-brown dark:text-white p-4 rounded-full shadow-lg border border-white/70"
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[color:var(--text-primary)] mb-3 tracking-wide">
                {product.name}
              </h3>
              <p className="text-sm leading-relaxed mb-4">
                {product.description}
              </p>
              <div className="h-[1px] w-12 bg-brand-green group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
