'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Code, Zap, ShoppingCart, Settings, Database, CheckCircle2, Activity, Shield } from 'lucide-react';

const stats = [
  { label: 'Projects Delivered', value: '100+', delta: 'since 2022', icon: Code, color: 'text-emerald-600' },
  { label: 'On-Time Delivery', value: '95%', delta: 'across all projects', icon: CheckCircle2, color: 'text-blue-600' },
  { label: 'Client Rating', value: '4.9/5', delta: 'avg satisfaction', icon: Activity, color: 'text-violet-600' },
];

const modules = [
  {
    id: '3.1',
    icon: Zap,
    title: 'Bespoke AI Implementation & Integration',
    description: 'Generic AI tools aren\'t built for your specific data or workflow. We build custom AI interfaces and integrations that work within your exact environment and brand.',
    outcome: 'Leverage cutting-edge AI safely and effectively, with outputs tailored to your brand and data.',
    metrics: [
      { label: 'Integration Depth', value: 94 },
      { label: 'Brand Alignment', value: 98 },
      { label: 'Security Compliance', value: 100 },
    ],
  },
  {
    id: '3.2',
    icon: ShoppingCart,
    title: 'Targeted E-commerce & Business Platforms',
    description: 'Off-the-shelf platforms can\'t accommodate unique business models. We build custom digital storefronts, wholesale portals, and complex booking systems.',
    outcome: 'A perfect digital front door that converts better because it\'s built for your customer\'s journey.',
    metrics: [
      { label: 'Conversion Rate Lift', value: 87 },
      { label: 'UX Score', value: 95 },
      { label: 'Load Performance', value: 97 },
    ],
  },
  {
    id: '3.3',
    icon: Settings,
    title: 'Operations & Efficiency Tools (Mini-ERPs)',
    description: 'You\'re piecing together 5+ apps, or enterprise ERP is too expensive. We build streamlined, custom "light-ERP" systems that do exactly what you need — nothing more.',
    outcome: 'Eliminate app fatigue, reduce manual data reconciliation, and gain complete clarity over operations.',
    metrics: [
      { label: 'Process Consolidation', value: 91 },
      { label: 'Data Accuracy', value: 99 },
      { label: 'Team Adoption', value: 93 },
    ],
  },
];

export default function CustomSoftwareService() {
  return (
    <div className="flex flex-col min-h-screen bg-white">

      <section className="border-b border-slate-100 bg-slate-50/60 pt-20 pb-10 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <Link href="/services" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-900 mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Services
          </Link>
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                <Code className="h-7 w-7" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">DEV · Service 03</span>
                  <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live
                  </span>
                </div>
                <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">Custom Software Development</h1>
                <p className="text-slate-500 text-sm mt-1">Built for your exact workflow — not the other way around.</p>
              </div>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors shrink-0">
              Discuss your project <ArrowRight className="h-4 w-4" />
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
                      <div className="h-9 w-9 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
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
                              className="h-full rounded-full bg-emerald-500"
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
            <h2 className="text-2xl font-bold text-white mb-2">Ready to build your advantage?</h2>
            <p className="text-slate-400 text-sm">Let&apos;s engineer custom software solutions tailored to your unique business needs.</p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors shrink-0">
            Discuss your project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
