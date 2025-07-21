import { ChevronDown } from "lucide-react"

const ScrollIndicator = () => {
  return (
    <div className="scroll-indicator">
      <div className="katana-dialog">
        <div className="dialog-content">
          <span className="dialog-text">
            Entiendo <span className="highlight">por qué</span> estás aquí.
          </span>
          <br />
          <span className="dialog-text">
            Desliza para ver <span className="highlight">más</span> de mi trabajo.
          </span>
        </div>
        <div className="dialog-arrow"></div>
      </div>
      <div className="scroll-arrow">
        <ChevronDown size={24} />
      </div>
    </div>
  )
}

export default ScrollIndicator
