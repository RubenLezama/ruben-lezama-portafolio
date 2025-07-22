"use client"

import { Download, Github, Linkedin, Mail, Instagram, ChevronDown } from "lucide-react"
import { useState } from "react"
import SocialModal from "./SocialModal"

const Hero = () => {
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState({ title: "", content: "", link: "" })

  const downloadCV = () => {
    const link = document.createElement("a")
    link.href = "/cv-ruben-lezama.pdf"
    link.download = "CV-Ruben-Lezama.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleSocialClick = (platform: string) => {
    const socialInfo = {
      github: {
        title: "GitHub",
        content:
          "Revisa mis repositorios y proyectos de código abierto. Aquí encontrarás ejemplos de mi trabajo y contribuciones a la comunidad de desarrollo.",
        link: "https://github.com/RubenLezama",
      },
      email: {
        title: "Email",
        content:
          "¿Tienes una propuesta de trabajo o quieres colaborar en un proyecto? Contáctame directamente por email.",
        link: "mailto:rubenlezama4000@gmail.com",
      },
      linkedin: {
        title: "LinkedIn",
        content:
          "Conecta conmigo profesionalmente. Aquí comparto actualizaciones sobre mi carrera y experiencias en el desarrollo de software.",
        link: "https://linkedin.com",
      },
      whatsapp: {
        title: "WhatsApp",
        content:
          "¿Prefieres una conversación más directa? Escríbeme por WhatsApp para consultas rápidas o propuestas de trabajo.",
        link: "https://wa.me/584261874863",
      },
      instagram: {
        title: "Instagram",
        content:
          "Sígueme en Instagram para ver el lado más personal de mi vida como desarrollador y mis proyectos creativos.",
        link: "https://www.instagram.com/rubenlezama2004/",
      },
    }

    setModalContent(socialInfo[platform as keyof typeof socialInfo])
    setShowModal(true)
  }

  const WhatsAppIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.891 3.426" />
    </svg>
  )

  return (
    <>
      <section className="flex items-center justify-center min-h-screen py-24">
        <div className="flex items-center justify-between max-w-6xl w-full gap-16 flex-col lg:flex-row px-4">
          {/* Lado izquierdo - Información */}
          <div className="flex-1 text-center lg:text-left">
            {/* Nombre con estilo según la imagen */}
            <div className="mb-8">
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider mb-4 font-mono"
                style={{
                  background: "linear-gradient(to right, #b76eff, #00e5ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "0 0 30px rgba(183, 110, 255, 0.5)",
                  letterSpacing: "0.05em",
                  lineHeight: "1.1",
                }}
              >
                RUBÉN
                <br />
                LEZAMA
              </h1>
              <p
                className="text-xl md:text-2xl font-mono tracking-widest"
                style={{
                  color: "#00e5ff",
                  textShadow: "0 0 15px rgba(0, 229, 255, 0.6)",
                }}
              >
                Fullstack Developer
              </p>
            </div>

            {/* Botón de CV */}
            <button
              onClick={downloadCV}
              className="flex items-center justify-center gap-2 font-bold px-8 py-4 mb-8 transition-all duration-300 hover:-translate-y-1 text-black uppercase tracking-wider rounded-md mx-auto lg:mx-0"
              style={{
                background: "linear-gradient(to right, #ff00aa, #00e5ff)",
                boxShadow: "0 0 20px rgba(255, 0, 170, 0.5)",
                width: "280px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 30px rgba(255, 0, 170, 0.8)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 20px rgba(255, 0, 170, 0.5)"
              }}
            >
              <Download size={20} />
              DESCARGAR CV
            </button>

            {/* Iconos sociales */}
            <div className="flex gap-6 justify-center lg:justify-start">
              {[
                { icon: <Github size={24} />, action: () => handleSocialClick("github") },
                { icon: <Mail size={24} />, action: () => handleSocialClick("email") },
                { icon: <Linkedin size={24} />, action: () => handleSocialClick("linkedin") },
                { icon: <WhatsAppIcon />, action: () => handleSocialClick("whatsapp") },
                { icon: <Instagram size={24} />, action: () => handleSocialClick("instagram") },
              ].map((social, index) => (
                <button
                  key={index}
                  onClick={social.action}
                  className="p-3 rounded-full transition-all duration-300 hover:scale-110 w-12 h-12 flex items-center justify-center border"
                  style={{
                    color: "#00e5ff",
                    borderColor: "#00e5ff",
                    background: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 0 15px #00e5ff"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none"
                  }}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Lado derecho - Imagen de Zero y mensaje */}
          <div className="flex-1 flex flex-col items-center">
            <img
              src="/zero-character.jpg"
              alt="Zero Character"
              className="max-w-sm lg:max-w-md w-full h-auto mb-8"
              style={{
                filter: "drop-shadow(0 0 20px rgba(0, 255, 255, 0.3))",
              }}
            />

            {/* Mensaje de Zero */}
            <div className="relative">
              <div
                className="bg-black border-2 border-white rounded-lg p-4 font-mono text-sm max-w-xs relative"
                style={{
                  boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)",
                }}
              >
                <span className="text-white">
                  Entiendo{" "}
                  <span
                    className="font-bold"
                    style={{
                      color: "#FFFF00",
                      textShadow: "0 0 5px #FFFF00",
                    }}
                  >
                    por qué
                  </span>{" "}
                  estás aquí.
                </span>
                <br />
                <span className="text-white">
                  Desliza para ver{" "}
                  <span
                    className="font-bold"
                    style={{
                      color: "#FFFF00",
                      textShadow: "0 0 5px #FFFF00",
                    }}
                  >
                    más
                  </span>{" "}
                  de mi trabajo.
                </span>

                {/* Flecha del diálogo */}
                <div className="absolute -bottom-2 left-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
                <div className="absolute -bottom-1 left-[34px] w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-black"></div>
              </div>

              {/* Flecha hacia abajo */}
              <div className="flex justify-center mt-4">
                <ChevronDown
                  size={24}
                  className="animate-bounce"
                  style={{
                    color: "#FF0080",
                    filter: "drop-shadow(0 0 10px #FF0080)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SocialModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={modalContent.title}
        content={modalContent.content}
        link={modalContent.link}
      />
    </>
  )
}

export default Hero
