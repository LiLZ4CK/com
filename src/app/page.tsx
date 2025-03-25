'use client';
import backgroundImage from "@/assets/background.jpg";
import { useEffect, useState } from "react";
import React from "react";
import logo from "@/assets/Arena-logo.png";
import Alogo from "@/assets/A-logo.png";
import bg from "@/assets/bg.jpg";

import card from "@/assets/analog-landscape-city-with-buildings.jpg";
import card3 from "@/assets/business-people-working-with-ipad-high-angle.jpg";
import card2 from "@/assets/side-view-old-architect-with-building-plans.jpg";

import alalia from "@/assets/Al-Alia.jpg";
import palms from "@/assets/Palms.jpg";
import workin from "@/assets/workin.jpg";

import oartf from "@/assets/Artof.png";
import oalia from "@/assets/Nos-marques-logos-al-alia.png";
import opalm from "@/assets/Nos-marques-logos-Palms.png";
import owork from "@/assets/Nos-marques-logos-Workin.png";

import aeco from "@/assets/ÉCO.ma_.png";
import a360 from "@/assets/le360.png";
import am24 from "@/assets/logo.m24.png";

import contactus from "@/assets/contactus.png";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import Sanam from "@/assets/Sanam holding.png";
import alaliamaak from "@/assets/Al-Alia-maak.jpg";
import "@/app/globals.css";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const slides = [
    {
      images: [alalia.src, palms.src, workin.src],
      title: "Immobilier : Arena lance un programme durable de 5 milliards de dirhams à Casablanca",
      date: "29/10/2024",
      press: aeco.src,
      link: "https://leseco.ma/business/immobilier-arena-lance-un-programme-durable-de-5-milliards-de-dirhams-a-casablanca.html",
    },
    {
      image: Sanam.src,
      title: "Immobilier: le groupe Sanam s'associe avec Aevitas, le gestionnaire néerlandais de fonds de pension américains",
      date: "11/06/2020",
      press: a360.src,
      link: "https://fr.le360.ma/economie/immobilier-le-groupe-sanam-sassocie-avec-aevitas-le-gestionnaire-neerlandais-de-fonds-de-pension-217011/",
    },
    {
      image: alaliamaak.src,
      title: "Covid-19 : Al Alia immobilier se mobilise pour aider financièrement ses acquéreurs",
      date: "22/07/2020",
      press: am24.src,
      link: "https://medias24.com/2020/04/13/al-alia-immobilier-15-mdh-pour-soutenir-les-residents-les-plus-fragilises/",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);


  const handlePrevClick = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const getDesktopVisibleSlides = () => {
    const visibleSlides = [];
    for (let i = 0; i < 3; i++) {
      const slideIndex = (currentSlide + i) % slides.length;
      visibleSlides.push(slides[slideIndex]);
    }
    return visibleSlides;
  };
  


  const handleContactClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowForm(false);
  };

  return (
    <div className="relative w-full overflow-hidden">
 
      {/* Section : Home */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col justify-center items-center bg-cover bg-center px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage.src})`,
        }}
      >
        <p className="hero-content text-[16-px] xl:text-[24px] 2xl:text-[31px] tracking-[4px] xl:tracking-[3px] 2xl:tracking-[4px]">
          ARENA, CATALYSEUR DE CROISSANCE
          <br />
          URBAINE ET ECONOMIQUE AU MAROC.
        </p>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <img src={logo.src} alt="Logo" className="w-36 xl:w-48 2xl:w-60 items-center opacity-70" />
        </div>
      </section>

      {/* Section : Notre Groupe */}
      <section
        id="notre-groupe"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative bg-[#edede5]"
        style={{
          backgroundImage: `url(${Alogo.src})`,
          backgroundColor: "#fafafa",
          backgroundRepeat: "no-repeat",
          backgroundSize: "200%",
          backgroundPosition: "center", // keeps the image centered
        }}
      >
        <h2 className="text-xl  xl:text-2xl 2xl:text-4xl font-medium text-[#212046] mb-4">
          QUI SOMMES NOUS?
        </h2>

        <p className="text-base md:text-lg  xl:text-[18px] 2xl:text-[22px] text-[#141C48] xl:max-w-4xl 2xl:max-w-6xl leading-relaxed lg:font-[350] lg:tracking-[1.5px] lg:leading-[46px] mt-6"
          style={{ fontFamily: "Raleway" }}
        >
          Arena Property Development est une société marocaine de promotion immobilière qui s’impose
          comme un acteur clé du secteur. Née avec une ambition claire de redéﬁnir les standards de
          l’immobilier, Arena combine innovation, qualité et engagement envers la durabilité pour
          transformer les espaces de vie au Maroc.
        </p>
        <br />
        <p className="text-base md:text-lg xl:text-[18px] 2xl:text-[22px] text-[#141C48] xl:max-w-4xl 2xl:max-w-6xl leading-relaxed lg:font-[350] lg:tracking-[1.5px] lg:leading-[46px] 2xl:mt-6"
          style={{ fontFamily: "Raleway" }}
        >
          Le groupe se distingue par sa capacité à conjuguer des visions locales et internationales
          grâce à des partenariats stratégiques solides.
        </p>

        <button
              className="mt-6 px-6 py-2 text-lg border border-[#141C48] text-[#141C48] hover:text-white hover:bg-[#141C48] transition"
              style={{
                fontFamily: "Raleway",
                fontSize: typeof window !== "undefined" && window.innerWidth >= 1024 ? "24px" : "", // Large screen: 24px
                fontWeight: typeof window !== "undefined" && window.innerWidth >= 1024 ? "350" : "", // Large screen: 350
                letterSpacing: typeof window !== "undefined" && window.innerWidth >= 1024 ? "1.5px" : "", // Large screen: 1.5px
              }}
            > En savoir plus
        </button>
      </section>

      {/* Section : Vision & Valeurs */}
      <section
          id="vision-valeurs"
          className="relative min-h-screen flex flex-col items-center text-center text-white px-6 bg-cover bg-center pt-10"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 36, 52, 0.7), rgba(0, 36, 52, 0.7)), url(${bg.src})`,
          }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-white">CHIFFRES CLES</h2>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-8 w-full max-w-6xl">
          {/* Stat 1 */}
          <div className="flex flex-col items-center mt-[20%]">
            <span className="text-5xl xl:text-6xl 2xl:text-8xl font-medium"style={{ fontFamily: 'Romelio' }}>100</span>
            <p className="text-base text-[15px] xl:text[16px] 2xl:text-[17px] mt-0 max-w-[240px]"style={{fontFamily: 'Raleway', fontWeight: '400'}}>
              Développements sur plus de 100 hectares de terrain, marquant l’empreinte d’ARENA dans
              le secteur de l’immobilier.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center mt-[10%]">
          <span className="text-5xl xl:text-6xl 2xl:text-8xl font-medium"style={{ fontFamily: 'Romelio' }}>80</span>
          <p className="text-base text-[15px] xl:text[16px] 2xl:text-[17px] mt-0 max-w-[240px]"style={{fontFamily: 'Raleway', fontWeight: '400'}}>
              Une équipe de 80 professionnels hautement qualifiés et dédiés à l’excellence.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center mt-[10%]">
          <span className="text-5xl xl:text-6xl 2xl:text-8xl font-medium"style={{ fontFamily: 'Romelio' }}>20K</span>
          <p className="text-base text-[15px] xl:text[16px] 2xl:text-[17px] mt-0 max-w-[240px]"style={{fontFamily: 'Raleway', fontWeight: '400'}}>
              Construction de plus de 20&nbsp;000 unités résidentielles, contribuant à façonner des
              communautés dynamiques.
            </p>
          </div>
        </div>
      </section>

{/* Section : Nos Métiers */}
<section id="nos-metiers" className="py-16 text-center px-4">
  <h2 className="text-2xl xl:text-3xl 2xl:text-4xl text-gray-900 mb-12" style={{ fontFamily: 'Romelio' }}>NOS METIERS</h2>
  <div className="flex flex-col lg:flex-row gap-4 ">
    {/* Card 1 */}
    <div
      className="relative bg-cover flex-grow h-[400px] md:h-[600px] bg-no-repeat overflow-hidden lg:w-1/3"
      style={{ backgroundImage: `url(${card.src})`, backgroundSize: "cover" }}
    >
      <div className="absolute inset-0 bg-white flex w-[270px] h-[130px] xl:h-[170px] xl:w-[350px] 2xl:w-[400px] top-[60%]  shadow-lg flex-col items-start justify-center p-6 text-left">
        <h3 className="text-l xl:text-xl 2xl:text-2xl font-bold text-purple-950"style={{letterSpacing: '2px', fontWeight: 'lighter'}}>
          PROMOTION IMMOBILIERE
        </h3>
        <button
          className="mt-2 text-[12px] xl:text-[15px] 2xl:text-[17px] text-left text-black hover:text-blue-600 transition duration-300" style={{fontFamily: 'Raleway', fontWeight: '500'}}
          onClick={() => (window.location.href = "#details1")}
        >
          Voir détails
        </button>
      </div>
    </div>

    {/* Card 2 */}
    <div
      className="relative bg-cover flex-grow h-[400px] md:h-[600px] bg-no-repeat overflow-hidden lg:w-1/3"
      style={{ backgroundImage: `url(${card2.src})`, backgroundSize: "cover" }}
    >
      <div className="absolute inset-0 bg-white flex w-[270px] h-[130px] xl:h-[170px] xl:w-[350px] 2xl:w-[400px] top-[60%]  shadow-lg flex-col items-start justify-center p-6 text-left">
      <h3 className="text-l xl:text-xl 2xl:text-2xl font-bold text-purple-950"style={{letterSpacing: '2px', fontWeight: 'lighter'}}>
      MAITRISE D’OUVRAGE DELEGUEE
        </h3>
        <button
          className="mt-2 text-[12px] xl:text-[15px] 2xl:text-[17px] text-left text-black hover:text-blue-600 transition duration-300" style={{fontFamily: 'Raleway', fontWeight: '500'}}
          onClick={() => (window.location.href = "#details2")}
        >
          Voir détails
        </button>
      </div>
    </div>

    {/* Card 3 */}
    <div
      className="relative bg-cover flex-grow h-[400px] md:h-[600px] bg-no-repeat overflow-hidden lg:w-1/3"
      style={{ backgroundImage: `url(${card3.src})`, backgroundSize: "cover" }}
    >
      <div className="absolute inset-0 bg-white flex w-[270px] h-[130px] xl:h-[170px] xl:w-[350px] 2xl:w-[400px] top-[60%]  shadow-lg flex-col items-start justify-center p-6 text-left">
      <h3 className="text-l xl:text-xl 2xl:text-2xl font-bold text-purple-950"style={{letterSpacing: '2px', fontWeight: 'lighter'}}>
      CONSEIL EN INVESTISSEMENT
        </h3>
        <button
          className="mt-2 text-[12px] xl:text-[15px] 2xl:text-[17px] text-left text-black hover:text-blue-600 transition duration-300" style={{fontFamily: 'Raleway', fontWeight: '500'}}
          onClick={() => (window.location.href = "#details3")}
        >
          Voir détails
        </button>
      </div>
    </div>
  </div>
</section>

      {/* Section : Nos Marques */}
      <section
     id="nos-marques" 
     className="marque py-16 text-center flex flex-col min-h-screen justify-center items-center"
     style={{ 
       "--bg-image-url": `url(${Alogo.src})`
     } as React.CSSProperties}
   >
      <h2 className="text-2xl xl:text-3xl 2xl:text-4xl text-white mb-8 xl:mb-[10%]">NOS MARQUES</h2>
      <div className="flex flex-col lg:flex-row justify-center items-center mt-36 xl:mt-2 gap-4 xl:gap-0 2xl:gap-28">
      <div className="w-auto max-w-xs flex justify-center">
        <img src={oartf.src} alt="im1" className="h-auto w-auto max-h-[440px] xl:h-16 xl:w-[950px]  mb-[12%] xl:mb-0 opacity-50 hover:opacity-100 hover:scale-110 transition duration-300" />
      </div>
      <div className="w-auto max-w-xs flex justify-center">
        <img src={oalia.src} alt="im2" className="h-auto w-auto max-h-[240px] xl:max-h-[450px] opacity-50 hover:opacity-100 hover:scale-110 transition duration-300" />
      </div>
      <div className="w-auto max-w-xs flex justify-center">
        <img src={opalm.src} alt="im3" className="h-auto w-auto max-h-[240px] xl:max-h-[450px] opacity-50 hover:opacity-100 hover:scale-110 transition duration-300" />  
      </div>
      <div className="w-auto max-w-xs flex justify-center">
        <img src={owork.src} alt="im4" className="h-auto w-auto max-h-[240px] xl:max-h-[450px] opacity-50 hover:opacity-100 hover:scale-110 transition duration-300" />
      </div>
    </div>
    </section>

      {/* Section : Actualites */}
<h2 className="text-2xl xl:text-3xl 2xl:text-4xl text-center m-6 md:m-12" style={{ color: '#023a41', fontFamily: 'Romelio' }}>ACTUALITES</h2>
<section id="actualites" className="py-8 md:py-16 w-full bg-[#034e58] relative min-h-[400px] md:min-h-[600px]">
  {/* Desktop Arrow Buttons - Only visible on large screens (above 1024px) */}
  <button onClick={handlePrevClick} className="hidden lg:block absolute m-5 left-0 top-1/2 transform -translate-y-1/2 p-4">
    <IoIosArrowDropleft className="w-16 h-24 text-white" />
  </button>
  <button onClick={handleNextClick} className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 p-4">
    <IoIosArrowDropright className="w-16 h-24 text-white" />
  </button>

  <div className="w-full max-w-8xl mx-auto px-6 ml-2">
    {/* Desktop view - only shown on large screens (above 1024px) */}
    <div className="hidden xl:flex xl:flex-row transition-transform duration-500 gap-0 ml-[5%]">
      {/* Desktop view - show all visible slides */}
      {getDesktopVisibleSlides().map((slide, index) => (
        <div key={index} className="lg:w-1/3 px-1 ">
          <div className="bg-[#cccbcb] p-7 shadow-lg xl:h-[400px] xl:w-[350px] 2xl:h-[500px] 2xl:w-[470px] flex flex-col h-full justify-between cursor-pointer">
            <a href={slide.link} target="_blank" rel="noopener noreferrer" className="block h-full flex flex-col">
              {slide.images ? (
                <div className="flex space-x-2 mt-2">
                  {slide.images.map((src, idx) => (
                    <img 
                      key={idx} 
                      src={src} 
                      alt={`Slide ${index} Image ${idx}`} 
                      className="xl:w-[92px] xl:h-36 2xl:w-[133px] 2xl:h-48 object-cover mb-2 mt-2" 
                    />
                  ))}
                </div>
              ) : (
                <div className="flex justify-start">
                  <img 
                    src={slide.image} 
                    alt={`Slide ${index} Image`} 
                    className="xl:h-[180px] 2xl:h-[210px] object-contain mb-3 mt-0" 
                  />
                </div>
              )}

              <h3 
                className="xl:text-[16px] xl:tracking-[20px] 2xl:tracking-[40px] 2xl:text-[20px] text-gray-900 mt-0" 
                style={{
                  fontFamily: 'Raleway', 
                  letterSpacing: '2px', 
                  fontWeight: 'bold'
                }}
              >
                {slide.title}
              </h3>

              {/* Wrap p inside a flex-col container to push it down */}
              <div className="flex items-start flex-col h-full">
                <p 
                  className="text-gray xl:text-[16px] xl:tracking-[20px] 2xl:tracking-[40px] 2xl:text-[20px] mt-auto mt-6 mb-2 flex items-center" 
                  style={{ 
                    fontFamily: 'Raleway', 
                    letterSpacing: '2px', 
                    fontWeight: '400' 
                  }}
                >
                  <img className="xl:w-[80px] 2xl:w-[100px] mr-4" src={slide.press} alt="Slide Press" /> - {slide.date}
                </p>
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>

    {/* Mobile and Tablet view - show on screens up to 1024px */}
    <div className="xl:hidden transition-transform duration-500 overflow-hidden">
      {/* Current slide with transition effect */}
      <div 
        className="w-full flex transition-transform duration-500 ease-in-out" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 px-2">
            <div className="bg-[#cccbcb] p-5 shadow-lg h-full flex flex-col justify-between cursor-pointer">
              <a href={slide.link} target="_blank" rel="noopener noreferrer" className="block h-full flex flex-col">
                {slide.images ? (
                  <div className="grid grid-cols-2 gap-2">
                    {slide.images.map((src, idx) => (
                      <img
                        key={idx} 
                        src={src} 
                        alt={`Slide ${index} Image ${idx}`} 
                        className="w-full h-32 md:h-40 object-cover" 
                      />
                    ))}
                  </div>
                ) : (
                  <div className="flex justify-start md:justify-start">
                    <img 
                      src={slide.image} 
                      alt={`Slide ${index} Image`} 
                      className="h-[200px] md:h-[250px] object-contain mt-4 mb-4" 
                    />
                  </div>
                )}
                <h3 
                  className="text-base text-gray-900 mt-2 md:mt-4" 
                  style={{
                    fontFamily: 'Raleway', 
                    letterSpacing: '1px', 
                    fontSize: '18px', 
                    lineHeight: '1.8', 
                    fontWeight: 'bold'
                  }}
                >
                  {slide.title}
                </h3>
                <div 
                  className="text-gray-700 mt-4 flex items-center flex-wrap h-full flex flex-col items-center md:items-start" 
                  style={{ 
                    fontFamily: 'Raleway', 
                    letterSpacing: '1px', 
                    fontSize: '16px', 
                    lineHeight: '1.3', 
                    fontWeight: '400' 
                  }}
                >
                  <p className="flex items-end text-gray mt-auto">
                    <img className="w-[60px] md:w-[120px] mr-2" src={slide.press} alt="Slide Press" />-{slide.date}
                  </p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* Slide indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <div 
            key={index} 
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full cursor-pointer ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  </div>
</section> 

      {/* Section : Contact */}
      <section
        id="contact"
        className="relative flex justify-center items-start min-h-screen bg-cover bg-center px-4"
        style={{ backgroundImage: `url(${contactus.src})`, backgroundSize: "cover" }}
      >
        {!showForm ? (
          <button
            className="px-6 py-2 hover:bg-[#003851] hover:text-white text-xl xl:text-2xl 2xl:text-4xl text-custom-blue border-2 border-custom-blue transform  mt-44 xl:mt-40 2xl:mt-48 -translate-y-12"
            onClick={handleContactClick}
          >
            CONTACTEZ-NOUS
          </button>
        ) : (
          <form
            className="mt-80 bg-white p-8 rounded shadow-md w-full max-w-md"
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
                className="bg-[#003851] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Envoyer
              </button>
            </div>
          </form>
        )}
      </section>
    </div>
  );
}