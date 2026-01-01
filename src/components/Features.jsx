import React from "react";
import { Layers, Zap, Shield, ArrowRight } from "lucide-react";

const Features = () => {
  const masterGradientText =
    "text-transparent bg-clip-text bg-gradient-to-r from-[#F472B6] via-[#A78BFA] to-[#22D3EE] animate-gradient-text";
  const primaryPurple = "#8B5CF6";

  const features = [
    {
      icon: <Layers className="text-[#C4B5FD]" size={28} />,
      title: "Deep Focus",
      desc: "Infinite nesting for tasks and docs. Keep context without clutter.",
      gradient: `linear-gradient(180deg, #C4B5FD, rgba(167,139,250,0))`,
      color: "#C4B5FD",
    },
    {
      icon: <Zap className={`text-[${primaryPurple}]`} size={28} />,
      title: "Instant Sync",
      desc: "Built on an edge-network CRDT engine. Sub-30ms global updates.",
      gradient: `linear-gradient(180deg, ${primaryPurple}, rgba(139,92,246,0))`,
      color: primaryPurple,
    },
    {
      icon: <Shield className="text-[#7C3AED]" size={28} />,
      title: "Enterprise Ready",
      desc: "SOC2 Type II, SAML SSO, and Audit Logs out of the box.",
      gradient: `linear-gradient(180deg, #7C3AED, rgba(124,58,237,0))`,
      color: "#7C3AED",
    },
  ];

  return (
    <section id="product" className="py-32 relative bg-[#020203]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 md:text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 text-white tracking-tight">
            Designed for <span className={masterGradientText}>Flow State.</span>
          </h2>
          <p className="text-lg text-slate-400 font-light">
            We stripped back the visual noise. What remains is a
            high-performance engine for your work.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="neon-border-card p-10 flex flex-col h-full group"
              style={{
                "--hover-gradient": feature.gradient,
                "--hover-color": feature.color,
              }}
            >
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/5 shadow-inner group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-medium mb-4 text-white group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors font-light">
                {feature.desc}
              </p>
              <div className="mt-auto pt-8 flex items-center text-sm font-medium text-white/40 group-hover:text-white transition-colors uppercase tracking-widest">
                Explore{" "}
                <ArrowRight
                  size={14}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features;
