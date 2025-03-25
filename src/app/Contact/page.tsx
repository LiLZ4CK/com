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
        className="relative min-h-screen w-full flex flex-col items-center bg-cover bg-center px-4"
        style={{
          height: window.innerWidth >= 1280 ? "250vh" : "150vh",
          backgroundColor: "rgba(236, 236, 236, 0.5)",
          backgroundImage: `linear-gradient(rgba(187, 187, 187, 0.5), rgba(187, 187, 187, 0.5)), url(${img.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: window.innerWidth >= 1280 ? "250%" : "750%",
        }}
      >
        <h1
          className="font-light text-start text-black-300 mt-[12%] xl:mt-[2%] text-[90px] xl:text-[150px]"
          style={{
            fontFamily: "Raleway-Thin",
            fontWeight: "100",
            opacity: "0.05",
            marginBottom: "12%",
          }}
        >
          CONTACT
        </h1>

        <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row">
          {/* Left column - Text content */}
          <div className="lg:w-1/2 pr-8 mt-4">
            <p className="text-[38px] font-[200] leading-[1.4] xl:text-[56px] xl:font-[200] xl:leading-[1.4] text-[#1a2041]">
              CONTACTEZ <br />
              NOS EXPERTS <br />
              DÈS AUJOURD&apos;HUI
            </p>

            <p className=" mt-4 text-[13px] font-[200] leading-[1.4] xl:text-[20px] xl:font-[200] xl:leading-[1.4] text-[#1a2041]">
              N&apos;hésitez pas à nous contacter pour toute demande
              <br />
              ou assistance. Que ce soit pour des questions sur
              <br />
              nos services ou un besoin de support, nous
              <br />
              sommes là pour vous aider.
            </p>

            <p className=" mt-2 text-sm text-[8px] font-[200] leading-[1.4] xl:text-[12px] xl:font-[200] xl:leading-[1.4] text-[#1a2041]">
              La Société collecte vos données personnelles pour la gestion des clients. Ce traitement<br />
              a fait l'objet d'une déclaration / demande d'autorisation auprès de la CNDP sous le<br />
              numéro D-GC-724/2020.<br/>
              Vous pouvez vous adresser à la Société pour exercer vos droits d&apos;accès, de rectiﬁcation<br />
              et d&apos;opposition conformément aux dispositions de la loi 09-08
            </p>
          </div>

          {/* Right column - Form */}
          <div className="lg:w-1/2 pl-0 lg:pl-8 mt-24 lg:mt-0">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nom*"
                  value={formData.nom}
                  onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                  className="w-full bg-transparent border-b border-gray-400 rounded-none focus:outline-none focus:border-gray-800 transition-colors"
                />
                <input
                  type="text"
                  placeholder="Prénom*"
                  value={formData.prenom}
                  onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                  className="w-full bg-transparent border-b border-gray-400 rounded-none focus:outline-none focus:border-gray-800 transition-colors"
                />
              </div>

              <input
                type="email"
                placeholder="E-mail*"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b border-gray-400 rounded-none focus:outline-none focus:border-gray-800 transition-colors"
              />

              <textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent border-b border-gray-400 rounded-none focus:outline-none focus:border-gray-800 transition-colors min-h-[120px] resize-none"
              />

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="newsletter"
                  checked={formData.newsletter}
                  onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                  className="border-gray-400"
                />
                <label htmlFor="newsletter" className="text-sm font-light text-gray-700">
                  Oui, abonnez-moi à votre newsletter
                </label>
              </div>

              <button
                type="submit"
                className="bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-400 rounded-none px-8 py-2"
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