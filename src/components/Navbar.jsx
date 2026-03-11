import { useState, useEffect } from "react";

const links = ["Home", "About", "Services", "IIT Projects", "Founders", "Roadmap"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [hovered, setHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", {
        hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false
      }));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
      const top = el.getBoundingClientRect().top + window.scrollY - 94;
      window.scrollTo({ top, behavior: "instant" });
    }
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @keyframes slideGradient {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
        @keyframes greenPulse {
          0%, 100% { box-shadow: 0 0 5px #16A34A; }
          50% { box-shadow: 0 0 14px #16A34A; }
        }
        @keyframes mobileSlideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes logoShimmer {
          0% { left: -100%; }
          100% { left: 200%; }
        }
        .nav-link {
          position: relative;
          padding: 10px 18px;
          border-radius: 50px;
          cursor: pointer;
          font-size: 15px;
          font-weight: 500;
          letter-spacing: 0.01em;
          transition: color 0.15s ease, background 0.15s ease;
          user-select: none;
          white-space: nowrap;
        }
        .hamburger-line {
          width: 100%;
          height: 2px;
          background: #0A1B5C;
          border-radius: 2px;
          transition: all 0.3s ease;
          display: block;
        }
        .logo-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          cursor: pointer;
          user-select: none;
          flex-shrink: 0;
          padding: 8px 16px 8px 8px;
          border-radius: 14px;
          border: 1.5px solid transparent;
          transition: all 0.3s ease;
        }
        .logo-wrapper:hover {
          border-color: rgba(10,27,92,0.12);
          background: rgba(10,27,92,0.03);
          box-shadow: 0 4px 24px rgba(10,27,92,0.08), 0 1px 4px rgba(10,27,92,0.06);
        }
        .logo-img {
          height: 48px;
          width: auto;
          object-fit: contain;
          display: block;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
                      filter 0.35s ease;
          filter: drop-shadow(0 2px 6px rgba(10,27,92,0.15));
        }
        .logo-wrapper:hover .logo-img {
          transform: scale(1.06) translateY(-1px);
          filter: drop-shadow(0 6px 16px rgba(10,27,92,0.22));
        }
        .logo-shimmer {
          position: absolute;
          top: 0; bottom: 0;
          width: 40%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        .logo-wrapper:hover .logo-shimmer {
          opacity: 1;
          animation: logoShimmer 0.65s ease forwards;
        }
        .logo-divider {
          width: 1px;
          height: 36px;
          background: linear-gradient(180deg, transparent, rgba(10,27,92,0.15), transparent);
          margin-left: 8px;
          flex-shrink: 0;
        }
        @media (max-width: 1024px) {
          .nav-links-pill { display: none !important; }
          .nav-live-badge { display: none !important; }
          .nav-clock { display: none !important; }
          .hamburger { display: flex !important; }
          .logo-divider { display: none !important; }
        }
        @media (max-width: 480px) {
          .nav-contact-btn { display: none !important; }
        }
      `}</style>

      {/* TOP ACCENT LINE */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, height: 4,
        background: "linear-gradient(90deg, #0A1B5C, #1E4FD8, #3B82F6, #1E4FD8, #0A1B5C)",
        backgroundSize: "200% 100%",
        animation: "slideGradient 3s linear infinite",
        zIndex: 1002,
      }} />

      <nav style={{
        position: "fixed", top: 4, left: 0, right: 0,
        zIndex: 1001, height: 86, padding: "0 4%",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.95)",
        backdropFilter: "blur(28px)", WebkitBackdropFilter: "blur(28px)",
        borderBottom: scrolled
          ? "1px solid rgba(10,27,92,0.12)"
          : "1px solid rgba(10,27,92,0.07)",
        boxShadow: scrolled
          ? "0 4px 32px rgba(10,27,92,0.1)"
          : "0 2px 12px rgba(10,27,92,0.06)",
        transition: "background 0.4s ease, box-shadow 0.4s ease",
        fontFamily: "'Segoe UI', sans-serif",
      }}>

        {/* ── LOGO ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
          <div
            className="logo-wrapper"
            onClick={() => scrollTo("Home")}
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
          >
            {/* shimmer sweep on hover */}
            <div className="logo-shimmer" />

            <img
              src="/TechInnosphere_Logo.png"
              alt="TechInnosphere"
              className="logo-img"
            />

            {/* tiny "home" tooltip on hover */}
            {logoHovered && (
              <div style={{
                position: "absolute",
                bottom: -34, left: "50%",
                transform: "translateX(-50%)",
                background: "#0A1B5C",
                color: "#fff",
                fontSize: 11, fontWeight: 700,
                padding: "4px 10px",
                borderRadius: 6,
                whiteSpace: "nowrap",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                boxShadow: "0 4px 12px rgba(10,27,92,0.2)",
                pointerEvents: "none",
                zIndex: 10,
              }}>
                ↑ Back to Top
                <div style={{
                  position: "absolute", top: -4, left: "50%",
                  transform: "translateX(-50%)",
                  width: 8, height: 8,
                  background: "#0A1B5C",
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                  rotate: "180deg",
                }} />
              </div>
            )}
          </div>

          {/* elegant vertical divider */}
          <div className="logo-divider" />
        </div>

        {/* ── NAV LINKS PILL ── */}
        <div className="nav-links-pill" style={{
          display: "flex", alignItems: "center", gap: 2,
          background: "rgba(10,27,92,0.04)",
          border: "1px solid rgba(10,27,92,0.08)",
          borderRadius: 60, padding: "8px 10px",
        }}>
          {links.map((link) => {
            const isActive = active === link;
            const isHov = hovered === link;
            return (
              <div key={link} className="nav-link"
                onClick={() => scrollTo(link)}
                onMouseEnter={() => setHovered(link)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? "#fff" : isHov ? "#0A1B5C" : "#475569",
                  background: isActive
                    ? "linear-gradient(135deg, #0A1B5C, #1E4FD8)"
                    : isHov ? "rgba(10,27,92,0.06)" : "transparent",
                  boxShadow: isActive
                    ? "0 4px 16px rgba(10,27,92,0.25)"
                    : "none",
                }}>
                {link}
                {isActive && (
                  <div style={{
                    position: "absolute", bottom: 3, left: "50%",
                    transform: "translateX(-50%)",
                    width: 4, height: 4, borderRadius: "50%",
                    background: "#3B82F6", boxShadow: "0 0 8px #3B82F6",
                  }} />
                )}
              </div>
            );
          })}
        </div>

        {/* ── RIGHT SIDE ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>

          {/* CLOCK */}
          <div className="nav-clock" style={{
            display: "flex", alignItems: "center", gap: 8,
            background: "rgba(10,27,92,0.04)",
            border: "1px solid rgba(10,27,92,0.1)",
            borderRadius: 10, padding: "8px 14px",
          }}>
            <span style={{ fontSize: 14 }}>🕐</span>
            <span style={{
              fontSize: 13, color: "#0A1B5C",
              fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.08em",
            }}>{time}</span>
          </div>

          {/* LIVE BADGE */}
          <div className="nav-live-badge" style={{
            display: "flex", alignItems: "center", gap: 7,
            background: "rgba(22,163,74,0.07)",
            border: "1px solid rgba(22,163,74,0.2)",
            borderRadius: 50, padding: "8px 16px",
          }}>
            <div style={{
              width: 7, height: 7, borderRadius: "50%",
              background: "#16A34A",
              animation: "greenPulse 2s ease-in-out infinite",
            }} />
            <span style={{
              fontSize: 11, color: "#16A34A",
              fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
            }}>Live</span>
          </div>

          {/* CONTACT BUTTON */}
          <button className="nav-contact-btn"
            onClick={() => scrollTo("Contact")}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 14px 36px rgba(10,27,92,0.35)";
              e.currentTarget.style.background = "linear-gradient(135deg, #0A1B5C, #2563EB)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(10,27,92,0.2)";
              e.currentTarget.style.background = "linear-gradient(135deg, #0A1B5C, #1E4FD8)";
            }}
            style={{
              background: "linear-gradient(135deg, #0A1B5C, #1E4FD8)",
              border: "none",
              color: "#fff", fontWeight: 700, fontSize: 15,
              padding: "13px 28px", borderRadius: 50,
              cursor: "pointer", letterSpacing: "0.04em",
              boxShadow: "0 4px 20px rgba(10,27,92,0.2)",
              transition: "transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease",
              whiteSpace: "nowrap",
              display: "flex", alignItems: "center", gap: 8,
            }}>
            Contact Us
            <span style={{
              background: "rgba(255,255,255,0.2)",
              borderRadius: "50%", width: 26, height: 26,
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13,
            }}>→</span>
          </button>

          {/* HAMBURGER */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none", flexDirection: "column",
              gap: 5, cursor: "pointer",
              width: 40, height: 40,
              alignItems: "center", justifyContent: "center",
              background: "rgba(10,27,92,0.05)",
              border: "1px solid rgba(10,27,92,0.12)",
              borderRadius: 10, flexShrink: 0,
            }}>
            <span className="hamburger-line" style={{
              transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
            }} />
            <span className="hamburger-line" style={{
              width: "14px", opacity: menuOpen ? 0 : 1,
            }} />
            <span className="hamburger-line" style={{
              transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
            }} />
          </div>
        </div>
      </nav>

      {/* ── MOBILE MENU ── */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: 90, left: 0, right: 0, zIndex: 1000,
          background: "rgba(255,255,255,0.99)", backdropFilter: "blur(24px)",
          borderBottom: "1px solid rgba(10,27,92,0.1)",
          padding: "8px 4% 24px",
          animation: "mobileSlideDown 0.2s ease",
          boxShadow: "0 8px 32px rgba(10,27,92,0.1)",
        }}>

          {/* mobile logo */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "12px 0 16px",
            borderBottom: "1px solid rgba(10,27,92,0.07)",
            marginBottom: 4,
          }}>
            <img
              src="/TechInnosphere_Logo.png"
              alt="TechInnosphere"
              style={{
                height: 40, width: "auto", objectFit: "contain",
                filter: "drop-shadow(0 2px 8px rgba(10,27,92,0.15))",
              }}
            />
          </div>

          {/* MOBILE CLOCK + LIVE */}
          <div style={{
            display: "flex", alignItems: "center", gap: 8,
            padding: "12px 0", borderBottom: "1px solid rgba(10,27,92,0.07)", marginBottom: 4,
          }}>
            <span>🕐</span>
            <span style={{ fontSize: 14, color: "#0A1B5C", fontWeight: 700, fontFamily: "monospace" }}>{time}</span>
            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#16A34A", boxShadow: "0 0 8px #16A34A" }} />
              <span style={{ fontSize: 11, color: "#16A34A", fontWeight: 700 }}>LIVE</span>
            </div>
          </div>

          {/* MOBILE LINKS */}
          {[...links, "Contact"].map((link) => (
            <div key={link} onClick={() => scrollTo(link)} style={{
              padding: "16px 0", borderBottom: "1px solid rgba(10,27,92,0.06)",
              color: active === link ? "#1E4FD8" : "#475569",
              fontSize: 17, fontWeight: active === link ? 700 : 500,
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
              <span>{link}</span>
              <span style={{
                width: 28, height: 28,
                background: active === link ? "rgba(10,27,92,0.08)" : "rgba(10,27,92,0.03)",
                border: `1px solid ${active === link ? "rgba(10,27,92,0.2)" : "rgba(10,27,92,0.08)"}`,
                borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 13, color: active === link ? "#1E4FD8" : "#94A3B8",
              }}>→</span>
            </div>
          ))}

          {/* MOBILE CONTACT BUTTON */}
          <button onClick={() => scrollTo("Contact")} style={{
            marginTop: 16, width: "100%",
            background: "linear-gradient(135deg, #0A1B5C, #1E4FD8)",
            border: "none", color: "#fff", fontWeight: 700, fontSize: 16,
            padding: "15px 0", borderRadius: 12, cursor: "pointer",
            boxShadow: "0 4px 20px rgba(10,27,92,0.2)",
          }}>Contact Us →</button>
        </div>
      )}
    </>
  );
}