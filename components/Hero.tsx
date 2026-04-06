'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-white px-4 text-center">

      {/* Background gradient mesh */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-[radial-gradient(ellipse_at_top,_#dbeafe_0%,_transparent_70%)] opacity-70 blur-3xl" />
        <div className="absolute left-1/4 bottom-0 h-[400px] w-[600px] rounded-full bg-[radial-gradient(ellipse_at_bottom,_#ede9fe_0%,_transparent_70%)] opacity-50 blur-3xl" />
        {/* Subtle dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,_#94a3b820_1px,_transparent_1px)] bg-[size:28px_28px]" />
      </div>

      {/* Announcement badge */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Link
          href="/services/ai-search"
          className="group mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 text-sm text-slate-600 shadow-sm backdrop-blur-sm hover:border-slate-300 transition-colors"
        >
          <span className="flex items-center gap-1.5 rounded-full bg-blue-600 px-2 py-0.5 text-[11px] font-semibold text-white">
            <Sparkles className="h-3 w-3" /> New
          </span>
          Introducing AI-powered reputation management
          <ChevronRight className="h-4 w-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl md:text-7xl leading-[1.05]"
      >
        Scale your business with{' '}
        <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-blue-500 bg-clip-text text-transparent">
          intelligent AI
        </span>
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mt-6 max-w-2xl text-lg text-slate-500 leading-relaxed"
      >
        VyntRise automates your operations, protects your reputation, and drives measurable growth — so your team can focus on what actually matters.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="mt-10 flex flex-col sm:flex-row items-center gap-4"
      >
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-700 transition-colors"
        >
          Get started free
          <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
        >
          See how it works
        </Link>
      </motion.div>

      {/* Social proof */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="mt-16 flex flex-col items-center gap-4"
      >
        <div className="flex -space-x-2">
          {['bg-blue-400', 'bg-violet-400', 'bg-emerald-400', 'bg-amber-400', 'bg-rose-400'].map((color, i) => (
            <div
              key={i}
              className={`h-8 w-8 rounded-full border-2 border-white ${color}`}
            />
          ))}
        </div>
        <p className="text-sm text-slate-500">
          Trusted by <span className="font-semibold text-slate-800">500+ businesses</span> worldwide
        </p>
      </motion.div>

      {/* Product preview card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="mt-16 w-full max-w-3xl"
      >
        <div className="rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60 overflow-hidden">
          {/* Fake browser chrome */}
          <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-amber-400" />
            <div className="h-3 w-3 rounded-full bg-emerald-400" />
            <div className="mx-auto flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1 text-xs text-slate-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              app.vyntrise.com
            </div>
          </div>
          {/* Dashboard mockup */}
          <div className="grid grid-cols-3 gap-4 p-6 bg-slate-50/50">
            {[
              { label: 'Reputation Score', value: '94', delta: '+12%', color: 'text-emerald-600' },
              { label: 'Automations Run', value: '1,284', delta: '+340 today', color: 'text-blue-600' },
              { label: 'Avg. ROI', value: '3.5x', delta: 'this quarter', color: 'text-violet-600' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs text-slate-400 mb-1">{stat.label}</p>
                <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                <p className="text-xs text-slate-400 mt-1">{stat.delta}</p>
              </div>
            ))}
            <div className="col-span-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-xs text-slate-400 mb-3">Activity — last 7 days</p>
              <div className="flex items-end gap-1.5 h-12">
                {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-blue-100"
                    style={{ height: `${h}%` }}
                  >
                    <div
                      className="w-full rounded-sm bg-blue-500"
                      style={{ height: `${h * 0.6}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
