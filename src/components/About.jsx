import { Monitor, Bot, Smartphone, BarChart3, ShieldCheck, Megaphone, Building2, Zap, Telescope, Target } from "lucide-react";

export default function About() {
  const capabilities = [
    { icon: <Monitor size={22} color="#1E4FD8" strokeWidth={1.8} />, text: "Custom Software & Web Applications" },
    { icon: <Bot size={22} color="#1E4FD8" strokeWidth={1.8} />, text: "AI Automation & Machine Learning" },
    { icon: <Smartphone size={22} color="#1E4FD8" strokeWidth={1.8} />, text: "Mobile App Development" },
    { icon: <BarChart3 size={22} color="#1E4FD8" strokeWidth={1.8} />, text: "Business Intelligence & Analytics" },
    { icon: <ShieldCheck size={22} color="#1E4FD8" strokeWidth={1.8} />, text: "Cybersecurity Solutions" },
    { icon: <Megaphone size={22} color="#1E4FD8" strokeWidth={1.8} />, text: "360° Digital Marketing Services" },
  ];

  return (
    <section id="about" style={{
      background: "#FFFFFF", padding: "110px 4% 100px",
      position: "relative", overflow: "hidden",
      fontFamily: "'Segoe UI', sans-serif",
    }}>
      <style>{`
        @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(36px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes floatUp { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes glowPulse { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
        @keyframes greenPulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(22,163,74,0.4); } 70% { box-shadow: 0 0 0 7px rgba(22,163,74,0); } }

        .about-card {
          background: #FFFFFF;
          border: 1.5px solid rgba(10,27,92,0.09);
          border-radius: 20px; padding: 44px 44px 40px;
          transition: border-color 0.22s ease, transform 0.22s ease, box-shadow 0.22s ease;
          position: relative; overflow: hidden;
        }
        .about-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #0A1B5C, #1E4FD8, transparent);
          opacity: 0; transition: opacity 0.22s ease; border-radius: 20px 20px 0 0;
        }
        .about-card:hover { border-color: rgba(30,79,216,0.25); transform: translateY(-5px); box-shadow: 0 20px 52px rgba(10,27,92,0.09); }
        .about-card:hover::before { opacity: 1; }

        .cap-item {
          display: flex; align-items: center; gap: 16px;
          padding: 15px 18px;
          background: #F8FAFF;
          border: 1.5px solid rgba(10,27,92,0.07);
          border-radius: 12px; transition: all 0.2s ease; cursor: default;
        }
        .cap-item:hover {
          background: rgba(30,79,216,0.05);
          border-color: rgba(30,79,216,0.22);
          transform: translateX(5px);
          box-shadow: 0 4px 16px rgba(10,27,92,0.07);
        }
        .cap-item:hover .cap-arrow { color: #0A1B5C !important; transform: translateX(3px); }
        .cap-arrow { transition: all 0.2s ease; }

        .vm-card {
          flex: 1 1 300px;
          background: #FFFFFF;
          border: 1.5px solid rgba(10,27,92,0.09);
          border-radius: 20px; padding: 48px 44px;
          position: relative; overflow: hidden;
          transition: all 0.22s ease;
        }
        .vm-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #0A1B5C, #1E4FD8, transparent);
          opacity: 0; transition: opacity 0.22s ease; border-radius: 20px 20px 0 0;
        }
        .vm-card:hover { border-color: rgba(30,79,216,0.25); transform: translateY(-5px); box-shadow: 0 20px 52px rgba(10,27,92,0.09); }
        .vm-card:hover::before { opacity: 1; }

        .section-badge {
          display: inline-flex; align-items: center; gap: 10px;
          background: #F0F7FF;
          border: 1px solid rgba(10,27,92,0.12);
          border-radius: 6px; padding: 9px 20px; margin-bottom: 32px;
        }

        @media (max-width: 1100px) { .about-main-grid { flex-direction: column !important; } .vm-row { flex-direction: column !important; } }
        @media (max-width: 768px) { .about-card { padding: 28px !important; } .vm-card { padding: 30px !important; } }
      `}</style>

      {/* Dot grid bg */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `radial-gradient(circle, rgba(10,27,92,0.065) 1px, transparent 1px)`,
        backgroundSize: "32px 32px", pointerEvents: "none", opacity: 0.55,
      }} />
      <div style={{
        position: "absolute", top: "8%", left: "50%", transform: "translateX(-50%)",
        width: "70vw", height: "50vh",
        background: "radial-gradient(ellipse, rgba(10,27,92,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* ── SECTION HEADER ── */}
        <div style={{ textAlign: "center", marginBottom: 72, animation: "fadeSlideUp 0.7s ease both" }}>
          <div className="section-badge" style={{ display: "inline-flex" }}>
            <div style={{
              width: 8, height: 8, borderRadius: "50%",
              background: "#1E4FD8", boxShadow: "0 0 8px rgba(30,79,216,0.5)",
              animation: "glowPulse 2s ease-in-out infinite",
            }} />
            <span style={{ fontSize: 12, color: "#0A1B5C", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>Who We Are</span>
          </div>

          <h2 style={{
            fontSize: "clamp(38px, 4.8vw, 66px)",
            fontWeight: 900, color: "#0A1B5C",
            letterSpacing: "-0.04em", lineHeight: 1.02, marginBottom: 20,
          }}>
            Innovation-Driven{" "}
            <span style={{ background: "linear-gradient(135deg, #0A1B5C, #1E4FD8, #3B82F6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Technology Firm
            </span>
          </h2>

          {/* Accent bar */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 24 }}>
            <div style={{ width: 52, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0A1B5C, #1E4FD8)" }} />
            <div style={{ width: 12, height: 3, borderRadius: 2, background: "#3B82F6", opacity: 0.45 }} />
            <div style={{ width: 6, height: 3, borderRadius: 2, background: "#3B82F6", opacity: 0.2 }} />
          </div>

          <p style={{
            color: "#1E293B", fontSize: "clamp(17px, 1.6vw, 20px)",
            lineHeight: 1.75, maxWidth: 620, margin: "0 auto",
            fontWeight: 600, letterSpacing: "0.005em",
          }}>
            Building the future of technology through{" "}
            <span style={{ color: "#0A1B5C", fontWeight: 800 }}>innovation</span>,{" "}
            <span style={{ color: "#1E4FD8", fontWeight: 800 }}>intelligence</span>, and{" "}
            <span style={{ color: "#0A1B5C", fontWeight: 800 }}>world-class engineering</span>.
          </p>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="about-main-grid" style={{ display: "flex", gap: 24, marginBottom: 24, alignItems: "stretch" }}>

          {/* LEFT — About story */}
          <div className="about-card" style={{ flex: "1 1 500px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 24 }}>
              <div style={{
                width: 60, height: 60, borderRadius: 16,
                background: "linear-gradient(145deg, #0A1B5C, #1E4FD8)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, boxShadow: "0 0 24px rgba(10,27,92,0.2)",
              }}>
                <Building2 size={28} color="#fff" strokeWidth={1.8} />
              </div>
              <div>
                <div style={{ fontSize: 26, fontWeight: 900, color: "#0A1B5C", letterSpacing: "-0.03em", lineHeight: 1.1 }}>About TechInnosphere</div>
                <div style={{ fontSize: 11, color: "#1E4FD8", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", marginTop: 5 }}>Our Story</div>
              </div>
            </div>

            <div style={{ width: "100%", height: 1, background: "linear-gradient(90deg, rgba(10,27,92,0.18), transparent)", marginBottom: 28 }} />

            <p style={{ color: "#1E293B", fontSize: 17, lineHeight: 1.88, marginBottom: 20, fontWeight: 500 }}>
              TechInnosphere is an{" "}
              <span style={{ color: "#1E4FD8", fontWeight: 800, borderBottom: "2px solid rgba(30,79,216,0.25)", paddingBottom: "1px" }}>innovation-driven technology firm</span>{" "}
              offering end-to-end software solutions, AI-powered analytics, automation, and enterprise digital systems.
            </p>
            <p style={{ color: "#1E293B", fontSize: 17, lineHeight: 1.88, marginBottom: 20, fontWeight: 500 }}>
              Currently operating as a{" "}
              <span style={{ color: "#1E4FD8", fontWeight: 700 }}>proprietorship</span>, the startup aims to transition into{" "}
              <span style={{ color: "#0A1B5C", fontWeight: 900 }}>TechInnosphere Pvt. Ltd.</span>, expanding into a future global innovation hub.
            </p>
            <p style={{ color: "#1E293B", fontSize: 17, lineHeight: 1.88, marginBottom: 36, fontWeight: 500 }}>
              We transform bold ideas into{" "}
              <span style={{ color: "#1E4FD8", fontWeight: 800, borderBottom: "2px solid rgba(30,79,216,0.25)", paddingBottom: "1px" }}>high-performance, scalable digital products</span>{" "}
              — serving startups, mid-market companies, and large enterprises across all industries.
            </p>

            <div style={{
              display: "inline-flex", alignItems: "center", gap: 12,
              background: "rgba(22,163,74,0.05)", border: "1.5px solid rgba(22,163,74,0.18)",
              borderRadius: 10, padding: "14px 22px",
            }}>
              <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#16A34A", animation: "greenPulse 2s ease-in-out infinite", flexShrink: 0 }} />
              <span style={{ fontSize: 14, color: "#15803D", fontWeight: 700, letterSpacing: "0.01em" }}>Transitioning to TechInnosphere Pvt. Ltd.</span>
            </div>
          </div>

          {/* RIGHT — Capabilities */}
          <div className="about-card" style={{ flex: "1 1 400px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 24 }}>
              <div style={{
                width: 60, height: 60, borderRadius: 16,
                background: "linear-gradient(145deg, #0A1B5C, #1E4FD8)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, boxShadow: "0 0 24px rgba(10,27,92,0.2)",
              }}>
                <Zap size={28} color="#fff" strokeWidth={1.8} />
              </div>
              <div>
                <div style={{ fontSize: 26, fontWeight: 900, color: "#0A1B5C", letterSpacing: "-0.03em", lineHeight: 1.1 }}>End-to-End Capabilities</div>
                <div style={{ fontSize: 11, color: "#1E4FD8", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", marginTop: 5 }}>What We Do</div>
              </div>
            </div>

            <div style={{ width: "100%", height: 1, background: "linear-gradient(90deg, rgba(10,27,92,0.18), transparent)", marginBottom: 24 }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {capabilities.map(({ icon, text }) => (
                <div key={text} className="cap-item">
                  <div style={{
                    width: 44, height: 44, borderRadius: 11,
                    background: "rgba(10,27,92,0.05)",
                    border: "1.5px solid rgba(10,27,92,0.09)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>{icon}</div>
                  <span style={{ color: "#0A1B5C", fontSize: 16, fontWeight: 700, lineHeight: 1.35, flex: 1 }}>{text}</span>
                  <span className="cap-arrow" style={{ color: "#1E4FD8", fontSize: 18, flexShrink: 0, display: "inline-block" }}>→</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── VISION + MISSION ── */}
        <div className="vm-row" style={{ display: "flex", gap: 24 }}>

          {/* Vision */}
          <div className="vm-card">
            <div style={{
              position: "absolute", top: -50, right: -50, width: 220, height: 220,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(10,27,92,0.04) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
            <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 24, position: "relative" }}>
              <div style={{
                width: 64, height: 64, borderRadius: 18,
                background: "linear-gradient(145deg, #0A1B5C, #1E4FD8)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, boxShadow: "0 0 28px rgba(10,27,92,0.2)",
                animation: "floatUp 4s ease-in-out infinite",
              }}>
                <Telescope size={30} color="#fff" strokeWidth={1.8} />
              </div>
              <div>
                <div style={{ fontSize: 32, fontWeight: 900, color: "#0A1B5C", letterSpacing: "-0.04em", lineHeight: 1.05 }}>Our Vision</div>
                <div style={{ fontSize: 11, color: "#1E4FD8", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", marginTop: 5 }}>Where We're Going</div>
              </div>
            </div>
            <div style={{ width: "100%", height: 1, background: "linear-gradient(90deg, rgba(10,27,92,0.15), transparent)", marginBottom: 24 }} />
            <p style={{ color: "#1E293B", fontSize: 17, lineHeight: 1.88, fontWeight: 500, position: "relative" }}>
              To transform the digital ecosystem by creating{" "}
              <span style={{ color: "#1E4FD8", fontWeight: 800, borderBottom: "2px solid rgba(30,79,216,0.25)", paddingBottom: "1px" }}>intelligent, scalable, and future-ready</span>{" "}
              technology solutions that redefine how businesses operate and compete in a rapidly evolving world.
            </p>
          </div>

          {/* Mission */}
          <div className="vm-card">
            <div style={{
              position: "absolute", top: -50, right: -50, width: 220, height: 220,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(10,27,92,0.04) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
            <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 24, position: "relative" }}>
              <div style={{
                width: 64, height: 64, borderRadius: 18,
                background: "linear-gradient(145deg, #0A1B5C, #1E4FD8)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, boxShadow: "0 0 28px rgba(10,27,92,0.2)",
                animation: "floatUp 4s ease-in-out infinite", animationDelay: "1.2s",
              }}>
                <Target size={30} color="#fff" strokeWidth={1.8} />
              </div>
              <div>
                <div style={{ fontSize: 32, fontWeight: 900, color: "#0A1B5C", letterSpacing: "-0.04em", lineHeight: 1.05 }}>Our Mission</div>
                <div style={{ fontSize: 11, color: "#1E4FD8", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", marginTop: 5 }}>What Drives Us</div>
              </div>
            </div>
            <div style={{ width: "100%", height: 1, background: "linear-gradient(90deg, rgba(10,27,92,0.15), transparent)", marginBottom: 24 }} />
            <p style={{ color: "#1E293B", fontSize: 17, lineHeight: 1.88, fontWeight: 500, position: "relative" }}>
              To empower businesses through{" "}
              <span style={{ color: "#1E4FD8", fontWeight: 800, borderBottom: "2px solid rgba(30,79,216,0.25)", paddingBottom: "1px" }}>innovation, AI integration, cybersecurity excellence</span>,{" "}
              and world-class engineering — bridging the gap between ambitious business goals and cutting-edge modern technology.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}