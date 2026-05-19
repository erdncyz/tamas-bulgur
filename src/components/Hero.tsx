import { motion } from "motion/react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "../contexts";

export default function Hero() {
  const [activeImage, setActiveImage] = useState(0);
  const { language } = useLanguage();

  const heroImages = [
    {
      src: "/1.jpeg",
      altTr: "Bulgur buğdayı taneleri",
      altEn: "Bulgur wheat grains",
    },
    {
      src: "/2.jpeg",
      altTr: "Buğday başakları",
      altEn: "Wheat spikes",
    },
    {
      src: "/3.jpeg",
      altTr: "Tahıl ürünleri",
      altEn: "Grain products",
    },
    {
      src: "/4.jpeg",
      altTr: "Bulgur üretim detayı",
      altEn: "Bulgur production detail",
    },
    {
      src: "/9.jpeg",
      altTr: "Geleneksel bulgur üretim sahnesi",
      altEn: "Traditional bulgur production scene",
    },
    {
      src: "/5.jpeg",
      altTr: "Seçilmiş buğday",
      altEn: "Selected wheat",
    },
    {
      src: "/6.jpeg",
      altTr: "Doğal tahıl dokusu",
      altEn: "Natural grain texture",
    },
    {
      src: "/7.jpeg",
      altTr: "Taş değirmen teması",
      altEn: "Stone mill theme",
    },
    {
      src: "/8.jpeg",
      altTr: "Bulgur ve buğday ürünleri",
      altEn: "Bulgur and wheat products",
    },
  ];

  const goNext = () => {
    setActiveImage((prev) => (prev + 1) % heroImages.length);
  };

  const goPrev = () => {
    setActiveImage((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length);
    }, 2000);

    return () => window.clearInterval(timer);
  }, [heroImages.length]);

  useEffect(() => {
    // Preload remaining slides after first paint to make manual/auto transitions instant.
    const preload = () => {
      heroImages.slice(1).forEach((image) => {
        const img = new Image();
        img.src = image.src;
      });
    };

    const withIdle = globalThis as typeof globalThis & {
      requestIdleCallback?: (callback: () => void) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    if (withIdle.requestIdleCallback) {
      const id = withIdle.requestIdleCallback(preload);
      return () => withIdle.cancelIdleCallback?.(id);
    }

    const timeoutId = globalThis.setTimeout(preload, 300);
    return () => globalThis.clearTimeout(timeoutId);
  }, [heroImages]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Timed background slideshow */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <img
            key={image.src}
            src={image.src}
            alt={language === "tr" ? image.altTr : image.altEn}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === activeImage ? "opacity-100" : "opacity-0"
            }`}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
            decoding="async"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-brown/45 via-black/45 to-brand-brown/60 dark:from-black/60 dark:via-black/70 dark:to-black/75 backdrop-brightness-[0.72] dark:backdrop-brightness-[0.52]" />
      </div>

      <div className="absolute inset-0 z-20 pointer-events-none">
        <button
          onClick={goPrev}
          className="pointer-events-auto absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/30 hover:bg-black/45 text-white transition-colors"
          aria-label={language === "tr" ? "Önceki görsel" : "Previous image"}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={goNext}
          className="pointer-events-auto absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/30 hover:bg-black/45 text-white transition-colors"
          aria-label={language === "tr" ? "Sonraki görsel" : "Next image"}
        >
          <ChevronRight size={24} />
        </button>
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
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 tracking-tight leading-[0.92] drop-shadow-[0_12px_28px_rgba(0,0,0,0.45)]">
            {language === "tr" ? "MALATYA TAŞ DEĞİRMEN BULGURU" : "MALATYA STONE MILL BULGUR"}
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
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
              className="bg-white text-brand-brown px-10 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-xs transition-all hover:shadow-2xl hover:shadow-black/30 w-full sm:w-auto border border-white/80"
            >
              {language === "tr" ? "Ürünlerimizi Keşfedin" : "Discover Our Products"}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="border border-white/70 text-white px-10 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-white/15 transition-colors w-full sm:w-auto backdrop-blur-sm"
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
