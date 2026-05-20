import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "../contexts";
import { translations } from "../contexts/translations";

function ProductCard({ product, index, onSelect }) {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    if (!product.images || product.images.length <= 1) return;

    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % product.images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [product.images]);

  const displayImage = product.images ? product.images[imageIndex] : product.image;

  return (
    <motion.button
      key={product.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={onSelect}
      className="group surface-card rounded-[2rem] p-3 sm:p-4 text-left w-[min(84vw,22rem)] sm:w-[20rem] md:w-[21rem] shrink-0 snap-start transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-[4/5] sm:aspect-square overflow-hidden rounded-[1.5rem] mb-4 bg-gradient-to-br from-brand-cream to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <img
          src={displayImage}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ objectPosition: product.imagePosition ?? "50% 0%" }}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-brown/30 dark:bg-black/35 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-white/95 dark:bg-brand-green text-brand-brown dark:text-white p-3 rounded-full shadow-lg border border-white/70"
          >
            <ArrowRight size={18} />
          </motion.div>
        </div>
        {product.images && product.images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {product.images.map((_, idx) => (
              <div
                key={idx}
                className={`h-1 rounded-full transition-all ${
                  idx === imageIndex
                    ? "bg-white w-4"
                    : "bg-white/50 w-1"
                }`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="min-h-[3rem] mb-1.5">
        <h3 className="text-[2rem] leading-[1.05] sm:text-[2.1rem] font-serif font-bold text-[color:var(--text-primary)] tracking-tight">
          {product.name}
        </h3>
      </div>
      <div className="min-h-[1.5rem] mb-2">
        <p className={`text-xs font-semibold tracking-[0.15em] text-brand-green uppercase ${product.subtitle ? "" : "invisible"}`}>
          {product.subtitle ?? "placeholder"}
        </p>
        {product.imageLabels && (
          <p className="text-xs text-[color:var(--text-secondary)] font-medium mt-1">
            {product.imageLabels.join(" • ")}
          </p>
        )}
      </div>
      <p className="text-sm sm:text-[1.05rem] leading-relaxed mb-4">
        {product.description}
      </p>
      <div className="h-[1px] w-12 bg-brand-green group-hover:w-full transition-all duration-300" />
    </motion.button>
  );
}

export default function Products() {
  const { language } = useLanguage();
  const t = translations[language];
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const productsData = [
    {
      id: 1,
      name: language === "tr" ? "Pilavlık Bulgur" : "Pilaf Bulgur",
      description: language === "tr"
        ? "Taş değirmende öğütülmüş, geleneksel tane yapısına sahip birinci sınıf pilavlık bulgur."
        : "Stone mill ground, first-class pilaf bulgur with traditional grain structure.",
      image: "/pilavlık1.jpeg",
      images: ["/pilavlık1.jpeg", "/pilavlık2.jpeg", "/pilavlık3.jpeg", "/pilavlık4.jpeg"],
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
      nutritionFacts: {
        serving: "100 gr",
        energy: { kcal: 326, kj: 1365 },
        fat: 1.2,
        saturatedFat: 0.17,
        carbohydrates: 72.1,
        sugars: 2.7,
        protein: 10.5,
        salt: 0.1,
      },
    },
    {
      id: 2,
      name: language === "tr" ? "Orta Bulgur" : "Medium Bulgur",
      description: language === "tr"
        ? "Pilavdan tencere yemeklerine kadar geniş kullanım sunan dengeli taneli orta bulgur."
        : "Balanced medium bulgur suitable for pilaf and a wide range of cooked dishes.",
      image: "/ortabulgur1.jpeg",
      images: ["/ortabulgur1.jpeg", "/ortabulgur2.jpeg", "/ortabulgur3.jpeg"],
      imagePosition: "50% 8%",
      longDescription:
        language === "tr"
          ? "Orta Bulgur, tane yapısı ve su emiş dengesi sayesinde hem pilavlarda hem sulu yemeklerde ideal sonuç verir. Geleneksel taş değirmen üretimiyle doğal lezzetini korur."
          : "Medium Bulgur delivers ideal results in both pilafs and cooked dishes thanks to its balanced grain texture and water absorption. Traditional stone-mill production preserves its natural flavor.",
      features:
        language === "tr"
          ? ["Dengeli tane boyutu", "Geniş kullanım alanı", "Taş değirmen üretimi", "Doğal aroma"]
          : ["Balanced grain size", "Wide usage area", "Stone-milled production", "Natural aroma"],
      usage:
        language === "tr"
          ? ["Bulgur pilavı", "Sebzeli yemekler", "Sulu tencere yemekleri"]
          : ["Bulgur pilaf", "Vegetable dishes", "Stew-style meals"],
      packageOptions:
        language === "tr" ? ["5 kg", "10 kg", "25 kg"] : ["5 kg", "10 kg", "25 kg"],
    },
    {
      id: 3,
      name: language === "tr" ? "Aşurelik Dövme" : "Ashure Wheat",
      description: language === "tr"
        ? "Özel seçilmiş buğdaylardan hazırlanan, uzun süre bekletilmeden dövülen aşurelik buğday."
        : "Prepared from specially selected wheat, ashure wheat pounded without prolonged storage.",
      image: "/asure.jpeg",
      imagePosition: "50% 8%",
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
        language === "tr" ? ["25 kg"] : ["25 kg"],
      nutritionFacts: {
        serving: "100 gr",
        energy: { kcal: 326, kj: 1365 },
        fat: 1.2,
        saturatedFat: 0.17,
        carbohydrates: 72.1,
        sugars: 2.7,
        protein: 10.5,
        salt: 0.1,
      },
    },
    {
      id: 4,
      name: language === "tr" ? "Yarma" : "Cracked Wheat",
      subtitle: language === "tr" ? "Yarma Çeşitleri" : "Cracked Wheat Types",
      description: language === "tr"
        ? "Yöresel çorbalarınız ve yemekleriniz için taş değirmenlerin geleneksel yarması."
        : "Traditional stone mill cracked wheat for local soups and dishes.",
      image: "/inceyarma.jpeg",
      images: ["/inceyarma.jpeg", "/ortayarma.jpeg", "/iriyarma.jpeg"],
      imagePosition: "50% 8%",
      imageLabels: language === "tr" ? ["İnce Yarma", "Orta Yarma", "İri Yarma"] : ["Fine Cracked Wheat", "Medium Cracked Wheat", "Coarse Cracked Wheat"],
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
        language === "tr" ? ["25 kg"] : ["25 kg"],
      nutritionFacts: {
        serving: "100 gr",
        energy: { kcal: 326, kj: 1365 },
        fat: 1.2,
        saturatedFat: 0.17,
        carbohydrates: 72.1,
        sugars: 2.7,
        protein: 10.5,
        salt: 0.1,
      },
    },
    {
      id: 5,
      name: language === "tr" ? "Çiğköftelik Bulgur" : "Fine Bulgur for Cigkofte",
      description: language === "tr"
        ? "Çiğ köfte ve kısır tarifleri için özel öğütülmüş, kıvamı güçlü çiğköftelik bulgur."
        : "Specially milled fine bulgur for cigkofte and kısır recipes with strong texture.",
      image: "/cıgkofte.jpeg",
      imagePosition: "50% 8%",
      longDescription:
        language === "tr"
          ? "Çiğköftelik Bulgur, homojen ince tane yapısıyla yoğurma sürecinde ideal kıvam sağlar. Baharat ve sosları dengeli şekilde emerek lezzeti yükseltir."
          : "Fine Bulgur for Cigkofte provides ideal consistency during kneading with its uniform fine grain structure. It absorbs spices and sauces in a balanced way to enhance flavor.",
      features:
        language === "tr"
          ? ["İnce tane yapısı", "Yüksek su tutma", "Kolay yoğurma", "Doğal üretim"]
          : ["Fine grain structure", "High water retention", "Easy kneading", "Natural production"],
      usage:
        language === "tr"
          ? ["Çiğ köfte", "Kısır", "Soğuk meze tarifleri"]
          : ["Cigkofte", "Kısır", "Cold mezze recipes"],
      packageOptions:
        language === "tr" ? ["25 kg"] : ["25 kg"],
      nutritionFacts: {
        serving: "100 gr",
        energy: { kcal: 326, kj: 1365 },
        fat: 1.2,
        saturatedFat: 0.17,
        carbohydrates: 72.1,
        sugars: 2.7,
        protein: 10.5,
        salt: 0.1,
      },
    },
  ];

  const sortedProducts = [...productsData].sort((a, b) =>
    a.name.localeCompare(b.name, language === "tr" ? "tr" : "en", { sensitivity: "base" })
  );

  const selectedProduct = productsData.find((product) => product.id === selectedProductId) ?? null;

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedProductId]);

  useEffect(() => {
    if (!selectedProduct?.images || selectedProduct.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProduct.images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [selectedProduct?.images]);

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
              onClick={() => {
                setSelectedProductId(null);
                setCurrentImageIndex(0);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-brown/20 dark:border-white/20 text-sm font-semibold text-[color:var(--text-primary)] hover:bg-brand-cream/70 dark:hover:bg-white/10 transition-colors"
            >
              <ArrowLeft size={16} />
              {language === "tr" ? "Ürünlere Dön" : "Back to Products"}
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
              <div className="surface-card rounded-3xl p-3 sm:p-4">
                <div className="aspect-auto h-full min-h-96 lg:min-h-[600px] rounded-2xl overflow-hidden relative group bg-gradient-to-br from-brand-cream to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
                  <img
                    src={selectedProduct.images ? selectedProduct.images[currentImageIndex] : selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover transition-transform duration-500"
                    style={{ objectPosition: selectedProduct.imagePosition ?? "50% 0%" }}
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    referrerPolicy="no-referrer"
                  />
                  {selectedProduct.images && selectedProduct.images.length > 1 && (
                    <>
                      <button
                        onClick={() => setCurrentImageIndex((prev) => (prev - 1 + selectedProduct.images.length) % selectedProduct.images.length)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-white dark:hover:bg-black"
                      >
                        <ArrowLeft size={20} className="text-brand-brown dark:text-white" />
                      </button>
                      <button
                        onClick={() => setCurrentImageIndex((prev) => (prev + 1) % selectedProduct.images.length)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-white dark:hover:bg-black"
                      >
                        <ArrowRight size={20} className="text-brand-brown dark:text-white" />
                      </button>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                        <div className="flex gap-2">
                          {selectedProduct.images.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentImageIndex(idx)}
                              className={`h-2 rounded-full transition-all ${
                                idx === currentImageIndex
                                  ? "bg-brand-green w-6"
                                  : "bg-white/50 w-2 hover:bg-white/80"
                              }`}
                            />
                          ))}
                        </div>
                        {selectedProduct.imageLabels && (
                          <p className="text-xs font-semibold text-white bg-black/40 px-3 py-1 rounded-full">
                            {selectedProduct.imageLabels[currentImageIndex]}
                          </p>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <span className="accent-tag mb-3">
                    {language === "tr" ? "Ürün Detayı" : "Product Details"}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[color:var(--text-primary)] mb-2">
                    {selectedProduct.name}
                  </h3>
                  {selectedProduct.subtitle && (
                    <p className="text-sm font-semibold tracking-[0.15em] text-brand-green uppercase mb-4">
                      {selectedProduct.subtitle}
                    </p>
                  )}
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

                {selectedProduct.imageLabels && (
                  <div className="surface-card rounded-2xl p-4 sm:p-6">
                    <h4 className="font-serif font-bold text-xl text-[color:var(--text-primary)] mb-3">
                      {language === "tr" ? "Yarma Çeşitleri" : "Cracked Wheat Types"}
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
                      {selectedProduct.imageLabels.map((label) => (
                        <li
                          key={label}
                          className="rounded-xl border border-brand-brown/15 dark:border-white/15 px-3 py-2 text-center font-medium"
                        >
                          {label}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedProduct.nutritionFacts && (
                  <div className="surface-card rounded-2xl p-4 sm:p-6">
                    <h4 className="font-serif font-bold text-xl text-[color:var(--text-primary)] mb-4">
                      {language === "tr" ? "Besin Değerleri" : "Nutrition Facts"}
                    </h4>
                    <div className="text-sm mb-4 text-[color:var(--text-secondary)]">
                      {language === "tr" ? "Porsiyon:" : "Per:"} <span className="font-semibold">{selectedProduct.nutritionFacts.serving}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>{language === "tr" ? "Enerji" : "Energy"}</span>
                          <span className="font-semibold">{selectedProduct.nutritionFacts.energy.kcal} kcal / {selectedProduct.nutritionFacts.energy.kj} kj</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{language === "tr" ? "Yağ" : "Fat"}</span>
                          <span className="font-semibold">{selectedProduct.nutritionFacts.fat} g</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{language === "tr" ? "Doymuş Yağ" : "Saturated Fat"}</span>
                          <span className="font-semibold">{selectedProduct.nutritionFacts.saturatedFat} g</span>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>{language === "tr" ? "Karbonhidrat" : "Carbohydrates"}</span>
                          <span className="font-semibold">{selectedProduct.nutritionFacts.carbohydrates} g</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{language === "tr" ? "Şekerler" : "Sugars"}</span>
                          <span className="font-semibold">{selectedProduct.nutritionFacts.sugars} g</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{language === "tr" ? "Protein" : "Protein"}</span>
                          <span className="font-semibold">{selectedProduct.nutritionFacts.protein} g</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{language === "tr" ? "Tuz" : "Salt"}</span>
                          <span className="font-semibold">{selectedProduct.nutritionFacts.salt} g</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

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

            <div className="overflow-x-auto overflow-y-hidden pb-3 sm:pb-4 snap-x snap-mandatory scroll-smooth touch-pan-x [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex gap-4 sm:gap-6 px-1 sm:px-0 pr-4">
              {sortedProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                  onSelect={() => setSelectedProductId(product.id)}
                />
              ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
