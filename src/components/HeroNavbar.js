import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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

  // Close menu on resize (e.g. rotating device)
  useEffect(() => {
    const handleResize = () => setMenuOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = ["About", "Skills", "Projects", "Contact"];

  if (!visible) return null;

  return (
    <>
      <header className={"hero-navbar " + (dark ? "dark" : "light")}>

        <button
          className="hero-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <button
          className="hero-theme-btn"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {dark ? "☀️" : "🌙"}
        </button>

      </header>

      {/* Portal renders the dropdown directly into <body>
          so it's never trapped inside a flex or positioned container */}
      {menuOpen && createPortal(
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
        </div>,
        document.body
      )}
    </>
  );
}