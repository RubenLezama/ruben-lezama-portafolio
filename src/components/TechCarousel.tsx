interface TechItem {
  name: string
  color: string
  icon: string
}

interface TechCarouselProps {
  items: TechItem[]
}

const TechCarousel = ({ items }: TechCarouselProps) => {
  // Duplicamos los items para crear el efecto de bucle infinito
  const duplicatedItems = [...items, ...items]

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {duplicatedItems.map((item, index) => (
          <div key={`${item.name}-${index}`} className="carousel-item">
            <div
              className="tech-logo-circle"
              style={{ borderColor: item.color, boxShadow: `0 0 15px ${item.color}30` }}
            >
              <span className="tech-icon">{item.icon}</span>
            </div>
            <span className="tech-logo-name">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechCarousel
