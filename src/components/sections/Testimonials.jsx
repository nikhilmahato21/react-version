import { motion } from "framer-motion";
import { tokens, EASE, glass } from "../../constants/tokens";
import SectionHeader from "../ui/SectionHeader";

const REVIEWS = [
  {
    name: "Amit Kumar",
    city: "Delhi",
    loan: "Personal Loan",
    color: tokens.gold,
    rating: 5,
    quote:
      "The process was incredibly smooth. I applied on a Monday evening and had ₹8 lakhs in my account by Wednesday morning. The team was available throughout to answer my questions.",
  },
  {
    name: "Priya Mehta",
    city: "Mumbai",
    loan: "Home Loan",
    color: tokens.emerald,
    rating: 5,
    quote:
      "We had approached three banks before RaghavLoans. They got us a better interest rate and handled all the paperwork. We finally moved into our dream home last year!",
  },
  {
    name: "Rajesh Nair",
    city: "Bangalore",
    loan: "Business Loan",
    color: tokens.gold2,
    rating: 5,
    quote:
      "As a first-generation entrepreneur, getting a business loan felt impossible. RaghavLoans understood my vision and structured a ₹25L collateral-free loan within a week.",
  },
  {
    name: "Sunita Patel",
    city: "Ahmedabad",
    loan: "Gold Loan",
    color: "#fbbf24",
    rating: 5,
    quote:
      "I needed urgent funds for my daughter's medical treatment. The gold loan was sanctioned in under 4 hours. They kept my jewellery safe and the repayment was easy.",
  },
  {
    name: "Vikram Singh",
    city: "Jaipur",
    loan: "Vehicle Loan",
    color: "#60a5fa",
    rating: 5,
    quote:
      "100% on-road finance for my new car with a competitive interest rate. The team even coordinated directly with the dealership. Drove home the same day!",
  },
  {
    name: "Deepa Reddy",
    city: "Hyderabad",
    loan: "Education Loan",
    color: "#a78bfa",
    rating: 5,
    quote:
      "My son is now studying in Canada, funded by an education loan from RaghavLoans. They explained every clause patiently and the moratorium terms were very flexible.",
  },
];

function Stars({ count, color }) {
  return (
    <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" width={16} height={16} fill={i < count ? color : "rgba(246,241,231,0.2)"}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ name, color }) {
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2);
  return (
    <div style={{ ...s.avatar, background: `${color}25`, border: `2px solid ${color}50` }}>
      <span style={{ ...s.avatarText, color }}>{initials}</span>
    </div>
  );
}

function TestiCard({ review, index }) {
  return (
    <motion.div
      style={s.card}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: EASE }}
      whileHover={{ y: -6, borderColor: `${review.color}40` }}
    >
      <div style={{ ...s.quote, color: review.color }}>"</div>
      <Stars count={review.rating} color={review.color} />
      <p style={s.text}>{review.quote}</p>
      <div style={s.footer}>
        <Avatar name={review.name} color={review.color} />
        <div>
          <div style={s.name}>{review.name}</div>
          <div style={s.meta}>
            {review.city}
            <span style={{ ...s.loanBadge, color: review.color, borderColor: `${review.color}40` }}>
              {review.loan}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" style={s.wrap}>
      <div style={s.inner}>
        <SectionHeader
          eyebrow="Customer Stories"
          title="Real People, Real Results"
          subtitle="Over 10,000 customers trust RaghavLoans for their financial needs. Here's what some of them have to say."
        />
        <div style={s.grid} className="rl-testi-grid">
          {REVIEWS.map((r, i) => (
            <TestiCard key={r.name} review={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

const s = {
  wrap: { position: "relative", zIndex: 5, padding: "100px 0" },
  inner: { maxWidth: 1440, margin: "0 auto", padding: "0 48px" },
  grid: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 },
  card: {
    padding: 28, borderRadius: 22,
    background: "linear-gradient(160deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))",
    border: `1px solid ${tokens.line}`, backdropFilter: "blur(18px)",
    transition: "transform 0.35s, border-color 0.35s",
    cursor: "default", display: "flex", flexDirection: "column",
  },
  quote: {
    fontFamily: "'Fraunces',serif", fontSize: 64, lineHeight: 0.8,
    marginBottom: 8, opacity: 0.7,
  },
  text: { fontSize: 15, lineHeight: 1.7, color: tokens.muted, flex: 1, marginBottom: 24 },
  footer: { display: "flex", alignItems: "center", gap: 14, marginTop: "auto" },
  avatar: {
    width: 44, height: 44, borderRadius: "50%",
    display: "grid", placeItems: "center", flexShrink: 0,
  },
  avatarText: { fontFamily: "'Fraunces',serif", fontWeight: 700, fontSize: 15 },
  name: { fontSize: 15, fontWeight: 600, color: tokens.cream, marginBottom: 4 },
  meta: { display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: tokens.muted },
  loanBadge: {
    fontSize: 11, fontWeight: 600,
    padding: "2px 8px", borderRadius: 999,
    border: "1px solid",
    fontFamily: "'JetBrains Mono',monospace",
    letterSpacing: "0.04em",
  },
};
