import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Search, BarChart3, MessageSquare, Globe, Shield, Zap } from 'lucide-react';

export default function AISearchService() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-slate-50 pt-20 pb-24 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <Link href="/services" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
          </Link>
          <div className="github-badge mb-6">SERVICE OFFERING 1</div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            AI Search & Reputation Optimization (AISO)
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            Dominate search results and build unbreakable trust. We combine AI-powered search optimization with centralized reputation management to ensure customers find you and choose you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-16">
            
            {/* 1.1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                  <Globe className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1.1 AI-Driven Local & Organic SEO</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Move beyond basic keywords. We use AI to analyze search intent, optimize your content and site structure for E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness), and secure high-value local citations and backlinks through strategic PR.
                </p>
                <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4">
                  <p className="text-emerald-800 font-bold text-sm uppercase tracking-wider mb-1">Outcome</p>
                  <p className="text-emerald-700 text-sm">Rank higher for what matters, attract qualified traffic, and establish unmatched topical authority.</p>
                </div>
              </div>
              <div className="rounded-2xl bg-slate-100 aspect-video flex items-center justify-center">
                <Search className="h-12 w-12 text-slate-300" />
              </div>
            </div>

            {/* 1.2 & 1.5 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 rounded-2xl bg-slate-100 aspect-video flex items-center justify-center">
                <BarChart3 className="h-12 w-12 text-slate-300" />
              </div>
              <div className="order-1 md:order-2">
                <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                  <Zap className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1.2 Review Aggregation & Centralization</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Stop checking 10 different sites. We build a unified dashboard that pulls and monitors reviews from Google, Yelp, Facebook, Glassdoor, and industry-specific platforms into one command center.
                </p>
                <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4">
                  <p className="text-emerald-800 font-bold text-sm uppercase tracking-wider mb-1">Outcome</p>
                  <p className="text-emerald-700 text-sm">Instantly understand your reputation landscape, track sentiment trends, and never miss customer feedback.</p>
                </div>
              </div>
            </div>

            {/* 1.3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1.3 Intelligent Review Response & Profile Management</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Maintain an impeccable online presence. Our system uses AI to draft context-aware response suggestions for new reviews and ensures your business data (NAP) is consistent everywhere.
                </p>
                <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4">
                  <p className="text-emerald-800 font-bold text-sm uppercase tracking-wider mb-1">Outcome</p>
                  <p className="text-emerald-700 text-sm">Professionally managed reputation that builds social proof, improves local SEO, and turns feedback into growth.</p>
                </div>
              </div>
              <div className="rounded-2xl bg-slate-100 aspect-video flex items-center justify-center">
                <CheckCircle2 className="h-12 w-12 text-slate-300" />
              </div>
            </div>

            {/* 1.4 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 rounded-2xl bg-slate-100 aspect-video flex items-center justify-center">
                <Shield className="h-12 w-12 text-slate-300" />
              </div>
              <div className="order-1 md:order-2">
                <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1.4 Insight-Driven Reputation Audits</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Uncover hidden opportunities and risks. We provide deep-dive reports analyzing review themes, competitor reputation gaps, and profile completeness to inform your strategy.
                </p>
                <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4">
                  <p className="text-emerald-800 font-bold text-sm uppercase tracking-wider mb-1">Outcome</p>
                  <p className="text-emerald-700 text-sm">Actionable insights to improve customer experience, competitive positioning, and conversion rates.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 text-white px-4 md:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Dominate Search?</h2>
          <p className="text-lg text-slate-400 mb-10">
            Let&apos;s build your unbreakable online reputation and drive more traffic to your business.
          </p>
          <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-8 font-medium text-white hover:bg-blue-700 transition-colors">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
