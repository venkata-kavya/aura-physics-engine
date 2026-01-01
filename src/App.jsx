import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Stack from "./components/Stack";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#020203] min-h-screen text-white overflow-x-hidden selection:bg-purple-500 selection:text-white font-sans">
      <div className="bg-noise"></div>
      <Navbar />
      <Hero />
      <Features />
      <Stack />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
