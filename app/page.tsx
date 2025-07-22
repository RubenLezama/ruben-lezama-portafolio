import Hero from "../src/components/Hero"
import Education from "../src/components/Education"
import Projects from "../src/components/Projects"
import ScrollIndicator from "../src/components/ScrollIndicator"

export default function Page() {
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <ScrollIndicator />
      <Hero />
      <Education />
      <Projects />
    </div>
  )
}
