import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "./HeroNavbar.css";

export default function HeroNavbar({ dark, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  // Hide navbar after scrolling past hero section
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

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => setMenuOpen(false);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = ["About", "Skills", "Projects", "Contact"];

  if (!visible) return null;

  return (
    <>
      {/* Navbar Header */}
      <header className={"hero-navbar " + (dark ? "dark" : "light")}>

        <button
          className="hero-hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>

        <button
          className="hero-theme-btn"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {dark ? "☀️" : "🌙"}
        </button>

      </header>

      {/* Drawer Portal */}
      {menuOpen &&
        createPortal(
          <>
            {/* Overlay */}
            <div
              className="drawer-overlay"
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer Panel */}
            <div className={"hero-mobile-menu " + (dark ? "dark" : "light")}>

              {/* Drawer Header */}
              <div className="drawer-header">
                <button
                  className="drawer-close"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="drawer-links">
                {navLinks.map((link, i) => (
                  <a
                    key={link}
                    href={"#" + link.toLowerCase()}
                    onClick={() => setMenuOpen(false)}
                    className="drawer-link"
                  >
                    <span className="drawer-link-number">
                      0{i + 1}
                    </span>
                    {link}
                  </a>
                ))}
              </nav>

              {/* Footer */}
              <div className="drawer-footer">
                <span className="drawer-footer-label">
                  {dark ? "Dark mode" : "Light mode"}
                </span>

                <button
                  className="drawer-theme-btn"
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                >
                  {dark ? "☀️" : "🌙"}
                </button>
              </div>

            </div>
          </>,
          document.body
        )}
    </>
  );
}