import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Hero from "./components/Hero";
import ProblemStatement from "./components/ProblemStatement";
import Solutions from "./components/Solutions";
import PlatformFeatures from "./components/PlatformFeatures";
import BentoFeatures from "./components/BentoFeatures";
import Industries from "./components/Industries";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Hero />
        <ProblemStatement />
        <Solutions />
        <PlatformFeatures />
        <BentoFeatures />
        <Industries />
        <Testimonials />
        <CallToAction />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
