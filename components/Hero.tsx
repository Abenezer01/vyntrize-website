'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Globe, Cpu, Activity } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col lg:flex-row overflow-hidden bg-[#f5f5f4]">
      {/* Left Pane: Editorial Content */}
      <div className="flex-1 flex flex-col justify-center p-8 lg:p-24 relative z-10 border-r border-slate-200">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px w-12 bg-slate-900" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-slate-400">VyntRise AI Platform // v3.1</span>
          </div>

          <h1 className="text-[14vw] lg:text-[120px] leading-[0.82] tracking-[-0.05em] font-black text-slate-900 mb-12 uppercase">
            SCALE <br />
            <span className="font-serif italic font-light text-blue-600 lowercase tracking-normal">smarter</span> <br />
            BEYOND.
          </h1>

          <p className="text-xl text-slate-500 max-w-md leading-relaxed mb-12 font-medium">
            The next generation of business intelligence. Automate, optimize, and scale with precision-engineered AI solutions.
          </p>

          <div className="flex items-center gap-12">
            <Link 
              href="/contact" 
              className="group relative flex items-center justify-center w-32 h-32 rounded-full border border-slate-900 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-slate-900 hover:text-white transition-all duration-700 ease-[0.16, 1, 0.3, 1]"
            >
              <span className="relative z-10">Start</span>
              <ArrowRight className="absolute right-[-16px] h-5 w-5 text-slate-900 group-hover:translate-x-4 transition-transform duration-700" />
            </Link>
            
            <div className="hidden md:block">
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-300 mb-4">Network Status</p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-[#f5f5f4] bg-slate-200" />
                  ))}
                </div>
                <span className="text-[10px] font-bold text-slate-900">500+ NODES ACTIVE</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Vertical Rail Text */}
        <div className="absolute left-8 bottom-24 hidden lg:block">
          <p className="writing-mode-vertical rotate-180 text-[9px] font-bold uppercase tracking-[0.6em] text-slate-300">
            EST. 2024 — BUILT FOR AUTONOMOUS GROWTH
          </p>
        </div>
      </div>

      {/* Right Pane: Immersive Visual */}
      <div className="flex-1 bg-slate-900 relative overflow-hidden flex items-center justify-center">
        {/* Abstract Background Grid */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Atmospheric Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,#3b82f615_0%,transparent_70%)] blur-3xl animate-pulse" />

        {/* Central Interactive Core */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          {/* Main Bubble */}
          <motion.div
            animate={{ 
              y: [0, -30, 0],
              rotate: [-4, 4, -4]
            }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="w-80 h-80 rounded-full border border-white/10 backdrop-blur-3xl bg-white/5 flex flex-col items-center justify-center p-12 text-center shadow-[0_0_100px_rgba(59,130,246,0.1)]"
          >
            <div className="relative mb-8">
              <Cpu className="h-16 w-16 text-blue-400" />
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute inset-0 bg-blue-400 rounded-full blur-xl -z-10" 
              />
            </div>
            
            <h3 className="text-white font-black text-2xl mb-2 tracking-tighter uppercase">Neural Core</h3>
            <p className="text-white/30 text-[9px] leading-relaxed uppercase tracking-[0.3em] font-bold">
              Processing 1.2M+ <br /> ops / sec
            </p>
            
            {/* Orbiting Elements */}
            <div className="absolute inset-[-40px] border border-dashed border-white/5 rounded-full animate-[spin_30s_linear_infinite]" />
            <div className="absolute inset-[-80px] border border-white/5 rounded-full animate-[spin_45s_linear_infinite_reverse]" />
          </motion.div>

          {/* Floating Status Cards */}
          <motion.div
            animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -top-12 -right-12 bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl"
          >
            <Activity className="h-5 w-5 text-emerald-400 mb-2" />
            <div className="text-[10px] font-bold text-white uppercase tracking-widest">Uptime</div>
            <div className="text-lg font-black text-white">99.99%</div>
          </motion.div>

          <motion.div
            animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            className="absolute -bottom-12 -left-12 bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl"
          >
            <Globe className="h-5 w-5 text-blue-400 mb-2" />
            <div className="text-[10px] font-bold text-white uppercase tracking-widest">Global Node</div>
            <div className="text-lg font-black text-white">LHR-01</div>
          </motion.div>
        </motion.div>

        {/* Bottom Status Bar */}
        <div className="absolute bottom-12 right-12 flex flex-col items-end space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-[9px] font-bold text-blue-400 uppercase tracking-[0.4em]">Autonomous Mode Active</span>
            <div className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-ping" />
          </div>
          <div className="flex gap-4">
            <p className="text-white/20 font-mono text-[9px] tracking-widest">CPU_LOAD: 12.4%</p>
            <p className="text-white/20 font-mono text-[9px] tracking-widest">MEM_USAGE: 4.2GB</p>
          </div>
        </div>
      </div>
    </section>
  );
}
