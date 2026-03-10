import { useEffect, useState } from "react";

export default function Splash({ onEnter }) {
  const [visible, setVisible] = useState(false);
  const [robotFrame, setRobotFrame] = useState(0);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
    const interval = setInterval(() => {
      setRobotFrame(f => (f + 1) % 3);
    }, 600);
    return () => clearInterval(interval);
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

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }
        @keyframes eyeBlink {
          0%, 90%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }
        @keyframes antennaGlow {
          0%, 100% { box-shadow: 0 0 8px #3B82F6; background: #3B82F6; }
          50% { box-shadow: 0 0 24px #60A5FA; background: #60A5FA; }
        }
        @keyframes armSwing {
          0%, 100% { transform: rotate(-10deg); }
          50% { transform: rotate(10deg); }
        }
        @keyframes armSwingR {
          0%, 100% { transform: rotate(10deg); }
          50% { transform: rotate(-10deg); }
        }
        @keyframes scanLine {
          0% { top: 30%; opacity: 0.8; }
          100% { top: 70%; opacity: 0; }
        }
        @keyframes particleFloat {
          0% { transform: translateY(0px) translateX(0px); opacity: 0.6; }
          50% { opacity: 1; }
          100% { transform: translateY(-80px) translateX(20px); opacity: 0; }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        @keyframes orbitRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* BG GRID */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0,180,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,180,255,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
        pointerEvents: "none"
      }} />

      {/* GLOW TOP */}
      <div style={{
        position: "absolute", top: "-100px", left: "50%",
        transform: "translateX(-50%)",
        width: 700, height: 400, borderRadius: "50%",
        background: "radial-gradient(ellipse, #0066FF18 0%, transparent 70%)",
        pointerEvents: "none"
      }} />

      {/* GLOW BOTTOM */}
      <div style={{
        position: "absolute", bottom: "-100px", left: "50%",
        transform: "translateX(-50%)",
        width: 500, height: 300, borderRadius: "50%",
        background: "radial-gradient(ellipse, #0044CC12 0%, transparent 70%)",
        pointerEvents: "none"
      }} />

      {/* FLOATING PARTICLES */}
      {[
        { left: "15%", top: "70%", delay: "0s", size: 6 },
        { left: "25%", top: "60%", delay: "0.8s", size: 4 },
        { left: "75%", top: "65%", delay: "1.2s", size: 5 },
        { left: "85%", top: "55%", delay: "0.4s", size: 4 },
        { left: "50%", top: "80%", delay: "1.6s", size: 3 },
        { left: "35%", top: "75%", delay: "2s", size: 5 },
        { left: "65%", top: "72%", delay: "0.6s", size: 4 },
      ].map((p, i) => (
        <div key={i} style={{
          position: "absolute",
          left: p.left, top: p.top,
          width: p.size, height: p.size,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #3B82F6, #60A5FA)",
          animation: `particleFloat 3s ease-in-out ${p.delay} infinite`,
          pointerEvents: "none",
        }} />
      ))}

      {/* MAIN CONTENT */}
      <div style={{
        display: "flex", flexDirection: "column",
        alignItems: "center", gap: 32,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.9s ease, transform 0.9s ease",
        zIndex: 1, textAlign: "center", padding: "0 20px"
      }}>

        {/* BADGE */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(0, 120, 255, 0.08)",
          border: "1px solid rgba(0, 150, 255, 0.2)",
          borderRadius: 50, padding: "8px 20px",
        }}>
          <div style={{
            width: 7, height: 7, borderRadius: "50%",
            background: "#0EA5E9", boxShadow: "0 0 8px #0EA5E9",
            animation: "glowPulse 2s ease-in-out infinite",
          }} />
          <span style={{
            color: "#7DD3FC", fontSize: 12, fontWeight: 600,
            letterSpacing: "0.12em", textTransform: "uppercase"
          }}>
            Welcome to the Future of Tech
          </span>
        </div>

        {/* ROBOT */}
        <div style={{
          position: "relative",
          animation: "float 3s ease-in-out infinite",
          marginBottom: 8,
        }}>

          {/* ORBIT RING */}
          <div style={{
            position: "absolute",
            top: "50%", left: "50%",
            width: 180, height: 180,
            marginLeft: -90, marginTop: -90,
            borderRadius: "50%",
            border: "1px dashed rgba(59,130,246,0.2)",
            animation: "orbitRotate 8s linear infinite",
          }}>
            <div style={{
              position: "absolute", top: -5, left: "50%",
              width: 10, height: 10, borderRadius: "50%",
              background: "#3B82F6",
              boxShadow: "0 0 12px #3B82F6",
              transform: "translateX(-50%)",
            }} />
          </div>

          {/* ROBOT BODY */}
          <div style={{ position: "relative", display: "inline-block" }}>

            {/* ANTENNA */}
            <div style={{
              width: 4, height: 22,
              background: "#1E40AF",
              margin: "0 auto",
              borderRadius: 2,
            }}>
              <div style={{
                width: 12, height: 12, borderRadius: "50%",
                marginLeft: -4, marginTop: -6,
                animation: "antennaGlow 1.2s ease-in-out infinite",
              }} />
            </div>

            {/* HEAD */}
            <div style={{
              width: 90, height: 72,
              background: "linear-gradient(145deg, #1E3A8A, #2563EB)",
              borderRadius: 18,
              border: "2px solid rgba(96,165,250,0.4)",
              display: "flex", alignItems: "center", justifyContent: "center",
              gap: 14,
              position: "relative",
              boxShadow: "0 0 30px rgba(59,130,246,0.3)",
              overflow: "hidden",
            }}>
              {/* SCAN LINE */}
              <div style={{
                position: "absolute", left: 0, right: 0,
                height: 2,
                background: "linear-gradient(90deg, transparent, rgba(96,165,250,0.6), transparent)",
                animation: "scanLine 2s ease-in-out infinite",
              }} />
              {/* EYES */}
              {[0, 1].map(i => (
                <div key={i} style={{
                  width: 18, height: 18,
                  background: "radial-gradient(circle at 35% 35%, #93C5FD, #1D4ED8)",
                  borderRadius: "50%",
                  boxShadow: "0 0 10px #3B82F6",
                  animation: "eyeBlink 4s ease-in-out infinite",
                  animationDelay: i === 1 ? "0.1s" : "0s",
                }} />
              ))}
            </div>

            {/* NECK */}
            <div style={{
              width: 24, height: 10,
              background: "#1E3A8A",
              margin: "0 auto",
              borderRadius: 4,
            }} />

            {/* BODY + ARMS ROW */}
            <div style={{ display: "flex", alignItems: "center", gap: 0 }}>

              {/* LEFT ARM */}
              <div style={{
                width: 18, height: 52,
                background: "linear-gradient(180deg, #1E3A8A, #2563EB)",
                borderRadius: 10,
                transformOrigin: "top center",
                animation: "armSwing 2s ease-in-out infinite",
                border: "1px solid rgba(96,165,250,0.3)",
                marginRight: 4,
              }} />

              {/* BODY */}
              <div style={{
                width: 100, height: 80,
                background: "linear-gradient(145deg, #1E3A8A, #1D4ED8)",
                borderRadius: 16,
                border: "2px solid rgba(96,165,250,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexDirection: "column", gap: 8,
                boxShadow: "0 0 20px rgba(59,130,246,0.2)",
                position: "relative",
                overflow: "hidden",
              }}>
                {/* CHEST PANEL */}
                <div style={{
                  width: 48, height: 24,
                  background: "rgba(0,0,0,0.3)",
                  borderRadius: 8,
                  border: "1px solid rgba(96,165,250,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  gap: 6,
                }}>
                  {[0, 1, 2].map(i => (
                    <div key={i} style={{
                      width: 8, height: 8, borderRadius: "50%",
                      background: i === robotFrame ? "#22C55E" : "#1E3A5F",
                      boxShadow: i === robotFrame ? "0 0 8px #22C55E" : "none",
                      transition: "all 0.3s ease",
                    }} />
                  ))}
                </div>
                {/* BODY LINES */}
                <div style={{
                  width: 60, height: 2,
                  background: "linear-gradient(90deg, transparent, rgba(96,165,250,0.4), transparent)",
                  borderRadius: 2,
                }} />
              </div>

              {/* RIGHT ARM */}
              <div style={{
                width: 18, height: 52,
                background: "linear-gradient(180deg, #1E3A8A, #2563EB)",
                borderRadius: 10,
                transformOrigin: "top center",
                animation: "armSwingR 2s ease-in-out infinite",
                border: "1px solid rgba(96,165,250,0.3)",
                marginLeft: 4,
              }} />
            </div>

            {/* LEGS */}
            <div style={{
              display: "flex", justifyContent: "center", gap: 12, marginTop: 6,
            }}>
              {[0, 1].map(i => (
                <div key={i} style={{
                  width: 28, height: 36,
                  background: "linear-gradient(180deg, #1E3A8A, #1E40AF)",
                  borderRadius: "0 0 10px 10px",
                  border: "1px solid rgba(96,165,250,0.3)",
                }}>
                  <div style={{
                    width: "100%", height: 10,
                    background: "#1D4ED8",
                    borderRadius: "0 0 8px 8px",
                    marginTop: 26,
                  }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* COMPANY NAME */}
        <div>
          <h1 style={{
            fontSize: "clamp(38px, 7vw, 76px)",
            fontWeight: 800, color: "#fff",
            lineHeight: 1.05, letterSpacing: "-0.03em",
            marginBottom: 4,
          }}>
            Tech
            <span style={{
              background: "linear-gradient(90deg, #0EA5E9, #3B82F6, #60A5FA)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>Inno</span>
            sphere
          </h1>

          <div style={{
            width: "100%", height: 1,
            background: "linear-gradient(90deg, transparent, #0EA5E960, transparent)",
            margin: "16px 0"
          }} />

          <p style={{
            color: "#94A3B8",
            fontSize: "clamp(14px, 2vw, 18px)",
            fontWeight: 400, lineHeight: 1.7,
            maxWidth: 480, margin: "0 auto",
            letterSpacing: "0.01em"
          }}>
            We design and build{" "}
            <span style={{ color: "#7DD3FC", fontWeight: 500 }}>
              world-class digital products
            </span>
            {" "}that help businesses grow, scale, and lead.
          </p>
        </div>

        {/* GET STARTED BUTTON */}
        <button
          onClick={onEnter}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow = "0 16px 40px rgba(14,165,233,0.55)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 8px 28px rgba(14,165,233,0.35)";
          }}
          style={{
            background: "linear-gradient(135deg, #0066FF, #0EA5E9)",
            border: "none", color: "#fff",
            fontWeight: 800, fontSize: 17,
            padding: "18px 60px",
            borderRadius: 12,
            cursor: "pointer", letterSpacing: "0.04em",
            boxShadow: "0 8px 28px rgba(14,165,233,0.35)",
            transition: "all 0.3s ease",
            marginTop: 8,
          }}>
          Get Started →
        </button>

      </div>
    </div>
  );
}