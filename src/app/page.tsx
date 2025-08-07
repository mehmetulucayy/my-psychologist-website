// src/app/page.tsx
import Image from "next/image"; 
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-160px)] flex flex-col items-center justify-center text-center py-16">
      {/* Kahraman Bölümü */}
      <section className="w-full bg-gradient-to-r from-blue-100 to-blue-200 py-20 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-800 mb-6 leading-tight">
          Dr. Begüm Sena Yılmaz
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
          Psikolojik Sağlığınız İçin Güvenilir ve Destekleyici Bir Ortam
        </p>
        {/* Hero bölümündeki "Randevu Alın" butonu */}
        <Link href="/randevu-al" className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg inline-block">
          Randevu Alın
        </Link>
        {/* Buraya isterseniz bir resim de ekleyebilirsiniz: */}
    
      </section>

      {/* Hizmetler Özeti Bölümü */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Hizmetlerimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Hizmet Kartı 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Bireysel Terapi</h3>
            <p className="text-gray-600">
              Depresyon, anksiyete, stres yönetimi, ilişki sorunları ve kişisel gelişim konularında birebir destek.
            </p>
          </div>
          {/* Hizmet Kartı 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Çift ve Aile Terapisi</h3>
            <p className="text-gray-600">
              İletişim sorunları, çatışma çözümü ve aile içi dinamiklerin anlaşılması için destek.
            </p>
          </div>
          {/* Hizmet Kartı 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Online Terapi</h3>
            <p className="text-gray-600">
              Konum bağımsız, esnek saatlerde güvenli ve etkili terapi hizmeti.
            </p>
          </div>
        </div>
      </section>

      {/* Diğer bölümler buraya eklenebilir */}
      
    </div>
  );
}
