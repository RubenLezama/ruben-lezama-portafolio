"use client"

import { X, ExternalLink } from "lucide-react"

interface SocialModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  content: string
  link: string
}

const SocialModal = ({ isOpen, onClose, title, content, link }: SocialModalProps) => {
  if (!isOpen) return null

  const handleLinkClick = () => {
    if (link.startsWith("mailto:")) {
      window.location.href = link
    } else {
      window.open(link, "_blank", "noopener,noreferrer")
    }
    onClose()
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm"
      style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
      onClick={onClose}
    >
      <div
        className="border-2 rounded-2xl max-w-md w-[90%] max-h-[80vh] overflow-hidden shadow-2xl"
        style={{
          background: "#16131F",
          borderColor: "#00FFFF",
          boxShadow: "0 0 30px rgba(0, 255, 255, 0.3)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="flex justify-between items-center p-6 border-b"
          style={{ borderColor: "rgba(0, 255, 255, 0.3)" }}
        >
          <h3
            className="text-xl font-bold"
            style={{
              color: "#00FFFF",
              textShadow: "0 0 10px rgba(0, 255, 255, 0.5)",
            }}
          >
            {title}
          </h3>
          <button
            className="bg-transparent border-none cursor-pointer p-2 rounded-full transition-all duration-300 hover:scale-110"
            style={{ color: "#FF0080" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 0, 128, 0.1)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent"
            }}
            onClick={onClose}
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <p className="text-gray-300 leading-relaxed">{content}</p>
        </div>

        <div className="p-6 border-t flex justify-center" style={{ borderColor: "rgba(0, 255, 255, 0.3)" }}>
          <button
            className="flex items-center gap-2 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 uppercase tracking-wide"
            style={{
              background: "linear-gradient(45deg, #FF0080, #00FFFF)",
              boxShadow: "0 10px 20px rgba(255, 0, 128, 0.3)",
            }}
            onClick={handleLinkClick}
          >
            <ExternalLink size={20} />
            Ir a {title}
          </button>
        </div>
      </div>
    </div>
  )
}

export default SocialModal
