import { TrendingUp, Database, Code2, Brain, Bus, Landmark, GraduationCap, Rocket, Star, Award, Building, BarChart3, Globe, Flag } from "lucide-react";

export default function IITProjects() {
  const tradingFeatures = [
    { icon: <TrendingUp size={22} color="#1E4FD8" strokeWidth={1.8} />, title: "Rule-Based Algorithmic Trading System", desc: "Advanced trading strategies powered by data-driven rules" },
    { icon: <Database size={22} color="#1E4FD8" strokeWidth={1.8} />, title: "Real Market Data Analysis", desc: "Live market data integration and analysis" },
    { icon: <Code2 size={22} color="#1E4FD8" strokeWidth={1.8} />, title: "Python Backtesting Framework", desc: "Comprehensive backtesting and validation system" },
    { icon: <Brain size={22} color="#1E4FD8" strokeWidth={1.8} />, title: "AI-Driven Trading Intelligence", desc: "Machine learning for predictive trading insights" },
  ];

  const aarohanFeatures = [
    { icon: <Bus size={22} color="#D97706" strokeWidth={1.8} />, title: "Smart Transport & Traffic Systems", desc: "Intelligent transportation and traffic management solutions" },
    { icon: <Landmark size={22} color="#D97706" strokeWidth={1.8} />, title: "Digital Governance Platforms", desc: "Digital and inclusive governance technologies" },
    { icon: <GraduationCap size={22} color="#D97706" strokeWidth={1.8} />, title: "Next-Gen Education & Skilling", desc: "Future-ready education and skill development prototypes" },
  ];

  return (
    <section id="iit-projects" style={{
      background: "#F8FAFF", padding: "120px 4%",
      position: "relative", overflow: "hidden",
      fontFamily: "'Segoe UI', system-ui, sans-serif",
    }}>
      <style>{`
        @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes glowPulse   { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
        @keyframes floatUp     { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes pulseAmber  { 0%, 100% { box-shadow: 0 0 0 0 rgba(217,119,6,0.4); } 70% { box-shadow: 0 0 0 8px rgba(217,119,6,0); } }

        .project-card {
          background: #FFFFFF;
          border: 1.5px solid rgba(10,27,92,0.08);
          border-radius: 24px;
          padding: 52px 48px;
          position: relative; overflow: hidden;
          transition: all 0.25s ease;
          display: flex; flex-direction: column;
          box-shadow: 0 2px 12px rgba(10,27,92,0.04);
        }
        .project-card:hover {
          border-color: rgba(30,79,216,0.2);
          transform: translateY(-6px);
          box-shadow: 0 28px 70px rgba(10,27,92,0.1);
        }
        .project-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #0A1B5C, #1E4FD8, #3B82F6);
          opacity: 0; transition: opacity 0.25s ease;
        }
        .project-card:hover::before { opacity: 1; }

        .feature-item {
          display: flex; align-items: flex-start; gap: 18px;
          padding: 20px 22px;
          background: rgba(10,27,92,0.02);
          border: 1px solid rgba(10,27,92,0.08);
          border-radius: 14px;
          transition: all 0.2s ease; cursor: default;
        }
        .feature-item:hover {
          background: rgba(30,79,216,0.05);
          border-color: rgba(30,79,216,0.2);
          transform: translateX(6px);
        }
        .feature-item-amber {
          display: flex; align-items: flex-start; gap: 18px;
          padding: 20px 22px;
          background: rgba(217,119,6,0.03);
          border: 1px solid rgba(217,119,6,0.1);
          border-radius: 14px;
          transition: all 0.2s ease; cursor: default;
        }
        .feature-item-amber:hover {
          background: rgba(217,119,6,0.07);
          border-color: rgba(217,119,6,0.25);
          transform: translateX(6px);
        }

        .iit-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 7px 16px;
          background: rgba(217,119,6,0.08);
          border: 1px solid rgba(217,119,6,0.25);
          border-radius: 6px;
          font-size: 12px; font-weight: 700; color: #B45309;
          letter-spacing: 0.1em; text-transform: uppercase;
        }

        @media (max-width: 1100px) { .projects-grid { flex-direction: column !important; } }
        @media (max-width: 768px)  {
          .project-card { padding: 32px 24px !important; }
          .features-grid { grid-template-columns: 1fr !important; }
          .banner-stats { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>

      {/* Dot grid — same as Hero */}
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

      <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* ── HEADER ── */}
        <div style={{ textAlign: "center", marginBottom: 80, animation: "fadeSlideUp 0.7s ease both" }}>

          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "#F0F7FF", border: "1px solid rgba(10,27,92,0.12)",
            borderRadius: 6, padding: "8px 16px", marginBottom: 40,
          }}>
            <div style={{
              width: 8, height: 8, borderRadius: "50%", background: "#1E4FD8",
              boxShadow: "0 0 8px rgba(30,79,216,0.5)", animation: "glowPulse 2s ease-in-out infinite",
            }} />
            <span style={{ fontSize: 12, color: "#0A1B5C", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              IIT Bombay Techfest
            </span>
          </div>

          {/* Headline — matches Hero clamp */}
          <div style={{ marginBottom: 0 }}>
            <div style={{
              fontSize: "clamp(40px, 4.8vw, 70px)", fontWeight: 900,
              color: "#0A1B5C", lineHeight: 1.02, letterSpacing: "-0.04em",
            }}>
              Innovation at
            </div>
            <div style={{
              fontSize: "clamp(40px, 4.8vw, 70px)", fontWeight: 900,
              lineHeight: 1.02, letterSpacing: "-0.04em",
            }}>
              <span style={{
                background: "linear-gradient(135deg, #0A1B5C 0%, #1E4FD8 55%, #3B82F6 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>IIT Bombay</span>
            </div>
          </div>

          {/* Accent bar — same as Hero */}
          <div style={{
            display: "flex", alignItems: "center", gap: 10,
            margin: "24px auto 32px", justifyContent: "center",
          }}>
            <div style={{ width: 52, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0A1B5C, #1E4FD8)" }} />
            <div style={{ width: 12, height: 3, borderRadius: 2, background: "#3B82F6", opacity: 0.45 }} />
            <div style={{ width: 6, height: 3, borderRadius: 2, background: "#3B82F6", opacity: 0.2 }} />
          </div>

          {/* Subtitle */}
          <p style={{
            color: "#1E293B", fontSize: "clamp(17px, 1.5vw, 20px)",
            lineHeight: 1.75, maxWidth: 640, margin: "0 auto",
            fontWeight: 600, letterSpacing: "0.005em",
          }}>
            TechInnosphere's credibility is anchored in our founders' participation in{" "}
            <span style={{ color: "#1E4FD8", fontWeight: 800, borderBottom: "2px solid rgba(30,79,216,0.3)", paddingBottom: "1px" }}>
              Techfest IIT Bombay
            </span>
            , one of Asia's biggest technology platforms.
          </p>
        </div>

        {/* ── IIT BOMBAY BANNER ── */}
        <div style={{
          marginBottom: 48,
          padding: "32px 44px",
          background: "linear-gradient(135deg, rgba(217,119,6,0.04), rgba(10,27,92,0.04))",
          border: "1.5px solid rgba(217,119,6,0.18)",
          borderRadius: 20,
          display: "flex", alignItems: "center", gap: 28,
          flexWrap: "wrap", position: "relative", overflow: "hidden",
        }}>
          {/* Left accent */}
          <div style={{
            position: "absolute", left: 0, top: 0, bottom: 0, width: 4,
            background: "linear-gradient(180deg, #92400E, #D97706)",
            borderRadius: "20px 0 0 20px",
          }} />
          <div style={{
            position: "absolute", right: -40, top: -40, width: 220, height: 220,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(217,119,6,0.04) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <div style={{
            width: 72, height: 72, borderRadius: 18,
            background: "linear-gradient(145deg, #92400E, #D97706)",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0, boxShadow: "0 8px 28px rgba(217,119,6,0.25)",
            animation: "floatUp 4s ease-in-out infinite",
          }}>
            <Building size={32} color="#FCD34D" strokeWidth={1.6} />
          </div>

          <div style={{ flex: 1 }}>
            <div style={{
              fontSize: "clamp(22px, 2.2vw, 30px)", fontWeight: 900,
              color: "#0A1B5C", letterSpacing: "-0.03em", marginBottom: 8,
            }}>
              Techfest IIT Bombay
            </div>
            <div style={{
              color: "#475569", fontSize: "clamp(15px, 1.2vw, 17px)",
              lineHeight: 1.7, fontWeight: 500,
            }}>
              Asia's largest science & technology festival —{" "}
              <span style={{ color: "#B45309", fontWeight: 700 }}>our founders compete at the highest level</span>
            </div>
          </div>

          <div className="banner-stats" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            {[
              { icon: <Award size={20} color="#B45309" strokeWidth={1.8} />, line1: "Asia's Biggest", line2: "Tech Platform" },
              { icon: <BarChart3 size={20} color="#B45309" strokeWidth={1.8} />, line1: "2 Projects", line2: "Active" },
              { icon: <Star size={20} color="#B45309" strokeWidth={1.8} />, line1: "IIT Bombay", line2: "Validated" },
            ].map(({ icon, line1, line2 }) => (
              <div key={line1} style={{
                textAlign: "center", background: "#FFFFFF",
                border: "1px solid rgba(217,119,6,0.15)",
                borderRadius: 14, padding: "16px 22px",
                display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
                boxShadow: "0 2px 8px rgba(10,27,92,0.05)",
              }}>
                {icon}
                <div style={{ fontSize: 15, fontWeight: 800, color: "#B45309" }}>{line1}</div>
                <div style={{ fontSize: 12, color: "#64748B", fontWeight: 600 }}>{line2}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── TWO PROJECT CARDS ── */}
        <div className="projects-grid" style={{ display: "flex", gap: 28, alignItems: "stretch" }}>

          {/* ── PROJECT 1 — Algorithmic Trading ── */}
          <div className="project-card" style={{ flex: 1 }}>
            <div style={{
              position: "absolute", top: -50, right: -50, width: 260, height: 260,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(10,27,92,0.04) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />

            {/* Card header */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 32 }}>
              <div style={{
                width: 76, height: 76, borderRadius: 20,
                background: "linear-gradient(145deg, #0A1B5C, #1E4FD8)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, boxShadow: "0 8px 28px rgba(10,27,92,0.22)",
                animation: "floatUp 4s ease-in-out infinite",
              }}>
                <TrendingUp size={34} color="#fff" strokeWidth={1.6} />
              </div>
              <div style={{ flex: 1 }}>
                <div className="iit-badge" style={{ marginBottom: 14 }}>
                  <Star size={12} color="#B45309" /> Techfest, IIT Bombay
                </div>
                <h3 style={{
                  fontSize: "clamp(22px, 2vw, 30px)", fontWeight: 900,
                  color: "#0A1B5C", letterSpacing: "-0.03em", lineHeight: 1.2,
                }}>
                  Algorithmic Trading Challenge
                </h3>
              </div>
            </div>

            {/* Divider */}
            <div style={{ width: "100%", height: 1, background: "linear-gradient(90deg, rgba(10,27,92,0.15), transparent)", marginBottom: 28 }} />

            {/* Body text */}
            <p style={{
              color: "#1E293B", fontSize: "clamp(15px, 1.2vw, 17px)",
              lineHeight: 1.85, marginBottom: 20, fontWeight: 500,
            }}>
              Fehed and Omar are designing a{" "}
              <span style={{ color: "#1E4FD8", fontWeight: 700 }}>rule-based algorithmic trading system</span>{" "}
              using real market data. The project involves aptitude and strategy design, Python-based backtesting, and real-world equity trading simulation.
            </p>
            <p style={{
              color: "#1E293B", fontSize: "clamp(15px, 1.2vw, 17px)",
              lineHeight: 1.85, marginBottom: 36, fontWeight: 500,
            }}>
              This challenge combines{" "}
              <span style={{ color: "#1E4FD8", fontWeight: 700 }}>finance, coding, and AI-driven analytics</span>, preparing them to build TechInnosphere's future AI-based trading intelligence product.
            </p>

            {/* Features grid — 2 cols */}
          {/* Features grid — single col, matches Aarohan card */}
<div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: "auto" }}>
  {tradingFeatures.map(({ icon, title, desc }) => (
    <div key={title} className="feature-item">
      <div style={{
        width: 46, height: 46, borderRadius: 12,
        background: "rgba(10,27,92,0.05)", border: "1px solid rgba(10,27,92,0.1)",
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
      }}>{icon}</div>
      <div>
        <div style={{ fontSize: "clamp(14px, 1.1vw, 16px)", fontWeight: 700, color: "#0A1B5C", marginBottom: 5, lineHeight: 1.3 }}>{title}</div>
        <div style={{ fontSize: "clamp(13px, 1vw, 14px)", color: "#475569", lineHeight: 1.55, fontWeight: 500 }}>{desc}</div>
      </div>
    </div>
  ))}
</div>
          </div>

          {/* ── PROJECT 2 — Aarohan ── */}
          <div className="project-card" style={{ flex: 1 }}>
            <div style={{
              position: "absolute", top: -50, right: -50, width: 260, height: 260,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(217,119,6,0.04) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />

            {/* Card header */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 32 }}>
              <div style={{
                width: 76, height: 76, borderRadius: 20,
                background: "linear-gradient(145deg, #92400E, #D97706)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, boxShadow: "0 8px 28px rgba(217,119,6,0.28)",
                animation: "floatUp 4s ease-in-out infinite", animationDelay: "1s",
              }}>
                <Flag size={34} color="#FCD34D" strokeWidth={1.6} />
              </div>
              <div style={{ flex: 1 }}>
                <div className="iit-badge" style={{ marginBottom: 14 }}>
                  <Award size={12} color="#B45309" /> Techfest, IIT Bombay
                </div>
                <h3 style={{
                  fontSize: "clamp(22px, 2vw, 30px)", fontWeight: 900,
                  color: "#0A1B5C", letterSpacing: "-0.03em", lineHeight: 1.2,
                }}>
                  Aarohan — Viksit Bharat Challenge
                </h3>
              </div>
            </div>

            {/* Divider */}
            <div style={{ width: "100%", height: 1, background: "linear-gradient(90deg, rgba(217,119,6,0.2), transparent)", marginBottom: 28 }} />

            {/* Body text */}
            <p style={{
              color: "#1E293B", fontSize: "clamp(15px, 1.2vw, 17px)",
              lineHeight: 1.85, marginBottom: 20, fontWeight: 500,
            }}>
              Both founders are developing{" "}
              <span style={{ color: "#B45309", fontWeight: 700 }}>Aarohan</span>, a national innovation project shaping India's{" "}
              <span style={{ color: "#1E4FD8", fontWeight: 700 }}>Viksit Bharat 2047</span>{" "}vision.
            </p>
            <p style={{
              color: "#1E293B", fontSize: "clamp(15px, 1.2vw, 17px)",
              lineHeight: 1.85, marginBottom: 36, fontWeight: 500,
            }}>
              They are building tech prototypes focused on{" "}
              <span style={{ color: "#1E4FD8", fontWeight: 700 }}>Public Transport and Traffic Management, Digital and Inclusive Governance,</span>{" "}
              and the{" "}
              <span style={{ color: "#1E4FD8", fontWeight: 700 }}>Future of Education and Skilling</span>.
            </p>

            {/* Features list — single col with amber styling */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {aarohanFeatures.map(({ icon, title, desc }) => (
                <div key={title} className="feature-item-amber">
                  <div style={{
                    width: 46, height: 46, borderRadius: 12,
                    background: "rgba(217,119,6,0.06)", border: "1px solid rgba(217,119,6,0.15)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>{icon}</div>
                  <div>
                    <div style={{ fontSize: "clamp(14px, 1.1vw, 16px)", fontWeight: 700, color: "#0A1B5C", marginBottom: 5, lineHeight: 1.3 }}>{title}</div>
                    <div style={{ fontSize: "clamp(13px, 1vw, 14px)", color: "#475569", lineHeight: 1.55, fontWeight: 500 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Viksit Bharat callout */}
            <div style={{
              marginTop: 32,
              padding: "24px 28px",
              background: "linear-gradient(135deg, rgba(217,119,6,0.05), rgba(10,27,92,0.04))",
              border: "1.5px solid rgba(217,119,6,0.18)",
              borderRadius: 16,
              display: "flex", alignItems: "center", gap: 18,
            }}>
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: "rgba(217,119,6,0.08)", border: "1px solid rgba(217,119,6,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <Rocket size={26} color="#D97706" strokeWidth={1.8} />
              </div>
              <div>
                <div style={{ fontSize: "clamp(16px, 1.3vw, 19px)", fontWeight: 800, color: "#B45309", marginBottom: 5 }}>
                  Viksit Bharat 2047 Vision
                </div>
                <div style={{ fontSize: "clamp(13px, 1vw, 15px)", color: "#475569", lineHeight: 1.6, fontWeight: 500 }}>
                  Building India's future through technology, innovation & inclusive growth
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM CREDIBILITY STRIP ── */}
        <div style={{
          marginTop: 56,
          padding: "40px 48px",
          background: "#FFFFFF",
          border: "1.5px solid rgba(10,27,92,0.08)",
          borderRadius: 20,
          display: "flex", alignItems: "center",
          justifyContent: "space-around",
          flexWrap: "wrap", gap: 32,
          boxShadow: "0 4px 24px rgba(10,27,92,0.05)",
          position: "relative", overflow: "hidden",
        }}>
          {/* Top accent bar */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 3,
            background: "linear-gradient(90deg, #0A1B5C, #1E4FD8, #3B82F6)",
            borderRadius: "20px 20px 0 0",
          }} />

          {[
            { icon: <GraduationCap size={32} color="#1E4FD8" strokeWidth={1.6} />, value: "IIT Bombay", label: "Techfest Participant" },
            { icon: <BarChart3 size={32} color="#1E4FD8" strokeWidth={1.6} />, value: "2 Projects", label: "Simultaneously Active" },
            { icon: <Brain size={32} color="#1E4FD8" strokeWidth={1.6} />, value: "AI + Finance", label: "Cross-Domain Innovation" },
            { icon: <Globe size={32} color="#1E4FD8" strokeWidth={1.6} />, value: "National Level", label: "Viksit Bharat 2047" },
          ].map(({ icon, value, label }) => (
            <div key={value} style={{ textAlign: "center" }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}>{icon}</div>
              <div style={{
                fontSize: "clamp(20px, 1.8vw, 26px)", fontWeight: 900,
                color: "#0A1B5C", letterSpacing: "-0.02em", marginBottom: 6,
              }}>{value}</div>
              <div style={{ fontSize: "clamp(13px, 1vw, 15px)", color: "#64748B", fontWeight: 600 }}>{label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}