'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Search, BarChart3, MessageSquare, Globe, Shield, Zap, TrendingUp, Activity, CheckCircle2 } from 'lucide-react';

const stats = [
  { label: 'Avg. Traffic Increase', value: '250%', delta: '+12% MoM', icon: TrendingUp, color: 'text-blue-600' },
  { label: 'Avg. Review Rating', value: '4.7★', delta: 'from 3.8 avg', icon: Activity, color: 'text-violet-600' },
  { label: 'Response Rate', value: '98%', delta: 'industry avg 34%', icon: CheckCircle2, color: 'text-emerald-600' },
];

const modules = [
  {
    id: '1.1',
    icon: Globe,
    title: 'AI-Driven Local & Organic SEO',
    description: 'Move beyond basic keywords. We use AI to analyze search intent, optimize for E-E-A-T, and secure high-value local citations through strategic PR.',
    outcome: 'Rank higher for what matters, attract qualified traffic, and establish unmatched topical authority.',
    metrics: [
      { label: 'Keyword Rankings', value: 91 },
      { label: 'Citation Coverage', value: 84 },
      { label: 'E-E-A-T Score', value: 88 },
    ],
  },
  {
    id: '1.2',
    icon: BarChart3,
    title: 'Review Aggregation & Centralization',
    description: 'Stop checking 10 different sites. One unified dashboard pulling reviews from Google, Yelp, Facebook, Glassdoor, and industry platforms.',
    outcome: 'Instantly understand your reputation landscape, track sentiment trends, and never miss customer feedback.',
    metrics: [
      { label: 'Platform Coverage', value: 95 },
      { label: 'Sentiment Accuracy', value: 92 },
      { label: 'Alert Speed', value: 99 },
    ],
  },
  {
    id: '1.3',
    icon: MessageSquare,
    title: 'Intelligent Review Response & Profile Management',
    description: 'AI drafts context-aware response suggestions for new reviews and ensures your business data (NAP) is consistent everywhere.',
    outcome: 'Professionally managed reputation that builds social proof, improves local SEO, and turns feedback into growth.',
    metrics: [
      { label: 'Response Quality', value: 96 },
      { label: 'NAP Consistency', value: 100 },
      { label: 'Profile Completeness', value: 94 },
    ],
  },
  {
    id: '1.4',
    icon: Shield,
    title: 'Insight-Driven Reputation Audits',
    description: 'Deep-dive reports analyzing review themes, competitor reputation gaps, and profile completeness to inform your strategy.',
    outcome: 'Actionable insights to improve customer experience, competitive positioning, and conversion rates.',
    metrics: [
      { label: 'Competitor Gap Analysis', value: 87 },
      { label: 'Theme Detection', value: 93 },
      { label: 'Conversion Impact', value: 79 },
    ],
  },
];

export default function AISearchService() {
  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* Header */}
      <section className="border-b border-slate-100 bg-slate-50/60 pt-20 pb-10 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <Link href="/services" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-900 mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Services
          </Link>
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                <Search className="h-7 w-7" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">AISO · Service 01</span>
                  <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live
                  </span>
                </div>
                <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">AI Search & Reputation Optimization</h1>
                <p className="text-slate-500 text-sm mt-1">Dominate search results and build unbreakable trust.</p>
              </div>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors shrink-0">
              Get started <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 md:px-6 py-8 border-b border-slate-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s) => {
              const SIcon = s.icon;
              return (
                <div key={s.label} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <SIcon className={`h-4 w-4 ${s.color}`} />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{s.label}</span>
                  </div>
                  <p className={`text-3xl font-extrabold ${s.color}`}>{s.value}</p>
                  <p className="text-xs text-slate-400 mt-1">{s.delta}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="px-4 md:px-6 py-12">
        <div className="container mx-auto max-w-6xl space-y-5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6">Service Modules</p>
          {modules.map((mod, i) => {
            const MIcon = mod.icon;
            return (
              <motion.div
                key={mod.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' }}
                className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
              >
                <div className="grid md:grid-cols-[1fr_280px]">
                  <div className="p-6 border-b md:border-b-0 md:border-r border-slate-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-9 w-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                        <MIcon className="h-4 w-4" />
                      </div>
                      <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Module {mod.id}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{mod.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">{mod.description}</p>
                    <div className="rounded-lg bg-emerald-50 border border-emerald-100 px-4 py-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">Outcome — </span>
                      <span className="text-xs text-emerald-700">{mod.outcome}</span>
                    </div>
                  </div>
                  <div className="p-6 bg-slate-50/50">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">Performance Indicators</p>
                    <div className="space-y-4">
                      {mod.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="flex justify-between text-xs mb-1.5">
                            <span className="text-slate-600">{m.label}</span>
                            <span className="font-bold text-slate-900">{m.value}%</span>
                          </div>
                          <div className="h-1.5 w-full rounded-full bg-slate-200 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${m.value}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                              className="h-full rounded-full bg-blue-500"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-6 py-16 border-t border-slate-100 bg-slate-900">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Ready to dominate search?</h2>
            <p className="text-slate-400 text-sm">Let&apos;s build your unbreakable online reputation and drive more qualified traffic.</p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors shrink-0">
            Get started today <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
