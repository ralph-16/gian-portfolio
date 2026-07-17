import { Navbar } from "./components/Navbar"
import { Background } from "./components/Background"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Skills } from "./components/Skills"
import { Projects } from "./components/Projects"
import { Footer } from "./components/Footer"
import { Contact } from "./components/Contact"

// Mobile first Development
// https://aadi.is-a.dev/
// https://www.pszostak.pl/

export function App() {
  return (
    <main className="smooth-scroll">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Background />
    </main>
  )
}

export default App
