import { motion } from "motion/react";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { useLanguage } from "../contexts";
import { translations } from "../contexts/translations";

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=%C3%96zsan+Sanayi+Sitesi+36.+Blok+No:+22+Ye%C5%9Filyurt+Malatya";

  return (
    <section id="contact" className="py-8 sm:py-10 lg:py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-shell rounded-[2rem] sm:rounded-[2.5rem] p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-green dark:text-brand-green font-semibold tracking-[0.2em] uppercase text-sm mb-4 block text-center lg:text-left">
              {t.contact.title}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-[color:var(--text-primary)] mb-6 sm:mb-10 leading-tight text-center lg:text-left text-balance">
              {language === "tr" 
                ? "Her Türlü Sorunuz ve Siparişiniz İçin Yanınızdayız"
                : "We Are Here for All Your Questions and Orders"
              }
            </h2>

            <div className="space-y-0">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-6 group pb-6 sm:pb-7 border-b border-brand-brown/10 dark:border-white/10"
              >
                <div className="bg-white/85 dark:bg-[#243244] p-4 rounded-2xl shadow-sm text-brand-green dark:text-brand-green group-hover:bg-brand-green dark:group-hover:bg-brand-green group-hover:text-white dark:group-hover:text-white transition-colors border border-brand-brown/10 dark:border-white/10">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl text-[color:var(--text-primary)] mb-1 uppercase tracking-wider">
                    {language === "tr" ? "Adresimiz" : "Address"}
                  </h4>
                  <p className="group-hover:text-brand-green dark:group-hover:text-gray-200 transition-colors">
                    {language === "tr"
                      ? "Özsan sanayi sitesi 36. Blok No: 22, Yeşilyurt/Malatya"
                      : "Özsan Industrial Site Block 36 No: 22, Yeşilyurt/Malatya"
                    }
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-6 group pt-6 sm:pt-7 pb-6 sm:pb-7 border-b border-brand-brown/10 dark:border-white/10">
                <div className="bg-white/85 dark:bg-[#243244] p-4 rounded-2xl shadow-sm text-brand-green dark:text-brand-green group-hover:bg-brand-green dark:group-hover:bg-brand-green group-hover:text-white dark:group-hover:text-white transition-colors border border-brand-brown/10 dark:border-white/10">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl text-[color:var(--text-primary)] mb-1 uppercase tracking-wider">
                    {language === "tr" ? "Telefon" : "Phone"}
                  </h4>
                  <div className="space-y-1">
                    <a href="tel:+904222383922" className="block hover:text-brand-green dark:hover:text-gray-200 transition-colors">(0422) 238 39 22</a>
                    <a href="tel:+905335706592" className="block hover:text-brand-green dark:hover:text-gray-200 transition-colors">0533 570 65 92</a>
                    <a href="tel:+905374182762" className="block hover:text-brand-green dark:hover:text-gray-200 transition-colors">0537 418 27 62</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6 group pt-6 sm:pt-7 pb-6 sm:pb-7 border-b border-brand-brown/10 dark:border-white/10">
                <div className="bg-white/85 dark:bg-[#243244] p-4 rounded-2xl shadow-sm text-brand-green dark:text-brand-green group-hover:bg-brand-green dark:group-hover:bg-brand-green group-hover:text-white dark:group-hover:text-white transition-colors border border-brand-brown/10 dark:border-white/10">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl text-[color:var(--text-primary)] mb-1 uppercase tracking-wider">
                    {language === "tr" ? "E-Posta" : "Email"}
                  </h4>
                  <a href="mailto:tamasbulgur@gmail.com" className="hover:text-brand-green dark:hover:text-gray-200 transition-colors">
                    tamasbulgur@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-7">
              <a
                href="https://www.instagram.com/tamasbulgur/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-6 group"
              >
                <div className="bg-white/85 dark:bg-[#243244] p-4 rounded-2xl shadow-sm text-brand-green dark:text-brand-green group-hover:bg-brand-green dark:group-hover:bg-brand-green group-hover:text-white dark:group-hover:text-white transition-colors border border-brand-brown/10 dark:border-white/10">
                  <Instagram size={22} />
                </div>
                <div>
                  <p className="font-serif font-bold text-lg text-[color:var(--text-primary)] uppercase tracking-wide leading-none mb-1">
                    {language === "tr" ? "Instagram" : "Instagram"}
                  </p>
                  <p className="text-sm group-hover:text-brand-green dark:group-hover:text-gray-200 transition-colors">
                    @tamasbulgur
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Map/Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="surface-card p-2 rounded-3xl overflow-hidden h-[380px] sm:h-[470px] lg:h-full self-stretch transition-colors duration-300"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1578.4716766442654!2d38.257608!3d38.337189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4076378e9f50e82f%3A0xe54e334a9e59d4!2s%C3%96zsan%20Sanayi%20Sitesi!5e0!3m2!1str!2str!4v1716138601192!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
              className="rounded-3xl w-full h-full"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
