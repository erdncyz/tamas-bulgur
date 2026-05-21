import { motion } from "motion/react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "../contexts";

export default function Hero() {
  const [activeImage, setActiveImage] = useState(0);
  const { language } = useLanguage();

  const heroImages = [
    {
      src: "/1.webp",
      altTr: "Bulgur buğdayı taneleri",
      altEn: "Bulgur wheat grains",
    },
    {
      src: "/2.webp",
      altTr: "Buğday başakları",
      altEn: "Wheat spikes",
    },
    {
      src: "/3.webp",
      altTr: "Tahıl ürünleri",
      altEn: "Grain products",
    },
    {
      src: "/4.webp",
      altTr: "Bulgur üretim detayı",
      altEn: "Bulgur production detail",
    },
    {
      src: "/9.webp",
      altTr: "Geleneksel bulgur üretim sahnesi",
      altEn: "Traditional bulgur production scene",
    },
    {
      src: "/5.webp",
      altTr: "Seçilmiş buğday",
      altEn: "Selected wheat",
    },
    {
      src: "/6.webp",
      altTr: "Doğal tahıl dokusu",
      altEn: "Natural grain texture",
    },
    {
      src: "/7.webp",
      altTr: "Taş değirmen teması",
      altEn: "Stone mill theme",
    },
    {
      src: "/8.webp",
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
    <section className="relative min-h-[95svh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-26 sm:pt-24 pb-16 sm:pb-12">
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#2b2218]/45 via-black/40 to-[#20180f]/56 dark:from-black/58 dark:via-black/68 dark:to-black/76 backdrop-brightness-[0.76] dark:backdrop-brightness-[0.56]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(231,193,138,0.24),transparent_36%),radial-gradient(circle_at_80%_15%,rgba(132,160,106,0.22),transparent_30%)]" />
      </div>

      <div className="absolute inset-0 z-20 pointer-events-none hidden sm:block">
        <button
          onClick={goPrev}
          className="pointer-events-auto absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-full bg-black/30 hover:bg-black/45 text-white transition-colors border border-white/30"
          aria-label={language === "tr" ? "Önceki görsel" : "Previous image"}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={goNext}
          className="pointer-events-auto absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-full bg-black/30 hover:bg-black/45 text-white transition-colors border border-white/30"
          aria-label={language === "tr" ? "Sonraki görsel" : "Next image"}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-5 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto w-full px-2 sm:px-6 py-4"
        >
          <span className="inline-block text-white/88 font-semibold tracking-[0.21em] sm:tracking-[0.3em] uppercase text-[11px] sm:text-sm mb-4">
            {language === "tr" ? "Bereketli Toprakların Geleneksel Tadı" : "Traditional Taste from Fertile Lands"}
          </span>
          <h1 className="text-[2rem] leading-[0.92] sm:text-5xl md:text-6xl lg:text-[4.7rem] font-serif font-bold text-white mb-5 sm:mb-6 tracking-tight text-balance drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
            {language === "tr" ? "MALATYA TAŞ DEĞİRMEN BULGURU" : "MALATYA STONE MILL BULGUR"}
          </h1>
          <p className="text-white/90 text-[0.98rem] sm:text-lg md:text-xl font-medium max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            {language === "tr" 
              ? "1994'ten günümüze, atalarımızdan kalan taş değirmen usulüyle, en doğal ve en lezzetli bulgurları kendi imalatımızla sofralarınıza taşıyoruz."
              : "Since 1994, we have been bringing the most natural and delicious bulgur to your tables using traditional stone mill methods passed down from our ancestors."
            }
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#products"
              className="bg-brand-green text-white px-7 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold uppercase tracking-[0.17em] sm:tracking-[0.2em] text-[11px] sm:text-xs transition-all hover:shadow-2xl hover:shadow-brand-green/30 w-full sm:w-auto border border-brand-green/70"
            >
              {language === "tr" ? "Ürünlerimizi Keşfedin" : "Discover Our Products"}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="border border-white/55 text-white px-7 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold uppercase tracking-[0.17em] sm:tracking-[0.2em] text-[11px] sm:text-xs hover:bg-white/16 transition-colors w-full sm:w-auto backdrop-blur-sm"
            >
              {language === "tr" ? "Bize Ulaşın" : "Get in Touch"}
            </motion.a>
          </div>

          <div className="mt-5 sm:hidden flex items-center justify-center gap-2">
            {heroImages.map((image, index) => (
              <button
                key={`${image.src}-mobile-indicator`}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={language === "tr" ? `Görsel ${index + 1}` : `Image ${index + 1}`}
                className={`h-1.5 rounded-full transition-all ${index === activeImage ? "w-6 bg-brand-green" : "w-2 bg-brand-brown/35 dark:bg-white/45"}`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-5 sm:bottom-10 left-1/2 -translate-x-1/2 text-white/70"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
