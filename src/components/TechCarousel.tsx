"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Pause } from "lucide-react"

interface TechItem {
  name: string
  color: string
  icon: string
}

interface TechCarouselProps {
  items: TechItem[]
}

const TechCarousel = ({ items }: TechCarouselProps) => {
  const [isCarouselStopped, setIsCarouselStopped] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)

  const itemsPerPage = 5
  const totalPages = Math.ceil(items.length / itemsPerPage)

  const handleStopCarousel = () => {
    setIsCarouselStopped(true)
  }

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1))
  }

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0))
  }

  const getCurrentItems = () => {
    const startIndex = currentPage * itemsPerPage
    return items.slice(startIndex, startIndex + itemsPerPage)
  }

  if (isCarouselStopped) {
    return (
      <div className="relative">
        {/* Controles de paginación manual */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={handlePrevious}
            className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:scale-110 border-2"
            style={{
              color: "#00FFFF",
              borderColor: "#00FFFF",
              background: "rgba(0, 255, 255, 0.1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 15px rgba(0, 255, 255, 0.5)"
              e.currentTarget.style.background = "rgba(0, 255, 255, 0.2)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none"
              e.currentTarget.style.background = "rgba(0, 255, 255, 0.1)"
            }}
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={handleNext}
            className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:scale-110 border-2"
            style={{
              color: "#FF0080",
              borderColor: "#FF0080",
              background: "rgba(255, 0, 128, 0.1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 15px rgba(255, 0, 128, 0.5)"
              e.currentTarget.style.background = "rgba(255, 0, 128, 0.2)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none"
              e.currentTarget.style.background = "rgba(255, 0, 128, 0.1)"
            }}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Vista paginada estática */}
        <div className="flex justify-center items-center gap-6 flex-wrap">
          {getCurrentItems().map((item, index) => (
            <div key={`${item.name}-${index}`} className="flex flex-col items-center gap-3 min-w-[100px]">
              <div
                className="w-16 h-16 lg:w-20 lg:h-20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer p-3"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 20px ${item.color}60`
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none"
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)"
                }}
              >
                <img
                  src={item.icon || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-full object-contain"
                  style={{
                    filter: "drop-shadow(0 0 5px rgba(255, 255, 255, 0.3))",
                  }}
                />
              </div>
              <span
                className="text-xs lg:text-sm text-center font-mono text-gray-400"
                style={{
                  textShadow: "0 0 5px rgba(255, 255, 255, 0.2)",
                }}
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>

        {/* Indicador de página */}
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                background: index === currentPage ? "#00FFFF" : "rgba(255, 255, 255, 0.3)",
                boxShadow: index === currentPage ? "0 0 10px #00FFFF" : "none",
              }}
            />
          ))}
        </div>
      </div>
    )
  }

  const duplicatedItems = [...items, ...items, ...items] // Triple para carrusel más fluido

  return (
    <div className="relative">
      {/* Botón para detener carrusel */}
      <div className="flex justify-center mb-6">
        <button
          onClick={handleStopCarousel}
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 border-2 font-bold uppercase tracking-wide text-sm"
          style={{
            color: "#FFFF00",
            borderColor: "#FFFF00",
            background: "rgba(255, 255, 0, 0.1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 0 20px rgba(255, 255, 0, 0.5)"
            e.currentTarget.style.background = "rgba(255, 255, 0, 0.2)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none"
            e.currentTarget.style.background = "rgba(255, 255, 0, 0.1)"
          }}
        >
          <Pause size={16} />
          DETENER CARRUSEL
        </button>
      </div>

      {/* Carrusel automático */}
      <div className="w-full overflow-hidden relative">
        <div
          className="flex"
          style={{
            animation: `scroll 30s linear infinite`,
            width: "fit-content",
          }}
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex flex-col items-center gap-3 mx-6 min-w-[100px] flex-shrink-0"
            >
              <div
                className="w-16 h-16 lg:w-20 lg:h-20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer p-3"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 20px ${item.color}60`
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none"
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)"
                }}
              >
                <img
                  src={item.icon || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-full object-contain"
                  style={{
                    filter: "drop-shadow(0 0 5px rgba(255, 255, 255, 0.3))",
                  }}
                />
              </div>
              <span
                className="text-xs lg:text-sm text-center font-mono text-gray-400"
                style={{
                  textShadow: "0 0 5px rgba(255, 255, 255, 0.2)",
                }}
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>

        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }
        `}</style>
      </div>
    </div>
  )
}

export default TechCarousel
