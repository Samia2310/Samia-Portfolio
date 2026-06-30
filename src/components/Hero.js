import "./Hero.css";
import HeroNavbar from "./HeroNavbar";

export default function Hero({ dark, toggleTheme }) {
  return (
    <>
      <HeroNavbar dark={dark} toggleTheme={toggleTheme} />

      <section className="hero" id="hero">

        <div className="hero-bg">
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-orb hero-orb-3" />
          <div className="hero-orb hero-orb-4" />
          <div className="hero-orb hero-orb-5" />
          <div className="hero-particles">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="particle" style={{
                left: `${(i * 37 + 11) % 100}%`,
                top: `${(i * 53 + 7) % 100}%`,
                animationDelay: `${(i * 0.4) % 6}s`,
                animationDuration: `${4 + (i % 4)}s`,
                width: i % 3 === 0 ? "3px" : "2px",
                height: i % 3 === 0 ? "3px" : "2px",
                opacity: 0.15 + (i % 4) * 0.08,
              }} />
            ))}
          </div>
        </div>

        <div className="hero-container">

          {/* Mobile-only tag — above photo */}
          <div className="hero-tag hero-tag-mobile">
            <span className="tag-dot" />
            Available for opportunities
          </div>

          {/* Photo */}
          <div className="hero-photo-wrap">
            <div className="hero-photo-glow" />
            <div className="hero-photo-border">
              <img src="/photo.jpg" alt="Samia" className="hero-photo" />
            </div>
          </div>

          {/* Text content */}
          <div className="hero-content">

            {/* Desktop-only tag */}
            <div className="hero-tag hero-tag-desktop">
              <span className="tag-dot" />
              Available for opportunities
            </div>

            <h1 className="hero-title">
              <span className="hero-line hero-line-1">Hi, I'm</span>
              <span className="hero-line hero-line-2 gradient-text">Samia</span>
              <span className="hero-line hero-line-3">Tabassum Chowdhury</span>
            </h1>

            <div className="hero-subtitle-row">
              <span className="hero-subtitle-accent" />
              <h2 className="hero-subtitle">Data Analytics & Web Developer</h2>
            </div>

            <p className="hero-description">
              Computer Science and Engineering graduate with a strong foundation in software development and a growing interest in Data Analytics, Artificial Intelligence, and Machine Learning. Experienced in developing full-stack web applications, with a passion for delivering impactful, data-driven, and user-focused solutions that solve real-world problems and create meaningful value.
            </p>

            <div className="hero-stack">
              <span>Python</span>
              <span>React</span>
              <span>Next.js</span>
              <span>SQL</span>
              <span>Data Analysis</span>
              <span>Machine Learning</span>
              <span>Deep Learning</span>
              
            </div>

            <div className="hero-social">
              <a href="https://github.com/Samia2310" target="_blank" rel="noreferrer" className="social-link">GitHub</a>
              <span className="social-divider">|</span>
              <a href="https://www.linkedin.com/in/samia-tabassum-chowdhury-191229348" target="_blank" rel="noreferrer" className="social-link">LinkedIn</a>
              <span className="social-divider">|</span>
              <a href="mailto:samiatchowdhury2310@gmail.com" className="social-link">Email</a>
            </div>

          </div>

        </div>

        <div className="hero-scroll">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>

      </section>
    </>
  );
}