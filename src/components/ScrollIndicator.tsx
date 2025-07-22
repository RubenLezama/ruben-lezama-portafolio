"use client"

import { useEffect, useState } from "react"

const ScrollIndicator = () => {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const onScroll = () => setWidth((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return <span className="fixed top-0 left-0 h-1 bg-cyan-400 z-50 transition-[width]" style={{ width: `${width}%` }} />
}

export default ScrollIndicator
