import { useEffect, useState } from "react";

export default function Splash({ onEnter }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div style={{
      height: "100vh",
      background: "#020B18",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      fontFamily: "'Segoe UI', sans-serif",
    }}>

      {/* ── TOP GRID LINES ── */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0,180,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,180,255,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
        pointerEvents: "none"
      }} />

      {/* ── GLOW TOP CENTER ── */}
      <div style={{
        position: "absolute",
        top: "-100px", left: "50%",
        transform: "translateX(-50%)",
        width: 700, height: 400,
        borderRadius: "50%",
        background: "radial-gradient(ellipse, #0066FF18 0%, transparent 70%)",
        pointerEvents: "none"
      }} />

      {/* ── GLOW BOTTOM ── */}
      <div style={{
        position: "absolute",
        bottom: "-100px", left: "50%",
        transform: "translateX(-50%)",
        width: 500, height: 300,
        borderRadius: "50%",
        background: "radial-gradient(ellipse, #0044CC12 0%, transparent 70%)",
        pointerEvents: "none"
      }} />

      {/* ── CONTENT WRAPPER ── */}
      <div style={{
        display: "flex", flexDirection: "column",
        alignItems: "center", gap: 28,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.9s ease, transform 0.9s ease",
        zIndex: 1, textAlign: "center", padding: "0 20px"
      }}>

        {/* ── BADGE ── */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(0, 120, 255, 0.08)",
          border: "1px solid rgba(0, 150, 255, 0.2)",
          borderRadius: 50, padding: "8px 20px",
        }}>
          <div style={{
            width: 7, height: 7, borderRadius: "50%",
            background: "#0EA5E9",
            boxShadow: "0 0 8px #0EA5E9"
          }} />
          <span style={{
            color: "#7DD3FC",
            fontSize: 12, fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase"
          }}>
            Welcome to the Future of Tech
          </span>
        </div>

        {/* ── LOGO ICON ── */}
        <div style={{
          width: 90, height: 90, borderRadius: 24,
          background: "linear-gradient(145deg, #0066FF, #0EA5E9)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 38, fontWeight: 900, color: "#fff",
          boxShadow: "0 0 60px rgba(0, 120, 255, 0.4), 0 0 120px rgba(0, 120, 255, 0.15)",
          letterSpacing: -1
        }}>T</div>

        {/* ── COMPANY NAME ── */}
        <div>
          <h1 style={{
            fontSize: "clamp(38px, 7vw, 76px)",
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: 4
          }}>
            Tech
            <span style={{
              background: "linear-gradient(90deg, #0EA5E9, #3B82F6, #60A5FA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>Inno</span>
            sphere
          </h1>

          {/* ── DIVIDER LINE ── */}
          <div style={{
            width: "100%", height: 1,
            background: "linear-gradient(90deg, transparent, #0EA5E960, transparent)",
            margin: "16px 0"
          }} />

          {/* ── TAGLINE ── */}
          <p style={{
            color: "#94A3B8",
            fontSize: "clamp(14px, 2vw, 18px)",
            fontWeight: 400,
            lineHeight: 1.7,
            maxWidth: 480,
            margin: "0 auto",
            letterSpacing: "0.01em"
          }}>
            We design and build{" "}
            <span style={{ color: "#7DD3FC", fontWeight: 500 }}>
              world-class digital products
            </span>
            {" "}that help businesses grow, scale, and lead.
          </p>
        </div>

        {/* ── BUTTON GROUP ── */}
        <div style={{ display: "flex", gap: 14, marginTop: 8, flexWrap: "wrap", justifyContent: "center" }}>

          {/* Primary */}
          <button
            onClick={onEnter}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 16px 40px rgba(14,165,233,0.45)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(14,165,233,0.25)";
            }}
            style={{
              background: "linear-gradient(135deg, #0066FF, #0EA5E9)",
              border: "none", color: "#fff",
              fontWeight: 700, fontSize: 15,
              padding: "15px 40px", borderRadius: 50,
              cursor: "pointer", letterSpacing: "0.04em",
              boxShadow: "0 8px 24px rgba(14,165,233,0.25)",
              transition: "all 0.3s ease"
            }}>
            Get Started →
          </button>

          {/* Secondary */}
          <button
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(14,165,233,0.08)";
              e.currentTarget.style.borderColor = "#0EA5E9";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(14,165,233,0.3)";
              e.currentTarget.style.color = "#7DD3FC";
            }}
            style={{
              background: "transparent",
              border: "1.5px solid rgba(14,165,233,0.3)",
              color: "#7DD3FC",
              fontWeight: 600, fontSize: 15,
              padding: "15px 40px", borderRadius: 50,
              cursor: "pointer", letterSpacing: "0.04em",
              transition: "all 0.3s ease"
            }}>
            View Our Work
          </button>

        </div>

        {/* ── BOTTOM STATS ── */}
        <div style={{
          display: "flex", gap: 48, marginTop: 20,
          borderTop: "1px solid rgba(255,255,255,0.05)",
          paddingTop: 28, flexWrap: "wrap", justifyContent: "center"
        }}>
          {[
            ["150+", "Projects Delivered"],
            ["50+", "Happy Clients"],
            ["8+", "Years Experience"],
            ["99%", "Client Satisfaction"],
          ].map(([number, label]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{
                fontWeight: 800, fontSize: 26,
                background: "linear-gradient(90deg, #0EA5E9, #60A5FA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-0.02em"
              }}>{number}</div>
              <div style={{
                color: "#64748B", fontSize: 12,
                fontWeight: 500, marginTop: 3,
                letterSpacing: "0.05em",
                textTransform: "uppercase"
              }}>{label}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}