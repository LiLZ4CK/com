import React from "react";
import orgov from "@/assets/orgov.png"
const gov = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 min-w-screen min-h-[90vh] mx-auto">
      {/* Text Section */}
      <div className=" text-justify text-[18px] leading-relaxed">
        <p className="max-w-6xl" style={{fontFamily: "Raleway"}}>
          Le Groupe dispose d'une structure de gouvernance solide, soutenue par un&nbsp; 
          dialogue constant et dynamique avec ses actionnaires. Cette approche témoigne de&nbsp; 
          la transparence et de l'engagement des différentes parties, tout en favorisant&nbsp; 
          des décisions justes qui contribuent à la création de valeur durable pour les&nbsp; 
          actionnaires et toutes les parties prenantes.<br/>
          La gouvernance du Groupe repose sur une composition d'organes pilotée par un&nbsp; 
          Conseil d'Administration. Dans le cadre de l'exercice de ses fonctions, le&nbsp; 
          Conseil d'Administration est soutenu par quatre comités spécialisés qui&nbsp; 
          surveillent de près les performances de l’entreprise ainsi que la bonne&nbsp; 
          exécution des différentes politiques et processus déployés en interne.&nbsp; 
        </p>
      </div>
      
      {/* Organigram Section */}
      <img src={orgov.src} alt="orgov" className="h-[600px] w-auto mr-[7%]"></img>
    </div>
  );
};

export default gov;
