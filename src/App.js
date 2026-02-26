import { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div>
      {/* Temporary toggle button to test theme */}
      <button
        onClick={toggleTheme}
        style={{
          position: "fixed",
          top: "1rem",
          right: "1rem",
          background: "var(--accent-blue)",
          color: "#fff",
          padding: "0.5rem 1rem",
          borderRadius: "8px",
          zIndex: 999,
          fontSize: "0.9rem"
        }}
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>

      <h1 style={{ padding: "2rem", color: "var(--text-primary)" }}>
        Environment Ready ✅
      </h1>
    </div>
  );
}

export default App;