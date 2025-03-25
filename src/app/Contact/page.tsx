"use client"
import Image from "next/image"
import { useState } from "react"
import img from "./../../assets/A-logo.png"
import img2 from "./../../assets/shutterstock_2482950157.png"

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    message: "",
    newsletter: false,
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="relative w-full overflow-hidden">
      <section
        className="relative min-h-screen w-full h-[230vh] xl:h-[250vh]  flex flex-col items-center bg-cover bg-center px-4"
        style={{
          backgroundColor: "rgba(236, 236, 236, 0.5)",
          backgroundImage: `linear-gradient(rgba(187, 187, 187, 0.5), rgba(187, 187, 187, 0.5)), url(${img.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "250%",
        }}
      >
        <h1
          className="font-light text-start text-black-300 mt-[17%] xl:mt-[2%] text-[70px] xl:text-[120px] 2xl:text-[150px]"
          style={{
            fontFamily: "Raleway-Thin",
            fontWeight: "100",
            opacity: "0.1",
            marginBottom: "12%",
          }}
        >
          CONTACT
        </h1>

        <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row">
          {/* Left column - Text content */}
          <div className="lg:w-1/2 pr-8 mt-4">
            <p className="2xl:ml-[-35%] text-[36px] xl:text-[52px] tracking-[2px] font-[200] leading-[1.4] 2xl:text-[72px] 2xl:font-[200] xl:tracking-[4px] xl:leading-[1.4] text-[#1a2041]">
              CONTACTEZ <br />
              NOS EXPERTS <br />
              DÈS AUJOURD&apos;HUI
            </p>

            <p
              className="2xl:ml-[-35%] mt-4 text-[19px] tracking-[1px] font-[400] leading-[1.2] 2xl:text-[25px] xl:leading-[2.4] text-[#1a2041]"
              style={{ fontFamily: "Raleway" }}
            >
              N&apos;hésitez pas à nous contacter pour toute demande
              <span className="hidden xl:block" style={{lineHeight: '1px'}}><br/></span>
              ou assistance. Que ce soit pour des questions sur
              <span className="hidden xl:block" style={{lineHeight: '1px'}}><br/></span>
              nos services ou un besoin de support, nous
              <span className="hidden xl:block" style={{lineHeight: '1px'}}><br/></span>
              sommes là pour vous aider.
            </p>

            <p
                className="2xl:ml-[-35%] mt-3 tracking-[2px] text-[9px] font-[400] leading-[1.4] 2xl:text-[13px] xl:leading-[2.1] text-[#1a2041]"
                style={{ fontFamily: "Raleway" }}
              >
                La Société collecte vos données personnelles pour la gestion des clients. Ce traitement
               <span className="hidden xl:block" style={{lineHeight: '1px'}}><br/></span>
                a fait l'objet d'une déclaration / demande d'autorisation auprès de la CNDP sous le
               <span className="hidden xl:block" style={{lineHeight: '1px'}}><br/></span>
                numéro D-GC-724/2020.
               <span className="hidden xl:block" style={{lineHeight: '1px'}}><br/></span>
                Vous pouvez vous adresser à la Société pour exercer vos droits d&apos;accès, de rectiﬁcation
               <span className="hidden xl:block" style={{lineHeight: '1px'}}><br/></span>
                et d&apos;opposition conformément aux dispositions de la loi 09-08
            </p>

          </div>

          {/* Right column - Form */}
          <div className="lg:w-1/2 pl-0 lg:pl-8 mt-24 lg:mt-0">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <input
                  type="text"
                  placeholder="Nom*"
                  value={formData.nom}
                  onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                  className="w-full  2xl:text-[27px] bg-transparent border-b border-black rounded-none focus:outline-none focus:border-black transition-colors placeholder:text-black" style={{ fontFamily: "Raleway", paddingBottom: "4rem", fontWeight: "250", letterSpacing: "2px" }}
                />
                <input
                  type="text"
                  placeholder="Prénom*"
                  value={formData.prenom}
                  onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                  className="w-full 2xl:text-[27px] bg-transparent border-b border-black rounded-none focus:outline-none focus:border-black transition-colors placeholder:text-black" style={{ fontFamily: "Raleway", paddingBottom: "4rem", fontWeight: "250", letterSpacing: "2px" }}
                />
              </div>

              <input
                type="email"
                placeholder="E-mail*"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full 2xl:text-[27px] bg-transparent border-b border-black rounded-none focus:outline-none focus:border-black transition-colors placeholder:text-black" style={{ fontFamily: "Raleway", paddingBottom: "4rem", paddingTop: "3rem", fontWeight: "250", letterSpacing: "2px"}}
              />

              <textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full 2xl:text-[27px] bg-transparent border-b border-black rounded-none focus:outline-none focus:border-black transition-colors min-h-[120px] resize-none placeholder:text-black" style={{ fontFamily: "Raleway", paddingBottom: "4rem", paddingTop: "4rem", fontWeight: "250", letterSpacing: "2px"  }}
              />

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="newsletter"
                  checked={formData.newsletter}
                  onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                  className="w-8 h-8 border border-black bg-transparent appearance-none checked:bg-black checked:border-black"
                />
                <label
                  htmlFor="newsletter"
                  className="text-sm 2xl:text-[25px] font-[100] text-black"
                  style={{
                    fontFamily: "Raleway",
                    paddingBottom: "3rem",
                    paddingTop: "3rem",
                    fontWeight: "250",
                    letterSpacing: "2px",
                  }}
                >
                  Oui, abonnez-moi à votre newsletter
                </label>
              </div>

              <button
                type="submit"
                className="bg-transparent 2xl:text-[25px] font-[250] hover:bg-black text-black border border-black rounded-none px-8 py-2"style={{ fontFamily: "Raleway", fontWeight: "250", letterSpacing: "2px" }}
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <Image 
            src={img2} 
            alt="Bottom Image" 
            className="w-full object-cover" 
            layout="responsive"
          />
        </div>
      </section>
    </div>
  )
}

export default Contact