"use client"

import { Download, Github, Linkedin, Mail, Instagram } from "lucide-react"
import { useState } from "react"
import SocialModal from "./SocialModal"

const Hero = () => {
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState({ title: "", content: "", link: "" })

  const downloadCV = () => {
    // Crear un enlace temporal para descargar
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

  // Componente WhatsApp personalizado
  const WhatsAppIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.891 3.426" />
    </svg>
  )

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="name-highlight">RUBÉN</span>
              <br />
              <span className="name-highlight">LEZAMA</span>
            </h1>
            <p className="hero-subtitle">Fullstack Developer</p>
            <button className="download-btn" onClick={downloadCV} type="button">
              <Download size={20} />
              DESCARGAR CV
            </button>

            <div className="social-links">
              <button onClick={() => handleSocialClick("github")} className="social-btn">
                <Github size={24} />
              </button>
              <button onClick={() => handleSocialClick("email")} className="social-btn">
                <Mail size={24} />
              </button>
              <button onClick={() => handleSocialClick("linkedin")} className="social-btn">
                <Linkedin size={24} />
              </button>
              <button onClick={() => handleSocialClick("whatsapp")} className="social-btn whatsapp-btn">
                <WhatsAppIcon />
              </button>
              <button onClick={() => handleSocialClick("instagram")} className="social-btn">
                <Instagram size={24} />
              </button>
            </div>
          </div>

          <div className="hero-image">
            <img src="/zero-character.jpg" alt="Zero Character" className="zero-img" />
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
