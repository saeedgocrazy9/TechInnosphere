import { Brain, TrendingUp, Building2, Pill, Landmark, Monitor, Rocket, Clock, Zap, Star } from "lucide-react";

export default function Roadmap() {

  const products = [
    {
      phase: "Phase 1",
      status: "In Development",
      statusColor: "#22C55E",
      statusBg: "rgba(34,197,94,0.1)",
      statusBorder: "rgba(34,197,94,0.25)",
      icon: <Brain size={32} color="#60A5FA" strokeWidth={1.6} />,
      iconBg: "linear-gradient(145deg, #1E3A8A, #3B82F6)",
      iconGlow: "rgba(59,130,246,0.4)",
      title: "AI Insight Engine",
      subtitle: "Analytics SaaS Platform",
      desc: "Automated analytics SaaS platform with machine learning-powered business intelligence.",
      accentColor: "#60A5FA",
      accentBorder: "rgba(59,130,246,0.2)",
      tags: ["AI/ML", "SaaS", "Analytics", "BI"],
    },
    {
      phase: "Phase 1",
      status: "In Development",
      statusColor: "#22C55E",
      statusBg: "rgba(34,197,94,0.1)",
      statusBorder: "rgba(34,197,94,0.25)",
      icon: <TrendingUp size={32} color="#FCD34D" strokeWidth={1.6} />,
      iconBg: "linear-gradient(145deg, #92400E, #F59E0B)",
      iconGlow: "rgba(251,191,36,0.4)",
      title: "AlgoTrade Pro",
      subtitle: "Algorithmic Trading Platform",
      desc: "Trading and financial automation powered by algorithmic intelligence and real-time market data.",
      accentColor: "#FCD34D",
      accentBorder: "rgba(251,191,36,0.2)",
      tags: ["Algo Trading", "Finance", "AI", "Real-Time"],
    },
    {
      phase: "Phase 2",
      status: "Coming Soon",
      statusColor: "#A78BFA",
      statusBg: "rgba(167,139,250,0.1)",
      statusBorder: "rgba(167,139,250,0.25)",
      icon: <Building2 size={32} color="#A78BFA" strokeWidth={1.6} />,
      iconBg: "linear-gradient(145deg, #2E1065, #7C3AED)",
      iconGlow: "rgba(167,139,250,0.4)",
      title: "Smart Construction ERP",
      subtitle: "Construction Management Platform",
      desc: "Industry-specific enterprise resource planning for construction and project management.",
      accentColor: "#A78BFA",
      accentBorder: "rgba(167,139,250,0.2)",
      tags: ["ERP", "Construction", "Enterprise", "PM"],
    },
    {
      phase: "Phase 2",
      status: "Coming Soon",
      statusColor: "#34D399",
      statusBg: "rgba(52,211,153,0.1)",
      statusBorder: "rgba(52,211,153,0.25)",
      icon: <Pill size={32} color="#34D399" strokeWidth={1.6} />,
      iconBg: "linear-gradient(145deg, #064E3B, #059669)",
      iconGlow: "rgba(52,211,153,0.4)",
      title: "MedHub POS SaaS",
      subtitle: "Pharmacy Management Solution",
      desc: "Pharmacy SaaS solution with inventory management, billing, and compliance automation.",
      accentColor: "#34D399",
      accentBorder: "rgba(52,211,153,0.2)",
      tags: ["Healthcare", "POS", "SaaS", "Compliance"],
    },
    {
      phase: "Phase 3",
      status: "Planned",
      statusColor: "#F472B6",
      statusBg: "rgba(244,114,182,0.1)",
      statusBorder: "rgba(244,114,182,0.25)",
      icon: <Landmark size={32} color="#F472B6" strokeWidth={1.6} />,
      iconBg: "linear-gradient(145deg, #831843, #DB2777)",
      iconGlow: "rgba(244,114,182,0.4)",
      title: "Aarohan GovTech Suite",
      subtitle: "Smart City & Governance Platform",
      desc: "Smart city and governance tools including digital transportation, education, and public services platforms.",
      accentColor: "#F472B6",
      accentBorder: "rgba(244,114,182,0.2)",
      tags: ["GovTech", "Smart City", "Transport", "Education"],
    },
    {
      phase: "Phase 3",
      status: "Planned",
      statusColor: "#38BDF8",
      statusBg: "rgba(56,189,248,0.1)",
      statusBorder: "rgba(56,189,248,0.25)",
      icon: <Monitor size={32} color="#38BDF8" strokeWidth={1.6} />,
      iconBg: "linear-gradient(145deg, #0C4A6E, #0284C7)",
      iconGlow: "rgba(56,189,248,0.4)",
      title: "Virtual Office 2.0",
      subtitle: "Remote Workspace Platform",
      desc: "Subscription-based remote workspace platform for distributed teams.",
      accentColor: "#38BDF8",
      accentBorder: "rgba(56,189,248,0.2)",
      tags: ["Remote Work", "SaaS", "Collaboration", "Teams"],
    },
  ];

  const phases = [
    { label: "Phase 1", title: "Build & Launch", color: "#22C55E", desc: "AI Insight Engine + AlgoTrade Pro" },
    { label: "Phase 2", title: "Expand", color: "#A78BFA", desc: "ERP + Healthcare SaaS" },
    { label: "Phase 3", title: "Scale", color: "#38BDF8", desc: "GovTech + Virtual Office" },
  ];

  return (
    <section id="roadmap" style={{
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
          50% { transform: translateY(-8px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.2); opacity: 1; }
        }
        @keyframes lineGrow {
          from { width: 0; }
          to { width: 100%; }
        }

        .roadmap-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(59,130,246,0.1);
          border-radius: 24px;
          padding: 40px;
          position: relative;
          overflow: hidden;
          transition: all 0.25s ease;
        }
        .roadmap-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .roadmap-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 28px 70px rgba(0,0,0,0.3);
        }
        .roadmap-card:hover::before { opacity: 1; }

        .product-tag {
          padding: 6px 14px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 600;
          cursor: default;
          white-space: nowrap;
          transition: all 0.2s;
        }
        .product-tag:hover { transform: translateY(-2px); }

        .phase-pill {
          padding: 10px 22px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 700;
          cursor: default;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        @media (max-width: 1200px) {
          .roadmap-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .roadmap-grid { grid-template-columns: 1fr !important; }
          .roadmap-card { padding: 28px !important; }
          .phases-row { flex-direction: column !important; }
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

      {/* GLOW CENTER */}
      <div style={{
        position: "absolute", top: "10%", left: "50%",
        transform: "translateX(-50%)",
        width: "70vw", height: "50vh",
        background: "radial-gradient(ellipse, rgba(29,78,216,0.1) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1600, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* ── HEADER ── */}
        <div style={{ textAlign: "center", marginBottom: 72, animation: "fadeSlideUp 0.7s ease both" }}>
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
            }}>Innovation Roadmap</span>
          </div>

          <h2 style={{
            fontSize: "clamp(36px, 4.5vw, 64px)",
            fontWeight: 900, color: "#FFFFFF",
            letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 24,
          }}>
            Future{" "}
            <span style={{
              background: "linear-gradient(90deg, #3B82F6, #60A5FA, #93C5FD)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>Products & Platforms</span>
          </h2>

          <div style={{
            width: 72, height: 4, borderRadius: 4,
            background: "linear-gradient(90deg, #1D4ED8, #60A5FA)",
            margin: "0 auto 24px",
          }} />

          <p style={{
            color: "#CBD5E1", fontSize: 18,
            lineHeight: 1.8, maxWidth: 680, margin: "0 auto",
          }}>
            Future products and platforms that will shape the{" "}
            <span style={{ color: "#60A5FA", fontWeight: 600 }}>
              next generation of business technology
            </span>
          </p>
        </div>

        {/* ── PHASE TRACKER ── */}
        <div className="phases-row" style={{
          display: "flex", gap: 0,
          marginBottom: 64, alignItems: "stretch",
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(59,130,246,0.12)",
          borderRadius: 20, overflow: "hidden",
        }}>
          {phases.map((phase, i) => (
            <div key={phase.label} style={{
              flex: 1, padding: "32px 36px",
              borderRight: i < phases.length - 1 ? "1px solid rgba(59,130,246,0.08)" : "none",
              position: "relative", overflow: "hidden",
              transition: "background 0.2s ease",
            }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(59,130,246,0.04)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              {/* phase number bg */}
              <div style={{
                position: "absolute", right: 16, top: "50%",
                transform: "translateY(-50%)",
                fontSize: 80, fontWeight: 900,
                color: "rgba(255,255,255,0.02)",
                lineHeight: 1, userSelect: "none",
              }}>{i + 1}</div>

              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 10, position: "relative" }}>
                <div style={{
                  width: 12, height: 12, borderRadius: "50%",
                  background: phase.color,
                  boxShadow: `0 0 12px ${phase.color}`,
                  animation: "pulse 2s ease-in-out infinite",
                  animationDelay: `${i * 0.3}s`,
                  flexShrink: 0,
                }} />
                <span style={{
                  fontSize: 12, fontWeight: 700,
                  color: phase.color, letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}>{phase.label}</span>
              </div>

              <div style={{
                fontSize: 24, fontWeight: 900,
                color: "#FFFFFF", letterSpacing: "-0.03em",
                marginBottom: 6, position: "relative",
              }}>{phase.title}</div>

              <div style={{
                fontSize: 15, color: "#64748B",
                fontWeight: 500, position: "relative",
              }}>{phase.desc}</div>
            </div>
          ))}
        </div>

        {/* ── PRODUCTS GRID ── */}
        <div className="roadmap-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
          marginBottom: 80,
        }}>
          {products.map((product, i) => (
            <div
              key={product.title}
              className="roadmap-card"
              style={{
                animation: `fadeSlideUp 0.5s ease ${i * 0.08}s both`,
                borderColor: product.accentBorder,
              }}
            >
              {/* top accent line per card */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 2,
                background: `linear-gradient(90deg, ${product.accentColor}, transparent)`,
                opacity: 0.5,
              }} />

              {/* Corner glow */}
              <div style={{
                position: "absolute", top: -40, right: -40,
                width: 180, height: 180, borderRadius: "50%",
                background: `radial-gradient(circle, ${product.iconGlow.replace("0.4", "0.07")} 0%, transparent 70%)`,
                pointerEvents: "none",
              }} />

              {/* Top row: icon + phase + status */}
              <div style={{
                display: "flex", alignItems: "flex-start",
                justifyContent: "space-between", marginBottom: 28,
              }}>
                <div style={{
                  width: 72, height: 72, borderRadius: 18,
                  background: product.iconBg,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: `0 0 24px ${product.iconGlow}`,
                  animation: `floatUp ${4 + i * 0.3}s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                }}>
                  {product.icon}
                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
                  <div style={{
                    fontSize: 11, fontWeight: 700,
                    color: "#3B82F6", letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}>{product.phase}</div>
                  <div style={{
                    display: "flex", alignItems: "center", gap: 6,
                    background: product.statusBg,
                    border: `1px solid ${product.statusBorder}`,
                    borderRadius: 50, padding: "6px 14px",
                  }}>
                    <div style={{
                      width: 6, height: 6, borderRadius: "50%",
                      background: product.statusColor,
                      boxShadow: `0 0 8px ${product.statusColor}`,
                      animation: "pulse 2s ease-in-out infinite",
                    }} />
                    <span style={{
                      fontSize: 12, fontWeight: 700,
                      color: product.statusColor,
                      letterSpacing: "0.08em",
                    }}>{product.status}</span>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: 26, fontWeight: 900,
                color: "#FFFFFF", letterSpacing: "-0.03em",
                lineHeight: 1.2, marginBottom: 6,
              }}>{product.title}</h3>

              {/* Subtitle */}
              <div style={{
                fontSize: 14, fontWeight: 700,
                color: product.accentColor,
                letterSpacing: "0.05em", marginBottom: 14,
              }}>{product.subtitle}</div>

              {/* Divider */}
              <div style={{
                width: 44, height: 3, borderRadius: 4,
                background: `linear-gradient(90deg, ${product.accentColor}, transparent)`,
                marginBottom: 18,
              }} />

              {/* Description */}
              <p style={{
                color: "#CBD5E1", fontSize: 16,
                lineHeight: 1.85, marginBottom: 28,
              }}>{product.desc}</p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {product.tags.map((tag) => (
                  <span key={tag} className="product-tag" style={{
                    background: `${product.statusBg}`,
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
          background: "linear-gradient(135deg, rgba(29,78,216,0.14), rgba(59,130,246,0.06), rgba(13,148,136,0.08))",
          border: "1px solid rgba(59,130,246,0.2)",
          borderRadius: 28,
          textAlign: "center",
          position: "relative", overflow: "hidden",
        }}>
          {/* BG glows */}
          <div style={{
            position: "absolute", top: -80, left: -80,
            width: 320, height: 320, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(29,78,216,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", bottom: -80, right: -80,
            width: 320, height: 320, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(13,148,136,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "rgba(29,78,216,0.1)",
            border: "1px solid rgba(59,130,246,0.25)",
            borderRadius: 50, padding: "10px 24px", marginBottom: 28,
            position: "relative",
          }}>
            <Rocket size={14} color="#93C5FD" />
            <span style={{
              fontSize: 12, color: "#93C5FD",
              fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
            }}>TechInnosphere</span>
          </div>

          <h2 style={{
            fontSize: "clamp(32px, 4vw, 60px)",
            fontWeight: 900, color: "#FFFFFF",
            letterSpacing: "-0.03em", lineHeight: 1.1,
            marginBottom: 20, position: "relative",
          }}>
            From Vision to Software,{" "}
            <span style={{
              background: "linear-gradient(90deg, #3B82F6, #60A5FA, #2DD4BF)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>We Build It All</span>
          </h2>

          <div style={{
            width: 72, height: 4, borderRadius: 4,
            background: "linear-gradient(90deg, #1D4ED8, #60A5FA)",
            margin: "0 auto 28px",
          }} />

          <p style={{
            color: "#CBD5E1", fontSize: 18,
            lineHeight: 1.8, maxWidth: 660, margin: "0 auto 48px",
            position: "relative",
          }}>
            Partner with us to transform your business through{" "}
            <span style={{ color: "#60A5FA", fontWeight: 600 }}>
              intelligent technology, AI automation,
            </span>{" "}
            and digital innovation.
          </p>

          <div style={{
            display: "flex", gap: 20,
            justifyContent: "center", flexWrap: "wrap",
            position: "relative",
          }}>
            <button
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 94, behavior: "instant" });
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 18px 48px rgba(59,130,246,0.65)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 6px 28px rgba(59,130,246,0.4)";
              }}
              style={{
                background: "linear-gradient(135deg, #1D4ED8, #3B82F6)",
                border: "none", color: "#fff",
                fontWeight: 800, fontSize: 18,
                padding: "20px 52px", borderRadius: 10,
                cursor: "pointer", letterSpacing: "0.03em",
                boxShadow: "0 6px 28px rgba(59,130,246,0.4)",
                transition: "transform 0.15s ease, box-shadow 0.15s ease",
                whiteSpace: "nowrap",
              }}>
              Get Started →
            </button>
            <button
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.borderColor = "#3B82F6";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.background = "rgba(59,130,246,0.1)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)";
                e.currentTarget.style.color = "#60A5FA";
                e.currentTarget.style.background = "transparent";
              }}
              style={{
                background: "transparent",
                border: "2px solid rgba(59,130,246,0.4)",
                color: "#60A5FA", fontWeight: 700, fontSize: 18,
                padding: "19px 52px", borderRadius: 10,
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