import { useState } from "react";
import {
  Brain, Bot, MessageSquare, BarChart3,
  Code2, Smartphone, Server, ShoppingCart,
  PieChart, Zap, Shield, Lock, Eye,
  Megaphone, Palette, Search, Target,
} from "lucide-react";

export default function Services() {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 0,
      label: "AI & Machine Learning",
      icon: <Brain size={20} color="#60A5FA" strokeWidth={1.8} />,
      services: [
        {
          icon: <Brain size={32} color="#60A5FA" strokeWidth={1.6} />,
          title: "Machine Learning & Predictive Analytics",
          desc: "Build intelligent systems that learn from data, predict outcomes, and optimize decision-making with advanced ML algorithms and statistical modeling.",
        },
        {
          icon: <Bot size={32} color="#60A5FA" strokeWidth={1.6} />,
          title: "AI Automation & Smart Workflows",
          desc: "Streamline operations with intelligent automation—reducing manual effort, accelerating processes, and eliminating human error through AI-powered workflows.",
        },
        {
          icon: <MessageSquare size={32} color="#60A5FA" strokeWidth={1.6} />,
          title: "Chatbots & AI Assistants",
          desc: "Deploy conversational AI that engages customers 24/7, handles inquiries instantly, and improves user experience with natural language processing.",
        },
        {
          icon: <BarChart3 size={32} color="#60A5FA" strokeWidth={1.6} />,
          title: "Data Science & Advanced Modeling",
          desc: "Extract actionable insights from complex datasets using statistical analysis, data mining, and custom modeling to drive strategic business decisions.",
        },
      ],
    },
    {
      id: 1,
      label: "Software Development",
      icon: <Code2 size={20} color="#60A5FA" strokeWidth={1.8} />,
      services: [
        {
          icon: <Code2 size={32} color="#60A5FA" strokeWidth={1.6} />,
          title: "Custom Software & Web Development",
          desc: "Custom software solutions, web applications, and enterprise portals tailored to your unique business needs with modern tech stacks.",
        },
        {
          icon: <Smartphone size={32} color="#60A5FA" strokeWidth={1.6} />,
          title: "Mobile App Development (Android & iOS)",
          desc: "Cross-platform and native mobile applications with complete UI/UX design and app modernization for seamless user experiences.",
        },
        {
          icon: <Server size={32} color="#60A5FA" strokeWidth={1.6} />,
          title: "Backend & API Engineering",
          desc: "Robust backend systems and API development for seamless integration, high performance, and enterprise-grade scalability.",
        },
        {
          icon: <ShoppingCart size={32} color="#60A5FA" strokeWidth={1.6} />,
          title: "ERP, CRM, POS & E-commerce Platforms",
          desc: "Enterprise-grade systems including ERP development, CRM solutions, POS & inventory management, and full-featured e-commerce platforms.",
        },
      ],
    },
    {
      id: 2,
      label: "Business Intelligence",
      icon: <PieChart size={20} color="#60A5FA" strokeWidth={1.8} />,
      services: [
        {
          icon: <PieChart size={32} color="#60A5FA" strokeWidth={1.6} />,
          title: "Power BI & Tableau Dashboards",
          desc: "Power BI, Tableau, and custom dashboards with automated reporting, real-time data visualization, and strategic business insights.",
        },
        {
          icon: <Zap size={32} color="#60A5FA" strokeWidth={1.6} />,
          title: "Business Automation & RPA",
          desc: "Workflow automation, robotic process automation, and end-to-end automation of HR, sales, and operations processes for maximum efficiency.",
        },
      ],
    },
    {
      id: 3,
      label: "Cybersecurity",
      icon: <Shield size={20} color="#60A5FA" strokeWidth={1.8} />,
      services: [
        {
          icon: <Shield size={32} color="#60A5FA" strokeWidth={1.6} />,
          title: "Security Architecture & Assessment",
          desc: "Comprehensive security audits, vulnerability assessments, and penetration testing to identify and eliminate potential threats before they become problems.",
        },
        {
          icon: <Lock size={32} color="#60A5FA" strokeWidth={1.6} />,
          title: "Data Protection & Encryption",
          desc: "Enterprise-grade encryption, secure data storage solutions, and compliance with industry standards including GDPR, HIPAA, and ISO 27001.",
        },
        {
          icon: <Eye size={32} color="#60A5FA" strokeWidth={1.6} />,
          title: "Threat Detection & Response",
          desc: "Real-time monitoring, intrusion detection systems, and rapid incident response to protect your business from evolving cyber threats.",
        },
      ],
    },
    {
      id: 4,
      label: "Digital Marketing",
      icon: <Megaphone size={20} color="#60A5FA" strokeWidth={1.8} />,
      services: [
        {
          icon: <Megaphone size={32} color="#60A5FA" strokeWidth={1.6} />,
          title: "Social Media Management",
          desc: "Instagram, Facebook & LinkedIn management with daily posting, content planning, and strategic brand growth for maximum engagement.",
        },
        {
          icon: <Palette size={32} color="#60A5FA" strokeWidth={1.6} />,
          title: "Digital Branding",
          desc: "Brand identity, storytelling, logo design, and creative content including reels, posters, and advertisements that make you stand out.",
        },
        {
          icon: <Search size={32} color="#60A5FA" strokeWidth={1.6} />,
          title: "SEO & Digital Presence",
          desc: "On-page and off-page SEO, website optimization, and Google Business Profile management for maximum visibility and organic traffic.",
        },
        {
          icon: <Target size={32} color="#60A5FA" strokeWidth={1.6} />,
          title: "Paid Ads & Lead Generation",
          desc: "Facebook, Instagram, YouTube, and Google Ads with ROI-focused campaigns, A/B testing, and performance tracking for measurable results.",
        },
      ],
    },
  ];

  return (
    <section id="services" style={{
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
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        .cat-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 24px;
          border-radius: 12px;
          cursor: pointer;
          border: 1px solid rgba(59,130,246,0.12);
          background: rgba(255,255,255,0.02);
          transition: all 0.2s ease;
          white-space: nowrap;
          font-size: 15px;
          font-weight: 500;
          color: #94A3B8;
          font-family: 'Segoe UI', sans-serif;
        }
        .cat-btn:hover {
          border-color: rgba(59,130,246,0.3);
          background: rgba(59,130,246,0.06);
          color: #E2E8F0;
        }
        .cat-btn.active {
          border-color: rgba(59,130,246,0.5);
          background: linear-gradient(135deg, rgba(29,78,216,0.2), rgba(59,130,246,0.15));
          color: #fff;
          font-weight: 700;
          box-shadow: 0 4px 20px rgba(59,130,246,0.2);
        }

        .service-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(59,130,246,0.1);
          border-radius: 20px;
          padding: 40px;
          transition: all 0.25s ease;
          position: relative;
          overflow: hidden;
        }
        .service-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, #1D4ED8, #3B82F6, transparent);
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .service-card:hover {
          border-color: rgba(59,130,246,0.35);
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(29,78,216,0.15);
          background: rgba(59,130,246,0.04);
        }
        .service-card:hover::before {
          opacity: 1;
        }

        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .services-grid { grid-template-columns: 1fr !important; }
          .cat-tabs { flex-direction: column !important; }
          .cat-btn { width: 100% !important; }
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
              animation: "glowPulse 2s ease-in-out infinite"
            }} />
            <span style={{
              fontSize: 12, color: "#93C5FD",
              fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase"
            }}>Our Services</span>
          </div>

          <h2 style={{
            fontSize: "clamp(36px, 4.5vw, 64px)",
            fontWeight: 900, color: "#FFFFFF",
            letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 24,
          }}>
            Comprehensive{" "}
            <span style={{
              background: "linear-gradient(90deg, #3B82F6, #60A5FA, #93C5FD)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>Technology Solutions</span>
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
            Comprehensive technology solutions designed to{" "}
            <span style={{ color: "#60A5FA", fontWeight: 600 }}>transform your business</span>{" "}
            and accelerate growth in the digital age.
          </p>
        </div>

        {/* ── CATEGORY TABS ── */}
        <div className="cat-tabs" style={{
          display: "flex", flexWrap: "wrap", gap: 12,
          justifyContent: "center", marginBottom: 60,
        }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`cat-btn ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* ── ACTIVE CATEGORY HEADER ── */}
        <div style={{
          display: "flex", alignItems: "center", gap: 20,
          marginBottom: 40, padding: "28px 36px",
          background: "rgba(29,78,216,0.08)",
          border: "1px solid rgba(59,130,246,0.2)",
          borderRadius: 16, flexWrap: "wrap",
        }}>
          <div style={{
            width: 56, height: 56, borderRadius: 14,
            background: "linear-gradient(145deg, #1E3A8A, #3B82F6)",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0, boxShadow: "0 0 24px rgba(59,130,246,0.35)",
            animation: "floatUp 3s ease-in-out infinite",
          }}>
            <div style={{ filter: "brightness(0) invert(1)" }}>
              {categories[activeCategory].icon}
            </div>
          </div>
          <div>
            <div style={{
              fontSize: 30, fontWeight: 900,
              color: "#FFFFFF", letterSpacing: "-0.03em"
            }}>
              {categories[activeCategory].label}
            </div>
            <div style={{
              fontSize: 13, color: "#3B82F6",
              fontWeight: 700, letterSpacing: "0.15em",
              textTransform: "uppercase", marginTop: 4
            }}>
              {categories[activeCategory].services.length} Services Available
            </div>
          </div>
          <div style={{ marginLeft: "auto" }}>
            <div style={{
              background: "rgba(59,130,246,0.1)",
              border: "1px solid rgba(59,130,246,0.25)",
              borderRadius: 50, padding: "10px 20px",
              fontSize: 14, color: "#93C5FD", fontWeight: 600,
            }}>
              Excellence in Every Solution
            </div>
          </div>
        </div>

        {/* ── SERVICES GRID ── */}
        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 24,
          }}
          key={activeCategory}
        >
          {categories[activeCategory].services.map((service, i) => (
            <div
              key={service.title}
              className="service-card"
              style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s both` }}
            >
              {/* Glow blob */}
              <div style={{
                position: "absolute", top: -30, right: -30,
                width: 160, height: 160, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
                pointerEvents: "none",
              }} />

              {/* Icon */}
              <div style={{
                width: 72, height: 72, borderRadius: 18,
                background: "linear-gradient(145deg, #0D1526, #1E3A8A)",
                border: "1px solid rgba(59,130,246,0.25)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 28, flexShrink: 0,
                boxShadow: "0 0 24px rgba(59,130,246,0.2)",
              }}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: 26, fontWeight: 900,
                color: "#FFFFFF", letterSpacing: "-0.03em",
                lineHeight: 1.2, marginBottom: 16,
              }}>
                {service.title}
              </h3>

              {/* Divider */}
              <div style={{
                width: 44, height: 3, borderRadius: 4,
                background: "linear-gradient(90deg, #1D4ED8, #60A5FA)",
                marginBottom: 18,
              }} />

              {/* Description */}
              <p style={{
                color: "#CBD5E1", fontSize: 17,
                lineHeight: 1.85, fontWeight: 400,
              }}>
                {service.desc}
              </p>

              {/* Learn More */}
              <div
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  marginTop: 28, color: "#3B82F6",
                  fontSize: 16, fontWeight: 700,
                  cursor: "pointer", transition: "gap 0.2s ease",
                }}
                onMouseEnter={e => e.currentTarget.style.gap = "14px"}
                onMouseLeave={e => e.currentTarget.style.gap = "8px"}
              >
                Learn More
                <span style={{
                  width: 30, height: 30,
                  background: "rgba(59,130,246,0.1)",
                  border: "1px solid rgba(59,130,246,0.25)",
                  borderRadius: "50%",
                  display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: 14,
                }}>→</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── BOTTOM CTA ── */}
        <div style={{
          marginTop: 80, padding: "60px 52px",
          background: "linear-gradient(135deg, rgba(29,78,216,0.12), rgba(59,130,246,0.06))",
          border: "1px solid rgba(59,130,246,0.2)",
          borderRadius: 24,
          display: "flex", alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap", gap: 32,
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", right: -60, top: -60,
            width: 300, height: 300, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <div style={{ position: "relative" }}>
            <h3 style={{
              fontSize: "clamp(26px, 3vw, 44px)",
              fontWeight: 900, color: "#FFFFFF",
              letterSpacing: "-0.03em", marginBottom: 14,
            }}>
              Ready to Transform Your Business?
            </h3>
            <p style={{
              color: "#CBD5E1", fontSize: 18,
              lineHeight: 1.75, maxWidth: 580,
            }}>
              Let's build something extraordinary together. Our team of experts is ready
              to bring your vision to life with cutting-edge technology.
            </p>
          </div>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", position: "relative" }}>
            <button
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 94, behavior: "instant" });
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 14px 36px rgba(59,130,246,0.6)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 6px 24px rgba(59,130,246,0.4)";
              }}
              style={{
                background: "linear-gradient(135deg, #1D4ED8, #3B82F6)",
                border: "none", color: "#fff",
                fontWeight: 800, fontSize: 17,
                padding: "18px 40px", borderRadius: 10,
                cursor: "pointer", letterSpacing: "0.03em",
                boxShadow: "0 6px 24px rgba(59,130,246,0.4)",
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
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)";
                e.currentTarget.style.color = "#60A5FA";
              }}
              style={{
                background: "transparent",
                border: "2px solid rgba(59,130,246,0.4)",
                color: "#60A5FA", fontWeight: 700, fontSize: 17,
                padding: "17px 40px", borderRadius: 10,
                cursor: "pointer", letterSpacing: "0.03em",
                transition: "all 0.15s ease", whiteSpace: "nowrap",
              }}>
              Book Consultation
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}