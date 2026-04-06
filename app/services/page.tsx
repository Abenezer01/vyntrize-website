'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight, Search, Bot, Code, Database, Sparkles,
  ChevronRight, Activity, TrendingUp, Zap, Shield, Users, BarChart3,
  CheckCircle2, Globe, MessageSquare, Settings, Play, Mail
} from 'lucide-react';

const services = [
  {
    id: 'ai-search',
    badge: 'AISO',
    label: 'AI Search & Reputation',
    href: '/services/ai-search',
    icon: Search,
    color: 'blue',
    status: 'Live',
    statusColor: 'emerald',
    tagline: 'Dominate search. Build trust.',
    description: 'AI-powered SEO and centralized reputation management that ensures customers find you and choose you.',
    features: ['AI-Driven Local SEO', 'Review Centralization', 'Reputation Audits', 'Profile Management'],
    stats: [
      { label: 'Avg. Traffic Lift', value: '250%', icon: TrendingUp },
      { label: 'Avg. Rating', value: '4.7★', icon: Activity },
      { label: 'Response Rate', value: '98%', icon: CheckCircle2 },
    ],
    preview: [
      { label: 'Reputation Score', value: 94, max: 100, color: 'bg-blue-500' },
      { label: 'Review Velocity', value: 78, max: 100, color: 'bg-violet-500' },
      { label: 'SEO Authority', value: 85, max: 100, color: 'bg-emerald-500' },
    ],
  },
  {
    id: 'intelligent-automation',
    badge: 'AUTO',
    label: 'Intelligent Automation',
    href: '/services/intelligent-automation',
    icon: Bot,
    color: 'violet',
    status: 'Live',
    statusColor: 'emerald',
    tagline: 'Tools that think and act.',
    description: 'Autonomous agents and intelligent workflows that perceive context, make decisions, and execute tasks end-to-end.',
    features: ['Autonomous Sales Agents', 'Knowledge Brains (RAG)', 'Multi-Agent Workflows', 'Process Automation'],
    stats: [
      { label: 'Hours Saved/Week', value: '20+', icon: Zap },
      { label: 'Accuracy Rate', value: '99.9%', icon: Shield },
      { label: 'Integrations', value: '500+', icon: Settings },
    ],
    preview: [
      { label: 'Tasks Automated', value: 92, max: 100, color: 'bg-violet-500' },
      { label: 'Agent Uptime', value: 99, max: 100, color: 'bg-blue-500' },
      { label: 'Workflow Coverage', value: 74, max: 100, color: 'bg-amber-500' },
    ],
  },
  {
    id: 'custom-software',
    badge: 'DEV',
    label: 'Custom Software',
    href: '/services/custom-software',
    icon: Code,
    color: 'emerald',
    status: 'Live',
    statusColor: 'emerald',
    tagline: 'Built for your exact workflow.',
    description: 'Bespoke web applications and AI integrations engineered around your unique business logic — not the other way around.',
    features: ['Bespoke AI Integration', 'Niche E-commerce Engines', 'Mini-ERP Systems', 'Legacy Migration'],
    stats: [
      { label: 'Projects Delivered', value: '100+', icon: Code },
      { label: 'On-Time Delivery', value: '95%', icon: CheckCircle2 },
      { label: 'Client Rating', value: '4.9/5', icon: Activity },
    ],
    preview: [
      { label: 'Build Progress', value: 88, max: 100, color: 'bg-emerald-500' },
      { label: 'Test Coverage', value: 95, max: 100, color: 'bg-blue-500' },
      { label: 'Performance Score', value: 97, max: 100, color: 'bg-violet-500' },
    ],
  },
  {
    id: 'data-architecture',
    badge: 'DATA',
    label: 'Data & Analytics',
    href: '/services/data-architecture',
    icon: Database,
    color: 'amber',
    status: 'Live',
    statusColor: 'emerald',
    tagline: 'Chaos to clarity.',
    description: 'Organize, connect, and activate your scattered data — transforming it from a liability into a clear source of truth.',
    features: ['Spreadsheet to Engine', 'Universal Data Sync', 'Data Governance', 'Pipeline Automation'],
    stats: [
      { label: 'Data Accuracy', value: '100%', icon: Shield },
      { label: 'Reporting Speed', value: '10x', icon: TrendingUp },
      { label: 'Manual Silos', value: '0', icon: Database },
    ],
    preview: [
      { label: 'Data Quality', value: 100, max: 100, color: 'bg-amber-500' },
      { label: 'Pipeline Health', value: 96, max: 100, color: 'bg-emerald-500' },
      { label: 'Sync Coverage', value: 82, max: 100, color: 'bg-blue-500' },
    ],
  },
  {
    id: 'digital-marketing',
    badge: 'MKT',
    label: 'Digital Marketing',
    href: '/services/digital-marketing',
    icon: Sparkles,
    color: 'rose',
    status: 'Live',
    statusColor: 'emerald',
    tagline: 'Human creativity, AI scale.',
    description: 'A hybrid model where authentic human expertise meets AI efficiency — real connection at scale.',
    features: ['Authentic Video Service', 'Community Management', 'Hybrid Email Strategy', 'Sentiment Analysis'],
    stats: [
      { label: 'Engagement Rate', value: '5x', icon: TrendingUp },
      { label: 'Email Open Rate', value: '42%', icon: Mail },
      { label: 'Community Growth', value: '3x', icon: Users },
    ],
    preview: [
      { label: 'Engagement Score', value: 87, max: 100, color: 'bg-rose-500' },
      { label: 'Content Output', value: 91, max: 100, color: 'bg-violet-500' },
      { label: 'Audience Growth', value: 73, max: 100, color: 'bg-amber-500' },
    ],
  },
];

const colorMap: Record<string, string> = {
  blue: 'bg-blue-50 text-blue-600 border-blue-100',
  violet: 'bg-violet-50 text-violet-600 border-violet-100',
  emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  amber: 'bg-amber-50 text-amber-600 border-amber-100',
  rose: 'bg-rose-50 text-rose-600 border-rose-100',
};

const ringMap: Record<string, string> = {
  blue: 'ring-blue-200',
  violet: 'ring-violet-200',
  emerald: 'ring-emerald-200',
  amber: 'ring-amber-200',
  rose: 'ring-rose-200',
};

export default function Services() {
  const [active, setActive] = useState(services[0].id);
  const current = services.find((s) => s.id === active)!;
  const Icon = current.icon;

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* Page header */}
      <section className="border-b border-slate-100 bg-slate-50/60 pt-20 pb-12 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="github-badge mb-4">SERVICES CONTROL PANEL</div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            What we build for you
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl">
            Five focused service lines. Each one a precision instrument for a specific growth problem.
          </p>
        </div>
      </section>

      {/* Dashboard layout */}
      <section className="flex-1 px-4 md:px-6 py-10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-6">

            {/* Sidebar nav */}
            <nav className="lg:w-64 shrink-0">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3 px-2">Services</p>
              <ul className="space-y-1">
                {services.map((s) => {
                  const SIcon = s.icon;
                  const isActive = s.id === active;
                  return (
                    <li key={s.id}>
                      <button
                        onClick={() => setActive(s.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all text-left ${isActive
                            ? 'bg-slate-900 text-white shadow-sm'
                            : 'text-slate-600 hover:bg-slate-100'
                          }`}
                      >
                        <SIcon className="h-4 w-4 shrink-0" />
                        <span className="flex-1">{s.label}</span>
                        {isActive && <ChevronRight className="h-3.5 w-3.5 opacity-60" />}
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold text-slate-700 mb-1">Not sure where to start?</p>
                <p className="text-xs text-slate-500 mb-3">We&apos;ll map the right services to your goals.</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700"
                >
                  Talk to us <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </nav>

            {/* Main panel */}
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="space-y-5"
                >
                  {/* Panel header */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div className="flex items-center gap-4">
                        <div className={`h-12 w-12 rounded-xl border flex items-center justify-center ${colorMap[current.color]}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">{current.badge}</span>
                            <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              {current.status}
                            </span>
                          </div>
                          <h2 className="text-xl font-bold text-slate-900">{current.label}</h2>
                          <p className="text-sm text-slate-500 mt-0.5">{current.tagline}</p>
                        </div>
                      </div>
                      <Link
                        href={current.href}
                        className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700 transition-colors shrink-0"
                      >
                        View full details <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                    <p className="mt-4 text-slate-600 text-sm leading-relaxed max-w-2xl">{current.description}</p>
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-4">
                    {current.stats.map((stat) => {
                      const SIcon = stat.icon;
                      return (
                        <div key={stat.label} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                          <div className="flex items-center gap-2 mb-2">
                            <SIcon className="h-4 w-4 text-slate-400" />
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{stat.label}</span>
                          </div>
                          <p className="text-2xl font-extrabold text-slate-900">{stat.value}</p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Features + Preview */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Features */}
                    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">Capabilities</p>
                      <ul className="space-y-3">
                        {current.features.map((f) => (
                          <li key={f} className="flex items-center gap-3 text-sm text-slate-700">
                            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Live metrics preview */}
                    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">Live Metrics Preview</p>
                      <div className="space-y-4">
                        {current.preview.map((m) => (
                          <div key={m.label}>
                            <div className="flex justify-between text-xs mb-1.5">
                              <span className="text-slate-600 font-medium">{m.label}</span>
                              <span className="font-bold text-slate-900">{m.value}%</span>
                            </div>
                            <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${m.value}%` }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                                className={`h-full rounded-full ${m.color}`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA strip */}
                  <div className={`rounded-xl border p-5 flex items-center justify-between gap-4 flex-wrap ${colorMap[current.color]}`}>
                    <div>
                      <p className="font-semibold text-sm">Ready to get started with {current.label}?</p>
                      <p className="text-xs opacity-70 mt-0.5">No commitment — let&apos;s talk about your goals first.</p>
                    </div>
                    <div className="flex gap-3">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700 transition-colors"
                      >
                        Get started <ArrowRight className="h-4 w-4" />
                      </Link>
                      <Link
                        href={current.href}
                        className="inline-flex items-center gap-2 rounded-lg border border-current bg-white/60 px-4 py-2 text-sm font-semibold hover:bg-white transition-colors"
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* All services quick grid */}
      <section className="border-t border-slate-100 bg-slate-50/60 px-4 md:px-6 py-16">
        <div className="container mx-auto max-w-6xl">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6">All Services</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => {
              const SIcon = s.icon;
              return (
                <Link
                  key={s.id}
                  href={s.href}
                  className={`group rounded-xl border bg-white p-5 shadow-sm hover:shadow-md hover:ring-2 transition-all ${ringMap[s.color]}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`h-9 w-9 rounded-lg border flex items-center justify-center ${colorMap[s.color]}`}>
                      <SIcon className="h-4 w-4" />
                    </div>
                    <span className="font-semibold text-sm text-slate-900">{s.label}</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed mb-3">{s.tagline}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
