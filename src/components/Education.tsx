"use client"

import { useState } from "react"
import TechCarousel from "./TechCarousel"

const Education = () => {
  const [showTooltip, setShowTooltip] = useState(false)

  const technologies = [
    { name: "React", color: "#61DAFB", icon: "⚛️" },
    { name: "TypeScript", color: "#3178C6", icon: "📘" },
    { name: "JavaScript", color: "#F7DF1E", icon: "🟨" },
    { name: "Node.js", color: "#339933", icon: "🟢" },
    { name: "PHP", color: "#777BB4", icon: "🐘" },
    { name: "Python", color: "#3776AB", icon: "🐍" },
    { name: "MySQL", color: "#4479A1", icon: "🗄️" },
    { name: "PostgreSQL", color: "#336791", icon: "🐘" },
    { name: "MongoDB", color: "#47A248", icon: "🍃" },
    { name: "Next.js", color: "#000000", icon: "▲" },
    { name: "Tailwind", color: "#06B6D4", icon: "💨" },
    { name: "Bootstrap", color: "#7952B3", icon: "🅱️" },
    { name: "CakePHP", color: "#D33C43", icon: "🍰" },
    { name: "Angular", color: "#DD0031", icon: "🅰️" },
    { name: "Vite", color: "#646CFF", icon: "⚡" },
  ]

  const tools = [
    { name: "Docker", color: "#2496ED", icon: "🐳" },
    { name: "Git", color: "#F05032", icon: "📝" },
    { name: "Linux", color: "#FCC624", icon: "🐧" },
    { name: "VS Code", color: "#007ACC", icon: "💻" },
    { name: "Postman", color: "#FF6C37", icon: "📮" },
    { name: "FastAPI", color: "#009688", icon: "🚀" },
    { name: "WSL", color: "#4EAA25", icon: "🪟" },
  ]

  return (
    <section className="education">
      <div className="container">
        <h2 className="section-title">ESTUDIOS</h2>

        <div className="education-content">
          <div className="university-section">
            <div
              className="university-logo"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <img src="/logo-unimar.jpeg" alt="UNIMAR Logo" />
              {showTooltip && (
                <div className="tooltip">
                  Ingeniero de sistemas - Universidad de Margarita (2021 - 2025) (En espera de título)
                </div>
              )}
            </div>
          </div>

          <div className="tech-section">
            <h3>TECNOLOGÍAS</h3>
            <TechCarousel items={technologies} />
          </div>

          <div className="tools-section">
            <h3>HERRAMIENTAS</h3>
            <TechCarousel items={tools} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
