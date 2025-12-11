import type { Announcement } from '../types';

export const announcements: Announcement[] = [
  {
    id: 1,
    date: "24 Kasım 2025",
    title: "Fluxify V2.0 Yayında!",
    content: "Web sitemiz React ve TypeScript altyapısıyla tamamen yenilendi. Artık daha hızlı ve modern.",
    type: "güncelleme"
  },
  {
    id: 2,
    date: "15 Kasım 2025",
    title: "Yeni Python Botu Geliştirildi",
    content: "E-Ticaret müşterilerimiz için geliştirdiğimiz fiyat analiz botu %40 performans artışıyla güncellendi.",
    type: "haber"
  },
  {
    id: 3,
    date: "01 Kasım 2025",
    title: "Ekibimiz Büyüyor",
    content: "Mobil uygulama departmanımıza yeni React Native geliştirici arkadaşlarımız katıldı.",
    type: "duyuru"
  }
];