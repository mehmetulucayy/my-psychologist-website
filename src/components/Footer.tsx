"use client";

import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Sol kısım - Telif hakkı */}
        <p className="text-center md:text-left mb-4 md:mb-0">
          © {new Date().getFullYear()} Tüm Hakları Saklıdır.
        </p>

        {/* Sağ kısım - Sosyal Medya */}
        <div className="flex justify-center md:justify-start space-x-6">
          <a
            href="https://www.linkedin.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-2xl"
          >
            <FaLinkedin className="inline-block" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-pink-400 transition-colors duration-300 text-2xl"
          >
            <FaInstagram className="inline-block" />
          </a>
        </div>
      </div>
    </footer>
  );
}
