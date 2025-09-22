// src/app/hizmetler/page.tsx
"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Görsel optimizasyonu için
import { services } from '@/data/services'; 

export default function HizmetlerPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <h1 className="text-5xl md:text-6xl font-extrabold text-blue-800 mb-10 text-center leading-tight">Hizmetlerimiz</h1>
      <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
        Dr. olarak, bireylerin ve ailelerin psikolojik iyi oluşlarını desteklemek amacıyla çeşitli terapi ve danışmanlık hizmetleri sunmaktayız. İhtiyaçlarınıza özel çözümler için aşağıdaki hizmetlerimizi inceleyebilirsiniz.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Link href={`/hizmetler/${service.slug}`} key={service.slug} className="block group">
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 h-full flex flex-col overflow-hidden">
              {/* Hizmet Görseli */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/600x400/cccccc/333333?text=Resim+Yok'; // Hata durumunda placeholder
                  }}
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-blue-700 mb-3">{service.title}</h2>
                  <p className="text-gray-600 mb-4 text-base">
                    {service.shortDescription}
                  </p>
                </div>
                <span className="text-blue-600 hover:underline font-medium mt-4 block self-start">
                  Daha Fazla Bilgi &rarr;
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link href="/randevu-al" className="bg-blue-600 text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg inline-block">
          Hemen Randevu Alın
        </Link>
      </div>
    </div>
  );
}
