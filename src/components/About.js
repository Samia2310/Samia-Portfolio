import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* Desktop Layout */}
        <div className="about-desktop">
          <div className="about-left">
            <span className="section-tag">About Me</span>
            <h2>
              Web Developer &
              <span style={{
                background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}> Data Analytics Enthusiast</span>
            </h2>
            <p>
              Hi! I'm Samia, a Computer Science & Engineering graduate with a passion for Data Analytics, Artificial Intelligence, Machine Learning, and Web Development. I love building projects that combine data-driven insights, intelligent systems, and clean user experiences.
            </p>
            <p>
              From academic research to personal builds, I enjoy solving real-world
              problems through code and I'm always learning something new along the way.
            </p>
          </div>

          <div className="about-right">
            <div className="about-info">
              <div className="info-item">
                <span className="info-label">Degree</span>
                <span className="info-value">B.Sc. in CSE</span>
              </div>
              <div className="info-item">
                <span className="info-label">Year</span>
                <span className="info-value">Graduated in June, 2026</span>
              </div>
              <div className="info-item">
                <span className="info-label">Focus</span>
                <span className="info-value">Data Analytics + Web Dev</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location</span>
                <span className="info-value">Bangladesh 🇧🇩</span>
              </div>
            </div>

            <div className="about-buttons">
              <a href="/Samia tabassum Chowdhury's Resume.pdf" className="about-btn primary" target="_blank" rel="noreferrer">
                Resume
              </a>
              <a href="https://samia-portfolio-gold.vercel.app" className="about-btn secondary" target="_blank" rel="noreferrer">
                Portfolio
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="about-mobile">

          <div className="mobile-header">
            <span className="section-tag">About Me</span>
            <h2>
              CSE Graduate &
              <span style={{
                background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}> AI/ML Enthusiast</span>
            </h2>
            <p>
              Hi! I'm Samia, a Computer Science & Engineering graduate with a passion for Data Analytics, Artificial Intelligence, Machine Learning, and Web Development. I love building projects that combine data-driven insights, intelligent systems, and clean user experiences.
            </p>
            <p>
              From academic research to personal projects, I enjoy solving real-world problems through code, analyzing data, and continuously learning new technologies along the way.
            </p>
          </div>

          <div className="mobile-divider">
            <span></span>
          </div>

          <div className="about-info">
            <div className="info-item">
              <span className="info-label">Degree</span>
              <span className="info-value">B.Sc. in CSE</span>
            </div>
            <div className="info-item">
              <span className="info-label">Year</span>
              <span className="info-value">Graduated in June, 2026</span>
            </div>
            <div className="info-item">
              <span className="info-label">Focus</span>
              <span className="info-value">Data Analytics + Web Dev</span>
            </div>
            <div className="info-item">
              <span className="info-label">Location</span>
              <span className="info-value">Bangladesh 🇧🇩</span>
            </div>
          </div>

          <div className="about-buttons">
            <a href="/Samia tabassum Chowdhury's Resume.pdf" className="about-btn primary" target="_blank" rel="noreferrer">
              Resume
            </a>
            <a href="https://samia-portfolio-gold.vercel.app" className="about-btn secondary" target="_blank" rel="noreferrer">
              Portfolio
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}