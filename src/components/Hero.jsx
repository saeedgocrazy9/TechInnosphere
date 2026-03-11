import { useState, useEffect } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [typed, setTyped] = useState("");
  const [clicked, setClicked] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [logoGlow, setLogoGlow] = useState(0);

  const words = ["Software", "AI Solutions", "Automation", "SaaS Products", "Digital Future"];

  const services = [
    { label: "Artificial Intelligence",  color: "#1E4FD8", dim: "rgba(30,79,216,0.08)"  },
    { label: "Full Stack Development",   color: "#0A1B5C", dim: "rgba(10,27,92,0.08)"   },
    { label: "Cybersecurity",            color: "#1D4ED8", dim: "rgba(29,78,216,0.08)"  },
    { label: "Business Intelligence",    color: "#2563EB", dim: "rgba(37,99,235,0.08)"  },
  ];

  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);
  useEffect(() => {
    const id = setInterval(() => setActiveService(p => (p + 1) % services.length), 2000);
    return () => clearInterval(id);
  }, []);
  useEffect(() => {
    const id = setInterval(() => setLogoGlow(p => (p + 1) % 3), 1200);
    return () => clearInterval(id);
  }, []);
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
      minHeight: "100vh",
      background: "#FFFFFF",
      position: "relative", overflow: "hidden",
      display: "flex", alignItems: "center",
      fontFamily: "'Segoe UI', sans-serif",
    }}>
      <style>{`
        @keyframes floatUp     { 0%,100%{transform:translateY(0);}        50%{transform:translateY(-14px);} }
        @keyframes rotateSlow  { from{transform:rotate(0deg);}            to{transform:rotate(360deg);} }
        @keyframes blinkCursor { 0%,100%{opacity:1;}                      50%{opacity:0;} }
        @keyframes fadeSlideUp { from{opacity:0;transform:translateY(40px);} to{opacity:1;transform:translateY(0);} }
        @keyframes pulse       { 0%,100%{opacity:.5;transform:scale(1);}  50%{opacity:1;transform:scale(1.08);} }
        @keyframes rippleGlow  { 0%{transform:scale(.8);opacity:1;}       100%{transform:scale(2.5);opacity:0;} }
        @keyframes tagFloat    { 0%,100%{transform:translateY(0);}        50%{transform:translateY(-8px);} }
        @keyframes scanLine    { 0%{top:-40%;}                            100%{top:140%;} }
        @keyframes serviceIn   { from{opacity:0;transform:translateY(8px);} to{opacity:1;transform:translateY(0);} }
        @keyframes slideGradient { 0%{background-position:0% 0%;} 100%{background-position:200% 0%;} }
        @keyframes floatDot    { 0%,100%{transform:translateY(0) scale(1);} 50%{transform:translateY(-20px) scale(1.1);} }

        .hero-btn-primary {
          background: linear-gradient(135deg, #0A1B5C, #1E4FD8);
          border: none; color: #fff;
          font-weight: 800; font-size: 18px;
          padding: 18px 40px; border-radius: 10px;
          cursor: pointer; letter-spacing: 0.03em;
          box-shadow: 0 6px 24px rgba(10,27,92,0.25);
          transition: transform 0.15s ease, box-shadow 0.15s ease;
          white-space: nowrap;
        }
        .hero-btn-primary:hover { transform:translateY(-3px); box-shadow:0 14px 36px rgba(10,27,92,0.4); }

        .hero-btn-secondary {
          background: transparent;
          border: 2px solid rgba(10,27,92,0.25);
          color: #0A1B5C; font-weight: 700; font-size: 18px;
          padding: 17px 40px; border-radius: 10px;
          cursor: pointer; letter-spacing: 0.03em;
          transition: all 0.15s ease; white-space: nowrap;
        }
        .hero-btn-secondary:hover {
          background: rgba(10,27,92,0.06);
          border-color: #0A1B5C; color: #0A1B5C;
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(10,27,92,0.12);
        }

        .tech-tag {
          background: rgba(10,27,92,0.05);
          border: 1px solid rgba(10,27,92,0.15);
          color: #0A1B5C; font-size: 14px; font-weight: 600;
          padding: 10px 20px; border-radius: 50px;
          cursor: default; transition: all 0.2s; white-space: nowrap;
        }
        .tech-tag:hover {
          background: rgba(10,27,92,0.1);
          border-color: #1E4FD8; color: #1E4FD8;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(10,27,92,0.1);
        }

        .service-row { transition: all 0.3s ease; cursor: default; }
        .service-row:hover { background: rgba(10,27,92,0.04) !important; }

        @media (max-width:1024px) { .hero-grid{flex-direction:column!important;} .hero-visual{display:none!important;} }
        @media (max-width:768px)  { .hero-section-inner{padding:110px 4% 60px!important;} .hero-buttons{flex-direction:column!important;} .hero-buttons button{width:100%!important;} }
      `}</style>

      {/* SUBTLE GRID */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `
          linear-gradient(rgba(10,27,92,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(10,27,92,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "52px 52px", pointerEvents: "none",
      }} />

      {/* TOP RADIAL GLOW — soft blue on white */}
      <div style={{
        position: "absolute", top: "-10%", left: "50%",
        transform: "translateX(-50%)",
        width: "80vw", height: "60vh",
        background: "radial-gradient(ellipse, rgba(10,27,92,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* BOTTOM LEFT ACCENT */}
      <div style={{
        position: "absolute", bottom: "-5%", left: "-5%",
        width: "40vw", height: "40vh",
        background: "radial-gradient(ellipse, rgba(30,79,216,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* FLOATING DECORATIVE DOTS */}
      {[
        { size: 10, top: "15%",  left: "8%",  delay: "0s",   dur: "4s"  },
        { size: 6,  top: "70%",  left: "5%",  delay: "1s",   dur: "5s"  },
        { size: 8,  top: "30%",  right: "6%", delay: "0.5s", dur: "4.5s"},
        { size: 5,  bottom: "20%", right: "4%", delay: "1.5s", dur: "3.5s"},
        { size: 12, top: "80%",  left: "20%", delay: "0.8s", dur: "6s"  },
      ].map((dot, i) => (
        <div key={i} style={{
          position: "absolute",
          width: dot.size, height: dot.size,
          borderRadius: "50%",
          background: "rgba(10,27,92,0.12)",
          top: dot.top, left: dot.left, right: dot.right, bottom: dot.bottom,
          animation: `floatDot ${dot.dur} ease-in-out infinite`,
          animationDelay: dot.delay,
          pointerEvents: "none",
        }} />
      ))}

      {clicked && (
        <div style={{ position:"absolute", top:"15%", left:"10%", width:"50vw", height:"50vh", background:"radial-gradient(ellipse,rgba(10,27,92,0.08) 0%,transparent 70%)", pointerEvents:"none", animation:"rippleGlow 2s ease-out infinite", zIndex:0 }} />
      )}

      <div className="hero-section-inner" style={{
        width: "100%", maxWidth: 1600, margin: "0 auto",
        padding: "120px 4% 80px",
        position: "relative", zIndex: 1,
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(30px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}>
        <div className="hero-grid" style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:60 }}>

          {/* ── LEFT ── */}
          <div style={{ flex:"1 1 540px", maxWidth:720 }}>

            {/* BADGE */}
            <div
              onMouseEnter={() => setClicked(true)}
              onMouseLeave={() => setClicked(false)}
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: clicked ? "rgba(10,27,92,0.08)" : "rgba(10,27,92,0.04)",
                border: `1px solid ${clicked ? "rgba(10,27,92,0.25)" : "rgba(10,27,92,0.12)"}`,
                borderRadius: 50, padding: "10px 22px", marginBottom: 36,
                animation: "fadeSlideUp 0.6s ease both", cursor: "pointer", position: "relative",
                transition: "all 0.3s ease",
                boxShadow: clicked ? "0 4px 20px rgba(10,27,92,0.1)" : "none",
              }}>
              <div style={{
                width: 8, height: 8, borderRadius: "50%",
                background: clicked ? "#1E4FD8" : "#16A34A",
                boxShadow: clicked ? "0 0 10px #1E4FD8" : "0 0 10px #16A34A",
                transition: "all 0.3s ease",
                animation: "pulse 2s ease-in-out infinite", flexShrink: 0,
              }} />
              <span style={{
                fontSize: 13, color: "#0A1B5C",
                fontWeight: 700, letterSpacing: "0.12em",
                textTransform: "uppercase", transition: "color 0.3s ease",
              }}>
                Innovation-Driven Technology
              </span>
              <span style={{ fontSize: 12, color: "#64748B", fontWeight: 600 }}>→</span>
            </div>

            {/* HEADLINE 1 */}
            <h1 style={{
              fontSize: "clamp(42px,5.5vw,80px)",
              fontWeight: 900, color: "#0A1B5C",
              lineHeight: 1.05, letterSpacing: "-0.03em",
              marginBottom: 0,
              animation: "fadeSlideUp 0.7s ease 0.1s both",
            }}>
              From Vision to{" "}
              <span style={{
                background: "linear-gradient(90deg, #0A1B5C, #1E4FD8, #3B82F6)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>{typed}</span>
              <span style={{
                color: "#1E4FD8",
                animation: "blinkCursor 1s step-end infinite",
                WebkitTextFillColor: "#1E4FD8",
              }}>|</span>
            </h1>

            {/* HEADLINE 2 */}
            <h1 style={{
              fontSize: "clamp(42px,5.5vw,80px)",
              fontWeight: 900,
              background: "linear-gradient(90deg, #0A1B5C, #1E4FD8, #3B82F6)",
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
              background: "linear-gradient(90deg, #0A1B5C, #1E4FD8)",
              marginBottom: 32,
              animation: "fadeSlideUp 0.7s ease 0.2s both",
            }} />

            {/* DESCRIPTION */}
            <p style={{
              color: "#334155",
              fontSize: "clamp(16px,1.8vw,20px)",
              lineHeight: 1.85, marginBottom: 40,
              maxWidth: 640, fontWeight: 500,
              animation: "fadeSlideUp 0.7s ease 0.25s both",
            }}>
              TechInnosphere delivers{" "}
              <span style={{ color: "#0A1B5C", fontWeight: 700 }}>end-to-end software engineering</span>,{" "}
              <span style={{ color: "#1E4FD8", fontWeight: 700 }}>AI-powered automation</span>,
              analytics, and digital transformation solutions built for the modern digital age.
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

          {/* ── RIGHT VISUAL ── */}
          <div className="hero-visual" style={{
            flex: "1 1 420px", maxWidth: 520,
            display: "flex", justifyContent: "center", alignItems: "center",
            animation: "fadeSlideUp 0.9s ease 0.2s both",
          }}>
            <div style={{ position: "relative", width: 460, height: 500 }}>

              {/* Outer orbit */}
              <div style={{ position:"absolute", inset:0, borderRadius:"50%", border:"1px dashed rgba(10,27,92,0.12)", animation:"rotateSlow 25s linear infinite" }}>
                {[0,72,144,216,288].map(deg => (
                  <div key={deg} style={{ position:"absolute", width:10, height:10, borderRadius:"50%", background:"#1E4FD8", boxShadow:"0 0 10px rgba(30,79,216,0.5)", top:"50%", left:"50%", transform:`rotate(${deg}deg) translateX(230px) translate(-50%,-50%)` }} />
                ))}
              </div>

              {/* Inner orbit */}
              <div style={{ position:"absolute", inset:50, borderRadius:"50%", border:"1px dashed rgba(10,27,92,0.07)", animation:"rotateSlow 15s linear infinite reverse" }}>
                {[0,120,240].map(deg => (
                  <div key={deg} style={{ position:"absolute", width:7, height:7, borderRadius:"50%", background:"#3B82F6", boxShadow:"0 0 8px rgba(59,130,246,0.5)", top:"50%", left:"50%", transform:`rotate(${deg}deg) translateX(170px) translate(-50%,-50%)` }} />
                ))}
              </div>

              {/* CENTER CARD */}
              <div style={{
                position: "absolute", inset: 100,
                background: "#FFFFFF",
                borderRadius: 28,
                border: "1.5px solid rgba(10,27,92,0.1)",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                boxShadow: "0 20px 60px rgba(10,27,92,0.12), 0 4px 16px rgba(10,27,92,0.06)",
                animation: "floatUp 5s ease-in-out infinite",
                overflow: "hidden",
                padding: "24px 20px",
              }}>

                {/* Scan line */}
                <div style={{
                  position: "absolute", left: 0, right: 0, height: "30%",
                  background: "linear-gradient(180deg,transparent,rgba(10,27,92,0.03),transparent)",
                  animation: "scanLine 3s linear infinite",
                  pointerEvents: "none",
                }} />

                {/* TOP ACCENT LINE on card */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 3,
                  background: "linear-gradient(90deg, #0A1B5C, #1E4FD8, #3B82F6)",
                  borderRadius: "28px 28px 0 0",
                }} />

                {/* LOGO ANIMATION */}
                <div style={{
                  position: "relative",
                  display: "flex", flexDirection: "column", alignItems: "center",
                  marginBottom: 16, flexShrink: 0,
                }}>
                  {/* Outer ring */}
                  <div style={{
                    position: "absolute", width: 90, height: 90, borderRadius: "50%",
                    border: "1px solid rgba(10,27,92,0.15)",
                    animation: "rotateSlow 8s linear infinite",
                    top: "50%", left: "50%", transform: "translate(-50%,-50%)",
                  }}>
                    {[0,180].map(deg => (
                      <div key={deg} style={{
                        position: "absolute", width: 5, height: 5, borderRadius: "50%",
                        background: "#0A1B5C", boxShadow: "0 0 6px rgba(10,27,92,0.4)",
                        top: "50%", left: "50%",
                        transform: `rotate(${deg}deg) translateX(45px) translate(-50%,-50%)`,
                      }} />
                    ))}
                  </div>

                  {/* Inner ring */}
                  <div style={{
                    position: "absolute", width: 72, height: 72, borderRadius: "50%",
                    border: "1px dashed rgba(30,79,216,0.2)",
                    animation: "rotateSlow 5s linear infinite reverse",
                    top: "50%", left: "50%", transform: "translate(-50%,-50%)",
                  }}>
                    {[0,120,240].map(deg => (
                      <div key={deg} style={{
                        position: "absolute", width: 3, height: 3, borderRadius: "50%",
                        background: "#1E4FD8",
                        top: "50%", left: "50%",
                        transform: `rotate(${deg}deg) translateX(36px) translate(-50%,-50%)`,
                      }} />
                    ))}
                  </div>

                  {/* Logo image */}
                  <div style={{
                    width: 52, height: 52,
                    borderRadius: "50%",
                    overflow: "hidden",
                    position: "relative", zIndex: 1,
                    boxShadow: logoGlow === 0
                      ? "0 0 20px rgba(10,27,92,0.2), 0 0 40px rgba(10,27,92,0.08)"
                      : logoGlow === 1
                      ? "0 0 28px rgba(30,79,216,0.3), 0 0 56px rgba(30,79,216,0.1)"
                      : "0 0 16px rgba(10,27,92,0.15), 0 0 32px rgba(10,27,92,0.06)",
                    transition: "box-shadow 1.2s ease",
                    border: "2px solid rgba(10,27,92,0.12)",
                    background: "#fff",
                  }}>
                    <img
                      src="/TechInnosphere_Logo.png"
                      alt="TechInnosphere"
                      style={{
                        width: "180%", height: "180%",
                        objectFit: "cover",
                        objectPosition: "left center",
                        marginLeft: "-30%", marginTop: "-30%",
                        filter: "brightness(1.0) saturate(1.2)",
                      }}
                    />
                  </div>

                  {/* Glow base */}
                  <div style={{
                    position: "absolute", width: 52, height: 52, borderRadius: "50%",
                    background: "radial-gradient(circle,rgba(10,27,92,0.12) 0%,transparent 70%)",
                    top: "50%", left: "50%", transform: "translate(-50%,-50%)",
                    zIndex: 0, transition: "opacity 1.2s ease",
                    opacity: logoGlow === 1 ? 1 : 0.5,
                  }} />
                </div>

                {/* Divider */}
                <div style={{ width:"80%", height:1, background:"rgba(10,27,92,0.08)", marginBottom:14, flexShrink:0 }} />

                {/* Animated service list */}
                <div style={{ width:"100%", display:"flex", flexDirection:"column", gap:6 }}>
                  {services.map((s, i) => {
                    const isActive = i === activeService;
                    return (
                      <div key={s.label} className="service-row" style={{
                        display: "flex", alignItems: "center", gap: 8,
                        padding: "7px 10px", borderRadius: 8,
                        background: isActive ? s.dim : "transparent",
                        border: `1px solid ${isActive ? s.color + "30" : "transparent"}`,
                        transition: "all 0.4s ease",
                      }}>
                        <div style={{
                          width: 6, height: 6, borderRadius: "50%", flexShrink: 0,
                          background: isActive ? s.color : "#CBD5E1",
                          boxShadow: isActive ? `0 0 8px ${s.color}60` : "none",
                          transition: "all 0.4s ease",
                        }} />
                        <span style={{
                          fontSize: 11, fontWeight: 600,
                          color: isActive ? s.color : "#94A3B8",
                          letterSpacing: "0.04em",
                          transition: "color 0.4s ease", flex: 1,
                        }}>{s.label}</span>
                        {isActive && (
                          <div style={{
                            fontSize: 9, color: s.color, fontWeight: 700,
                            letterSpacing: "0.1em", textTransform: "uppercase",
                            animation: "serviceIn 0.3s ease both",
                          }}>● LIVE</div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Floating labels */}
              {[
                { label: "🤖 AI/ML",        top: "2%",    right: "2%"   },
                { label: "💻 Software Dev",  top: "25%",   left: "-12%"  },
                { label: "☁️ SaaS",          bottom: "25%",right: "-8%"  },
                { label: "🔒 Cybersecurity", bottom: "3%", left: "5%"    },
              ].map(({ label, ...pos }, i) => (
                <div key={label} style={{
                  position: "absolute", ...pos,
                  background: "#FFFFFF",
                  border: "1.5px solid rgba(10,27,92,0.12)",
                  borderRadius: 10, padding: "8px 14px",
                  fontSize: 13, fontWeight: 700, color: "#0A1B5C",
                  boxShadow: "0 4px 20px rgba(10,27,92,0.08)",
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