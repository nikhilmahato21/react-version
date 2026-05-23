import { motion } from "framer-motion";
import { tokens, EASE } from "../../constants/tokens";
import FadeIn from "../ui/FadeIn";

export default function CTABanner() {
  return (
    <section id="apply" style={s.wrap}>
      <div style={s.glow1} />
      <div style={s.glow2} />
      <div style={s.inner}>
        <FadeIn>
          <span style={s.eyebrow}>Start Today</span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 style={s.title}>Ready to Achieve Your<br />Financial Goals?</h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p style={s.subtitle}>
            Apply in 5 minutes. Get approval in 24 hours. Funds in your account — fast.
            <br />No obligation. No spam. Just honest financial guidance.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div style={s.ctaRow}>
            <motion.a
              href="#"
              style={s.btnPrimary}
              whileHover={{ y: -3, boxShadow: "0 18px 50px rgba(212,162,76,0.65)" }}
              whileTap={{ scale: 0.97 }}
            >
              Check Eligibility — Free →
            </motion.a>
            <motion.a
              href="tel:+918550046128"
              style={s.btnGhost}
              whileHover={{ background: "rgba(246,241,231,0.08)" }}
            >
              <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.8 19.79 19.79 0 011 1.18 2 2 0 012.98 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 7.91A16 16 0 0014.09 17l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              Talk to an Expert
            </motion.a>
          </div>
        </FadeIn>
        <FadeIn delay={0.4}>
          <div style={s.trust}>
            {["No hidden charges", "RBI-compliant process", "Data encrypted & secure", "Free counselling session"].map((t) => (
              <div key={t} style={s.trustItem}>
                <svg viewBox="0 0 24 24" width={14} height={14} fill="none" stroke={tokens.emerald} strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

const s = {
  wrap: {
    position: "relative", zIndex: 5, padding: "120px 48px",
    overflow: "hidden", textAlign: "center",
    background: "linear-gradient(135deg,rgba(212,162,76,0.08) 0%,rgba(10,15,30,0) 50%,rgba(43,191,124,0.08) 100%)",
    borderTop: "1px solid rgba(246,241,231,0.1)",
    borderBottom: "1px solid rgba(246,241,231,0.1)",
  },
  glow1: {
    position: "absolute", top: -100, left: "20%",
    width: 400, height: 400, borderRadius: "50%",
    background: "radial-gradient(circle,rgba(212,162,76,0.2) 0%,transparent 70%)",
    filter: "blur(60px)", pointerEvents: "none",
  },
  glow2: {
    position: "absolute", bottom: -100, right: "20%",
    width: 400, height: 400, borderRadius: "50%",
    background: "radial-gradient(circle,rgba(43,191,124,0.2) 0%,transparent 70%)",
    filter: "blur(60px)", pointerEvents: "none",
  },
  inner: { position: "relative", maxWidth: 720, margin: "0 auto" },
  eyebrow: {
    display: "inline-block",
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
    color: tokens.gold, marginBottom: 20,
  },
  title: {
    fontFamily: "'Fraunces',serif", fontWeight: 700,
    fontSize: "clamp(36px,5vw,68px)", lineHeight: 1.04,
    letterSpacing: "-0.035em",
    background: "linear-gradient(180deg,#faf5ea 0%,#f6cc7a 45%,#d4a24c 100%)",
    WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
    marginBottom: 22,
  },
  subtitle: { fontSize: 17, lineHeight: 1.7, color: tokens.muted, marginBottom: 44 },
  ctaRow: { display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center", marginBottom: 36 },
  btnPrimary: {
    display: "inline-flex", alignItems: "center", gap: 8,
    padding: "18px 34px", borderRadius: 999, fontWeight: 700, fontSize: 16,
    background: `linear-gradient(135deg,${tokens.gold2},${tokens.gold})`, color: tokens.ink,
    boxShadow: "0 12px 36px rgba(212,162,76,0.4)", fontFamily: "inherit", textDecoration: "none", border: "none",
  },
  btnGhost: {
    display: "inline-flex", alignItems: "center", gap: 10,
    padding: "18px 34px", borderRadius: 999, fontWeight: 600, fontSize: 15,
    background: "rgba(246,241,231,0.05)", color: tokens.cream,
    border: "1px solid rgba(246,241,231,0.2)",
    fontFamily: "inherit", textDecoration: "none",
  },
  trust: { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px 28px" },
  trustItem: { display: "flex", alignItems: "center", gap: 8, fontSize: 13.5, color: tokens.muted },
};
