import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
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

      <section id="projects" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h1 style={{ color: "var(--text-primary)", fontSize: "3rem" }}>Projects Section</h1>
      </section>

      <section id="contact" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h1 style={{ color: "var(--text-primary)", fontSize: "3rem" }}>Contact Section</h1>
      </section>

    </div>
  );
}

export default App;