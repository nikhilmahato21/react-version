import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tokens, EASE } from "../../constants/tokens";
import SectionHeader from "../ui/SectionHeader";

const FAQS = [
  {
    q: "What documents are required to apply for a loan?",
    a: "For most loans, you'll need a valid government-issued ID (Aadhaar/PAN), address proof, last 3 months' bank statements, and latest salary slips or ITR filings. Specific requirements vary by loan type — our advisor will guide you through the exact checklist.",
  },
  {
    q: "How long does the loan approval process take?",
    a: "Most loan approvals happen within 24–48 working hours once all documents are submitted. In many cases, especially personal and gold loans, disbursement can happen on the same day as approval.",
  },
  {
    q: "What is the minimum CIBIL score required?",
    a: "A CIBIL score of 700+ is generally preferred for personal and business loans. However, we have special programs for applicants with lower scores or a limited credit history. We assess each application holistically — speak to our team to understand your options.",
  },
  {
    q: "Is there a prepayment or foreclosure penalty?",
    a: "Prepayment policies depend on the lender and loan type. Many of our partner NBFCs allow prepayment with minimal or zero charges after a specified lock-in period. We disclose all applicable charges upfront — no surprises.",
  },
  {
    q: "Can I apply for a loan if I'm self-employed?",
    a: "Absolutely. We have dedicated loan products for self-employed professionals and business owners. You'll typically need your last 2 years' ITR, business registration documents, and bank statements. Our team specialises in structuring applications for non-salaried applicants.",
  },
  {
    q: "Are there any processing fees or hidden charges?",
    a: "Processing fees range from 0.5% to 2% of the loan amount depending on the lender and loan type — and we always disclose them before you sign anything. There are no hidden charges or referral kickbacks. What you see in the sanction letter is exactly what you pay.",
  },
  {
    q: "Can I transfer my existing loan to RaghavLoans?",
    a: "Yes! If you're currently paying a high interest rate on another loan, we can help you do a balance transfer to one of our partner lenders at a lower rate. We handle the paperwork end-to-end and can often reduce your EMI significantly.",
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="rl-faq-item" style={s.item}>
      <button style={s.trigger} onClick={onToggle}>
        <span style={s.question}>{item.q}</span>
        <motion.span
          style={s.icon}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p style={s.answer}>{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" style={s.wrap}>
      <div style={s.inner}>
        <SectionHeader
          eyebrow="Got Questions?"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our loans and the application process."
        />
        <div style={s.list}>
          {FAQS.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const s = {
  wrap: { position: "relative", zIndex: 5, padding: "100px 0", background: "rgba(17,26,51,0.4)" },
  inner: { maxWidth: 860, margin: "0 auto", padding: "0 48px" },
  list: {},
  item: { padding: "0" },
  trigger: {
    width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-start",
    gap: 20, padding: "24px 0", background: "none", border: "none", cursor: "pointer",
    textAlign: "left", fontFamily: "inherit",
  },
  question: { fontSize: 16, fontWeight: 500, color: tokens.cream, lineHeight: 1.5, flex: 1 },
  icon: {
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: 22, color: tokens.gold, flexShrink: 0,
    display: "inline-block", lineHeight: 1,
  },
  answer: { fontSize: 15, lineHeight: 1.75, color: tokens.muted, paddingBottom: 24, paddingRight: 36 },
};
