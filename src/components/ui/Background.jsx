import { motion, useScroll, useTransform } from "framer-motion";

export default function Background() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1200], [0, 100]);
  const y2 = useTransform(scrollY, [0, 1200], [0, 180]);
  const y3 = useTransform(scrollY, [0, 1200], [0, 260]);

  return (
    <div style={s.layer}>
      <motion.div style={{ ...s.orb, ...s.gold, y: y1 }} />
      <motion.div style={{ ...s.orb, ...s.emerald, y: y2 }} />
      <motion.div style={{ ...s.orb, ...s.deep, y: y3 }} />
      <div style={s.grid} />
      <div style={s.noise} />
    </div>
  );
}

const s = {
  layer: { position: "fixed", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none" },
  grid: {
    position: "absolute", inset: -2,
    backgroundImage:
      "linear-gradient(rgba(246,241,231,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(246,241,231,0.04) 1px,transparent 1px)",
    backgroundSize: "64px 64px",
    WebkitMaskImage: "radial-gradient(ellipse at 50% 30%,#000 30%,transparent 75%)",
    maskImage: "radial-gradient(ellipse at 50% 30%,#000 30%,transparent 75%)",
  },
  orb: { position: "absolute", borderRadius: "50%", filter: "blur(90px)" },
  gold: {
    width: 520, height: 520,
    background: "radial-gradient(circle,#d4a24c 0%,transparent 60%)",
    top: -120, left: -120, opacity: 0.55,
  },
  emerald: {
    width: 460, height: 460,
    background: "radial-gradient(circle,#2bbf7c 0%,transparent 65%)",
    bottom: -160, right: -100, opacity: 0.55,
  },
  deep: {
    width: 600, height: 600,
    background: "radial-gradient(circle,#3b4d8a 0%,transparent 70%)",
    top: "40%", left: "45%", transform: "translate(-50%,-50%)", opacity: 0.35,
  },
  noise: {
    position: "absolute", inset: 0, opacity: 0.04, mixBlendMode: "overlay",
    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>")`,
  },
};
