import "./Hero.css";
import HeroNavbar from "./HeroNavbar";

export default function Hero({ dark, toggleTheme }) {
  return (
    <>
      <HeroNavbar dark={dark} toggleTheme={toggleTheme} />

      <section className="hero" id="hero">

        <div className="hero-container">

          <div className="hero-tag">
            <span className="tag-dot"></span>
            Available for opportunities
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Samia</span>
          </h1>

          <h2 className="hero-subtitle">
            CSE Student & AI/ML Developer
          </h2>

          <p className="hero-description">
            A final year Computer Science student specializing in Artificial
            Intelligence, Machine Learning, and Web Development. I build
            intelligent systems and clean web experiences that solve real problems.
          </p>

          <div className="hero-stack">
            <span>Python</span>
            <span>Machine Learning</span>
            <span>React</span>
            <span>Deep Learning</span>
            <span>Django</span>
          </div>

          <div className="hero-buttons">
            <a href="#projects" className="hero-btn primary">View Projects</a>
            <a href="#contact" className="hero-btn secondary">Contact Me</a>
          </div>

          <div className="hero-social">
            <a href="https://github.com/Samia2310" target="_blank" rel="noreferrer" className="social-link">
              GitHub
            </a>
            <span className="social-divider">|</span>
            <a href="https://www.linkedin.com/in/samia-tabassum-chowdhury-191229348 " target="_blank" rel="noreferrer" className="social-link">
              LinkedIn
            </a>
            <span className="social-divider">|</span>
            <a href="samiatchowdhury2310@gmail.com" className="social-link">
              Email
            </a>
          </div>

        </div>

        <div className="hero-scroll">
          <div className="scroll-line"></div>
          <span>Scroll down</span>
        </div>

      </section>
    </>
  );
}