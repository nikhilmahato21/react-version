import { motion } from "framer-motion";
import { tokens } from "../../constants/tokens";
import FadeIn from "../ui/FadeIn";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Loan Products", href: "#loans" },
  { label: "How It Works", href: "#process" },
  { label: "About Us", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const LOAN_LINKS = [
  "Personal Loan",
  "Home Loan",
  "Business Loan",
  "Vehicle Loan",
  "Gold Loan",
  "Education Loan",
];

const SOCIAL = [
  {
    label: "WhatsApp",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.524 5.847L.057 23.882l6.196-1.625A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.97 0-3.8-.54-5.368-1.476l-.385-.228-3.988 1.046 1.065-3.878-.251-.397A9.776 9.776 0 012.182 12C2.182 6.575 6.575 2.182 12 2.182S21.818 6.575 21.818 12 17.425 21.818 12 21.818z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer style={s.footer}>
      <div style={s.inner}>
        <FadeIn>
          <div style={s.grid} className="rl-footer-grid">
            {/* Brand */}
            <div style={s.brand}>
              <div style={s.logoRow}>
                <div style={s.mark}>R</div>
                <span style={s.logoText}>RaghavLoans</span>
              </div>
              <p style={s.tagline}>
                Fast, Trusted &amp; Hassle-Free Loan Services — built for real people, real dreams.
              </p>
              <div style={s.social}>
                {SOCIAL.map((soc) => (
                  <motion.a
                    key={soc.label}
                    href={soc.href}
                    style={s.socialBtn}
                    title={soc.label}
                    whileHover={{ y: -2, color: tokens.gold, borderColor: "rgba(212,162,76,0.4)" }}
                  >
                    {soc.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <div style={s.colHead}>Quick Links</div>
              <ul style={s.linkList}>
                {QUICK_LINKS.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} style={s.footLink}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Loan Types */}
            <div>
              <div style={s.colHead}>Loan Products</div>
              <ul style={s.linkList}>
                {LOAN_LINKS.map((l) => (
                  <li key={l}>
                    <a href="#loans" style={s.footLink}>{l}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <div style={s.colHead}>Get in Touch</div>
              <div style={s.contactList}>
                <div style={s.contactItem}>
                  <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke={tokens.gold} strokeWidth="2" strokeLinecap="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.8 19.79 19.79 0 011 1.18 2 2 0 012.98 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 7.91A16 16 0 0014.09 17l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  <span>+91 85500 46128</span>
                </div>
                <div style={s.contactItem}>
                  <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke={tokens.gold} strokeWidth="2" strokeLinecap="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>support@raghavloans.in</span>
                </div>
                <div style={s.contactItem}>
                  <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke={tokens.gold} strokeWidth="2" strokeLinecap="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                  <span style={{ lineHeight: 1.5 }}>Block 12, Financial District,<br />New Delhi — 110001</span>
                </div>
                <div style={s.contactItem}>
                  <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke={tokens.gold} strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>Mon–Sat · 9 AM – 7 PM</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Bottom bar */}
        <div style={s.bottom}>
          <span style={s.copy}>© 2025 RaghavLoans. All rights reserved.</span>
          <div style={s.legal}>
            {["Privacy Policy", "Terms of Service", "Grievance Redressal"].map((l) => (
              <a key={l} href="#" style={s.legalLink}>{l}</a>
            ))}
          </div>
        </div>

        <p style={s.disclaimer}>
          RaghavLoans is a loan consultancy and is not a bank or NBFC. We facilitate loans through our network of RBI-registered lenders.
          Loan approval is subject to the lender's credit assessment and eligibility criteria.
        </p>
      </div>
    </footer>
  );
}

const s = {
  footer: {
    position: "relative", zIndex: 5,
    background: "rgba(5,8,18,0.98)",
    borderTop: "1px solid rgba(246,241,231,0.1)",
    padding: "80px 0 40px",
  },
  inner: { maxWidth: 1440, margin: "0 auto", padding: "0 48px" },
  grid: { display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr", gap: 48, marginBottom: 60 },
  brand: {},
  logoRow: { display: "flex", alignItems: "center", gap: 10, marginBottom: 16 },
  mark: {
    width: 34, height: 34, borderRadius: 9, flexShrink: 0,
    background: `linear-gradient(135deg,${tokens.gold2},${tokens.gold3})`,
    display: "grid", placeItems: "center",
    fontFamily: "'Fraunces',serif", fontWeight: 800, color: tokens.ink, fontSize: 20,
    boxShadow: "0 6px 20px rgba(212,162,76,0.35)",
  },
  logoText: { fontFamily: "'Fraunces',serif", fontWeight: 600, fontSize: 20, color: tokens.cream },
  tagline: { fontSize: 14, lineHeight: 1.7, color: tokens.muted, marginBottom: 24, maxWidth: 300 },
  social: { display: "flex", gap: 10 },
  socialBtn: {
    width: 38, height: 38, borderRadius: 10,
    border: `1px solid ${tokens.line}`, display: "grid", placeItems: "center",
    color: tokens.muted, cursor: "pointer", textDecoration: "none",
    transition: "all 0.25s",
  },
  colHead: {
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase",
    color: tokens.gold, marginBottom: 20,
  },
  linkList: { listStyle: "none", display: "flex", flexDirection: "column", gap: 12 },
  footLink: { fontSize: 14, color: tokens.muted, textDecoration: "none", display: "block" },
  contactList: { display: "flex", flexDirection: "column", gap: 16 },
  contactItem: { display: "flex", alignItems: "flex-start", gap: 12, fontSize: 14, color: tokens.muted },
  bottom: {
    display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16,
    paddingTop: 28, borderTop: `1px solid ${tokens.line}`, marginBottom: 20,
  },
  copy: { fontSize: 13, color: "rgba(246,241,231,0.4)" },
  legal: { display: "flex", gap: 24 },
  legalLink: { fontSize: 13, color: "rgba(246,241,231,0.4)", textDecoration: "none" },
  disclaimer: {
    fontSize: 12, lineHeight: 1.7, color: "rgba(246,241,231,0.28)",
    maxWidth: 800,
  },
};
