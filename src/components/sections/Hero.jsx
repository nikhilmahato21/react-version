import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { tokens, EASE, glass } from "../../constants/tokens";

function BrandName({ text }) {
  return (
    <h1 style={s.brandName}>
      {[...text].map((ch, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block" }}
          initial={{ opacity: 0, y: "60%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 + i * 0.05, ease: EASE }}
        >
          {ch === " " ? " " : ch}
        </motion.span>
      ))}
      <motion.span
        style={s.brandUnderline}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 1.1, ease: EASE }}
      />
    </h1>
  );
}

function Badge({ children, delay }) {
  return (
    <motion.div
      style={s.badge}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      whileHover={{ y: -2, borderColor: "rgba(212,162,76,0.4)" }}
    >
      <div style={s.check}>
        <svg viewBox="0 0 24 24" style={{ width: 14, height: 14, stroke: tokens.ink, strokeWidth: 3, fill: "none" }}>
          <polyline points="4 12 10 18 20 6" />
        </svg>
      </div>
      <div style={s.badgeText}>{children}</div>
    </motion.div>
  );
}

function FloatCard({ children, position, delay, floatDuration = 6, floatDelay = 0, mouseX, mouseY, depth = 1 }) {
  const tx = useTransform(mouseX, [-0.5, 0.5], [-depth * 6, depth * 6]);
  const ty = useTransform(mouseY, [-0.5, 0.5], [-depth * 6, depth * 6]);
  const sx = useSpring(tx, { stiffness: 80, damping: 20 });
  const sy = useSpring(ty, { stiffness: 80, damping: 20 });
  return (
    <motion.div
      style={{ ...s.floatCard, ...position, x: sx, y: sy }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: floatDuration, delay: floatDelay, repeat: Infinity, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function CardLabel({ color, children }) {
  return (
    <div style={s.cardLabel}>
      <span style={{ ...s.cardIco, background: color }} />
      {children}
    </div>
  );
}

function ProgressBar({ width }) {
  return (
    <div style={s.cardBar}>
      <motion.div
        style={s.cardBarFill}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: width / 100 }}
        transition={{ duration: 2, delay: 1.8, ease: EASE }}
      />
    </div>
  );
}

function EmiRow({ k, v, gold, last }) {
  return (
    <div style={{ ...s.emiRow, borderBottom: last ? "none" : `1px solid ${tokens.line}` }}>
      <span style={s.emiK}>{k}</span>
      <span style={gold ? s.emiVgold : s.emiV}>{v}</span>
    </div>
  );
}

export default function Hero() {
  const stageRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = stageRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  return (
    <section id="home" style={s.hero}>
      <div style={s.heroGrid} className="rl-hero-grid">
        {/* Left */}
        <div>
          <motion.div
            style={s.pill}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          >
            <motion.span
              style={s.pillDot}
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            RBI-Aligned Lending Partner · Est. 2014
          </motion.div>

          <div style={s.brandBlock}>
            <div style={s.brandLine}>
              <motion.div
                style={s.brandLogo}
                initial={{ opacity: 0, rotate: -8, scale: 0.7 }}
                animate={{ opacity: 1, rotate: -4, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.25, ease: [0.2, 0.8, 0.2, 1.2] }}
              >
                R
              </motion.div>
              <motion.div
                style={s.brandMeta}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
              >
                — A Premium Loan Brand —
              </motion.div>
            </div>
            <BrandName text="RaghavLoans" />
          </div>

          <motion.p
            style={s.tagline}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2, ease: EASE }}
          >
            Fast, Trusted &amp; <span style={s.taglineAccent}>Hassle-Free</span>
            <br />Loan Services — built for real people, real dreams.
          </motion.p>

          <motion.div
            style={s.categories}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.35, ease: EASE }}
          >
            {["Personal Loans", "Home Loans", "Business Loans", "Vehicle Loans", "Gold Loans"].map((c) => (
              <React.Fragment key={c}>
                <strong style={s.catStrong}>{c}</strong>
                <span style={s.catSep}>•</span>
              </React.Fragment>
            ))}
            &amp; more
          </motion.div>

          <motion.div
            style={s.ctaRow}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.5, ease: EASE }}
          >
            <motion.a
              href="#apply"
              style={s.btnPrimary}
              whileHover={{ y: -2, boxShadow: "0 14px 40px rgba(212,162,76,0.55)" }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Check Eligibility</span><span>→</span>
            </motion.a>
            <motion.a
              href="#process"
              style={s.btnGhost}
              whileHover={{ background: "rgba(246,241,231,0.06)", borderColor: "rgba(246,241,231,0.3)" }}
            >
              See How It Works
            </motion.a>
          </motion.div>

          <div style={s.badges}>
            {["Fast Approval", "Low Documentation", "Trusted Financial Experts", "Multiple Loan Options"].map((b, i) => (
              <Badge key={b} delay={1.7 + i * 0.1}>{b}</Badge>
            ))}
          </div>
        </div>

        {/* Right — Float cards */}
        <div
          ref={stageRef}
          style={s.floatStage}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="rl-float-stage"
        >
          <FloatCard position={{ top: 0, right: "20%", width: 230 }} delay={1.0} floatDuration={6} mouseX={mouseX} mouseY={mouseY} depth={1}>
            <CardLabel color={tokens.gold}>Personal Loan</CardLabel>
            <div style={s.cardTitle}>Up to ₹40L</div>
            <div style={s.cardValue}>10.5%<span style={s.cardValueSub}> /yr</span></div>
            <div style={s.cardSub}>Starting interest rate</div>
            <ProgressBar width={78} />
          </FloatCard>

          <FloatCard position={{ top: 80, right: -10, width: 260 }} delay={1.2} floatDuration={7} floatDelay={1.2} mouseX={mouseX} mouseY={mouseY} depth={2}>
            <CardLabel color={tokens.emerald}>Home Loan</CardLabel>
            <div style={s.cardTitle}>Dream Home</div>
            <div style={s.cardValue}>₹2Cr+</div>
            <div style={s.cardSub}>Tenure up to 30 years</div>
            <ProgressBar width={90} />
          </FloatCard>

          <FloatCard position={{ top: 260, left: 0, width: 240 }} delay={1.4} floatDuration={6.5} floatDelay={0.6} mouseX={mouseX} mouseY={mouseY} depth={3}>
            <CardLabel color={tokens.gold2}>Business Loan</CardLabel>
            <div style={s.cardTitle}>Grow Faster</div>
            <div style={s.cardValue}>₹50L</div>
            <div style={s.cardSub}>Collateral-free options</div>
            <ProgressBar width={65} />
          </FloatCard>

          <FloatCard position={{ bottom: 0, right: "8%", width: 290 }} delay={1.6} floatDuration={7.5} floatDelay={1.8} mouseX={mouseX} mouseY={mouseY} depth={4}>
            <CardLabel color={tokens.emeraldSoft}>EMI Calculator</CardLabel>
            <EmiRow k="Loan amount" v="₹ 10,00,000" />
            <EmiRow k="Tenure" v="5 years" />
            <EmiRow k="Interest rate" v="10.5%" />
            <EmiRow k="Monthly EMI" v="₹ 21,494" gold last />
          </FloatCard>
        </div>
      </div>
    </section>
  );
}

const s = {
  hero: { position: "relative", zIndex: 5, padding: "140px 48px 100px", maxWidth: 1440, margin: "0 auto" },
  heroGrid: { display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 60, alignItems: "center" },
  pill: {
    display: "inline-flex", alignItems: "center", gap: 10,
    padding: "7px 14px 7px 8px", borderRadius: 999,
    background: "rgba(246,241,231,0.05)", border: `1px solid ${tokens.line}`,
    fontSize: 12.5, letterSpacing: "0.02em", color: tokens.muted, backdropFilter: "blur(8px)",
  },
  pillDot: { width: 8, height: 8, borderRadius: "50%", background: tokens.emerald, boxShadow: `0 0 12px ${tokens.emerald}`, display: "inline-block" },
  brandBlock: { marginTop: 24, position: "relative" },
  brandLine: { display: "flex", alignItems: "center", gap: 22, marginBottom: 6 },
  brandLogo: {
    width: 84, height: 84, borderRadius: 20, flexShrink: 0,
    background: `radial-gradient(circle at 30% 25%,rgba(255,255,255,0.5),transparent 50%),linear-gradient(140deg,${tokens.gold2} 0%,${tokens.gold} 45%,${tokens.gold3} 100%)`,
    display: "grid", placeItems: "center",
    fontFamily: "'Fraunces', serif", fontWeight: 800, color: tokens.ink, fontSize: 44, lineHeight: 1,
    boxShadow: "0 20px 50px rgba(212,162,76,0.4),inset 0 -3px 12px rgba(0,0,0,0.18)",
  },
  brandMeta: { fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.22em", color: tokens.muted, textTransform: "uppercase" },
  brandName: {
    fontFamily: "'Fraunces',serif", fontWeight: 700,
    fontSize: "clamp(60px,9.5vw,148px)", lineHeight: 0.92, letterSpacing: "-0.045em",
    marginTop: 8,
    background: "linear-gradient(180deg,#faf5ea 0%,#f6cc7a 45%,#d4a24c 70%,#b8821f 100%)",
    WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
    position: "relative", display: "inline-block",
  },
  brandUnderline: {
    position: "absolute", left: 0, bottom: -8, height: 2, width: "100%",
    transformOrigin: "left",
    background: "linear-gradient(90deg,transparent,#d4a24c,transparent)", display: "block",
  },
  tagline: {
    fontFamily: "'Fraunces',serif", fontStyle: "italic", fontWeight: 300,
    fontSize: "clamp(20px,2vw,28px)", color: tokens.cream, marginTop: 28,
    maxWidth: 620, lineHeight: 1.35,
  },
  taglineAccent: { color: tokens.gold2, fontStyle: "normal", fontWeight: 500 },
  categories: { marginTop: 24, fontSize: 14.5, color: tokens.muted, letterSpacing: "0.01em", lineHeight: 1.7, maxWidth: 580 },
  catSep: { color: tokens.gold, margin: "0 8px" },
  catStrong: { color: tokens.cream, fontWeight: 500 },
  ctaRow: { display: "flex", flexWrap: "wrap", gap: 14, marginTop: 36 },
  btnPrimary: {
    display: "inline-flex", alignItems: "center", gap: 10,
    padding: "16px 28px", borderRadius: 999, fontWeight: 600, fontSize: 15, cursor: "pointer", border: "none",
    background: `linear-gradient(135deg,${tokens.gold2},${tokens.gold})`, color: tokens.ink,
    boxShadow: "0 10px 30px rgba(212,162,76,0.35)", fontFamily: "inherit", textDecoration: "none",
  },
  btnGhost: {
    display: "inline-flex", alignItems: "center", gap: 10,
    padding: "16px 28px", borderRadius: 999, fontWeight: 600, fontSize: 15, cursor: "pointer",
    background: "transparent", color: tokens.cream, border: `1px solid ${tokens.line}`,
    backdropFilter: "blur(8px)", fontFamily: "inherit", textDecoration: "none",
  },
  badges: { display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 12, marginTop: 44, maxWidth: 580 },
  badge: {
    display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", borderRadius: 14,
    background: "rgba(246,241,231,0.03)", border: `1px solid ${tokens.line}`,
    backdropFilter: "blur(10px)", cursor: "default",
  },
  check: {
    width: 26, height: 26, borderRadius: "50%", flexShrink: 0,
    background: `linear-gradient(135deg,${tokens.emeraldSoft},${tokens.emerald})`,
    display: "grid", placeItems: "center", boxShadow: "0 0 14px rgba(43,191,124,0.4)",
  },
  badgeText: { fontSize: 14, fontWeight: 500, color: tokens.cream },
  floatStage: { position: "relative", height: 580, perspective: 1200 },
  floatCard: {
    position: "absolute",
    ...{ background: "linear-gradient(160deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))" },
    border: "1px solid rgba(246,241,231,0.14)", borderRadius: 22, padding: 22,
    backdropFilter: "blur(20px)",
    boxShadow: "0 30px 60px -20px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.1)",
    willChange: "transform",
  },
  cardLabel: {
    fontFamily: "'JetBrains Mono',monospace", fontSize: 10.5, textTransform: "uppercase",
    letterSpacing: "0.18em", color: tokens.muted, marginBottom: 6,
    display: "flex", alignItems: "center", gap: 8,
  },
  cardIco: { width: 14, height: 14, borderRadius: 4, display: "inline-block" },
  cardTitle: { fontFamily: "'Fraunces',serif", fontSize: 22, fontWeight: 600, color: tokens.cream, marginBottom: 12 },
  cardValue: {
    fontFamily: "'Fraunces',serif", fontSize: 30, fontWeight: 700,
    background: `linear-gradient(180deg,#faf5ea,${tokens.gold2})`,
    WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", lineHeight: 1, marginBottom: 6,
  },
  cardValueSub: { fontSize: "0.5em", color: tokens.muted, fontFamily: "'Inter Tight'", WebkitTextFillColor: tokens.muted },
  cardSub: { fontSize: 12, color: tokens.muted },
  cardBar: { marginTop: 14, height: 6, borderRadius: 3, background: "rgba(246,241,231,0.08)", overflow: "hidden", position: "relative" },
  cardBarFill: { height: "100%", background: `linear-gradient(90deg,${tokens.gold2},${tokens.gold})`, borderRadius: 3, transformOrigin: "left", width: "100%" },
  emiRow: { display: "flex", justifyContent: "space-between", fontSize: 13, padding: "8px 0" },
  emiK: { color: tokens.muted },
  emiV: { color: tokens.cream, fontWeight: 500 },
  emiVgold: { color: tokens.gold2, fontFamily: "'Fraunces',serif", fontSize: 15 },
};
