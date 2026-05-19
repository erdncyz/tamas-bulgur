import { motion } from "motion/react";
import { Leaf, Award, Recycle, ShieldCheck } from "lucide-react";
import { useLanguage } from "../contexts";
import { translations } from "../contexts/translations";

export default function Features() {
  const { language } = useLanguage();
  const t = translations[language];

  const featuresData = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: language === "tr" ? "%100 Doğal" : "100% Natural",
      description: language === "tr" 
        ? "Hiçbir koruyucu veya beyazlatıcı madde içermez. Doğanın saflığı korunuz."
        : "Contains no preservatives or bleaching agents. Pure nature's purity."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: language === "tr" ? "Geleneksel Metot" : "Traditional Method",
      description: language === "tr"
        ? "Atalarımızdan kalan eski usul taş değirmenlerle düşük sıcaklıkta öğütme."
        : "Low-temperature grinding with traditional stone mills passed down from ancestors."
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: language === "tr" ? "Sürdürülebilir" : "Sustainable",
      description: language === "tr"
        ? "Yerel çiftçilerden temin edilen en kaliteli buğdaylar ile yerel kalkınma."
        : "Local development with the finest wheat sourced from local farmers."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: language === "tr" ? "Yüksek Besin Değeri" : "High Nutritional Value",
      description: language === "tr"
        ? "Taş değirmen sayesinde buğdayın ruşeymi ve kepeği korunur, besleyici kalır."
        : "Stone mill preserves wheat's germ and bran, keeping it nutritious."
    }
  ];

  return (
    <section className="py-8 sm:py-10 lg:py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-shell rounded-[2rem] sm:rounded-[2.5rem]">
        <div className="text-center mb-10 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-[color:var(--text-primary)] mb-6"
          >
            {t.features.title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 sm:gap-1.5 lg:gap-2 pb-2 sm:pb-3">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="surface-card flex flex-col items-center text-center px-6 py-8 sm:px-8 sm:py-10 rounded-3xl border border-brand-brown/5 dark:border-white/10 hover:border-brand-green/40 dark:hover:border-brand-green/45 transition-all group hover:-translate-y-1"
            >
              <div className="mb-4 sm:mb-6 text-brand-green dark:text-brand-green group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-[color:var(--text-primary)] mb-3 uppercase tracking-tight">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
