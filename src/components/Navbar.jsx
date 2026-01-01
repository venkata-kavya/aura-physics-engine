import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const primaryPurple = "#8B5CF6";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
          isScrolled
            ? "bg-[#020203]/80 backdrop-blur-xl border-white/5 py-4"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
          {/* Logo */}
          <div
            className="flex items-center gap-2 font-medium text-lg tracking-tight text-white cursor-pointer group z-50"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div
              className={`w-8 h-8 bg-[${primaryPurple}] rounded-lg rotate-45 flex items-center justify-center shadow-[0_0_25px_rgba(139,92,246,0.5)] group-hover:rotate-90 transition-transform duration-500`}
            >
              <div className="w-1.5 h-1.5 bg-white rounded-full -rotate-45 group-hover:-rotate-90 transition-transform duration-500"></div>
            </div>
            <span className="text-xl tracking-tighter">Aura.</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 text-sm font-normal text-slate-400">
            {["Product", "Stack", "Pricing"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              className={`text-sm font-normal text-slate-300 hover:text-[${primaryPurple}] transition-colors`}
            >
              Log in
            </button>
            <button
              className={`btn-shimmer bg-gradient-to-r from-[${primaryPurple}] to-[#7C3AED] text-white px-6 py-2.5 rounded-full text-sm font-medium tracking-wide shadow-[0_0_15px_rgba(139,92,246,0.3)]`}
            >
              GET ACCESS
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden text-white z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#020203] flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center gap-6 text-xl font-medium text-slate-300">
          {["Product", "Stack", "Pricing"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="hover:text-white transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="h-px w-16 bg-white/10 my-2"></div>
        <div className="flex flex-col items-center gap-4">
          <button className="text-lg text-slate-300 hover:text-white transition-colors">
            Log in
          </button>
          <button
            className={`btn-shimmer bg-gradient-to-r from-[${primaryPurple}] to-[#7C3AED] text-white px-8 py-3 rounded-full text-lg font-medium shadow-[0_0_15px_rgba(139,92,246,0.3)]`}
          >
            GET ACCESS
          </button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
