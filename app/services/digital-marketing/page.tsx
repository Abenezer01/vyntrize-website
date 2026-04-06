'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Sparkles, Play, Users, Mail, Search, MessageSquare, TrendingUp, Activity, CheckCircle2 } from 'lucide-react';

const stats = [
  { label: 'Engagement Rate', value: '5x', delta: 'vs industry avg', icon: TrendingUp, color: 'text-rose-600' },
  { label: 'Email Open Rate', value: '42%', delta: 'avg 21% industry', icon: Mail, color: 'text-violet-600' },
  { label: 'Community Growth', value: '3x', delta: 'in 90 days', icon: Users, color: 'text-blue-600' },
];

const modules = [
  {
    id: '5.1',
    icon: Play,
    title: 'Authentic Storytelling Video Service',
    description: 'Generic AI avatars feel cold. A Content Coach extracts your real stories (Human Core), while AI tools optimize and edit at scale (AI Amplifier).',
    outcome: 'A consistent pipeline of authentic, high-quality video content that builds rapport and authority.',
    metrics: [
      { label: 'Authenticity Score', value: 96 },
      { label: 'Production Velocity', value: 88 },
      { label: 'Audience Retention', value: 82 },
    ],
  },
  {
    id: '5.2',
    icon: MessageSquare,
    title: '"AI-Proof" Community Management',
    description: 'AI monitors conversations and flags opportunities (AI Sentinel), while human Community Managers craft personalized, genuine responses (Human Ambassador).',
    outcome: 'A loyal, engaged following and a protected, positive brand reputation online.',
    metrics: [
      { label: 'Response Authenticity', value: 100 },
      { label: 'Sentiment Monitoring', value: 97 },
      { label: 'Community Health', value: 91 },
    ],
  },
  {
    id: '5.3',
    icon: Mail,
    title: 'Hybrid Email & Newsletter Strategy',
    description: 'AI handles segmentation and send-time optimization, while specialists curate content in an editorial style that feels like a direct line to leadership.',
    outcome: 'A high-open-rate channel that drives loyalty and sales — not another ignored blast.',
    metrics: [
      { label: 'Open Rate', value: 84 },
      { label: 'Click-Through Rate', value: 76 },
      { label: 'Unsubscribe Rate', value: 97 },
    ],
  },
  {
    id: '5.4',
    icon: Search,
    title: 'Strategic Content & SEO (E-E-A-T)',
    description: 'AI identifies gaps and optimizes structure, while human expertise is captured via interviews to produce authoritative guides that rank and convert.',
    outcome: 'Sustainable organic growth built on content that establishes your authority and converts visitors.',
    metrics: [
      { label: 'Keyword Rankings', value: 89 },
      { label: 'E-E-A-T Score', value: 93 },
      { label: 'Organic Conversion', value: 78 },
    ],
  },
];

export default function DigitalMarketingService() {
  return (
    <div className="flex flex-col min-h-screen bg-white">

      <section className="border-b border-slate-100 bg-slate-50/60 pt-20 pb-10 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <Link href="/services" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-900 mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Services
          </Link>
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600">
                <Sparkles className="h-7 w-7" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">MKT · Service 05</span>
                  <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live
                  </span>
                </div>
                <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">Digital Marketing</h1>
                <p className="text-slate-500 text-sm mt-1">Human creativity amplified by AI efficiency.</p>
              </div>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-rose-700 transition-colors shrink-0">
              Boost your marketing <ArrowRight className="h-4 w-4" />
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
                      <div className="h-9 w-9 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600">
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
                              className="h-full rounded-full bg-rose-500"
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
            <h2 className="text-2xl font-bold text-white mb-2">Ready to connect and convert?</h2>
            <p className="text-slate-400 text-sm">Let&apos;s deploy a hybrid marketing model that genuinely connects with your audience.</p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-rose-600 px-6 py-3 text-sm font-semibold text-white hover:bg-rose-700 transition-colors shrink-0">
            Boost your marketing <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
