// src/components/Footer.tsx
import Link from 'next/link';

import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Sütun 1: İletişim Bilgileri */}
        <div>
          <h3 className="text-xl font-semibold mb-4">İletişim</h3>
          <p className="text-gray-300">Adres: Kızılırmak Mahallesi, 1443. Cadde No:17, Çankaya/Ankara</p>
          <p className="text-gray-300">Telefon: (0312) 273 4550</p>
          <p className="text-gray-300">E-posta: begumsenayilmaz@gmail.com</p>
        </div>

        {/* Sütun 2: Hızlı Bağlantılar */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Hızlı Bağlantılar</h3>
          <ul>
            <li className="mb-2"><Link href="/hizmetler" className="text-gray-300 hover:text-blue-200 transition-colors duration-300">Hizmetlerimiz</Link></li>
            
            <li className="mb-2"><Link href="/hakkimizda" className="text-gray-300 hover:text-blue-200 transition-colors duration-300">Hakkımda</Link></li>
            <li className="mb-2"><Link href="/blog" className="text-gray-300 hover:text-blue-200 transition-colors duration-300">Blog</Link></li>
            
            <li className="mb-2"><Link href="/randevu-al" className="text-gray-300 hover:text-blue-200 transition-colors duration-300">Randevu Al</Link></li>
          </ul>
        </div>

        {/* Sütun 3: Sosyal Medya */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Takip Edin</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://www.linkedin.com/login" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-200 transition-colors duration-300 text-2xl">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-200 transition-colors duration-300 text-2xl">
              <FaInstagram />
            </a>
            <a href="mailto:https://accounts.google.com/" className="text-gray-300 hover:text-blue-200 transition-colors duration-300 text-2xl">
              <FaEnvelope />
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-6">&copy; {new Date().getFullYear()} Dr. Begüm Sena Yılmaz. Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
