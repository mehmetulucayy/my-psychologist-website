// src/components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-blue-800">
        Dr. 
      </Link>
     
      <nav className="flex-grow flex justify-center">
        <ul className="flex space-x-6 items-center">
          <li>
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Ana Sayfa
            </Link>
          </li>
          <li>
            <Link href="/hakkimizda" className="text-gray-700 hover:text-blue-600 font-medium">
              Hakkımda
            </Link>
          </li>
          <li>
            <Link href="/hizmetler" className="text-gray-700 hover:text-blue-600 font-medium">
              Hizmetler
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/iletisim" className="text-gray-700 hover:text-blue-600 font-medium">
              İletişim
            </Link>
          </li>
          <li>
            <Link href="/randevu-al" className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300">
              Randevu Al
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}