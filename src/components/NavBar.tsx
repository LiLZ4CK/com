import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo.png';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-30 bg-[#003851] shadow-sm w-full">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center py-4">
          <div className="flex items-center space-x-8 md:space-x-12">
            {/* Left Links */}
            <Link href="#notre-groupe" className="text-white hover:text-gray-200 xl:text-[12px] 2xl:text-[14px] xl:tracking-[2px] 2xl:tracking-[4px]" style={{ fontFamily: 'Romelio', fontWeight: 'lighter' }}>
              NOTRE GROUPE
            </Link>
            <Link href="#vision-valeurs" className="text-white hover:text-gray-200 xl:text-[12px] 2xl:text-[14px] xl:tracking-[2px] 2xl:tracking-[4px]" style={{ fontFamily: 'Romelio', fontWeight: 'lighter' }}>
              VISION&VALEURS
            </Link>
            <Link href="#nos-metiers" className="text-white hover:text-gray-200 xl:text-[12px] 2xl:text-[14px] xl:tracking-[2px] 2xl:tracking-[4px]" style={{ fontFamily: 'Romelio', fontWeight: 'lighter' }}>
              NOS METIERS
            </Link>
            
            {/* Logo as Center Link */}
            <Link href="/" className="mx-4 flex items-center mt-[-1%]">
              <Image
                src={logo}
                alt="Logo"
                width={130}
                height={40}
                className="h-auto w-[170px]"
                priority
              />
            </Link>
            
            {/* Right Links */}
            <Link href="#nos-marques" className="text-white hover:text-gray-200 xl:text-[12px] 2xl:text-[14px] xl:tracking-[2px] 2xl:tracking-[4px]" style={{ fontFamily: 'Romelio', fontWeight: 'lighter' }}>
              NOS MARQUES
            </Link>
            <Link href="#actualites" className="text-white hover:text-gray-200 xl:text-[12px] 2xl:text-[14px] xl:tracking-[2px] 2xl:tracking-[4px]" style={{ fontFamily: 'Romelio', fontWeight: 'lighter' }}>
              ACTUALITES
            </Link>
            <Link href="#carriere" className="text-white hover:text-gray-200 xl:text-[12px] 2xl:text-[14px] xl:tracking-[2px] 2xl:tracking-[4px]" style={{ fontFamily: 'Romelio', fontWeight: 'lighter' }}>
              CARRIERE
            </Link>
            <Link href="Contact" className="text-white hover:text-gray-200 xl:text-[12px] 2xl:text-[14px] xl:tracking-[2px] 2xl:tracking-[4px]" style={{ fontFamily: 'Romelio', fontWeight: 'lighter' }}>
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}