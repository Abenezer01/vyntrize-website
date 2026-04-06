'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import {
  ArrowRight, Check, X, Lightbulb, Zap, BarChart3, Heart,
  Users, ShieldCheck, TrendingUp, Clock, Globe, Code, Database, Search, Sparkles,
} from 'lucide-react';

/* ─── Animated counter ─── */
function Counter({ to, suffix = '', prefix = '' }: { to: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const step = 16;
    const increment = to / (duration / step);
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= to) { setVal(to); clearInterval(timer); }
      else setVal(Math.floor(current));
    }, step);
    return () => clearInterval(timer);
  }, [inView, to]);
  return <span ref={ref}>{prefix}{val.toLocaleString()}{suffix}</span>;
}

/* ─── Data ─── */
const stats = [
  { label: 'Businesses empowered', to: 500, suffix: '+', color: 'text-blue-600', context: 'across 12+ industries' },
  { label: 'Tasks automated', to: 1000000, suffix: '+', color: 'text-violet-600', context: 'every month, 24/7' },
  { label: 'Client satisfaction', to: 99, suffix: '%', color: 'text-emerald-600', context: 'avg. across all plans' },
  { label: 'Avg. ROI increase', to: 35, suffix: 'x', prefix: '3.', color: 'text-amber-600', context: 'within first 90 days' },
];

const principles = [
  {
    icon: Lightbulb,
    color: 'bg-blue-50 text-blue-600 border-blue-100',
    tag: '// clarity first',
    title: 'Simplicity over complexity',
    body: 'We strip away the noise. Every solution we build is designed to be understood and used — not just deployed.',
  },
  {
    icon: BarChart3,
    color: 'bg-violet-50 text-violet-600 border-violet-100',
    tag: '// data-driven always',
    title: 'Strategy over guesswork',
    body: 'Every decision is guided by data. We help businesses understand their customers deeply and act with confidence.',
  },
  {
    icon: Zap,
    color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    tag: '// outcomes, not outputs',
    title: 'Results over noise',
    body: 'We measure success by the outcomes our clients achieve — more customers, better retention, smarter operations.',
  },
  {
    icon: Heart,
    color: 'bg-amber-50 text-amber-600 border-amber-100',
    tag: '// SMBs deserve enterprise tools',
    title: 'Built for the underdog',
    body: 'Growth should not be limited by size, resources, or technical knowledge. We level the playing field.',
  },
];

const industries = [
  { icon: Search,   label: 'Healthcare & Dental',    color: 'bg-blue-50 text-blue-600 border-blue-100'    },
  { icon: Database, label: 'Financial Services',      color: 'bg-violet-50 text-violet-600 border-violet-100' },
  { icon: Globe,    label: 'Real Estate',             color: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
  { icon: Code,     label: 'E-commerce & Retail',     color: 'bg-amber-50 text-amber-600 border-amber-100'  },
  { icon: Users,    label: 'Professional Services',   color: 'bg-rose-50 text-rose-600 border-rose-100'    },
  { icon: Sparkles, label: 'Hospitality & Food',      color: 'bg-cyan-50 text-cyan-600 border-cyan-100'    },
];

const milestones = [
  { year: '2022', label: 'Founded', body: 'VyntRise launched with a single mission: give small businesses the tools that enterprise companies take for granted.' },
  { year: '2023', label: '100 clients', body: 'Crossed 100 active clients across healthcare, e-commerce, and professional services. First AI agent deployed.' },
  { year: '2024', label: '1M+ tasks', body: 'Autonomous agents crossed 1 million completed tasks. Expanded to data architecture and custom software services.' },
  { year: '2025', label: 'Enterprise tier', body: 'Launched Enterprise plan with on-premise deployment, custom SLAs, and dedicated account management.' },
  { year: '2026', label: 'Today', body: '500+ businesses. 5 service lines. Still the same mission — help every business rise.' },
];

const comparison = [
  { label: 'Results in < 30 days',       us: true,  them: false },
  { label: 'Outcome-based pricing',       us: true,  them: false },
  { label: 'Explainable AI systems',      us: true,  them: false },
  { label: 'Dedicated success manager',   us: true,  them: false },
  { label: 'Built for small businesses',  us: true,  them: false },
  { label: 'Lock-in annual contracts',    us: false, them: true  },
  { label: 'Enterprise-only pricing',     us: false, them: true  },
];

const vision = [
  'Every business understands its customers deeply',
  'Every decision is guided by clear data',
  'Every entrepreneur has access to powerful growth systems',
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* ── 1. Hero ── */}
      <section className="border-b border-slate-100 bg-slate-50/40 pt-20 pb-14 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left: copy */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="github-badge mb-5">OUR STORY</div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-5 leading-[1.05]">
                Helping businesses{' '}
                <span className="bg-gradient-to-r from-blue-600 via-violet-500 to-blue-500 bg-clip-text text-transparent">
                  rise.
                </span>
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
                VyntRise was built on a simple realization: small businesses are the backbone of the economy, yet most operate without the tools, insights, and systems they need to truly grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white hover:bg-slate-700 transition-colors"
                >
                  Work with us <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  See our services
                </Link>
              </div>
            </motion.div>

            {/* Right: stat panel */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 gap-3"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.2 + i * 0.08 }}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">{s.label}</p>
                  <p className={`text-3xl font-extrabold ${s.color}`}>
                    <Counter to={s.to} suffix={s.suffix} prefix={s.prefix} />
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">{s.context}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. Origin story ── */}
      <section className="px-4 md:px-6 py-20 border-b border-slate-100">
        <div className="container mx-auto max-w-4xl">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">How it started</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
            We saw the gap. We set out to close it.
          </h2>
          <div className="space-y-5 text-slate-600 leading-relaxed">
            <p>
              Behind every local shop, service provider, or startup is an entrepreneur working tirelessly — often managing everything alone. Despite their effort, many struggle with the same challenges: attracting the right customers, retaining them, and making data-driven decisions.
            </p>
            <p>
              The tools that solve these problems exist. But they were built for enterprises with dedicated IT teams, six-figure budgets, and months to onboard. Small businesses were left with watered-down alternatives that didn&apos;t actually work.
            </p>
            {/* Pull quote — Linear style */}
            <blockquote className="border-l-4 border-blue-500 pl-6 py-1 my-8">
              <p className="text-xl font-bold text-slate-900 leading-snug">
                &ldquo;We don&apos;t just provide tools. We create systems that work together to help businesses operate smarter, not harder.&rdquo;
              </p>
            </blockquote>
            <p>
              Instead of accepting that gap, we built VyntRise to bring clarity, automation, and intelligence into the hands of small business owners — helping them compete at a level once reserved for larger companies.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. Mission + Vision ── */}
      <section className="px-4 md:px-6 py-16 border-b border-slate-100 bg-slate-50/40">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-5">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Our Mission</p>
            <h3 className="text-xl font-extrabold text-slate-900 mb-4 leading-snug">
              Empower small businesses with the technology, insights, and systems they need to unlock their full potential.
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              We believe growth should not be limited by size, resources, or technical knowledge. Every business deserves access to enterprise-grade tools — and the results that come with them.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-sm"
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">Our Vision</p>
            <h3 className="text-xl font-extrabold text-white mb-6 leading-snug">
              A future where small businesses are no longer at a disadvantage.
            </h3>
            <ul className="space-y-3">
              {vision.map((v, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-white" />
                  </span>
                  {v}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── 4. Principles ── */}
      <section className="px-4 md:px-6 py-16 border-b border-slate-100">
        <div className="container mx-auto max-w-6xl">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">How we think</p>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-10">The principles we build on</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {principles.map((p, i) => {
              const PIcon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`h-9 w-9 rounded-lg border flex items-center justify-center ${p.color}`}>
                      <PIcon className="h-4 w-4" />
                    </div>
                    <span className="font-mono text-[10px] text-slate-400">{p.tag}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{p.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{p.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. Timeline ── */}
      <section className="px-4 md:px-6 py-16 border-b border-slate-100 bg-slate-50/40">
        <div className="container mx-auto max-w-6xl">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Our journey</p>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-12">From idea to impact</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[88px] top-0 bottom-0 w-px bg-slate-200 hidden md:block" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex gap-6 items-start"
                >
                  <div className="shrink-0 w-[88px] text-right hidden md:block">
                    <span className={`text-sm font-extrabold font-mono ${m.year === '2026' ? 'text-blue-600' : 'text-slate-400'}`}>
                      {m.year}
                    </span>
                  </div>
                  {/* Dot */}
                  <div className="relative hidden md:flex items-center justify-center shrink-0">
                    <div className={`h-3 w-3 rounded-full border-2 border-white shadow-sm ${m.year === '2026' ? 'bg-blue-600' : 'bg-slate-300'}`} />
                  </div>
                  <div className="flex-1 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="md:hidden text-xs font-bold font-mono text-slate-400">{m.year}</span>
                      <span className="text-sm font-bold text-slate-900">{m.label}</span>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">{m.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Industries ── */}
      <section className="px-4 md:px-6 py-16 border-b border-slate-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Who we serve</p>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-5">Built for builders</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-md">
                VyntRise is designed for the people who show up every day and do the work — entrepreneurs, operators, and owners who want smarter, more efficient growth without the enterprise price tag.
              </p>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                See industry solutions <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {industries.map((ind, i) => {
                const IIcon = ind.icon;
                return (
                  <motion.div
                    key={ind.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.07 }}
                    className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
                  >
                    <div className={`h-8 w-8 rounded-lg border flex items-center justify-center mb-3 ${ind.color}`}>
                      <IIcon className="h-4 w-4" />
                    </div>
                    <p className="text-xs font-semibold text-slate-700 leading-tight">{ind.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Built different ── */}
      <section className="px-4 md:px-6 py-16 border-b border-slate-100 bg-slate-50/40">
        <div className="container mx-auto max-w-4xl">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Built different</p>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-10">VyntRise vs. the typical agency</h2>
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="grid grid-cols-[1fr_130px_130px] border-b border-slate-100 bg-slate-50 px-6 py-3.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">What you get</span>
              <div className="flex items-center justify-center gap-1.5">
                <div className="h-4 w-4 rounded bg-slate-900 flex items-center justify-center">
                  <Zap className="h-2.5 w-2.5 text-white" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-900">VyntRise</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 text-center">Typical Agency</span>
            </div>
            {comparison.map((row, i) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className={`grid grid-cols-[1fr_130px_130px] px-6 py-3.5 items-center border-b border-slate-50 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}`}
              >
                <span className="text-sm text-slate-700">{row.label}</span>
                <div className="flex justify-center">
                  {row.us
                    ? <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500"><Check className="h-3.5 w-3.5 text-white" /></span>
                    : <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100"><X className="h-3.5 w-3.5 text-slate-400" /></span>
                  }
                </div>
                <div className="flex justify-center">
                  {!row.us
                    ? <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100"><Check className="h-3.5 w-3.5 text-emerald-600" /></span>
                    : <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100"><X className="h-3.5 w-3.5 text-slate-400" /></span>
                  }
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CTA ── */}
      <section className="relative overflow-hidden bg-slate-900 px-4 md:px-6 py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-blue-600/15 blur-[80px]" />
          <div className="absolute left-1/4 bottom-0 h-[300px] w-[500px] rounded-full bg-violet-600/10 blur-[80px]" />
        </div>
        <div className="relative container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-8">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            <span className="text-xs font-semibold text-slate-300">14-day free trial · No credit card</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5 tracking-tight">
            Ready to rise?
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Tell us where you are and where you want to go. We&apos;ll map the path and get you there.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-sm font-bold text-white hover:bg-blue-500 transition-colors shadow-xl shadow-blue-900/40"
            >
              Get started free <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Explore services
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
            {['SOC 2 certified', 'GDPR compliant', '99.9% uptime SLA', 'Cancel anytime'].map(t => (
              <div key={t} className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-emerald-500" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
