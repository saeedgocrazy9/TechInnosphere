import { Brain, BarChart3, Shield, Star, Code2, Globe, Server, Award, Linkedin, Mail, TrendingUp } from "lucide-react";

export default function Founders() {

  const founders = [
    {
      name: "Fehed Rehman Shaikh",
      role: "Founder & Technical Lead",
      tagline: "AI, Data Science, BI & Data Analytics Expert",
      image: "/Fehed.jpg",
      initials: "FS",
      bio: "Specialises in building intelligent systems at the intersection of machine learning, business intelligence, and data analytics. Leads technical strategy and AI product development at TechInnosphere.",
      highlights: [
        { icon: <Brain size={18} color="#1E4FD8" strokeWidth={1.8} />, text: "Python, AI & ML Specialist" },
        { icon: <BarChart3 size={18} color="#1E4FD8" strokeWidth={1.8} />, text: "100+ Analytical Dashboards" },
        { icon: <TrendingUp size={18} color="#1E4FD8" strokeWidth={1.8} />, text: "Data Analytics" },
        { icon: <Star size={18} color="#1E4FD8" strokeWidth={1.8} />, text: "IIT Bombay Technical Projects" },
      ],
      skills: ["Python", "AI & ML", "Data Science", "Power BI", "Data Analytics", "Tableau", "TensorFlow"],
    },
    {
      name: "Omar Khan",
      role: "Co-Founder & Engineering Lead",
      tagline: "Full Stack Development Expert",
      image: "/Omar.jpg",
      initials: "OK",
      bio: "Architects scalable software systems from mobile to enterprise. Delivered production-grade platforms for government agencies and major organisations across aviation, infrastructure, and SaaS verticals.",
      highlights: [
        { icon: <Code2 size={18} color="#1E4FD8" strokeWidth={1.8} />, text: "React.js, Node.js, Django & Android" },
        { icon: <Globe size={18} color="#1E4FD8" strokeWidth={1.8} />, text: "Enterprise & Government Systems" },
        { icon: <Server size={18} color="#1E4FD8" strokeWidth={1.8} />, text: "Scalable Architecture Specialist" },
        { icon: <Award size={18} color="#1E4FD8" strokeWidth={1.8} />, text: "Pioneer Engineers · Air India" },
      ],
      skills: ["React.js", "Node.js", "Django", "Android", "APIs", "Databases", "DevOps"],
    },
  ];

  return (
    <section id="founders" style={{
      background: "#FFFFFF",
      padding: "120px 4%",
      position: "relative",
      overflow: "hidden",
      fontFamily: "'Segoe UI', system-ui, sans-serif",
    }}>
      <style>{`
        @keyframes fadeSlideUp { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
        @keyframes glowPulse   { 0%,100%{opacity:.5;} 50%{opacity:1;} }
        @keyframes floatUp     { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-6px);} }

        .fn-card {
          flex: 1 1 440px;
          background: #FFFFFF;
          border: 1.5px solid rgba(10,27,92,0.08);
          border-radius: 24px;
          overflow: hidden;
          transition: all 0.25s ease;
          display: flex;
          flex-direction: column;
          box-shadow: 0 2px 12px rgba(10,27,92,0.04);
        }
        .fn-card:hover {
          transform: translateY(-8px);
          border-color: rgba(30,79,216,0.2);
          box-shadow: 0 28px 70px rgba(10,27,92,0.1);
        }
        .fn-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #0A1B5C, #1E4FD8, #3B82F6);
          opacity: 0; transition: opacity 0.25s ease;
          border-radius: 24px 24px 0 0;
        }
        .fn-card:hover::before { opacity: 1; }

        .fn-image-wrap {
          position: relative;
          width: 100%;
          height: 340px;
          overflow: hidden;
          background: linear-gradient(145deg, #0A1B5C, #1E4FD8);
        }
        .fn-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          transition: transform 0.5s ease;
        }
        .fn-card:hover .fn-image-wrap img { transform: scale(1.04); }
        .fn-image-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, transparent 35%, rgba(10,27,92,0.88) 100%);
        }
        .fn-image-badge {
          position: absolute; bottom: 24px; left: 28px; right: 28px;
        }

        .fn-skill {
          background: #F8FAFF;
          border: 1px solid rgba(10,27,92,0.1);
          color: #334155;
          padding: 7px 14px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 600;
          transition: all 0.18s ease;
          cursor: default;
          white-space: nowrap;
          letter-spacing: 0.01em;
        }
        .fn-skill:hover {
          background: #0A1B5C; color: #fff;
          border-color: #0A1B5C;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(10,27,92,0.15);
        }

        .fn-highlight {
          display: flex; align-items: center; gap: 14px;
          padding: 13px 16px;
          background: rgba(10,27,92,0.02);
          border: 1px solid rgba(10,27,92,0.07);
          border-radius: 10px;
          transition: all 0.2s ease; cursor: default;
        }
        .fn-highlight:hover {
          background: rgba(30,79,216,0.05);
          border-color: rgba(30,79,216,0.18);
          transform: translateX(5px);
        }

        .fn-social-btn {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 10px 20px; border-radius: 8px;
          font-size: 13px; font-weight: 700; letter-spacing: 0.03em;
          cursor: pointer;
          border: 1.5px solid rgba(10,27,92,0.12);
          background: #F8FAFF; color: #0A1B5C;
          transition: all 0.2s ease; text-decoration: none;
        }
        .fn-social-btn:hover {
          background: #0A1B5C; color: #fff;
          border-color: #0A1B5C;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(10,27,92,0.18);
        }

        .fn-strip-stat {
          flex: 1 1 100px; text-align: center;
          background: #FFFFFF;
          border: 1.5px solid rgba(10,27,92,0.08);
          border-radius: 16px; padding: 28px 20px;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(10,27,92,0.04);
        }
        .fn-strip-stat:hover {
          border-color: rgba(30,79,216,0.25);
          transform: translateY(-4px);
          box-shadow: 0 14px 36px rgba(10,27,92,0.08);
        }

        @media (max-width:1024px) { .fn-grid { flex-direction:column !important; } }
        @media (max-width:640px)  {
          .fn-stats { flex-wrap:wrap !important; }
          .fn-strip  { flex-direction:column !important; }
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

          {/* Badge — same as Hero */}
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
              Meet the Founders
            </span>
          </div>

          {/* Headline — matches Hero clamp */}
          <div style={{ marginBottom: 0 }}>
            <div style={{
              fontSize: "clamp(40px, 4.8vw, 70px)", fontWeight: 900,
              color: "#0A1B5C", lineHeight: 1.02, letterSpacing: "-0.04em",
            }}>
              The Visionaries
            </div>
            <div style={{
              fontSize: "clamp(40px, 4.8vw, 70px)", fontWeight: 900,
              lineHeight: 1.02, letterSpacing: "-0.04em",
            }}>
              <span style={{
                background: "linear-gradient(135deg, #0A1B5C 0%, #1E4FD8 55%, #3B82F6 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>Behind TechInnosphere</span>
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

          {/* Subtitle — same clamp as Hero */}
          <p style={{
            color: "#1E293B", fontSize: "clamp(17px, 1.5vw, 20px)",
            lineHeight: 1.75, maxWidth: 600, margin: "0 auto",
            fontWeight: 600, letterSpacing: "0.005em",
          }}>
            A dual-founder team combining deep{" "}
            <span style={{ color: "#1E4FD8", fontWeight: 800, borderBottom: "2px solid rgba(30,79,216,0.3)", paddingBottom: "1px" }}>AI expertise</span>{" "}
            with{" "}
            <span style={{ color: "#1E4FD8", fontWeight: 800, borderBottom: "2px solid rgba(30,79,216,0.3)", paddingBottom: "1px" }}>enterprise-grade engineering</span>{" "}
            to ship real products.
          </p>
        </div>

        {/* ── FOUNDER CARDS ── */}
        <div className="fn-grid" style={{ display: "flex", gap: 28, alignItems: "stretch", marginBottom: 48 }}>
          {founders.map((f, idx) => (
            <div key={f.name} className="fn-card" style={{
              position: "relative",
              animation: `fadeSlideUp 0.7s ease ${idx * 0.15}s both`,
            }}>

              {/* ── Photo ── */}
              <div className="fn-image-wrap">
                <img src={f.image} alt={f.name} />
                <div className="fn-image-overlay" />
                <div className="fn-image-badge">
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    background: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    borderRadius: 6, padding: "5px 14px",
                    fontSize: 10, fontWeight: 700, color: "#fff",
                    letterSpacing: "0.12em", textTransform: "uppercase",
                    marginBottom: 10,
                  }}>
                    <Star size={9} color="#fff" /> IIT Bombay
                  </div>
                  <div style={{
                    fontSize: "clamp(20px, 2vw, 26px)", fontWeight: 900,
                    color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 4,
                  }}>
                    {f.name}
                  </div>
                  <div style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>
                    {f.role}
                  </div>
                </div>
              </div>

              {/* ── Content ── */}
              <div style={{ padding: "36px 40px", flex: 1, display: "flex", flexDirection: "column" }}>

                {/* Tagline */}
                <div style={{
                  padding: "13px 18px",
                  background: "rgba(10,27,92,0.04)",
                  border: "1px solid rgba(10,27,92,0.09)",
                  borderRadius: 10,
                  fontSize: "clamp(14px, 1.1vw, 15px)",
                  fontWeight: 700, color: "#1E4FD8",
                  marginBottom: 22, letterSpacing: "0.01em",
                }}>
                  {f.tagline}
                </div>

                {/* Bio */}
                <p style={{
                  fontSize: "clamp(15px, 1.2vw, 17px)",
                  color: "#1E293B", lineHeight: 1.82,
                  fontWeight: 500, marginBottom: 28,
                }}>
                  {f.bio}
                </p>

                {/* Divider */}
                <div style={{ width: "100%", height: 1, background: "linear-gradient(90deg, rgba(10,27,92,0.12), transparent)", marginBottom: 22 }} />

                {/* Highlights label */}
                <div style={{
                  fontSize: 11, color: "#94A3B8", fontWeight: 700,
                  letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14,
                }}>
                  Key Highlights
                </div>

                {/* Highlights list */}
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                  {f.highlights.map(({ icon, text }) => (
                    <div key={text} className="fn-highlight">
                      <div style={{
                        width: 38, height: 38, borderRadius: 9,
                        background: "rgba(10,27,92,0.05)", border: "1px solid rgba(10,27,92,0.1)",
                        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                      }}>{icon}</div>
                      <span style={{
                        fontSize: "clamp(14px, 1.1vw, 15px)",
                        fontWeight: 600, color: "#0A1B5C", lineHeight: 1.4,
                      }}>{text}</span>
                    </div>
                  ))}
                </div>

                {/* Skills label */}
                <div style={{
                  fontSize: 11, color: "#94A3B8", fontWeight: 700,
                  letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14,
                }}>
                  Core Technologies
                </div>

                {/* Skills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
                  {f.skills.map(s => (
                    <span key={s} className="fn-skill">{s}</span>
                  ))}
                </div>

                {/* Social buttons */}
                <div style={{
                  marginTop: "auto", paddingTop: 20,
                  borderTop: "1px solid rgba(10,27,92,0.07)",
                  display: "flex", gap: 10,
                }}>
                  <span className="fn-social-btn"><Linkedin size={14} /> LinkedIn</span>
                  <span className="fn-social-btn"><Mail size={14} /> Contact</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── BOTTOM STRIP ── */}
        <div style={{
          padding: "48px 52px",
          background: "linear-gradient(135deg, rgba(10,27,92,0.04), rgba(30,79,216,0.03))",
          border: "1.5px solid rgba(10,27,92,0.09)",
          borderRadius: 24,
          position: "relative", overflow: "hidden",
        }}>
          {/* Top accent */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 3,
            background: "linear-gradient(90deg, #0A1B5C, #1E4FD8, #3B82F6)",
            borderRadius: "24px 24px 0 0",
          }} />
          {/* Left accent */}
          <div style={{
            position: "absolute", left: 0, top: 0, bottom: 0, width: 4,
            background: "linear-gradient(180deg, #0A1B5C, #1E4FD8)",
            borderRadius: "24px 0 0 24px",
          }} />
          <div style={{
            position: "absolute", right: -60, top: -60, width: 320, height: 320,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(10,27,92,0.04) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <div className="fn-strip" style={{ display: "flex", alignItems: "center", gap: 48, flexWrap: "wrap" }}>

            {/* Left text */}
            <div style={{ flex: "1 1 320px", position: "relative" }}>
              <div style={{
                fontSize: 12, color: "#1E4FD8", fontWeight: 700,
                letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 14,
              }}>
                Combined Expertise
              </div>
              <h3 style={{
                fontSize: "clamp(24px, 2.5vw, 36px)", fontWeight: 900,
                color: "#0A1B5C", letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: 16,
              }}>
                Full-Stack Innovation from{" "}
                <span style={{
                  background: "linear-gradient(135deg, #0A1B5C, #1E4FD8)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>AI to Deployment</span>
              </h3>
              <p style={{
                color: "#1E293B",
                fontSize: "clamp(15px, 1.2vw, 17px)",
                lineHeight: 1.82, fontWeight: 500, margin: 0,
              }}>
                Together, Fehed and Omar cover the entire technology spectrum — from AI models and data pipelines to scalable frontends and production infrastructure.
              </p>
            </div>

            {/* Stats */}
            <div className="fn-stats" style={{ display: "flex", gap: 16, flex: "1 1 320px", justifyContent: "flex-end" }}>
              {[
                { value: "IIT",    label: "Bombay Projects" },
                { value: "AI",     label: "& Full Stack" },
                { value: "Data",   label: "Analytics Expert" },
                { value: "SaaS",   label: "Products Built" },
              ].map(({ value, label }) => (
                <div key={label} className="fn-strip-stat">
                  <div style={{
                    fontSize: "clamp(20px, 1.8vw, 26px)", fontWeight: 900,
                    color: "#0A1B5C", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 8,
                  }}>{value}</div>
                  <div style={{
                    fontSize: "clamp(11px, 0.9vw, 13px)", color: "#1E4FD8",
                    fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase",
                  }}>{label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}