import { useState } from "react";
import { Instagram, Linkedin, Facebook, MessageCircle } from "lucide-react";

export default function SocialFloat() {
  const [hovered, setHovered] = useState(null);

  const socials = [
    {
      id: "whatsapp",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      label: "WhatsApp",
      href: "https://wa.me/917710031550",
      color: "#25D366",
      bg: "rgba(37,211,102,0.1)",
      border: "rgba(37,211,102,0.3)",
      glow: "rgba(37,211,102,0.4)",
    },
    {
      id: "instagram",
      icon: <Instagram size={20} />,
      label: "Instagram",
      href: "https://www.instagram.com/techlnnosphere_saas/",
      color: "#E1306C",
      bg: "rgba(225,48,108,0.1)",
      border: "rgba(225,48,108,0.3)",
      glow: "rgba(225,48,108,0.4)",
    },
    {
      id: "linkedin",
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/techinnosphere-pvt-ltd/",
      color: "#0A66C2",
      bg: "rgba(10,102,194,0.1)",
      border: "rgba(10,102,194,0.3)",
      glow: "rgba(10,102,194,0.4)",
    },
    {
      id: "facebook",
      icon: <Facebook size={20} />,
      label: "Facebook",
      href: "https://www.facebook.com/share/1K7kS6ssYV/",
      color: "#1877F2",
      bg: "rgba(24,119,242,0.1)",
      border: "rgba(24,119,242,0.3)",
      glow: "rgba(24,119,242,0.4)",
    },
  ];

  return (
    <>
      <style>{`
        @keyframes sfSlideIn {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes sfPulse {
          0%, 100% { box-shadow: 0 0 0 0 var(--glow); }
          50%       { box-shadow: 0 0 0 6px transparent; }
        }
        .sf-btn {
          position: relative;
          width: 46px; height: 46px;
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          border: 1.5px solid;
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
          text-decoration: none;
          overflow: visible;
        }
        .sf-btn:hover {
          transform: scale(1.18) translateX(-4px);
        }
        .sf-label {
          position: absolute;
          right: 54px;
          background: rgba(10,27,92,0.92);
          backdrop-filter: blur(10px);
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: 8px;
          white-space: nowrap;
          pointer-events: none;
          letter-spacing: 0.04em;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 4px 16px rgba(0,0,0,0.2);
          opacity: 0;
          transform: translateX(8px);
          transition: all 0.2s ease;
        }
        .sf-label::after {
          content: '';
          position: absolute;
          right: -5px; top: 50%;
          transform: translateY(-50%);
          width: 0; height: 0;
          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent;
          border-left: 5px solid rgba(10,27,92,0.92);
        }
        .sf-btn:hover .sf-label {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>

      <div style={{
        position: "fixed",
        right: 20,
        bottom: 32,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        animation: "sfSlideIn 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.5s both",
      }}>
        {/* Vertical label */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 4,
        }}>
          <div style={{
            fontSize: 9,
            fontWeight: 800,
            color: "rgba(10,27,92,0.35)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            lineHeight: 1,
          }}></div>
        </div>

        {/* Thin divider line */}
        <div style={{
          width: 2,
          height: 28,
          background: "linear-gradient(180deg, transparent, rgba(10,27,92,0.15))",
          borderRadius: 2,
          margin: "0 auto",
        }} />

        {socials.map((s, i) => (
          <a
            key={s.id}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="sf-btn"
            title={s.label}
            style={{
              "--glow": s.glow,
              background: s.bg,
              borderColor: s.border,
              color: s.color,
              animationDelay: `${0.5 + i * 0.08}s`,
              boxShadow: `0 2px 12px ${s.glow.replace("0.4", "0.15")}`,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = `0 8px 24px ${s.glow}`;
              e.currentTarget.style.borderColor = s.color;
              e.currentTarget.style.background = s.bg.replace("0.1", "0.18");
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = `0 2px 12px ${s.glow.replace("0.4", "0.15")}`;
              e.currentTarget.style.borderColor = s.border;
              e.currentTarget.style.background = s.bg;
            }}
          >
            <span className="sf-label">{s.label}</span>
            {s.icon}
          </a>
        ))}

        {/* Bottom line */}
        <div style={{
          width: 2,
          height: 20,
          background: "linear-gradient(180deg, rgba(10,27,92,0.15), transparent)",
          borderRadius: 2,
          margin: "0 auto",
        }} />
      </div>
    </>
  );
}