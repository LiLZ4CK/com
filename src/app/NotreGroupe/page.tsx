'use client';
import { useEffect, useState, useRef } from "react";
import React from "react";
import anis from "@/assets/Anis.jpg"
import Alogo from "@/assets/A-logo.png";
import { useInView } from "react-intersection-observer";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import bg from "@/assets/bg.jpg";
import Chiffres from "@/components/chiffres";
import Organi from "./organi";
import Gov from "./gov";
import govimg from "@/assets/shutterstock_1935991594.jpg"
import hands from "@/assets/shutterstock_1498583432.jpg"
import iso from "@/assets/shutterstock_2531755875.jpg"
import thetwo from "@/assets/thetwo.png"
export default function NotreGroupe(){

     

    return(
        <div className="relative w-full overflow-hidden">
            <section
                id='mot-de-president'
                className="relative min-h-screen flex flex-col justify-start items-center bg-white bg-cover bg-centre px-4 h-auto"
                style={{
                    backgroundImage: `url(${Alogo.src})`,
                    backgroundColor: "white",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "90%",
                    backgroundPosition: "center", // keeps the image centered
                }}>

                <div className="absolute inset-0 bg-[#e5e5e4] opacity-55"></div>
                <h1
                    className="overflow-hidden relative z-10 text-gray-800 pt-[25%] sm:pt-[10%] xl:pt-[3%] text-[40px] sm:text-[70px] xl:text-[110px] 2xl:text-[130px]"
                    style={{
                        fontFamily: "Raleway-Thin",
                        fontWeight: "400",
                        opacity: "0.1",
                    }}>
                    NOTRE GROUPE
                </h1>
                <h2 className="   text-[20px] mt-[5%] xl:text-2xl 2xl:text-4xl relative z-10 2xl:mt-[6%] 2xl:mb-[4%]">
                    MOT DU PRESIDENT
                </h2>
                <div className="relative z-10 mt-[4%] flex flex-col-reverse lg:flex-row items-start">
                    <div className="w-full lg:w-full ml-[3%] mt-[1%] order-2 lg:order-1">
                        <img 
                            src={anis.src} 
                            alt="Anis" 
                            className="w-full lg:w-auto ml-[-3%] xl:ml-[5%] xl:w-[280px] xl:h-[430px] 2xl:ml-[5%] 2xl:w-[400px] 2xl:h-[600px] object-cover"
                        />
                    </div>
                    <div className="w-full lg:w-auto  xl:ml-[-3%] xl:mr-14   2xl:ml-[-5%] 2xl:mr-16 order-1 lg:order-2 mb-6 lg:mb-0">
                        <p 
                            className="w-auto text-justify mt-[6%] xl:mt-[2%]  xl:text-[17px] xl:leading-[35px] 2xl:text-[20px] 2xl:tracking-[1px] 2xl:leading-[49px]" 
                            style={{fontFamily: "Raleway", color: "#003851"}}
                        >
                            " Arena est née en 2015 avec une mission claire : repenser l’immobilier au Maroc pour en faire un levier&nbsp;
                            d’innovation, de qualité et de durabilité. En partant du logement social jusqu’aux projets les plus&nbsp;
                            prestigieux, nous avons toujours eu à cœur de répondre aux besoins réels des clients tout en anticipant&nbsp;
                            les enjeux de demain.<br/><br/>
                            Nos projets se distinguent par leur conception audacieuse et leur engagement envers l’excellence. Qu’il&nbsp;
                            s’agisse d’introduire des innovations inédites dans le logement social ou de collaborer avec des&nbsp;
                            architectes et designers de renom pour des résidences haut de gamme, notre objectif est de créer des&nbsp;
                            espaces qui marient confort, modernité et respect de l’environnement.<br/><br/>
                            Avec cette vision, nous continuons à bâtir des projets qui inspirent, tout en plaçant les aspirations de nos&nbsp;
                            clients et la durabilité au cœur de nos actions."
                        </p>
                    </div>
                </div>

                {/* Signature Section */}
                <div className="flex flex-col items-end ml-[-5%] mt-[-4%] pb-[2%] w-full relative">
                    <p 
                        className="text-[30px] 2xl:text-[50px] mb-2" 
                        style={{ fontFamily: "DiamondSignature-Regular" }}
                    >
                        M. Anis Sefrioui
                    </p>
                    <p 
                        className="text-[10px] text-end 2xl:text-[15px]" 
                        style={{ fontFamily: "Raleway" }}
                    >
                        Fondateur et Président
                    </p>
                </div>
            </section>
            <section
        id="notre-histoire"
        className="min-h-screen min-w-screen flex flex-col justify-center items-center text-center px-6 relative "
      >
        <h2 className="text-xl mt-16 xl:text-2xl 2xl:text-4xl font-medium text-[#212046] mb-4">
        NOTRE HISTOIRE
        </h2>

        <p className=" md:text-lg xl:text-[18px] 2xl:text-[22px] text-[#141C48] xl:max-w-[1200px] 2xl:min-w-[1500px] leading-relaxed lg:font-[350] lg:tracking-[1.5px] lg:leading-[46px] mt-6"
          style={{ fontFamily: "Raleway" }}
        >
          Arena Property Development est une société marocaine de promotion immobilière qui s’impose comme un acteur clé du&nbsp;
            secteur. Née avec une ambition claire de redéﬁnir les standards de l’immobilier, Arena combine innovation, qualité et&nbsp;
            engagement envers la durabilité pour transformer les espaces de vie au Maroc.<br/><br/>
            Le groupe se distingue par sa capacité à conjuguer des visions locales et internationales grâce à des partenariats&nbsp;
            stratégiques solides. Cette approche lui permet de tirer parti d’expertises diversiﬁées pour concevoir des projets qui&nbsp;
            répondent aux besoins évolutifs du marché tout en intégrant les meilleures pratiques environnementales.<br/><br/>
            Avec une attention particulière portée à la création de valeur pour toutes les parties prenantes, Arena s’appuie sur des&nbsp;
            actionnariats institutionnels pour garantir la pérennité et l’impact positif de ses investissements. Cette dynamique reﬂète&nbsp;
            une stratégie à long terme, ancrée dans la conﬁance mutuelle et l’excellence opérationnelle.<br/>
            Le groupe poursuit son développement avec une ambition constante : devenir une référence incontournable en matière de&nbsp;
            conception et de réalisation de projets immobiliers qui allient esthétisme, fonctionnalité, innovation et durabilité.<br/>
            <br/>
        </p>
      
        
      </section>
      <Chiffres />
      <Organi />
      <section
        id="govi"
        className="h-auto min-w-screen w-screen flex flex-col justify-start items-center text-center  relative "
      >
        <img src={govimg.src} alt="govimg" className="grayscale w-full h-auto block" />
      <Gov/>
      </section>


      <section id="DISPOSITIF"
        className="text-center flex flex-col justify-center items-center  bg-[#e5e5e5] h-auto">

        <p className=" text-xl mt-16 xl:text-2xl 2xl:text-4xl font-medium text-[#212046] mb-4 tracking-[1.1px]"style={{fontFamily: "Romelio", color: "#003851"}}>
        DISPOSITIF DE CONTROLE INTERNE
          </p>
          <p className="max-w-6xl mx-auto tracking-[1px] leading-[30px] 2xl:text-[20px] 2xl:leading-[50px] 2xl:tracking-[2px] leading-relaxed" style={{fontFamily: "Raleway", color: "#003851"}}>
             
            Pour mieux accompagner les sujets de gouvernance et répondre de manière adéquate aux&nbsp; 
            problématiques et risques inhérents aux activités métiers, support et de pilotage, le Groupe a déployé&nbsp; 
            un dispositif de contrôle interne et de management des risques dans le but de créer et préserver la&nbsp; 
            valeur, les actifs et la réputation du Groupe. A cet eﬀet, ce dispositif basé sur les risques vise à&nbsp; 
            identiﬁer, mesurer et suivre les risques critiques auxquels le Groupe est confronté, à anticiper leur
            évolution, et mettre en place des actions de maitrise des risques résiduels.<br/>
            Le contrôle des opérations et des procédures internes s’exerce de manière permanente ou périodique&nbsp; 
            sur trois couches de contrôle et à travers diﬀérents acteurs clés.<br/>
          </p>
        <img src={thetwo.src} alt="thetwo" className="mx-auto w-[1000px] h-auto mt-20"></img>
        
        </section>              



      <section
        id="notre-groupe"
        className="min-h-screen flex flex-col justify-center  items-center text-center px-6 relative"
        style={{
            backgroundImage: `url(${iso.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
        >
        <div className="absolute inset-0 bg-[#003851] opacity-95"></div>
        <h2 className="text-xl relative z-10 xl:text-2xl 2xl:text-4xl font-medium text-white mb-12">
        DISPOSITIF DE MANAGEMENT DES RISQUES
        </h2>

        <p className="text-base relative z-10 md:text-lg  xl:text-[18px] 2xl:text-[25px] text-[#141C48] xl:max-w-4xl 2xl:max-w-6xl leading-relaxed lg:font-[350] lg:tracking-[1.5px] lg:leading-[50px] mt-6"
          style={{ fontFamily: "Raleway", color: "white" }}
        >
            Le Groupe a mis en œuvre un dispositif de management systématique et dynamique de ses risques,&nbsp;
            en identiﬁant les risques inhérents à ses processus grâce à un exercice de cartographie des risques,&nbsp;
            et en déﬁnissant une stratégie d’atténuation spéciﬁque pour chaque risque jugé critique. Notre&nbsp;
            analyse des risques fait partie intégrante des processus opérationnels et décisionnels du Groupe.<br />
            <br />
            Le dispositif mis en place repose sur les directives de la norme ISO 31000. Un référentiel spéciﬁque a&nbsp;
            été élaboré par le Groupe aﬁn d’uniformiser les pratiques et de fournir au Risk Manager les outils&nbsp;
            nécessaires pour accomplir eﬃcacement ses missions.
            <br />
        </p>
      </section>


      <section
                id='dispositif'
                className="relative flex flex-col justify-center items-center h-auto"
                >
               
                <h2 className="text-xl text-center mt-16 xl:text-2xl 2xl:text-4xl justify-center font-medium text-[#212046] mb-4 tracking-[1.1px]"style={{fontFamily: "Romelio", color: "#003851"}}>
                DISPOSITIF D’ETHIQUE ET CONFIDENTIALITE
                </h2>
                <div className="flex flex-col-reverse mt-[4%] lg:flex-row items-start">
                    <div className="w-full lg:w-full   order-2 lg:order-1">
                        <img 
                            src={hands.src} 
                            alt="hands" 
                            className="w-full  xl:w-[550px] xl:h-[430px]  2xl:w-[800px] 2xl:h-[600px] object-cover"
                        />
                    </div>
                    <div className="w-full lg:w-auto xl:ml-[1%] xl:mr-[5%]  2xl:ml-[2%] 2xl:mr-[5%] px-3 order-1 lg:order-2">
                        <p 
                            className="w-auto mb-[16%] text-justify text-[13px] tracking-[1px] xl:text-[18px] leading-[40px] 2xl:text-[24px] 2xl:tracking-[1.2px] 2xl:leading-[55px]" 
                            style={{fontFamily: "Raleway", color: "#003851"}}
                        >
                            Le Groupe veille à garantir un environnement éthique dans le cadre des
                            relations établies avec les diﬀérentes parties prenantes (collaborateurs,
                            clients, fournisseurs, partenaires, etc.)<br/>
                            Cet engagement se traduit par la mise en place d’un code d’éthique visant à
                            clariﬁer les diﬀérentes situations susceptibles de générer des actions
                            contraires à l’éthique. Ce code prévoit entre autres :<br/>
                            &nbsp;&nbsp;&nbsp;• Les règles d’éthique adoptées par le Groupe<br/>
                            &nbsp;&nbsp;&nbsp;• Le comportement à adopter face à des informations conﬁdentielles<br/>
                            &nbsp;&nbsp;&nbsp;• Les règles qui régissent l’acceptation des cadeaux<br/>
                            &nbsp;&nbsp;&nbsp;• Les actions anti-corruption<br/>
                            &nbsp;&nbsp;&nbsp;• L’engagement des uns envers les autres<br/>
                            &nbsp;&nbsp;&nbsp;• Etc<br/>
                            <br/>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}