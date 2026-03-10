import { useState, useEffect } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [typed, setTyped] = useState("");
  const [clicked, setClicked] = useState(false);

  const words = ["Software", "AI Solutions", "Automation", "SaaS Products", "Digital Future"];

  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  useEffect(() => {
    let i = 0, deleting = false, current = 0;
    const tick = () => {
      const word = words[current];
      if (!deleting) {
        setTyped(word.slice(0, i + 1)); i++;
        if (i === word.length) { deleting = true; setTimeout(tick, 1800); return; }
      } else {
        setTyped(word.slice(0, i - 1)); i--;
        if (i === 0) { deleting = false; current = (current + 1) % words.length; }
      }
      setTimeout(tick, deleting ? 50 : 90);
    };
    const t = setTimeout(tick, 600);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 94;
      window.scrollTo({ top, behavior: "instant" });
    }
  };

  const tags = ["AI", "Software Development", "Cybersecurity", "Business Intelligence", "Automation", "SaaS"];

  return (
    <section id="home" style={{
      minHeight: "100vh", background: "#020610",
      position: "relative", overflow: "hidden",
      display: "flex", alignItems: "center",
      fontFamily: "'Segoe UI', sans-serif",
    }}>
      <style>{`
        @keyframes floatUp {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes blinkCursor {
          0%, 100% { opacity: 1; } 50% { opacity: 0; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.08); }
        }
        @keyframes rippleGlow {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        @keyframes tagFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .hero-btn-primary {
          background: linear-gradient(135deg, #1D4ED8, #3B82F6);
          border: none; color: #fff;
          font-weight: 800; font-size: 18px;
          padding: 18px 40px; border-radius: 10px;
          cursor: pointer; letter-spacing: 0.03em;
          box-shadow: 0 6px 24px rgba(59,130,246,0.4);
          transition: transform 0.15s ease, box-shadow 0.15s ease;
          white-space: nowrap;
        }
        .hero-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 36px rgba(59,130,246,0.6);
        }
        .hero-btn-secondary {
          background: transparent;
          border: 2px solid rgba(59,130,246,0.5);
          color: #60A5FA; font-weight: 700; font-size: 18px;
          padding: 17px 40px; border-radius: 10px;
          cursor: pointer; letter-spacing: 0.03em;
          transition: all 0.15s ease; white-space: nowrap;
        }
        .hero-btn-secondary:hover {
          background: rgba(59,130,246,0.1);
          border-color: #3B82F6; color: #fff;
          transform: translateY(-3px);
        }
        .tech-tag {
          background: rgba(59,130,246,0.1);
          border: 1px solid rgba(59,130,246,0.25);
          color: #93C5FD; font-size: 14px; font-weight: 600;
          padding: 10px 20px; border-radius: 50px;
          cursor: default; transition: all 0.2s; white-space: nowrap;
        }
        .tech-tag:hover {
          background: rgba(59,130,246,0.2);
          border-color: #3B82F6; color: #fff;
          transform: translateY(-2px);
        }
        @media (max-width: 1024px) {
          .hero-grid { flex-direction: column !important; align-items: flex-start !important; }
          .hero-visual { display: none !important; }
        }
        @media (max-width: 768px) {
          .hero-section-inner { padding: 110px 4% 60px !important; }
          .hero-buttons { flex-direction: column !important; }
          .hero-buttons button { width: 100% !important; }
        }
      `}</style>

      {/* GRID BG */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `
          linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "52px 52px", pointerEvents: "none",
      }} />

      {/* GLOW TOP */}
      <div style={{
        position: "absolute", top: "-20%", left: "50%",
        transform: "translateX(-50%)",
        width: "80vw", height: "60vh",
        background: "radial-gradient(ellipse, rgba(29,78,216,0.2) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {clicked && (
        <div style={{
          position: "absolute", top: "15%", left: "10%",
          width: "50vw", height: "50vh",
          background: "radial-gradient(ellipse, rgba(59,130,246,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
          animation: "rippleGlow 2s ease-out infinite", zIndex: 0,
        }} />
      )}

      {/* MAIN */}
      <div className="hero-section-inner" style={{
        width: "100%", maxWidth: 1600, margin: "0 auto",
        padding: "120px 4% 80px",
        position: "relative", zIndex: 1,
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(30px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}>
        <div className="hero-grid" style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: 60,
        }}>

          {/* LEFT */}
          <div style={{ flex: "1 1 540px", maxWidth: 720 }}>

            {/* BADGE */}
            <div
              onMouseEnter={() => setClicked(true)}
              onMouseLeave={() => setClicked(false)}
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: clicked ? "rgba(59,130,246,0.15)" : "rgba(29,78,216,0.1)",
                border: `1px solid ${clicked ? "rgba(59,130,246,0.6)" : "rgba(59,130,246,0.25)"}`,
                borderRadius: 50, padding: "10px 22px", marginBottom: 36,
                animation: "fadeSlideUp 0.6s ease both",
                cursor: "pointer", position: "relative",
                transition: "all 0.3s ease",
                boxShadow: clicked ? "0 0 40px rgba(59,130,246,0.35), 0 0 80px rgba(59,130,246,0.15)" : "none",
              }}>
              {clicked && (
                <div style={{
                  position: "absolute", inset: -30, borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)",
                  pointerEvents: "none",
                  animation: "rippleGlow 1.5s ease-out infinite", zIndex: -1,
                }} />
              )}
              <div style={{
                width: 8, height: 8, borderRadius: "50%",
                background: clicked ? "#60A5FA" : "#22C55E",
                boxShadow: clicked ? "0 0 14px #60A5FA" : "0 0 10px #22C55E",
                transition: "all 0.3s ease",
                animation: "pulse 2s ease-in-out infinite", flexShrink: 0,
              }} />
              <span style={{
                fontSize: 13, color: clicked ? "#fff" : "#93C5FD",
                fontWeight: 700, letterSpacing: "0.12em",
                textTransform: "uppercase", transition: "color 0.3s ease",
              }}>Innovation-Driven Technology</span>
              <span style={{
                fontSize: 12, color: clicked ? "#60A5FA" : "#334155",
                fontWeight: 600, transition: "color 0.3s ease",
              }}>{clicked ? "✦" : "→"}</span>
            </div>

            {/* HEADLINE 1 */}
            <h1 style={{
              fontSize: "clamp(42px, 5.5vw, 80px)",
              fontWeight: 900, color: "#FFFFFF",
              lineHeight: 1.05, letterSpacing: "-0.03em",
              marginBottom: 0,
              animation: "fadeSlideUp 0.7s ease 0.1s both",
            }}>
              From Vision to{" "}
              <span style={{
                background: "linear-gradient(90deg, #3B82F6, #60A5FA)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>{typed}</span>
              <span style={{
                color: "#3B82F6",
                animation: "blinkCursor 1s step-end infinite",
                WebkitTextFillColor: "#3B82F6",
              }}>|</span>
            </h1>

            {/* HEADLINE 2 */}
            <h1 style={{
              fontSize: "clamp(42px, 5.5vw, 80px)",
              fontWeight: 900,
              background: "linear-gradient(90deg, #3B82F6, #60A5FA, #93C5FD)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              lineHeight: 1.05, letterSpacing: "-0.03em",
              marginBottom: 32,
              animation: "fadeSlideUp 0.7s ease 0.15s both",
            }}>
              We Build It All
            </h1>

            {/* DIVIDER */}
            <div style={{
              width: 72, height: 4, borderRadius: 4,
              background: "linear-gradient(90deg, #1D4ED8, #60A5FA)",
              marginBottom: 32,
              animation: "fadeSlideUp 0.7s ease 0.2s both",
            }} />

            {/* DESCRIPTION */}
            <p style={{
              color: "#CBD5E1",
              fontSize: "clamp(16px, 1.8vw, 20px)",
              lineHeight: 1.8, marginBottom: 40,
              maxWidth: 640,
              fontWeight: 400,
              animation: "fadeSlideUp 0.7s ease 0.25s both",
            }}>
              TechInnosphere delivers{" "}
              <span style={{ color: "#60A5FA", fontWeight: 600 }}>
                end-to-end software engineering
              </span>
              ,{" "}
              <span style={{ color: "#60A5FA", fontWeight: 600 }}>
                AI-powered automation
              </span>
              , analytics, and digital transformation solutions built
              for the modern digital age.
            </p>

            {/* TAGS */}
            <div style={{
              display: "flex", flexWrap: "wrap", gap: 12,
              marginBottom: 44,
              animation: "fadeSlideUp 0.7s ease 0.3s both",
            }}>
              {tags.map((tag, i) => (
                <span key={tag} className="tech-tag" style={{
                  animation: `tagFloat ${3 + i * 0.3}s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                }}>{tag}</span>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="hero-buttons" style={{
              display: "flex", gap: 18, flexWrap: "wrap",
              animation: "fadeSlideUp 0.7s ease 0.35s both",
            }}>
              <button className="hero-btn-primary" onClick={() => scrollTo("services")}>
                Get Started →
              </button>
              <button className="hero-btn-secondary" onClick={() => scrollTo("contact")}>
                Book Consultation
              </button>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="hero-visual" style={{
            flex: "1 1 420px", maxWidth: 520,
            display: "flex", justifyContent: "center", alignItems: "center",
            animation: "fadeSlideUp 0.9s ease 0.2s both",
          }}>
            <div style={{ position: "relative", width: 460, height: 500 }}>

              <div style={{
                position: "absolute", inset: 0, borderRadius: "50%",
                border: "1px dashed rgba(59,130,246,0.15)",
                animation: "rotateSlow 25s linear infinite",
              }}>
                {[0, 72, 144, 216, 288].map((deg) => (
                  <div key={deg} style={{
                    position: "absolute",
                    width: 10, height: 10, borderRadius: "50%",
                    background: "#3B82F6", boxShadow: "0 0 10px #3B82F6",
                    top: "50%", left: "50%",
                    transform: `rotate(${deg}deg) translateX(230px) translate(-50%, -50%)`,
                  }} />
                ))}
              </div>

              <div style={{
                position: "absolute", inset: 50, borderRadius: "50%",
                border: "1px dashed rgba(59,130,246,0.08)",
                animation: "rotateSlow 15s linear infinite reverse",
              }}>
                {[0, 120, 240].map((deg) => (
                  <div key={deg} style={{
                    position: "absolute",
                    width: 7, height: 7, borderRadius: "50%",
                    background: "#60A5FA", boxShadow: "0 0 8px #60A5FA",
                    top: "50%", left: "50%",
                    transform: `rotate(${deg}deg) translateX(170px) translate(-50%, -50%)`,
                  }} />
                ))}
              </div>

              <div style={{
                position: "absolute", inset: 100,
                background: "linear-gradient(145deg, #0D1526, #111827)",
                borderRadius: 28,
                border: "1px solid rgba(59,130,246,0.2)",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", gap: 10,
                boxShadow: "0 0 60px rgba(29,78,216,0.25)",
                animation: "floatUp 5s ease-in-out infinite",
              }}>
                <div style={{
                  width: 60, height: 60, borderRadius: 16,
                  background: "linear-gradient(145deg, #1E3A8A, #3B82F6)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 26, fontWeight: 900, color: "#fff",
                  boxShadow: "0 0 28px rgba(59,130,246,0.5)",
                }}>T</div>
                <div style={{
                  fontWeight: 900, fontSize: 15, color: "#F1F5F9",
                  letterSpacing: "-0.02em", textAlign: "center",
                }}>
                  Tech<span style={{
                    background: "linear-gradient(90deg, #60A5FA, #93C5FD)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  }}>Inno</span>sphere
                </div>
                <div style={{
                  fontSize: 9, color: "#3B82F6",
                  fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase",
                }}>IIT Innovation Hub</div>
                <div style={{ display: "flex", gap: 16, marginTop: 4 }}>
                  {[["50+", "Projects"], ["15+", "IITians"]].map(([n, l]) => (
                    <div key={l} style={{ textAlign: "center" }}>
                      <div style={{
                        fontWeight: 800, fontSize: 15,
                        background: "linear-gradient(90deg, #3B82F6, #60A5FA)",
                        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                      }}>{n}</div>
                      <div style={{ color: "#334155", fontSize: 9, fontWeight: 600, textTransform: "uppercase" }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>

              {[
                { label: "🤖 AI/ML", top: "2%", right: "2%" },
                { label: "💻 Software Dev", top: "25%", left: "-12%" },
                { label: "☁️ SaaS", bottom: "25%", right: "-8%" },
                { label: "🔒 Cybersecurity", bottom: "3%", left: "5%" },
              ].map(({ label, ...pos }, i) => (
                <div key={label} style={{
                  position: "absolute", ...pos,
                  background: "rgba(13,21,38,0.92)",
                  border: "1px solid rgba(59,130,246,0.25)",
                  borderRadius: 10, padding: "8px 14px",
                  fontSize: 13, fontWeight: 700, color: "#93C5FD",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                  whiteSpace: "nowrap",
                  animation: `floatUp ${3.5 + i * 0.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.4}s`,
                }}>{label}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}