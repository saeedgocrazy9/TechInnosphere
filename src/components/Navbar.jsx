import { useState, useEffect } from "react";

const links = ["Home", "About", "Services", "IIT Projects", "Founders", "Roadmap"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const idMap = {
      "Home": "home", "About": "about", "Services": "services",
      "IIT Projects": "iit-projects", "Founders": "founders",
      "Roadmap": "roadmap", "Contact": "contact",
    };
    const el = document.getElementById(idMap[id]);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @keyframes slideGradient { 0%{background-position:0% 0%;} 100%{background-position:200% 0%;} }
        @keyframes greenPulse    { 0%,100%{opacity:.6;} 50%{opacity:1;} }
        @keyframes menuDown      { from{opacity:0;transform:translateY(-8px);} to{opacity:1;transform:translateY(0);} }

        .nb-link {
          font-size: 14px; font-weight: 500; color: #475569;
          padding: 8px 16px; border-radius: 8px; cursor: pointer;
          transition: all 0.2s ease; white-space: nowrap;
          letter-spacing: 0.01em; position: relative;
        }
        .nb-link:hover { color: #0A1B5C; background: rgba(10,27,92,0.05); }
        .nb-link.active { color: #0A1B5C; font-weight: 700; background: rgba(10,27,92,0.06); }
        .nb-link.active::after {
          content: '';
          position: absolute; bottom: 4px; left: 50%;
          transform: translateX(-50%);
          width: 4px; height: 4px; border-radius: 50%;
          background: #1E4FD8;
        }
        .nb-contact {
          background: linear-gradient(135deg, #0A1B5C, #1E4FD8);
          color: #fff; font-size: 14px; font-weight: 700;
          padding: 10px 24px; border-radius: 8px; border: none;
          cursor: pointer; letter-spacing: 0.04em;
          box-shadow: 0 4px 16px rgba(10,27,92,0.2);
          transition: all 0.2s ease; white-space: nowrap;
        }
        .nb-contact:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(10,27,92,0.3); }
        .nb-ham-line {
          width: 22px; height: 2px; background: #0A1B5C;
          border-radius: 2px; transition: all 0.3s ease; display: block;
        }
        @media (max-width: 1024px) {
          .nb-desktop { display: none !important; }
          .nb-ham     { display: flex !important; }
        }
      `}</style>

      {/* Top gradient accent line */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, height: 3, zIndex: 1002,
        background: "linear-gradient(90deg, #0A1B5C, #1E4FD8, #3B82F6, #1E4FD8, #0A1B5C)",
        backgroundSize: "200% 100%",
        animation: "slideGradient 4s linear infinite",
      }} />

      <nav style={{
        position: "fixed", top: 3, left: 0, right: 0, zIndex: 1001,
        height: 72, padding: "0 4%",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.95)",
        backdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(10,27,92,0.1)" : "1px solid rgba(10,27,92,0.06)",
        boxShadow: scrolled ? "0 4px 24px rgba(10,27,92,0.08)" : "none",
        transition: "all 0.3s ease",
        fontFamily: "'Segoe UI', sans-serif",
      }}>

        {/* Logo — visible only when scrolled */}
        <div
          onClick={() => scrollTo("Home")}
          style={{
            cursor: "pointer", flexShrink: 0,
            opacity: scrolled ? 1 : 0,
            transform: scrolled ? "translateX(0)" : "translateX(-8px)",
            transition: "opacity 0.35s ease, transform 0.35s ease",
            pointerEvents: scrolled ? "auto" : "none",
          }}
        >
          <img
            src="/TechInnosphere_Logo.png"
            alt="TechInnosphere"
            style={{
              height: 42, width: "auto", objectFit: "contain",
              display: "block",
              filter: "drop-shadow(0 2px 6px rgba(10,27,92,0.12))",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          />
        </div>

        {/* Desktop nav links */}
        <div className="nb-desktop" style={{
          display: "flex", alignItems: "center", gap: 2,
          background: "rgba(10,27,92,0.03)",
          border: "1px solid rgba(10,27,92,0.07)",
          borderRadius: 12, padding: "6px 8px",
        }}>
          {links.map(link => (
            <div
              key={link}
              className={`nb-link${active === link ? " active" : ""}`}
              onClick={() => scrollTo(link)}
            >
              {link}
            </div>
          ))}
        </div>

        {/* Right side */}
        <div className="nb-desktop" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* Live badge */}
          <div style={{
            display: "flex", alignItems: "center", gap: 7,
            background: "rgba(22,163,74,0.06)",
            border: "1px solid rgba(22,163,74,0.18)",
            borderRadius: 50, padding: "7px 14px",
          }}>
            <div style={{
              width: 7, height: 7, borderRadius: "50%",
              background: "#16A34A",
              animation: "greenPulse 2s ease-in-out infinite",
            }} />
            <span style={{ fontSize: 11, color: "#16A34A", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Live</span>
          </div>

          <button className="nb-contact" onClick={() => scrollTo("Contact")}>
            Contact Us →
          </button>
        </div>

        {/* Hamburger */}
        <div
          className="nb-ham"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none", flexDirection: "column", gap: 5,
            cursor: "pointer", width: 40, height: 40,
            alignItems: "center", justifyContent: "center",
            background: "rgba(10,27,92,0.05)",
            border: "1px solid rgba(10,27,92,0.1)",
            borderRadius: 8, flexShrink: 0,
          }}
        >
          <span className="nb-ham-line" style={{ transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
          <span className="nb-ham-line" style={{ width: "14px", opacity: menuOpen ? 0 : 1 }} />
          <span className="nb-ham-line" style={{ transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: 75, left: 0, right: 0, zIndex: 1000,
          background: "rgba(255,255,255,0.99)", backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(10,27,92,0.08)",
          padding: "12px 4% 24px",
          boxShadow: "0 8px 32px rgba(10,27,92,0.1)",
          animation: "menuDown 0.2s ease",
          fontFamily: "'Segoe UI', sans-serif",
        }}>
          {/* Mobile logo */}
          <div style={{
            display: "flex", justifyContent: "center",
            paddingBottom: 16, marginBottom: 8,
            borderBottom: "1px solid rgba(10,27,92,0.07)",
          }}>
            <img
              src="/TechInnosphere_Logo.png"
              alt="TechInnosphere"
              style={{ height: 36, objectFit: "contain" }}
            />
          </div>

          {[...links, "Contact"].map(link => (
            <div
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                padding: "14px 0",
                borderBottom: "1px solid rgba(10,27,92,0.05)",
                color: active === link ? "#1E4FD8" : "#334155",
                fontSize: 16, fontWeight: active === link ? 700 : 500,
                cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "space-between",
              }}
            >
              <span>{link}</span>
              <span style={{ color: "#1E4FD8", fontSize: 14 }}>›</span>
            </div>
          ))}
          <button
            onClick={() => scrollTo("Contact")}
            style={{
              marginTop: 16, width: "100%",
              background: "linear-gradient(135deg, #0A1B5C, #1E4FD8)",
              border: "none", color: "#fff", fontWeight: 700, fontSize: 16,
              padding: "14px 0", borderRadius: 10, cursor: "pointer",
              boxShadow: "0 4px 16px rgba(10,27,92,0.2)",
            }}
          >Contact Us →</button>
        </div>
      )}
    </>
  );
}