import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Play, Users, Mail, Search, Sparkles, MessageSquare } from 'lucide-react';

export default function DigitalMarketingService() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-slate-50 pt-20 pb-24 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <Link href="/services" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
          </Link>
          <div className="github-badge mb-6">SERVICE OFFERING 5</div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            Digital Marketing
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            Where authentic human expertise meets AI efficiency. We deploy a strategic hybrid model: leveraging AI for scale while injecting human insight and creativity.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-16">
            
            {/* 5.1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                  <Play className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5.1 Authentic Storytelling Video Service</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Generic AI avatars feel cold. We use a blended production process: a Content Coach extracts your stories (Human Core), while AI tools optimize and edit (AI Amplifier).
                </p>
                <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4">
                  <p className="text-emerald-800 font-bold text-sm uppercase tracking-wider mb-1">Outcome</p>
                  <p className="text-emerald-700 text-sm">A consistent pipeline of authentic, high-quality video content that builds rapport and authority.</p>
                </div>
              </div>
              <div className="rounded-2xl bg-slate-100 aspect-video flex items-center justify-center">
                <Play className="h-12 w-12 text-slate-300" />
              </div>
            </div>

            {/* 5.2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 rounded-2xl bg-slate-100 aspect-video flex items-center justify-center">
                <Users className="h-12 w-12 text-slate-300" />
              </div>
              <div className="order-1 md:order-2">
                <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5.2 &quot;AI-Proof&quot; Community Management</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Automated bot comments damage reputation. We use AI to monitor conversations (AI Sentinel) and human Community Managers to craft personalized responses (Human Ambassador).
                </p>
                <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4">
                  <p className="text-emerald-800 font-bold text-sm uppercase tracking-wider mb-1">Outcome</p>
                  <p className="text-emerald-700 text-sm">A loyal, engaged following and a protected, positive brand reputation online.</p>
                </div>
              </div>
            </div>

            {/* 5.3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                  <Mail className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5.3 Hybrid Email & Newsletter Strategy</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Over-automated blasts get ignored. We use AI for segmentation and optimization, while our specialists curate content in an editorial style.
                </p>
                <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4">
                  <p className="text-emerald-800 font-bold text-sm uppercase tracking-wider mb-1">Outcome</p>
                  <p className="text-emerald-700 text-sm">A high-open-rate channel that drives loyalty and sales, feeling like a direct line to leadership.</p>
                </div>
              </div>
              <div className="rounded-2xl bg-slate-100 aspect-video flex items-center justify-center">
                <Mail className="h-12 w-12 text-slate-300" />
              </div>
            </div>

            {/* 5.4 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 rounded-2xl bg-slate-100 aspect-video flex items-center justify-center">
                <Search className="h-12 w-12 text-slate-300" />
              </div>
              <div className="order-1 md:order-2">
                <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5.4 Strategic Content & SEO (E-E-A-T)</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Content engineered for both algorithms and humans. AI identifies gaps and optimizes, while human expertise is captured via interviews for authoritative guides.
                </p>
                <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4">
                  <p className="text-emerald-800 font-bold text-sm uppercase tracking-wider mb-1">Outcome</p>
                  <p className="text-emerald-700 text-sm">Sustainable organic growth built on content that establishes your authority and converts visitors.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 text-white px-4 md:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Connect and Convert?</h2>
          <p className="text-lg text-slate-400 mb-10">
            Let&apos;s deploy a strategic hybrid marketing model that genuinely connects with your audience.
          </p>
          <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-8 font-medium text-white hover:bg-blue-700 transition-colors">
            Boost Your Marketing
          </Link>
        </div>
      </section>
    </div>
  );
}
