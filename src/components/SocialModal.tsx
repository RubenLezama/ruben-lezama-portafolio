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
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <button className="modal-close" onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        <div className="modal-body">
          <p>{content}</p>
        </div>
        <div className="modal-footer">
          <button className="modal-action-btn" onClick={handleLinkClick}>
            <ExternalLink size={20} />
            Ir a {title}
          </button>
        </div>
      </div>
    </div>
  )
}

export default SocialModal
