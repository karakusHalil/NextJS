nextJS Dosya Yapısı

src/

├── app/                # Route-based yapı (Next.js 13+ App Router)
│   ├── layout.tsx      # Genel sayfa düzeni
│   ├── page.tsx        # Ana sayfa
│   ├── api/            # API route'ları
│   ├── [dynamic]/      # Dinamik route'lar (ör: [id], [slug])
│   └── dashboard/      # Özel alt sayfa yapısı
│

├── components/         # Yeniden kullanılabilir bileşenler
│   ├── ui/             # UI odaklı bileşenler (shadcn/ui ile tasarlanmış)
│   ├── forms/          # Form bileşenleri
│   └── layout/         # Genel düzen bileşenleri (header, footer, sidebar)
│

├── hooks/              # Özel React Hook'ları
│

├── lib/                # Yardımcı fonksiyonlar, API entegrasyonu
│

├── services/           # Harici servislerle bağlantı kodları
│

├── styles/             # Tailwind ve global CSS dosyaları
│

├── types/              # TypeScript tip tanımları
│

├── utils/              # Genel yardımcı fonksiyonlar
│

├── public/             # Statik dosyalar (favicon, resimler)
│
├── middleware.ts       # Orta katman işlemleri (auth, yönlendirme vb.)
│
└── next.config.js      # Next.js yapılandırma dosyası

