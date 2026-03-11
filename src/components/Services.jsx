import { useState } from "react";
import { Globe, Database, Brain, Shield, BarChart3, Lightbulb, Package, Lock, Palette, ShieldAlert, FileSearch, Network, PieChart } from "lucide-react";

export default function Services() {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 0, label: "Web & Software Development", icon: <Globe size={20} color="#1E4FD8" strokeWidth={1.8} />,
      services: [
        { icon: <Globe size={36} color="#fff" strokeWidth={1.6} />, title: "Web & Application Development", desc: "Static & dynamic websites, e-commerce platforms, and custom software solutions built precisely to your business needs with modern tech stacks." },
        { icon: <Database size={36} color="#fff" strokeWidth={1.6} />, title: "End-to-End SAP ABAP Development", desc: "Custom ABAP solutions, integration, migration & performance optimization, L3 support and continuous enhancements for enterprise SAP environments." },
        { icon: <Package size={36} color="#fff" strokeWidth={1.6} />, title: "Enterprise & Business Solutions", desc: "Custom ERP implementation, POS (Point of Sale) systems, and CRM (Customer Relationship Management) solutions tailored for your operations." },
        { icon: <Palette size={36} color="#fff" strokeWidth={1.6} />, title: "Design & User Experience", desc: "Professional UI/UX design, user-centric interface & experience design, and product & application design that puts people first." },
      ],
    },
    {
      id: 1, label: "AI & Advanced Technology", icon: <Brain size={20} color="#1E4FD8" strokeWidth={1.8} />,
      services: [
        { icon: <Brain size={36} color="#fff" strokeWidth={1.6} />, title: "AI & Advanced Technology Solutions", desc: "AI integration in existing software, AI-powered software solutions, and intelligent automation & smart systems to modernize your business." },
        { icon: <BarChart3 size={36} color="#fff" strokeWidth={1.6} />, title: "Data Analytics & Intelligence", desc: "Dashboard & analytics solutions, data analytics & business intelligence, and reporting & performance insights for data-driven decision making." },
        { icon: <Lightbulb size={36} color="#fff" strokeWidth={1.6} />, title: "Consulting & Strategy", desc: "Business consulting, digital transformation strategy, and business growth & profit optimization to guide your company into the future." },
        { icon: <PieChart size={36} color="#fff" strokeWidth={1.6} />, title: "Annual Maintenance Contract", desc: "Comprehensive system maintenance & monitoring, regular updates, security checks & performance optimization, and priority technical support & quick issue resolution." },
      ],
    },
    {
      id: 2, label: "Cybersecurity", icon: <Shield size={20} color="#1E4FD8" strokeWidth={1.8} />,
      services: [
        { icon: <ShieldAlert size={36} color="#fff" strokeWidth={1.6} />, title: "Mobile Application Security Testing", desc: "Identify insecure data storage and weak encryption mechanisms, test API communication and authentication security, and prevent reverse engineering, tampering, and runtime attacks." },
        { icon: <Lock size={36} color="#fff" strokeWidth={1.6} />, title: "API Security Testing", desc: "Detect authentication and authorization flaws, identify business logic and data exposure risks, and prevent API abuse through rate limiting and security controls." },
        { icon: <Shield size={36} color="#fff" strokeWidth={1.6} />, title: "Web Application Security Testing (VAPT)", desc: "Detect OWASP Top 10 vulnerabilities such as SQL Injection, XSS, and CSRF, identify session management flaws, and strengthen application security end-to-end." },
        { icon: <FileSearch size={36} color="#fff" strokeWidth={1.6} />, title: "Source Code Security Review", desc: "Identify insecure coding practices and logical security flaws, improve secure development standards and code quality, and reduce risk of vulnerabilities in future releases." },
        { icon: <Network size={36} color="#fff" strokeWidth={1.6} />, title: "Network Penetration Testing", desc: "Identify exposed services, misconfigurations, and weak access controls, simulate real-world attacks to test network defenses, and strengthen internal and external security architecture." },
      ],
    },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 94, behavior: "smooth" });
  };

  return (
    <section id="services" style={{
      background: "#FFFFFF",
      padding: "120px 4%",
      position: "relative", overflow: "hidden",
      fontFamily: "'Segoe UI', system-ui, sans-serif",
    }}>
      <style>{`
        @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes glowPulse   { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
        @keyframes floatUp     { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }

        .cat-btn {
          display: flex; align-items: center; gap: 10px;
          padding: 13px 24px; border-radius: 8px; cursor: pointer;
          border: 1.5px solid rgba(10,27,92,0.1);
          background: #FFFFFF;
          transition: all 0.2s ease; white-space: nowrap;
          font-size: 15px; font-weight: 600; color: #475569;
          font-family: 'Segoe UI', system-ui, sans-serif;
          letter-spacing: 0.01em;
          box-shadow: 0 1px 4px rgba(10,27,92,0.04);
        }
        .cat-btn:hover {
          border-color: rgba(30,79,216,0.3);
          background: rgba(30,79,216,0.03);
          color: #0A1B5C;
        }
        .cat-btn.active {
          background: linear-gradient(135deg, #0A1B5C, #1E4FD8);
          border-color: transparent;
          color: #FFFFFF;
          font-weight: 700;
          box-shadow: 0 6px 20px rgba(10,27,92,0.25);
        }
        .cat-btn.active svg { color: #fff !important; }

        .service-card {
          background: #FFFFFF;
          border: 1.5px solid rgba(10,27,92,0.08);
          border-radius: 20px;
          padding: 48px 44px;
          transition: all 0.25s ease;
          position: relative; overflow: hidden;
          box-shadow: 0 2px 12px rgba(10,27,92,0.04);
          display: flex; flex-direction: column;
        }
        .service-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #0A1B5C, #1E4FD8, #3B82F6);
          opacity: 0; transition: opacity 0.25s ease;
        }
        .service-card:hover {
          border-color: rgba(30,79,216,0.2);
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(10,27,92,0.1);
        }
        .service-card:hover::before { opacity: 1; }

        .learn-more-btn {
          display: inline-flex; align-items: center; gap: 10px;
          margin-top: auto; padding-top: 32px;
          color: #1E4FD8; font-size: 15px; font-weight: 700;
          cursor: pointer;
          text-decoration: none; border: none; background: none;
          font-family: 'Segoe UI', system-ui, sans-serif;
          letter-spacing: 0.02em;
          transition: gap 0.2s ease;
        }
        .learn-more-btn:hover { gap: 16px; }
        .learn-more-icon {
          width: 34px; height: 34px;
          background: rgba(10,27,92,0.06);
          border: 1px solid rgba(10,27,92,0.1);
          border-radius: 50%; display: flex;
          align-items: center; justify-content: center;
          font-size: 15px; transition: all 0.2s ease; flex-shrink: 0;
        }
        .learn-more-btn:hover .learn-more-icon {
          background: #0A1B5C; color: #fff; border-color: #0A1B5C;
        }

        /* 5-card grid: first row 2 cols, second row 3 cols via auto-fill */
        .services-grid-5 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          align-items: stretch;
        }
        .services-grid-5 .card-5-last {
          grid-column: 1 / -1;
          max-width: calc(50% - 12px);
          margin: 0 auto;
          width: 100%;
        }

        @media (max-width: 1024px) {
          .services-grid   { grid-template-columns: repeat(2, 1fr) !important; }
          .services-grid-5 { grid-template-columns: repeat(2, 1fr) !important; }
          .services-grid-5 .card-5-last { max-width: 100%; grid-column: 1 / -1; }
        }
        @media (max-width: 680px) {
          .services-grid   { grid-template-columns: 1fr !important; }
          .services-grid-5 { grid-template-columns: 1fr !important; }
          .services-grid-5 .card-5-last { max-width: 100%; grid-column: auto; }
          .cat-tabs { flex-direction: column !important; }
          .cat-btn  { width: 100% !important; }
        }
      `}</style>

      {/* BG grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `radial-gradient(circle, rgba(10,27,92,0.07) 1px, transparent 1px)`,
        backgroundSize: "32px 32px",
        pointerEvents: "none", opacity: 0.55,
      }} />
      <div style={{
        position: "absolute", top: "-20%", right: "-10%",
        width: "55vw", height: "70vh",
        background: "radial-gradient(ellipse, rgba(10,27,92,0.055) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-10%", left: "-5%",
        width: "40vw", height: "50vh",
        background: "radial-gradient(ellipse, rgba(30,79,216,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", left: 0, top: 0, bottom: 0, width: 3,
        background: "linear-gradient(180deg, transparent 0%, #0A1B5C 30%, #1E4FD8 65%, transparent 100%)",
        opacity: 0.14, pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* ── HEADER ── */}
        <div style={{ textAlign: "center", marginBottom: 72, animation: "fadeSlideUp 0.7s ease both" }}>

          {/* Badge — same as Hero status badge */}
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
              Our Services
            </span>
          </div>

          {/* Headline — same clamp as Hero */}
          <div style={{ marginBottom: 0 }}>
            <div style={{
              fontSize: "clamp(40px, 4.8vw, 70px)", fontWeight: 900,
              color: "#0A1B5C", lineHeight: 1.02, letterSpacing: "-0.04em",
            }}>
              Comprehensive
            </div>
            <div style={{
              fontSize: "clamp(40px, 4.8vw, 70px)", fontWeight: 900,
              lineHeight: 1.02, letterSpacing: "-0.04em",
            }}>
              <span style={{
                background: "linear-gradient(135deg, #0A1B5C 0%, #1E4FD8 55%, #3B82F6 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>Technology Solutions</span>
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

          {/* Subtitle — same clamp & weight as Hero desc rows */}
          <p style={{
            color: "#1E293B",
            fontSize: "clamp(17px, 1.5vw, 20px)",
            lineHeight: 1.75, maxWidth: 600, margin: "0 auto",
            fontWeight: 600, letterSpacing: "0.005em",
          }}>
            Comprehensive technology solutions designed to{" "}
            <span style={{
              color: "#1E4FD8", fontWeight: 800,
              borderBottom: "2px solid rgba(30,79,216,0.3)", paddingBottom: "1px",
            }}>transform your business</span>{" "}
            and accelerate growth in the digital age.
          </p>
        </div>

        {/* ── CATEGORY TABS ── */}
        <div className="cat-tabs" style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 56 }}>
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

        {/* ── ACTIVE CATEGORY HEADER BAR ── */}
        <div style={{
          display: "flex", alignItems: "center", gap: 24,
          marginBottom: 40, padding: "28px 36px",
          background: "linear-gradient(135deg, rgba(10,27,92,0.04), rgba(30,79,216,0.03))",
          border: "1.5px solid rgba(10,27,92,0.09)",
          borderRadius: 16, flexWrap: "wrap",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", left: 0, top: 0, bottom: 0, width: 4,
            background: "linear-gradient(180deg, #0A1B5C, #1E4FD8)",
            borderRadius: "16px 0 0 16px",
          }} />

          <div style={{
            width: 64, height: 64, borderRadius: 16,
            background: "linear-gradient(145deg, #0A1B5C, #1E4FD8)",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0, boxShadow: "0 8px 24px rgba(10,27,92,0.2)",
            animation: "floatUp 3s ease-in-out infinite",
          }}>
            <div style={{ filter: "brightness(0) invert(1)", transform: "scale(1.2)" }}>
              {categories[activeCategory].icon}
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <div style={{
              fontSize: "clamp(22px, 2.2vw, 32px)",
              fontWeight: 900, color: "#0A1B5C",
              letterSpacing: "-0.03em", lineHeight: 1.1,
            }}>
              {categories[activeCategory].label}
            </div>
            <div style={{
              fontSize: 13, color: "#1E4FD8", fontWeight: 700,
              letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 8,
            }}>
              {categories[activeCategory].services.length} Services Available
            </div>
          </div>

          <div style={{
            background: "#FFFFFF", border: "1.5px solid rgba(10,27,92,0.1)",
            borderRadius: 8, padding: "12px 24px",
            fontSize: 13, color: "#0A1B5C", fontWeight: 700,
            letterSpacing: "0.04em", whiteSpace: "nowrap",
            boxShadow: "0 2px 8px rgba(10,27,92,0.06)",
          }}>
            Excellence in Every Solution
          </div>
        </div>

        {/* ── SERVICES GRID ── */}
        {categories[activeCategory].services.length === 5 ? (
          <div className="services-grid-5" key={activeCategory}>
            {categories[activeCategory].services.map((service, i) => (
              <div
                key={service.title}
                className={`service-card${i === 4 ? " card-5-last" : ""}`}
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.09}s both` }}
              >
                <ServiceCardInner service={service} />
              </div>
            ))}
          </div>
        ) : (
          <div
            className="services-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, alignItems: "stretch" }}
            key={activeCategory}
          >
            {categories[activeCategory].services.map((service, i) => (
              <div
                key={service.title}
                className="service-card"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.09}s both` }}
              >
                <ServiceCardInner service={service} />
              </div>
            ))}
          </div>
        )}

        {/* ── BOTTOM CTA ── */}
        <div style={{
          marginTop: 80, padding: "64px 56px",
          background: "linear-gradient(135deg, rgba(10,27,92,0.05), rgba(30,79,216,0.03))",
          border: "1.5px solid rgba(10,27,92,0.1)",
          borderRadius: 24,
          display: "flex", alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap", gap: 36,
          position: "relative", overflow: "hidden",
        }}>
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

          <div style={{ position: "relative", flex: "1 1 360px" }}>
            <h3 style={{
              fontSize: "clamp(26px, 2.8vw, 42px)",
              fontWeight: 900, color: "#0A1B5C",
              letterSpacing: "-0.03em", marginBottom: 16, lineHeight: 1.1,
            }}>
              Ready to Transform Your Business?
            </h3>
            <p style={{
              color: "#1E293B",
              fontSize: "clamp(15px, 1.3vw, 18px)",
              lineHeight: 1.8, maxWidth: 540, fontWeight: 500,
            }}>
              Let's build something extraordinary together. Our team of experts is ready to bring your vision to life with cutting-edge technology.
            </p>
          </div>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", position: "relative" }}>
            <button
              onClick={() => scrollTo("contact")}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 14px 36px rgba(10,27,92,0.32)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(10,27,92,0.2)"; }}
              style={{
                background: "linear-gradient(135deg, #0A1B5C, #1E4FD8)",
                border: "none", color: "#fff", fontWeight: 800,
                fontSize: 16, padding: "18px 40px", borderRadius: 10,
                cursor: "pointer", letterSpacing: "0.03em",
                boxShadow: "0 6px 24px rgba(10,27,92,0.2)",
                transition: "transform 0.15s ease, box-shadow 0.15s ease",
                whiteSpace: "nowrap",
              }}>
              Get Started →
            </button>
            <button
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.background = "#0A1B5C"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#0A1B5C"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#0A1B5C"; e.currentTarget.style.borderColor = "rgba(10,27,92,0.2)"; }}
              style={{
                background: "transparent",
                border: "2px solid rgba(10,27,92,0.2)",
                color: "#0A1B5C", fontWeight: 700,
                fontSize: 16, padding: "17px 40px", borderRadius: 10,
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

// ── Extracted card inner so both grid layouts share the same markup ──
function ServiceCardInner({ service }) {
  return (
    <>
      {/* Corner glow */}
      <div style={{
        position: "absolute", top: -40, right: -40, width: 200, height: 200,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(10,27,92,0.035) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Icon box */}
      <div style={{
        width: 76, height: 76, borderRadius: 20,
        background: "linear-gradient(145deg, #0A1B5C, #1E4FD8)",
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: 32, flexShrink: 0,
        boxShadow: "0 8px 24px rgba(10,27,92,0.2)",
      }}>
        {service.icon}
      </div>

      {/* Title — same clamp family as Hero desc rows */}
      <h3 style={{
        fontSize: "clamp(20px, 1.7vw, 26px)",
        fontWeight: 900, color: "#0A1B5C",
        letterSpacing: "-0.025em", lineHeight: 1.2,
        marginBottom: 16,
      }}>
        {service.title}
      </h3>

      {/* Accent underline */}
      <div style={{
        width: 52, height: 3, borderRadius: 2,
        background: "linear-gradient(90deg, #0A1B5C, #1E4FD8)",
        marginBottom: 20,
      }} />

      {/* Description — same clamp & weight as Hero desc sub text */}
      <p style={{
        color: "#1E293B",
        fontSize: "clamp(15px, 1.2vw, 17px)",
        lineHeight: 1.82, fontWeight: 500,
        letterSpacing: "0.005em", flex: 1,
      }}>
        {service.desc}
      </p>

      {/* Learn more */}
      <button
        className="learn-more-btn"
        onMouseEnter={e => { e.currentTarget.style.gap = "16px"; }}
        onMouseLeave={e => { e.currentTarget.style.gap = "10px"; }}
      >
        Learn More
        <span className="learn-more-icon">→</span>
      </button>
    </>
  );
}