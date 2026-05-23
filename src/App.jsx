import { motion } from "framer-motion";
import { globalCss } from "./constants/tokens";

import Background from "./components/ui/Background";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import LoanTypes from "./components/sections/LoanTypes";
import Process from "./components/sections/Process";
import About from "./components/sections/About";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";
import CTABanner from "./components/sections/CTABanner";
import DSAPartner from "./components/sections/DSAPartner";

export default function App() {
  return (
    <div style={s.root}>
      <style>{globalCss}</style>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <LoanTypes />
        {/* <Process /> */}
        <DSAPartner />
        <About />
        <Testimonials />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
      <StickyCallButton />
    </div>
  );
}

function StickyCallButton() {
  return (
    <motion.a
      href="tel:+918550046128"
      style={s.stickyCall}
      aria-label="Call RaghavLoans at 8550046128"
      title="Call 8550046128"
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.4 }}
      whileHover={{ y: -3, boxShadow: "0 18px 44px rgba(43,191,124,0.5)" }}
      whileTap={{ scale: 0.95 }}
    >
      <svg viewBox="0 0 24 24" width={26} height={26} fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.62a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.46-1.15a2 2 0 0 1 2.11-.45c.84.3 1.72.51 2.62.63A2 2 0 0 1 22 16.92z" />
      </svg>
    </motion.a>
  );
}

const s = {
  root: {
    background: "#0a0f1e",
    color: "#f6f1e7",
    fontFamily: "'Inter Tight', -apple-system, sans-serif",
    minHeight: "100vh",
    overflowX: "hidden",
    WebkitFontSmoothing: "antialiased",
    position: "relative",
  },
  stickyCall: {
    position: "fixed",
    right: 24,
    bottom: 24,
    zIndex: 120,
    width: 62,
    height: 62,
    borderRadius: "50%",
    display: "grid",
    placeItems: "center",
    color: "#0a0f1e",
    background: "linear-gradient(135deg,#34d399,#2bbf7c)",
    border: "1px solid rgba(246,241,231,0.35)",
    boxShadow: "0 14px 34px rgba(43,191,124,0.38)",
    textDecoration: "none",
  },
};
