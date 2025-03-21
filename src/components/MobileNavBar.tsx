"use client";
import { useState } from "react";
import { X, Menu } from "lucide-react";
import logo from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Top Bar with Logo & Menu Button */}
      <div className="flex lg:hidden items-center justify-between p-4 bg-[#003851] shadow-md fixed top-0 left-0 w-full z-50">
        {/* Logo on the Left */}
        <Image src={logo} alt="Logo" width={150} height={50} className="block lg:hidden " priority />

        {/* Menu Button on the Right */}
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden bg-gray-800 text-white p-2 rounded-md"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 z-50 bg-white shadow-lg transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 left-4 text-gray-800"
        >
          <X size={24} />
        </button>

        {/* Sidebar Links */}
        <nav className="mt-16 flex flex-col gap-4 p-6 text-gray-900 font-semibold">
          {[
            "NOTRE GROUPE",
            "VISION & VALEURS",
            "NOS MÉTIERS",
            "NOS MARQUES",
            "ACTUALITÉS",
            "CARRIÈRE",
            "CONTACT",
          ].map((item, index) => (
            <Link key={index} href="#">
              <span className="hover:text-blue-600 cursor-pointer">{item}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay (Click outside to close) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
        />
      )}
    </div>
  );
};

export default MobileSidebar;
