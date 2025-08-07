// src/app/blog/page.tsx
"use client"; 

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; 
import { blogPosts } from '@/data/blogPosts'; 

export default function BlogListPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-blue-800">Blog Yazıları</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="block group">
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col">
              <div className="relative w-full h-56 overflow-hidden">
                {/* next/image bileşeni ile görsel optimizasyonu */}
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/CCCCCC/000000?text=Görsel+Yok'; }}
                />
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h2 className="text-2xl font-semibold text-blue-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">{post.title}</h2>
                  <p className="text-gray-600 text-sm mb-3">{new Date(post.date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  <p className="text-gray-700 mb-4 line-clamp-3">{post.excerpt}</p>
                </div>
                <span className="text-blue-600 hover:text-blue-800 font-medium mt-auto pt-4 border-t border-gray-100 block text-right">Devam Et &rarr;</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* İsteğe bağlı olarak daha fazla yazı yükleme veya sayfalama eklenebilir */}
     
    </div>
  );
}
