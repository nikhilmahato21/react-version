import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";

// ============================================================
// RaghavLoans — Premium Fintech Hero (React + Framer Motion)
// ------------------------------------------------------------
// Install:
//   npm i framer-motion
// Add Google Fonts (Fraunces, Inter Tight, JetBrains Mono)
// in your index.html <head>:
//   <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300..900&family=Inter+Tight:wght@300..800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
// ============================================================

const EASE = [0.2, 0.7, 0.2, 1];

// ---------- Style tokens ----------
const tokens = {
  ink: "#0a0f1e",
  ink2: "#111a33",
  cream: "#f6f1e7",
  gold: "#d4a24c",
  gold2: "#f6cc7a",
  gold3: "#b8821f",
  emerald: "#2bbf7c",
  emeraldSoft: "#34d399",
  line: "rgba(246,241,231,0.12)",
  muted: "rgba(246,241,231,0.62)",
};

// ============================================================
// Animated counter for stats
// ============================================================
function Counter({ target, duration = 1800, format = (n) => n.toLocaleString("en-IN") }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf;
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.floor(eased * target));
      if (p < 1) raf = requestAnimationFrame(step);
      else setValue(target);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  return <span ref={ref}>{format(value)}</span>;
}

// ============================================================
// Brand name with per-character reveal
// ============================================================
function BrandName({ text }) {
  return (
    <h1 style={styles.brandName}>
      {[...text].map((ch, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block" }}
          initial={{ opacity: 0, y: "60%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 + i * 0.05, ease: EASE }}
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
      <motion.span
        style={styles.brandUnderline}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 1.1, ease: EASE }}
      />
    </h1>
  );
}

// ============================================================
// Trust badge
// ============================================================
function Badge({ children, delay }) {
  return (
    <motion.div
      style={styles.badge}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      whileHover={{ y: -2, borderColor: "rgba(212,162,76,0.4)", background: "rgba(212,162,76,0.05)" }}
    >
      <div style={styles.check}>
        <svg viewBox="0 0 24 24" style={{ width: 14, height: 14, stroke: tokens.ink, strokeWidth: 3, fill: "none" }}>
          <polyline points="4 12 10 18 20 6" />
        </svg>
      </div>
      <div style={styles.badgeText}>{children}</div>
    </motion.div>
  );
}

// ============================================================
// Floating glass card with parallax
// ============================================================
function FloatCard({ children, position, delay, floatDuration = 6, floatDelay = 0, mouseX, mouseY, depth = 1 }) {
  // Subtle mouse parallax
  const tx = useTransform(mouseX, [-0.5, 0.5], [-depth * 6, depth * 6]);
  const ty = useTransform(mouseY, [-0.5, 0.5], [-depth * 6, depth * 6]);
  const sx = useSpring(tx, { stiffness: 80, damping: 20 });
  const sy = useSpring(ty, { stiffness: 80, damping: 20 });

  return (
    <motion.div
      style={{ ...styles.floatCard, ...position, x: sx, y: sy }}
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

// ============================================================
// Background atmosphere
// ============================================================
function Background() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 60]);
  const y2 = useTransform(scrollY, [0, 500], [0, 100]);
  const y3 = useTransform(scrollY, [0, 500], [0, 140]);

  return (
    <div style={styles.bgLayer}>
      <motion.div style={{ ...styles.bgOrb, ...styles.bgOrbGold, y: y1 }} />
      <motion.div style={{ ...styles.bgOrb, ...styles.bgOrbEmerald, y: y2 }} />
      <motion.div style={{ ...styles.bgOrb, ...styles.bgOrbDeep, y: y3 }} />
      <div style={styles.bgGrid} />
      <div style={styles.bgNoise} />
    </div>
  );
}

// ============================================================
// Main hero component
// ============================================================
export default function RaghavLoansHero() {
  const stageRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = stageRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div style={styles.root}>
      <style>{globalCss}</style>
      <Background />

      {/* Nav */}
      <nav style={styles.nav}>
        <div style={styles.navLogo}>
          <div style={styles.navMark}>R</div>
          <span>RaghavLoans</span>
        </div>
        <div style={styles.navLinks} className="rl-nav-links">
          {["Loans", "EMI Calculator", "Eligibility", "About", "Support"].map((l) => (
            <a key={l} href="#" style={styles.navLink}>{l}</a>
          ))}
        </div>
        <motion.button
          style={styles.navCta}
          className="rl-nav-cta"
          whileHover={{ y: -1, boxShadow: "0 8px 22px rgba(246,241,231,0.2)" }}
        >
          Apply Now →
        </motion.button>
      </nav>

      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroGrid} className="rl-hero-grid">

          {/* LEFT */}
          <div>
            <motion.div
              style={styles.pill}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
            >
              <motion.span
                style={styles.pillDot}
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              RBI-Aligned Lending Partner · Est. 2014
            </motion.div>

            <div style={styles.brandBlock}>
              <div style={styles.brandLine}>
                <motion.div
                  style={styles.brandLogo}
                  initial={{ opacity: 0, rotate: -8, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: -4, scale: 1 }}
                  transition={{ duration: 0.9, delay: 0.25, ease: [0.2, 0.8, 0.2, 1.2] }}
                >
                  R
                </motion.div>
                <motion.div
                  style={styles.brandMeta}
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
              style={styles.tagline}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.2, ease: EASE }}
            >
              Fast, Trusted &amp; <span style={styles.taglineAccent}>Hassle-Free</span>
              <br />Loan Services — built for real people, real dreams.
            </motion.p>

            <motion.div
              style={styles.categories}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.35, ease: EASE }}
            >
              {["Personal Loans", "Home Loans", "Business Loans", "Vehicle Loans", "Gold Loans"].map((c, i, a) => (
                <React.Fragment key={c}>
                  <strong style={styles.catStrong}>{c}</strong>
                  <span style={styles.catSep}>•</span>
                </React.Fragment>
              ))}
              &amp; more
            </motion.div>

            <motion.div
              style={styles.ctaRow}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.5, ease: EASE }}
            >
              <motion.button
                style={styles.btnPrimary}
                whileHover={{ y: -2, boxShadow: "0 14px 40px rgba(212,162,76,0.55)" }}
                whileTap={{ scale: 0.97 }}
              >
                <span>Check Eligibility</span>
                <span>→</span>
              </motion.button>
              <motion.button
                style={styles.btnGhost}
                whileHover={{ background: "rgba(246,241,231,0.06)", borderColor: "rgba(246,241,231,0.3)" }}
              >
                Talk to an Expert
              </motion.button>
            </motion.div>

            <div style={styles.badges}>
              <Badge delay={1.7}>Fast Approval</Badge>
              <Badge delay={1.8}>Low Documentation</Badge>
              <Badge delay={1.9}>Trusted Financial Experts</Badge>
              <Badge delay={2.0}>Multiple Loan Options</Badge>
            </div>
          </div>

          {/* RIGHT — Floating cards */}
          <div
            ref={stageRef}
            style={styles.floatStage}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="rl-float-stage"
          >
            <FloatCard
              position={{ top: 0, right: "20%", width: 230 }}
              delay={1.0}
              floatDuration={6}
              mouseX={mouseX} mouseY={mouseY} depth={1}
            >
              <CardLabel color={tokens.gold}>Personal Loan</CardLabel>
              <div style={styles.cardTitle}>Up to ₹40L</div>
              <div style={styles.cardValue}>
                10.5%<span style={styles.cardValueSub}> /yr</span>
              </div>
              <div style={styles.cardSub}>Starting interest rate</div>
              <ProgressBar width={78} />
            </FloatCard>

            <FloatCard
              position={{ top: 80, right: -10, width: 260 }}
              delay={1.2}
              floatDuration={7}
              floatDelay={1.2}
              mouseX={mouseX} mouseY={mouseY} depth={2}
            >
              <CardLabel color={tokens.emerald}>Home Loan</CardLabel>
              <div style={styles.cardTitle}>Dream Home</div>
              <div style={styles.cardValue}>₹2Cr+</div>
              <div style={styles.cardSub}>Tenure up to 30 years</div>
              <ProgressBar width={90} />
            </FloatCard>

            <FloatCard
              position={{ top: 260, left: 0, width: 240 }}
              delay={1.4}
              floatDuration={6.5}
              floatDelay={0.6}
              mouseX={mouseX} mouseY={mouseY} depth={3}
            >
              <CardLabel color={tokens.gold2}>Business Loan</CardLabel>
              <div style={styles.cardTitle}>Grow Faster</div>
              <div style={styles.cardValue}>₹50L</div>
              <div style={styles.cardSub}>Collateral-free options</div>
              <ProgressBar width={65} />
            </FloatCard>

            <FloatCard
              position={{ bottom: 0, right: "8%", width: 290 }}
              delay={1.6}
              floatDuration={7.5}
              floatDelay={1.8}
              mouseX={mouseX} mouseY={mouseY} depth={4}
            >
              <CardLabel color={tokens.emeraldSoft}>EMI Calculator</CardLabel>
              <EmiRow k="Loan amount" v="₹ 10,00,000" />
              <EmiRow k="Tenure" v="5 years" />
              <EmiRow k="Interest rate" v="10.5%" />
              <EmiRow k="Monthly EMI" v="₹ 21,494" gold last />
            </FloatCard>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={styles.stats} className="rl-stats">
        <Stat num={<><Counter target={10000} />+</>} label="Happy Customers Served" hasDivider />
        <Stat num={<>₹<Counter target={100} />Cr+</>} label="Loans Processed & Disbursed" hasDivider />
        <Stat num={<><Counter target={95} />%</>} label="Approval Assistance Rate" hasDivider />
        <Stat num={<><Counter target={24} />/7</>} label="Dedicated Customer Support" />
      </section>
    </div>
  );
}

// ============================================================
// Small subcomponents
// ============================================================
function CardLabel({ color, children }) {
  return (
    <div style={styles.cardLabel}>
      <span style={{ ...styles.cardIco, background: color }} />
      {children}
    </div>
  );
}

function ProgressBar({ width }) {
  return (
    <div style={styles.cardBar}>
      <motion.div
        style={styles.cardBarFill}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: width / 100 }}
        transition={{ duration: 2, delay: 1.8, ease: EASE }}
      />
    </div>
  );
}

function EmiRow({ k, v, gold, last }) {
  return (
    <div style={{ ...styles.emiRow, borderBottom: last ? "none" : `1px solid ${tokens.line}` }}>
      <span style={styles.emiK}>{k}</span>
      <span style={gold ? styles.emiVgold : styles.emiV}>{v}</span>
    </div>
  );
}

function Stat({ num, label, hasDivider }) {
  return (
    <div style={{ ...styles.stat, ...(hasDivider ? styles.statDivider : {}) }}>
      <div style={styles.statNum}>{num}</div>
      <div style={styles.statLabel}>{label}</div>
    </div>
  );
}

// ============================================================
// Styles
// ============================================================
const styles = {
  root: {
    background: tokens.ink,
    color: tokens.cream,
    fontFamily: "'Inter Tight', -apple-system, sans-serif",
    minHeight: "100vh",
    overflowX: "hidden",
    WebkitFontSmoothing: "antialiased",
    position: "relative",
  },

  // Background
  bgLayer: { position: "fixed", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none" },
  bgGrid: {
    position: "absolute", inset: -2,
    backgroundImage:
      "linear-gradient(rgba(246,241,231,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(246,241,231,0.04) 1px, transparent 1px)",
    backgroundSize: "64px 64px",
    WebkitMaskImage: "radial-gradient(ellipse at 50% 30%, #000 30%, transparent 75%)",
    maskImage: "radial-gradient(ellipse at 50% 30%, #000 30%, transparent 75%)",
  },
  bgOrb: { position: "absolute", borderRadius: "50%", filter: "blur(90px)" },
  bgOrbGold: {
    width: 520, height: 520,
    background: "radial-gradient(circle, #d4a24c 0%, transparent 60%)",
    top: -120, left: -120, opacity: 0.55,
  },
  bgOrbEmerald: {
    width: 460, height: 460,
    background: "radial-gradient(circle, #2bbf7c 0%, transparent 65%)",
    bottom: -160, right: -100, opacity: 0.55,
  },
  bgOrbDeep: {
    width: 600, height: 600,
    background: "radial-gradient(circle, #3b4d8a 0%, transparent 70%)",
    top: "40%", left: "45%", transform: "translate(-50%, -50%)", opacity: 0.35,
  },
  bgNoise: {
    position: "absolute", inset: 0, opacity: 0.04, mixBlendMode: "overlay",
    backgroundImage:
      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
  },

  // Nav
  nav: {
    position: "relative", zIndex: 10,
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "22px 48px",
    borderBottom: `1px solid ${tokens.line}`,
    backdropFilter: "blur(10px)",
  },
  navLogo: { display: "flex", alignItems: "center", gap: 10, fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: 20, letterSpacing: "-0.01em" },
  navMark: {
    width: 32, height: 32, borderRadius: 8,
    background: `linear-gradient(135deg, ${tokens.gold2}, ${tokens.gold3})`,
    display: "grid", placeItems: "center",
    fontFamily: "'Fraunces', serif", fontWeight: 800, color: tokens.ink, fontSize: 18,
    boxShadow: "0 6px 20px rgba(212,162,76,0.35)",
  },
  navLinks: { display: "flex", gap: 34, fontSize: 14, color: tokens.muted },
  navLink: { color: "inherit", textDecoration: "none" },
  navCta: {
    padding: "10px 20px", borderRadius: 999,
    background: tokens.cream, color: tokens.ink,
    fontWeight: 600, fontSize: 14, border: "none", cursor: "pointer",
    fontFamily: "inherit",
  },

  // Hero
  hero: { position: "relative", zIndex: 5, padding: "70px 48px 100px", maxWidth: 1440, margin: "0 auto" },
  heroGrid: { display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 60, alignItems: "center" },

  // Pill
  pill: {
    display: "inline-flex", alignItems: "center", gap: 10,
    padding: "7px 14px 7px 8px",
    borderRadius: 999,
    background: "rgba(246,241,231,0.05)",
    border: `1px solid ${tokens.line}`,
    fontSize: 12.5, letterSpacing: "0.02em",
    color: tokens.muted,
    backdropFilter: "blur(8px)",
  },
  pillDot: {
    width: 8, height: 8, borderRadius: "50%",
    background: tokens.emerald, boxShadow: `0 0 12px ${tokens.emerald}`,
    display: "inline-block",
  },

  // Brand
  brandBlock: { marginTop: 24, position: "relative" },
  brandLine: { display: "flex", alignItems: "center", gap: 22, marginBottom: 6 },
  brandLogo: {
    width: 84, height: 84, borderRadius: 20,
    background: `radial-gradient(circle at 30% 25%, rgba(255,255,255,0.5), transparent 50%), linear-gradient(140deg, ${tokens.gold2} 0%, ${tokens.gold} 45%, ${tokens.gold3} 100%)`,
    display: "grid", placeItems: "center",
    fontFamily: "'Fraunces', serif", fontWeight: 800, color: tokens.ink,
    fontSize: 44, lineHeight: 1,
    boxShadow: "0 20px 50px rgba(212,162,76,0.4), inset 0 -3px 12px rgba(0,0,0,0.18)",
    flexShrink: 0,
  },
  brandMeta: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 11, letterSpacing: "0.22em", color: tokens.muted, textTransform: "uppercase",
  },
  brandName: {
    fontFamily: "'Fraunces', serif", fontWeight: 700,
    fontSize: "clamp(60px, 9.5vw, 148px)",
    lineHeight: 0.92, letterSpacing: "-0.045em",
    marginTop: 8,
    background: "linear-gradient(180deg, #faf5ea 0%, #f6cc7a 45%, #d4a24c 70%, #b8821f 100%)",
    WebkitBackgroundClip: "text", backgroundClip: "text",
    color: "transparent",
    position: "relative",
    display: "inline-block",
  },
  brandUnderline: {
    position: "absolute", left: 0, bottom: -8,
    height: 2, width: "100%",
    transformOrigin: "left",
    background: "linear-gradient(90deg, transparent, #d4a24c, transparent)",
    display: "block",
  },

  // Tagline
  tagline: {
    fontFamily: "'Fraunces', serif", fontStyle: "italic", fontWeight: 300,
    fontSize: "clamp(20px, 2vw, 28px)",
    color: tokens.cream, marginTop: 28,
    maxWidth: 620, lineHeight: 1.35,
  },
  taglineAccent: { color: tokens.gold2, fontStyle: "normal", fontWeight: 500 },

  // Categories
  categories: {
    marginTop: 24, fontSize: 14.5, color: tokens.muted,
    letterSpacing: "0.01em", lineHeight: 1.7, maxWidth: 580,
  },
  catSep: { color: tokens.gold, margin: "0 8px" },
  catStrong: { color: tokens.cream, fontWeight: 500 },

  // CTAs
  ctaRow: { display: "flex", flexWrap: "wrap", gap: 14, marginTop: 36 },
  btnPrimary: {
    display: "inline-flex", alignItems: "center", gap: 10,
    padding: "16px 28px", borderRadius: 999,
    fontWeight: 600, fontSize: 15, cursor: "pointer", border: "none",
    background: `linear-gradient(135deg, ${tokens.gold2}, ${tokens.gold})`,
    color: tokens.ink,
    boxShadow: "0 10px 30px rgba(212,162,76,0.35)",
    fontFamily: "inherit",
  },
  btnGhost: {
    display: "inline-flex", alignItems: "center", gap: 10,
    padding: "16px 28px", borderRadius: 999,
    fontWeight: 600, fontSize: 15, cursor: "pointer",
    background: "transparent", color: tokens.cream,
    border: `1px solid ${tokens.line}`,
    backdropFilter: "blur(8px)",
    fontFamily: "inherit",
  },

  // Badges
  badges: {
    display: "grid", gridTemplateColumns: "repeat(2, 1fr)",
    gap: 12, marginTop: 44, maxWidth: 580,
  },
  badge: {
    display: "flex", alignItems: "center", gap: 12,
    padding: "14px 16px", borderRadius: 14,
    background: "rgba(246,241,231,0.03)",
    border: `1px solid ${tokens.line}`,
    backdropFilter: "blur(10px)",
    cursor: "default",
  },
  check: {
    width: 26, height: 26, borderRadius: "50%",
    background: `linear-gradient(135deg, ${tokens.emeraldSoft}, ${tokens.emerald})`,
    display: "grid", placeItems: "center", flexShrink: 0,
    boxShadow: "0 0 14px rgba(43,191,124,0.4)",
  },
  badgeText: { fontSize: 14, fontWeight: 500, color: tokens.cream },

  // Float stage
  floatStage: { position: "relative", height: 580, perspective: 1200 },
  floatCard: {
    position: "absolute",
    background: "linear-gradient(160deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
    border: "1px solid rgba(246,241,231,0.14)",
    borderRadius: 22, padding: 22,
    backdropFilter: "blur(20px)",
    boxShadow: "0 30px 60px -20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
    willChange: "transform",
  },
  cardLabel: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 10.5, textTransform: "uppercase", letterSpacing: "0.18em",
    color: tokens.muted, marginBottom: 6,
    display: "flex", alignItems: "center", gap: 8,
  },
  cardIco: { width: 14, height: 14, borderRadius: 4, display: "inline-block" },
  cardTitle: { fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 600, color: tokens.cream, marginBottom: 12 },
  cardValue: {
    fontFamily: "'Fraunces', serif", fontSize: 30, fontWeight: 700,
    background: `linear-gradient(180deg, #faf5ea, ${tokens.gold2})`,
    WebkitBackgroundClip: "text", backgroundClip: "text",
    color: "transparent", lineHeight: 1, marginBottom: 6,
  },
  cardValueSub: { fontSize: "0.5em", color: tokens.muted, fontFamily: "'Inter Tight'", WebkitTextFillColor: tokens.muted },
  cardSub: { fontSize: 12, color: tokens.muted },
  cardBar: {
    marginTop: 14, height: 6, borderRadius: 3,
    background: "rgba(246,241,231,0.08)",
    overflow: "hidden", position: "relative",
  },
  cardBarFill: {
    height: "100%",
    background: `linear-gradient(90deg, ${tokens.gold2}, ${tokens.gold})`,
    borderRadius: 3, transformOrigin: "left", width: "100%",
  },
  emiRow: {
    display: "flex", justifyContent: "space-between",
    fontSize: 13, padding: "8px 0",
  },
  emiK: { color: tokens.muted },
  emiV: { color: tokens.cream, fontWeight: 500 },
  emiVgold: { color: tokens.gold2, fontFamily: "'Fraunces', serif", fontSize: 15 },

  // Stats
  stats: {
    position: "relative", zIndex: 5,
    maxWidth: 1440, margin: "0 auto",
    padding: "50px 48px",
    borderTop: `1px solid ${tokens.line}`, borderBottom: `1px solid ${tokens.line}`,
    display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40,
    background: "linear-gradient(180deg, rgba(212,162,76,0.04), transparent)",
  },
  stat: { textAlign: "left", position: "relative" },
  statDivider: {},
  statNum: {
    fontFamily: "'Fraunces', serif", fontWeight: 700,
    fontSize: "clamp(34px, 4vw, 54px)", lineHeight: 1,
    background: `linear-gradient(180deg, #faf5ea, ${tokens.gold2})`,
    WebkitBackgroundClip: "text", backgroundClip: "text",
    color: "transparent", letterSpacing: "-0.02em",
  },
  statLabel: { marginTop: 12, fontSize: 13.5, color: tokens.muted, letterSpacing: "0.01em", lineHeight: 1.4 },
};

// ============================================================
// Global CSS — pseudo-element dividers + responsive
// ============================================================
const globalCss = `
  .rl-stats > div:not(:last-child)::after {
    content: ""; position: absolute;
    right: -20px; top: 10%; height: 80%; width: 1px;
    background: ${tokens.line};
  }
  @media (max-width: 1024px) {
    .rl-hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
    .rl-float-stage { height: 520px !important; }
    .rl-stats { grid-template-columns: repeat(2, 1fr) !important; }
    .rl-stats > div::after { display: none !important; }
    .rl-nav-links { display: none !important; }
  }
  @media (max-width: 640px) {
    .rl-nav-cta { display: none !important; }
    .rl-float-stage { height: 440px !important; }
  }
`;
