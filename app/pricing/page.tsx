'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, X, ArrowRight, Zap, ChevronDown, ChevronUp } from 'lucide-react';

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    desc: 'For small businesses ready to put AI to work.',
    monthly: 499,
    annual: 399,
    cta: 'Start free trial',
    ctaHref: '/contact',
    highlight: false,
    features: [
      'AI Search & Reputation (1 location)',
      'Up to 5 automated workflows',
      'Review centralization (3 platforms)',
      'Monthly reputation report',
      'Email support',
      '99.9% uptime SLA',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    desc: 'For growing teams that need serious automation.',
    monthly: 999,
    annual: 799,
    cta: 'Start free trial',
    ctaHref: '/contact',
    highlight: true,
    badge: 'Most popular',
    features: [
      'Everything in Starter, plus:',
      'AI Search & Reputation (up to 5 locations)',
      'Unlimited automated workflows',
      'Multi-agent orchestration',
      'Knowledge Brain (RAG) — 1 instance',
      'Review centralization (all platforms)',
      'Weekly analytics dashboard',
      'Priority 24/7 support',
      'Dedicated onboarding specialist',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    desc: 'Custom infrastructure for complex organizations.',
    monthly: null,
    annual: null,
    cta: 'Talk to sales',
    ctaHref: '/contact',
    highlight: false,
    features: [
      'Everything in Professional, plus:',
      'Unlimited locations',
      'Custom software development',
      'Bespoke AI integrations',
      'Data architecture & pipelines',
      'On-premise deployment option',
      'Dedicated account manager',
      'Custom SLA & compliance docs',
      'Quarterly business reviews',
    ],
  },
];

const featureRows = [
  {
    category: 'AI Search & Reputation', rows: [
      { label: 'Locations covered', starter: '1', pro: 'Up to 5', enterprise: 'Unlimited' },
      { label: 'Review platforms', starter: '3', pro: 'All', enterprise: 'All + custom' },
      { label: 'AI response drafting', starter: true, pro: true, enterprise: true },
      { label: 'Reputation audits', starter: 'Monthly', pro: 'Weekly', enterprise: 'Real-time' },
      { label: 'Competitor gap analysis', starter: false, pro: true, enterprise: true },
    ]
  },
  {
    category: 'Automation', rows: [
      { label: 'Automated workflows', starter: 'Up to 5', pro: 'Unlimited', enterprise: 'Unlimited' },
      { label: 'Multi-agent orchestration', starter: false, pro: true, enterprise: true },
      { label: 'Knowledge Brain (RAG)', starter: false, pro: '1 instance', enterprise: 'Unlimited' },
      { label: 'Custom AI integrations', starter: false, pro: false, enterprise: true },
      { label: 'Process automation (IPA)', starter: false, pro: true, enterprise: true },
    ]
  },
  {
    category: 'Data & Analytics', rows: [
      { label: 'Analytics dashboard', starter: 'Monthly', pro: 'Weekly', enterprise: 'Real-time' },
      { label: 'Data pipeline connectors', starter: false, pro: '5', enterprise: 'Unlimited' },
      { label: 'Custom reporting', starter: false, pro: false, enterprise: true },
      { label: 'Data governance tools', starter: false, pro: false, enterprise: true },
    ]
  },
  {
    category: 'Support & Security', rows: [
      { label: 'Support channel', starter: 'Email', pro: '24/7 priority', enterprise: 'Dedicated manager' },
      { label: 'Onboarding', starter: 'Self-serve', pro: 'Specialist', enterprise: 'White-glove' },
      { label: 'Uptime SLA', starter: '99.9%', pro: '99.9%', enterprise: 'Custom' },
      { label: 'SOC 2 / HIPAA compliance', starter: false, pro: true, enterprise: true },
      { label: 'On-premise deployment', starter: false, pro: false, enterprise: true },
    ]
  },
];

const faqs = [
  {
    q: 'Can I switch plans at any time?',
    a: 'Yes. Upgrades take effect immediately and are prorated. Downgrades apply at the next billing cycle.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Starter and Professional both include a 14-day free trial — no credit card required.',
  },
  {
    q: 'What counts as a "location"?',
    a: 'A location is a distinct business address with its own Google Business Profile and review presence.',
  },
  {
    q: 'How does annual billing work?',
    a: 'Annual plans are billed upfront for 12 months and save you ~20% compared to monthly billing.',
  },
  {
    q: 'What\'s included in Enterprise?',
    a: 'Enterprise is fully custom — we scope it around your specific needs, team size, compliance requirements, and growth goals.',
  },
];

function CellValue({ val }: { val: string | boolean }) {
  if (val === true) return <span className="flex justify-center"><Check className="h-4 w-4 text-emerald-500" /></span>;
  if (val === false) return <span className="flex justify-center"><X className="h-4 w-4 text-slate-300" /></span>;
  return <span className="text-xs text-slate-600 text-center block">{val}</span>;
}

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* ── Header ── */}
      <section className="border-b border-slate-100 bg-slate-50/60 pt-20 pb-12 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="github-badge mb-4">PRICING</div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 leading-tight">
            Simple, honest pricing
          </h1>
          <p className="text-lg text-slate-500 mb-10 max-w-xl">
            No hidden fees. No lock-in. Cancel anytime. Start with a 14-day free trial.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white p-1 shadow-sm">
            <button
              onClick={() => setAnnual(false)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${!annual ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all flex items-center gap-2 ${annual ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
            >
              Annual
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold transition-colors ${annual ? 'bg-emerald-500 text-white' : 'bg-emerald-100 text-emerald-700'}`}>
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ── Pricing cards ── */}
      <section className="px-4 md:px-6 pb-16">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-5 items-start">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`relative rounded-2xl flex flex-col overflow-hidden ${plan.highlight
                  ? 'bg-slate-900 text-white shadow-2xl shadow-slate-900/20 ring-1 ring-slate-900'
                  : 'bg-white border border-slate-200 shadow-sm'
                  }`}
              >
                {plan.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="flex items-center gap-1 rounded-full bg-blue-600 px-2.5 py-1 text-[10px] font-bold text-white">
                      <Zap className="h-3 w-3" /> {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-7 flex-1">
                  <h3 className={`text-lg font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
                  <p className={`text-sm mb-6 ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{plan.desc}</p>

                  {/* Price */}
                  <div className="mb-7">
                    {plan.monthly !== null ? (
                      <div className="flex items-end gap-1">
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={annual ? 'annual' : 'monthly'}
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.2 }}
                            className={`text-5xl font-extrabold tracking-tight ${plan.highlight ? 'text-white' : 'text-slate-900'}`}
                          >
                            ${annual ? plan.annual : plan.monthly}
                          </motion.span>
                        </AnimatePresence>
                        <span className={`mb-2 text-sm ${plan.highlight ? 'text-slate-400' : 'text-slate-400'}`}>/mo</span>
                      </div>
                    ) : (
                      <span className={`text-4xl font-extrabold ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>Custom</span>
                    )}
                    {plan.monthly !== null && annual && (
                      <p className="text-xs text-emerald-400 mt-1">Billed annually — save ${(plan.monthly! - plan.annual!) * 12}/yr</p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <Check className={`h-4 w-4 mt-0.5 shrink-0 ${plan.highlight ? 'text-blue-400' : 'text-emerald-500'}`} />
                        <span className={plan.highlight ? 'text-slate-300' : 'text-slate-600'}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    href={plan.ctaHref}
                    className={`flex w-full items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold transition-colors ${plan.highlight
                      ? 'bg-blue-600 text-white hover:bg-blue-500'
                      : 'border border-slate-200 bg-white text-slate-900 hover:bg-slate-50'
                      }`}
                  >
                    {plan.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature comparison table ── */}
      <section className="border-t border-slate-100 bg-slate-50/50 px-4 md:px-6 py-16">
        <div className="container mx-auto max-w-6xl">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Full comparison</p>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-8">Everything, side by side</h2>

          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            {/* Column headers */}
            <div className="grid grid-cols-[1fr_100px_100px_100px] border-b border-slate-100 bg-slate-50 px-6 py-3">
              <span />
              {plans.map((p) => (
                <span key={p.id} className={`text-[11px] font-bold text-center ${p.highlight ? 'text-blue-600' : 'text-slate-500'}`}>
                  {p.name}
                </span>
              ))}
            </div>

            {featureRows.map((section) => (
              <div key={section.category}>
                <div className="px-6 py-2.5 bg-slate-50 border-b border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{section.category}</span>
                </div>
                {section.rows.map((row, i) => (
                  <div
                    key={row.label}
                    className={`grid grid-cols-[1fr_100px_100px_100px] px-6 py-3 items-center border-b border-slate-50 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}`}
                  >
                    <span className="text-sm text-slate-700">{row.label}</span>
                    <CellValue val={row.starter} />
                    <CellValue val={row.pro} />
                    <CellValue val={row.enterprise} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="px-4 md:px-6 py-16 border-t border-slate-100">
        <div className="container mx-auto max-w-6xl">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">FAQ</p>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-8">Common questions</h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-white overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-slate-900">{faq.q}</span>
                  {openFaq === i
                    ? <ChevronUp className="h-4 w-4 text-slate-400 shrink-0" />
                    : <ChevronDown className="h-4 w-4 text-slate-400 shrink-0" />
                  }
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 text-sm text-slate-500 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-4 md:px-6 py-16 bg-slate-900">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-white mb-3">Not sure which plan fits?</h2>
            <p className="text-slate-400 max-w-md text-sm">
              Tell us about your business and we&apos;ll recommend the right starting point — no sales pressure.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
              Talk to us <ArrowRight className="h-4 w-4" />
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
