import { motion } from "framer-motion";
import { tokens, EASE, glass } from "../../constants/tokens";
import FadeIn from "../ui/FadeIn";

const BENEFITS = [
  { icon: "💰", title: "High Payout", desc: "Earn industry-leading commissions on every loan disbursed through your network." },
  { icon: "🏦", title: "20+ Bank Partners", desc: "Access top banks & NBFCs — HDFC, SBI, ICICI, Bajaj Finance, and more." },
  { icon: "📋", title: "All Loan Products", desc: "Personal, Home, Business, Vehicle & Education loans — one franchise, full portfolio." },
  { icon: "⚡", title: "Fast Approvals", desc: "Dedicated processing desk ensures quick turnarounds for your clients." },
  { icon: "📱", title: "DSA Dashboard", desc: "Real-time tracking of leads, disbursals, and payout status — anytime, anywhere." },
  { icon: "🎓", title: "Free Training", desc: "Onboarding support, product training, and sales tools provided at no cost." },
];

function BenefitCard({ item, index }) {
  return (
    <motion.div
      style={s.card}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: EASE }}
    >
      <div style={s.cardIcon}>{item.icon}</div>
      <div style={s.cardTitle}>{item.title}</div>
      <div style={s.cardDesc}>{item.desc}</div>
    </motion.div>
  );
}

export default function DSAPartner() {
  return (
    <section id="dsa-partner" style={s.wrap}>
      <div style={s.inner}>

        {/* Badge pill — same style as image */}
        <FadeIn>
          <div style={s.pillWrap}>
            <div style={s.pill}>
              <svg viewBox="0 0 24 24" style={s.pillIcon} fill="none" stroke={tokens.emerald} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="6" />
                <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
              </svg>
              AUTHORIZED PAN-INDIA LOAN DSA NETWORK
            </div>
          </div>
        </FadeIn>

        {/* Main heading — same typographic weight/style as image */}
        <FadeIn delay={0.15}>
          <h2 style={s.heading}>
            Best Loan Services &amp;{" "}
            <br />
            High-Payout{" "}
            <span style={s.headingAccent}>DSA</span>
            <br />
            <span style={s.headingAccent}>Franchise</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p style={s.subtext}>
            Join RaghavLoans as a Direct Selling Agent and build a high-income business
            helping people get the right loan — backed by our 10+ years of expertise.
          </p>
        </FadeIn>

        {/* Benefits grid */}
        <div style={s.grid} className="rl-dsa-grid">
          {BENEFITS.map((item, i) => (
            <BenefitCard key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* CTA row */}
        <FadeIn delay={0.3}>
          <div style={s.ctaRow}>
            <motion.a
              href="https://forms.gle/f11P9Vr5Zh8xvjxk6"
              target="_blank"
              rel="noreferrer"
              style={s.btnPrimary}
              whileHover={{ y: -2, boxShadow: "0 14px 40px rgba(43,191,124,0.45)" }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Register as DSA Partner</span><span>→</span>
            </motion.a>
            <motion.a
              href="tel:+918550046128"
              style={s.btnGhost}
              whileHover={{ background: "rgba(246,241,231,0.06)", borderColor: "rgba(246,241,231,0.3)" }}
            >
              Talk to Us First
            </motion.a>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

const s = {
  wrap: {
    position: "relative", zIndex: 5,
    padding: "100px 0",
    background: "linear-gradient(180deg, rgba(10,15,30,0) 0%, rgba(17,26,51,0.7) 40%, rgba(10,15,30,0) 100%)",
  },
  inner: { maxWidth: 1440, margin: "0 auto", padding: "0 48px" },

  pillWrap: { display: "flex", justifyContent: "center", marginBottom: 32 },
  pill: {
    display: "inline-flex", alignItems: "center", gap: 8,
    padding: "8px 18px 8px 12px", borderRadius: 999,
    background: "rgba(43,191,124,0.08)",
    border: `1px solid rgba(43,191,124,0.28)`,
    fontSize: 12, letterSpacing: "0.09em", fontWeight: 700,
    color: tokens.emerald, textTransform: "uppercase",
  },
  pillIcon: { width: 16, height: 16, flexShrink: 0 },

  heading: {
    fontFamily: "'Fraunces', serif",
    fontWeight: 800,
    fontSize: "clamp(42px, 7vw, 96px)",
    lineHeight: 1.0,
    letterSpacing: "-0.04em",
    color: tokens.cream,
    textAlign: "center",
    margin: "0 auto 24px",
    maxWidth: 900,
  },
  headingAccent: {
    color: tokens.emerald,
    fontStyle: "normal",
  },

  subtext: {
    textAlign: "center",
    fontSize: "clamp(15px, 1.5vw, 18px)",
    color: tokens.muted,
    maxWidth: 640,
    margin: "0 auto 64px",
    lineHeight: 1.65,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 22,
    marginBottom: 56,
  },
  card: {
    ...glass,
    borderRadius: 20,
    padding: "28px 26px",
    cursor: "default",
  },
  cardIcon: { fontSize: 28, marginBottom: 14 },
  cardTitle: {
    fontFamily: "'Fraunces', serif",
    fontSize: 19, fontWeight: 600,
    color: tokens.cream, marginBottom: 8,
  },
  cardDesc: { fontSize: 14, color: tokens.muted, lineHeight: 1.6 },

  ctaRow: { display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 14 },
  btnPrimary: {
    display: "inline-flex", alignItems: "center", gap: 10,
    padding: "16px 30px", borderRadius: 999, fontWeight: 600, fontSize: 15,
    background: `linear-gradient(135deg, ${tokens.emerald}, #1a9e66)`,
    color: "#fff", boxShadow: "0 10px 30px rgba(43,191,124,0.3)",
    fontFamily: "inherit", textDecoration: "none", border: "none", cursor: "pointer",
  },
  btnGhost: {
    display: "inline-flex", alignItems: "center", gap: 10,
    padding: "16px 28px", borderRadius: 999, fontWeight: 600, fontSize: 15,
    background: "transparent", color: tokens.cream,
    border: `1px solid rgba(246,241,231,0.18)`,
    backdropFilter: "blur(8px)", fontFamily: "inherit", textDecoration: "none",
  },
};
