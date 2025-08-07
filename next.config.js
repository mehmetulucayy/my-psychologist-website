/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 'domains' yerine 'remotePatterns' kullanıyoruz.
    // Bu, sadece belirli URL kalıplarından görsel yüklenmesine izin verir.
    // Eğer placehold.co'dan görsel çekmeye devam edecekseniz bu ayar gerekli.
    // Ancak yerel görsellere geçiş yapacağımız için, eğer tüm görseller yerel olursa bu kısım boş kalabilir.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      // Eğer başka harici domainlerden görsel çekiyorsanız buraya ekleyin:
      // {
      //   protocol: 'https',
      //   hostname: 'images.unsplash.com',
      //   port: '',
      //   pathname: '/**',
      // },
    ],
  },
};

module.exports = nextConfig;
