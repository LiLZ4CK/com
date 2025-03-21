"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-[#003851] text-white py-8 px-6">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end">
        
        {/* Logo & Socials */}
        <div className="text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <Image src={logo} alt="Logo" width={200} height={80} className="w-64 mb-4 md:mb-2 md:ml-24" />
            
            <div className="flex space-x-6 mt-4 md:mt-12">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF size={28} className="text-white hover:text-blue-600" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={28} className="text-white hover:text-pink-500" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={28} className="text-white hover:text-blue-700" />
              </a>
            </div>
          </div>

          <p className="text-base mt-6 md:mt-10 md:ml-28 text-center md:text-left">
            © 2025 ARENA PROPERTY DEVELOPMENT. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-end gap-4 mt-6 md:mt-0 md:mr-28">
          {[
            { text: "ACCUEIL", id: "home" },
            { text: "NOTRE GROUPE", id: "notre-groupe" },
            { text: "VISION & VALEURS", id: "vision-valeurs" },
            { text: "NOS MÉTIERS", id: "nos-metiers" },
            { text: "NOS MARQUES", id: "nos-marques" },
            { text: "ACTUALITÉS", id: "actualites" },
            { text: "CARRIÈRE", id: "carriere" },
            { text: "CONTACT", id: "contact" },
          ].map((link, index) => (
            <a key={index} href={`#${link.id}`} className="text-lg hover:underline" style={{ fontFamily: "Raleway", fontSize: "14px", letterSpacing: "5px" }}>
              {link.text}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}

export default Footer;
