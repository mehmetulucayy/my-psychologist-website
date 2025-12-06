# 🧠 Psikolog Web Sitesi

Modern ve kullanıcı dostu bir psikolog web sitesi. Next.js, React ve Tailwind CSS kullanılarak geliştirilmiştir.

## 📋 İçindekiler

- [Özellikler](#-özellikler)
- [Teknolojiler](#-teknolojiler)
- [Kurulum](#-kurulum)
- [Kullanım](#-kullanım)
- [Sayfa Yapısı](#-sayfa-yapısı)
- [Ekran Görüntüleri](#-ekran-görüntüleri)
- [Proje Yapısı](#-proje-yapısı)
- [Geliştirme](#-geliştirme)
- [Deployment](#-deployment)

## ✨ Özellikler

- 🎨 **Modern ve Responsive Tasarım** - Tüm cihazlarda mükemmel görünüm
- 🚀 **Hızlı Performans** - Next.js 14 ile optimize edilmiş
- 📱 **Mobil Uyumlu** - Responsive tasarım ile her ekran boyutunda uyumlu
- 🗺️ **Google Maps Entegrasyonu** - Konum bilgisi ve harita görünümü
- 📝 **Blog Sistemi** - Psikoloji ile ilgili makaleler ve içerikler
- 💼 **Hizmet Sayfaları** - Detaylı terapi hizmetleri bilgilendirmesi
- 📞 **İletişim Formu** - Kolay iletişim ve randevu talebi
- 🎯 **SEO Optimizasyonu** - Arama motorları için optimize edilmiş
- ♿ **Erişilebilirlik** - Web erişilebilirlik standartlarına uygun

## 🛠 Teknolojiler

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **UI Library:** [React 18](https://react.dev/)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Font:** [Geist Font](https://vercel.com/font)

## 📦 Kurulum

### Gereksinimler

- Node.js 18.x veya üzeri
- npm, yarn, pnpm veya bun

### Adımlar

1. **Projeyi klonlayın:**
```bash
git clone <repository-url>
cd my-psychologist-website
```

2. **Bağımlılıkları yükleyin:**
```bash
npm install
# veya
yarn install
# veya
pnpm install
```

3. **Geliştirme sunucusunu başlatın:**
```bash
npm run dev
# veya
yarn dev
# veya
pnpm dev
```

4. **Tarayıcınızda açın:**
```
http://localhost:3000
```

## 🚀 Kullanım

### Geliştirme Modu

```bash
npm run dev
```

Geliştirme sunucusu `http://localhost:3000` adresinde çalışacaktır. Dosyalarda yaptığınız değişiklikler otomatik olarak yansıyacaktır.

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## 📄 Sayfa Yapısı

### Ana Sayfa (`/`)
- Hero bölümü
- Hizmetler özeti
- Blog yazıları önizlemesi
- Çağrı-eyleme (CTA) butonları

### Hakkımızda (`/hakkimizda`)
- Psikolog hakkında bilgiler
- Eğitim ve deneyim
- Çalışma yaklaşımı

### Hizmetler (`/hizmetler`)
- **Bireysel Terapi** - Kişisel gelişim ve psikolojik destek
- **Çift ve Aile Terapisi** - İlişki danışmanlığı
- **Online Terapi** - Uzaktan terapi seansları
- Her hizmet için detaylı alt sayfalar

### Blog (`/blog`)
- Psikoloji ile ilgili makaleler
- Stres yönetimi, ilişkiler, ruh sağlığı konuları
- Detaylı blog yazısı sayfaları

### Randevu Al (`/randevu-al`)
- İletişim bilgileri
- Randevu talebi için yönlendirme

### İletişim (`/iletisim`)
- İletişim formu
- Telefon, e-posta, adres bilgileri
- Google Maps entegrasyonu

## 📸 Ekran Görüntüleri

### Ana Sayfa
![Ana Sayfa](./Ekran%20Görüntüleri/Ana%20Sayfa.png)

### Hakkında Sayfası
![Hakkında Sayfası](./Ekran%20Görüntüleri/Hakkında%20Sayfası.png)

### Hizmetler Sayfası
![Hizmetler Sayfası](./Ekran%20Görüntüleri/Hizmetler%20Sayfası.png)

### Bireysel Terapi Detay
![Bireysel Terapi](./Ekran%20Görüntüleri/Hizmetlerden%20Bireysel%20Terapi%20Kısmı.png)

### Blog Sayfası
![Blog Sayfası](./Ekran%20Görüntüleri/Blog%20Sayfası.png)

### Blog Detay - Stresle Başa Çıkma
![Blog Detay](./Ekran%20Görüntüleri/Blog%20Kısmından%20Stresle%20Başa%20Çıkanın%20Yolları%20Kısmı.png)

### Randevu Al Sayfası
![Randevu Al](./Ekran%20Görüntüleri/Randevu%20Al%20Sayfası.png)

### İletişim Sayfası
![İletişim Sayfası](./Ekran%20Görüntüleri/İletişim%20Sayfası.png)

### Google Maps Entegrasyonu
![Harita](./Ekran%20Görüntüleri/Harita%20Kısmı.png)

## 📁 Proje Yapısı

```
my-psychologist-website/
├── public/                 # Statik dosyalar
├── src/
│   ├── app/               # Next.js App Router sayfaları
│   │   ├── blog/          # Blog sayfaları
│   │   ├── hakkimizda/    # Hakkımızda sayfası
│   │   ├── hizmetler/     # Hizmetler sayfaları
│   │   ├── iletisim/      # İletişim sayfası
│   │   ├── randevu-al/    # Randevu alma sayfası
│   │   ├── layout.tsx     # Ana layout
│   │   ├── page.tsx       # Ana sayfa
│   │   └── globals.css    # Global stiller
│   ├── components/        # React bileşenleri
│   │   ├── Footer.tsx     # Footer bileşeni
│   │   └── Navbar.tsx     # Navbar bileşeni
│   └── data/              # Veri dosyaları
│       ├── blogPosts.ts   # Blog yazıları verisi
│       └── services.ts    # Hizmetler verisi
├── Ekran Görüntüleri/     # Proje ekran görüntüleri
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🔧 Geliştirme

### Yeni Sayfa Ekleme

1. `src/app/` dizininde yeni bir klasör oluşturun
2. İçine `page.tsx` dosyası ekleyin
3. Navbar'a link ekleyin (`src/components/Navbar.tsx`)

### Yeni Blog Yazısı Ekleme

1. `src/data/blogPosts.ts` dosyasını açın
2. `blogPosts` dizisine yeni bir obje ekleyin:

```typescript
{
  id: 'unique-slug',
  title: 'Başlık',
  excerpt: 'Kısa açıklama',
  date: '2024-01-01',
  content: `<p>İçerik...</p>`
}
```

### Yeni Hizmet Ekleme

1. `src/data/services.ts` dosyasını açın
2. `services` dizisine yeni bir obje ekleyin

### Stil Değişiklikleri

- Global stiller: `src/app/globals.css`
- Tailwind yapılandırması: `tailwind.config.js`
- Bileşen bazlı stiller: İlgili `.tsx` dosyalarında Tailwind sınıfları

## 🌐 Deployment

### Vercel (Önerilen)

1. [Vercel](https://vercel.com) hesabı oluşturun
2. Projeyi GitHub'a yükleyin
3. Vercel'de "New Project" ile projeyi import edin
4. Otomatik deployment başlayacaktır

### Diğer Platformlar

- **Netlify:** `npm run build` sonrası `.next` klasörünü deploy edin
- **AWS Amplify:** Next.js desteği ile doğrudan deploy
- **Docker:** Dockerfile oluşturup containerize edin

## 📝 Özelleştirme

### İletişim Bilgilerini Güncelleme

1. `src/app/iletisim/page.tsx` - İletişim sayfası
2. `src/app/randevu-al/page.tsx` - Randevu sayfası
3. `src/components/Footer.tsx` - Footer bilgileri

### Google Maps Konumu Değiştirme

`src/app/iletisim/page.tsx` dosyasında iframe `src` URL'sini güncelleyin:

```tsx
src="https://www.google.com/maps/embed?pb=!1m18!..."
```

Yeni konum için [Google Maps Embed API](https://developers.google.com/maps/documentation/embed/get-started) kullanın.

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje özel kullanım içindir.

## 📞 İletişim

- **E-posta:** mehmetulucayy32@gmail.com

---

**Not:** Bu proje Next.js 14 App Router kullanmaktadır. Daha fazla bilgi için [Next.js Dokümantasyonu](https://nextjs.org/docs)'nu inceleyebilirsiniz.
