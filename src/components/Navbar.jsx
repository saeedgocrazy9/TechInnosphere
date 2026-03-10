import { useState, useEffect } from "react";

const links = ["Home", "About", "Services", "IIT Projects", "Founders", "Roadmap"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [hovered, setHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
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
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 24px rgba(59,130,246,0.45); }
          50% { box-shadow: 0 0 48px rgba(59,130,246,0.9); }
        }
        @keyframes greenPulse {
          0%, 100% { box-shadow: 0 0 5px #22C55E; }
          50% { box-shadow: 0 0 14px #22C55E; }
        }
        @keyframes mobileSlideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
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
          background: #E2E8F0;
          border-radius: 2px;
          transition: all 0.3s ease;
          display: block;
        }
        @media (max-width: 1024px) {
          .nav-links-pill { display: none !important; }
          .nav-live-badge { display: none !important; }
          .nav-clock { display: none !important; }
          .hamburger { display: flex !important; }
        }
        @media (max-width: 480px) {
          .nav-brand-sub { display: none !important; }
          .nav-contact-btn { display: none !important; }
        }
      `}</style>

      {/* TOP LINE */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, height: 4,
        background: "linear-gradient(90deg, #1D4ED8, #3B82F6, #93C5FD, #3B82F6, #1D4ED8)",
        backgroundSize: "200% 100%",
        animation: "slideGradient 3s linear infinite",
        zIndex: 1002,
      }} />

      <nav style={{
        position: "fixed", top: 4, left: 0, right: 0,
        zIndex: 1001, height: 86, padding: "0 4%",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(2,6,16,0.97)" : "rgba(2,6,16,0.6)",
        backdropFilter: "blur(28px)", WebkitBackdropFilter: "blur(28px)",
        borderBottom: "1px solid rgba(59,130,246,0.1)",
        boxShadow: scrolled ? "0 8px 48px rgba(0,0,0,0.6)" : "none",
        transition: "background 0.4s ease, box-shadow 0.4s ease",
        fontFamily: "'Segoe UI', sans-serif",
      }}>

        {/* LOGO */}
        <div onClick={() => scrollTo("Home")} style={{
          display: "flex", alignItems: "center",
          gap: 14, cursor: "pointer", userSelect: "none", flexShrink: 0,
        }}>
          <div style={{
            width: 58, height: 58, borderRadius: 16,
            background: "linear-gradient(145deg, #1E3A8A, #3B82F6)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 900, fontSize: 26, color: "#fff",
            animation: "glowPulse 3s ease-in-out infinite",
            border: "1px solid rgba(96,165,250,0.3)",
            position: "relative", overflow: "hidden", flexShrink: 0,
          }}>
            <div style={{
              position: "absolute", top: -12, left: -12,
              width: 30, height: 76,
              background: "rgba(255,255,255,0.12)",
              transform: "rotate(30deg)", pointerEvents: "none"
            }} />
            T
          </div>
          <div>
            <div style={{
              fontSize: 22, fontWeight: 900,
              color: "#FFFFFF", letterSpacing: "-0.03em", lineHeight: 1.1,
            }}>
              Tech
              <span style={{
                background: "linear-gradient(90deg, #60A5FA, #93C5FD)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>Inno</span>
              sphere
            </div>
            <div className="nav-brand-sub" style={{
              fontSize: 10, color: "#3B82F6",
              letterSpacing: "0.2em", textTransform: "uppercase",
              fontWeight: 700, marginTop: 3,
              display: "flex", alignItems: "center", gap: 6,
            }}>
              <div style={{
                width: 5, height: 5, borderRadius: "50%",
                background: "#3B82F6", boxShadow: "0 0 6px #3B82F6"
              }} />
              IIT · Innovation · Tech
              <div style={{
                width: 5, height: 5, borderRadius: "50%",
                background: "#3B82F6", boxShadow: "0 0 6px #3B82F6"
              }} />
            </div>
          </div>
        </div>

        {/* NAV LINKS */}
        <div className="nav-links-pill" style={{
          display: "flex", alignItems: "center", gap: 2,
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
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
                  color: isActive ? "#fff" : isHov ? "#E2E8F0" : "#94A3B8",
                  background: isActive
                    ? "linear-gradient(135deg, #1D4ED8, #3B82F6)"
                    : isHov ? "rgba(59,130,246,0.07)" : "transparent",
                  boxShadow: isActive
                    ? "0 4px 20px rgba(59,130,246,0.45)"
                    : "none",
                }}>
                {link}
                {isActive && (
                  <div style={{
                    position: "absolute", bottom: 3, left: "50%",
                    transform: "translateX(-50%)",
                    width: 4, height: 4, borderRadius: "50%",
                    background: "#93C5FD", boxShadow: "0 0 8px #60A5FA",
                  }} />
                )}
              </div>
            );
          })}
        </div>

        {/* RIGHT */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
          <div className="nav-clock" style={{
            display: "flex", alignItems: "center", gap: 8,
            background: "rgba(15,23,42,0.8)",
            border: "1px solid rgba(59,130,246,0.15)",
            borderRadius: 10, padding: "8px 14px",
          }}>
            <span style={{ fontSize: 14 }}>🕐</span>
            <span style={{
              fontSize: 13, color: "#64748B",
              fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.08em",
            }}>{time}</span>
          </div>

          <div className="nav-live-badge" style={{
            display: "flex", alignItems: "center", gap: 7,
            background: "rgba(34,197,94,0.07)",
            border: "1px solid rgba(34,197,94,0.2)",
            borderRadius: 50, padding: "8px 16px",
          }}>
            <div style={{
              width: 7, height: 7, borderRadius: "50%",
              background: "#22C55E",
              animation: "greenPulse 2s ease-in-out infinite"
            }} />
            <span style={{
              fontSize: 11, color: "#86EFAC",
              fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase"
            }}>Live</span>
          </div>

          <button className="nav-contact-btn"
            onClick={() => scrollTo("Contact")}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 14px 36px rgba(59,130,246,0.55)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(59,130,246,0.3)";
            }}
            style={{
              background: "linear-gradient(135deg, #1D4ED8, #3B82F6)",
              border: "1px solid rgba(96,165,250,0.3)",
              color: "#fff", fontWeight: 700, fontSize: 15,
              padding: "13px 28px", borderRadius: 50,
              cursor: "pointer", letterSpacing: "0.04em",
              boxShadow: "0 4px 20px rgba(59,130,246,0.3)",
              transition: "transform 0.15s ease, box-shadow 0.15s ease",
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

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none", flexDirection: "column",
              gap: 5, cursor: "pointer",
              width: 40, height: 40,
              alignItems: "center", justifyContent: "center",
              background: "rgba(59,130,246,0.08)",
              border: "1px solid rgba(59,130,246,0.2)",
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

      {/* MOBILE MENU */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: 90, left: 0, right: 0, zIndex: 1000,
          background: "rgba(2,6,16,0.98)", backdropFilter: "blur(24px)",
          borderBottom: "1px solid rgba(59,130,246,0.1)",
          padding: "8px 4% 24px",
          animation: "mobileSlideDown 0.2s ease",
        }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 8,
            padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,0.04)", marginBottom: 4,
          }}>
            <span>🕐</span>
            <span style={{ fontSize: 14, color: "#334155", fontWeight: 700, fontFamily: "monospace" }}>{time}</span>
            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 8px #22C55E" }} />
              <span style={{ fontSize: 11, color: "#86EFAC", fontWeight: 700 }}>LIVE</span>
            </div>
          </div>
          {[...links, "Contact"].map((link) => (
            <div key={link} onClick={() => scrollTo(link)} style={{
              padding: "16px 0", borderBottom: "1px solid rgba(255,255,255,0.04)",
              color: active === link ? "#60A5FA" : "#94A3B8",
              fontSize: 17, fontWeight: active === link ? 700 : 500,
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
              <span>{link}</span>
              <span style={{
                width: 28, height: 28,
                background: active === link ? "rgba(59,130,246,0.15)" : "rgba(255,255,255,0.03)",
                border: `1px solid ${active === link ? "rgba(59,130,246,0.3)" : "rgba(255,255,255,0.06)"}`,
                borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 13, color: active === link ? "#60A5FA" : "#1E3A5F",
              }}>→</span>
            </div>
          ))}
          <button onClick={() => scrollTo("Contact")} style={{
            marginTop: 16, width: "100%",
            background: "linear-gradient(135deg, #1D4ED8, #3B82F6)",
            border: "none", color: "#fff", fontWeight: 700, fontSize: 16,
            padding: "15px 0", borderRadius: 12, cursor: "pointer",
          }}>Contact Us →</button>
        </div>
      )}
    </>
  );
}