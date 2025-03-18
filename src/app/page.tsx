'use client'
import Image from "next/image";
import backgroundImage from "@/assets/background.jpg";
import NavBar from "@/components/NavBar";
import { useEffect, useState } from "react";
import Navbar from "@/components/NavBar";
import logo from "@/assets/logo.png"
import bg from "@/assets/bg.jpg"
import aboutbg from "@/assets/aboutus_bg.png"
import card from "@/assets/card.jpg"
import card2 from "@/assets/card2.jpg"
import card3 from "@/assets/card3.jpg"
import alalia from "@/assets/Al-Alia.jpg"
import palms from "@/assets/Palms.jpg"
import workin from "@/assets/workin.jpg"
import nosmarques from "@/assets/nosmarques.png"
import contactus from "@/assets/contactus.png"
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import Sanam from "@/assets/Sanam holding.png"
import alaliamaak from "@/assets/Al-Alia-maak.jpg"
import "@/app/globals.css"; // Import the global CSS file

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const slides = [
    {
      images: [alalia.src, palms.src, workin.src],
      title: "Immobilier : Arena lance un programme durable de 5 milliards de dirhams à Casablanca",
      date: "29/10/2024"
    },
    {
      image: Sanam.src,
      title: "Immobilier: le groupe Sanam s'associe avec Aevitas, le gestionnaire néerlandais de fonds de pension américains",
      date: "11/06/2020"
    },
    {
      image: alaliamaak.src,
      title: "Covid-19 : Al Alia immobilier se mobilise pour aider financièrement ses acquéreurs",
      date: "22/07/2020"
    }
  ];

  const handlePrevClick = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleNextClick = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const getVisibleSlides = () => {
    if (slides.length <= 3) {
      return [...slides, ...slides, ...slides].slice(currentSlide, currentSlide + 3);
    }
    const start = currentSlide;
    const end = currentSlide + 3;
    return slides.slice(start, end).concat(slides.slice(0, end - slides.length));
  };

  const handleContactClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setShowForm(false);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <NavBar />
      {/* Section : Home */}
      <section id="home"
        className="relative min-h-screen flex flex-col justify-center items-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage.src})`
        }}
      >
        <p className="hero-content">
          ARENA, CATALYSEUR DE CROISSANCE<br />
           URBAINE ET ECONOMIQUE AU MAROC.
        </p>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-6">
          <img src={logo.src} alt="Logo" className="h-16 w-auto" />
        </div>
      </section>


      {/* Section : Notre Groupe*/}
      <section
        id="notre-groupe"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutbg.src})` }}
      >

        <h2 className="text-4xl font-medium text-[#141C48] mb-4">QUI SOMMES NOUS?</h2>

        <p className="text-xl text-[#141C48] max-w-6xl leading-relaxed mb-4 font-lighter" style={{ fontFamily: 'Raleway', lineHeight: '2.5', letterSpacing: '1px' }}>  
          Arena Property Development est une société marocaine de promotion immobilière qui s’impose<br />
          comme un acteur clé du secteur. Née avec une ambition claire de redéﬁnir les standards de<br />
          l’immobilier, Arena combine innovation, qualité et engagement envers la durabilité pour transformer<br />
          les espaces de vie au Maroc.
        </p>

        <p className="text-xl text-[#141C48] max-w-6xl leading-relaxed mb-6"style={{ fontFamily: 'Raleway', fontWeight: 'lighter', lineHeight: '2.5', letterSpacing: '1px' }}> 
          Le groupe se distingue par sa capacité à conjuguer des visions locales et internationales grâce à des<br />
          partenariats stratégiques solides.
        </p>

        <button className="mt-4 px-6 py-2 text-lg border border-[#141C48] text-[#141C48] rounded-md hover:text-white hover:bg-[#141C48] transition">
          En savoir plus
        </button>
      </section>
      {/* Section : vision-valeurs */}
      <section
        id="vision-valeurs"
        className="relative min-h-screen flex flex-col justify-center items-center text-center text-white px-6 bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(0, 36, 52, 0.7), rgba(0, 36, 52, 0.7)), url(${bg.src})` }}

      >
        <h2 className="text-4xl font-medium mb-6 mt-[-10%]" style={{ fontFamily: 'Romelio' }}>CHIFFRES CLES</h2>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl">

          {/* Stat 1 */}
          <div className="flex flex-col items-center mt-[45%]">
            <span className="text-8xl md:text-9xl font-medium">100</span>
            <p className="text-lg md:text-xl mt-4 max-w-xs">
              Développements sur plus de 100 hectares de terrain, marquant l’empreinte d’ARENA dans le secteur de l’immobilier
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center mt-[45%]">
            <span className="text-8xl md:text-9xl font-medium">80</span>
            <p className="text-lg md:text-xl mt-4 max-w-xs">
              Une équipe de 80 professionnels hautement qualifiés et dédiés à l’excellence
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center mt-[45%]">
            <span className="text-8xl md:text-9xl font-medium">20K</span>
            <p className="text-lg md:text-xl mt-4 max-w-xs">
              Construction de plus de 20 000 unités résidentielles, contribuant à façonner des communautés dynamiques
            </p>
          </div>

        </div>
      </section>
      {/* Section : Nos-Metiers */}
      <section id="nos-metiers" className="py-16 text-center">
        <h2 className="text-4xl  text-gray-900 mb-12">NOS METIERS</h2>
        <div className="flex gap-4 max-w-full mx-0 px-0">
          {/* Card 1 */}
          <div
            className="relative bg-cover flex-grow bg-left h-[700px] w-[650px] bg-no-repeat overflow-hidden"
            style={{ backgroundImage: `url(${card.src})`, backgroundSize: 'cover' }}
          >
            <div className="absolute inset-0 bg-white flex w-[400px] top-[40%] h-[200px] shadow-lg flex-col items-center justify-center p-6 text-left">
              <h3 className="text-3xl font-bold text-purple-950 mb-4">PROMOTION IMMOBILIÈRE</h3>
              <button className="mt-2 px-6 py-2 w-full text-left text-black hover:text-blue-600 rounded-lg transition duration-300" onClick={() => window.location.href = '#details1'}>
                Voir détails
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="relative bg-cover flex-grow bg-center h-[700px] w-[650px] shadow-lg bg-no-repeat overflow-hidden"
            style={{ backgroundImage: `url(${card2.src})`, backgroundSize: 'cover' }}
          >
            <div className="absolute inset-0 bg-white flex w-[400px] top-[40%] h-[200px] flex-col items-center justify-center p-6 text-left">
              <h3 className="text-3xl font-bold  text-purple-950 mb-2">MAÎTRISE D’OUVRAGE DÉLÉGUÉE</h3>
              <button className="mt-2 py-2 w-full text-left text-black rounded-lg hover:text-blue-600 transition duration-300" onClick={() => window.location.href = '#details2'}>
                Voir détails
              </button>
            </div>
          </div>


          {/* Card 3 */}
          <div
            className="relative bg-cover flex-grow bg-right h-[700px] w-[650px] shadow-lg bg-no-repeat overflow-hidden"
            style={{ backgroundImage: `url(${card3.src})`, backgroundSize: 'cover' }}
          >
            <div className="absolute inset-0 bg-white flex w-[400px] top-[40%] h-[200px] flex-col items-center justify-center p-6 text-left">
              <h3 className="text-3xl font-bold  text-purple-950 mb-4">CONSEIL EN INVESTISSEMENT</h3>
              <button className="mt-2  py-2 w-full text-left text-black rounded-lg hover:text-blue-600 transition duration-300">
                Voir détails
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section : Nos-Marques */}
      <section id="nos-marques"
        className="relative py-16 text-center bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(${nosmarques.src})` }}
      >
      </section>


      {/* Section : Actualites */}
      <h2 className="text-4xl font-bold text-black text-center m-12">ACTUALITES</h2>
      <section id="actualites" className="py-16 w-full bg-[#034E59] relative">

        {/* Arrow Buttons */}
        <button onClick={handlePrevClick} className="absolute m-5 left-0 top-1/2 transform -translate-y-1/2  p-4">
          <IoIosArrowDropleft className="w-16 h-24 text-white" />
        </button>
        <button onClick={handleNextClick} className="absolute right-0 top-1/2 transform -translate-y-1/2  p-4 ">
          <IoIosArrowDropright className="w-16 h-24 text-white" />
        </button>



        <div className="w-full max-w-7xl mx-auto px-8">
          <div className="flex md:flex-row flex-col gap-8 transition-transform duration-500">
            {getVisibleSlides().map((slide, index) => (
              <div key={index} className="md:w-1/3">
                <div className="bg-[#CCCBCB] p-7 shadow-lg h-full"> 
                  {slide.images ? (
                    <div className="flex space-x-2 mt-4">
                      {slide.images.map((src, idx) => (
                        <img key={idx} src={src} alt={`Slide ${index} Image ${idx}`} className="w-1/3 h-48 object-cover mb-6" />
                      ))}
                    </div>
                  ) : (
                    <img src={slide.image} alt={`Slide ${index} Image`} className="w-full h-64 object-cover mt-10" />
                  )}
                  <h3 className="text-2xl mt-24 font-bold text-gray-900 mb-8">
                    {slide.title}
                  </h3>
                  <p className="text-gray-700 mb-4"> - {slide.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* Section : Contact */}
      <section id="contact"
        className="relative flex justify-center items-start min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${contactus.src})` }}
      >
        {!showForm ? (
          <button 
            className="mt-80 px-6 py-2 hover:bg-custom-blue hover:text-white text-4xl text-custom-blue border-2 border-custom-blue transform -translate-y-10"
            onClick={handleContactClick}
          >
            CONTACTEZ-NOUS
          </button>
        ) : (
          <form 
            className="mt-80 bg-white p-8 rounded shadow-md"
            onSubmit={handleFormSubmit}
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Nom
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                required 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                required 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea 
                id="message" 
                name="message" 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                required 
              />
            </div>
            <div className="flex items-center justify-between">
              <button 
                type="submit" 
                className="bg-custom-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Envoyer
              </button>
            </div>
          </form>
        )}
      </section>


      {/* Section : Footer */}
      <footer className="bg-custom-blue text-white py-8 ">
        <div className="flex   justify-between items-end">
          <div className="text-left">
            <div className="flex flex-row">

              <img src={logo.src} alt="Logo" className="w-80 mb-2 ml-24" />
              <div className="flex space-x-6 mt-12">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF size={28} className="text-white  hover:text-blue-600" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={28} className="text-white hover:text-pink-500" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={28} className="text-white hover:text-blue-700" />
                </a>
              </div>
            </div>

            <p className="text-base  mt-10 ml-28">© 2025 ARENA PROPERTY DEVELOPMENT. All rights reserved.</p>
          </div>
          <div className="flex flex-col justify-end gap-4 mt-4 mr-28 md:mt-0 text-right">
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
              <a key={index} href={`#${link.id}`} className="text-lg hover:underline">
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};