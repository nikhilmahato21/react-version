export const tokens = {
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

export const EASE = [0.2, 0.7, 0.2, 1];

export const glass = {
  background: "linear-gradient(160deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
  border: "1px solid rgba(246,241,231,0.14)",
  backdropFilter: "blur(20px)",
  boxShadow: "0 30px 60px -20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
};

export const globalCss = `
  *, *::before, *::after { box-sizing: border-box; }
  a { transition: color 0.2s, opacity 0.2s; }
  a:hover { opacity: 0.8; }
  .rl-nav-links a:hover { color: #f6f1e7 !important; }
  .rl-mobile-menu a:hover { background: rgba(246,241,231,0.08); opacity: 1; }
  .rl-loan-card:hover { transform: translateY(-6px) !important; border-color: rgba(212,162,76,0.35) !important; }
  .rl-loan-card { transition: transform 0.35s cubic-bezier(0.2,0.7,0.2,1), border-color 0.35s, box-shadow 0.35s; }
  .rl-loan-card:hover .rl-card-cta { background: linear-gradient(135deg,#f6cc7a,#d4a24c) !important; color: #0a0f1e !important; }
  .rl-step:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 40px; right: -50%;
    width: 100%; height: 1px;
    background: linear-gradient(90deg, rgba(212,162,76,0.4), transparent);
  }
  .rl-faq-item { border-bottom: 1px solid rgba(246,241,231,0.12); }
  .rl-faq-item:first-child { border-top: 1px solid rgba(246,241,231,0.12); }
  @media (max-width: 1024px) {
    .rl-hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
    .rl-float-stage { height: 520px !important; }
    .rl-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
    .rl-stats-grid > div::after { display: none !important; }
    .rl-nav-links { display: none !important; }
    .rl-menu-button { display: flex !important; }
    .rl-about-grid { grid-template-columns: 1fr !important; }
    .rl-process-grid { grid-template-columns: repeat(2, 1fr) !important; }
    .rl-step::after { display: none !important; }
    .rl-loans-grid { grid-template-columns: repeat(2, 1fr) !important; }
    .rl-footer-grid { grid-template-columns: repeat(2, 1fr) !important; }
    .rl-testi-grid { grid-template-columns: 1fr !important; }
  }
  @media (max-width: 640px) {
    .rl-navbar { padding: 14px 18px !important; }
    .rl-nav-cta { display: none !important; }
    .rl-float-stage { height: 440px !important; }
    .rl-loans-grid { grid-template-columns: 1fr !important; }
    .rl-process-grid { grid-template-columns: 1fr !important; }
    .rl-footer-grid { grid-template-columns: 1fr !important; }
    .rl-stats-grid { grid-template-columns: 1fr !important; }
  }
`;
