// src/app/randevu-al/page.tsx
import React from 'react';
import Link from 'next/link';

export default function RandevuAlPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold text-blue-800 mb-8 leading-tight">
        Randevu Alın
      </h1>
      <p className="text-xl text-gray-700 mb-8">
        Psikolojik danışmanlık hizmetlerimizden faydalanmak için lütfen aşağıdaki formu doldurun veya bizimle iletişime geçin.
      </p>

      {/* Buraya randevu formu veya iletişim bilgileri gelecek */}
      <div className="bg-white p-8 rounded-lg shadow-lg mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">İletişim Bilgileri</h2>
        <p className="text-lg text-gray-700 mb-4">
          Telefon: <a href="tel:(0312) 273 4550
" className="text-blue-600 hover:underline">(0312) 273 4550</a>
        </p>
        <p className="text-lg text-gray-700 mb-4">
          E-posta: <a href="mailto:begumsenayilmaz@gmail.com" className="text-blue-600 hover:underline">@gmail.com</a>
        </p>
        <p className="text-lg text-gray-700">
          Adres: Kızılırmak Mahallesi, 1443. Cadde No:17, Çankaya/Ankara
        </p>
      </div>

      <Link href="/" className="text-blue-600 hover:underline text-lg font-semibold">
        &larr; Ana Sayfaya Geri Dön
      </Link>
    </div>
  );
}
