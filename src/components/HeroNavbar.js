import { useState, useEffect } from "react";
import "./HeroNavbar.css";

export default function HeroNavbar({ dark, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight || window.innerHeight;
      setVisible(window.scrollY < heroHeight - 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["About", "Skills", "Projects", "Contact"];

  if (!visible) return null;

  return (
    <header className={"hero-navbar " + (dark ? "dark" : "light")}>

      <button className="hero-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✕" : "☰"}
      </button>

      <button className="hero-theme-btn" onClick={toggleTheme}>
        {dark ? "☀️" : "🌙"}
      </button>

      {menuOpen && (
        <div className={"hero-mobile-menu " + (dark ? "dark" : "light")}>
          {navLinks.map((link) => (
            <a
              key={link}
              href={"#" + link.toLowerCase()}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}

    </header>
  );
}