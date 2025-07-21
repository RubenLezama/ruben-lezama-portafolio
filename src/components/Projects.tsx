import { ExternalLink } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "TicketMaster de RedesIp",
      description:
        "Sistema integral para la gestión de tickets y provisión de soluciones destinadas al personal de soporte técnico y programación. Desarrollado como trabajo de grado.",
      tech: ["React", "Node.js", "MySQL", "TypeScript"],
      demo: "https://ticketmasterfront-theta.vercel.app/login",
      preview: "/ticketmaster-preview.jpg",
    },
    {
      title: "Alita Calculator + Chatbot Interactivo del Modelo de Colas",
      description:
        "Herramienta web para calcular y simular diferentes modelos de líneas de espera con chatbot inteligente integrado, implementando algoritmos de teoría de colas.",
      tech: ["React", "Python", "FastAPI", "PostgreSQL", "AI"],
      demo: "https://calculadora-simulacion-frontend.vercel.app/",
      preview: "/alita-calculator-preview.png",
    },
  ]

  return (
    <section className="projects">
      <div className="container">
        <h2 className="section-title">MIS PROYECTOS</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-preview">
                <img src={project.preview || "/placeholder.svg"} alt={`${project.title} preview`} />
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={20} />
                    Ver Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
