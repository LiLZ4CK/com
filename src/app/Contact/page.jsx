"use client"
import img from "./../../assets/A-logo.png"
import img2 from "./../../assets/shutterstock_2482950157.png"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export default function Home() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    message: "",
    newsletter: false,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="relative w-full overflow-hidden">
      <section
        className="relative min-h-screen w-full flex flex-col items-center bg-cover bg-center px-4"
        style={{
          height: "250vh",
          backgroundColor: "rgba(236, 236, 236, 0.5)",
          backgroundImage: `linear-gradient(rgba(187, 187, 187, 0.5), rgba(187, 187, 187, 0.5)), url(${img.src})`,
          backgroundSize: "250%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1
          className="font-light text-start text-black-300 mt-[12%]"
          style={{
            fontFamily: "Raleway-Thin",
            fontWeight: "100",
            fontSize: "120px",
            opacity: "1",
            marginTop: "2%",
            marginBottom: "15%",
          }}
        >
          CONTACT
        </h1>

        <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row">
          {/* Left column - Text content */}
          <div className="lg:w-1/2 pr-8 mt-28">
            <p style={{ fontSize: "56px", fontWeight: "200", lineHeight: "1.1" }}>
              CONTACTEZ <br />
              NOS EXPERTS <br />
              DÈS AUJOURD&apos;HUI
            </p>

            <p className="text-gray-700 mt-8"style={{fontFamily: "Raleway", fontSize: "20px" ,letterSpacing: "1px"}}>
              N&apos;hésitez pas à nous contacter pour toute demande
              <br />
              ou assistance. Que ce soit pour des questions sur
              <br />
              nos services ou un besoin de support, nous
              <br />
              sommes là pour vous aider.
            </p>

            <p className="text-gray-700 mt-16 text-sm">
              La Société collecte vos données personnelles pour la gestion des clients. Ce traitement
              <br />a fait l'objet d'une déclaration / demande d'autorisation auprès de la CNDP sous le
              <br />
              numéro D-GC-724/2020.
            </p>
            <p className="text-gray-700 mt-2 text-sm">
              Vous pouvez vous adresser à la Société pour exercer vos droits d'accès, de rectiﬁcation
              <br />
              et d'opposition conformément aux dispositions de la loi 09-08
            </p>
          </div>

          {/* Right column - Form */}
          <div className="lg:w-1/2 pl-0 lg:pl-8 mt-24 lg:mt-0">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Nom*"
                  value={formData.nom}
                  onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                  className="bg-transparent border-b border-gray-400 rounded-none focus:outline-none focus:border-gray-800 transition-colors"
                />
                <Input
                  placeholder="Prénom*"
                  value={formData.prenom}
                  onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                  className="bg-transparent border-b border-gray-400 rounded-none focus:outline-none focus:border-gray-800 transition-colors"
                />
              </div>

              <Input
                type="email"
                placeholder="E-mail*"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-transparent border-b border-gray-400 rounded-none focus:outline-none focus:border-gray-800 transition-colors"
              />

              <Textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-transparent border-b border-gray-400 rounded-none focus:outline-none focus:border-gray-800 transition-colors min-h-[120px] resize-none"
              />

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="newsletter"
                  checked={formData.newsletter}
                  onCheckedChange={(checked) => setFormData({ ...formData, newsletter: checked === true })}
                  className="border-gray-400"
                />
                <label htmlFor="newsletter" className="text-sm font-light text-gray-700">
                  Oui, abonnez-moi à votre newsletter
                </label>
              </div>

              <Button
                type="submit"
                className="bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-400 rounded-none px-8"
              >
                Envoyer
              </Button>
            </form>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <img src={img2.src || "/placeholder.svg"} alt="Bottom Image" className="w-full object-cover" />
        </div>
      </section>
    </div>
  )
}

