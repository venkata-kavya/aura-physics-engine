import React from "react";
import {
  Github,
  Slack,
  Figma,
  Globe,
  Code,
  Cpu,
  Zap,
  Database,
} from "lucide-react";

const Stack = () => {
  const masterGradientText =
    "text-transparent bg-clip-text bg-gradient-to-r from-[#F472B6] via-[#A78BFA] to-[#22D3EE] animate-gradient-text";
  const primaryPurple = "#8B5CF6";

  const tools = [
    {
      icon: <Github size={32} />,
      name: "Github",
      desc: "Sync PRs",
      color: "#ffffff",
    },
    {
      icon: <Slack size={32} />,
      name: "Slack",
      desc: "Alerts",
      color: "#E01E5A",
    },
    {
      icon: <Figma size={32} />,
      name: "Figma",
      desc: "Design",
      color: "#F24E1E",
    },
    {
      icon: <Globe size={32} />,
      name: "Vercel",
      desc: "Deploys",
      color: "#ffffff",
    },
    {
      icon: <Code size={32} />,
      name: "VS Code",
      desc: "Extension",
      color: "#007ACC",
    },
    {
      icon: <Cpu size={32} />,
      name: "OpenAI",
      desc: "Intelligence",
      color: "#10A37F",
    },
    {
      icon: <Zap size={32} />,
      name: "Zapier",
      desc: "Automate",
      color: "#FF4F00",
    },
    {
      icon: <Database size={32} />,
      name: "Linear",
      desc: "Sync",
      color: "#5E6AD2",
    },
  ];

  return (
    <section id="stack" className="py-32 relative overflow-hidden bg-[#020203]">
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-gradient-to-r from-[${primaryPurple}]/10 via-[#7C3AED]/10 to-[#C4B5FD]/10 rounded-[100%] filter blur-[120px] animate-blob`}
      ></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div
            className={`inline-block px-4 py-1.5 rounded-full border border-[${primaryPurple}]/30 bg-[${primaryPurple}]/10 text-[${primaryPurple}] text-xs font-medium mb-6 tracking-widest uppercase shadow-[0_0_20px_-5px_rgba(139,92,246,0.4)]`}
          >
            The Ecosystem
          </div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">
            Plays nice with{" "}
            <span className={masterGradientText}>Everyone.</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="sharp-beam-container p-8 flex flex-col items-center justify-center text-center gap-5 cursor-pointer group bg-[#0A0B10]"
              style={{ "--beam-color": tool.color }}
            >
              <div className="text-slate-400 group-hover:text-[var(--beam-color)] transition-all duration-300 transform group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_var(--beam-color)]">
                {tool.icon}
              </div>
              <div>
                <h4 className="font-medium text-lg text-slate-200 group-hover:text-white transition-colors">
                  {tool.name}
                </h4>
                <p className="text-xs text-slate-500 mt-1 font-light group-hover:text-slate-400 tracking-wide">
                  {tool.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Stack;
