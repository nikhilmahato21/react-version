import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { tokens, EASE } from "../../constants/tokens";

const NAV_LINKS = [
  { label: "Loans", href: "#loans" },
  { label: "How It Works", href: "#process" },
  { label: "DSA Partner Registration", href: "#dsa-partner" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <motion.nav
      className="rl-navbar"
      style={{
        ...s.nav,
        background: scrolled || menuOpen ? "rgba(10,15,30,0.88)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(22px)" : "blur(10px)",
        borderBottomColor: scrolled || menuOpen ? tokens.line : "transparent",
        boxShadow: scrolled || menuOpen ? "0 4px 32px rgba(0,0,0,0.35)" : "none",
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE }}
    >
      <a href="#" style={s.logoLink}>
        <div style={s.mark}>R</div>
        <span>RaghavLoans</span>
      </a>

      <div style={s.links} className="rl-nav-links">
        {NAV_LINKS.map((l) => (
          <a key={l.label} href={l.href} style={s.link}>{l.label}</a>
        ))}
      </div>

      <motion.a
        href="#apply"
        style={s.cta}
        className="rl-nav-cta"
        whileHover={{ y: -1, boxShadow: "0 8px 22px rgba(246,241,231,0.22)" }}
        whileTap={{ scale: 0.97 }}
      >
        Apply Now →
      </motion.a>

      <button
        type="button"
        className="rl-menu-button"
        style={s.menuButton}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span style={{ ...s.menuLine, transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none" }} />
        <span style={{ ...s.menuLine, opacity: menuOpen ? 0 : 1 }} />
        <span style={{ ...s.menuLine, transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none" }} />
      </button>

      {menuOpen && (
        <motion.div
          className="rl-mobile-menu"
          style={s.mobileMenu}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, ease: EASE }}
        >
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} style={s.mobileLink} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}

const s = {
  nav: {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "18px 48px",
    borderBottom: "1px solid transparent",
    transition: "background 0.4s, border-color 0.4s, box-shadow 0.4s",
  },
  logoLink: {
    display: "flex", alignItems: "center", gap: 10, textDecoration: "none",
    fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: 20,
    color: tokens.cream, letterSpacing: "-0.01em",
  },
  mark: {
    width: 32, height: 32, borderRadius: 8, flexShrink: 0,
    background: `linear-gradient(135deg,${tokens.gold2},${tokens.gold3})`,
    display: "grid", placeItems: "center",
    fontFamily: "'Fraunces', serif", fontWeight: 800,
    color: tokens.ink, fontSize: 18,
    boxShadow: "0 6px 20px rgba(212,162,76,0.35)",
  },
  links: { display: "flex", gap: 34, fontSize: 14, color: tokens.muted },
  link: { color: "inherit", textDecoration: "none" },
  cta: {
    padding: "10px 22px", borderRadius: 999,
    background: tokens.cream, color: tokens.ink,
    fontWeight: 600, fontSize: 14, cursor: "pointer",
    fontFamily: "'Inter Tight', sans-serif",
    textDecoration: "none", display: "inline-block",
    border: "none",
  },
  menuButton: {
    width: 42, height: 42, borderRadius: 10,
    border: `1px solid ${tokens.line}`,
    background: "rgba(246,241,231,0.06)",
    color: tokens.cream,
    cursor: "pointer",
    display: "none",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 4,
    padding: 0,
  },
  menuLine: {
    width: 18, height: 2,
    background: tokens.cream,
    borderRadius: 2,
    display: "block",
    transition: "transform 0.22s, opacity 0.22s",
  },
  mobileMenu: {
    position: "absolute",
    top: "calc(100% + 10px)",
    left: 18,
    right: 18,
    display: "grid",
    gap: 4,
    padding: 10,
    border: `1px solid ${tokens.line}`,
    borderRadius: 12,
    background: "rgba(10,15,30,0.96)",
    backdropFilter: "blur(22px)",
    boxShadow: "0 20px 50px rgba(0,0,0,0.38)",
  },
  mobileLink: {
    color: tokens.cream,
    textDecoration: "none",
    fontSize: 15,
    fontWeight: 600,
    padding: "13px 12px",
    borderRadius: 8,
  },
};
