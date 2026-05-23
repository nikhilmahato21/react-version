import Counter from "../ui/Counter";
import { tokens } from "../../constants/tokens";

function Stat({ num, label }) {
  return (
    <div style={s.stat}>
      <div style={s.num}>{num}</div>
      <div style={s.label}>{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section style={s.wrap} className="rl-stats-grid">
      <Stat num={<><Counter target={10000} />+</>} label="Happy Customers Served" />
      <Stat num={<>₹<Counter target={100} />Cr+</>} label="Loans Processed & Disbursed" />
      <Stat num={<><Counter target={95} />%</>} label="Approval Assistance Rate" />
      <Stat num={<><Counter target={24} />/7</>} label="Dedicated Customer Support" />
    </section>
  );
}

const s = {
  wrap: {
    position: "relative", zIndex: 5,
    maxWidth: 1440, margin: "0 auto",
    padding: "52px 48px",
    borderTop: `1px solid ${tokens.line}`,
    borderBottom: `1px solid ${tokens.line}`,
    display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 40,
    background: "linear-gradient(180deg,rgba(212,162,76,0.04),transparent)",
  },
  stat: { textAlign: "left", position: "relative" },
  num: {
    fontFamily: "'Fraunces',serif", fontWeight: 700,
    fontSize: "clamp(34px,4vw,54px)", lineHeight: 1,
    background: `linear-gradient(180deg,#faf5ea,${tokens.gold2})`,
    WebkitBackgroundClip: "text", backgroundClip: "text",
    color: "transparent", letterSpacing: "-0.02em",
  },
  label: { marginTop: 12, fontSize: 13.5, color: tokens.muted, letterSpacing: "0.01em", lineHeight: 1.4 },
};
