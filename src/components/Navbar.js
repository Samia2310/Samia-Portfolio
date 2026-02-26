import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar({ dark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight =
        document.getElementById("hero")?.offsetHeight ||
        window.innerHeight;

      setScrolled(window.scrollY > heroHeight - 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["About", "Skills", "Projects", "Contact"];
  const themeClass = dark ? "dark" : "light";

  if (!scrolled) return null;

  return (
    <nav className={"navbar scrolled " + themeClass}>

      <a href="#hero" className="logo">
        Samia Tabassum Chowdhury
      </a>

      {/* Desktop Menu */}
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link}>
            <a href={"#" + link.toLowerCase()}>{link}</a>
          </li>
        ))}

        <li>
          <button
            className={"theme-icon-btn " + themeClass}
            onClick={toggleTheme}
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </li>
      </ul>

      {/* Hamburger */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={"mobile-menu " + themeClass}>
          {navLinks.map((link) => (
            <a
              key={link}
              href={"#" + link.toLowerCase()}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}

          <button
            className={"theme-icon-btn " + themeClass}
            onClick={() => {
              toggleTheme();
              setMenuOpen(false);
            }}
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      )}

    </nav>
  );
}