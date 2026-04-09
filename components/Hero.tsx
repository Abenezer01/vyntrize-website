'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Bot, Star, TrendingUp, Zap, CheckCircle2, Activity, ShieldCheck } from 'lucide-react';

/* ─── Task feed data ─── */
const TASKS = [
  { id: 'a', agent: 'Lead Agent',     action: 'Qualified inbound lead — Martinez Dental',  color: 'blue'    },
  { id: 'b', agent: 'Review Agent',   action: 'Responded to 3-star review on Google',       color: 'violet'  },
  { id: 'c', agent: 'SEO Agent',      action: 'Updated 12 local citations',                 color: 'emerald' },
  { id: 'd', agent: 'Data Agent',     action: 'Synced CRM → analytics pipeline',            color: 'amber'   },
  { id: 'e', agent: 'Lead Agent',     action: 'Sent follow-up to 8 leads',                  color: 'blue'    },
  { id: 'f', agent: 'Workflow Agent', action: 'Triggered onboarding sequence',              color: 'violet'  },
  { id: 'g', agent: 'SEO Agent',      action: 'Published 2 AI-generated location pages',    color: 'emerald' },
  { id: 'h', agent: 'Data Agent',     action: 'Cleaned 1,204 duplicate records',            color: 'amber'   },
];

const agentDot: Record<string, string> = {
  blue:    'bg-blue-500',
  violet:  'bg-violet-500',
  emerald: 'bg-emerald-500',
  amber:   'bg-amber-500',
};

const agentBadge: Record<string, string> = {
  blue:    'bg-blue-500/15 text-blue-400',
  violet:  'bg-violet-500/15 text-violet-400',
  emerald: 'bg-emerald-500/15 text-emerald-400',
  amber:   'bg-amber-500/15 text-amber-400',
};

/* ─── Smooth count-up (runs once on mount) ─── */
function useCountUp(to: number, from: number, duration = 1600, delay = 800) {
  const [val, setVal] = useState(from);
  useEffect(() => {
    const t = setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(from + (to - from) * ease));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
    return () => clearTimeout(t);
  }, [to, from, duration, delay]);
  return val;
}

export default function Hero() {
  /* Task feed — one new task slides in every 4 s (slow, calm) */
  const [visible, setVisible] = useState(TASKS.slice(0, 4));
  const cursor = useRef(4);

  useEffect(() => {
    const id = setInterval(() => {
      const next = TASKS[cursor.current % TASKS.length];
      cursor.current += 1;
      setVisible(prev => [next, ...prev.slice(0, 3)]);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const repScore  = useCountUp(94, 72, 1600, 900);
  const taskCount = useCountUp(1351, 1284, 1400, 1000);

  return (
    <section className="relative min-h-screen overflow-hidden bg-white dark:bg-[#0d1117] flex items-center">

      {/* ── Background ─────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Hard split */}
        <div className="absolute inset-y-0 right-0 w-[52%] bg-slate-950 dark:bg-[#0a0e14]" />
        {/* Soft blend seam */}
        <div className="absolute inset-y-0 left-[44%] w-[16%] bg-gradient-to-r from-white dark:from-[#0d1117] to-slate-950 dark:to-[#0a0e14]" />
        {/* Dot grid — left only */}
        <div className="absolute inset-y-0 left-0 w-[48%] bg-[radial-gradient(circle,_#94a3b815_1px,_transparent_1px)] dark:bg-[radial-gradient(circle,_#ffffff08_1px,_transparent_1px)] bg-[size:24px_24px]" />
        {/* Subtle blue glow — right panel, static */}
        <div className="absolute right-[5%] top-[20%] h-[420px] w-[420px] rounded-full bg-blue-600/8 blur-[100px]" />
        <div className="absolute right-[20%] bottom-[10%] h-[280px] w-[320px] rounded-full bg-violet-600/8 blur-[90px]" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 md:px-8 py-28 grid lg:grid-cols-2 gap-16 items-center">

        {/* ══════════════════════════════════════════
            LEFT — Copy
        ══════════════════════════════════════════ */}
        <div className="flex flex-col items-start">

          {/* Status pill — one ping dot, nothing else moves */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-slate-200 dark:border-[#21262d] bg-white dark:bg-[#161b22] px-4 py-1.5 shadow-sm"
          >
            {/* Single ping — the ONLY blinking element on the page */}
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold text-slate-600 dark:text-[#e6edf3]">3 agents running right now</span>
            <span className="h-3.5 w-px bg-slate-200 dark:bg-[#21262d]" />
            <span className="text-xs font-mono text-slate-400 dark:text-[#8b949e]">{taskCount.toLocaleString()} tasks today</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl lg:text-[4.25rem] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.03] mb-6"
          >
            Your business,{' '}
            <span className="relative whitespace-nowrap">
              <span className="bg-gradient-to-r from-blue-600 via-violet-500 to-blue-500 bg-clip-text text-transparent">
                running itself.
              </span>
              {/* Underline draws in once, then stays — no loop */}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.55, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-1 left-0 right-0 h-[3px] origin-left rounded-full bg-gradient-to-r from-blue-600 to-violet-500"
              />
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-slate-500 dark:text-[#8b949e] leading-relaxed max-w-[440px] mb-10"
          >
            VyntRise deploys autonomous AI agents that handle your reputation, leads, workflows, and data — 24/7, without a single manual step.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-12"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-slate-900 dark:bg-[#4B6CF7] px-7 py-3.5 text-sm font-bold text-white shadow-md hover:bg-slate-700 dark:hover:bg-[#3d5ce0] transition-colors"
            >
              Start free — no card needed
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 px-4 py-3.5 text-sm font-semibold text-slate-500 dark:text-[#8b949e] hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              See how it works <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.46, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-start gap-3 max-w-sm">
              <div className="h-9 w-9 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">SM</div>
              <div>
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-xs text-slate-500 dark:text-[#8b949e] leading-relaxed">
                  &ldquo;250% traffic increase in 3 months. Review rating went from 3.8 to 4.7 stars.&rdquo;
                </p>
                <p className="text-[11px] font-semibold text-slate-700 dark:text-[#e6edf3] mt-1">Sarah M. — Martinez Dental Group</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="flex -space-x-2">
                {['bg-blue-400','bg-violet-400','bg-emerald-400','bg-amber-400','bg-rose-400'].map((c, i) => (
                  <div key={i} className={`h-7 w-7 rounded-full border-2 border-white ${c}`} />
                ))}
              </div>
              <p className="text-xs text-slate-400 dark:text-[#8b949e]">
                Joined by <span className="font-semibold text-slate-700 dark:text-white">500+ businesses</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* ══════════════════════════════════════════
            RIGHT — Agent Console
            Slides in once, then everything inside
            is calm: count-ups settle, feed swaps
            slowly, nothing bobs or pulses.
        ══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:flex flex-col gap-3"
        >
          {/* ── Floating stat chips — entrance only, no loop ── */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="absolute -top-5 right-2 z-10 flex items-center gap-2 rounded-xl border border-white/10 bg-slate-800/90 backdrop-blur-sm px-3.5 py-2 shadow-lg"
          >
            <TrendingUp className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
            <span className="text-xs font-semibold text-white">+1.2★ avg. reputation lift</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.05 }}
            className="absolute -bottom-5 -left-4 z-10 flex items-center gap-2 rounded-xl border border-white/10 bg-slate-800/90 backdrop-blur-sm px-3.5 py-2 shadow-lg"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-blue-400 shrink-0" />
            <span className="text-xs font-semibold text-white">SOC 2 · GDPR · HIPAA</span>
          </motion.div>

          {/* ── Main console card ── */}
          <div className="rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/50 overflow-hidden">

            {/* Title bar */}
            <div className="flex items-center justify-between border-b border-white/8 bg-slate-800/70 px-5 py-3">
              <div className="flex items-center gap-2.5">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                </div>
                <span className="text-[11px] font-mono text-slate-400">VyntRise Agent Console</span>
              </div>
              {/* Single live indicator — same ping as left pill */}
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>
                <span className="text-[10px] font-mono text-emerald-400">LIVE</span>
              </div>
            </div>

            {/* Metrics — count up once, then static */}
            <div className="grid grid-cols-3 divide-x divide-white/8 border-b border-white/8">
              {[
                { label: 'Reputation',   value: repScore.toString(),          unit: '/100', color: 'text-emerald-400', Icon: TrendingUp },
                { label: 'Tasks today',  value: taskCount.toLocaleString(),   unit: '',     color: 'text-blue-400',    Icon: Activity   },
                { label: 'Agents active',value: '3',                          unit: '',     color: 'text-violet-400',  Icon: Bot        },
              ].map(({ label, value, unit, color, Icon }) => (
                <div key={label} className="px-4 py-3.5">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Icon className={`h-3 w-3 ${color}`} />
                    <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500">{label}</span>
                  </div>
                  <div className="flex items-baseline gap-0.5">
                    <span className={`text-xl font-extrabold font-mono ${color}`}>{value}</span>
                    {unit && <span className="text-[10px] text-slate-500">{unit}</span>}
                  </div>
                </div>
              ))}
            </div>

            {/* Live task feed */}
            <div className="px-5 pt-4 pb-3">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-slate-500">Live activity</span>
                <span className="text-[9px] font-mono text-slate-600">updating every few seconds</span>
              </div>

              {/* Fixed-height container so layout never shifts */}
              <div className="flex flex-col gap-2 h-[172px] overflow-hidden">
                <AnimatePresence initial={false} mode="popLayout">
                  {visible.map((task) => (
                    <motion.div
                      key={task.id}
                      layout
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-center gap-3 rounded-lg border border-white/6 bg-white/4 px-3.5 py-2.5 shrink-0"
                    >
                      <div className={`h-1.5 w-1.5 rounded-full shrink-0 ${agentDot[task.color]}`} />
                      <span className={`text-[10px] font-semibold rounded-md px-1.5 py-0.5 shrink-0 ${agentBadge[task.color]}`}>
                        {task.agent}
                      </span>
                      <span className="text-xs text-slate-300 truncate flex-1">{task.action}</span>
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Reputation bar — animates once, stays */}
            <div className="border-t border-white/8 px-5 py-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500">Reputation score</span>
                <span className="text-xs font-bold font-mono text-emerald-400">{repScore} / 100</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-white/8 overflow-hidden">
                <motion.div
                  initial={{ width: '72%' }}
                  animate={{ width: `${repScore}%` }}
                  transition={{ duration: 1.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-emerald-400"
                />
              </div>
              <p className="text-[10px] text-slate-600 mt-1.5">↑ from 72 when you joined</p>
            </div>
          </div>

          {/* Stat pills — entrance only */}
          <div className="grid grid-cols-3 gap-2.5">
            {[
              { value: '20+ hrs', label: 'saved / week',   color: 'text-blue-400'   },
              { value: '< 30d',   label: 'first results',  color: 'text-emerald-400'},
              { value: '3.5x',    label: 'avg. ROI',       color: 'text-violet-400' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.5 + i * 0.07 }}
                className="rounded-xl border border-white/8 bg-slate-900 px-4 py-3 text-center"
              >
                <p className={`text-base font-extrabold font-mono ${s.color}`}>{s.value}</p>
                <p className="text-[10px] text-slate-500 mt-0.5">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
