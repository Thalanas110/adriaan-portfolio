import './Skills.css'

const Skills = () => {
  const skillsData = {
    frontend: [
      { name: 'HTML5/CSS3', icon: 'fab fa-html5', color: '#e34f26' },
      { name: 'JavaScript', icon: 'fab fa-js-square', color: '#f7df1e' },
      { name: 'TypeScript', icon: 'fab fa-js-square', color: '#3178c6' },
      { name: 'React', icon: 'fab fa-react', color: '#61dafb' },
      { name: 'Angular', icon: 'fab fa-angular', color: '#dd0031' },
      { name: 'TailwindCSS', icon: 'fab fa-css3-alt', color: '#06b6d4' }
    ],
    backend: [
      { name: 'NodeJS', icon: 'fab fa-node-js', color: '#339933' },
      { name: 'PHP', icon: 'fab fa-php', color: '#777bb4' },
      { name: 'C', icon: 'fas fa-code', color: '#a8b9cc' },
      { name: 'C++', icon: 'fas fa-code', color: '#00599c' },
      { name: 'Python', icon: 'fab fa-python', color: '#3776ab' },
      { name: 'Java', icon: 'fab fa-java', color: '#ed8b00' },
      { name: 'Assembly', icon: 'fas fa-microchip', color: '#525252' }
    ],
    database: [
      { name: 'MySQL', icon: 'fas fa-database', color: '#4479a1' },
      { name: 'PostgreSQL', icon: 'fas fa-elephant', color: '#336791' }
    ],
    tools: [
      { name: 'Git/GitHub', icon: 'fab fa-git-alt', color: '#f05032' },
      { name: 'Supabase', icon: 'fas fa-database', color: '#3ecf8e' },
      { name: 'Trello boards', icon: 'fab fa-trello', color: '#0079bf' },
      { name: 'Appwrite', icon: 'fas fa-cloud', color: '#f02e65' }
    ]
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title"><i className="fas fa-snowflake"></i> My Stack</h1>
        <p>Technologies and frameworks I work with</p>
      </div>
      
      <div className="skills-content">
        <div className="skills-category">
          <h2 className="category-title">FRONTEND</h2>
          <div className="tech-grid">
            {skillsData.frontend.map((tech, index) => (
              <div key={index} className="tech-card">
                <div className="tech-icon" style={{ color: tech.color }}>
                  <i className={tech.icon}></i>
                </div>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h2 className="category-title">BACKEND</h2>
          <div className="tech-grid">
            {skillsData.backend.map((tech, index) => (
              <div key={index} className="tech-card">
                <div className="tech-icon" style={{ color: tech.color }}>
                  <i className={tech.icon}></i>
                </div>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h2 className="category-title">DATABASE</h2>
          <div className="tech-grid">
            {skillsData.database.map((tech, index) => (
              <div key={index} className="tech-card">
                <div className="tech-icon" style={{ color: tech.color }}>
                  <i className={tech.icon}></i>
                </div>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h2 className="category-title">TOOLS & TECHNOLOGIES</h2>
          <div className="tech-grid">
            {skillsData.tools.map((tech, index) => (
              <div key={index} className="tech-card">
                <div className="tech-icon" style={{ color: tech.color }}>
                  <i className={tech.icon}></i>
                </div>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills