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
              Artificial Intelligence and
              <span style={{
                background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}> Machine Learning Enthusiast</span>
            </h2>
            <p>
              Hi! I'm Samia, a Computer Science & Engineering graduate with a strong interest in Artificial Intelligence, Machine Learning, and Data Analytics. I enjoy building projects that combine data-driven insights, intelligent systems, and thoughtful user experiences.
            </p>
            <p>
              Alongside my full-stack web development experience, I enjoy solving real-world problems through code and continuously learning.
            </p>
          </div>

        </div>

        {/* Mobile Layout */}
        <div className="about-mobile">

          <div className="mobile-header">
            <span className="section-tag">About Me</span>
            <h2>
              Artificial Intelligence and
              <span style={{
                background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}> Machine Learning Enthusiast</span>
            </h2>
            <p>
              Hi! I'm Samia, a Computer Science & Engineering graduate with a strong interest in Artificial Intelligence, Machine Learning, and Data Analytics. I enjoy building projects that combine data-driven insights, intelligent systems, and thoughtful user experiences.
            </p>
            <p>
              I plan to pursue higher studies in AI and ML and deepen my understanding of these fields. Alongside my full-stack web development experience, I enjoy solving real-world problems through code and continuously learning.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
