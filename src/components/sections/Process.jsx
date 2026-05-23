import { motion } from "framer-motion";
import { tokens, EASE, glass } from "../../constants/tokens";
import SectionHeader from "../ui/SectionHeader";

const STEPS = [
  {
    n: "01",
    color: tokens.gold,
    title: "Apply Online",
    desc: "Fill our quick 5-minute form with your basic personal and financial details.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    n: "02",
    color: tokens.emerald,
    title: "Document Upload",
    desc: "Submit your KYC, income proofs, and address documents — all 100% digital.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 16 12 12 8 16" /><line x1="12" y1="12" x2="12" y2="21" /><path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
      </svg>
    ),
  },
  {
    n: "03",
    color: tokens.gold2,
    title: "Quick Approval",
    desc: "Our expert team reviews your application and approves it within 24 hours.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    n: "04",
    color: tokens.emeraldSoft,
    title: "Funds Disbursed",
    desc: "Loan amount is credited directly to your bank account — same day in most cases.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section id="process" style={s.wrap}>
      <div style={s.inner}>
        <SectionHeader
          eyebrow="Simple & Fast"
          title="Get Your Loan in 4 Easy Steps"
          subtitle="We've simplified the entire lending process so you spend less time on paperwork and more time on what matters."
        />

        <div style={s.grid} className="rl-process-grid">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              className="rl-step"
              style={s.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
            >
              <div style={{ ...s.circle, borderColor: step.color, boxShadow: `0 0 24px ${step.color}30` }}>
                <span style={{ ...s.num, color: step.color }}>{step.n}</span>
              </div>

              <div style={{ ...s.iconBox, color: step.color, background: `${step.color}15` }}>
                <span style={{ width: 28, height: 28, display: "block" }}>{step.icon}</span>
              </div>

              <div style={s.title}>{step.title}</div>
              <div style={s.desc}>{step.desc}</div>

              {i < STEPS.length - 1 && (
                <div style={{ ...s.connector, background: `linear-gradient(90deg, ${step.color}60, transparent)` }} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const s = {
  wrap: { position: "relative", zIndex: 5, padding: "100px 0" },
  inner: { maxWidth: 1440, margin: "0 auto", padding: "0 48px" },
  grid: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32 },
  step: { position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" },
  circle: {
    width: 80, height: 80, borderRadius: "50%",
    border: "2px solid",
    background: "rgba(246,241,231,0.04)",
    display: "grid", placeItems: "center",
    marginBottom: 20,
    backdropFilter: "blur(10px)",
  },
  num: { fontFamily: "'JetBrains Mono',monospace", fontSize: 22, fontWeight: 700 },
  iconBox: {
    width: 56, height: 56, borderRadius: 16,
    display: "grid", placeItems: "center",
    marginBottom: 18,
  },
  title: { fontFamily: "'Fraunces',serif", fontWeight: 600, fontSize: 20, color: tokens.cream, marginBottom: 10 },
  desc: { fontSize: 14, lineHeight: 1.65, color: tokens.muted, maxWidth: 240, margin: "0 auto" },
  connector: {
    position: "absolute", top: 40, right: "-16%",
    width: "32%", height: 1,
  },
};
