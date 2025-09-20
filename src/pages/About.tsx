import { useState, useEffect } from 'react'
import './About.css'

// Custom hook for typing animation
const useTypewriter = (text: string, speed: number = 50, delay: number = 0) => {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (delay > 0) {
      const delayTimeout = setTimeout(() => {
        let i = 0
        const timer = setInterval(() => {
          if (i < text.length) {
            setDisplayText(text.slice(0, i + 1))
            i++
          } else {
            setIsComplete(true)
            clearInterval(timer)
          }
        }, speed)
        return () => clearInterval(timer)
      }, delay)
      return () => clearTimeout(delayTimeout)
    } else {
      let i = 0
      const timer = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1))
          i++
        } else {
          setIsComplete(true)
          clearInterval(timer)
        }
      }, speed)
      return () => clearInterval(timer)
    }
  }, [text, speed, delay])

  return { displayText, isComplete }
}

const About = () => {
  // Loading overlay state
  const [isLoading, setIsLoading] = useState(true)
  const [imageLoaded, setImageLoaded] = useState(false)

  // Typing animations for different text elements
  const greeting = useTypewriter("Hello, I'm Adriaan M. Dimate", 80, isLoading ? 9999 : 500)
  const role = useTypewriter("Full Stack Developer & Future Airline Captain", 60, isLoading ? 9999 : 2000)
  const bio = useTypewriter(
    "I'm an autistic developer with a love for creating beautiful, functional, and user-centered digital experiences. With a background in both frontend and backend development, I enjoy bringing ideas to life through clean, efficient code and thoughtful design. I also am aiming to become an airline captain, combining my passion for aviation with my technical skills, combined with my passion for flying and travelling, ensuring a smooth, pleasant, and lovely experience for users and passengers.",
    25,
    isLoading ? 9999 : 4000
  )

  useEffect(() => {
    if (!imageLoaded) return
    // ensure loader shows briefly for animation
    const t = setTimeout(() => setIsLoading(false), 600)
    return () => clearTimeout(t)
  }, [imageLoaded])

  // fallback: hide loader after 3s even if image doesn't load
  useEffect(() => {
    const fallback = setTimeout(() => setIsLoading(false), 3000)
    return () => clearTimeout(fallback)
  }, [])

  const handleImageLoad = () => setImageLoaded(true)

  return (
    <>
      {/* Plane loading overlay */}
      {isLoading && (
        <div className="plane-loader" role="status" aria-live="polite">
          <div className="plane-scene">
            <div className="runway" />
            <div className="plane">
              <div className="plane-body" />
              <div className="plane-wing" />
            </div>
          </div>
        </div>
      )}

      <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Who am I?</h1>
      </div>

      <div className="about-content">
        <div className="about-intro">
          <div className="profile-section">
              <div className="profile-image">
              <img src="/assets/pfp.jpg" alt="Adriaan M. Dimate Profile Photo" className="profile-photo" onLoad={handleImageLoad} />
            </div>
            <div className="profile-info">
              <h2 className="typing-text">
                {greeting.displayText}
                {!greeting.isComplete && <span className="cursor">|</span>}
              </h2>
              <p className="role typing-text">
                {role.displayText}
                {!role.isComplete && greeting.isComplete && <span className="cursor">|</span>}
              </p>
              <p className="bio typing-text">
                {bio.displayText}
                {!bio.isComplete && role.isComplete && <span className="cursor">|</span>}
              </p>
              <div className={`resume-download ${bio.isComplete ? 'fade-in' : 'hidden'}`}>
                <a href="/assets/resume.pdf" download className="btn btn-primary">
                  <i className="fas fa-download"></i>
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-section card">
          <h2><i className="fas fa-briefcase"></i> Experience</h2>
          <div className="experience-timeline">
            <div className="experience-item">
              <div className="experience-marker"></div>
              <div className="experience-content">
                <h3>Volunteer Software Developer</h3>
                <p className="experience-company">I Care Center • Jun 2025 - Present</p>
                <p className="experience-description">
                  Improved OBS Remote for livestreams, built a scalable church site and app, and managed agile workflows with ministry teams
                </p>
              </div>
            </div>
            <div className="experience-item">
              <div className="experience-marker"></div>
              <div className="experience-content">
                <h3>Volunteer Production Staff & QA Assistant</h3>
                <p className="experience-company">I Care Center • Jan 2024 - Present</p>
                <p className="experience-description">
                  Operated and QA’d ProPresenter for live and online services, syncing media in real time and resolving tech issues with worship and media teams.
                </p>
              </div>
            </div>
            <div className="experience-item">
              <div className="experience-marker"></div>
              <div className="experience-content">
                <h3>Data Encoder & Macro Programmer | Internship</h3>
                <p className="experience-company">ACE Medical Centre - Baypointe • 2025 - 2025</p>
                <p className="experience-description">
                  Interned about encoding patient data and created macros to improve encoding efficiency.
                </p>
              </div>
            </div>
            <div className="experience-item">
              <div className="experience-marker"></div>
              <div className="experience-content">
                <h3>Data Encoder & Bookkeeper</h3>
                <p className="experience-company">TDA Car Rental • 2023 - Present | Working Student</p>
                <p className="experience-description">
                  Created responsive web interfaces and improved user experience across multiple projects.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h3><i className="fas fa-graduation-cap"></i> Education</h3>
          <div className="education-item">
            <h4>Bachelor of Science in Computer Science</h4>
            <p className="school">Gordon College • 2023 - Present</p>
            <p>Focused on software engineering, algorithms, and data structures.</p>
          </div>
          <br />
          <div className="education-item">
            <h4>Bachelor of Science in Air Transportation (future)</h4>
            <p className="school">(unknown) • 2029 - 2034 (tentative)</p>
            <p>Focuses on flying and maintaining planes.</p>
          </div>
        </div>

        <div className="detail-section">
          <h3><i className="fas fa-heart"></i> Interests</h3>
          <div className="interests-grid">
            <div className="interest-item">
              <i className="fas fa-code"></i>
              <span>Coding</span>
            </div>
            <div className="interest-item">
              <i className="fas fa-plane"></i>
              <span>Travelling</span>
            </div>
            <div className="interest-item">
              <i className="fas fa-camera"></i>
              <span>Photography</span>
            </div>
            <div className="interest-item">
              <i className="fas fa-music"></i>
              <span>Music</span>
            </div>
            <div className="interest-item">
              <i className="fas fa-book"></i>
              <span>Reading</span>
            </div>
            <div className="interest-item">
              <i className="fas fa-bed"></i>
              <span>Sleeping</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About