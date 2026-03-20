import { Brain, TrendingUp, Building2, Pill, Landmark, Monitor, Rocket, X } from "lucide-react";
import { useState } from "react";

export default function Roadmap() {
  const [showServicesModal, setShowServicesModal] = useState(false);

  const products = [
    { phase: "Phase 1", status: "In Development", statusColor: "#16A34A", statusBg: "rgba(22,163,74,0.08)", statusBorder: "rgba(22,163,74,0.2)", icon: <Brain size={32} color="#fff" strokeWidth={1.6} />, iconBg: "linear-gradient(145deg, #0A1B5C, #1E4FD8)", iconGlow: "rgba(10,27,92,0.3)", title: "AI Insight Engine", subtitle: "Analytics SaaS Platform", desc: "Automated analytics SaaS platform with machine learning-powered business intelligence.", accentColor: "#1E4FD8", accentBorder: "rgba(30,79,216,0.15)", tags: ["AI/ML", "SaaS", "Analytics", "BI"] },
    { phase: "Phase 1", status: "In Development", statusColor: "#16A34A", statusBg: "rgba(22,163,74,0.08)", statusBorder: "rgba(22,163,74,0.2)", icon: <TrendingUp size={32} color="#FCD34D" strokeWidth={1.6} />, iconBg: "linear-gradient(145deg, #92400E, #F59E0B)", iconGlow: "rgba(217,119,6,0.3)", title: "AlgoTrade Pro", subtitle: "Algorithmic Trading Platform", desc: "Trading and financial automation powered by algorithmic intelligence and real-time market data.", accentColor: "#B45309", accentBorder: "rgba(180,83,9,0.15)", tags: ["Algo Trading", "Finance", "AI", "Real-Time"] },
    { phase: "Phase 2", status: "Coming Soon", statusColor: "#7C3AED", statusBg: "rgba(124,58,237,0.08)", statusBorder: "rgba(124,58,237,0.2)", icon: <Building2 size={32} color="#A78BFA" strokeWidth={1.6} />, iconBg: "linear-gradient(145deg, #2E1065, #7C3AED)", iconGlow: "rgba(124,58,237,0.3)", title: "Smart Construction ERP", subtitle: "Construction Management Platform", desc: "Industry-specific enterprise resource planning for construction and project management.", accentColor: "#7C3AED", accentBorder: "rgba(124,58,237,0.15)", tags: ["ERP", "Construction", "Enterprise", "PM"] },
    { phase: "Phase 2", status: "Coming Soon", statusColor: "#059669", statusBg: "rgba(5,150,105,0.08)", statusBorder: "rgba(5,150,105,0.2)", icon: <Pill size={32} color="#34D399" strokeWidth={1.6} />, iconBg: "linear-gradient(145deg, #064E3B, #059669)", iconGlow: "rgba(5,150,105,0.3)", title: "MedHub POS SaaS", subtitle: "Pharmacy Management Solution", desc: "Pharmacy SaaS solution with inventory management, billing, and compliance automation.", accentColor: "#059669", accentBorder: "rgba(5,150,105,0.15)", tags: ["Healthcare", "POS", "SaaS", "Compliance"] },
    { phase: "Phase 3", status: "Planned", statusColor: "#DB2777", statusBg: "rgba(219,39,119,0.08)", statusBorder: "rgba(219,39,119,0.2)", icon: <Landmark size={32} color="#F472B6" strokeWidth={1.6} />, iconBg: "linear-gradient(145deg, #831843, #DB2777)", iconGlow: "rgba(219,39,119,0.3)", title: "Aarohan GovTech Suite", subtitle: "Smart City & Governance Platform", desc: "Smart city and governance tools including digital transportation, education, and public services platforms.", accentColor: "#DB2777", accentBorder: "rgba(219,39,119,0.15)", tags: ["GovTech", "Smart City", "Transport", "Education"] },
    { phase: "Phase 3", status: "Planned", statusColor: "#0284C7", statusBg: "rgba(2,132,199,0.08)", statusBorder: "rgba(2,132,199,0.2)", icon: <Monitor size={32} color="#38BDF8" strokeWidth={1.6} />, iconBg: "linear-gradient(145deg, #0C4A6E, #0284C7)", iconGlow: "rgba(2,132,199,0.3)", title: "Virtual Office 2.0", subtitle: "Remote Workspace Platform", desc: "Subscription-based remote workspace platform for distributed teams.", accentColor: "#0284C7", accentBorder: "rgba(2,132,199,0.15)", tags: ["Remote Work", "SaaS", "Collaboration", "Teams"] },
  ];

  const phases = [
    { label: "Phase 1", title: "Build & Launch", color: "#16A34A", desc: "AI Insight Engine + AlgoTrade Pro" },
    { label: "Phase 2", title: "Expand",         color: "#7C3AED", desc: "ERP + Healthcare SaaS" },
    { label: "Phase 3", title: "Scale",           color: "#0284C7", desc: "GovTech + Virtual Office" },
  ];

  const scrollToServices = () => {
    const el = document.getElementById("services");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 94, behavior: "smooth" });
  };

  return (
    <section id="roadmap" style={{
      background: "#F8FAFF", padding: "120px 4%",
      position: "relative", overflow: "hidden",
      fontFamily: "'Segoe UI', system-ui, sans-serif",
    }}>
      <style>{`
        @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes glowPulse   { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
        @keyframes floatUp     { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes pulse       { 0%, 100% { transform: scale(1); opacity: 0.8; } 50% { transform: scale(1.2); opacity: 1; } }
        @keyframes modalFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes modalSlideIn { from { opacity: 0; transform: scale(0.94) translateY(16px); } to { opacity: 1; transform: scale(1) translateY(0); } }

        .roadmap-card {
          background: #FFFFFF;
          border: 1.5px solid rgba(10,27,92,0.08);
          border-radius: 24px; padding: 40px;
          position: relative; overflow: hidden;
          transition: all 0.25s ease;
          box-shadow: 0 2px 12px rgba(10,27,92,0.04);
          display: flex; flex-direction: column;
        }
        .roadmap-card::before {
          content: ''; position: absolute;
          top: 0; left: 0; right: 0; height: 3px;
          opacity: 0; transition: opacity 0.25s ease;
        }
        .roadmap-card:hover { transform: translateY(-8px); box-shadow: 0 28px 70px rgba(10,27,92,0.1); border-color: rgba(10,27,92,0.15); }
        .roadmap-card:hover::before { opacity: 1; }

        .product-tag {
          padding: 6px 14px; border-radius: 6px;
          font-size: 13px; font-weight: 600;
          cursor: default; white-space: nowrap; transition: all 0.2s;
        }
        .product-tag:hover { transform: translateY(-2px); }

        .services-btn {
          display: inline-flex; align-items: center; gap: 10px;
          background: linear-gradient(135deg, #0A1B5C, #1E4FD8);
          border: none; color: #fff; font-weight: 700; font-size: 15px;
          padding: 14px 28px; border-radius: 8px; cursor: pointer;
          letter-spacing: 0.02em;
          box-shadow: 0 4px 18px rgba(10,27,92,0.28);
          transition: all 0.2s ease; white-space: nowrap;
          font-family: 'Segoe UI', system-ui, sans-serif;
        }
        .services-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(10,27,92,0.38); }

        /* Modal */
        .modal-overlay {
          position: fixed; inset: 0;
          background: rgba(5, 10, 36, 0.82);
          backdrop-filter: blur(10px);
          WebkitBackdropFilter: blur(10px);
          z-index: 9999;
          display: flex; align-items: center; justify-content: center;
          padding: 24px;
          animation: modalFadeIn 0.25s ease both;
        }
        .modal-box {
          position: relative;
          max-width: 680px; width: 100%;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(5,10,36,0.5), 0 0 0 1px rgba(255,255,255,0.08);
          animation: modalSlideIn 0.3s ease both;
        }
        .modal-close {
          position: absolute; top: 14px; right: 14px;
          width: 40px; height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.95);
          border: 1.5px solid rgba(10,27,92,0.15);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; z-index: 10;
          box-shadow: 0 4px 16px rgba(10,27,92,0.2);
          transition: all 0.18s ease;
        }
        .modal-close:hover {
          background: #0A1B5C;
          border-color: #0A1B5C;
          transform: scale(1.08);
          box-shadow: 0 6px 20px rgba(10,27,92,0.3);
        }
        .modal-close:hover svg { color: #fff !important; }

        @media (max-width: 1200px) { .roadmap-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px)  {
          .roadmap-grid { grid-template-columns: 1fr !important; }
          .roadmap-card { padding: 28px !important; }
          .phases-row { flex-direction: column !important; }
          .modal-box { max-width: 100%; }
        }
      `}</style>

      {/* ── SERVICES IMAGE MODAL ── */}
      {showServicesModal && (
        <div
          className="modal-overlay"
          onClick={(e) => { if (e.target === e.currentTarget) setShowServicesModal(false); }}
        >
          <div className="modal-box">
            {/* Close button */}
            <div className="modal-close" onClick={() => setShowServicesModal(false)}>
              <X size={18} color="#0A1B5C" strokeWidth={2.5} />
            </div>
            {/* Image */}
            <img
              src="/Services.jpeg"
              alt="TechInnosphere Services"
              style={{
                width: "100%", height: "auto",
                display: "block",
                borderRadius: 20,
              }}
            />
          </div>
        </div>
      )}

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

      <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* ── HEADER ── */}
        <div style={{ textAlign: "center", marginBottom: 72, animation: "fadeSlideUp 0.7s ease both" }}>

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
              Innovation Roadmap
            </span>
          </div>

          {/* Headline */}
          <div style={{ marginBottom: 0 }}>
            <div style={{
              fontSize: "clamp(40px, 4.8vw, 70px)", fontWeight: 900,
              color: "#0A1B5C", lineHeight: 1.02, letterSpacing: "-0.04em",
            }}>
              Future Products
            </div>
            <div style={{
              fontSize: "clamp(40px, 4.8vw, 70px)", fontWeight: 900,
              lineHeight: 1.02, letterSpacing: "-0.04em",
            }}>
              <span style={{
                background: "linear-gradient(135deg, #0A1B5C 0%, #1E4FD8 55%, #3B82F6 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>& Platforms</span>
            </div>
          </div>

          {/* Accent bar */}
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
            lineHeight: 1.75, maxWidth: 640, margin: "0 auto 36px",
            fontWeight: 600, letterSpacing: "0.005em",
          }}>
            Future products and platforms that will shape the{" "}
            <span style={{ color: "#1E4FD8", fontWeight: 800, borderBottom: "2px solid rgba(30,79,216,0.3)", paddingBottom: "1px" }}>
              next generation of business technology
            </span>
          </p>

          {/* View All Services button */}
          <button className="services-btn" onClick={() => setShowServicesModal(true)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
              <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
            </svg>
            View All Our Services
          </button>
        </div>

        {/* ── PHASE TRACKER ── */}
        <div className="phases-row" style={{
          display: "flex", gap: 0, marginBottom: 64,
          alignItems: "stretch", background: "#FFFFFF",
          border: "1.5px solid rgba(10,27,92,0.08)", borderRadius: 20,
          overflow: "hidden", boxShadow: "0 4px 24px rgba(10,27,92,0.05)",
          position: "relative",
        }}>
          {/* Top accent */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 3,
            background: "linear-gradient(90deg, #0A1B5C, #1E4FD8, #3B82F6)",
            borderRadius: "20px 20px 0 0",
          }} />

          {phases.map((phase, i) => (
            <div key={phase.label} style={{
              flex: 1, padding: "36px 36px 32px",
              borderRight: i < phases.length - 1 ? "1px solid rgba(10,27,92,0.07)" : "none",
              position: "relative", overflow: "hidden",
              transition: "background 0.2s ease",
            }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(10,27,92,0.02)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              <div style={{
                position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)",
                fontSize: 90, fontWeight: 900, color: "rgba(10,27,92,0.03)",
                lineHeight: 1, userSelect: "none",
              }}>{i + 1}</div>

              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12, position: "relative" }}>
                <div style={{
                  width: 12, height: 12, borderRadius: "50%",
                  background: phase.color, boxShadow: `0 0 12px ${phase.color}60`,
                  animation: "pulse 2s ease-in-out infinite",
                  animationDelay: `${i * 0.3}s`, flexShrink: 0,
                }} />
                <span style={{ fontSize: 12, fontWeight: 700, color: phase.color, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  {phase.label}
                </span>
              </div>
              <div style={{
                fontSize: "clamp(20px, 1.8vw, 26px)", fontWeight: 900,
                color: "#0A1B5C", letterSpacing: "-0.03em", marginBottom: 8, position: "relative",
              }}>{phase.title}</div>
              <div style={{
                fontSize: "clamp(14px, 1.1vw, 16px)", color: "#64748B",
                fontWeight: 600, position: "relative",
              }}>{phase.desc}</div>
            </div>
          ))}
        </div>

        {/* ── PRODUCTS GRID ── */}
        <div className="roadmap-grid" style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24, marginBottom: 80,
        }}>
          {products.map((product, i) => (
            <div key={product.title} className="roadmap-card"
              style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s both` }}
            >
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 3,
                background: `linear-gradient(90deg, ${product.accentColor}, transparent)`,
              }} />
              <div style={{
                position: "absolute", top: -40, right: -40, width: 180, height: 180,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${product.iconGlow.replace("0.3", "0.04")} 0%, transparent 70%)`,
                pointerEvents: "none",
              }} />

              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 28 }}>
                <div style={{
                  width: 72, height: 72, borderRadius: 18,
                  background: product.iconBg,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, boxShadow: `0 0 24px ${product.iconGlow}`,
                  animation: `floatUp ${4 + i * 0.3}s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                }}>
                  {product.icon}
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#1E4FD8", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                    {product.phase}
                  </div>
                  <div style={{
                    display: "flex", alignItems: "center", gap: 6,
                    background: product.statusBg, border: `1px solid ${product.statusBorder}`,
                    borderRadius: 6, padding: "6px 14px",
                  }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: product.statusColor, animation: "pulse 2s ease-in-out infinite" }} />
                    <span style={{ fontSize: 12, fontWeight: 700, color: product.statusColor, letterSpacing: "0.08em" }}>
                      {product.status}
                    </span>
                  </div>
                </div>
              </div>

              <h3 style={{
                fontSize: "clamp(20px, 1.7vw, 26px)", fontWeight: 900,
                color: "#0A1B5C", letterSpacing: "-0.03em", lineHeight: 1.2, marginBottom: 6,
              }}>{product.title}</h3>
              <div style={{
                fontSize: "clamp(13px, 1vw, 15px)", fontWeight: 700,
                color: product.accentColor, letterSpacing: "0.05em", marginBottom: 14,
              }}>{product.subtitle}</div>
              <div style={{ width: 44, height: 3, borderRadius: 4, background: `linear-gradient(90deg, ${product.accentColor}, transparent)`, marginBottom: 18 }} />
              <p style={{
                color: "#1E293B",
                fontSize: "clamp(15px, 1.2vw, 17px)",
                lineHeight: 1.82, marginBottom: 28, fontWeight: 500, flex: 1,
              }}>{product.desc}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {product.tags.map((tag) => (
                  <span key={tag} className="product-tag" style={{
                    background: product.statusBg,
                    border: `1px solid ${product.statusBorder}`,
                    color: product.statusColor,
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── FINAL CTA ── */}
        <div style={{
          padding: "72px 60px",
          background: "linear-gradient(135deg, rgba(10,27,92,0.05), rgba(30,79,216,0.03))",
          border: "1.5px solid rgba(10,27,92,0.1)",
          borderRadius: 28, textAlign: "center",
          position: "relative", overflow: "hidden",
        }}>
          {/* Left accent */}
          <div style={{
            position: "absolute", left: 0, top: 0, bottom: 0, width: 4,
            background: "linear-gradient(180deg, #0A1B5C, #1E4FD8)",
            borderRadius: "28px 0 0 28px",
          }} />
          {/* Top accent */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 3,
            background: "linear-gradient(90deg, #0A1B5C, #1E4FD8, #3B82F6)",
            borderRadius: "28px 28px 0 0",
          }} />
          <div style={{
            position: "absolute", top: -80, left: -80, width: 320, height: 320,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(10,27,92,0.05) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", bottom: -80, right: -80, width: 320, height: 320,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(30,79,216,0.04) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "#F0F7FF", border: "1px solid rgba(10,27,92,0.12)",
            borderRadius: 6, padding: "8px 16px", marginBottom: 36, position: "relative",
          }}>
            <Rocket size={14} color="#1E4FD8" />
            <span style={{ fontSize: 12, color: "#0A1B5C", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              TechInnosphere
            </span>
          </div>

          <div style={{ position: "relative" }}>
            <div style={{
              fontSize: "clamp(40px, 4.8vw, 70px)", fontWeight: 900,
              color: "#0A1B5C", lineHeight: 1.02, letterSpacing: "-0.04em",
            }}>
              From Vision to Software,
            </div>
            <div style={{
              fontSize: "clamp(40px, 4.8vw, 70px)", fontWeight: 900,
              lineHeight: 1.02, letterSpacing: "-0.04em", marginBottom: 0,
            }}>
              <span style={{
                background: "linear-gradient(135deg, #0A1B5C 0%, #1E4FD8 55%, #3B82F6 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>We Build It All</span>
            </div>
          </div>

          <div style={{
            display: "flex", alignItems: "center", gap: 10,
            margin: "24px auto 32px", justifyContent: "center",
          }}>
            <div style={{ width: 52, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0A1B5C, #1E4FD8)" }} />
            <div style={{ width: 12, height: 3, borderRadius: 2, background: "#3B82F6", opacity: 0.45 }} />
            <div style={{ width: 6, height: 3, borderRadius: 2, background: "#3B82F6", opacity: 0.2 }} />
          </div>

          <p style={{
            color: "#1E293B", fontSize: "clamp(17px, 1.5vw, 20px)",
            lineHeight: 1.75, maxWidth: 660, margin: "0 auto 48px",
            fontWeight: 600, letterSpacing: "0.005em", position: "relative",
          }}>
            Partner with us to transform your business through{" "}
            <span style={{ color: "#1E4FD8", fontWeight: 800, borderBottom: "2px solid rgba(30,79,216,0.3)", paddingBottom: "1px" }}>
              intelligent technology, AI automation,
            </span>{" "}
            and digital innovation.
          </p>

          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", position: "relative" }}>
            <button
              onClick={() => { const el = document.getElementById("contact"); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 94, behavior: "smooth" }); }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 18px 48px rgba(10,27,92,0.3)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 6px 28px rgba(10,27,92,0.2)"; }}
              style={{
                background: "linear-gradient(135deg, #0A1B5C, #1E4FD8)",
                border: "none", color: "#fff", fontWeight: 800,
                fontSize: 16, padding: "18px 44px", borderRadius: 10,
                cursor: "pointer", letterSpacing: "0.03em",
                boxShadow: "0 6px 28px rgba(10,27,92,0.2)",
                transition: "transform 0.15s ease, box-shadow 0.15s ease",
                whiteSpace: "nowrap",
              }}>
              Get Started →
            </button>
            <button
              onClick={scrollToServices}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.background = "#0A1B5C"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#0A1B5C"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#0A1B5C"; e.currentTarget.style.borderColor = "rgba(10,27,92,0.2)"; }}
              style={{
                background: "transparent",
                border: "2px solid rgba(10,27,92,0.2)",
                color: "#0A1B5C", fontWeight: 700,
                fontSize: 16, padding: "17px 44px", borderRadius: 10,
                cursor: "pointer", letterSpacing: "0.03em",
                transition: "all 0.15s ease", whiteSpace: "nowrap",
              }}>
              View Our Services
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}