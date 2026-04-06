'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Bot, Database, Zap, Users, Settings, Code, TrendingUp, Shield, Activity, CheckCircle2 } from 'lucide-react';

const stats = [
  { label: 'Hours Saved / Week', value: '20+', delta: 'per team', icon: Zap, color: 'text-violet-600' },
  { label: 'Accuracy Rate', value: '99.9%', delta: 'across all agents', icon: Shield, color: 'text-blue-600' },
  { label: 'Integrations', value: '500+', delta: 'tools supported', icon: Settings, color: 'text-emerald-600' },
];

const modules = [
  {
    id: '2.1',
    icon: Users,
    title: 'Autonomous Lead & Sales Agents',
    description: 'Leads decay in minutes. Our AI agents engage, qualify, and act in real-time — from form fills to booked meetings, without human intervention.',
    outcome: 'Convert more leads, improve sales team efficiency, and never miss a high-intent prospect.',
    metrics: [
      { label: 'Lead Response Speed', value: 99 },
      { label: 'Qualification Accuracy', value: 94 },
      { label: 'Booking Conversion', value: 87 },
    ],
  },
  {
    id: '2.2',
    icon: Database,
    title: 'Internal Knowledge & Operations Agents',
    description: 'RAG-powered AI "brains" trained on your manuals, SOPs, and project briefs — giving employees instant, accurate answers without digging through drives.',
    outcome: 'Drastically reduce training time, ensure policy compliance, and preserve institutional knowledge.',
    metrics: [
      { label: 'Answer Accuracy', value: 97 },
      { label: 'Knowledge Coverage', value: 91 },
      { label: 'Time-to-Answer', value: 99 },
    ],
  },
  {
    id: '2.3',
    icon: Settings,
    title: 'Multi-Agent Workflow Orchestration',
    description: 'Coordinated "crews" of specialized AI agents that hand off tasks to complete entire workflows autonomously — from content creation to customer onboarding.',
    outcome: 'Achieve complex, multi-step outcomes autonomously — scaling output without scaling headcount.',
    metrics: [
      { label: 'Workflow Completion', value: 96 },
      { label: 'Handoff Accuracy', value: 93 },
      { label: 'Parallel Task Capacity', value: 88 },
    ],
  },
  {
    id: '2.4',
    icon: Zap,
    title: 'Intelligent Process Automation',
    description: 'Basic no-code automation lacks judgment. We infuse AI decision-points into critical processes like invoice processing, support triage, and compliance checks.',
    outcome: 'Automate not just the task, but the decision-making within the task — handling exceptions intelligently.',
    metrics: [
      { label: 'Exception Handling', value: 92 },
      { label: 'Process Coverage', value: 85 },
      { label: 'Error Reduction', value: 98 },
    ],
  },
];

export default function IntelligentAutomationService() {
  return (
    <div className="flex flex-col min-h-screen bg-white">

      <section className="border-b border-slate-100 bg-slate-50/60 pt-20 pb-10 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <Link href="/services" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-900 mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Services
          </Link>
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600">
                <Bot className="h-7 w-7" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">AUTO · Service 02</span>
                  <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live
                  </span>
                </div>
                <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">Intelligent AI & Automation</h1>
                <p className="text-slate-500 text-sm mt-1">Tools that think, decide, and act on your behalf.</p>
              </div>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-violet-700 transition-colors shrink-0">
              Get started <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

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
                      <div className="h-9 w-9 rounded-lg bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600">
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
                              className="h-full rounded-full bg-violet-500"
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

      <section className="px-4 md:px-6 py-16 border-t border-slate-100 bg-slate-900">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Ready to automate your growth?</h2>
            <p className="text-slate-400 text-sm">Let&apos;s architect intelligent workflows that turn your stack into a proactive engine.</p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-6 py-3 text-sm font-semibold text-white hover:bg-violet-700 transition-colors shrink-0">
            Get started today <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
