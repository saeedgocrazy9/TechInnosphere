import {
  Monitor, Bot, Smartphone, BarChart3,
  ShieldCheck, Megaphone, Building2,
  Zap, Telescope, Target,
} from "lucide-react";

export default function About() {
  const capabilities = [
    { icon: <Monitor size={20} color="#60A5FA" strokeWidth={1.8} />, text: "Custom Software & Web Applications" },
    { icon: <Bot size={20} color="#60A5FA" strokeWidth={1.8} />, text: "AI Automation & Machine Learning" },
    { icon: <Smartphone size={20} color="#60A5FA" strokeWidth={1.8} />, text: "Mobile App Development" },
    { icon: <BarChart3 size={20} color="#60A5FA" strokeWidth={1.8} />, text: "Business Intelligence & Analytics" },
    { icon: <ShieldCheck size={20} color="#60A5FA" strokeWidth={1.8} />, text: "Cybersecurity Solutions" },
    { icon: <Megaphone size={20} color="#60A5FA" strokeWidth={1.8} />, text: "360° Digital Marketing Services" },
  ];

  return (
    <section id="about" style={{
      background: "#020610", padding: "120px 4%",
      position: "relative", overflow: "hidden",
      fontFamily: "'Segoe UI', sans-serif",
    }}>
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatUp {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.5; } 50% { opacity: 1; }
        }
        .about-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(59,130,246,0.12);
          border-radius: 20px; padding: 40px;
          transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .about-card:hover {
          border-color: rgba(59,130,246,0.35);
          transform: translateY(-5px);
          box-shadow: 0 20px 50px rgba(29,78,216,0.12);
        }
        .cap-item {
          display: flex; align-items: center; gap: 16px;
          padding: 16px 20px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(59,130,246,0.1);
          border-radius: 12px; transition: all 0.2s ease; cursor: default;
        }
        .cap-item:hover {
          background: rgba(59,130,246,0.07);
          border-color: rgba(59,130,246,0.3);
          transform: translateX(6px);
        }
        .vm-card {
          flex: 1 1 280px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(59,130,246,0.12);
          border-radius: 20px; padding: 44px;
          position: relative; overflow: hidden;
          transition: all 0.2s ease;
        }
        .vm-card:hover {
          border-color: rgba(59,130,246,0.35);
          transform: translateY(-5px);
          box-shadow: 0 20px 50px rgba(29,78,216,0.15);
        }
        @media (max-width: 1024px) {
          .about-main-grid { flex-direction: column !important; }
          .vm-row { flex-direction: column !important; }
        }
        @media (max-width: 768px) {
          .about-section { padding: 80px 4% !important; }
          .about-card { padding: 24px !important; }
          .vm-card { padding: 28px !important; }
        }
      `}</style>

      {/* BG GRID */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `
          linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "52px 52px", pointerEvents: "none",
      }} />

      <div style={{
        position: "absolute", top: "10%", left: "50%",
        transform: "translateX(-50%)",
        width: "70vw", height: "50vh",
        background: "radial-gradient(ellipse, rgba(29,78,216,0.1) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1600, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: 80, animation: "fadeSlideUp 0.7s ease both" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "rgba(29,78,216,0.1)",
            border: "1px solid rgba(59,130,246,0.25)",
            borderRadius: 50, padding: "10px 24px", marginBottom: 28,
          }}>
            <div style={{
              width: 8, height: 8, borderRadius: "50%",
              background: "#3B82F6", boxShadow: "0 0 8px #3B82F6",
              animation: "glowPulse 2s ease-in-out infinite"
            }} />
            <span style={{
              fontSize: 12, color: "#93C5FD",
              fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase"
            }}>Who We Are</span>
          </div>

          <h2 style={{
            fontSize: "clamp(36px, 4.5vw, 64px)",
            fontWeight: 900, color: "#FFFFFF",
            letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 24,
          }}>
            Innovation-Driven{" "}
            <span style={{
              background: "linear-gradient(90deg, #3B82F6, #60A5FA, #93C5FD)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>Technology Firm</span>
          </h2>

          <div style={{
            width: 72, height: 4, borderRadius: 4,
            background: "linear-gradient(90deg, #1D4ED8, #60A5FA)",
            margin: "0 auto 24px",
          }} />

          <p style={{
            color: "#CBD5E1", fontSize: 18,
            lineHeight: 1.8, maxWidth: 640, margin: "0 auto",
          }}>
            Building the future of technology through innovation,
            intelligence, and world-class engineering.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="about-main-grid" style={{
          display: "flex", gap: 28, marginBottom: 28, alignItems: "stretch",
        }}>

          {/* LEFT */}
          <div className="about-card" style={{ flex: "1 1 480px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
              <div style={{
                width: 56, height: 56, borderRadius: 16,
                background: "linear-gradient(145deg, #1E3A8A, #3B82F6)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, boxShadow: "0 0 24px rgba(59,130,246,0.35)",
              }}>
                <Building2 size={26} color="#fff" strokeWidth={1.8} />
              </div>
              <div>
                <div style={{ fontSize: 24, fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.03em" }}>
                  About TechInnosphere
                </div>
                <div style={{ fontSize: 12, color: "#3B82F6", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 4 }}>
                  Our Story
                </div>
              </div>
            </div>

            <div style={{ width: "100%", height: 1, background: "linear-gradient(90deg, rgba(59,130,246,0.4), transparent)", marginBottom: 28 }} />

            <p style={{ color: "#CBD5E1", fontSize: 17, lineHeight: 1.9, marginBottom: 20 }}>
              TechInnosphere is an{" "}
              <span style={{ color: "#60A5FA", fontWeight: 600 }}>innovation-driven technology firm</span>{" "}
              offering end-to-end software solutions, AI-powered analytics,
              automation, and enterprise digital systems.
            </p>
            <p style={{ color: "#CBD5E1", fontSize: 17, lineHeight: 1.9, marginBottom: 20 }}>
              Currently operating as a{" "}
              <span style={{ color: "#60A5FA", fontWeight: 600 }}>proprietorship</span>, the startup aims
              to transition into{" "}
              <span style={{ color: "#FFFFFF", fontWeight: 700 }}>TechInnosphere Pvt. Ltd.</span>,
              expanding into a future global innovation hub.
            </p>
            <p style={{ color: "#CBD5E1", fontSize: 17, lineHeight: 1.9, marginBottom: 32 }}>
              We transform bold ideas into{" "}
              <span style={{ color: "#60A5FA", fontWeight: 600 }}>high-performance, scalable digital products</span>{" "}
              — serving startups, mid-market companies, and large enterprises across all industries.
            </p>

            <div style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "rgba(34,197,94,0.07)",
              border: "1px solid rgba(34,197,94,0.2)",
              borderRadius: 12, padding: "14px 22px",
            }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 10px #22C55E" }} />
              <span style={{ fontSize: 14, color: "#86EFAC", fontWeight: 600 }}>
                Transitioning to TechInnosphere Pvt. Ltd.
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="about-card" style={{ flex: "1 1 380px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
              <div style={{
                width: 56, height: 56, borderRadius: 16,
                background: "linear-gradient(145deg, #1E3A8A, #3B82F6)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, boxShadow: "0 0 24px rgba(59,130,246,0.35)",
              }}>
                <Zap size={26} color="#fff" strokeWidth={1.8} />
              </div>
              <div>
                <div style={{ fontSize: 24, fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.03em" }}>
                  End-to-End Capabilities
                </div>
                <div style={{ fontSize: 12, color: "#3B82F6", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 4 }}>
                  What We Do
                </div>
              </div>
            </div>

            <div style={{ width: "100%", height: 1, background: "linear-gradient(90deg, rgba(59,130,246,0.4), transparent)", marginBottom: 28 }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {capabilities.map(({ icon, text }) => (
                <div key={text} className="cap-item">
                  <div style={{
                    width: 42, height: 42, borderRadius: 10,
                    background: "rgba(59,130,246,0.1)",
                    border: "1px solid rgba(59,130,246,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>{icon}</div>
                  <span style={{ color: "#E2E8F0", fontSize: 15, fontWeight: 500, lineHeight: 1.4 }}>{text}</span>
                  <span style={{ marginLeft: "auto", color: "#1E3A5F", fontSize: 18, flexShrink: 0 }}>→</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* VISION + MISSION */}
        <div className="vm-row" style={{ display: "flex", gap: 28 }}>

          <div className="vm-card">
            <div style={{
              position: "absolute", top: -40, right: -40,
              width: 200, height: 200, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24, position: "relative" }}>
              <div style={{
                width: 60, height: 60, borderRadius: 16,
                background: "linear-gradient(145deg, #1E3A8A, #3B82F6)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, boxShadow: "0 0 28px rgba(59,130,246,0.4)",
                animation: "floatUp 4s ease-in-out infinite",
              }}>
                <Telescope size={28} color="#fff" strokeWidth={1.8} />
              </div>
              <div>
                <div style={{ fontSize: 32, fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                  Our Vision
                </div>
                <div style={{ fontSize: 12, color: "#3B82F6", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 4 }}>
                  Where We're Going
                </div>
              </div>
            </div>
            <div style={{ width: "100%", height: 1, background: "linear-gradient(90deg, rgba(59,130,246,0.4), transparent)", marginBottom: 24 }} />
            <p style={{ color: "#CBD5E1", fontSize: 17, lineHeight: 1.9 }}>
              To transform the digital ecosystem by creating{" "}
              <span style={{ color: "#60A5FA", fontWeight: 600 }}>intelligent, scalable, and future-ready</span>{" "}
              technology solutions that redefine how businesses operate and compete.
            </p>
          </div>

          <div className="vm-card">
            <div style={{
              position: "absolute", top: -40, right: -40,
              width: 200, height: 200, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24, position: "relative" }}>
              <div style={{
                width: 60, height: 60, borderRadius: 16,
                background: "linear-gradient(145deg, #1E3A8A, #3B82F6)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, boxShadow: "0 0 28px rgba(59,130,246,0.4)",
                animation: "floatUp 4s ease-in-out infinite", animationDelay: "1s",
              }}>
                <Target size={28} color="#fff" strokeWidth={1.8} />
              </div>
              <div>
                <div style={{ fontSize: 32, fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                  Our Mission
                </div>
                <div style={{ fontSize: 12, color: "#3B82F6", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 4 }}>
                  What Drives Us
                </div>
              </div>
            </div>
            <div style={{ width: "100%", height: 1, background: "linear-gradient(90deg, rgba(59,130,246,0.4), transparent)", marginBottom: 24 }} />
            <p style={{ color: "#CBD5E1", fontSize: 17, lineHeight: 1.9 }}>
              To empower businesses through{" "}
              <span style={{ color: "#60A5FA", fontWeight: 600 }}>innovation, AI integration, cybersecurity excellence,</span>{" "}
              and world-class engineering — bridging the gap between ambitious business goals
              and cutting-edge modern technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}