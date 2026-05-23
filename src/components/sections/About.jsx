import { motion } from "framer-motion";
import { tokens, EASE, glass } from "../../constants/tokens";
import FadeIn from "../ui/FadeIn";
import Counter from "../ui/Counter";

const VALUES = [
  { color: tokens.gold, label: "Trust", desc: "RBI-aligned processes and complete fee transparency, always." },
  { color: tokens.emerald, label: "Speed", desc: "From application to disbursal — often within the same working day." },
  { color: "#a78bfa", label: "Transparency", desc: "No hidden charges. No fine print surprises. What you see is what you get." },
];

const ACHIEVEMENTS = [
  { num: <><Counter target={10} />+</>, label: "Years in Business" },
  { num: <><Counter target={15000} />+</>, label: "Loans Sanctioned" },
  { num: <><Counter target={98} />%</>, label: "Customer Satisfaction" },
  { num: <><Counter target={50} />+</>, label: "Lending Partners" },
];

export default function About() {
  return (
    <section id="about" style={s.wrap}>
      <div style={s.inner}>
        <div style={s.grid} className="rl-about-grid">
          {/* Left */}
          <div style={s.left}>
            <FadeIn>
              <span style={s.eyebrow}>Our Story</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 style={s.title}>Trusted Lending Partner Since 2014</h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p style={s.para}>
                RaghavLoans was founded with a single belief — that every Indian deserves access to fair,
                fast, and honest financial services. Over a decade, we've helped thousands of families buy
                their first home, launch their businesses, and fund their children's education.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p style={{ ...s.para, marginTop: 14 }}>
                As a NBFC-aligned lending consultancy registered under RBI guidelines, we operate with
                full regulatory compliance. We partner with 50+ banks and NBFCs to source the best rates
                and terms for every customer — not just the biggest deal for us.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div style={s.values}>
                {VALUES.map((v) => (
                  <div key={v.label} style={s.valueCard}>
                    <div style={{ ...s.valueDot, background: v.color }} />
                    <div>
                      <div style={s.valueLabel}>{v.label}</div>
                      <div style={s.valueDesc}>{v.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div style={s.ctaRow}>
                <motion.a
                  href="#apply"
                  style={s.btnPrimary}
                  whileHover={{ y: -2, boxShadow: "0 14px 40px rgba(212,162,76,0.55)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  Apply for a Loan →
                </motion.a>
                <motion.a
                  href="#loans"
                  style={s.btnGhost}
                  whileHover={{ background: "rgba(246,241,231,0.06)" }}
                >
                  Explore Loan Types
                </motion.a>
              </div>
            </FadeIn>
          </div>

          {/* Right — achievement grid */}
          <div style={s.right}>
            <div style={s.achieveGrid}>
              {ACHIEVEMENTS.map((a, i) => (
                <motion.div
                  key={a.label}
                  style={s.achieveCard}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                  whileHover={{ y: -4 }}
                >
                  <div style={s.achieveNum}>{a.num}</div>
                  <div style={s.achieveLabel}>{a.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              style={s.badge}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
            >
              <div style={s.badgeRow}>
                <span style={s.badgeDot} />
                <span style={s.badgeText}>RBI-Aligned Operations</span>
              </div>
              <div style={s.badgeRow}>
                <span style={s.badgeDot} />
                <span style={s.badgeText}>NBFC-Registered Entity</span>
              </div>
              <div style={s.badgeRow}>
                <span style={s.badgeDot} />
                <span style={s.badgeText}>ISO 9001:2015 Certified Process</span>
              </div>
              <div style={s.badgeRow}>
                <span style={s.badgeDot} />
                <span style={s.badgeText}>50+ Banking Partners Pan-India</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

const s = {
  wrap: { position: "relative", zIndex: 5, padding: "100px 0", background: "rgba(17,26,51,0.4)" },
  inner: { maxWidth: 1440, margin: "0 auto", padding: "0 48px" },
  grid: { display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 80, alignItems: "start" },
  left: {},
  eyebrow: {
    display: "inline-block",
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
    color: tokens.gold, marginBottom: 16,
  },
  title: {
    fontFamily: "'Fraunces',serif", fontWeight: 700,
    fontSize: "clamp(30px,4vw,52px)", lineHeight: 1.08,
    letterSpacing: "-0.03em",
    background: "linear-gradient(180deg,#faf5ea 0%,#f6cc7a 50%,#d4a24c 100%)",
    WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
    marginBottom: 28,
  },
  para: { fontSize: 16, lineHeight: 1.75, color: tokens.muted, maxWidth: 580 },
  values: { display: "flex", flexDirection: "column", gap: 16, marginTop: 32 },
  valueCard: {
    display: "flex", alignItems: "flex-start", gap: 16,
    padding: "16px 20px", borderRadius: 14,
    background: "rgba(246,241,231,0.03)", border: `1px solid ${tokens.line}`,
    backdropFilter: "blur(10px)",
  },
  valueDot: { width: 10, height: 10, borderRadius: "50%", flexShrink: 0, marginTop: 5 },
  valueLabel: { fontSize: 15, fontWeight: 600, color: tokens.cream, marginBottom: 4 },
  valueDesc: { fontSize: 13.5, lineHeight: 1.6, color: tokens.muted },
  ctaRow: { display: "flex", flexWrap: "wrap", gap: 14, marginTop: 36 },
  btnPrimary: {
    display: "inline-flex", alignItems: "center", gap: 8,
    padding: "14px 26px", borderRadius: 999, fontWeight: 600, fontSize: 14,
    background: `linear-gradient(135deg,${tokens.gold2},${tokens.gold})`, color: tokens.ink,
    boxShadow: "0 10px 30px rgba(212,162,76,0.3)", fontFamily: "inherit", textDecoration: "none", border: "none",
  },
  btnGhost: {
    display: "inline-flex", alignItems: "center",
    padding: "14px 26px", borderRadius: 999, fontWeight: 600, fontSize: 14,
    background: "transparent", color: tokens.cream, border: `1px solid ${tokens.line}`,
    fontFamily: "inherit", textDecoration: "none",
  },
  right: { display: "flex", flexDirection: "column", gap: 24 },
  achieveGrid: { display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 },
  achieveCard: {
    padding: "28px 24px", borderRadius: 20,
    background: "linear-gradient(160deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))",
    border: `1px solid ${tokens.line}`, backdropFilter: "blur(20px)",
    textAlign: "center", cursor: "default",
    transition: "transform 0.3s",
  },
  achieveNum: {
    fontFamily: "'Fraunces',serif", fontWeight: 700, fontSize: 38,
    background: `linear-gradient(180deg,#faf5ea,${tokens.gold2})`,
    WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
    marginBottom: 8,
  },
  achieveLabel: { fontSize: 13, color: tokens.muted, lineHeight: 1.4 },
  badge: {
    padding: "24px 28px", borderRadius: 18,
    background: "rgba(246,241,231,0.03)", border: `1px solid ${tokens.line}`,
    backdropFilter: "blur(10px)",
    display: "flex", flexDirection: "column", gap: 14,
  },
  badgeRow: { display: "flex", alignItems: "center", gap: 12 },
  badgeDot: { width: 8, height: 8, borderRadius: "50%", background: tokens.emerald, flexShrink: 0, boxShadow: `0 0 8px ${tokens.emerald}` },
  badgeText: { fontSize: 14, fontWeight: 500, color: tokens.cream },
};
