"use client"

import TechCarousel from "./TechCarousel"

const Education = () => {
  const technologies = [
    {
      name: "Next.js",
      color: "#000000",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "React",
      color: "#61DAFB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "JavaScript",
      color: "#F7DF1E",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      color: "#3178C6",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Node.js",
      color: "#339933",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Tailwind",
      color: "#06B6D4",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Bootstrap",
      color: "#7952B3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Redis",
      color: "#DC382D",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    },
    { name: "PHP", color: "#777BB4", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    {
      name: "MySQL",
      color: "#4479A1",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "CakePHP",
      color: "#D33C43",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cakephp/cakephp-original.svg",
    },
    {
      name: "FastAPI",
      color: "#009688",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    },
    {
      name: "Django",
      color: "#092E20",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    },
  ]

  const tools = [
    {
      name: "Firebase",
      color: "#FFCA28",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      name: "MongoDB",
      color: "#47A248",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Postman",
      color: "#FF6C37",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    },
    {
      name: "Jira",
      color: "#0052CC",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    },
    {
      name: "VS Code",
      color: "#007ACC",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "GitHub",
      color: "#181717",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    { name: "Git", color: "#F05032", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    {
      name: "Docker",
      color: "#2496ED",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Debian",
      color: "#A81D33",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg",
    },
    {
      name: "WSL",
      color: "#4EC9B0",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
    },
    {
      name: "Linux",
      color: "#FCC624",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    },
    {
      name: "Ubuntu",
      color: "#E95420",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-original.svg",
    },
  ]

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      {/* Título centrado */}
      <div className="text-center mb-16">
        <h2
          className="text-4xl lg:text-5xl font-bold uppercase tracking-wider mb-8"
          style={{
            background: "linear-gradient(45deg, #4A9EFF, #00FFFF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "0 0 30px rgba(74, 158, 255, 0.3)",
          }}
        >
          ESTUDIOS
        </h2>

        {/* Logo de la Universidad centrado */}
        <div className="flex justify-center mb-8">
          <div
            className="w-32 h-32 lg:w-40 lg:h-40 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              background: "rgba(0, 0, 0, 0.7)",
              backdropFilter: "blur(10px)",
              border: "2px solid rgba(0, 255, 255, 0.3)",
              boxShadow: "0 0 30px rgba(0, 255, 255, 0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 40px rgba(0, 255, 255, 0.4)"
              e.currentTarget.style.borderColor = "rgba(0, 255, 255, 0.6)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 0 30px rgba(0, 255, 255, 0.2)"
              e.currentTarget.style.borderColor = "rgba(0, 255, 255, 0.3)"
            }}
          >
            <img
              src="/logo-unimar.jpeg"
              alt="Universidad de Margarita"
              className="w-full h-full object-contain rounded-full"
              style={{
                filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))",
              }}
            />
          </div>
        </div>

        {/* Información de estudios centrada */}
        <div className="text-center">
          <h3
            className="text-xl lg:text-2xl font-bold mb-2"
            style={{
              color: "#00FFFF",
              textShadow: "0 0 15px rgba(0, 255, 255, 0.5)",
            }}
          >
            Ingeniero de Sistemas
          </h3>
          <p className="text-gray-300 text-lg mb-2">Universidad de Margarita</p>
          <p className="text-gray-400 text-base">
            (2021 - 2025) • <span className="text-yellow-400 font-semibold">En espera de título</span>
          </p>
        </div>
      </div>

      {/* Lenguajes & Tecnologías */}
      <div className="mb-20">
        <h3
          className="text-2xl lg:text-3xl mb-12 text-center font-bold uppercase tracking-wider"
          style={{
            color: "#4A9EFF",
            textShadow: "0 0 15px rgba(74, 158, 255, 0.5)",
          }}
        >
          LENGUAJES & TECNOLOGÍAS
        </h3>
        <TechCarousel items={technologies} />
      </div>

      {/* Herramientas */}
      <div className="mb-20">
        <h3
          className="text-2xl lg:text-3xl mb-12 text-center font-bold uppercase tracking-wider"
          style={{
            color: "#4A9EFF",
            textShadow: "0 0 15px rgba(74, 158, 255, 0.5)",
          }}
        >
          HERRAMIENTAS
        </h3>
        <TechCarousel items={tools} />
      </div>
    </section>
  )
}

export default Education
