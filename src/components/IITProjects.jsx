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
    <section id="iit-projects" style={{ background: "#F8FAFF", padding: "120px 4%", position: "relative", overflow: "hidden", fontFamily: "'Segoe UI', sans-serif" }}>
      <style>{`
        @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes glowPulse { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
        @keyframes floatUp { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        .project-card { background: #FFFFFF; border: 1.5px solid rgba(10,27,92,0.1); border-radius: 24px; padding: 48px; position: relative; overflow: hidden; transition: all 0.25s ease; }
        .project-card:hover { border-color: rgba(30,79,216,0.3); transform: translateY(-6px); box-shadow: 0 28px 70px rgba(10,27,92,0.1); }
        .project-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, #0A1B5C, #1E4FD8, #3B82F6, transparent); opacity: 0; transition: opacity 0.25s ease; }
        .project-card:hover::before { opacity: 1; }
        .feature-item { display: flex; align-items: flex-start; gap: 18px; padding: 20px 24px; background: rgba(10,27,92,0.02); border: 1px solid rgba(10,27,92,0.08); border-radius: 14px; transition: all 0.2s ease; cursor: default; }
        .feature-item:hover { background: rgba(30,79,216,0.05); border-color: rgba(30,79,216,0.2); transform: translateX(6px); }
        .iit-badge { display: inline-flex; align-items: center; gap: 8px; padding: 8px 18px; background: rgba(217,119,6,0.08); border: 1px solid rgba(217,119,6,0.25); border-radius: 50px; font-size: 12px; font-weight: 700; color: #B45309; letter-spacing: 0.1em; text-transform: uppercase; }
        @media (max-width: 1024px) { .projects-grid { flex-direction: column !important; } }
        @media (max-width: 768px) { .project-card { padding: 28px !important; } .features-grid { grid-template-columns: 1fr !important; } }
      `}</style>

      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(10,27,92,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(10,27,92,0.03) 1px, transparent 1px)`, backgroundSize: "52px 52px", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)", width: "70vw", height: "50vh", background: "radial-gradient(ellipse, rgba(10,27,92,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1600, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: 80, animation: "fadeSlideUp 0.7s ease both" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(10,27,92,0.05)", border: "1px solid rgba(10,27,92,0.12)", borderRadius: 50, padding: "10px 24px", marginBottom: 28 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#1E4FD8", boxShadow: "0 0 8px rgba(30,79,216,0.5)", animation: "glowPulse 2s ease-in-out infinite" }} />
            <span style={{ fontSize: 12, color: "#0A1B5C", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>IIT Bombay Techfest</span>
          </div>
          <h2 style={{ fontSize: "clamp(36px, 4.5vw, 64px)", fontWeight: 900, color: "#0A1B5C", letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 24 }}>
            Innovation at{" "}
            <span style={{ background: "linear-gradient(90deg, #0A1B5C, #1E4FD8, #3B82F6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>IIT Bombay</span>
          </h2>
          <div style={{ width: 72, height: 4, borderRadius: 4, background: "linear-gradient(90deg, #0A1B5C, #1E4FD8)", margin: "0 auto 24px" }} />
          <p style={{ color: "#334155", fontSize: 18, lineHeight: 1.85, maxWidth: 680, margin: "0 auto", fontWeight: 500 }}>
            TechInnosphere's credibility is anchored in our founders' participation in{" "}
            <span style={{ color: "#1E4FD8", fontWeight: 700 }}>Techfest IIT Bombay</span>, one of Asia's biggest technology platforms.
          </p>
        </div>

        {/* IIT BOMBAY BANNER */}
        <div style={{ marginBottom: 60, padding: "32px 44px", background: "linear-gradient(135deg, rgba(217,119,6,0.04), rgba(10,27,92,0.04))", border: "1px solid rgba(217,119,6,0.2)", borderRadius: 20, display: "flex", alignItems: "center", gap: 28, flexWrap: "wrap", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", right: -40, top: -40, width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(circle, rgba(217,119,6,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ width: 72, height: 72, borderRadius: 18, background: "linear-gradient(145deg, #92400E, #B45309)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 0 28px rgba(217,119,6,0.2)", animation: "floatUp 4s ease-in-out infinite" }}>
            <Building size={32} color="#FCD34D" strokeWidth={1.6} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 28, fontWeight: 900, color: "#0A1B5C", letterSpacing: "-0.03em", marginBottom: 6 }}>Techfest IIT Bombay</div>
            <div style={{ color: "#475569", fontSize: 16, lineHeight: 1.7, fontWeight: 500 }}>
              Asia's largest science & technology festival —{" "}
              <span style={{ color: "#B45309", fontWeight: 700 }}>our founders compete at the highest level</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {[
              { icon: <Award size={20} color="#B45309" strokeWidth={1.8} />, line1: "Asia's Biggest", line2: "Tech Platform" },
              { icon: <BarChart3 size={20} color="#B45309" strokeWidth={1.8} />, line1: "2 Projects", line2: "Active" },
              { icon: <Star size={20} color="#B45309" strokeWidth={1.8} />, line1: "IIT Bombay", line2: "Validated" },
            ].map(({ icon, line1, line2 }) => (
              <div key={line1} style={{ textAlign: "center", background: "#FFFFFF", border: "1px solid rgba(217,119,6,0.15)", borderRadius: 14, padding: "16px 22px", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, boxShadow: "0 2px 8px rgba(10,27,92,0.05)" }}>
                {icon}
                <div style={{ fontSize: 15, fontWeight: 800, color: "#B45309" }}>{line1}</div>
                <div style={{ fontSize: 12, color: "#64748B", fontWeight: 600 }}>{line2}</div>
              </div>
            ))}
          </div>
        </div>

        {/* TWO PROJECT CARDS */}
        <div className="projects-grid" style={{ display: "flex", gap: 28 }}>

          {/* PROJECT 1 */}
          <div className="project-card" style={{ flex: 1 }}>
            <div style={{ position: "absolute", top: -50, right: -50, width: 250, height: 250, borderRadius: "50%", background: "radial-gradient(circle, rgba(10,27,92,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />
            <div style={{ display: "flex", alignItems: "flex-start", gap: 18, marginBottom: 32 }}>
              <div style={{ width: 72, height: 72, borderRadius: 18, background: "linear-gradient(145deg, #0A1B5C, #1E4FD8)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 0 28px rgba(10,27,92,0.2)", animation: "floatUp 4s ease-in-out infinite" }}>
                <TrendingUp size={32} color="#fff" strokeWidth={1.6} />
              </div>
              <div style={{ flex: 1 }}>
                <div className="iit-badge" style={{ marginBottom: 12 }}><Star size={12} color="#B45309" />Techfest, IIT Bombay</div>
                <h3 style={{ fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 900, color: "#0A1B5C", letterSpacing: "-0.03em", lineHeight: 1.2 }}>Algorithmic Trading Challenge</h3>
              </div>
            </div>
            <div style={{ width: "100%", height: 1, background: "linear-gradient(90deg, rgba(10,27,92,0.15), transparent)", marginBottom: 28 }} />
            <p style={{ color: "#334155", fontSize: 17, lineHeight: 1.85, marginBottom: 28, fontWeight: 500 }}>
              Fehed and Omar are designing a{" "}
              <span style={{ color: "#1E4FD8", fontWeight: 700 }}>rule-based algorithmic trading system</span>{" "}
              using real market data. The project involves aptitude and strategy design, Python-based backtesting, and real-world equity trading simulation.
            </p>
            <p style={{ color: "#334155", fontSize: 17, lineHeight: 1.85, marginBottom: 36, fontWeight: 500 }}>
              This challenge combines{" "}
              <span style={{ color: "#1E4FD8", fontWeight: 700 }}>finance, coding, and AI-driven analytics</span>, preparing them to build TechInnosphere's future AI-based trading intelligence product.
            </p>
            <div className="features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
              {tradingFeatures.map(({ icon, title, desc }) => (
                <div key={title} className="feature-item">
                  <div style={{ width: 46, height: 46, borderRadius: 12, background: "rgba(10,27,92,0.05)", border: "1px solid rgba(10,27,92,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{icon}</div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#0A1B5C", marginBottom: 4, lineHeight: 1.3 }}>{title}</div>
                    <div style={{ fontSize: 13, color: "#475569", lineHeight: 1.5, fontWeight: 500 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="project-card" style={{ flex: 1 }}>
            <div style={{ position: "absolute", top: -50, right: -50, width: 250, height: 250, borderRadius: "50%", background: "radial-gradient(circle, rgba(217,119,6,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />
            <div style={{ display: "flex", alignItems: "flex-start", gap: 18, marginBottom: 32 }}>
              <div style={{ width: 72, height: 72, borderRadius: 18, background: "linear-gradient(145deg, #92400E, #D97706)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 0 28px rgba(217,119,6,0.25)", animation: "floatUp 4s ease-in-out infinite", animationDelay: "1s" }}>
                <Flag size={32} color="#FCD34D" strokeWidth={1.6} />
              </div>
              <div style={{ flex: 1 }}>
                <div className="iit-badge" style={{ marginBottom: 12 }}><Award size={12} color="#B45309" />Techfest, IIT Bombay</div>
                <h3 style={{ fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 900, color: "#0A1B5C", letterSpacing: "-0.03em", lineHeight: 1.2 }}>Aarohan — Viksit Bharat Challenge</h3>
              </div>
            </div>
            <div style={{ width: "100%", height: 1, background: "linear-gradient(90deg, rgba(217,119,6,0.2), transparent)", marginBottom: 28 }} />
            <p style={{ color: "#334155", fontSize: 17, lineHeight: 1.85, marginBottom: 28, fontWeight: 500 }}>
              Both founders are developing{" "}
              <span style={{ color: "#B45309", fontWeight: 700 }}>Aarohan</span>, a national innovation project shaping India's{" "}
              <span style={{ color: "#1E4FD8", fontWeight: 700 }}>Viksit Bharat 2047</span>{" "}vision.
            </p>
            <p style={{ color: "#334155", fontSize: 17, lineHeight: 1.85, marginBottom: 36, fontWeight: 500 }}>
              They are building tech prototypes focused on{" "}
              <span style={{ color: "#1E4FD8", fontWeight: 700 }}>Public Transport and Traffic Management, Digital and Inclusive Governance,</span>{" "}
              and the{" "}
              <span style={{ color: "#1E4FD8", fontWeight: 700 }}>Future of Education and Skilling</span>.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {aarohanFeatures.map(({ icon, title, desc }) => (
                <div key={title} className="feature-item">
                  <div style={{ width: 46, height: 46, borderRadius: 12, background: "rgba(217,119,6,0.06)", border: "1px solid rgba(217,119,6,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{icon}</div>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "#0A1B5C", marginBottom: 4, lineHeight: 1.3 }}>{title}</div>
                    <div style={{ fontSize: 14, color: "#475569", lineHeight: 1.5, fontWeight: 500 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 36, padding: "22px 28px", background: "linear-gradient(135deg, rgba(217,119,6,0.05), rgba(10,27,92,0.04))", border: "1px solid rgba(217,119,6,0.18)", borderRadius: 14, display: "flex", alignItems: "center", gap: 18 }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(217,119,6,0.08)", border: "1px solid rgba(217,119,6,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Rocket size={24} color="#D97706" strokeWidth={1.8} />
              </div>
              <div>
                <div style={{ fontSize: 18, fontWeight: 800, color: "#B45309", marginBottom: 4 }}>Viksit Bharat 2047 Vision</div>
                <div style={{ fontSize: 14, color: "#475569", lineHeight: 1.6, fontWeight: 500 }}>Building India's future through technology, innovation & inclusive growth</div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM CREDIBILITY STRIP */}
        <div style={{ marginTop: 60, padding: "36px 44px", background: "#FFFFFF", border: "1.5px solid rgba(10,27,92,0.08)", borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "space-around", flexWrap: "wrap", gap: 24, boxShadow: "0 4px 24px rgba(10,27,92,0.05)" }}>
          {[
            { icon: <GraduationCap size={28} color="#1E4FD8" strokeWidth={1.6} />, value: "IIT Bombay", label: "Techfest Participant" },
            { icon: <BarChart3 size={28} color="#1E4FD8" strokeWidth={1.6} />, value: "2 Projects", label: "Simultaneously Active" },
            { icon: <Brain size={28} color="#1E4FD8" strokeWidth={1.6} />, value: "AI + Finance", label: "Cross-Domain Innovation" },
            { icon: <Globe size={28} color="#1E4FD8" strokeWidth={1.6} />, value: "National Level", label: "Viksit Bharat 2047" },
          ].map(({ icon, value, label }) => (
            <div key={value} style={{ textAlign: "center" }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 10 }}>{icon}</div>
              <div style={{ fontSize: 22, fontWeight: 900, color: "#0A1B5C", letterSpacing: "-0.02em", marginBottom: 4 }}>{value}</div>
              <div style={{ fontSize: 14, color: "#64748B", fontWeight: 600 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}