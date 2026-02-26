import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <span className="section-tag">About Me</span>

        <div className="about-image">
          <div className="image-wrapper">
            <img src="/photo.jpg" alt="Samia" />
          </div>
        </div>

        <div className="about-content">

          <h2>
            CSE Student &
            <span style={{
              background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}> AI/ML Enthusiast</span>
          </h2>

          <p>
            Hi! I'm Samia, a 4th year Computer Science & Engineering student
            with a passion for Artificial Intelligence, Machine Learning, and
            Web Development. I love building projects that sit at the intersection
            of intelligent systems and clean user experiences.
          </p>

          <p>
            From academic research to personal builds, I enjoy solving real-world
            problems through code — and I'm always learning something new along the way.
          </p>

          <div className="about-info">
            <div className="info-item">
              <span className="info-label">Degree</span>
              <span className="info-value">B.Sc. in CSE</span>
            </div>
            <div className="info-item">
              <span className="info-label">Year</span>
              <span className="info-value">4th Year (Final)</span>
            </div>
            <div className="info-item">
              <span className="info-label">Focus</span>
              <span className="info-value">AI/ML + Web Dev</span>
            </div>
            <div className="info-item">
              <span className="info-label">Location</span>
              <span className="info-value">Bangladesh 🇧🇩</span>
            </div>
          </div>

          <div className="about-buttons">
            <a href="/resume.pdf" className="about-btn primary" download>
              Download Resume ↓
            </a>
            <a href="/portfolio.pdf" className="about-btn secondary" download>
              Download Portfolio ↓
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}