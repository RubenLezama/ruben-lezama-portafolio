"use client"

import Hero from "./components/Hero"
import Education from "./components/Education"
import Projects from "./components/Projects"
import ScrollIndicator from "./components/ScrollIndicator"
import "./App.css"

function App() {
  return (
    <div className="app">
      <Hero />
      <ScrollIndicator />
      <Education />
      <Projects />
    </div>
  )
}

export default App
