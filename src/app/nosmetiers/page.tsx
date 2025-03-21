// pages/nos-metiers.js
import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import img1 from '@/assets/img1.jpg'
import img2 from '@/assets/img2.jpg'
import img3 from '@/assets/img3.jpg'

const NosMetiers = () => {
  return (
    <>
      <Head>
        <title>Nos Métiers | Your Company Name</title>
        <meta name="description" content="Découvrez nos services et expertises" />
      </Head>
      
      <div className="bg-white">
        {/* Main content container */}
        <div>
          
          {/* Main title */}
          <h1 className=" font-light text-center text-gray-300 mt-[5%]"style={{fontFamily: "Raleway-Thin", fontWeight: "100", fontSize: "140px", opacity: "0.6"}}>NOS MÉTIERS</h1>
          
          {/* Section 1 - Promotion */}
          <div className="grid md:grid-cols-12 gap-4 mb-16 ml-[6%]">
            <div className="md:col-span-4 ">
              <Image 
                  src={img1.src}
                  alt="Promotion Immobilière" 
                  width={300}
                  height={200}
                  className="w-full h-full object-cover object-left"
                  priority
              />
          </div>
            
          <div className="md:col-span-8 mr-[12%] ml-[3%]">
    <p className="mb-4 text-justify" style={{
        fontFamily: "Raleway", 
        color:"#003851",
        fontWeight: 350,
        letterSpacing:"1.5px",
        lineHeight: "1.8", 
        fontSize: "23px",
        hyphens: "none",
        WebkitHyphens: "auto",
        msHyphens: "auto",
        
    }}>
        À l’intersection de la vision architecturale et de la stratégie urbaine, notre cœur de
        métier, la promotion immobilière, joue un rôle clé dans le développement
        économique et social de notre pays en créant des espaces qui répondent aux
        besoins d’aujourd’hui tout en anticipant ceux de demain.
              </p>
              <br/>
              <p className="mb-4 text-justify" style={{
        fontFamily: "Raleway", 
        color:"#003851",
        fontWeight: 350,
        letterSpacing:"1.5px",
        lineHeight: "1.8", 
        fontSize: "23px",
        hyphens: "none",
        WebkitHyphens: "auto",
        msHyphens: "auto"
        
    }}>
                De la sélection des emplacements à la conception des projets, chaque étape de
notre réﬂexion est guidée par une attention minutieuse au détail et par une
volonté de dépasser les attentes de nos utilisateurs.
                </p>
              <br/>
              
              <p className="mb-4 text-justify" style={{
    fontFamily: "Raleway", 
    color:"#003851",
    fontWeight: 350,
    letterSpacing: "1.5px",
    lineHeight: "1.8", 
    fontSize: "23px",
    hyphens: "none",
}}>
Notre expertise s’étend à diﬀérents segments : du résidentiel social au plus
luxueux, espaces mixtes, équipements de loisirs, nos projets s’inscrivent tous
dans une vision durable et inclusive du futur.
              </p>
              <br/>
              
              <p className="mb-4 text-justify" style={{
        fontFamily: "Raleway", 
        color:"#003851",
        fontWeight: 350,
        letterSpacing:"1.5px",
        lineHeight: "1.8", 
        fontSize: "23px",
        hyphens: "none",
        WebkitHyphens: "auto",
        msHyphens: "auto"
        
    }}>
      En tant que promoteur immobilier sérieux et responsable , nous nous engageons
      à développer des environnements qui allient durabilité, fonctionnalité et impact
      positif sur nos communautés.
              </p>
              <br/>
              
              <p className="mb-4 text-justify" style={{
        fontFamily: "Raleway", 
        color:"#003851",
        fontWeight: 350,
        letterSpacing:"1.5px",
        lineHeight: "1.8", 
        fontSize: "23px",
        hyphens: "none",
        WebkitHyphens: "auto",
        msHyphens: "auto"
        
    }}>
Chaque réalisation incarne notre ambition de bâtir un avenir harmonieux, où
innovation et qualité de vie se rencontrent pour répondre aux aspirations des
générations actuelles et futures.
              </p>
            </div>
          </div>
          
          {/* Section 2 - Notre Vision */}
          <div className="bg-gray-100 p-8 mb-16">
            <h3 className="text-xl font-semibold text-center mb-4">VOTRE VISION, NOTRE EXPERTISE</h3>
            
            <p className="text-center">
              La méthode d'AVANT-PREMIÈRE est fondée sur une approche personnalisée et un partenariat stratégique qui harmonise vos préférences et ambitions concrètes d'une de point de vu de l'expérience et l'innovation de ces domaines, à même de répondre aux multiples besoins et souhaits, faisant du passage prêt à la finalisation de grands projets.
            </p>
            
            <p className="text-center mt-4">
              En vous suivant le parcours complet de vos projets, vous bénéficiez d'une expertise pointue et d'un accompagnement technique, permettant la réalisation de vos projets les plus ambitieux.
            </p>
          </div>
          
          {/* Section 3 - Maîtrise d'ouvrage */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl font-semibold mb-4">MAÎTRISE D'OUVRAGE<br/>DÉLÉGUÉE</h2>
              
              <p className="mb-4">
                De la planification initiale à la livraison finale, nous coordonnons chaque étape avec efficacité et professionnalisme. Nos services garantissent l'intégrité architecturale de vos espaces, la conformité aux standards les plus stricts et l'optimisation des ressources, vous permettant ainsi de vous concentrer sur l'essence créative de vos investissements.
              </p>
              
              <p>
                Parce que chaque projet mérite un pilotage d'exception, nous vous proposons à transformer vos idées en succès durables et mesurables.
              </p>
            </div>
            
            <div className="order-1 md:order-2">
              <Image 
                src= {img2.src}
                alt="Maîtrise d'ouvrage déléguée" 
                width={500} 
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Section 4 - Blue section */}
          <div className="bg-blue-800 text-white p-8 mb-16">
            <p className="mb-4">
              Construisant un cadre stratégique pour transformer vos ambitions en résultats durables, la mission de maîtrise d'ouvrage vous libère l'esprit tout en garantissant l'excellence.
            </p>
            
            <p>
              Pour finies et en partenariat avec des acteurs financiers de premier plan, nous avons dirigé une solide finance solide. Ces développements, constituent la mission et vous concernent, est l'un des piliers fondamentaux dans les résultats attentées par nos clients.
            </p>
          </div>
          
          {/* Section 5 - Conseil et Investissement */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Image 
                src= {img3.src} 
                alt="Conseil en Investissement" 
                width={500} 
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">CONSEIL<br/>EN INVESTISSEMENT</h2>
              
              <p className="mb-4">
                Grâce à une compréhension approfondie du marché immobilier et des dynamiques économiques, nous offrons des solutions d'investissement financièrement performantes, maximiser les risques et investivité vos rendements. De l'analyse des opportunités à la finalisation des projets, notre approche est imprégnée par la légalité, l'éthicalisation et l'innovation.
              </p>
              
              <p>
                En tant que partenaire de confiance, nous plaçons vos objectifs au cœur de nos priorités et nous vous engageons à proposer des stratégies qui allient performance et vision à long terme.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default NosMetiers;