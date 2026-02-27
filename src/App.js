import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import "./index.css";

function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);

  const toggleTheme = () => setDark((prev) => !prev);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--bg-primary)", transition: "all 0.3s ease" }}>

      <Navbar dark={dark} toggleTheme={toggleTheme} />
      <Hero dark={dark} toggleTheme={toggleTheme} />
      <About />

      <section id="skills" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h1 style={{ color: "var(--text-primary)", fontSize: "3rem" }}>Skills Section</h1>
      </section>

      <Projects />
      <Certifications />

      <section id="experiences" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h1 style={{ color: "var(--text-primary)", fontSize: "3rem" }}>Experience Section</h1>
      </section>

      <section id="achievements" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h1 style={{ color: "var(--text-primary)", fontSize: "3rem" }}>Achievements Section</h1>
      </section>

      <Contact />

    </div>
  );
}

export default App;