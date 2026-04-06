'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight, Search, Bot, Code, Database,
  ShieldCheck, Star, CheckCircle2, X, Check,
  TrendingUp, Clock, Zap, ChevronRight,
  BarChart3, Users, Globe, Layers,
} from 'lucide-react';
import Hero from '@/components/Hero';

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */

const logos = [
  { name: 'Acme Corp',  abbr: 'AC' },
  { name: 'NovaTech',   abbr: 'NT' },
  { name: 'Meridian',   abbr: 'ME' },
  { name: 'Stackflow',  abbr: 'SF' },
  { name: 'Orbis',      abbr: 'OR' },
  { name: 'Luminary',   abbr: 'LU' },
  { name: 'Crestline',  abbr: 'CR' },
  { name: 'Vantage',    abbr: 'VA' },
  { name: 'Pinnacle',   abbr: 'PI' },
  { name: 'Solaris',    abbr: 'SO' },
];

const steps = [
  {
    n: '01',
    icon: Layers,
    color: 'blue',
    title: 'Connect your stack',
    body: 'Link your CRM, review platforms, and data sources in minutes. 500+ native integrations, zero engineering required.',
  },
  {
    n: '02',
    icon: Bot,
    color: 'violet',
    title: 'Deploy AI agents',
    body: 'Autonomous agents go live across reputation, leads, and workflows — trained on your business data from day one.',
  },
  {
    n: '03',
    icon: TrendingUp,
    color: 'emerald',
    title: 'Watch results compound',
    body: 'Real-time dashboards track every outcome. Most clients see measurable growth within the first 30 days.',
  },
];

const services = [
  {
    id: 'ai-search',
    label: 'AI Search & Reputation',
    icon: Search,
    headline: 'Dominate search. Build unbreakable trust.',
    body: 'AI-powered SEO and centralized reputation management that ensures customers find you and choose you — across every platform.',
    points: ['AI-driven local & organic SEO', 'Review centralization across all platforms', 'Intelligent profile & response management', 'Insight-driven reputation audits'],
    stat: { value: '250%', label: 'avg. traffic increase' },
    href: '/services/ai-search',
    color: 'blue',
    visual: [
      { label: 'Google ranking', before: 18, after: 3, unit: '#' },
      { label: 'Review score',   before: 38, after: 47, unit: '★', scale: 10 },
      { label: 'Monthly visits', before: 420, after: 1470, unit: '' },
    ],
  },
  {
    id: 'automation',
    label: 'Intelligent Automation',
    icon: Bot,
    headline: 'Tools that think, decide, and act.',
    body: 'Autonomous agents and multi-agent workflows that perceive context, make decisions, and execute tasks end-to-end.',
    points: ['Autonomous lead & sales agents', 'Internal knowledge brains (RAG)', 'Multi-agent workflow orchestration', 'Intelligent process automation'],
    stat: { value: '20+ hrs', label: 'saved per team per week' },
    href: '/services/intelligent-automation',
    color: 'violet',
    visual: [
      { label: 'Leads followed up', before: 12, after: 100, unit: '%' },
      { label: 'Hours saved / wk',  before: 0,  after: 22,  unit: 'h' },
      { label: 'Response time',     before: 240, after: 2,  unit: 'min' },
    ],
  },
  {
    id: 'custom-software',
    label: 'Custom Software',
    icon: Code,
    headline: 'Built for your exact workflow.',
    body: 'Bespoke web applications and AI integrations engineered around your unique business logic — not the other way around.',
    points: ['Bespoke AI implementation & integration', 'Niche e-commerce & booking platforms', 'Mini-ERP & operations tools', 'Legacy-to-cloud migration'],
    stat: { value: '95%', label: 'on-time delivery rate' },
    href: '/services/custom-software',
    color: 'emerald',
    visual: [
      { label: 'On-time delivery', before: 60, after: 95, unit: '%' },
      { label: 'Manual steps cut',  before: 0,  after: 80, unit: '%' },
      { label: 'Deploy time',       before: 14, after: 3,  unit: 'd' },
    ],
  },
  {
    id: 'data',
    label: 'Data & Analytics',
    icon: Database,
    headline: 'Chaos to clarity.',
    body: 'Organize, connect, and activate your scattered data — transforming it from a liability into a clear, actionable source of truth.',
    points: ['Spreadsheet-to-database migration', 'Universal data connector & sync', 'Data cleansing & governance', 'Real-time analytics dashboards'],
    stat: { value: '10x', label: 'faster reporting' },
    href: '/services/data-architecture',
    color: 'amber',
    visual: [
      { label: 'Report time',      before: 480, after: 45,  unit: 'min' },
      { label: 'Data sources',     before: 1,   after: 12,  unit: '' },
      { label: 'Accuracy',         before: 71,  after: 99,  unit: '%' },
    ],
  },
];

const testimonials = [
  { quote: '250% traffic increase in 3 months. Review rating: 3.8 → 4.7 stars.', name: 'Sarah Martinez', role: 'Owner, Martinez Dental', initials: 'SM', color: 'bg-blue-500' },
  { quote: 'Saved 20+ hours a week. We focus on strategy — VyntRise handles the rest.', name: 'Michael Chen', role: 'CTO, TechStart Solutions', initials: 'MC', color: 'bg-violet-500' },
  { quote: 'Delivered exactly what we needed, on time and within budget. Exceptional.', name: 'Emily Rodriguez', role: 'CEO, GrowthHub Agency', initials: 'ER', color: 'bg-emerald-500' },
  { quote: 'Unified our data from 6 tools in under 3 weeks. Absolute game changer.', name: 'James Okafor', role: 'COO, Meridian Logistics', initials: 'JO', color: 'bg-amber-500' },
  { quote: 'AI agents handle lead follow-up 24/7. Conversion rate up 40%.', name: 'Priya Nair', role: 'VP Sales, Crestline SaaS', initials: 'PN', color: 'bg-rose-500' },
  { quote: 'Spreadsheets to a real database in 2 weeks. The team was exceptional.', name: 'David Park', role: 'Founder, Stackflow', initials: 'DP', color: 'bg-cyan-500' },
];

const comparisons = [
  { label: 'Results in < 30 days',        us: true  },
  { label: 'Outcome-based pricing',        us: true  },
  { label: 'Explainable AI systems',       us: true  },
  { label: 'Dedicated success manager',    us: true  },
  { label: 'SOC 2 / HIPAA compliant',      us: true  },
  { label: 'Lock-in annual contracts',     us: false },
  { label: 'Black-box automation',         us: false },
  { label: 'Months-long onboarding',       us: false },
];

const colorMap: Record<string, string> = {
  blue:    'bg-blue-50 text-blue-600 border-blue-100',
  violet:  'bg-violet-50 text-violet-600 border-violet-100',
  emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  amber:   'bg-amber-50 text-amber-600 border-amber-100',
};

const tabAccent: Record<string, string> = {
  blue:    'border-blue-600 text-blue-600',
  violet:  'border-violet-600 text-violet-600',
  emerald: 'border-emerald-600 text-emerald-600',
  amber:   'border-amber-600 text-amber-600',
};

const stepColor: Record<string, string> = {
  blue:    'bg-blue-50 text-blue-600 border-blue-100',
  violet:  'bg-violet-50 text-violet-600 border-violet-100',
  emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100',
};

const barColor: Record<string, string> = {
  blue:    'bg-blue-500',
  violet:  'bg-violet-500',
  emerald: 'bg-emerald-500',
  amber:   'bg-amber-500',
};

/* ─────────────────────────────────────────
   SERVICE VISUAL — before/after bars
───────────────────────────────────────── */
function ServiceVisual({ service }: { service: typeof services[0] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-7 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Before → After</p>
        <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${colorMap[service.color]}`}>
          {service.stat.value} {service.stat.label}
        </span>
      </div>
      {service.visual.map((row) => {
        const maxVal = Math.max(row.before, row.after);
        const beforePct = Math.round((row.before / maxVal) * 100);
        const afterPct = 100;
        return (
          <div key={row.label}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-medium text-slate-600">{row.label}</span>
              <span className={`text-xs font-bold ${barColor[service.color].replace('bg-', 'text-')}`}>
                {row.after}{row.unit}
              </span>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-slate-400 w-10 shrink-0">Before</span>
                <div className="flex-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${beforePct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-full bg-slate-300"
                  />
                </div>
                <span className="text-[10px] text-slate-400 w-10 text-right shrink-0">{row.before}{row.unit}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-slate-400 w-10 shrink-0">After</span>
                <div className="flex-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${afterPct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className={`h-full rounded-full ${barColor[service.color]}`}
                  />
                </div>
                <span className={`text-[10px] font-bold w-10 text-right shrink-0 ${barColor[service.color].replace('bg-', 'text-')}`}>
                  {row.after}{row.unit}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function Home() {
  const [activeService, setActiveService] = useState(services[0].id);
  const current = services.find(s => s.id === activeService)!;
  const CIcon = current.icon;

  return (
    <div className="flex flex-col bg-white">

      {/* ── 1. Hero ── */}
      <Hero />

      {/* ── 2. Logo strip ── */}
      <section className="border-y border-slate-100 bg-white py-10 overflow-hidden">
        <p className="text-center text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-7">
          Trusted by 500+ businesses worldwide
        </p>
        {/* Fade edges */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="flex shrink-0 gap-10 items-center"
          >
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="flex items-center gap-2.5 shrink-0 opacity-40 hover:opacity-70 transition-opacity">
                <div className="h-7 w-7 rounded-lg bg-slate-900 flex items-center justify-center">
                  <span className="text-[9px] font-bold text-white font-mono">{logo.abbr}</span>
                </div>
                <span className="text-sm font-semibold text-slate-600 whitespace-nowrap">{logo.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 3. How it works ── */}
      <section className="px-4 md:px-6 py-24 border-b border-slate-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="github-badge mb-4">HOW IT WORKS</div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
              Up and running in days, not months
            </h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              No long onboarding. No engineering team required. Just results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-gradient-to-r from-blue-200 via-violet-200 to-emerald-200" />

            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Step number badge */}
                <div className="flex items-center justify-between">
                  <div className={`h-10 w-10 rounded-xl border flex items-center justify-center ${stepColor[step.color]}`}>
                    <step.icon className="h-5 w-5" />
                  </div>
                  <span className="text-3xl font-black text-slate-100 font-mono">{step.n}</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-7 py-3.5 text-sm font-bold text-white hover:bg-slate-700 transition-colors shadow-md"
            >
              Get started free <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. Bento feature grid ── */}
      <section className="px-4 md:px-6 py-24 border-b border-slate-100 bg-slate-50/40">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <div className="github-badge mb-4">PLATFORM</div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
              Everything your business needs to scale
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              One platform. Five service lines. Measurable outcomes from day one.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px]">

            {/* Large: AI Agents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="col-span-2 row-span-2 rounded-2xl border border-slate-200 bg-white shadow-sm p-7 flex flex-col justify-between group hover:shadow-md hover:border-blue-200 transition-all overflow-hidden"
            >
              <div>
                <div className="h-11 w-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-5">
                  <Bot className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Autonomous AI Agents</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Deploy agents that engage leads, answer questions, and complete workflows — without human intervention.</p>
              </div>
              {/* Animated bar chart — whileInView */}
              <div className="mt-4 rounded-xl bg-slate-50 border border-slate-100 p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Tasks automated this week</span>
                  <span className="text-xs font-bold text-emerald-600">↑ 12%</span>
                </div>
                <p className="text-2xl font-extrabold text-slate-900 mb-3">1,284,091</p>
                <div className="flex items-end gap-1 h-10">
                  {[40, 55, 45, 70, 60, 85, 75].map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm bg-blue-50 overflow-hidden" style={{ height: '100%' }}>
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full rounded-sm bg-blue-500 mt-auto"
                        style={{ marginTop: 'auto' }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Small: reputation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
              className="col-span-1 rounded-2xl border border-slate-200 bg-white shadow-sm p-5 flex flex-col justify-between hover:shadow-md hover:border-violet-200 transition-all"
            >
              <div className="h-9 w-9 rounded-lg bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600">
                <TrendingUp className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Avg. reputation lift</p>
                <p className="text-3xl font-extrabold text-slate-900">+1.2★</p>
              </div>
            </motion.div>

            {/* Small: time to value */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}
              className="col-span-1 rounded-2xl border border-slate-200 bg-white shadow-sm p-5 flex flex-col justify-between hover:shadow-md hover:border-emerald-200 transition-all"
            >
              <div className="h-9 w-9 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">First results in</p>
                <p className="text-2xl font-extrabold text-slate-900">&lt; 30 days</p>
              </div>
            </motion.div>

            {/* Wide: integrations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
              className="col-span-2 rounded-2xl border border-slate-200 bg-slate-900 shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition-all"
            >
              <div className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center text-white">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h3 className="font-bold text-white mb-1">Enterprise-grade security</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">SOC 2, GDPR, CCPA, and HIPAA compliant by default.</p>
                </div>
                <div className="flex gap-1.5 shrink-0">
                  {['SOC 2', 'GDPR', 'HIPAA'].map(b => (
                    <span key={b} className="text-[9px] font-bold rounded-md bg-white/10 border border-white/10 px-2 py-1 text-slate-300">{b}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 5. Services tabs ── */}
      <section className="px-4 md:px-6 py-24 border-b border-slate-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="github-badge mb-4">SERVICES</div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
              Five ways we grow your business
            </h2>
          </div>

          {/* Tab bar */}
          <div className="flex gap-0 overflow-x-auto pb-px mb-10 border-b border-slate-100">
            {services.map((s) => {
              const SIcon = s.icon;
              const isActive = s.id === activeService;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveService(s.id)}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold whitespace-nowrap border-b-2 -mb-px transition-all ${
                    isActive ? `${tabAccent[s.color]}` : 'border-transparent text-slate-400 hover:text-slate-700'
                  }`}
                >
                  <SIcon className="h-4 w-4" />
                  {s.label}
                </button>
              );
            })}
          </div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="grid lg:grid-cols-2 gap-12 items-start"
            >
              {/* Copy */}
              <div>
                <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold mb-5 ${colorMap[current.color]}`}>
                  <CIcon className="h-3.5 w-3.5" />
                  {current.label}
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 leading-tight">{current.headline}</h3>
                <p className="text-slate-500 leading-relaxed mb-6">{current.body}</p>
                <ul className="space-y-2.5 mb-8">
                  {current.points.map(p => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  href={current.href}
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-700 transition-colors"
                >
                  Explore {current.label} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Before/after visual */}
              <ServiceVisual service={current} />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── 6. Testimonials ── */}
      <section className="py-24 bg-slate-50/60 border-b border-slate-100 overflow-hidden">
        <div className="container mx-auto max-w-6xl px-4 md:px-6 mb-12 text-center">
          <div className="github-badge mb-4">TESTIMONIALS</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
            Loved by teams that ship
          </h2>
          <p className="text-slate-500 max-w-md mx-auto text-sm">Real results from real businesses. No cherry-picked metrics.</p>
        </div>

        {/* Two-row marquee — row 1 forward, row 2 reverse (Clerk/Resend style) */}
        <div className="flex flex-col gap-4">
          {[testimonials, [...testimonials].reverse()].map((row, rowIdx) => (
            <div key={rowIdx} className="relative overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10" />
              <motion.div
                animate={{ x: rowIdx === 0 ? ['0%', '-50%'] : ['-50%', '0%'] }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="flex shrink-0 gap-4"
              >
                {[...row, ...row].map((t, i) => (
                  <div
                    key={i}
                    className="w-72 shrink-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                    <div className="flex items-center gap-2.5">
                      <div className={`h-8 w-8 rounded-full ${t.color} flex items-center justify-center text-white text-[10px] font-bold shrink-0`}>
                        {t.initials}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-900">{t.name}</p>
                        <p className="text-[11px] text-slate-400">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 7. Why VyntRise comparison ── */}
      <section className="px-4 md:px-6 py-24 border-b border-slate-100">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="github-badge mb-4">WHY VYNTRISE</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Built different</h2>
            <p className="text-slate-500 max-w-md mx-auto text-sm">
              Most agencies sell retainers. We sell outcomes.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-[1fr_140px_140px] border-b border-slate-100 bg-slate-50 px-6 py-3.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">What you get</span>
              <div className="flex items-center justify-center gap-1.5">
                <div className="h-4 w-4 rounded bg-slate-900 flex items-center justify-center">
                  <Zap className="h-2.5 w-2.5 text-white" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-900">VyntRise</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 text-center">Typical Agency</span>
            </div>

            {comparisons.map((row, i) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className={`grid grid-cols-[1fr_140px_140px] px-6 py-3.5 items-center border-b border-slate-50 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}`}
              >
                <span className="text-sm text-slate-700">{row.label}</span>
                {/* VyntRise column — highlighted */}
                <div className="flex justify-center">
                  {row.us
                    ? <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500"><Check className="h-3.5 w-3.5 text-white" /></span>
                    : <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100"><X className="h-3.5 w-3.5 text-slate-400" /></span>
                  }
                </div>
                {/* Agency column */}
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

      {/* ── 8. Final CTA ── */}
      <section className="relative overflow-hidden bg-slate-900 px-4 md:px-6 py-28">
        {/* Gradient accent — Stripe style */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-blue-600/15 blur-[80px]" />
          <div className="absolute left-1/4 bottom-0 h-[300px] w-[500px] rounded-full bg-violet-600/10 blur-[80px]" />
        </div>

        <div className="relative container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-8">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold text-slate-300">14-day free trial · No credit card</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            Ready to put AI to work?
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Join 500+ businesses already growing with VyntRise. Start free and see results in your first 30 days.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-sm font-bold text-white hover:bg-blue-500 transition-colors shadow-xl shadow-blue-900/40"
            >
              Start free trial
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Explore services <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Trust row */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
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
