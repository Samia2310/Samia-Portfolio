import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "./HeroNavbar.css";

export default function HeroNavbar({ dark, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight =
        document.getElementById("hero")?.offsetHeight || window.innerHeight;

      setVisible(window.scrollY < heroHeight - 80);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setMenuOpen(false);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = ["About", "Skills", "Projects", "Certification", "Experience", "Contact"];

  if (!visible) return null;

  return (
    <>
      <header className={"hero-navbar " + (dark ? "dark" : "light")}>

        <button
          className="hero-hamburger"
          onClick={() => setMenuOpen(prev => !prev)}
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

      {menuOpen && createPortal(
        <>
          <div
            className="drawer-overlay"
            onClick={() => setMenuOpen(false)}
          />

          <div className={"hero-mobile-menu " + (dark ? "dark" : "light")}>

            <nav className="drawer-links">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={"#" + link.toLowerCase()}
                  onClick={() => setMenuOpen(false)}
                  className="drawer-link"
                >
                  {link}
                </a>
              ))}
            </nav>

          </div>
        </>,
        document.body
      )}
    </>
  );
}