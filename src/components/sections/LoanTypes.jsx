import { motion } from "framer-motion";
import { tokens, EASE, glass } from "../../constants/tokens";
import SectionHeader from "../ui/SectionHeader";
import FadeIn from "../ui/FadeIn";

const LOANS = [
  {
    color: tokens.gold,
    name: "Personal Loan",
    tagline: "Fund your aspirations",
    rate: "10.5% p.a.",
    amount: "Up to ₹40L",
    features: ["48-hour disbursal", "No collateral required", "Flexible 1–5 yr tenure"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    color: tokens.emerald,
    name: "Home Loan",
    tagline: "Own your dream home",
    rate: "8.5% p.a.",
    amount: "Up to ₹2Cr+",
    features: ["30-year tenure", "Balance transfer facility", "Tax benefits u/s 80C & 24"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12L12 3l9 9" /><path d="M9 21V12h6v9" /><rect x="3" y="12" width="18" height="9" rx="1" fill="none" />
        <path d="M3 12v9h18v-9" />
      </svg>
    ),
  },
  {
    color: tokens.gold2,
    name: "Business Loan",
    tagline: "Accelerate your growth",
    rate: "12% p.a.",
    amount: "Up to ₹50L",
    features: ["Collateral-free options", "Working capital support", "Same-day approval possible"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" /><line x1="12" y1="12" x2="12" y2="16" /><line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    color: "#60a5fa",
    name: "Vehicle Loan",
    tagline: "Drive your ambition",
    rate: "9.5% p.a.",
    amount: "Up to ₹20L",
    features: ["New & used vehicles", "Up to 100% on-road finance", "Quick RC transfer help"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 17H3a2 2 0 01-2-2v-4l3-6h13l3 6v4a2 2 0 01-2 2h-2" /><circle cx="7.5" cy="17.5" r="2.5" /><circle cx="16.5" cy="17.5" r="2.5" />
      </svg>
    ),
  },
  {
    color: "#fbbf24",
    name: "Gold Loan",
    tagline: "Unlock your gold's value",
    rate: "7.5% p.a.",
    amount: "Up to ₹25L",
    features: ["Instant disbursal", "Minimal documentation", "Safe vault storage"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    color: "#a78bfa",
    name: "Education Loan",
    tagline: "Invest in your future",
    rate: "8% p.a.",
    amount: "Up to ₹75L",
    features: ["Study abroad eligible", "Moratorium during course", "Govt. scheme integration"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

function LoanCard({ loan, index }) {
  return (
    <motion.div
      className="rl-loan-card"
      style={s.card}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: EASE }}
    >
      <div style={{ ...s.cardAccent, background: loan.color }} />
      <div style={{ ...s.iconWrap, color: loan.color, background: `${loan.color}18` }}>
        <span style={{ width: 26, height: 26, display: "block" }}>{loan.icon}</span>
      </div>
      <div style={s.cardName}>{loan.name}</div>
      <div style={s.cardTagline}>{loan.tagline}</div>

      <div style={s.rateRow}>
        <div style={s.rateBlock}>
          <span style={s.rateLabel}>From</span>
          <span style={{ ...s.rateValue, color: loan.color }}>{loan.rate}</span>
        </div>
        <div style={s.rateBlock}>
          <span style={s.rateLabel}>Amount</span>
          <span style={s.rateValue}>{loan.amount}</span>
        </div>
      </div>

      <ul style={s.features}>
        {loan.features.map((f) => (
          <li key={f} style={s.featureItem}>
            <span style={{ ...s.featureDot, background: loan.color }} />
            {f}
          </li>
        ))}
      </ul>

      <motion.a
        href="#apply"
        className="rl-card-cta"
        style={s.cta}
        whileTap={{ scale: 0.97 }}
      >
        Apply Now →
      </motion.a>
    </motion.div>
  );
}

export default function LoanTypes() {
  return (
    <section id="loans" style={s.wrap}>
      <div style={s.inner}>
        <SectionHeader
          eyebrow="Loan Products"
          title="Smart Loans for Every Goal"
          subtitle="From personal milestones to business growth — we have a loan crafted exactly for you."
        />
        <div style={s.grid} className="rl-loans-grid">
          {LOANS.map((loan, i) => (
            <LoanCard key={loan.name} loan={loan} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

const s = {
  wrap: { position: "relative", zIndex: 5, padding: "100px 0", background: "rgba(17,26,51,0.5)" },
  inner: { maxWidth: 1440, margin: "0 auto", padding: "0 48px" },
  grid: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 },
  card: {
    ...glass,
    borderRadius: 22, padding: 28, position: "relative",
    overflow: "hidden", cursor: "default",
  },
  cardAccent: { position: "absolute", top: 0, left: 0, right: 0, height: 3, borderRadius: "22px 22px 0 0" },
  iconWrap: {
    width: 52, height: 52, borderRadius: 14,
    display: "grid", placeItems: "center",
    marginBottom: 18,
  },
  cardName: {
    fontFamily: "'Fraunces',serif", fontWeight: 600, fontSize: 22,
    color: tokens.cream, marginBottom: 4,
  },
  cardTagline: { fontSize: 13.5, color: tokens.muted, marginBottom: 20 },
  rateRow: {
    display: "flex", gap: 24,
    padding: "14px 0",
    borderTop: `1px solid ${tokens.line}`,
    borderBottom: `1px solid ${tokens.line}`,
    marginBottom: 20,
  },
  rateBlock: { display: "flex", flexDirection: "column", gap: 4 },
  rateLabel: { fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: tokens.muted },
  rateValue: { fontFamily: "'Fraunces',serif", fontSize: 18, fontWeight: 600, color: tokens.cream },
  features: { listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 },
  featureItem: { display: "flex", alignItems: "center", gap: 10, fontSize: 13.5, color: tokens.muted },
  featureDot: { width: 6, height: 6, borderRadius: "50%", flexShrink: 0 },
  cta: {
    display: "block", textAlign: "center", textDecoration: "none",
    padding: "12px 20px", borderRadius: 999, fontSize: 14, fontWeight: 600,
    border: `1px solid ${tokens.line}`, color: tokens.cream,
    background: "rgba(246,241,231,0.05)", transition: "all 0.3s",
    fontFamily: "inherit",
  },
};
