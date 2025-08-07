// src/app/blog/[slug]/page.tsx
import React from 'react';
import { blogPosts, BlogPost } from '@/data/blogPosts'; // Blog yazılarını import ediyoruz
import { notFound } from 'next/navigation'; // Sayfa bulunamazsa 404 göstermek için
import Image from 'next/image'; // Görsel optimizasyonu için
import Link from 'next/link'; // Geri dön linki için

// Dinamik rotalar için statik yolları (slug'ları) oluştururuz (build zamanı için).
// Bu fonksiyon, Next.js'e hangi blog yazısı sayfalarının oluşturulacağını söyler.
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Her bir blog yazısı sayfası için metadata oluştururuz (SEO için).
// Bu, tarayıcı sekmesinde görünen başlığı ve arama motorları için açıklamayı ayarlar.
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Blog Yazısı Bulunamadı",
      description: "Aradığınız blog yazısı bulunamadı.",
    };
  }

  return {
    title: `${post.title} | Dr. Begüm Sena Yılmaz Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.imageUrl }],
      url: `https://www.drbegumsenayilmaz.com/blog/${post.slug}`, // Kendi domaininizi yazmalısınız
      type: 'article',
      publishedTime: post.date,
    },
  };
}

// Dinamik blog yazısı detay sayfası bileşeni
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params; // URL'den gelen slug değerini alıyoruz
  const post = blogPosts.find((p) => p.slug === slug); // Slug'a göre ilgili blog yazısını buluyoruz

  if (!post) {
    // Eğer slug'a uygun bir yazı bulunamazsa 404 sayfasını göster
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative w-full h-80 md:h-96 lg:h-[500px] overflow-hidden">
          {/* Blog yazısı görseli */}
          <Image
            src={post.imageUrl}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="object-center"
          />
        </div>
        <div className="p-6 md:p-8 lg:p-10">
          {/* Yayın tarihi */}
          <span className="text-sm text-gray-500 mb-2 block">
            {new Date(post.date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
          {/* Blog yazısı başlığı */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-6 leading-tight">
            {post.title}
          </h1>
          {/* Blog yazısının ana içeriği. dangerouslySetInnerHTML ile HTML stringini render ediyoruz. */}
          {/* Bu kullanımı yaparken içeriğin güvenilir kaynaklardan geldiğinden emin olun. */}
          <div
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>

      {/* Tüm blog yazılarına geri dönme linki */}
      <div className="mt-12 text-center">
        <Link href="/blog" className="text-blue-600 hover:underline text-lg font-semibold">
          &larr; Tüm Blog Yazılarına Geri Dön
        </Link>
      </div>
    </div>
  );
}
