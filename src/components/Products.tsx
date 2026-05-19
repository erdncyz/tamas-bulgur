import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../contexts";
import { translations } from "../contexts/translations";

export default function Products() {
  const { language } = useLanguage();
  const t = translations[language];
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  const productsData = [
    {
      id: 1,
      name: language === "tr" ? "Pilavlık Bulgur" : "Pilaf Bulgur",
      description: language === "tr"
        ? "Taş değirmende öğütülmüş, geleneksel tane yapısına sahip birinci sınıf pilavlık bulgur."
        : "Stone mill ground, first-class pilaf bulgur with traditional grain structure.",
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400&auto=format&fit=crop",
      longDescription:
        language === "tr"
          ? "Pilavlık Bulgur, seçkin Anadolu buğdayından elde edilir ve taş değirmen yöntemiyle düşük sıcaklıkta işlenir. Bu sayede tane bütünlüğünü korur, pişirme sırasında diri kalır ve lezzetini sofraya tam taşır."
          : "Pilaf Bulgur is produced from selected Anatolian wheat and processed at low temperature with stone mill methods. This preserves grain integrity, keeps texture firm while cooking, and delivers full flavor to the table.",
      features:
        language === "tr"
          ? ["Taş değirmen üretimi", "Katkı maddesi içermez", "Diri tane yapısı", "Yüksek lif oranı"]
          : ["Stone-milled production", "No additives", "Firm grain texture", "High fiber ratio"],
      usage:
        language === "tr"
          ? ["Pilav", "Sebzeli bulgur", "Etli ana yemek yanında"]
          : ["Pilaf", "Vegetable bulgur", "As a side with meat dishes"],
      packageOptions:
        language === "tr" ? ["1 kg", "5 kg", "10 kg", "25 kg"] : ["1 kg", "5 kg", "10 kg", "25 kg"],
    },
    {
      id: 2,
      name: language === "tr" ? "Düğü (Köftelik Bulgur)" : "Dugh (Meatball Bulgur)",
      description: language === "tr"
        ? "Köfte ve kısırlarınız için ideal incelikte, lezzetiyle fark yaratan taş değirmen düğüsü."
        : "Stone mill dugh at ideal fineness for meatballs and kısır, distinctive in taste.",
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400&auto=format&fit=crop",
      longDescription:
        language === "tr"
          ? "Köftelik Düğü, ince taneli yapısıyla kısır ve köfte tariflerinde ideal kıvam sağlar. Nem tutuşu ve dengeli emiciliği sayesinde tariflerinize homojen bir doku kazandırır."
          : "Meatball Dugh offers ideal consistency for kısır and meatball recipes with its fine grain texture. Thanks to balanced moisture retention and absorption, it gives your recipes a homogeneous texture.",
      features:
        language === "tr"
          ? ["İnce çekim yapı", "Hızlı pişme", "Yüksek su emiş dengesi", "Doğal aroma"]
          : ["Fine grind structure", "Quick cooking", "Balanced water absorption", "Natural aroma"],
      usage:
        language === "tr"
          ? ["Kısır", "İçli köfte", "Çiğ köfte tarifi"]
          : ["Kısır", "Stuffed meatballs", "Bulgur-based recipes"],
      packageOptions:
        language === "tr" ? ["1 kg", "5 kg", "10 kg"] : ["1 kg", "5 kg", "10 kg"],
    },
    {
      id: 3,
      name: language === "tr" ? "Aşurelik Dövme" : "Ashure Wheat",
      description: language === "tr"
        ? "Özel seçilmiş buğdaylardan hazırlanan, uzun süre bekletilmeden dövülen aşurelik buğday."
        : "Prepared from specially selected wheat, ashure wheat pounded without prolonged storage.",
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400&auto=format&fit=crop",
      longDescription:
        language === "tr"
          ? "Aşurelik Dövme, geleneksel tatlı ve çorba tarifleri için özel hazırlanır. Tane yapısı pişirme sonrası ideal dolgunluk sağlar, yumuşaklık ve lezzet dengesini korur."
          : "Ashure Wheat is specially prepared for traditional desserts and soup recipes. Its grain structure provides ideal fullness after cooking while maintaining softness and flavor balance.",
      features:
        language === "tr"
          ? ["Seçilmiş buğday", "Homojen tane ölçüsü", "Geleneksel işlem", "Yüksek besleyicilik"]
          : ["Selected wheat", "Uniform grain size", "Traditional processing", "High nutritional value"],
      usage:
        language === "tr"
          ? ["Aşure", "Yarma çorbası", "Geleneksel yöresel tarifler"]
          : ["Ashure", "Wheat soup", "Traditional local recipes"],
      packageOptions:
        language === "tr" ? ["1 kg", "5 kg", "25 kg"] : ["1 kg", "5 kg", "25 kg"],
    },
    {
      id: 4,
      name: language === "tr" ? "Yarma" : "Cracked Wheat",
      description: language === "tr"
        ? "Yöresel çorbalarınız ve yemekleriniz için taş değirmenlerin geleneksel yarması."
        : "Traditional stone mill cracked wheat for local soups and dishes.",
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400&auto=format&fit=crop",
      longDescription:
        language === "tr"
          ? "Yarma, Anadolu mutfağının en çok kullanılan tahıl ürünlerinden biridir. Dengeli tane iriliği sayesinde hem çorbalarda hem de tencere yemeklerinde kıvamı korur."
          : "Cracked Wheat is one of the most used grain products in Anatolian cuisine. Its balanced grain size helps preserve consistency in both soups and pot dishes.",
      features:
        language === "tr"
          ? ["Taş değirmen kırımı", "Doğal üretim", "Tok tutan yapı", "Lezzet dengesi"]
          : ["Stone-milled crack", "Natural production", "Satisfying texture", "Balanced flavor"],
      usage:
        language === "tr"
          ? ["Yarma çorbası", "Etli yemekler", "Geleneksel ev yemekleri"]
          : ["Wheat soup", "Meat dishes", "Traditional home meals"],
      packageOptions:
        language === "tr" ? ["1 kg", "5 kg", "10 kg", "25 kg"] : ["1 kg", "5 kg", "10 kg", "25 kg"],
    },
  ];

  const selectedProduct = productsData.find((product) => product.id === selectedProductId) ?? null;

  return (
    <section id="products" className="py-8 sm:py-10 lg:py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-shell rounded-[2rem] sm:rounded-[2.5rem] p-4 sm:p-6 lg:p-8">
        {selectedProduct ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <button
              onClick={() => setSelectedProductId(null)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-brown/20 dark:border-white/20 text-sm font-semibold text-[color:var(--text-primary)] hover:bg-brand-cream/70 dark:hover:bg-white/10 transition-colors"
            >
              <ArrowLeft size={16} />
              {language === "tr" ? "Ürünlere Dön" : "Back to Products"}
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
              <div className="surface-card rounded-3xl p-3 sm:p-4">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <span className="accent-tag mb-3">
                    {language === "tr" ? "Ürün Detayı" : "Product Details"}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[color:var(--text-primary)] mb-3">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-base leading-relaxed">
                    {selectedProduct.longDescription}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="surface-card rounded-2xl p-4">
                    <h4 className="font-serif font-bold text-xl text-[color:var(--text-primary)] mb-3">
                      {language === "tr" ? "Öne Çıkanlar" : "Highlights"}
                    </h4>
                    <ul className="space-y-2 text-sm">
                      {selectedProduct.features.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-green" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="surface-card rounded-2xl p-4">
                    <h4 className="font-serif font-bold text-xl text-[color:var(--text-primary)] mb-3">
                      {language === "tr" ? "Kullanım Alanı" : "Usage"}
                    </h4>
                    <ul className="space-y-2 text-sm">
                      {selectedProduct.usage.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-green" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="surface-card rounded-2xl p-4">
                  <h4 className="font-serif font-bold text-xl text-[color:var(--text-primary)] mb-3">
                    {language === "tr" ? "Paket Seçenekleri" : "Package Options"}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.packageOptions.map((option) => (
                      <span
                        key={option}
                        className="px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-brand-brown/15 dark:border-white/15 text-[color:var(--text-primary)]"
                      >
                        {option}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 rounded-full bg-brand-green text-white font-semibold uppercase tracking-[0.14em] text-xs shadow-lg shadow-brand-green/25 hover:bg-brand-brown transition-colors"
                >
                  {language === "tr" ? "Hemen Sipariş Ver" : "Order Now"}
                </motion.a>
              </div>
            </div>
          </motion.div>
        ) : (
          <>
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
                <motion.button
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedProductId(product.id)}
                  className="group surface-card rounded-3xl px-4 py-7 sm:px-5 sm:py-8 text-left"
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
                </motion.button>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
