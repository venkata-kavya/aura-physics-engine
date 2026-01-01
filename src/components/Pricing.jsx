import React from "react";
import { Check } from "lucide-react";

const Pricing = () => {
  const masterGradientText =
    "text-transparent bg-clip-text bg-gradient-to-r from-[#F472B6] via-[#A78BFA] to-[#22D3EE] animate-gradient-text";
  const primaryPurple = "#8B5CF6";

  return (
    <section id="pricing" className="py-32 bg-[#020203] relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-medium mb-6 tracking-tight">
            Simple <span className={masterGradientText}>Pricing.</span>
          </h2>
          <p className="text-slate-400 font-light">
            Start for free, scale when you're ready.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Starter */}
          <div
            className="neon-border-card p-10 flex flex-col"
            style={{
              "--hover-gradient":
                "linear-gradient(180deg, #fff, rgba(255,255,255,0))",
              "--hover-color": "#fff",
            }}
          >
            <h3 className="text-lg font-medium mb-2 text-slate-400">Starter</h3>
            <div className="text-4xl font-medium mb-4 text-white">$0</div>
            <p className="text-slate-500 text-sm mb-8 font-light">
              Perfect for side projects.
            </p>
            <button className="w-full py-3 rounded-xl border border-white/20 text-sm font-medium hover:bg-white hover:text-black transition-all mt-auto btn-shimmer">
              START FREE
            </button>
          </div>
          {/* Pro Team */}
          <div className="relative group md:-translate-y-6 md:scale-105 z-20 rounded-[26px] p-[2px] bg-gradient-to-r from-[#F472B6] via-[#8B5CF6] to-[#22D3EE]">
            <div className="relative bg-[#0A0B10] h-full w-full rounded-[24px] p-10 flex flex-col overflow-hidden transition-all duration-300">
              <div
                className={`absolute top-5 right-5 px-3 py-1 bg-[${primaryPurple}] rounded-full text-[10px] font-medium uppercase tracking-widest shadow-[0_0_20px_rgba(139,92,246,0.5)]`}
              >
                Popular
              </div>
              <h3 className="text-lg font-medium mb-2 text-white">Pro Team</h3>
              <div className="text-5xl font-medium mb-2 text-white tracking-tight">
                $29
                <span className="text-lg text-slate-500 font-light">/mo</span>
              </div>
              <p className="text-slate-400 text-sm mb-8 font-light">
                For high-velocity software teams.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Unlimited Projects",
                  "Guest Access",
                  "Admin Roles",
                  "Timeline View",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-slate-200 font-light"
                  >
                    <div className={`p-0.5 rounded-full bg-[${primaryPurple}]`}>
                      <Check size={10} className="text-white" />
                    </div>{" "}
                    {item}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-4 rounded-xl bg-gradient-to-r from-[${primaryPurple}] to-[#7C3AED] text-sm font-medium shadow-[0_0_30px_-5px_rgba(139,92,246,0.5)] hover:shadow-[0_0_50px_-5px_rgba(139,92,246,0.7)] transition-all hover:scale-[1.02] mt-auto btn-shimmer text-white`}
              >
                GET STARTED
              </button>
            </div>
          </div>
          {/* Business */}
          <div
            className="neon-border-card p-10 flex flex-col"
            style={{
              "--hover-gradient":
                "linear-gradient(180deg, #8B5CF6, rgba(139,92,246,0))",
              "--hover-color": "#8B5CF6",
            }}
          >
            <h3 className="text-lg font-medium mb-2 text-slate-400">
              Business
            </h3>
            <div className="text-4xl font-medium mb-4 text-white">$99</div>
            <p className="text-slate-500 text-sm mb-8 font-light">
              Security & control for scale.
            </p>
            <button className="w-full py-3 rounded-xl border border-white/20 text-sm font-medium hover:bg-white hover:text-black transition-all mt-auto btn-shimmer">
              CONTACT SALES
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Pricing;
