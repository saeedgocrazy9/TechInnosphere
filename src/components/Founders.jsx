import { Code2, Brain, Shield, BarChart3, Smartphone, Server, Globe, Zap, Star, Award, Github, Linkedin } from "lucide-react";

export default function Founders() {

  const founders = [
    {
      name: "Fehed Rehman Shaikh",
      role: "Founder & Technical Lead",
      tagline: "AI, Data Science, BI & Cybersecurity Expert",
      emoji: "🧠",
      gradient: "linear-gradient(145deg, #1E3A8A, #3B82F6)",
      glowColor: "rgba(59,130,246,0.4)",
      accentColor: "#60A5FA",
      borderAccent: "rgba(59,130,246,0.35)",
      highlights: [
        { icon: <Brain size={20} color="#60A5FA" strokeWidth={1.8} />, text: "Python, AI & ML Specialist" },
        { icon: <BarChart3 size={20} color="#60A5FA" strokeWidth={1.8} />, text: "Created 100+ Analytical Dashboards" },
        { icon: <Shield size={20} color="#60A5FA" strokeWidth={1.8} />, text: "Deep Expertise in Cybersecurity Architecture" },
        { icon: <Star size={20} color="#60A5FA" strokeWidth={1.8} />, text: "Leading IIT Bombay Technical Projects" },
      ],
      skills: ["Python", "AI & ML", "Data Science", "Power BI", "Cybersecurity", "Tableau", "TensorFlow", "Analytics"],
      badge: "IIT Bombay · Technical Lead",
      badgeColor: "rgba(59,130,246,0.15)",
      badgeBorder: "rgba(59,130,246,0.3)",
      badgeText: "#93C5FD",
    },
    {
      name: "Omar Khan",
      role: "Co-Founder & Engineering Lead",
      tagline: "Full Stack Development Expert",
      emoji: "⚡",
      gradient: "linear-gradient(145deg, #134E4A, #0D9488)",
      glowColor: "rgba(13,148,136,0.4)",
      accentColor: "#2DD4BF",
      borderAccent: "rgba(13,148,136,0.35)",
      highlights: [
        { icon: <Code2 size={20} color="#2DD4BF" strokeWidth={1.8} />, text: "React.js, Node.js, Django & Android" },
        { icon: <Globe size={20} color="#2DD4BF" strokeWidth={1.8} />, text: "Built Enterprise & Government Systems" },
        { icon: <Server size={20} color="#2DD4BF" strokeWidth={1.8} />, text: "Scalable Architecture Specialist" },
        { icon: <Award size={20} color="#2DD4BF" strokeWidth={1.8} />, text: "Pioneer Engineers, GSMASH, Air India Engineering" },
      ],
      skills: ["React.js", "Node.js", "Django", "Android", "Backend", "APIs", "Databases", "DevOps"],
      badge: "IIT Bombay · Engineering Lead",
      badgeColor: "rgba(13,148,136,0.15)",
      badgeBorder: "rgba(13,148,136,0.3)",
      badgeText: "#5EEAD4",
    },
  ];

  return (
    <section id="founders" style={{
      background: "#020610",
      padding: "120px 4%",
      position: "relative",
      overflow: "hidden",
      fontFamily: "'Segoe UI', sans-serif",
    }}>
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.5; } 50% { opacity: 1; }
        }
        @keyframes floatUp {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.15); opacity: 1; }
        }

        .founder-card {
          flex: 1 1 420px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(59,130,246,0.12);
          border-radius: 28px;
          padding: 52px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .founder-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 32px 80px rgba(29,78,216,0.15);
        }
        .founder-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .founder-card:hover::before { opacity: 1; }
        .founder-card.blue::before {
          background: linear-gradient(90deg, #1D4ED8, #3B82F6, #60A5FA, transparent);
        }
        .founder-card.teal::before {
          background: linear-gradient(90deg, #0F766E, #0D9488, #2DD4BF, transparent);
        }
        .founder-card.teal:hover {
          box-shadow: 0 32px 80px rgba(13,148,136,0.15);
          border-color: rgba(13,148,136,0.35);
        }

        .skill-tag-blue {
          background: rgba(59,130,246,0.1);
          border: 1px solid rgba(59,130,246,0.2);
          color: #93C5FD;
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.2s;
          cursor: default;
          white-space: nowrap;
        }
        .skill-tag-blue:hover {
          background: rgba(59,130,246,0.2);
          border-color: #3B82F6;
          color: #fff;
          transform: translateY(-2px);
        }
        .skill-tag-teal {
          background: rgba(13,148,136,0.1);
          border: 1px solid rgba(13,148,136,0.2);
          color: #5EEAD4;
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.2s;
          cursor: default;
          white-space: nowrap;
        }
        .skill-tag-teal:hover {
          background: rgba(13,148,136,0.2);
          border-color: #0D9488;
          color: #fff;
          transform: translateY(-2px);
        }

        .highlight-item-blue {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 18px 22px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(59,130,246,0.1);
          border-radius: 14px;
          transition: all 0.2s ease;
          cursor: default;
        }
        .highlight-item-blue:hover {
          background: rgba(59,130,246,0.07);
          border-color: rgba(59,130,246,0.3);
          transform: translateX(6px);
        }
        .highlight-item-teal {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 18px 22px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(13,148,136,0.1);
          border-radius: 14px;
          transition: all 0.2s ease;
          cursor: default;
        }
        .highlight-item-teal:hover {
          background: rgba(13,148,136,0.07);
          border-color: rgba(13,148,136,0.3);
          transform: translateX(6px);
        }

        @media (max-width: 1024px) {
          .founders-grid { flex-direction: column !important; }
          .founder-card { padding: 36px !important; }
        }
        @media (max-width: 640px) {
          .founder-card { padding: 24px !important; }
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

      {/* GLOW */}
      <div style={{
        position: "absolute", top: "10%", left: "50%",
        transform: "translateX(-50%)",
        width: "70vw", height: "50vh",
        background: "radial-gradient(ellipse, rgba(29,78,216,0.1) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1600, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* ── HEADER ── */}
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
              animation: "glowPulse 2s ease-in-out infinite",
            }} />
            <span style={{
              fontSize: 12, color: "#93C5FD",
              fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
            }}>Meet the Founders</span>
          </div>

          <h2 style={{
            fontSize: "clamp(36px, 4.5vw, 64px)",
            fontWeight: 900, color: "#FFFFFF",
            letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 24,
          }}>
            The Visionaries{" "}
            <span style={{
              background: "linear-gradient(90deg, #3B82F6, #60A5FA, #93C5FD)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>Behind TechInnosphere</span>
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
            A dual-founder team determined to transform{" "}
            <span style={{ color: "#60A5FA", fontWeight: 600 }}>ideas into real products</span>
            {" "}— combining deep technical expertise with enterprise-level engineering.
          </p>
        </div>

        {/* ── FOUNDER CARDS ── */}
        <div className="founders-grid" style={{ display: "flex", gap: 32, alignItems: "stretch" }}>

          {founders.map((founder, idx) => {
            const isBlue = idx === 0;
            const highlightClass = isBlue ? "highlight-item-blue" : "highlight-item-teal";
            const skillClass = isBlue ? "skill-tag-blue" : "skill-tag-teal";
            const cardClass = `founder-card ${isBlue ? "blue" : "teal"}`;

            return (
              <div key={founder.name} className={cardClass}
                style={{
                  animation: `fadeSlideUp 0.7s ease ${idx * 0.15}s both`,
                  borderColor: idx === 0 ? "rgba(59,130,246,0.15)" : "rgba(13,148,136,0.15)",
                }}>

                {/* Corner glow */}
                <div style={{
                  position: "absolute", top: -60, right: -60,
                  width: 280, height: 280, borderRadius: "50%",
                  background: `radial-gradient(circle, ${isBlue ? "rgba(59,130,246,0.08)" : "rgba(13,148,136,0.08)"} 0%, transparent 70%)`,
                  pointerEvents: "none",
                }} />

                {/* ── AVATAR + NAME ── */}
                <div style={{ display: "flex", alignItems: "center", gap: 22, marginBottom: 32 }}>
                  {/* Avatar circle */}
                  <div style={{ position: "relative", flexShrink: 0 }}>
                    <div style={{
                      width: 96, height: 96, borderRadius: "50%",
                      background: founder.gradient,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 42,
                      boxShadow: `0 0 36px ${founder.glowColor}`,
                      border: `2px solid ${founder.borderAccent}`,
                      animation: "floatUp 5s ease-in-out infinite",
                      animationDelay: `${idx * 0.5}s`,
                    }}>
                      {founder.emoji}
                    </div>
                    {/* Online dot */}
                    <div style={{
                      position: "absolute", bottom: 4, right: 4,
                      width: 18, height: 18, borderRadius: "50%",
                      background: "#22C55E",
                      border: "3px solid #020610",
                      boxShadow: "0 0 10px #22C55E",
                      animation: "pulse 2s ease-in-out infinite",
                    }} />
                  </div>

                  <div style={{ flex: 1 }}>
                    {/* IIT Badge */}
                    <div style={{
                      display: "inline-flex", alignItems: "center", gap: 6,
                      background: founder.badgeColor,
                      border: `1px solid ${founder.badgeBorder}`,
                      borderRadius: 50, padding: "5px 14px",
                      fontSize: 11, fontWeight: 700,
                      color: founder.badgeText,
                      letterSpacing: "0.1em", textTransform: "uppercase",
                      marginBottom: 10,
                    }}>
                      <Star size={10} color={founder.badgeText} />
                      {founder.badge}
                    </div>

                    <h3 style={{
                      fontSize: "clamp(20px, 2vw, 28px)",
                      fontWeight: 900, color: "#FFFFFF",
                      letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 4,
                    }}>
                      {founder.name}
                    </h3>
                    <div style={{
                      fontSize: 14, color: founder.accentColor,
                      fontWeight: 700, letterSpacing: "0.05em",
                    }}>
                      {founder.role}
                    </div>
                  </div>
                </div>

                {/* Tagline */}
                <div style={{
                  padding: "14px 20px",
                  background: isBlue ? "rgba(59,130,246,0.07)" : "rgba(13,148,136,0.07)",
                  border: `1px solid ${isBlue ? "rgba(59,130,246,0.2)" : "rgba(13,148,136,0.2)"}`,
                  borderRadius: 12, marginBottom: 28,
                  fontSize: 16, fontWeight: 700,
                  color: founder.accentColor,
                  letterSpacing: "0.01em",
                }}>
                  {founder.tagline}
                </div>

                <div style={{
                  width: "100%", height: 1,
                  background: `linear-gradient(90deg, ${isBlue ? "rgba(59,130,246,0.4)" : "rgba(13,148,136,0.4)"}, transparent)`,
                  marginBottom: 28,
                }} />

                {/* Highlights */}
                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                  {founder.highlights.map(({ icon, text }) => (
                    <div key={text} className={highlightClass}>
                      <div style={{
                        width: 44, height: 44, borderRadius: 12,
                        background: isBlue ? "rgba(59,130,246,0.1)" : "rgba(13,148,136,0.1)",
                        border: `1px solid ${isBlue ? "rgba(59,130,246,0.2)" : "rgba(13,148,136,0.2)"}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0,
                      }}>{icon}</div>
                      <span style={{
                        fontSize: 16, fontWeight: 600,
                        color: "#E2E8F0", lineHeight: 1.4,
                      }}>{text}</span>
                    </div>
                  ))}
                </div>

                {/* Skills */}
                <div style={{
                  fontSize: 12, color: founder.accentColor,
                  fontWeight: 700, letterSpacing: "0.15em",
                  textTransform: "uppercase", marginBottom: 14,
                }}>
                  Core Skills & Technologies
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {founder.skills.map((skill) => (
                    <span key={skill} className={skillClass}>{skill}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── COMBINED STRENGTH STRIP ── */}
        <div style={{
          marginTop: 60,
          padding: "44px 52px",
          background: "linear-gradient(135deg, rgba(29,78,216,0.08), rgba(13,148,136,0.08))",
          border: "1px solid rgba(59,130,246,0.15)",
          borderRadius: 24,
          display: "flex", alignItems: "center",
          gap: 32, flexWrap: "wrap",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", left: "50%", top: 0, bottom: 0,
            width: 1,
            background: "linear-gradient(180deg, transparent, rgba(59,130,246,0.3), transparent)",
            transform: "translateX(-50%)",
            pointerEvents: "none",
          }} />

          <div style={{ flex: "1 1 300px" }}>
            <div style={{
              fontSize: 13, color: "#3B82F6", fontWeight: 700,
              letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12,
            }}>Combined Expertise</div>
            <h3 style={{
              fontSize: "clamp(22px, 2.5vw, 34px)",
              fontWeight: 900, color: "#FFFFFF",
              letterSpacing: "-0.03em", lineHeight: 1.2, marginBottom: 14,
            }}>
              Full-Stack Innovation from{" "}
              <span style={{
                background: "linear-gradient(90deg, #3B82F6, #2DD4BF)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>AI to Deployment</span>
            </h3>
            <p style={{ color: "#CBD5E1", fontSize: 16, lineHeight: 1.8 }}>
              Together, Fehed and Omar cover the entire technology spectrum —
              from AI models and data pipelines to scalable frontends and production infrastructure.
            </p>
          </div>

          <div style={{
            display: "flex", gap: 20, flexWrap: "wrap",
            flex: "1 1 260px", justifyContent: "flex-end",
          }}>
            {[
              { value: "100+", label: "Dashboards Built", color: "#60A5FA" },
              { value: "5+", label: "Enterprise Clients", color: "#2DD4BF" },
              { value: "2", label: "IIT Bombay Projects", color: "#FCD34D" },
              { value: "∞", label: "Ideas in Pipeline", color: "#A78BFA" },
            ].map(({ value, label, color }) => (
              <div key={label} style={{
                textAlign: "center",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 16, padding: "18px 22px",
                minWidth: 100,
              }}>
                <div style={{
                  fontSize: 32, fontWeight: 900,
                  color, letterSpacing: "-0.03em", marginBottom: 4,
                }}>{value}</div>
                <div style={{ fontSize: 13, color: "#64748B", fontWeight: 500 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}