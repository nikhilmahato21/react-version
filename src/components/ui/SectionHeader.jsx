import { tokens } from "../../constants/tokens";
import FadeIn from "./FadeIn";

export default function SectionHeader({ eyebrow, title, subtitle, align = "center" }) {
  const isCenter = align === "center";
  return (
    <div style={{ textAlign: align, marginBottom: 64, ...(isCenter && { maxWidth: 680, marginLeft: "auto", marginRight: "auto" }) }}>
      <FadeIn>
        <span style={s.eyebrow}>{eyebrow}</span>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h2 style={s.title}>{title}</h2>
      </FadeIn>
      {subtitle && (
        <FadeIn delay={0.2}>
          <p style={{ ...s.subtitle, ...(isCenter && { margin: "0 auto" }) }}>{subtitle}</p>
        </FadeIn>
      )}
    </div>
  );
}

const s = {
  eyebrow: {
    display: "inline-block",
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
    color: tokens.gold, marginBottom: 16,
  },
  title: {
    fontFamily: "'Fraunces', serif", fontWeight: 700,
    fontSize: "clamp(32px,4.5vw,56px)",
    lineHeight: 1.05, letterSpacing: "-0.03em",
    background: "linear-gradient(180deg,#faf5ea 0%,#f6cc7a 50%,#d4a24c 100%)",
    WebkitBackgroundClip: "text", backgroundClip: "text",
    color: "transparent", margin: "0 0 18px",
  },
  subtitle: {
    fontSize: 17, lineHeight: 1.65,
    color: tokens.muted, maxWidth: 560,
  },
};
