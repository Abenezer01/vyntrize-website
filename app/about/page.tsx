'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowRight, Check, X, Lightbulb, Zap, BarChart3, Target, Heart } from 'lucide-react';

/* ── Animated counter ── */
function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const step = 16;
    const increment = to / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= to) { setVal(to); clearInterval(timer); }
      else setVal(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [inView, to]);

  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

const principles = [
  {
    icon: Lightbulb,
    title: 'Simplicity over complexity',
    body: 'We strip away the noise. Every solution we build is designed to be understood and used — not just deployed.',
    tag: '// clarity first',
  },
  {
    icon: BarChart3,
    title: 'Strategy over guesswork',
    body: 'Every decision is guided by data. We help businesses understand their customers deeply and act with confidence.',
    tag: '// data-driven always',
  },
  {
    icon: Zap,
    title: 'Results over noise',
    body: 'We measure success by the outcomes our clients achieve — more customers, better retention, smarter operations.',
    tag: '// outcomes, not outputs',
  },
  {
    icon: Heart,
    title: 'Built for the underdog',
    body: 'Growth should not be limited by size, resources, or technical knowledge. We level the playing field.',
    tag: '// SMBs deserve enterprise tools',
  },
];

const whoWeServe = [
  { label: 'Entrepreneurs starting their journey', icon: '🚀' },
  { label: 'Small & medium businesses ready to scale', icon: '📈' },
  { label: 'Business owners who want smarter growth', icon: '🧠' },
];

const whatWeDo = [
  { label: 'Understand customer behavior through data & insights', color: 'bg-blue-500' },
  { label: 'Optimize online presence to increase visibility & trust', color: 'bg-violet-500' },
  { label: 'Automate marketing & engagement to save time', color: 'bg-emerald-500' },
  { label: 'Provide actionable strategies that drive measurable results', color: 'bg-amber-500' },
];

const vision = [
  { label: 'Every business understands its customers deeply' },
  { label: 'Every decision is guided by clear data' },
  { label: 'Every entrepreneur has access to powerful growth systems' },
];

const comparison = [
  { label: 'Results in < 30 days', us: true, them: false },
  { label: 'Outcome-based pricing', us: true, them: false },
  { label: 'Explainable AI systems', us: true, them: false },
  { label: 'Dedicated success manager', us: true, them: false },
  { label: 'Built for small businesses', us: true, them: false },
  { label: 'Lock-in annual contracts', us: false, them: true },
  { label: 'Enterprise-only pricing', us: false, them: true },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* ── 1. Header ── */}
      <section className="border-b border-slate-100 bg-slate-50/60 pt-20 pb-12 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="github-badge mb-4">OUR STORY</div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 leading-tight">
              Helping businesses{' '}
              <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-blue-500 bg-clip-text text-transparent">
                rise.
              </span>
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
              VyntRise was built on a simple realization: small businesses are the backbone of the economy, yet most operate without the tools, insights, and systems they need to truly grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Stats ── */}
      <section className="border-b border-slate-100 bg-white px-4 md:px-6 py-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Businesses empowered', to: 500, suffix: '+', color: 'text-blue-600' },
              { label: 'Tasks automated', to: 1000000, suffix: '+', color: 'text-violet-600' },
              { label: 'Client satisfaction', to: 99, suffix: '%', color: 'text-emerald-600' },
              { label: 'Avg. ROI increase', to: 3, suffix: '.5x', color: 'text-amber-600' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">{s.label}</p>
                <p className={`text-3xl font-extrabold ${s.color}`}>
                  <Counter to={s.to} suffix={s.suffix} />
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Origin story + What we do ── */}
      <section className="px-4 md:px-6 py-16 border-b border-slate-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">How it started</p>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-5 leading-tight">We saw the gap. We set out to close it.</h2>
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>
                  Behind every local shop, service provider, or startup is an entrepreneur working tirelessly — often managing everything alone. Despite their effort, many struggle with the same challenges: attracting the right customers, retaining them, and making data-driven decisions.
                </p>
                <p>
                  Instead of accepting that gap, we built VyntRise to bring clarity, automation, and intelligence into the hands of small business owners — helping them compete at a level once reserved for larger companies.
                </p>
                <p>
                  We don&apos;t just provide tools. We create systems that work together to help businesses operate smarter, not harder.
                </p>
              </div>
            </div>

            {/* What we do card */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              <div className="border-b border-slate-100 bg-slate-50 px-5 py-3">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">What we do</p>
              </div>
              <div className="p-5 space-y-3">
                {whatWeDo.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.07 }}
                    className="flex items-start gap-3"
                  >
                    <div className={`mt-1.5 h-2 w-2 rounded-full shrink-0 ${item.color}`} />
                    <p className="text-sm text-slate-700 leading-relaxed">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Mission + Vision ── */}
      <section className="px-4 md:px-6 py-16 border-b border-slate-100 bg-slate-50/40">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6">

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Our Mission</p>
              <h3 className="text-xl font-extrabold text-slate-900 mb-4 leading-snug">
                Empower small businesses with the technology, insights, and systems they need to unlock their full potential.
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                We believe growth should not be limited by size, resources, or technical knowledge. Every business deserves access to enterprise-grade tools — and the results that come with them.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-2xl border border-slate-200 bg-slate-900 p-7 shadow-sm"
            >
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">Our Vision</p>
              <h3 className="text-xl font-extrabold text-white mb-5 leading-snug">
                A future where small businesses are no longer at a disadvantage.
              </h3>
              <ul className="space-y-3">
                {vision.map((v, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                    <Check className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                    {v.label}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 5. Principles ── */}
      <section className="px-4 md:px-6 py-16 border-b border-slate-100">
        <div className="container mx-auto max-w-6xl">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Why VyntRise</p>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-10">What sets us apart</h2>
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
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-blue-200 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-9 w-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
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

      {/* ── 6. Who we serve ── */}
      <section className="px-4 md:px-6 py-16 border-b border-slate-100 bg-slate-50/40">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Who we serve</p>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-5">Built for builders</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                VyntRise is designed for the people who show up every day and do the work — entrepreneurs, operators, and owners who want smarter, more efficient growth without the enterprise price tag.
              </p>
              <div className="space-y-3">
                {whoWeServe.map((w, i) => (
                  <motion.div
                    key={w.label}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
                  >
                    <span className="text-xl">{w.icon}</span>
                    <span className="text-sm font-medium text-slate-700">{w.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Looking ahead card */}
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-7">
              <p className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-3">Looking ahead</p>
              <h3 className="text-xl font-extrabold text-slate-900 mb-4 leading-snug">
                We are just getting started.
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                As technology evolves, so will we — continuously building smarter solutions that help businesses grow faster, operate better, and compete stronger.
              </p>
              <p className="text-sm font-semibold text-blue-700">
                Because at the end of the day, VyntRise is not just about software. It&apos;s about helping businesses rise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Built different ── */}
      <section className="px-4 md:px-6 py-16 border-b border-slate-100">
        <div className="container mx-auto max-w-6xl">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Built different</p>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-10">VyntRise vs. the typical agency</h2>
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="grid grid-cols-[1fr_100px_100px] border-b border-slate-100 bg-slate-50 px-6 py-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">What you get</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 text-center">VyntRise</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 text-center">Typical Agency</span>
            </div>
            {comparison.map((row, i) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className={`grid grid-cols-[1fr_100px_100px] px-6 py-3.5 items-center ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}`}
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

      {/* ── 8. CTA ── */}
      <section className="px-4 md:px-6 py-16 bg-slate-900">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-white mb-3">Ready to rise?</h2>
            <p className="text-slate-400 max-w-md text-sm">
              Tell us where you are and where you want to go. We&apos;ll map the path and get you there.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
              Get started <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
              Explore services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
