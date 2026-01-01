import React from "react";
import {
  ArrowRight,
  Play,
  Layout,
  Search,
  Bell,
  CreditCard,
  Figma,
  Globe,
  Smartphone,
  Settings,
  FileText,
  Calendar,
  MoreHorizontal,
  Check,
  MessageSquare,
} from "lucide-react";

const Hero = () => {
  const masterGradientText =
    "text-transparent bg-clip-text bg-gradient-to-r from-[#F472B6] via-[#A78BFA] to-[#22D3EE] animate-gradient-text";
  const primaryPurple = "#8B5CF6";

  return (
    <header className="relative pt-40 pb-32 lg:pt-52 lg:pb-40 overflow-hidden bg-[#020203]">
      {/* Background Blobs */}
      <div
        className={`absolute w-[600px] h-[600px] bg-[#8B5CF6] top-[-10%] right-[-5%] rounded-full opacity-20 filter blur-[120px] animate-blob`}
      ></div>
      <div
        className={`absolute w-[500px] h-[500px] bg-[#A78BFA] bottom-[10%] left-[-10%] rounded-full opacity-15 filter blur-[120px] animate-blob animation-delay-2000`}
      ></div>
      <div
        className={`absolute w-[400px] h-[400px] bg-[#C4B5FD] bottom-[-10%] right-[20%] rounded-full opacity-15 filter blur-[100px] animate-blob animation-delay-4000`}
      ></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md text-[10px] font-medium tracking-widest uppercase text-purple-400 mb-2 shadow-[0_0_20px_-5px_rgba(139,92,246,0.4)]">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>{" "}
            Aura OS 2.0
          </div>
          <h1 className="text-6xl lg:text-8xl font-medium tracking-tighter leading-[0.95]">
            Orchestrate <br />{" "}
            <span className={masterGradientText}>The Chaos.</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
            The operating system for high-velocity teams. Blend linear
            discipline with creative freedom in a workspace that actually glows.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start pt-6">
            <button
              className={`btn-shimmer bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] text-white px-8 py-4 rounded-full font-medium text-sm flex items-center gap-2 group shadow-[0_0_20px_-5px_rgba(139,92,246,0.4)]`}
            >
              START FREE TRIAL{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-shimmer flex items-center gap-3 px-8 py-4 rounded-full font-medium text-sm text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all backdrop-blur-sm">
              <Play className="w-3 h-3 fill-current" /> SHOWREEL
            </button>
          </div>
          {/* Social Proof */}
          <div className="pt-8 flex items-center gap-4 justify-center lg:justify-start text-xs text-slate-500 font-mono">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/100?u=user${i + 50}`}
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-[#020203] object-cover"
                />
              ))}
            </div>
            <div>Trusted by 4,000+ teams</div>
          </div>
        </div>

        {/* 3D App Mockup */}
        <div className="relative hidden lg:block h-[600px] w-full perspective-[2000px]">
          <div
            className={`absolute top-5 right-0 w-full h-full bg-[#0A0B10]/95 backdrop-blur-xl rounded-[24px] border border-white/10 overflow-hidden shadow-[0_0_80px_-20px_rgba(139,92,246,0.2)] transform rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-y-[-5deg] hover:rotate-x-[2deg] transition-transform duration-700 ease-out flex flex-col group`}
          >
            {/* Mockup Header */}
            <div className="h-12 border-b border-white/5 flex items-center justify-between px-4 bg-[#0F1116]">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                </div>
                <div className="h-4 w-[1px] bg-white/10 mx-2"></div>
                <div className="flex items-center gap-2 text-slate-400 text-[10px] font-light tracking-tight">
                  <Layout size={12} /> <span>Workspace</span>{" "}
                  <span className="text-slate-600">/</span>{" "}
                  <span className="text-white">Product Launch Q1</span>
                </div>
              </div>
              {/* Search Bar */}
              <div
                className={`flex items-center gap-3 bg-[#050505] px-3 py-1.5 rounded-md border border-white/10 w-64 shadow-inner group-hover:border-[${primaryPurple}]/30 transition-colors`}
              >
                <Search size={10} className="text-slate-500" />
                <div className="text-[9px] text-slate-500 font-light">
                  Search tasks...
                </div>
                <div className="ml-auto text-[8px] text-slate-500 border border-slate-700 px-1 rounded bg-[#1A1D25]">
                  ⌘K
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Bell size={14} className="text-slate-400" />
                  <div
                    className={`absolute top-0 right-0 w-1.5 h-1.5 bg-[${primaryPurple}] rounded-full`}
                  ></div>
                </div>
                <img
                  src="https://i.pravatar.cc/150?u=admin"
                  className={`w-6 h-6 rounded-full border border-white/10 shadow-[0_0_15px_${primaryPurple}] object-cover`}
                  alt="Profile"
                />
              </div>
            </div>

            {/* Mockup Body */}
            <div className="flex-1 flex overflow-hidden">
              {/* Mockup Sidebar */}
              <div className="w-48 border-r border-white/5 flex flex-col bg-[#0A0B10] py-4">
                {/* Simplified Sidebar content for brevity, full logic from original goes here */}
                <div className="px-3 mb-5">
                  <div className="text-[8px] font-normal text-slate-600 uppercase tracking-widest mb-2">
                    Favorites
                  </div>
                  <div className="space-y-0.5">
                    {["Inbox", "My Issues", "Views"].map((item, idx) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 px-2 py-1 text-[10px] text-slate-300 font-light hover:bg-white/5 rounded-md"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${
                            idx === 0 ? "bg-blue-500" : "bg-slate-700"
                          }`}
                        ></div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Mockup Kanban */}
              <div className="flex-1 bg-[#050505] p-5 flex flex-col relative">
                <div className="flex justify-between items-center mb-5">
                  <h2 className="text-sm font-medium text-white">Q1 Roadmap</h2>
                  <div className="flex bg-[#14161F] p-0.5 rounded-md border border-white/5">
                    <div
                      className={`p-1 bg-[${primaryPurple}] rounded text-white`}
                    >
                      <Layout size={10} fill="currentColor" />
                    </div>
                    <div className="p-1 text-slate-500">
                      <FileText size={10} />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 h-full">
                  {/* Active Column Example */}
                  <div className="flex flex-col gap-2.5">
                    <div className="flex items-center justify-between text-[8px] font-normal text-blue-400 uppercase tracking-wider mb-1">
                      <span>In Progress</span>
                    </div>
                    <div className="p-3 bg-[#0B0D14] rounded-lg border border-blue-500/30 shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)] relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                      <div className="flex justify-between items-start mb-1.5">
                        <span className="text-[7px] px-1 py-px rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium">
                          FRONTEND
                        </span>
                        <MoreHorizontal size={10} className="text-slate-600" />
                      </div>
                      <div className="text-[10px] font-normal text-white mb-2 leading-snug">
                        Implement new glow animations
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-1.5 text-[8px] text-slate-400">
                          <Check size={8} className="text-blue-400" />
                          <span>4/5 subtasks</span>
                        </div>
                        <div className="w-full h-0.5 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full w-[80%] bg-blue-500"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Hero;
