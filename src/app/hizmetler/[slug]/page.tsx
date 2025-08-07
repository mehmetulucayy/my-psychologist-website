// src/app/hizmetler/[slug]/page.tsx
"use client"; // Bu satır kalacak!

import React from 'react';
import { services, Service } from '@/data/services'; // Hizmet verilerini import ediyoruz
import { notFound } from 'next/navigation'; // Sayfa bulunamazsa 404 göstermek için
import Image from 'next/image'; // Görsel optimizasyonu için
import Link from 'next/link'; // Geri dön linki için


export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    // Eğer slug'a uygun bir hizmet bulunamazsa 404 sayfasını göster
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Hizmet Görseli */}
        <div className="relative w-full h-80 md:h-96 lg:h-[500px] overflow-hidden">
          <Image
            src={service.imageUrl}
            alt={service.title}
            layout="fill"
            objectFit="cover"
            className="object-center"
            onError={(e) => {
              e.currentTarget.src = 'https://placehold.co/1200x600/cccccc/333333?text=Resim+Yok'; // Hata durumunda placeholder
            }}
          />
        </div>

        <div className="p-6 md:p-8 lg:p-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-6 leading-tight">
            {service.title}
          </h1>

          {/* Kısa Açıklama */}
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            {service.shortDescription}
          </p>

          {/* Tam Açıklama */}
          {service.fullDescription && (
            <div
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-6"
              dangerouslySetInnerHTML={{ __html: service.fullDescription }}
            />
          )}

          {/* Faydaları Listesi */}
          {service.benefits && service.benefits.length > 0 && (
            <>
              <h2 className="text-3xl font-bold text-gray-800 mb-5 border-b-2 border-blue-200 pb-2">Faydaları</h2>
              <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2">
                {service.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </>
          )}

          {/* Kimler Yararlanabilir Listesi */}
          {service.whoCanBenefit && service.whoCanBenefit.length > 0 && (
            <>
              <h2 className="text-3xl font-bold text-gray-800 mb-5 border-b-2 border-blue-200 pb-2">Kimlere Yöneliktir?</h2>
              <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2">
                {service.whoCanBenefit.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </>
          )}

          {/* Randevu Al Butonu */}
          <div className="text-center mt-10">
            <Link href="/randevu-al" className="bg-blue-600 text-white px-8 py-3 rounded-full text-xl font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg">
              Randevu Almak İçin Tıklayın
            </Link>
          </div>
        </div>
      </div>

      {/* Geri Dön Linki */}
      <div className="mt-12 text-center">
        <Link href="/hizmetler" className="text-blue-600 hover:underline text-lg font-semibold">
          &larr; Tüm Hizmetlere Geri Dön
        </Link>
      </div>
    </div>
  );
}
