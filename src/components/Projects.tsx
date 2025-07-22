"use client"

import { ExternalLink } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "TicketMaster de RedesIp",
      description:
        "Sistema integral para la gestión de tickets y provisión de soluciones destinadas al personal de soporte técnico y programación. Desarrollado como trabajo de grado con arquitectura moderna y interfaz intuitiva.",
      tech: ["React", "Node.js", "MySQL", "TypeScript", "Express"],
      demo: "https://ticketmasterfront-theta.vercel.app/login",
      github: "https://github.com/RubenLezama/ticketmaster",
      preview: "/ticketmaster-preview.jpg",
      featured: true,
    },
    {
      title: "Alita Calculator + Chatbot Interactivo",
      description:
        "Herramienta web avanzada para calcular y simular diferentes modelos de líneas de espera con chatbot inteligente integrado. Implementa algoritmos complejos de teoría de colas con interfaz moderna.",
      tech: ["React", "Python", "FastAPI", "PostgreSQL", "AI", "OpenAI"],
      demo: "https://calculadora-simulacion-frontend.vercel.app/",
      github: "https://github.com/RubenLezama/alita-calculator",
      preview: "/alita-calculator-preview.png",
      featured: true,
    },
  ]

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2
          className="text-4xl lg:text-5xl font-bold uppercase tracking-wider mb-4"
          style={{
            background: "linear-gradient(45deg, #FF0080, #00FFFF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "0 0 30px rgba(255, 0, 128, 0.3)",
          }}
        >
          PROYECTOS
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Explora mis proyectos más destacados, desarrollados con tecnologías modernas y enfoque en la experiencia del
          usuario.
        </p>
      </div>

      <div className="grid gap-8 lg:gap-12">
        {projects.map((project, index) => (
          <article
            key={index}
            className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2 ${
              project.featured ? "lg:grid lg:grid-cols-2 lg:gap-8" : ""
            }`}
            style={{
              background: "linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(26,26,26,0.9) 100%)",
              border: "1px solid rgba(0, 255, 255, 0.2)",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 0, 128, 0.5)"
              e.currentTarget.style.boxShadow = "0 20px 60px rgba(255, 0, 128, 0.2)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(0, 255, 255, 0.2)"
              e.currentTarget.style.boxShadow = "0 10px 40px rgba(0, 0, 0, 0.3)"
            }}
          >
            {/* Imagen del proyecto */}
            <div className={`relative overflow-hidden ${project.featured ? "lg:order-1" : ""}`}>
              <div
                className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, rgba(0,255,255,0.1) 0%, rgba(255,0,128,0.1) 100%)`,
                }}
              >
                <img
                  src={project.preview || "/placeholder.svg"}
                  alt={`Preview de ${project.title}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{
                    filter: "brightness(0.9) contrast(1.1)",
                  }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(45deg, rgba(0,255,255,0.1) 0%, rgba(255,0,128,0.1) 100%)",
                  }}
                />
              </div>
            </div>

            {/* Contenido del proyecto */}
            <div className={`p-8 lg:p-10 flex flex-col justify-center ${project.featured ? "lg:order-2" : ""}`}>
              <div className="mb-4">
                <h3
                  className="text-2xl lg:text-3xl font-bold mb-4 leading-tight"
                  style={{
                    color: "#00FFFF",
                    textShadow: "0 0 15px rgba(0, 255, 255, 0.3)",
                  }}
                >
                  {project.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-base lg:text-lg">{project.description}</p>
              </div>

              {/* Tecnologías */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-4 py-2 rounded-full text-sm font-bold border transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor: "rgba(255, 0, 128, 0.15)",
                      color: "#FF0080",
                      borderColor: "rgba(255, 0, 128, 0.4)",
                      textShadow: "0 0 5px rgba(255, 0, 128, 0.3)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(255, 0, 128, 0.25)"
                      e.currentTarget.style.borderColor = "#FF0080"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(255, 0, 128, 0.15)"
                      e.currentTarget.style.borderColor = "rgba(255, 0, 128, 0.4)"
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Enlaces */}
              <div className="flex justify-center">
                <a
                  href={project.demo}
                  className="flex items-center justify-center gap-3 px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 font-bold uppercase tracking-wide text-sm border-2 group/btn"
                  style={{
                    color: "#00FFFF",
                    borderColor: "#00FFFF",
                    background: "rgba(0, 255, 255, 0.05)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(0, 255, 255, 0.15)"
                    e.currentTarget.style.boxShadow = "0 0 25px rgba(0, 255, 255, 0.4)"
                    e.currentTarget.style.color = "#FFFFFF"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(0, 255, 255, 0.05)"
                    e.currentTarget.style.boxShadow = "none"
                    e.currentTarget.style.color = "#00FFFF"
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={20} className="transition-transform group-hover/btn:scale-110" />
                  VER DEMO
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
