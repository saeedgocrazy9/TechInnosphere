import { useState, useEffect } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [typed, setTyped] = useState("");
  const [activeService, setActiveService] = useState(0);
  const [logoGlow, setLogoGlow] = useState(0);
  const [activeTag, setActiveTag] = useState(null);
  const [showBanner, setShowBanner] = useState(false);

  const words = ["Software", "AI Solutions", "Automation", "SaaS Products", "Digital Future"];

  const services = [
    { label: "Artificial Intelligence",  color: "#1E4FD8", dim: "rgba(30,79,216,0.07)"  },
    { label: "Full Stack Development",   color: "#0A1B5C", dim: "rgba(10,27,92,0.07)"   },
    { label: "Cybersecurity",            color: "#1D4ED8", dim: "rgba(29,78,216,0.07)"  },
    { label: "Business Intelligence",    color: "#2563EB", dim: "rgba(37,99,235,0.07)"  },
  ];

  const tags = ["AI & Machine Learning", "Software Development", "Cybersecurity", "Business Intelligence", "Automation", "SaaS Products"];

  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  useEffect(() => {
    const id = setInterval(() => setActiveService(p => (p + 1) % services.length), 2200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setLogoGlow(p => (p + 1) % 3), 1400);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let i = 0, deleting = false, current = 0;
    const tick = () => {
      const word = words[current];
      if (!deleting) {
        setTyped(word.slice(0, i + 1)); i++;
        if (i === word.length) { deleting = true; setTimeout(tick, 2000); return; }
      } else {
        setTyped(word.slice(0, i - 1)); i--;
        if (i === 0) { deleting = false; current = (current + 1) % words.length; }
      }
      setTimeout(tick, deleting ? 45 : 85);
    };
    const t = setTimeout(tick, 800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById("home");
      if (heroEl) {
        const top = heroEl.getBoundingClientRect().top;
        const bottom = heroEl.getBoundingClientRect().bottom;
        setShowBanner(top <= 75 && bottom > 185);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };

  return (
    <section id="home" style={{
      minHeight: "100vh",
      background: "#FFFFFF",
      position: "relative", overflow: "hidden",
      display: "flex", alignItems: "center",
      fontFamily: "'Segoe UI', system-ui, sans-serif",
    }}>
      <style>{`
        @keyframes floatUp     { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-10px);} }
        @keyframes rotateSlow  { from{transform:rotate(0deg);} to{transform:rotate(360deg);} }
        @keyframes blink       { 0%,100%{opacity:1;} 50%{opacity:0;} }
        @keyframes fadeUp      { from{opacity:0;transform:translateY(28px);} to{opacity:1;transform:translateY(0);} }
        @keyframes fadeDown    { from{opacity:0;transform:translateY(-12px);} to{opacity:1;transform:translateY(0);} }
        @keyframes pulseGreen  { 0%,100%{box-shadow:0 0 0 0 rgba(22,163,74,0.45);} 70%{box-shadow:0 0 0 7px rgba(22,163,74,0);} }
        @keyframes scanLine    { 0%{top:-30%;} 100%{top:130%;} }
        @keyframes serviceIn   { from{opacity:0;transform:translateX(-5px);} to{opacity:1;transform:translateX(0);} }
        @keyframes activePulse { 0%,100%{opacity:1;} 50%{opacity:0.5;} }

        .h-btn-primary {
          display: inline-flex; align-items: center; gap: 10px;
          background: linear-gradient(135deg, #0A1B5C 0%, #1E4FD8 100%);
          border: none; color: #fff; font-weight: 700; font-size: 15px;
          padding: 14px 28px; border-radius: 8px; cursor: pointer;
          letter-spacing: 0.02em;
          box-shadow: 0 4px 18px rgba(10,27,92,0.28), 0 1px 3px rgba(10,27,92,0.18);
          transition: all 0.2s ease; white-space: nowrap; position: relative; overflow: hidden;
        }
        .h-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(10,27,92,0.38); }

        .h-btn-secondary {
          display: inline-flex; align-items: center; gap: 10px;
          background: transparent; border: 1.5px solid rgba(10,27,92,0.18);
          color: #0A1B5C; font-weight: 600; font-size: 15px;
          padding: 13px 28px; border-radius: 8px; cursor: pointer;
          transition: all 0.2s ease; white-space: nowrap; letter-spacing: 0.02em;
        }
        .h-btn-secondary:hover {
          background: #0A1B5C; color: #fff; border-color: #0A1B5C;
          transform: translateY(-2px); box-shadow: 0 8px 24px rgba(10,27,92,0.2);
        }

        .h-tag {
          display: inline-flex; align-items: center; gap: 6px;
          background: #F8FAFF; border: 1px solid rgba(10,27,92,0.1);
          color: #334155; font-size: 13px; font-weight: 600;
          padding: 7px 14px; border-radius: 6px; cursor: default;
          transition: all 0.18s ease; white-space: nowrap; letter-spacing: 0.01em;
        }
        .h-tag:hover {
          background: #0A1B5C; color: #fff; border-color: #0A1B5C;
          transform: translateY(-2px); box-shadow: 0 4px 12px rgba(10,27,92,0.15);
        }
        .h-tag:hover .tag-dot { background: rgba(255,255,255,0.7) !important; }

        .h-service-row { transition: all 0.38s ease; cursor: default; border-radius: 7px; }

        .desc-row {
          display: flex; align-items: center; gap: 0;
          padding: 14px 0;
        }
        .desc-row:not(:last-child) { border-bottom: 1px solid rgba(10,27,92,0.07); }

        @media (max-width:1100px) { .h-grid{flex-direction:column!important;} .h-visual{display:none!important;} }
        @media (max-width:768px) {
          .h-inner { padding: 270px 5% 60px !important; }
          .h-btns  { flex-direction:column!important; align-items:stretch!important; }
          .h-btns button { width:100%!important; justify-content:center; }
        }
      `}</style>

      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `radial-gradient(circle, rgba(10,27,92,0.07) 1px, transparent 1px)`,
        backgroundSize: "32px 32px",
        pointerEvents: "none", opacity: 0.55,
      }} />

      {/* Top-right glow */}
      <div style={{
        position: "absolute", top: "-20%", right: "-10%",
        width: "55vw", height: "70vh",
        background: "radial-gradient(ellipse, rgba(10,27,92,0.055) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      {/* Bottom-left glow */}
      <div style={{
        position: "absolute", bottom: "-10%", left: "-5%",
        width: "40vw", height: "50vh",
        background: "radial-gradient(ellipse, rgba(30,79,216,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Left accent stripe */}
      <div style={{
        position: "absolute", left: 0, top: 0, bottom: 0, width: 3,
        background: "linear-gradient(180deg, transparent 0%, #0A1B5C 30%, #1E4FD8 65%, transparent 100%)",
        opacity: 0.14, pointerEvents: "none",
      }} />

      {/* ══════════════════════════════════
          LOGO BANNER — fixed below navbar
      ══════════════════════════════════ */}
      <div style={{
        position: "fixed",
        top: 75, left: 0, right: 0,
        height: 110,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "0 5%",
        background: "rgba(255,255,255,0.98)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(10,27,92,0.08)",
        boxShadow: "0 4px 24px rgba(10,27,92,0.05)",
        zIndex: 999,
        opacity: visible && showBanner ? 1 : 0,
        transform: visible && showBanner ? "translateY(0)" : "translateY(-6px)",
        transition: "opacity 0.25s ease, transform 0.25s ease",
        pointerEvents: "none",
      }}>
        {/* Left line */}
        <div style={{
          flex: 1, height: 1,
          background: "linear-gradient(90deg, transparent, rgba(10,27,92,0.1))",
          marginRight: 48,
        }} />

        {/* Logo */}
        <div style={{
          display: "flex", flexDirection: "column",
          alignItems: "center", gap: 6, flexShrink: 0,
        }}>
          <img
            src="/TechInnosphere_Logo.png"
            alt="TechInnosphere"
            style={{
              height: 72, width: "auto",
              objectFit: "contain", display: "block",
              filter: "drop-shadow(0 4px 16px rgba(10,27,92,0.12))",
            }}
          />
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 24, height: 1, background: "rgba(10,27,92,0.15)" }} />
            <span style={{
              fontSize: 10, fontWeight: 700, color: "#94A3B8",
              letterSpacing: "0.25em", textTransform: "uppercase",
            }}>Private Limited</span>
            <div style={{ width: 24, height: 1, background: "rgba(10,27,92,0.15)" }} />
          </div>
        </div>

        {/* Right line */}
        <div style={{
          flex: 1, height: 1,
          background: "linear-gradient(90deg, rgba(10,27,92,0.1), transparent)",
          marginLeft: 48,
        }} />
      </div>

      {/* ══════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════ */}
      <div className="h-inner" style={{
        width: "100%", maxWidth: 1360, margin: "0 auto",
        padding: "260px 4% 80px",
        position: "relative", zIndex: 1,
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(20px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}>
        <div className="h-grid" style={{ display: "flex", alignItems: "center", gap: 80 }}>

          {/* ══ LEFT CONTENT ══ */}
          <div style={{ flex: "1 1 540px", maxWidth: 660 }}>

            {/* Status badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "#F0F7FF", border: "1px solid rgba(10,27,92,0.12)",
              borderRadius: 6, padding: "8px 16px", marginBottom: 40,
              animation: "fadeUp 0.5s ease both",
            }}>
              <div style={{
                width: 8, height: 8, borderRadius: "50%", background: "#16A34A",
                animation: "pulseGreen 2s ease-in-out infinite", flexShrink: 0,
              }} />
              <span style={{ fontSize: 12, color: "#0A1B5C", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Innovation-Driven Technology Company
              </span>
            </div>

            {/* Headline */}
            <div style={{ marginBottom: 0, animation: "fadeUp 0.6s ease 0.08s both" }}>
              <div style={{ fontSize: "clamp(40px, 4.8vw, 70px)", fontWeight: 900, color: "#0A1B5C", lineHeight: 1.02, letterSpacing: "-0.04em" }}>
                From Vision to
              </div>
              <div style={{ fontSize: "clamp(40px, 4.8vw, 70px)", fontWeight: 900, lineHeight: 1.02, letterSpacing: "-0.04em", minHeight: "1.05em" }}>
                <span style={{
                  background: "linear-gradient(135deg, #0A1B5C 0%, #1E4FD8 55%, #3B82F6 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>{typed || "\u00A0"}</span>
                <span style={{ color: "#1E4FD8", animation: "blink 1s step-end infinite", WebkitTextFillColor: "#1E4FD8" }}>|</span>
              </div>
              <div style={{ fontSize: "clamp(40px, 4.8vw, 70px)", fontWeight: 900, color: "#0A1B5C", lineHeight: 1.02, letterSpacing: "-0.04em" }}>
                We Build It All.
              </div>
            </div>

            {/* Accent bar */}
            <div style={{
              display: "flex", alignItems: "center", gap: 10,
              margin: "24px 0 32px",
              animation: "fadeUp 0.6s ease 0.14s both",
            }}>
              <div style={{ width: 52, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0A1B5C, #1E4FD8)" }} />
              <div style={{ width: 12, height: 3, borderRadius: 2, background: "#3B82F6", opacity: 0.45 }} />
              <div style={{ width: 6, height: 3, borderRadius: 2, background: "#3B82F6", opacity: 0.2 }} />
            </div>

            {/* Description rows */}
            <div style={{ marginBottom: 32, animation: "fadeUp 0.6s ease 0.18s both" }}>
              {[
                { num: "01", text: "End-to-end software engineering",   sub: "Built from ground up, tailored precisely to your business." },
                { num: "02", text: "AI-powered automation & analytics", sub: "Intelligent systems that learn, adapt, and work for you." },
                { num: "03", text: "Enterprise digital transformation", sub: "Modern, scalable solutions for the modern business landscape." },
              ].map(({ num, text, sub }, i) => (
                <div key={i} className="desc-row">
                  <span style={{
                    fontSize: 11, fontWeight: 900, color: "#1E4FD8",
                    letterSpacing: "0.1em", minWidth: 30, flexShrink: 0,
                  }}>{num}</span>
                  <div style={{
                    width: 2, height: 38, borderRadius: 2,
                    background: "linear-gradient(180deg, #0A1B5C, #1E4FD8)",
                    marginRight: 16, flexShrink: 0,
                  }} />
                  <div>
                    <div style={{
                      fontSize: "clamp(15px, 1.3vw, 17px)",
                      fontWeight: 800, color: "#0A1B5C",
                      letterSpacing: "-0.01em", lineHeight: 1.3,
                    }}>{text}</div>
                    <div style={{
                      fontSize: "clamp(13px, 1vw, 14px)",
                      fontWeight: 500, color: "#64748B",
                      letterSpacing: "0.01em", lineHeight: 1.5, marginTop: 2,
                    }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Capability tags */}
            <div style={{
              display: "flex", flexWrap: "wrap", gap: 8,
              marginBottom: 40,
              animation: "fadeUp 0.6s ease 0.22s both",
            }}>
              {tags.map((tag, i) => (
                <span key={tag} className="h-tag"
                  onMouseEnter={() => setActiveTag(i)}
                  onMouseLeave={() => setActiveTag(null)}
                >
                  <span className="tag-dot" style={{
                    width: 5, height: 5, borderRadius: "50%",
                    background: activeTag === i ? "rgba(255,255,255,0.7)" : "#1E4FD8",
                    flexShrink: 0, display: "inline-block", transition: "background 0.18s",
                  }} />
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="h-btns" style={{
              display: "flex", gap: 12, flexWrap: "wrap",
              animation: "fadeUp 0.6s ease 0.28s both",
            }}>
              <button className="h-btn-primary" onClick={() => scrollTo("services")}>
                Get Started <ArrowRight size={16} strokeWidth={2.5} />
              </button>
              <button className="h-btn-secondary" onClick={() => scrollTo("contact")}>
                Book a Consultation <ChevronRight size={15} strokeWidth={2.5} />
              </button>
            </div>

          </div>

          {/* ══ RIGHT VISUAL ══ */}
          <div className="h-visual" style={{
            flex: "0 0 420px",
            display: "flex", justifyContent: "center", alignItems: "center",
            animation: "fadeUp 0.8s ease 0.3s both",
          }}>
            <div style={{ position: "relative", width: 420, height: 460 }}>

              {/* Outer orbit ring */}
              <div style={{
                position: "absolute",
                top: "50%", left: "50%",
                width: 420, height: 420,
                marginTop: -210, marginLeft: -210,
                borderRadius: "50%",
                border: "1px dashed rgba(10,27,92,0.09)",
                animation: "rotateSlow 32s linear infinite",
              }}>
                {[0, 72, 144, 216, 288].map(deg => (
                  <div key={deg} style={{
                    position: "absolute", width: 7, height: 7, borderRadius: "50%",
                    background: "#1E4FD8", boxShadow: "0 0 6px rgba(30,79,216,0.4)",
                    top: "50%", left: "50%",
                    transform: `rotate(${deg}deg) translateX(210px) translate(-50%,-50%)`,
                  }} />
                ))}
              </div>

              {/* Inner orbit ring */}
              <div style={{
                position: "absolute",
                top: "50%", left: "50%",
                width: 300, height: 300,
                marginTop: -150, marginLeft: -150,
                borderRadius: "50%",
                border: "1px dashed rgba(10,27,92,0.06)",
                animation: "rotateSlow 20s linear infinite reverse",
              }}>
                {[0, 120, 240].map(deg => (
                  <div key={deg} style={{
                    position: "absolute", width: 5, height: 5, borderRadius: "50%",
                    background: "#3B82F6", boxShadow: "0 0 5px rgba(59,130,246,0.35)",
                    top: "50%", left: "50%",
                    transform: `rotate(${deg}deg) translateX(150px) translate(-50%,-50%)`,
                  }} />
                ))}
              </div>

              {/* Center card */}
              <div style={{
                position: "absolute",
                top: "50%", left: "50%",
                width: 240, height: 290,
                marginTop: -145, marginLeft: -120,
                background: "#FFFFFF",
                borderRadius: 20,
                border: "1.5px solid rgba(10,27,92,0.09)",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                boxShadow: "0 24px 64px rgba(10,27,92,0.1), 0 4px 16px rgba(10,27,92,0.06)",
                animation: "floatUp 5s ease-in-out infinite",
                overflow: "hidden",
                padding: "24px 20px",
                zIndex: 2,
              }}>
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 3,
                  background: "linear-gradient(90deg, #0A1B5C, #1E4FD8, #3B82F6)",
                  borderRadius: "20px 20px 0 0",
                }} />
                <div style={{
                  position: "absolute", left: 0, right: 0, height: "25%",
                  background: "linear-gradient(180deg, transparent, rgba(10,27,92,0.02), transparent)",
                  animation: "scanLine 4s linear infinite",
                  pointerEvents: "none",
                }} />

                {/* Logo area */}
                <div style={{
                  position: "relative",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 12, flexShrink: 0,
                  width: 90, height: 90,
                }}>
                  <div style={{
                    position: "absolute", inset: 0, borderRadius: "50%",
                    border: "1px solid rgba(10,27,92,0.12)",
                    animation: "rotateSlow 10s linear infinite",
                  }}>
                    {[0, 180].map(deg => (
                      <div key={deg} style={{
                        position: "absolute", width: 5, height: 5, borderRadius: "50%",
                        background: "#0A1B5C", boxShadow: "0 0 4px rgba(10,27,92,0.25)",
                        top: "50%", left: "50%",
                        transform: `rotate(${deg}deg) translateX(45px) translate(-50%,-50%)`,
                      }} />
                    ))}
                  </div>
                  <div style={{
                    position: "absolute",
                    width: 68, height: 68, borderRadius: "50%",
                    border: "1px dashed rgba(30,79,216,0.15)",
                    animation: "rotateSlow 6s linear infinite reverse",
                    top: "50%", left: "50%", marginTop: -34, marginLeft: -34,
                  }}>
                    {[0, 120, 240].map(deg => (
                      <div key={deg} style={{
                        position: "absolute", width: 3, height: 3, borderRadius: "50%",
                        background: "#1E4FD8", top: "50%", left: "50%",
                        transform: `rotate(${deg}deg) translateX(34px) translate(-50%,-50%)`,
                      }} />
                    ))}
                  </div>
                  <img
                    src="/TechInnosphere_Logo.png"
                    alt="TechInnosphere"
                    style={{
                      width: 52, height: 52,
                      objectFit: "contain",
                      position: "relative", zIndex: 1,
                      filter: logoGlow === 1
                        ? "drop-shadow(0 0 8px rgba(30,79,216,0.35))"
                        : "drop-shadow(0 0 5px rgba(10,27,92,0.18))",
                      transition: "filter 1.2s ease",
                    }}
                  />
                </div>

                <div style={{
                  fontSize: 10, fontWeight: 800, color: "#0A1B5C",
                  letterSpacing: "0.16em", textTransform: "uppercase",
                  marginBottom: 12, flexShrink: 0,
                }}>TechInnosphere</div>

                <div style={{
                  width: "100%", height: 1,
                  background: "linear-gradient(90deg, transparent, rgba(10,27,92,0.1), transparent)",
                  marginBottom: 12,
                }} />

                <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 4 }}>
                  {services.map((s, i) => {
                    const isActive = i === activeService;
                    return (
                      <div key={s.label} className="h-service-row" style={{
                        display: "flex", alignItems: "center", gap: 8, padding: "6px 9px",
                        background: isActive ? s.dim : "transparent",
                        border: `1px solid ${isActive ? s.color + "22" : "transparent"}`,
                      }}>
                        <div style={{
                          width: 6, height: 6, borderRadius: "50%", flexShrink: 0,
                          background: isActive ? s.color : "#E2E8F0",
                          boxShadow: isActive ? `0 0 6px ${s.color}50` : "none",
                          transition: "all 0.38s ease",
                        }} />
                        <span style={{
                          fontSize: 10.5, fontWeight: isActive ? 700 : 500,
                          color: isActive ? s.color : "#94A3B8",
                          letterSpacing: "0.03em", flex: 1, transition: "color 0.38s ease",
                        }}>{s.label}</span>
                        {isActive && (
                          <div style={{ display: "flex", alignItems: "center", gap: 4, animation: "serviceIn 0.3s ease both" }}>
                            <div style={{ width: 5, height: 5, borderRadius: "50%", background: s.color, animation: "activePulse 1.5s ease-in-out infinite" }} />
                            <span style={{ fontSize: 9, color: s.color, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Active</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div style={{ width: "100%", height: 1, background: "linear-gradient(90deg, transparent, rgba(10,27,92,0.1), transparent)", margin: "12px 0 10px" }} />
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#16A34A", animation: "activePulse 2s ease-in-out infinite" }} />
                  <span style={{ fontSize: 9, color: "#64748B", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>All Systems Operational</span>
                </div>
              </div>

              {/* Floating labels */}
              {[
                { label: "AI / ML",      tag: "CORE",   top: "6%",     right: "2%"   },
                { label: "Full Stack",   tag: "DEV",    top: "24%",    left: "-12%"  },
                { label: "Cloud & SaaS", tag: "INFRA",  bottom: "24%", right: "-8%"  },
                { label: "Security",     tag: "SHIELD", bottom: "6%",  left: "4%"    },
              ].map(({ label, tag, ...pos }, i) => (
                <div key={label} style={{
                  position: "absolute", ...pos,
                  background: "#FFFFFF", border: "1.5px solid rgba(10,27,92,0.09)",
                  borderRadius: 8, padding: "9px 14px",
                  display: "flex", alignItems: "center", gap: 10,
                  boxShadow: "0 4px 20px rgba(10,27,92,0.07), 0 1px 4px rgba(10,27,92,0.04)",
                  whiteSpace: "nowrap",
                  animation: `floatUp ${3.5 + i * 0.6}s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`, zIndex: 3,
                }}>
                  <div style={{ width: 3, height: 28, borderRadius: 2, background: "linear-gradient(180deg, #0A1B5C, #1E4FD8)", flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 800, color: "#0A1B5C", letterSpacing: "0.02em" }}>{label}</div>
                    <div style={{ fontSize: 9, fontWeight: 700, color: "#94A3B8", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 2 }}>{tag}</div>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}