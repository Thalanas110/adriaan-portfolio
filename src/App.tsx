import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import SnowParticles from './components/SnowParticles'
import ThemeToggle from './components/ThemeToggle'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import './styles/globals.css'

// Animated Routes Component
function AnimatedRoutes() {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransitionStage] = useState("fadeIn")

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("fadeOut")
    }
  }, [location, displayLocation])

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div
      className={`page-container ${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setDisplayLocation(location)
          setTransitionStage("fadeIn")
        }
      }}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        {/* Background Elements */}
        <div className="background-container">
          <SnowParticles />
        </div>

        {/* Sidebar Navigation */}
        <Sidebar />

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Main Content */}
        <main className="main-content">
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  )
}

export default App
