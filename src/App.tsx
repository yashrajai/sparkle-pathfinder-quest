import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import Process from "./components/Process";
import About from "./components/About";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Hero />
        <Solutions />
        <Process />
        <About />
        <CallToAction />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
