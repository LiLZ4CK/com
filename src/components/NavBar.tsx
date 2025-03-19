import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo.png';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-30 bg-custom-blue shadow-sm w-full">
      <div className="w-full px-8">
        <div className="flex items-center justify-center py-4 w-full relative">
          
          {/* Navigation Links (Left) */}
          <div className="flex space-x-12 whitespace-nowrap">
            <Link href="#notre-groupe" className="text-white hover:text-gray-200 text-lg" style={{ fontFamily: 'Romelio', fontSize: '14px', letterSpacing: '4px', fontWeight: 'lighter' }}>
              NOTRE GROUPE
            </Link>
            <Link href="#vision-valeurs" className="text-white hover:text-gray-200 text-lg" style={{ fontFamily: 'Romelio', fontSize: '14px', letterSpacing: '4px', fontWeight: 'lighter' }}>
              VISION&VALEURS
            </Link>
            <Link href="#nos-metiers" className="text-white hover:text-gray-200 text-lg" style={{ fontFamily: 'Romelio', fontSize: '14px', letterSpacing: '4px', fontWeight: 'lighter' }}>
              NOS METIERS
            </Link>
          </div>

          {/* Logo  */}
          <div className="mx-4">
            <Link href="/">
              <Image
                src={logo}
                alt="Logo"
                width={150}
                height={50}
                className="h-auto w-[200px]"
                priority
              />
            </Link>
          </div>

          {/* Navigation Links (Right) */}
          <div className="flex space-x-12 whitespace-nowrap">
            <Link href="#nos-marques" className="text-white hover:text-gray-200 text-lg" style={{ fontFamily: 'Romelio', fontSize: '14px', letterSpacing: '4px', fontWeight: 'lighter' }}>
              NOS MARQUES
            </Link>
            <Link href="#actualites" className="text-white hover:text-gray-200 text-lg" style={{ fontFamily: 'Romelio', fontSize: '14px', letterSpacing: '4px', fontWeight: 'lighter' }}>
              ACTUALITES
            </Link>
            <Link href="#carriere" className="text-white hover:text-gray-200 text-lg" style={{ fontFamily: 'Romelio', fontSize: '14px', letterSpacing: '4px', fontWeight: 'lighter' }}>
              CARRIERE
            </Link>
            <Link href="#contact" className="text-white hover:text-gray-200 text-lg" style={{ fontFamily: 'Romelio', fontSize: '14px', letterSpacing: '4px', fontWeight: 'lighter' }}>
              CONTACT
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}
