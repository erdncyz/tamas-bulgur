# Tamaş Bulgur

1994'ten beri Malatya'da taş değirmen usulüyle üretilen geleneksel ve modern bulgur fabrikası.

## Proje Hakkında

Tamaş Bulgur şirketi için modern ve responsive bir web sitesi. React ve Vite kullanılarak geliştirilmiş, Tailwind CSS ile stillendirilmiş bir arayüz içerir.

## Teknolojiler

- **React 19** - UI kütüphanesi
- **Vite** - Build tool ve development server
- **TypeScript** - Type-safe geliştirme
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon kütüphanesi

## Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Development sunucusunu başlat
npm run dev

# Production build oluştur
npm run build

# Build'i önizle
npm run preview

# TypeScript kontrol
npm run lint
```

## Proje Yapısı

```
src/
├── components/
│   ├── AboutUs.tsx      # Hakkımızda bölümü
│   ├── Contact.tsx      # İletişim formu
│   ├── Features.tsx     # Ürün özellikleri
│   ├── Footer.tsx       # Sayfa altı
│   ├── Hero.tsx         # Ana banner
│   ├── Navbar.tsx       # Navigasyon çubuğu
│   └── Products.tsx     # Ürünler bölümü
├── App.tsx              # Ana uygulama komponenti
├── index.css            # Global stiller
└── main.tsx             # Entry point
```

## Netlify Dağıtımı

Bu proje Netlify'da barındırılmak üzere yapılandırılmıştır.

1. GitHub repolarını Netlify'a bağla
2. Build komutu: `npm run build`
3. Publish directory: `dist`
4. Netlify otomatik olarak her push'ta build ve dağıt edecek

## Geliştirme

Yerel ortamda geliştirme yapmak için:

```bash
npm run dev
```

Sunucu `http://localhost:5173` üzerinde açılacaktır.

## Build

Production için optimize edilmiş bir build oluşturmak:

```bash
npm run build
```

Build dosyaları `dist` klasöründe oluşturulur.

## Lisans

© 2024 Tamaş Bulgur Fabrikası. Tüm hakları saklıdır.
