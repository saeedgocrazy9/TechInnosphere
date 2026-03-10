import { useState } from "react";
import { Phone, Mail, Clock, MapPin, Send, User, MessageSquare, Building2, CheckCircle } from "lucide-react";

export default function Contact() {

  const SHEET_URL = "https://script.google.com/macros/s/AKfycbw4sUZMtwh43MHPj__oNNIMBzftRzm4i5q6tHSGUSoRAHo74iPixZfHsW3brO4y3Kxs/exec";
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [focused, setFocused] = useState(null);
  const [errors, setErrors] = useState({});

  const handleSubmit = async () => {
    const newErrors = {};
    if (!formData.name.trim())    newErrors.name    = "Full name is required";
    if (!formData.email.trim())   newErrors.email   = "Email is required";
    if (!formData.phone.trim())   newErrors.phone   = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSending(true);
    setError(false);

    try {
      await fetch(SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(true);
      setTimeout(() => setError(false), 4000);
    } finally {
      setSending(false);
    }
  };

  const inputStyle = (field) => ({
    width: "100%",
    background: focused === field ? "rgba(59,130,246,0.06)" : "rgba(255,255,255,0.02)",
    border: errors[field]
      ? "1.5px solid rgba(248,113,113,0.8)"
      : focused === field
      ? "1.5px solid rgba(59,130,246,0.5)"
      : "1.5px solid rgba(59,130,246,0.12)",
    borderRadius: 12,
    padding: "16px 20px",
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "'Segoe UI', sans-serif",
    outline: "none",
    transition: "all 0.2s ease",
    boxSizing: "border-box",
    boxShadow: errors[field]
      ? "0 0 0 3px rgba(248,113,113,0.1)"
      : focused === field
      ? "0 0 0 3px rgba(59,130,246,0.1)"
      : "none",
  });

  const ErrorMsg = ({ field }) => errors[field] ? (
    <div style={{ color: "#F87171", fontSize: 13, marginTop: 6, fontWeight: 600 }}>
      ⚠ {errors[field]}
    </div>
  ) : null;

  const contactInfo = [
    {
      icon: <Phone size={22} color="#60A5FA" strokeWidth={1.8} />,
      label: "Fehed Rehman Shaikh",
      value: "+91 7710031550",
      sub: "Technical Lead",
      href: "tel:+917710031550",
    },
    {
      icon: <Phone size={22} color="#60A5FA" strokeWidth={1.8} />,
      label: "Omar Khan",
      value: "+91 9152115523",
      sub: "Engineering Lead",
      href: "tel:+919152115523",
    },
    {
      icon: <Mail size={22} color="#60A5FA" strokeWidth={1.8} />,
      label: "Email",
      value: "techinnospherepvtltd@gmail.com",
      sub: "We reply within 24 hours",
      href: "mailto:techinnospherepvtltd@gmail.com",
    },
    {
      icon: <Clock size={22} color="#60A5FA" strokeWidth={1.8} />,
      label: "Business Hours",
      value: "Mon - Sat: 9:00 AM - 6:00 PM",
      sub: "Sunday: By Appointment",
      href: null,
    },
    {
      icon: <MapPin size={22} color="#60A5FA" strokeWidth={1.8} />,
      label: "Location",
      value: "India",
      sub: "Serving clients globally",
      href: null,
    },
  ];

  const scrollTo = (id) => {
    const idMap = {
      "Home": "home",
      "About Us": "about",
      "Services": "services",
      "IIT Projects": "iit-projects",
      "Founders": "founders",
      "Roadmap": "roadmap",
      "Contact": "contact",
    };
    const el = document.getElementById(idMap[id]);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 94, behavior: "instant" });
  };

  return (
    <>
      <section id="contact" style={{
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
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
          }
          @keyframes floatUp {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          @keyframes successPop {
            0% { transform: scale(0.8); opacity: 0; }
            60% { transform: scale(1.05); }
            100% { transform: scale(1); opacity: 1; }
          }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes greenPulse {
            0%, 100% { box-shadow: 0 0 6px #22C55E; }
            50% { box-shadow: 0 0 20px #22C55E; }
          }
          .contact-info-item {
            display: flex;
            align-items: flex-start;
            gap: 18px;
            padding: 22px 24px;
            background: rgba(255,255,255,0.02);
            border: 1px solid rgba(59,130,246,0.1);
            border-radius: 16px;
            transition: all 0.2s ease;
          }
          .contact-info-item.clickable { cursor: pointer; }
          .contact-info-item:hover {
            background: rgba(59,130,246,0.06);
            border-color: rgba(59,130,246,0.3);
            transform: translateX(6px);
          }
          .send-btn {
            width: 100%;
            background: linear-gradient(135deg, #1D4ED8, #3B82F6);
            border: none;
            color: #fff;
            font-weight: 800;
            font-size: 18px;
            padding: 20px 0;
            border-radius: 12px;
            cursor: pointer;
            letter-spacing: 0.03em;
            box-shadow: 0 6px 28px rgba(59,130,246,0.4);
            transition: transform 0.15s ease, box-shadow 0.15s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            font-family: 'Segoe UI', sans-serif;
          }
          .send-btn:hover:not(:disabled) {
            transform: translateY(-3px);
            box-shadow: 0 16px 44px rgba(59,130,246,0.6);
          }
          .send-btn:disabled { opacity: 0.7; cursor: not-allowed; }
          .form-label {
            display: block;
            font-size: 14px;
            font-weight: 700;
            color: #93C5FD;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            margin-bottom: 8px;
          }
          textarea::-webkit-scrollbar { width: 4px; }
          textarea::-webkit-scrollbar-thumb {
            background: rgba(59,130,246,0.3);
            border-radius: 4px;
          }
          @media (max-width: 1024px) {
            .contact-grid { flex-direction: column !important; }
          }
          @media (max-width: 640px) {
            .form-row { flex-direction: column !important; }
          }
        `}</style>

        {/* BG GRID */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          pointerEvents: "none",
        }} />

        <div style={{
          position: "absolute", top: "10%", left: "50%",
          transform: "translateX(-50%)",
          width: "70vw", height: "50vh",
          background: "radial-gradient(ellipse, rgba(29,78,216,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1600, margin: "0 auto", position: "relative", zIndex: 1 }}>

          {/* HEADER */}
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
              }}>Get In Touch</span>
            </div>

            <h2 style={{
              fontSize: "clamp(36px, 4.5vw, 64px)",
              fontWeight: 900, color: "#FFFFFF",
              letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 24,
            }}>
              Ready to{" "}
              <span style={{
                background: "linear-gradient(90deg, #3B82F6, #60A5FA, #93C5FD)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>Transform Your Business?</span>
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
              Let us discuss how we can help you achieve your goals with{" "}
              <span style={{ color: "#60A5FA", fontWeight: 600 }}>
                intelligent technology and AI innovation
              </span>
            </p>
          </div>

          {/* MAIN GRID */}
          <div className="contact-grid" style={{ display: "flex", gap: 32, alignItems: "flex-start" }}>

            {/* LEFT: CONTACT INFO */}
            <div style={{ flex: "0 0 420px" }}>
              <div style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(59,130,246,0.12)",
                borderRadius: 24, padding: "44px",
                position: "relative", overflow: "hidden", marginBottom: 24,
              }}>
                <div style={{
                  position: "absolute", top: -40, right: -40,
                  width: 200, height: 200, borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
                  pointerEvents: "none",
                }} />

                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 32 }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 16,
                    background: "linear-gradient(145deg, #1E3A8A, #3B82F6)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, boxShadow: "0 0 24px rgba(59,130,246,0.35)",
                    animation: "floatUp 4s ease-in-out infinite",
                  }}>
                    <MessageSquare size={26} color="#fff" strokeWidth={1.8} />
                  </div>
                  <div>
                    <div style={{ fontSize: 24, fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.03em" }}>
                      Contact Information
                    </div>
                    <div style={{ fontSize: 12, color: "#3B82F6", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 4 }}>
                      We Are Here to Help
                    </div>
                  </div>
                </div>

                <div style={{
                  width: "100%", height: 1,
                  background: "linear-gradient(90deg, rgba(59,130,246,0.4), transparent)",
                  marginBottom: 28,
                }} />

                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {contactInfo.map(({ icon, label, value, sub, href }, i) => (
                    <div
                      key={label}
                      className={"contact-info-item" + (href ? " clickable" : "")}
                      onClick={() => href && window.open(href, "_self")}
                      style={{ animation: "fadeSlideUp 0.5s ease " + (i * 0.08) + "s both" }}
                    >
                      <div style={{
                        width: 48, height: 48, borderRadius: 13,
                        background: "rgba(59,130,246,0.1)",
                        border: "1px solid rgba(59,130,246,0.2)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0,
                      }}>{icon}</div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{
                          fontSize: 13, color: "#3B82F6", fontWeight: 700,
                          letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 3,
                        }}>{label}</div>
                        <div style={{
                          fontSize: 15, fontWeight: 700, color: "#FFFFFF",
                          wordBreak: "break-word", lineHeight: 1.3,
                        }}>{value}</div>
                        <div style={{ fontSize: 13, color: "#64748B", marginTop: 2 }}>{sub}</div>
                      </div>
                      {href && <div style={{ color: "#1E3A5F", fontSize: 18, flexShrink: 0 }}>→</div>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick response */}
              <div style={{
                padding: "24px 28px",
                background: "linear-gradient(135deg, rgba(34,197,94,0.06), rgba(29,78,216,0.08))",
                border: "1px solid rgba(34,197,94,0.2)",
                borderRadius: 18, display: "flex", alignItems: "center", gap: 16,
              }}>
                <div style={{
                  width: 12, height: 12, borderRadius: "50%",
                  background: "#22C55E",
                  animation: "greenPulse 2s ease-in-out infinite",
                  flexShrink: 0,
                }} />
                <div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#FFFFFF", marginBottom: 3 }}>
                    Quick Response Guaranteed
                  </div>
                  <div style={{ fontSize: 14, color: "#64748B" }}>
                    We respond to all inquiries within 24 hours
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: FORM */}
            <div style={{
              flex: 1,
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(59,130,246,0.12)",
              borderRadius: 24, padding: "48px",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", top: -60, right: -60,
                width: 280, height: 280, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)",
                pointerEvents: "none",
              }} />

              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 36 }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 16,
                  background: "linear-gradient(145deg, #1E3A8A, #3B82F6)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, boxShadow: "0 0 24px rgba(59,130,246,0.35)",
                }}>
                  <Send size={24} color="#fff" strokeWidth={1.8} />
                </div>
                <div>
                  <div style={{ fontSize: 24, fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.03em" }}>
                    Send Us a Message
                  </div>
                  <div style={{ fontSize: 12, color: "#3B82F6", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 4 }}>
                    Saved Directly to Our Records
                  </div>
                </div>
              </div>

              <div style={{
                width: "100%", height: 1,
                background: "linear-gradient(90deg, rgba(59,130,246,0.4), transparent)",
                marginBottom: 36,
              }} />

              {/* SUCCESS */}
              {submitted && (
                <div style={{
                  padding: "24px 28px", marginBottom: 28,
                  background: "rgba(34,197,94,0.08)",
                  border: "1px solid rgba(34,197,94,0.25)",
                  borderRadius: 14, display: "flex", alignItems: "center", gap: 14,
                  animation: "successPop 0.4s ease both",
                }}>
                  <CheckCircle size={28} color="#22C55E" strokeWidth={2} />
                  <div>
                    <div style={{ fontSize: 18, fontWeight: 800, color: "#FFFFFF", marginBottom: 4 }}>
                      Message Sent Successfully!
                    </div>
                    <div style={{ fontSize: 15, color: "#86EFAC" }}>
                      Your details have been saved. We will get back to you within 24 hours.
                    </div>
                  </div>
                </div>
              )}

              {/* ERROR */}
              {error && (
                <div style={{
                  padding: "20px 24px", marginBottom: 28,
                  background: "rgba(239,68,68,0.07)",
                  border: "1px solid rgba(239,68,68,0.25)",
                  borderRadius: 14, display: "flex", alignItems: "center", gap: 12,
                  animation: "successPop 0.4s ease both",
                }}>
                  <span style={{ fontSize: 22 }}>⚠️</span>
                  <div style={{ fontSize: 15, color: "#FCA5A5", fontWeight: 600 }}>
                    Something went wrong. Please try again or email us directly.
                  </div>
                </div>
              )}

              {/* FORM FIELDS */}
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

                {/* Name + Email */}
                <div className="form-row" style={{ display: "flex", gap: 20 }}>
                  <div style={{ flex: 1 }}>
                    <label className="form-label">
                      <User size={13} style={{ display: "inline", marginRight: 6, verticalAlign: "middle" }} />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={e => { setFormData({ ...formData, name: e.target.value }); setErrors({ ...errors, name: "" }); }}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      style={inputStyle("name")}
                    />
                    <ErrorMsg field="name" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label className="form-label">
                      <Mail size={13} style={{ display: "inline", marginRight: 6, verticalAlign: "middle" }} />
                      Email *
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={e => { setFormData({ ...formData, email: e.target.value }); setErrors({ ...errors, email: "" }); }}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      style={inputStyle("email")}
                    />
                    <ErrorMsg field="email" />
                  </div>
                </div>

                {/* Phone + Company */}
                <div className="form-row" style={{ display: "flex", gap: 20 }}>
                  <div style={{ flex: 1 }}>
                    <label className="form-label">
                      <Phone size={13} style={{ display: "inline", marginRight: 6, verticalAlign: "middle" }} />
                      Phone *
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={e => { setFormData({ ...formData, phone: e.target.value }); setErrors({ ...errors, phone: "" }); }}
                      onFocus={() => setFocused("phone")}
                      onBlur={() => setFocused(null)}
                      style={inputStyle("phone")}
                    />
                    <ErrorMsg field="phone" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label className="form-label">
                      <Building2 size={13} style={{ display: "inline", marginRight: 6, verticalAlign: "middle" }} />
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      onFocus={() => setFocused("company")}
                      onBlur={() => setFocused(null)}
                      style={inputStyle("company")}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="form-label">
                    <MessageSquare size={13} style={{ display: "inline", marginRight: 6, verticalAlign: "middle" }} />
                    Message *
                  </label>
                  <textarea
                    placeholder="Tell us about your project, goals, and how we can help..."
                    value={formData.message}
                    onChange={e => { setFormData({ ...formData, message: e.target.value }); setErrors({ ...errors, message: "" }); }}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    rows={6}
                    style={{ ...inputStyle("message"), resize: "vertical", minHeight: 140 }}
                  />
                  <ErrorMsg field="message" />
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  className="send-btn"
                  onClick={handleSubmit}
                  disabled={sending || submitted}
                >
                  {sending ? (
                    <>
                      <div style={{
                        width: 20, height: 20, borderRadius: "50%",
                        border: "2px solid rgba(255,255,255,0.3)",
                        borderTopColor: "#fff",
                        animation: "spin 0.8s linear infinite",
                        flexShrink: 0,
                      }} />
                      Saving to Records...
                    </>
                  ) : submitted ? (
                    <>
                      <CheckCircle size={20} color="#fff" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={20} color="#fff" strokeWidth={2} />
                      Send Message
                    </>
                  )}
                </button>

                <p style={{ fontSize: 13, color: "#334155", textAlign: "center", marginTop: -8 }}>
                  Your information is saved securely and never shared with third parties.
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: "#010408",
        borderTop: "1px solid rgba(59,130,246,0.1)",
        padding: "60px 4% 32px",
        fontFamily: "'Segoe UI', sans-serif",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 3,
          background: "linear-gradient(90deg, #1D4ED8, #3B82F6, #60A5FA, #3B82F6, #1D4ED8)",
        }} />
        <div style={{
          position: "absolute", top: -80, left: "50%",
          transform: "translateX(-50%)", width: "60vw", height: 200,
          background: "radial-gradient(ellipse, rgba(29,78,216,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1600, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", gap: 60, flexWrap: "wrap", marginBottom: 52, justifyContent: "space-between" }}>

            {/* BRAND */}
            <div style={{ flex: "1 1 280px", maxWidth: 360 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 14,
                  background: "linear-gradient(145deg, #1E3A8A, #3B82F6)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 900, fontSize: 24, color: "#fff",
                  boxShadow: "0 0 24px rgba(59,130,246,0.35)", flexShrink: 0,
                }}>T</div>
                <div>
                  <div style={{ fontSize: 20, fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.03em" }}>
                    Tech
                    <span style={{
                      background: "linear-gradient(90deg, #60A5FA, #93C5FD)",
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                    }}>Inno</span>
                    sphere
                  </div>
                  <div style={{ fontSize: 10, color: "#3B82F6", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginTop: 3 }}>
                    IIT · Innovation · Tech
                  </div>
                </div>
              </div>
              <p style={{ color: "#64748B", fontSize: 15, lineHeight: 1.8, marginBottom: 24 }}>
                From Vision to Software —{" "}
                <span style={{ color: "#93C5FD", fontWeight: 600 }}>We Build It All.</span>
                {" "}Transforming businesses through intelligent technology and AI innovation.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { icon: "📧", text: "techinnospherepvtltd@gmail.com" },
                  { icon: "📍", text: "India — Serving Globally" },
                ].map(({ icon, text }) => (
                  <div key={text} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#475569" }}>
                    <span>{icon}</span><span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* QUICK LINKS */}
            <div style={{ flex: "0 0 160px" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#3B82F6", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20 }}>
                Quick Links
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {["Home", "About Us", "Services", "IIT Projects", "Founders", "Roadmap", "Contact"].map((link) => (
                  <div
                    key={link}
                    onClick={() => scrollTo(link)}
                    style={{ fontSize: 16, color: "#64748B", cursor: "pointer", transition: "color 0.2s ease", display: "flex", alignItems: "center", gap: 8, fontWeight: 500 }}
                    onMouseEnter={e => e.currentTarget.style.color = "#60A5FA"}
                    onMouseLeave={e => e.currentTarget.style.color = "#64748B"}
                  >
                    <span style={{ color: "#1E3A5F", fontSize: 12 }}>→</span>
                    {link}
                  </div>
                ))}
              </div>
            </div>

            {/* CONNECT */}
            <div style={{ flex: "0 0 220px" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#3B82F6", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20 }}>
                Connect With Us
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
                {[
                  { label: "Fehed Rehman Shaikh", phone: "+91 7710031550", href: "tel:+917710031550" },
                  { label: "Omar Khan", phone: "+91 9152115523", href: "tel:+919152115523" },
                ].map(({ label, phone, href }) => (
                  <a key={label} href={href} style={{
                    textDecoration: "none", display: "flex", flexDirection: "column",
                    padding: "14px 18px", background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(59,130,246,0.1)", borderRadius: 12,
                    transition: "all 0.2s ease", gap: 3,
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = "rgba(59,130,246,0.3)";
                      e.currentTarget.style.background = "rgba(59,130,246,0.06)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = "rgba(59,130,246,0.1)";
                      e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                    }}
                  >
                    <span style={{ fontSize: 13, color: "#3B82F6", fontWeight: 700 }}>{label}</span>
                    <span style={{ fontSize: 15, color: "#FFFFFF", fontWeight: 600 }}>{phone}</span>
                  </a>
                ))}
              </div>

              <div style={{
                padding: "14px 18px",
                background: "rgba(251,191,36,0.07)",
                border: "1px solid rgba(251,191,36,0.2)",
                borderRadius: 12, display: "flex", alignItems: "center", gap: 10,
              }}>
                <span style={{ fontSize: 20 }}>🏛️</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#FCD34D" }}>IIT Bombay</div>
                  <div style={{ fontSize: 12, color: "#78716C" }}>Techfest Participants</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{
            width: "100%", height: 1,
            background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.2), transparent)",
            marginBottom: 28,
          }} />

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <div style={{ fontSize: 14, color: "#334155" }}>
              2025 TechInnosphere. All rights reserved.
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#334155" }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 8px #22C55E" }} />
              All Systems Operational · Built with passion in India
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}