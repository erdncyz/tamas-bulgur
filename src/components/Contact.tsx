import { motion } from "motion/react";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { useLanguage } from "../contexts";
import { translations } from "../contexts/translations";

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="contact" className="py-24 bg-brand-cream dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-green dark:text-brand-green font-semibold tracking-[0.2em] uppercase text-sm mb-4 block text-center lg:text-left">
              {t.contact.title}
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-brown dark:text-white mb-10 leading-tight text-center lg:text-left text-balance">
              {language === "tr" 
                ? "Her Türlü Sorunuz ve Siparişiniz İçin Yanınızdayız"
                : "We Are Here for All Your Questions and Orders"
              }
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-2xl shadow-sm text-brand-green dark:text-brand-green group-hover:bg-brand-green dark:group-hover:bg-brand-green group-hover:text-white dark:group-hover:text-white transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl text-brand-brown dark:text-white mb-1 uppercase tracking-wider">
                    {language === "tr" ? "Adresimiz" : "Address"}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {language === "tr"
                      ? "Özsan sanayi sitesi 36. Blok No: 22, Yeşilyurt/Malatya"
                      : "Özsan Industrial Site Block 36 No: 22, Yeşilyurt/Malatya"
                    }
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-2xl shadow-sm text-brand-green dark:text-brand-green group-hover:bg-brand-green dark:group-hover:bg-brand-green group-hover:text-white dark:group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl text-brand-brown dark:text-white mb-1 uppercase tracking-wider">
                    {language === "tr" ? "Telefon" : "Phone"}
                  </h4>
                  <div className="space-y-1">
                    <p className="text-gray-600 dark:text-gray-400">(0422) 238 39 22</p>
                    <p className="text-gray-600 dark:text-gray-400">0533 570 65 92</p>
                    <p className="text-gray-600 dark:text-gray-400">0537 418 27 62</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-2xl shadow-sm text-brand-green dark:text-brand-green group-hover:bg-brand-green dark:group-hover:bg-brand-green group-hover:text-white dark:group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl text-brand-brown dark:text-white mb-1 uppercase tracking-wider">
                    {language === "tr" ? "E-Posta" : "Email"}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">tamasbulgur@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-brand-brown/10 dark:border-white/10 flex items-center gap-6">
              <a href="https://www.instagram.com/tamasbulgur/" target="_blank" rel="noopener noreferrer" className="text-brand-brown dark:text-brand-green hover:text-brand-green dark:hover:text-white transition-colors">
                <Instagram size={28} />
              </a>
              <a href="#" className="text-brand-brown dark:text-brand-green hover:text-brand-green dark:hover:text-white transition-colors">
                <Facebook size={28} />
              </a>
            </div>
          </motion.div>

          {/* Map/Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-700 p-1 rounded-3xl shadow-xl overflow-hidden h-[400px] sm:h-[500px] lg:min-h-[400px] transition-colors duration-300"
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
