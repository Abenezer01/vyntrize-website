'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight, Search, Bot, Code, Database, Sparkles,
  Zap, ShieldCheck, Users, Star, CheckCircle2, X, Check,
  TrendingUp, Activity, Clock
} from 'lucide-react';
import Hero from '@/components/Hero';

/* ─── Logo marquee data ─── */
const logos = [
  'Acme Corp', 'NovaTech', 'Meridian', 'Stackflow', 'Orbis',
  'Luminary', 'Crestline', 'Vantage', 'Pinnacle', 'Solaris',
];

/* ─── Bento features ─── */
const bentoItems = [
  {
    size: 'large',
    icon: Bot,
    color: 'blue',
    title: 'Autonomous AI Agents',
    body: 'Deploy agents that engage leads, answer questions, and complete workflows — without human intervention.',
    metric: { label: 'Tasks completed autonomously', value: '1M+' },
  },
  {
    size: 'small',
    icon: TrendingUp,
    color: 'violet',
    title: 'Reputation Score',
    metric: { label: 'Avg. improvement', value: '+1.2★' },
  },
  {
    size: 'small',
    icon: Clock,
    color: 'emerald',
    title: 'Time to value',
    metric: { label: 'First results in', value: '< 30 days' },
  },
  {
    size: 'medium',
    icon: ShieldCheck,
    color: 'amber',
    title: 'Enterprise-grade security',
    body: 'SOC 2, GDPR, CCPA, and HIPAA compliant by default. Every deployment.',
  },
  {
    size: 'medium',
    icon: Zap,
    color: 'rose',
    title: '500+ integrations',
    body: 'Connect to your CRM, accounting, e-commerce, and ops tools out of the box.',
  },
];

/* ─── Services tabs ─── */
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
  },
];

/* ─── Testimonials ─── */
const testimonials = [
  { quote: 'VyntRise transformed our local SEO. 250% traffic increase in 3 months and our review rating went from 3.8 to 4.7 stars.', name: 'Sarah Martinez', role: 'Owner, Martinez Dental Group', initials: 'SM', color: 'bg-blue-500' },
  { quote: 'The automation tools saved our team 20+ hours per week. We focus on strategy while VyntRise handles the rest.', name: 'Michael Chen', role: 'CTO, TechStart Solutions', initials: 'MC', color: 'bg-violet-500' },
  { quote: 'Outstanding custom development. Delivered exactly what we needed, on time and within budget.', name: 'Emily Rodriguez', role: 'CEO, GrowthHub Agency', initials: 'ER', color: 'bg-emerald-500' },
  { quote: 'Our data was a mess across 6 tools. VyntRise unified everything in under 3 weeks. Game changer.', name: 'James Okafor', role: 'COO, Meridian Logistics', initials: 'JO', color: 'bg-amber-500' },
  { quote: 'The AI agents handle our lead follow-up 24/7. Conversion rate up 40% since we launched.', name: 'Priya Nair', role: 'VP Sales, Crestline SaaS', initials: 'PN', color: 'bg-rose-500' },
  { quote: 'We went from spreadsheets to a real database in 2 weeks. The team was exceptional throughout.', name: 'David Park', role: 'Founder, Stackflow', initials: 'DP', color: 'bg-cyan-500' },
];

/* ─── Before / After ─── */
const comparisons = [
  { label: 'Results in < 30 days', us: true },
  { label: 'Outcome-based pricing', us: true },
  { label: 'Explainable AI systems', us: true },
  { label: 'Dedicated success manager', us: true },
  { label: 'Lock-in annual contracts', us: false },
  { label: 'Black-box automation', us: false },
  { label: 'Months-long onboarding', us: false },
];

const colorMap: Record<string, string> = {
  blue: 'bg-blue-50 text-blue-600 border-blue-100',
  violet: 'bg-violet-50 text-violet-600 border-violet-100',
  emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  amber: 'bg-amber-50 text-amber-600 border-amber-100',
  rose: 'bg-rose-50 text-rose-600 border-rose-100',
};

const tabAccent: Record<string, string> = {
  blue: 'border-blue-600 text-blue-600',
  violet: 'border-violet-600 text-violet-600',
  emerald: 'border-emerald-600 text-emerald-600',
  amber: 'border-amber-600 text-amber-600',
};

export default function Home() {
  const [activeService, setActiveService] = useState(services[0].id);
  const current = services.find(s => s.id === activeService)!;
  const CIcon = current.icon;

  return (
    <div className="flex flex-col bg-white">

      {/* ── 1. Hero ── */}
      <Hero />

      {/* ── 2. Logo marquee ── */}
      <section className="border-y border-slate-100 bg-white py-8 overflow-hidden">
        <p className="text-center text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6">
          Trusted by 500+ businesses worldwide
        </p>
        <div className="relative flex">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="flex shrink-0 gap-12 items-center pr-12"
          >
            {[...logos, ...logos].map((name, i) => (
              <span key={i} className="text-sm font-semibold text-slate-300 whitespace-nowrap font-mono tracking-wide">
                {name}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 3. Bento feature grid ── */}
      <section className="px-4 md:px-6 py-24 border-b border-slate-100">
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
            {/* Large card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="col-span-2 row-span-2 rounded-2xl border border-slate-200 bg-white shadow-sm p-7 flex flex-col justify-between group hover:shadow-md hover:border-blue-200 transition-all"
            >
              <div>
                <div className="h-11 w-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-5">
                  <Bot className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Autonomous AI Agents</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Deploy agents that engage leads, answer questions, and complete workflows — without human intervention.</p>
              </div>
              <div className="mt-6 rounded-xl bg-slate-50 border border-slate-100 p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Tasks completed autonomously</span>
                  <span className="text-xs font-bold text-emerald-600">↑ 12% this week</span>
                </div>
                <p className="text-3xl font-extrabold text-slate-900">1,284,091</p>
                <div className="mt-3 flex items-end gap-1 h-8">
                  {[40, 55, 45, 70, 60, 85, 75].map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm bg-blue-100" style={{ height: `${h}%` }}>
                      <div className="w-full rounded-sm bg-blue-500" style={{ height: `${h * 0.6}%` }} />
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

            {/* Medium: security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
              className="col-span-2 rounded-2xl border border-slate-200 bg-slate-900 shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition-all"
            >
              <div className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center text-white">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Enterprise-grade security</h3>
                <p className="text-xs text-slate-400 leading-relaxed">SOC 2, GDPR, CCPA, and HIPAA compliant by default. Every deployment, every client.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4. Dark stats bar ── */}
      <section className="bg-slate-900 px-4 md:px-6 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Businesses served', color: 'text-blue-400' },
              { value: '1M+', label: 'Tasks automated', color: 'text-violet-400' },
              { value: '99%', label: 'Client satisfaction', color: 'text-emerald-400' },
              { value: '3.5x', label: 'Avg. ROI increase', color: 'text-amber-400' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <p className={`text-4xl md:text-5xl font-extrabold mb-2 ${s.color}`}>{s.value}</p>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{s.label}</p>
              </motion.div>
            ))}
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
          <div className="flex gap-1 overflow-x-auto pb-1 mb-10 border-b border-slate-100">
            {services.map((s) => {
              const SIcon = s.icon;
              const isActive = s.id === activeService;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveService(s.id)}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold whitespace-nowrap border-b-2 transition-all -mb-px ${isActive ? `${tabAccent[s.color]} bg-transparent` : 'border-transparent text-slate-500 hover:text-slate-900'
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
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
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
                  className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-700 transition-colors"
                >
                  Explore {current.label} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Stat card */}
              <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-8">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Key result</p>
                <p className="text-6xl font-extrabold text-slate-900 mb-1">{current.stat.value}</p>
                <p className="text-slate-500 text-sm mb-8">{current.stat.label}</p>
                <div className="space-y-3">
                  {current.points.map((p, i) => (
                    <div key={p} className="flex items-center gap-3">
                      <div className={`h-1.5 w-1.5 rounded-full ${['bg-blue-500', 'bg-violet-500', 'bg-emerald-500', 'bg-amber-500'][i % 4]}`} />
                      <span className="text-xs text-slate-600">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── 6. Testimonial marquee ── */}
      <section className="py-24 bg-slate-50/60 border-b border-slate-100 overflow-hidden">
        <div className="container mx-auto max-w-6xl px-4 md:px-6 mb-10 text-center">
          <div className="github-badge mb-4">TESTIMONIALS</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Loved by teams that ship
          </h2>
        </div>
        <div className="relative flex gap-5 overflow-hidden">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
            className="flex shrink-0 gap-5"
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="w-80 shrink-0 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed mb-5">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className={`h-9 w-9 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 7. Before / After ── */}
      <section className="px-4 md:px-6 py-24 border-b border-slate-100">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <div className="github-badge mb-4">WHY VYNTRISE</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Built different
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Most agencies sell retainers. We sell outcomes. Here&apos;s what that looks like in practice.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="grid grid-cols-[1fr_120px_120px] border-b border-slate-100 bg-slate-50 px-6 py-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">What you get</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 text-center">VyntRise</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 text-center">Typical Agency</span>
            </div>
            {comparisons.map((row, i) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className={`grid grid-cols-[1fr_120px_120px] px-6 py-3.5 items-center ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}`}
              >
                <span className="text-sm text-slate-700">{row.label}</span>
                <div className="flex justify-center">
                  {row.us
                    ? <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 border border-emerald-200"><Check className="h-3.5 w-3.5 text-emerald-600" /></span>
                    : <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-50 border border-rose-200"><X className="h-3.5 w-3.5 text-rose-500" /></span>
                  }
                </div>
                <div className="flex justify-center">
                  {!row.us
                    ? <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 border border-emerald-200"><Check className="h-3.5 w-3.5 text-emerald-600" /></span>
                    : <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-50 border border-rose-200"><X className="h-3.5 w-3.5 text-rose-500" /></span>
                  }
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Final CTA ── */}
      <section className="bg-slate-900 px-4 md:px-6 py-24">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">Get started</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Ready to put AI to work?
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Join 500+ businesses already growing with VyntRise. Start your 14-day free trial — no credit card required.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/30"
            >
              Start free trial <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Explore services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
