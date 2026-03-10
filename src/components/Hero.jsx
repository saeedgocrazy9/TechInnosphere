import { useState, useEffect } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [typed, setTyped] = useState("");
  const [clicked, setClicked] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [logoGlow, setLogoGlow] = useState(0);

  const words = ["Software", "AI Solutions", "Automation", "SaaS Products", "Digital Future"];

  const services = [
    { label: "Artificial Intelligence", color: "#3B82F6", dim: "rgba(59,130,246,0.12)" },
    { label: "Full Stack Development",  color: "#60A5FA", dim: "rgba(96,165,250,0.12)"  },
    { label: "Cybersecurity",           color: "#818CF8", dim: "rgba(129,140,248,0.12)" },
    { label: "Business Intelligence",   color: "#38BDF8", dim: "rgba(56,189,248,0.12)"  },
  ];

  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  useEffect(() => {
    const id = setInterval(() => setActiveService(p => (p + 1) % services.length), 2000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setLogoGlow(p => (p + 1) % 3), 1200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let i = 0, deleting = false, current = 0;
    const tick = () => {
      const word = words[current];
      if (!deleting) {
        setTyped(word.slice(0, i + 1)); i++;
        if (i === word.length) { deleting = true; setTimeout(tick, 1800); return; }
      } else {
        setTyped(word.slice(0, i - 1)); i--;
        if (i === 0) { deleting = false; current = (current + 1) % words.length; }
      }
      setTimeout(tick, deleting ? 50 : 90);
    };
    const t = setTimeout(tick, 600);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 94;
      window.scrollTo({ top, behavior: "instant" });
    }
  };

  const tags = ["AI", "Software Development", "Cybersecurity", "Business Intelligence", "Automation", "SaaS"];

  return (
    <section id="home" style={{
      minHeight: "100vh", background: "#020610",
      position: "relative", overflow: "hidden",
      display: "flex", alignItems: "center",
      fontFamily: "'Segoe UI', sans-serif",
    }}>
      <style>{`
        @keyframes floatUp     { 0%,100%{transform:translateY(0);}  50%{transform:translateY(-14px);} }
        @keyframes rotateSlow  { from{transform:rotate(0deg);}      to{transform:rotate(360deg);} }
        @keyframes blinkCursor { 0%,100%{opacity:1;}                50%{opacity:0;} }
        @keyframes fadeSlideUp { from{opacity:0;transform:translateY(40px);} to{opacity:1;transform:translateY(0);} }
        @keyframes pulse       { 0%,100%{opacity:.5;transform:scale(1);} 50%{opacity:1;transform:scale(1.08);} }
        @keyframes rippleGlow  { 0%{transform:scale(.8);opacity:1;} 100%{transform:scale(2.5);opacity:0;} }
        @keyframes tagFloat    { 0%,100%{transform:translateY(0);}  50%{transform:translateY(-8px);} }
        @keyframes scanLine    { 0%{top:-40%;} 100%{top:140%;} }
        @keyframes serviceIn   { from{opacity:0;transform:translateY(8px);} to{opacity:1;transform:translateY(0);} }

        .hero-btn-primary {
          background: linear-gradient(135deg, #1D4ED8, #3B82F6);
          border: none; color: #fff;
          font-weight: 800; font-size: 18px;
          padding: 18px 40px; border-radius: 10px;
          cursor: pointer; letter-spacing: 0.03em;
          box-shadow: 0 6px 24px rgba(59,130,246,0.4);
          transition: transform 0.15s ease, box-shadow 0.15s ease;
          white-space: nowrap;
        }
        .hero-btn-primary:hover  { transform:translateY(-3px); box-shadow:0 14px 36px rgba(59,130,246,0.6); }
        .hero-btn-secondary {
          background: transparent;
          border: 2px solid rgba(59,130,246,0.5);
          color: #93C5FD; font-weight: 700; font-size: 18px;
          padding: 17px 40px; border-radius: 10px;
          cursor: pointer; letter-spacing: 0.03em;
          transition: all 0.15s ease; white-space: nowrap;
        }
        .hero-btn-secondary:hover { background:rgba(59,130,246,0.1); border-color:#3B82F6; color:#fff; transform:translateY(-3px); }
        .tech-tag {
          background: rgba(59,130,246,0.12);
          border: 1px solid rgba(59,130,246,0.3);
          color: #93C5FD; font-size: 14px; font-weight: 600;
          padding: 10px 20px; border-radius: 50px;
          cursor: default; transition: all 0.2s; white-space: nowrap;
        }
        .tech-tag:hover { background:rgba(59,130,246,0.22); border-color:#3B82F6; color:#fff; transform:translateY(-2px); }
        .service-row { transition: all 0.3s ease; cursor: default; }
        .service-row:hover { background: rgba(255,255,255,0.03) !important; }
        @media (max-width:1024px) { .hero-grid{flex-direction:column!important;} .hero-visual{display:none!important;} }
        @media (max-width:768px)  { .hero-section-inner{padding:110px 4% 60px!important;} .hero-buttons{flex-direction:column!important;} .hero-buttons button{width:100%!important;} }
      `}</style>

      {/* Grid */}
      <div style={{ position:"absolute", inset:0, backgroundImage:`linear-gradient(rgba(59,130,246,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.04) 1px,transparent 1px)`, backgroundSize:"52px 52px", pointerEvents:"none" }} />
      {/* Radial */}
      <div style={{ position:"absolute", top:"-20%", left:"50%", transform:"translateX(-50%)", width:"80vw", height:"60vh", background:"radial-gradient(ellipse,rgba(29,78,216,0.2) 0%,transparent 70%)", pointerEvents:"none" }} />
      {clicked && (
        <div style={{ position:"absolute", top:"15%", left:"10%", width:"50vw", height:"50vh", background:"radial-gradient(ellipse,rgba(59,130,246,0.18) 0%,transparent 70%)", pointerEvents:"none", animation:"rippleGlow 2s ease-out infinite", zIndex:0 }} />
      )}

      <div className="hero-section-inner" style={{
        width:"100%", maxWidth:1600, margin:"0 auto",
        padding:"120px 4% 80px", position:"relative", zIndex:1,
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(30px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}>
        <div className="hero-grid" style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:60 }}>

          {/* ── LEFT ── */}
          <div style={{ flex:"1 1 540px", maxWidth:720 }}>

            <div
              onMouseEnter={() => setClicked(true)}
              onMouseLeave={() => setClicked(false)}
              style={{
                display:"inline-flex", alignItems:"center", gap:10,
                background: clicked ? "rgba(59,130,246,0.15)" : "rgba(29,78,216,0.1)",
                border:`1px solid ${clicked ? "rgba(59,130,246,0.6)" : "rgba(59,130,246,0.25)"}`,
                borderRadius:50, padding:"10px 22px", marginBottom:36,
                animation:"fadeSlideUp 0.6s ease both", cursor:"pointer", position:"relative",
                transition:"all 0.3s ease",
                boxShadow: clicked ? "0 0 40px rgba(59,130,246,0.35),0 0 80px rgba(59,130,246,0.15)" : "none",
              }}>
              {clicked && (
                <div style={{ position:"absolute", inset:-30, borderRadius:"50%", background:"radial-gradient(circle,rgba(59,130,246,0.2) 0%,transparent 70%)", pointerEvents:"none", animation:"rippleGlow 1.5s ease-out infinite", zIndex:-1 }} />
              )}
              <div style={{ width:8, height:8, borderRadius:"50%", background: clicked ? "#60A5FA" : "#22C55E", boxShadow: clicked ? "0 0 14px #60A5FA" : "0 0 10px #22C55E", transition:"all 0.3s ease", animation:"pulse 2s ease-in-out infinite", flexShrink:0 }} />
              <span style={{ fontSize:13, color: clicked ? "#fff" : "#93C5FD", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", transition:"color 0.3s ease" }}>
                Innovation-Driven Technology
              </span>
              <span style={{ fontSize:12, color: clicked ? "#60A5FA" : "#64748B", fontWeight:600, transition:"color 0.3s ease" }}>{clicked ? "✦" : "→"}</span>
            </div>

            <h1 style={{ fontSize:"clamp(42px,5.5vw,80px)", fontWeight:900, color:"#FFFFFF", lineHeight:1.05, letterSpacing:"-0.03em", marginBottom:0, animation:"fadeSlideUp 0.7s ease 0.1s both" }}>
              From Vision to{" "}
              <span style={{ background:"linear-gradient(90deg,#3B82F6,#60A5FA)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>{typed}</span>
              <span style={{ color:"#3B82F6", animation:"blinkCursor 1s step-end infinite", WebkitTextFillColor:"#3B82F6" }}>|</span>
            </h1>

            <h1 style={{ fontSize:"clamp(42px,5.5vw,80px)", fontWeight:900, background:"linear-gradient(90deg,#3B82F6,#60A5FA,#93C5FD)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", lineHeight:1.05, letterSpacing:"-0.03em", marginBottom:32, animation:"fadeSlideUp 0.7s ease 0.15s both" }}>
              We Build It All
            </h1>

            <div style={{ width:72, height:4, borderRadius:4, background:"linear-gradient(90deg,#1D4ED8,#60A5FA)", marginBottom:32, animation:"fadeSlideUp 0.7s ease 0.2s both" }} />

            <p style={{ color:"#CBD5E1", fontSize:"clamp(16px,1.8vw,20px)", lineHeight:1.85, marginBottom:40, maxWidth:640, fontWeight:500, animation:"fadeSlideUp 0.7s ease 0.25s both" }}>
              TechInnosphere delivers{" "}
              <span style={{ color:"#60A5FA", fontWeight:700 }}>end-to-end software engineering</span>,{" "}
              <span style={{ color:"#60A5FA", fontWeight:700 }}>AI-powered automation</span>,
              analytics, and digital transformation solutions built for the modern digital age.
            </p>

            <div style={{ display:"flex", flexWrap:"wrap", gap:12, marginBottom:44, animation:"fadeSlideUp 0.7s ease 0.3s both" }}>
              {tags.map((tag, i) => (
                <span key={tag} className="tech-tag" style={{ animation:`tagFloat ${3 + i * 0.3}s ease-in-out infinite`, animationDelay:`${i * 0.2}s` }}>{tag}</span>
              ))}
            </div>

            <div className="hero-buttons" style={{ display:"flex", gap:18, flexWrap:"wrap", animation:"fadeSlideUp 0.7s ease 0.35s both" }}>
              <button className="hero-btn-primary"   onClick={() => scrollTo("services")}>Get Started →</button>
              <button className="hero-btn-secondary" onClick={() => scrollTo("contact")}>Book Consultation</button>
            </div>
          </div>

          {/* ── RIGHT VISUAL ── */}
          <div className="hero-visual" style={{ flex:"1 1 420px", maxWidth:520, display:"flex", justifyContent:"center", alignItems:"center", animation:"fadeSlideUp 0.9s ease 0.2s both" }}>
            <div style={{ position:"relative", width:460, height:500 }}>

              {/* Outer orbit */}
              <div style={{ position:"absolute", inset:0, borderRadius:"50%", border:"1px dashed rgba(59,130,246,0.15)", animation:"rotateSlow 25s linear infinite" }}>
                {[0,72,144,216,288].map(deg => (
                  <div key={deg} style={{ position:"absolute", width:10, height:10, borderRadius:"50%", background:"#3B82F6", boxShadow:"0 0 10px #3B82F6", top:"50%", left:"50%", transform:`rotate(${deg}deg) translateX(230px) translate(-50%,-50%)` }} />
                ))}
              </div>

              {/* Inner orbit */}
              <div style={{ position:"absolute", inset:50, borderRadius:"50%", border:"1px dashed rgba(59,130,246,0.08)", animation:"rotateSlow 15s linear infinite reverse" }}>
                {[0,120,240].map(deg => (
                  <div key={deg} style={{ position:"absolute", width:7, height:7, borderRadius:"50%", background:"#60A5FA", boxShadow:"0 0 8px #60A5FA", top:"50%", left:"50%", transform:`rotate(${deg}deg) translateX(170px) translate(-50%,-50%)` }} />
                ))}
              </div>

              {/* ── CENTER CARD ── */}
              <div style={{
                position:"absolute", inset:100,
                background:"linear-gradient(145deg,#0D1526,#111827)",
                borderRadius:28,
                border:"1px solid rgba(59,130,246,0.2)",
                display:"flex", flexDirection:"column",
                alignItems:"center", justifyContent:"center",
                boxShadow:"0 0 60px rgba(29,78,216,0.25)",
                animation:"floatUp 5s ease-in-out infinite",
                overflow:"hidden",
                padding:"24px 20px",
              }}>

                {/* Scan line */}
                <div style={{
                  position:"absolute", left:0, right:0, height:"30%",
                  background:"linear-gradient(180deg,transparent,rgba(59,130,246,0.04),transparent)",
                  animation:"scanLine 3s linear infinite",
                  pointerEvents:"none",
                }}/>

                {/* ── LOGO ANIMATION ── */}
                <div style={{
                  position:"relative",
                  display:"flex",
                  flexDirection:"column",
                  alignItems:"center",
                  marginBottom:16,
                  flexShrink:0,
                }}>
                  {/* Outer rotating ring */}
                  <div style={{
                    position:"absolute",
                    width:90, height:90,
                    borderRadius:"50%",
                    border:"1px solid rgba(59,130,246,0.3)",
                    animation:"rotateSlow 8s linear infinite",
                    top:"50%", left:"50%",
                    transform:"translate(-50%,-50%)",
                  }}>
                    {[0,180].map(deg => (
                      <div key={deg} style={{
                        position:"absolute",
                        width:5, height:5, borderRadius:"50%",
                        background:"#3B82F6", boxShadow:"0 0 6px #3B82F6",
                        top:"50%", left:"50%",
                        transform:`rotate(${deg}deg) translateX(45px) translate(-50%,-50%)`,
                      }} />
                    ))}
                  </div>

                  {/* Inner counter-rotating ring */}
                  <div style={{
                    position:"absolute",
                    width:72, height:72,
                    borderRadius:"50%",
                    border:"1px dashed rgba(96,165,250,0.2)",
                    animation:"rotateSlow 5s linear infinite reverse",
                    top:"50%", left:"50%",
                    transform:"translate(-50%,-50%)",
                  }}>
                    {[0,120,240].map(deg => (
                      <div key={deg} style={{
                        position:"absolute",
                        width:3, height:3, borderRadius:"50%",
                        background:"#60A5FA",
                        top:"50%", left:"50%",
                        transform:`rotate(${deg}deg) translateX(36px) translate(-50%,-50%)`,
                      }} />
                    ))}
                  </div>

                  {/* Logo image */}
                  <div style={{
                    width:52, height:52,
                    borderRadius:"50%",
                    overflow:"hidden",
                    position:"relative",
                    zIndex:1,
                    boxShadow: logoGlow === 0
                      ? "0 0 20px rgba(59,130,246,0.6),0 0 40px rgba(59,130,246,0.2)"
                      : logoGlow === 1
                      ? "0 0 28px rgba(96,165,250,0.7),0 0 56px rgba(96,165,250,0.25)"
                      : "0 0 16px rgba(29,78,216,0.5),0 0 32px rgba(29,78,216,0.15)",
                    transition:"box-shadow 1.2s ease",
                    border:"1.5px solid rgba(59,130,246,0.4)",
                    background:"#020610",
                  }}>
                  <img
  src="/download.png"   // ✅ just this, no import needed
  alt="TechInnosphere"
  style={{
    width:"180%",
    height:"180%",
    objectFit:"cover",
    objectPosition:"left center",
    marginLeft:"-30%",
    marginTop:"-30%",
    filter:"brightness(1.3) saturate(1.4)",
  }}
/>
```

In Vite, anything inside the `public/` folder is served at the root `/` automatically — you never import from it, you just reference it as `/filename.png` directly in `src`. So your folder structure should be:
```
my-react-app/
├── public/
│   └── download.png   ← put it here
├── src/
│   └── components/
│       └── Hero.jsx
                  </div>

                  {/* Glow base */}
                  <div style={{
                    position:"absolute",
                    width:52, height:52,
                    borderRadius:"50%",
                    background:"radial-gradient(circle,rgba(59,130,246,0.25) 0%,transparent 70%)",
                    top:"50%", left:"50%",
                    transform:"translate(-50%,-50%)",
                    zIndex:0,
                    transition:"opacity 1.2s ease",
                    opacity: logoGlow === 1 ? 1 : 0.5,
                  }}/>
                </div>

                {/* Divider */}
                <div style={{ width:"80%", height:1, background:"rgba(59,130,246,0.15)", marginBottom:14, flexShrink:0 }}/>

                {/* Animated service list */}
                <div style={{ width:"100%", display:"flex", flexDirection:"column", gap:6 }}>
                  {services.map((s, i) => {
                    const isActive = i === activeService;
                    return (
                      <div
                        key={s.label}
                        className="service-row"
                        style={{
                          display:"flex", alignItems:"center", gap:8,
                          padding:"7px 10px", borderRadius:8,
                          background: isActive ? s.dim : "transparent",
                          border:`1px solid ${isActive ? s.color + "44" : "transparent"}`,
                          transition:"all 0.4s ease",
                        }}>
                        <div style={{
                          width:6, height:6, borderRadius:"50%", flexShrink:0,
                          background: isActive ? s.color : "#1E293B",
                          boxShadow: isActive ? `0 0 8px ${s.color}` : "none",
                          transition:"all 0.4s ease",
                        }}/>
                        <span style={{
                          fontSize:11, fontWeight:600,
                          color: isActive ? s.color : "#334155",
                          letterSpacing:"0.04em",
                          transition:"color 0.4s ease",
                          flex:1,
                        }}>{s.label}</span>
                        {isActive && (
                          <div style={{
                            fontSize:9, color:s.color, fontWeight:700,
                            letterSpacing:"0.1em", textTransform:"uppercase",
                            animation:"serviceIn 0.3s ease both",
                          }}>● LIVE</div>
                        )}
                      </div>
                    );
                  })}
                </div>

              </div>

              {/* Floating labels */}
              {[
                { label:"AI/ML",         top:"2%",    right:"2%"   },
                { label:"Software Dev",  top:"25%",   left:"-12%"  },
                { label:"SaaS",          bottom:"25%",right:"-8%"  },
                { label:"Cybersecurity", bottom:"3%", left:"5%"    },
              ].map(({ label, ...pos }, i) => (
                <div key={label} style={{ position:"absolute", ...pos, background:"rgba(13,21,38,0.95)", border:"1px solid rgba(59,130,246,0.3)", borderRadius:10, padding:"8px 14px", fontSize:13, fontWeight:700, color:"#93C5FD", boxShadow:"0 4px 20px rgba(0,0,0,0.3)", whiteSpace:"nowrap", animation:`floatUp ${3.5 + i * 0.5}s ease-in-out infinite`, animationDelay:`${i * 0.4}s` }}>
                  {label}
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}