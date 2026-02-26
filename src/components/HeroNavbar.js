import { useState } from "react";
import "./HeroNavbar.css";

export default function HeroNavbar({ dark, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["About", "Skills", "Projects", "Contact"];

  return (
    <header className="hero-navbar">

      <button
        className="hero-hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
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