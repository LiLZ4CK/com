'use client'
import Image from "next/image";
import backgroundImage from "@/assets/background.jpg";
import NavBar from "@/components/NavBar";
import { useEffect, useState } from "react";
import React from "react";
import Navbar from "@/components/NavBar";
import logo from "@/assets/Arena-logo.png"
import Alogo from "@/assets/A-logo.png"
import bg from "@/assets/bg.jpg"
import aboutbg from "@/assets/aboutus_bg.png"

import card from "@/assets/analog-landscape-city-with-buildings.jpg"
import card3 from "@/assets/business-people-working-with-ipad-high-angle.jpg"
import card2 from "@/assets/side-view-old-architect-with-building-plans.jpg"

import alalia from "@/assets/Al-Alia.jpg"
import palms from "@/assets/Palms.jpg"
import workin from "@/assets/workin.jpg"

import oartf from "@/assets/Artof.png"
import oalia from "@/assets/Nos-marques-logos-al-alia.png"
import opalm from "@/assets/Nos-marques-logos-Palms.png"
import owork from "@/assets/Nos-marques-logos-Workin.png"

import aeco from "@/assets/ÉCO.ma_.png"
import a360 from "@/assets/le360.svg"
import am24 from "@/assets/logo.m24.png"

import nosmarques from "@/assets/nosmarques.png"
import contactus from "@/assets/contactus.png"
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import Sanam from "@/assets/Sanam holding.png"
import alaliamaak from "@/assets/Al-Alia-maak.jpg"
import "@/app/globals.css";
import { url } from "inspector";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const slides = [
    {
      images: [alalia.src, palms.src, workin.src],
      title: "Immobilier : Arena lance un programme durable de 5 milliards de dirhams à Casablanca",
      date: "29/10/2024",
      press: aeco.src,
      link: "https://leseco.ma/business/immobilier-arena-lance-un-programme-durable-de-5-milliards-de-dirhams-a-casablanca.html"
    },
    {
      image: Sanam.src,
      title: "Immobilier: le groupe Sanam s'associe avec Aevitas, le gestionnaire néerlandais de fonds de pension américains",
      date: "11/06/2020",
      press: a360.src,
      link: "https://fr.le360.ma/economie/immobilier-le-groupe-sanam-sassocie-avec-aevitas-le-gestionnaire-neerlandais-de-fonds-de-pension-217011/"

    },
    {
      image: alaliamaak.src,
      title: "Covid-19 : Al Alia immobilier se mobilise pour aider financièrement ses acquéreurs",
      date: "22/07/2020",
      press: am24.src,
      link: "https://medias24.com/2020/04/13/al-alia-immobilier-15-mdh-pour-soutenir-les-residents-les-plus-fragilises/"
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

 const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
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
          <img src={logo.src} alt="Logo" style={{opacity: 0.5, width: '270px', height: 'auto'}}/>
        </div>
      </section>


      {/* Section : Notre Groupe*/}
      <section
        id="notre-groupe"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${Alogo.src})`, backgroundColor: '#fafafa' , backgroundSize: '140%' }}
      >

        <h2 className="text-4xl font-medium text-[#141C48] mb-4">QUI SOMMES NOUS?</h2>

        <p className="text-xl text-[#141C48] max-w-10xl" style={{fontFamily: 'Raleway', fontSize: '24px', fontWeight: '350', letterSpacing: '1.5px', lineHeight: '46px'}} >  
          Arena Property Development est une société marocaine de promotion immobilière qui s’impose<br />
          comme un acteur clé du secteur. Née avec une ambition claire de redéﬁnir les standards de<br />
          l’immobilier, Arena combine innovation, qualité et engagement envers la durabilité pour transformer<br />
          les espaces de vie au Maroc.
        </p>
        <br />
        <br />
        <p className="text-xl text-[#141C48] poppins-light max-w-10xl  mb-6" style={{fontFamily: 'Raleway', fontSize: '24px', fontWeight: '350', letterSpacing: '1.5px', lineHeight: '46px'}} > 
          Le groupe se distingue par sa capacité à conjuguer des visions locales et internationales grâce à des<br />
          partenariats stratégiques solides.
        </p>

        <button className="mt-4 px-6 py-2 text-lg border border-[#141C48] text-[#141C48]  hover:text-white hover:bg-[#141C48] transition"style={{fontFamily: 'Raleway', fontSize: '24px', fontWeight: '350', letterSpacing: '1.5px'}} >
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
            <span className="text-8xl md:text-9xl font-medium"style={{ fontFamily: 'Romelio' }}>100</span>
            <p className="text-lg md:text-xl mt-4 max-w-[240px]" style={{fontFamily: 'Raleway', fontSize:'16px', fontWeight: '400'}}>
              Développements sur plus de 100 hectares de terrain, marquant l’empreinte d’ARENA dans le secteur de l’immobilier
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center mt-[45%]">
            <span className="text-8xl md:text-9xl font-medium"style={{ fontFamily: 'Romelio' }}>80</span>
            <p className="text-lg md:text-xl mt-4 max-w-[240px]" style={{fontFamily: 'Raleway', fontSize:'16px', fontWeight: '400'}}>
              Une équipe de 80 professionnels hautement qualifiés et dédiés à l’excellence
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center mt-[45%]">
            <span className="text-8xl md:text-9xl font-medium"style={{ fontFamily: 'Romelio' }}>20K</span>
            <p className="text-lg md:text-xl mt-4 max-w-[240px]" style={{fontFamily: 'Raleway', fontSize:'16px', fontWeight: '400'}}>
              Construction de plus de 20000 unités résidentielles, contribuant à façonner des communautés dynamiques
            </p>
          </div>

        </div>
      </section>
      {/* Section : Nos-Metiers */}
      <section id="nos-metiers" className="py-16 text-center">
        <h2 className="text-4xl  text-gray-900 mb-12" style={{ fontFamily: 'Romelio' }}>NOS METIERS</h2>
        <div className="flex gap-4 max-w-full mx-0 px-0">
          {/* Card 1 */}
          <div
            className="relative bg-cover flex-grow bg-left h-[700px] w-[650px] bg-no-repeat overflow-hidden"
            style={{ backgroundImage: `url(${card.src})`, backgroundSize: 'cover' }}
          >
            <div className="absolute inset-0 bg-white flex w-[400px] top-[60%] h-[200px] shadow-lg flex-col items-center justify-center p-6 text-left">
              <h3 className="text-2xl font-bold text-purple-950" style={{letterSpacing: '2px', fontWeight: 'lighter'}}>PROMOTION IMMOBILIERE</h3>
              <button className="ml-[-12px]px-6 py-2 w-full text-left text-black hover:text-blue-600 rounded-lg transition duration-300" style={{fontFamily: 'Raleway', fontWeight: '500'}} onClick={() => window.location.href = '#details1'}>
                Voir détails
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="relative bg-cover flex-grow bg-center h-[700px] w-[650px] shadow-lg bg-no-repeat overflow-hidden"
            style={{ backgroundImage: `url(${card2.src})`, backgroundSize: 'cover' }}
          >
            <div className="absolute inset-0 bg-white flex w-[400px] top-[60%] h-[200px] flex-col items-center justify-center p-6 text-left">
              <h3 className="text-2xl font-bold  text-purple-950" style={{letterSpacing: '2px', fontWeight: 'lighter'}}>MAITRISE D’OUVRAGE DELEGUEE</h3>
              <button className="py-2 w-full text-left text-black rounded-lg hover:text-blue-600 transition duration-300" style={{fontFamily: 'Raleway', fontWeight: '500'}} onClick={() => window.location.href = '#details2'}>
                Voir détails
              </button>
            </div>
          </div>


          {/* Card 3 */}
          <div
            className="relative bg-cover flex-grow bg-right h-[700px] w-[650px] shadow-lg bg-no-repeat overflow-hidden"
            style={{ backgroundImage: `url(${card3.src})`, backgroundSize: 'cover' }}
          >
            <div className="absolute inset-0 bg-white flex w-[400px] top-[60%] h-[200px] flex-col items-center justify-center p-6 text-left">
              <h3 className="text-2xl font-bold  text-purple-950"style={{letterSpacing: '2px', fontWeight: 'lighter'}}>CONSEIL EN INVESTISSEMENT</h3>
              <button className="py-2 w-full text-left text-black rounded-lg hover:text-blue-600 transition duration-300" style={{fontFamily: 'Raleway', fontWeight: '500'}}>
                Voir détails
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section : Nos-Marques */}
      <section 
  id="nos-marques" 
  className="marque py-16 text-center flex flex-col justify-center items-center"
  style={{ 
    "--bg-image-url": `url(${Alogo.src})`
  } as React.CSSProperties}
>
  <h2 className="text-4xl text-white mb-[6%] mt-[-4%]" style={{ fontFamily: 'Romelio' }}>
    NOS MARQUES
  </h2>

  <div className="flex justify-center items-center gap-6">
    <img src={oartf.src} alt="im1" className="w-1/5 h-auto opacity-50 transition duration-300 hover:opacity-100 hover:scale-110" />
    <img src={oalia.src} alt="im2" className="w-1/5 h-auto opacity-50 transition duration-300 hover:opacity-100 hover:scale-110" />
    <img src={opalm.src} alt="im3" className="w-1/5 h-auto opacity-50 transition duration-300 hover:opacity-100 hover:scale-110" />
    <img src={owork.src} alt="im4" className="w-1/5 h-auto opacity-50 transition duration-300 hover:opacity-100 hover:scale-110" />
  </div>
</section>


      {/* Section : Actualites */}
      <h2 className="text-4xl  text-center m-12"style={{ color: '#023a41',fontFamily: 'Romelio' }}>ACTUALITES</h2>
      <section id="actualites" className="py-16 w-full bg-[#034e58] relative min-h-[600px] ">


        {/* Arrow Buttons */}
        <button onClick={handlePrevClick} className="absolute m-5 left-0 top-1/2 transform -translate-y-1/2  p-4">
          <IoIosArrowDropleft className="w-16 h-24 text-white" />
        </button>
        <button onClick={handleNextClick} className="absolute right-0 top-1/2 transform -translate-y-1/2  p-4 ">
          <IoIosArrowDropright className="w-16 h-24 text-white" />
        </button>



        <div className="w-full max-w-8xl mx-auto px-4">
          <div className="flex md:flex-row flex-col  transition-transform duration-500 gap-0 ml-[5%]">
          {getVisibleSlides().map((slide, index) => (
          <div key={index} className="md:w-1/3 px-1">
            <a href={slide.link} target="_blank" rel="noopener noreferrer" className="block">
              <div className="bg-[#cccbcb] p-7 shadow-lg h-[500px] w-[470px] flex flex-col justify-between cursor-pointer">
                {slide.images ? (
                  <div className="flex space-x-2 mt-4">
                    {slide.images.map((src, idx) => (
                      <img key={idx} src={src} alt={`Slide ${index} Image ${idx}`} className="w-1/3 h-48 object-cover mb-6" />
                    ))}
                  </div>
                ) : (
                  <img src={slide.image} alt={`Slide ${index} Image`} className="w-[350px] h-48 object-contain mt-4" />
                )}
                <h3 className="text-base text-gray-900 mb-4" style={{fontFamily: 'Raleway', letterSpacing:'2px', fontSize: '20px', lineHeight: '40px', fontWeight: 'bold'}}>
                  {slide.title}
                </h3>
                <p className="text-gray-700 mb-4 flex items-center" style={{ fontFamily: 'Raleway', letterSpacing: '2px', fontSize: '20px', lineHeight: '40px', fontWeight: '400' }}>
                  <img className="w-[130px] mr-2" src={slide.press} alt="Slide Press" /> - 
                  {slide.date}
                </p>
              </div>
            </a>
          </div>
        ))}
          </div>
        </div>
      </section>




      {/* Section : Contact */}
      <section id="contact"
        className="relative flex justify-center items-start min-h-screen bg-cover bg-center "
        style={{ 
          backgroundImage: `url(${contactus.src})`, 
          backgroundSize: "130%"
        }}
      >
        {!showForm ? (
          <button 
            className=" px-6 py-2 hover:bg-custom-blue hover:text-white text-4xl text-custom-blue border-2 border-custom-blue transform mt-64 -translate-y-12"  
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
              <a key={index} href={`#${link.id}`} className="text-lg hover:underline"style={{marginRight:'-40px', fontFamily: 'Raleway', fontSize: '14px', letterSpacing: '5px'}}>
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};