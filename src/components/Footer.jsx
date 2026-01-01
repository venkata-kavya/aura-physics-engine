import React from "react";
import { Twitter, Linkedin, Instagram, Github } from "lucide-react";

const Footer = () => {
  const primaryPurple = "#8B5CF6";

  return (
    <footer className="bg-[#020203] text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full text-[25vw] font-bold text-white/[0.02] leading-none pointer-events-none select-none text-center tracking-tighter">
        AURA
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 font-medium text-2xl mb-6">
              <div
                className={`w-6 h-6 bg-[${primaryPurple}] rounded rotate-45 shadow-[0_0_15px_${primaryPurple}]`}
              ></div>{" "}
              Aura.
            </div>
            <p className="text-slate-500 text-sm max-w-sm mb-8 leading-relaxed font-light">
              The operating system for the next generation of companies. <br />{" "}
              Built with precision in Berlin.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          {["Product", "Company"].map((head, idx) => (
            <div key={idx}>
              <h4 className="font-medium text-white mb-6 tracking-wide">
                {head}
              </h4>
              <ul className="space-y-4 text-slate-500 text-sm font-light">
                {["Features", "Integrations", "Changelog", "Docs"].map((i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className={`hover:text-[${primaryPurple}] hover:pl-2 transition-all duration-300 block`}
                    >
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-600 text-xs font-medium uppercase tracking-wider">
          <p>© 2024 Aura Inc.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
