import { useState } from "react";
import { Phone, Mail, Clock, MapPin, Send, User, MessageSquare, Building2, CheckCircle, Instagram, Linkedin, Github, ExternalLink } from "lucide-react";

export default function Contact() {

  const SHEET_URL = "https://script.google.com/macros/s/AKfycbw4sUZMtwh43MHPj__oNNIMBzftRzm4i5q6tHSGUSoRAHo74iPixZfHsW3brO4y3Kxs/exec";

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", message: "" });
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
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    setErrors({});
    setSending(true);
    setError(false);
    try {
      await fetch(SHEET_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) });
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
    background: focused === field ? "rgba(10,27,92,0.04)" : "#FAFBFF",
    border: errors[field]
      ? "1.5px solid rgba(220,38,38,0.6)"
      : focused === field
      ? "1.5px solid rgba(30,79,216,0.5)"
      : "1.5px solid rgba(10,27,92,0.12)",
    borderRadius: 12, padding: "16px 20px",
    color: "#0A1B5C", fontSize: 16,
    fontFamily: "'Segoe UI', sans-serif", outline: "none",
    transition: "all 0.2s ease", boxSizing: "border-box",
    boxShadow: errors[field]
      ? "0 0 0 3px rgba(220,38,38,0.08)"
      : focused === field
      ? "0 0 0 3px rgba(30,79,216,0.08)"
      : "none",
  });

  const ErrorMsg = ({ field }) => errors[field] ? (
    <div style={{ color: "#DC2626", fontSize: 13, marginTop: 6, fontWeight: 600 }}>⚠ {errors[field]}</div>
  ) : null;

  const contactInfo = [
    { icon: <Phone size={22} color="#1E4FD8" strokeWidth={1.8} />, label: "Fehed Rehman Shaikh", value: "+91 7710031550", sub: "Technical Lead", href: "tel:+917710031550" },
    { icon: <Phone size={22} color="#1E4FD8" strokeWidth={1.8} />, label: "Omar Khan", value: "+91 9152115523", sub: "Engineering Lead", href: "tel:+919152115523" },
    { icon: <Mail size={22} color="#1E4FD8" strokeWidth={1.8} />, label: "Email", value: "techinnospherepvtltd@gmail.com", sub: "We reply within 24 hours", href: "mailto:techinnospherepvtltd@gmail.com" },
    { icon: <Clock size={22} color="#1E4FD8" strokeWidth={1.8} />, label: "Business Hours", value: "Mon - Sat: 9:00 AM - 6:00 PM", sub: "Sunday: By Appointment", href: null },
    { icon: <MapPin size={22} color="#1E4FD8" strokeWidth={1.8} />, label: "Location", value: "India", sub: "Serving clients globally", href: null },
  ];

  const scrollTo = (id) => {
    const idMap = { "Home": "home", "About Us": "about", "Services": "services", "IIT Projects": "iit-projects", "Founders": "founders", "Roadmap": "roadmap", "Contact": "contact" };
    const el = document.getElementById(idMap[id]);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 94, behavior: "instant" });
  };

  const socialLinks = [
    { icon: <Instagram size={20} strokeWidth={1.8} />, label: "Instagram", handle: "@techinnosphere_saas", href: "https://www.instagram.com/techlnnosphere_saas/", color: "#E1306C", bg: "rgba(225,48,108,0.06)", border: "rgba(225,48,108,0.2)" },
    { icon: <Linkedin size={20} strokeWidth={1.8} />, label: "LinkedIn", handle: "techinnosphere-pvt-ltd", href: "https://www.linkedin.com/in/techinnosphere-pvt-ltd/", color: "#0A66C2", bg: "rgba(10,102,194,0.06)", border: "rgba(10,102,194,0.2)" },
    { icon: <Github size={20} strokeWidth={1.8} />, label: "GitHub", handle: "techinnospherepvtltd", href: "https://github.com/techinnospherepvtltd-hash/techinnospherepvtltd-hash", color: "#0A1B5C", bg: "rgba(10,27,92,0.04)", border: "rgba(10,27,92,0.15)" },
  ];

  return (
    <>
      <section id="contact" style={{ background: "#F8FAFF", padding: "120px 4%", position: "relative", overflow: "hidden", fontFamily: "'Segoe UI', sans-serif" }}>
        <style>{`
          @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes glowPulse { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
          @keyframes floatUp { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
          @keyframes successPop { 0% { transform: scale(0.8); opacity: 0; } 60% { transform: scale(1.05); } 100% { transform: scale(1); opacity: 1; } }
          @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          @keyframes greenPulse { 0%, 100% { box-shadow: 0 0 6px #16A34A; } 50% { box-shadow: 0 0 20px #16A34A; } }
          @keyframes gradientShift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }

          .contact-info-item {
            display: flex; align-items: flex-start; gap: 18px;
            padding: 22px 24px; background: #FFFFFF;
            border: 1.5px solid rgba(10,27,92,0.08);
            border-radius: 16px; transition: all 0.2s ease;
            box-shadow: 0 1px 4px rgba(10,27,92,0.04);
          }
          .contact-info-item.clickable { cursor: pointer; }
          .contact-info-item:hover { background: rgba(30,79,216,0.03); border-color: rgba(30,79,216,0.25); transform: translateX(6px); box-shadow: 0 4px 16px rgba(10,27,92,0.08); }

          .send-btn {
            width: 100%; background: linear-gradient(135deg, #0A1B5C, #1E4FD8);
            border: none; color: #fff; font-weight: 800; font-size: 18px;
            padding: 20px 0; border-radius: 12px; cursor: pointer;
            letter-spacing: 0.03em; box-shadow: 0 6px 28px rgba(10,27,92,0.2);
            transition: transform 0.15s ease, box-shadow 0.15s ease;
            display: flex; align-items: center; justify-content: center;
            gap: 10px; font-family: 'Segoe UI', sans-serif;
          }
          .send-btn:hover:not(:disabled) { transform: translateY(-3px); box-shadow: 0 16px 44px rgba(10,27,92,0.3); }
          .send-btn:disabled { opacity: 0.7; cursor: not-allowed; }

          .form-label {
            display: block; font-size: 13px; font-weight: 700;
            color: #0A1B5C; letter-spacing: 0.08em;
            text-transform: uppercase; margin-bottom: 8px;
          }
          input::placeholder, textarea::placeholder { color: #94A3B8; }
          textarea::-webkit-scrollbar { width: 4px; }
          textarea::-webkit-scrollbar-thumb { background: rgba(10,27,92,0.15); border-radius: 4px; }

          .social-card {
            display: flex; align-items: center; gap: 14px;
            padding: 16px 20px; border-radius: 14px;
            text-decoration: none; transition: all 0.25s ease; border: 1px solid;
          }
          .social-card:hover { transform: translateY(-3px); }

          .footer-link {
            display: flex; align-items: center; gap: 8px;
            font-size: 15px; color: #475569; cursor: pointer;
            transition: color 0.2s ease; font-weight: 600; text-decoration: none;
          }
          .footer-link:hover { color: #1E4FD8; }

          @media (max-width: 1024px) { .contact-grid { flex-direction: column !important; } }
          @media (max-width: 640px) { .form-row { flex-direction: column !important; } .footer-grid { flex-direction: column !important; } }
        `}</style>

        {/* BG GRID */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(10,27,92,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(10,27,92,0.025) 1px, transparent 1px)", backgroundSize: "52px 52px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)", width: "70vw", height: "50vh", background: "radial-gradient(ellipse, rgba(10,27,92,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1600, margin: "0 auto", position: "relative", zIndex: 1 }}>

          {/* HEADER */}
          <div style={{ textAlign: "center", marginBottom: 80, animation: "fadeSlideUp 0.7s ease both" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(10,27,92,0.05)", border: "1px solid rgba(10,27,92,0.12)", borderRadius: 50, padding: "10px 24px", marginBottom: 28 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#1E4FD8", boxShadow: "0 0 8px rgba(30,79,216,0.5)", animation: "glowPulse 2s ease-in-out infinite" }} />
              <span style={{ fontSize: 12, color: "#0A1B5C", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>Get In Touch</span>
            </div>
            <h2 style={{ fontSize: "clamp(36px, 4.5vw, 64px)", fontWeight: 900, color: "#0A1B5C", letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 24 }}>
              Ready to{" "}
              <span style={{ background: "linear-gradient(90deg, #0A1B5C, #1E4FD8, #3B82F6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Transform Your Business?</span>
            </h2>
            <div style={{ width: 72, height: 4, borderRadius: 4, background: "linear-gradient(90deg, #0A1B5C, #1E4FD8)", margin: "0 auto 24px" }} />
            <p style={{ color: "#334155", fontSize: 18, lineHeight: 1.85, maxWidth: 640, margin: "0 auto", fontWeight: 500 }}>
              Let us discuss how we can help you achieve your goals with{" "}
              <span style={{ color: "#1E4FD8", fontWeight: 700 }}>intelligent technology and AI innovation</span>
            </p>
          </div>

          {/* MAIN GRID */}
          <div className="contact-grid" style={{ display: "flex", gap: 32, alignItems: "flex-start" }}>

            {/* LEFT — Contact Info */}
            <div style={{ flex: "0 0 420px" }}>
              <div style={{ background: "#FFFFFF", border: "1.5px solid rgba(10,27,92,0.08)", borderRadius: 24, padding: "44px", position: "relative", overflow: "hidden", marginBottom: 24, boxShadow: "0 4px 24px rgba(10,27,92,0.06)" }}>
                <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(10,27,92,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />
                {/* Top accent */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #0A1B5C, #1E4FD8, transparent)", borderRadius: "24px 24px 0 0" }} />

                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 32 }}>
                  <div style={{ width: 56, height: 56, borderRadius: 16, background: "linear-gradient(145deg, #0A1B5C, #1E4FD8)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 0 24px rgba(10,27,92,0.2)", animation: "floatUp 4s ease-in-out infinite" }}>
                    <MessageSquare size={26} color="#fff" strokeWidth={1.8} />
                  </div>
                  <div>
                    <div style={{ fontSize: 24, fontWeight: 900, color: "#0A1B5C", letterSpacing: "-0.03em" }}>Contact Information</div>
                    <div style={{ fontSize: 12, color: "#1E4FD8", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 4 }}>We Are Here to Help</div>
                  </div>
                </div>
                <div style={{ width: "100%", height: 1, background: "linear-gradient(90deg, rgba(10,27,92,0.15), transparent)", marginBottom: 28 }} />

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {contactInfo.map(({ icon, label, value, sub, href }, i) => (
                    <div key={label} className={"contact-info-item" + (href ? " clickable" : "")} onClick={() => href && window.open(href, "_self")} style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s both` }}>
                      <div style={{ width: 48, height: 48, borderRadius: 13, background: "rgba(10,27,92,0.05)", border: "1px solid rgba(10,27,92,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{icon}</div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 12, color: "#1E4FD8", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 3 }}>{label}</div>
                        <div style={{ fontSize: 15, fontWeight: 700, color: "#0A1B5C", wordBreak: "break-word", lineHeight: 1.3 }}>{value}</div>
                        <div style={{ fontSize: 13, color: "#64748B", marginTop: 2, fontWeight: 500 }}>{sub}</div>
                      </div>
                      {href && <div style={{ color: "#1E4FD8", fontSize: 18, flexShrink: 0 }}>→</div>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick response badge */}
              <div style={{ padding: "24px 28px", background: "rgba(22,163,74,0.05)", border: "1px solid rgba(22,163,74,0.2)", borderRadius: 18, display: "flex", alignItems: "center", gap: 16, boxShadow: "0 2px 12px rgba(22,163,74,0.06)" }}>
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#16A34A", animation: "greenPulse 2s ease-in-out infinite", flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#0A1B5C", marginBottom: 3 }}>Quick Response Guaranteed</div>
                  <div style={{ fontSize: 14, color: "#64748B", fontWeight: 500 }}>We respond to all inquiries within 24 hours</div>
                </div>
              </div>
            </div>

            {/* RIGHT — Form */}
            <div style={{ flex: 1, background: "#FFFFFF", border: "1.5px solid rgba(10,27,92,0.08)", borderRadius: 24, padding: "48px", position: "relative", overflow: "hidden", boxShadow: "0 4px 24px rgba(10,27,92,0.06)" }}>
              <div style={{ position: "absolute", top: -60, right: -60, width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, rgba(10,27,92,0.03) 0%, transparent 70%)", pointerEvents: "none" }} />
              {/* Top accent */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #0A1B5C, #1E4FD8, #3B82F6, transparent)", borderRadius: "24px 24px 0 0" }} />

              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 36 }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: "linear-gradient(145deg, #0A1B5C, #1E4FD8)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 0 24px rgba(10,27,92,0.2)" }}>
                  <Send size={24} color="#fff" strokeWidth={1.8} />
                </div>
                <div>
                  <div style={{ fontSize: 24, fontWeight: 900, color: "#0A1B5C", letterSpacing: "-0.03em" }}>Send Us a Message</div>
                  <div style={{ fontSize: 12, color: "#1E4FD8", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 4 }}>Saved Directly to Our Records</div>
                </div>
              </div>
              <div style={{ width: "100%", height: 1, background: "linear-gradient(90deg, rgba(10,27,92,0.15), transparent)", marginBottom: 36 }} />

              {submitted && (
                <div style={{ padding: "24px 28px", marginBottom: 28, background: "rgba(22,163,74,0.06)", border: "1px solid rgba(22,163,74,0.2)", borderRadius: 14, display: "flex", alignItems: "center", gap: 14, animation: "successPop 0.4s ease both" }}>
                  <CheckCircle size={28} color="#16A34A" strokeWidth={2} />
                  <div>
                    <div style={{ fontSize: 18, fontWeight: 800, color: "#0A1B5C", marginBottom: 4 }}>Message Sent Successfully!</div>
                    <div style={{ fontSize: 15, color: "#16A34A", fontWeight: 600 }}>Your details have been saved. We will get back to you within 24 hours.</div>
                  </div>
                </div>
              )}

              {error && (
                <div style={{ padding: "20px 24px", marginBottom: 28, background: "rgba(220,38,38,0.05)", border: "1px solid rgba(220,38,38,0.2)", borderRadius: 14, display: "flex", alignItems: "center", gap: 12, animation: "successPop 0.4s ease both" }}>
                  <span style={{ fontSize: 22 }}>⚠️</span>
                  <div style={{ fontSize: 15, color: "#DC2626", fontWeight: 600 }}>Something went wrong. Please try again or email us directly.</div>
                </div>
              )}

              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <div className="form-row" style={{ display: "flex", gap: 20 }}>
                  <div style={{ flex: 1 }}>
                    <label className="form-label"><User size={13} style={{ display: "inline", marginRight: 6, verticalAlign: "middle" }} />Full Name *</label>
                    <input type="text" placeholder="Your full name" value={formData.name} onChange={e => { setFormData({ ...formData, name: e.target.value }); setErrors({ ...errors, name: "" }); }} onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} style={inputStyle("name")} />
                    <ErrorMsg field="name" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label className="form-label"><Mail size={13} style={{ display: "inline", marginRight: 6, verticalAlign: "middle" }} />Email *</label>
                    <input type="email" placeholder="your@email.com" value={formData.email} onChange={e => { setFormData({ ...formData, email: e.target.value }); setErrors({ ...errors, email: "" }); }} onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} style={inputStyle("email")} />
                    <ErrorMsg field="email" />
                  </div>
                </div>

                <div className="form-row" style={{ display: "flex", gap: 20 }}>
                  <div style={{ flex: 1 }}>
                    <label className="form-label"><Phone size={13} style={{ display: "inline", marginRight: 6, verticalAlign: "middle" }} />Phone *</label>
                    <input type="tel" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={e => { setFormData({ ...formData, phone: e.target.value }); setErrors({ ...errors, phone: "" }); }} onFocus={() => setFocused("phone")} onBlur={() => setFocused(null)} style={inputStyle("phone")} />
                    <ErrorMsg field="phone" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label className="form-label"><Building2 size={13} style={{ display: "inline", marginRight: 6, verticalAlign: "middle" }} />Company (Optional)</label>
                    <input type="text" placeholder="Your company name" value={formData.company} onChange={e => setFormData({ ...formData, company: e.target.value })} onFocus={() => setFocused("company")} onBlur={() => setFocused(null)} style={inputStyle("company")} />
                  </div>
                </div>

                <div>
                  <label className="form-label"><MessageSquare size={13} style={{ display: "inline", marginRight: 6, verticalAlign: "middle" }} />Message *</label>
                  <textarea placeholder="Tell us about your project, goals, and how we can help..." value={formData.message} onChange={e => { setFormData({ ...formData, message: e.target.value }); setErrors({ ...errors, message: "" }); }} onFocus={() => setFocused("message")} onBlur={() => setFocused(null)} rows={6} style={{ ...inputStyle("message"), resize: "vertical", minHeight: 140 }} />
                  <ErrorMsg field="message" />
                </div>

                <button className="send-btn" onClick={handleSubmit} disabled={sending || submitted}>
                  {sending ? (
                    <><div style={{ width: 20, height: 20, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", animation: "spin 0.8s linear infinite", flexShrink: 0 }} />Saving to Records...</>
                  ) : submitted ? (
                    <><CheckCircle size={20} color="#fff" />Message Sent!</>
                  ) : (
                    <><Send size={20} color="#fff" strokeWidth={2} />Send Message</>
                  )}
                </button>

                <p style={{ fontSize: 13, color: "#94A3B8", textAlign: "center", marginTop: -8, fontWeight: 500 }}>
                  Your information is saved securely and never shared with third parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "linear-gradient(180deg, #F0F4FF 0%, #E8EFFE 100%)", borderTop: "1.5px solid rgba(10,27,92,0.08)", fontFamily: "'Segoe UI', sans-serif", position: "relative", overflow: "hidden" }}>
        {/* Animated top bar */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #0A1B5C, #1E4FD8, #3B82F6, #1E4FD8, #0A1B5C)", backgroundSize: "200% 100%", animation: "gradientShift 4s ease infinite" }} />
        <div style={{ position: "absolute", top: -100, left: "20%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(10,27,92,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -100, right: "20%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(30,79,216,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(10,27,92,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(10,27,92,0.02) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1600, margin: "0 auto", padding: "80px 4% 0", position: "relative", zIndex: 1 }}>

          <div className="footer-grid" style={{ display: "flex", gap: 60, flexWrap: "wrap", marginBottom: 64, justifyContent: "space-between" }}>

            {/* BRAND COLUMN */}
            <div style={{ flex: "1 1 300px", maxWidth: 380 }}>
              <div style={{ marginBottom: 20 }}>
                <img
                  src="/TechInnosphere_Logo.png"
                  alt="TechInnosphere"
                  style={{ height: 48, width: "auto", objectFit: "contain", filter: "drop-shadow(0 2px 8px rgba(10,27,92,0.15))" }}
                />
              </div>
              <div style={{ fontSize: 10, color: "#1E4FD8", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 16 }}>Private Limited</div>

              <p style={{ color: "#475569", fontSize: 15, lineHeight: 1.85, marginBottom: 28, fontWeight: 500 }}>
                From Vision to Software —{" "}
                <span style={{ color: "#0A1B5C", fontWeight: 700 }}>We Build It All.</span>
                {" "}Transforming businesses through intelligent technology, AI innovation, and world-class engineering.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                {[
                  { icon: "📧", text: "techinnospherepvtltd@gmail.com", href: "mailto:techinnospherepvtltd@gmail.com" },
                  { icon: "📍", text: "India — Serving Globally", href: null },
                ].map(({ icon, text, href }) => (
                  <div key={text} onClick={() => href && window.open(href)} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#475569", cursor: href ? "pointer" : "default", transition: "color 0.2s", fontWeight: 500 }}
                    onMouseEnter={e => { if (href) e.currentTarget.style.color = "#1E4FD8"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "#475569"; }}>
                    <span>{icon}</span><span>{text}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "10px 18px", background: "rgba(217,119,6,0.06)", border: "1px solid rgba(217,119,6,0.2)", borderRadius: 12 }}>
                <span style={{ fontSize: 18 }}>🏛️</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#B45309" }}>IIT Bombay</div>
                  <div style={{ fontSize: 11, color: "#64748B", fontWeight: 500 }}>Techfest Participants</div>
                </div>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div style={{ flex: "0 0 160px" }}>
              <div style={{ fontSize: 11, fontWeight: 800, color: "#0A1B5C", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 24, display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 20, height: 2, background: "linear-gradient(90deg, #0A1B5C, transparent)", borderRadius: 2 }} />
                Quick Links
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {["Home", "About Us", "Services", "IIT Projects", "Founders", "Roadmap", "Contact"].map((link) => (
                  <div key={link} onClick={() => scrollTo(link)} className="footer-link" style={{ padding: "7px 0" }}>
                    <span style={{ color: "#1E4FD8", fontSize: 14 }}>›</span>
                    {link}
                  </div>
                ))}
              </div>
            </div>

            {/* TEAM + SOCIAL */}
            <div style={{ flex: "0 0 260px" }}>
              <div style={{ fontSize: 11, fontWeight: 800, color: "#0A1B5C", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 24, display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 20, height: 2, background: "linear-gradient(90deg, #0A1B5C, transparent)", borderRadius: 2 }} />
                Our Team
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                {[
                  { label: "Fehed Rehman Shaikh", role: "Technical Lead", phone: "+91 7710031550", href: "tel:+917710031550" },
                  { label: "Omar Khan", role: "Engineering Lead", phone: "+91 9152115523", href: "tel:+919152115523" },
                ].map(({ label, role, phone, href }) => (
                  <a key={label} href={href} style={{ textDecoration: "none", display: "flex", flexDirection: "column", padding: "16px 18px", background: "#FFFFFF", border: "1.5px solid rgba(10,27,92,0.08)", borderRadius: 14, transition: "all 0.2s ease", gap: 3, boxShadow: "0 1px 4px rgba(10,27,92,0.04)" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(30,79,216,0.3)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(10,27,92,0.08)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(10,27,92,0.08)"; e.currentTarget.style.boxShadow = "0 1px 4px rgba(10,27,92,0.04)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                    <span style={{ fontSize: 13, color: "#1E4FD8", fontWeight: 700 }}>{label}</span>
                    <span style={{ fontSize: 12, color: "#64748B", marginBottom: 2, fontWeight: 500 }}>{role}</span>
                    <span style={{ fontSize: 15, color: "#0A1B5C", fontWeight: 700 }}>{phone}</span>
                  </a>
                ))}
              </div>

              <div style={{ fontSize: 11, fontWeight: 800, color: "#0A1B5C", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 20, height: 2, background: "linear-gradient(90deg, #0A1B5C, transparent)", borderRadius: 2 }} />
                Follow Us
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {socialLinks.map(({ icon, label, handle, href, color, bg, border }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="social-card"
                    style={{ background: bg, borderColor: border }}
                    onMouseEnter={e => { e.currentTarget.style.background = bg.replace("0.06", "0.12").replace("0.04", "0.08"); e.currentTarget.style.borderColor = color; e.currentTarget.style.boxShadow = `0 8px 24px ${color}20`; e.currentTarget.style.transform = "translateY(-3px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = bg; e.currentTarget.style.borderColor = border; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: `${color}15`, display: "flex", alignItems: "center", justifyContent: "center", color, flexShrink: 0 }}>{icon}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 13, fontWeight: 800, color: "#0A1B5C" }}>{label}</div>
                      <div style={{ fontSize: 12, color: "#64748B", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontWeight: 500 }}>{handle}</div>
                    </div>
                    <ExternalLink size={14} color="#94A3B8" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* DIVIDER */}
          <div style={{ width: "100%", height: 1, background: "linear-gradient(90deg, transparent, rgba(10,27,92,0.15), rgba(30,79,216,0.1), rgba(10,27,92,0.15), transparent)", marginBottom: 32 }} />

          {/* BOTTOM BAR */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16, paddingBottom: 36 }}>
            <div style={{ fontSize: 14, color: "#475569", fontWeight: 500 }}>
              © 2025 <span style={{ color: "#0A1B5C", fontWeight: 700 }}>TechInnosphere Pvt. Ltd.</span> All rights reserved.
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#475569", fontWeight: 500 }}>
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#16A34A", boxShadow: "0 0 8px #16A34A", animation: "greenPulse 2s ease-in-out infinite" }} />
                All Systems Operational
              </div>
              <div style={{ width: 1, height: 14, background: "rgba(10,27,92,0.15)" }} />
              <div style={{ fontSize: 13, color: "#475569", fontWeight: 500 }}>Built with ❤️ in India 🇮🇳</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}