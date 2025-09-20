import './Portfolio.css'

const Portfolio = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Portfolio</h1>
        <p>All my current projects so far.</p>
      </div>
      
      <div className="portfolio-content">
        <div className="portfolio-grid">
          <div className="project-card" data-category="web">
            <div className="project-image">
              <div className="image-placeholder">
                <i className="fas fa-globe"></i>
              </div>
              <div className="project-overlay">
                <div className="project-links">
                  <a href="https://camflea.vercel.app/Login_page.html" target="_blank" className="project-link" aria-label="View Live" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a href="#" className="project-link" aria-label="View Code">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>E-Commerce Platform (Group Project - CSC221)</h3>
              <p>A full-stack e-commerce solution with payment integration and admin dashboard.</p>
              <div className="project-tags">
                <span className="tag">Vanilla</span>
                <span className="tag">Node.js</span>
                <span className="tag">Supabase</span>
                <span className="tag">Tailwind CSS</span>
                <span className="tag">PostgreSQL</span>
              </div>
            </div>
          </div>

          {/* Practicum vlogsite that made sir loudel cry */}
          <div className="project-card" data-category="web">
            <div className="project-image">
              <div className="image-placeholder">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="project-overlay">
                <div className="project-links">
                  <a href="https://practicumoneblogsite.vercel.app" target="_blank" className="project-link" aria-label="View Live" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a href="https://github.com/zionren/OJTblogsite" target="_blank" className="project-link" aria-label="View Code" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>Vlogsite</h3>
              <p>Practicum vlogsite with data visualization dashboard, containing interactive charts and reports.
                Also made sir loudel cry.
              </p>
              <div className="project-tags">
                <span className="tag">Vanilla</span>
                <span className="tag">Node.js</span>
                <span className="tag">Supabase</span>
                <span className="tag">PostgreSQL</span>
              </div>
            </div>
          </div>

          {/*rp hood attendance system for a now-dissolved hood*/}
          <div className="project-card" data-category="web">
            <div className="project-image">
              <div className="image-placeholder">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <div className="project-overlay">
                <div className="project-links">
                  <a href="https://attendance-tracking-self.vercel.app/" target="_blank" className="project-link" aria-label="View Live" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a href="#" className="project-link" aria-label="View Code">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>RPW Hood Attendance System</h3>
              <p>Attendance System for the now-dissolved Gazelvouer hood in RPW</p>
              <div className="project-tags">
                <span className="tag">Vanilla</span>
                <span className="tag">Supabase</span>
                <span className="tag">PostgreSQL</span>
                <span className="tag">Node.js</span>
              </div>
            </div>
          </div>

          {/*poem selectors for an ex girlfriend, although I should no longer put them in here, some of my best UI/UX works are here.*/}
          <div className="project-card" data-category="web">
            <div className="project-image">
              <div className="image-placeholder">
                <i className="fas fa-palette"></i>
              </div>
              <div className="project-overlay">
                <div className="project-links">
                  <a href="https://poemselections.netlify.app/" target="_blank" className="project-link" aria-label="View Live" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a href="https://github.com/Thalanas110/poemselectors/" target="_blank" className="project-link" aria-label="View Code">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>Poem Selectors</h3>
              <p>Poem selection panes that I did for my now ex-girlfriend. All displayed on the website, just click to select.
                Although these should no longer be here, some of my best UI/UX works are here.
                Under maintenance to remove ALL names and only the UI + poems will remain.
              </p>
              <div className="project-tags">
                <span className="tag">Vanilla</span>
                <span className="tag">Node.js</span>
                <span className="tag">Trigonometric Operations</span>
              </div>
            </div>
          </div>

          {/*i care center website*/}
          <div className="project-card" data-category="web">
            <div className="project-image">
              <div className="image-placeholder">
                <i className="fas fa-gamepad"></i>
              </div>
              <div className="project-overlay">
                <div className="project-links">
                  <a href="#" target="_blank" className="project-link" aria-label="View Live" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a href="#" target="_blank" className="project-link" aria-label="View Code">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>Church website</h3>
              <p>Website for my church where I am a part of the media team.</p>
              <div className="project-tags">
                <span className="tag">ReactJS</span>
                <span className="tag">Tailwind CSS</span>
                <span className="tag">Node.js</span>
                <span className="tag">Supabase</span>
                <span className="tag">PostgreSQL</span>
              </div>
            </div>
          </div>




        </div>
      </div>
      <div className="portfolio-footer" style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a href="https://allofadriaansprojects.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          <i className="fas fa-folder-open"></i>
          <span>More Projects</span>
        </a>
      </div>
    </div>
  )
}

export default Portfolio