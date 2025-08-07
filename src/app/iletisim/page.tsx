// src/app/iletisim/page.tsx
"use client"; 

import React from 'react';
import Link from 'next/link';

export default function IletisimPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <h1 className="text-5xl md:text-6xl font-extrabold text-blue-800 mb-10 text-center leading-tight">
        İletişim
      </h1>
      <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
        Sorularınız, randevu talepleriniz veya herhangi bir konuda bizimle iletişime geçmek için aşağıdaki bilgileri kullanabilir veya formu doldurabilirsiniz.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* İletişim Bilgileri */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">
            Bize Ulaşın
          </h2>
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              <strong>Adres:</strong> Kızılırmak Mahallesi, 1443. Cadde No:17, Çankaya/Ankara
            </p>
            <p>
              <strong>Telefon:</strong> <a href="tel:+903122734550" className="text-blue-600 hover:underline">(0312) 273 4550</a>
            </p>
            <p>
              <strong>E-posta:</strong> <a href="mailto:begumsenayilmaz@gmail.com" className="text-blue-600 hover:underline">begumsenayilmaz@gmail.com</a>
            </p>
            <p>
              <strong>Çalışma Saatleri:</strong> 09:00 - 18:00
            </p>
          </div>
        </div>

        {/* İletişim Formu (Placeholder) */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">
            Mesaj Gönderin
          </h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Adınız Soyadınız</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                placeholder="Adınız Soyadınız"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">E-posta Adresiniz</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                placeholder="email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">Mesajınız</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                placeholder="Mesajınızı buraya yazın..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>

      {/* Harita */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 p-8 border-b-2 border-blue-200">Konumumuz</h2>
        <div className="relative" style={{ paddingBottom: '56.25%' /* 16:9 Aspect Ratio */, height: 0 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.739770549444!2d32.85974001539266!3d39.92077097942635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f0d3b6f0f01%3A0x6a0f0f0f0f0f0f0f!2sK%C4%B1z%C4%B1l%C4%B1rmak%20Mahallesi%2C%201443.%20Cadde%20No%3A17%2C%20%C3%87ankaya%2FAnkara!5e0!3m2!1str!2str!4v1678912345678!5m2!1str!2str"
            width="100%"
            height="100%"
            style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dr. Begüm Sena Yılmaz Konumu"
          ></iframe>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link href="/" className="text-blue-600 hover:underline text-lg font-semibold">
          &larr; Ana Sayfaya Geri Dön
        </Link>
      </div>
    </div>
  );
}
