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
        <About />
        <Testimonials />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </div>
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
};
