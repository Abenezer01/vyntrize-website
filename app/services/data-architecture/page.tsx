'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Database, Zap, Shield, BarChart3, Table, TrendingUp, CheckCircle2, Activity } from 'lucide-react';

const stats = [
  { label: 'Data Accuracy', value: '100%', delta: 'post-migration', icon: Shield, color: 'text-amber-600' },
  { label: 'Reporting Speed', value: '10x', delta: 'faster than before', icon: TrendingUp, color: 'text-blue-600' },
  { label: 'Manual Silos', value: '0', delta: 'eliminated', icon: Database, color: 'text-emerald-600' },
];

const modules = [
  {
    id: '4.1',
    icon: Table,
    title: '"Spreadsheet to Engine" Migration',
    description: 'Your business runs on a fragile, slow "Frankenstein" spreadsheet. We architect and migrate your core operational data to a proper, scalable database.',
    outcome: 'Your core operations become fast, reliable, and multi-user friendly — no more version conflicts.',
    metrics: [
      { label: 'Migration Accuracy', value: 100 },
      { label: 'Query Performance', value: 97 },
      { label: 'Multi-user Capacity', value: 99 },
    ],
  },
  {
    id: '4.2',
    icon: Zap,
    title: 'Universal Data Connector & Syncing',
    description: 'Data is trapped in silos. We build automated, bi-directional pipelines between your CRM, accounting, e-commerce, and operational tools.',
    outcome: 'Real-time operational harmony and automated record-keeping across your entire stack.',
    metrics: [
      { label: 'Sync Reliability', value: 99 },
      { label: 'Pipeline Coverage', value: 91 },
      { label: 'Latency Score', value: 96 },
    ],
  },
  {
    id: '4.3',
    icon: Shield,
    title: 'Data Cleansing & Governance',
    description: 'Duplicates and inconsistent formatting cripple reporting. We perform a deep clean of historical data and build systems to keep it pristine going forward.',
    outcome: 'Trust in your data quality for accurate forecasting, reliable operations, and confident decisions.',
    metrics: [
      { label: 'Duplicate Removal', value: 100 },
      { label: 'Format Consistency', value: 98 },
      { label: 'Governance Coverage', value: 94 },
    ],
  },
];

export default function DataArchitectureService() {
  return (
    <div className="flex flex-col min-h-screen bg-white">

      <section className="border-b border-slate-100 bg-slate-50/60 pt-20 pb-10 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <Link href="/services" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-900 mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Services
          </Link>
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600">
                <Database className="h-7 w-7" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">DATA · Service 04</span>
                  <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live
                  </span>
                </div>
                <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">Data Architecture & Analytics</h1>
                <p className="text-slate-500 text-sm mt-1">Chaos to clarity — your data as a strategic asset.</p>
              </div>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-amber-700 transition-colors shrink-0">
              Get data audit <ArrowRight className="h-4 w-4" />
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
                      <div className="h-9 w-9 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600">
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
                              className="h-full rounded-full bg-amber-500"
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
            <h2 className="text-2xl font-bold text-white mb-2">Ready to activate your data?</h2>
            <p className="text-slate-400 text-sm">Let&apos;s transform your scattered data into a clear, actionable source of truth.</p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-6 py-3 text-sm font-semibold text-white hover:bg-amber-700 transition-colors shrink-0">
            Get data audit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
