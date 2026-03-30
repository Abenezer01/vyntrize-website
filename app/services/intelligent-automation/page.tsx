import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Bot, Database, Zap, Users, Settings, Code } from 'lucide-react';

export default function IntelligentAutomationService() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-slate-50 pt-20 pb-24 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <Link href="/services" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
          </Link>
          <div className="github-badge mb-6">SERVICE OFFERING 2</div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            Intelligent AI & Automation
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            Transform tools into active team members. We architect autonomous agents and intelligent workflows that perceive context, make decisions, and execute tasks.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-16">
            
            {/* 2.1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                  <Users className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2.1 Autonomous Lead & Sales Agents</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Leads decay in minutes. Manual follow-up is slow, inconsistent, and fails to qualify effectively. Our AI agents engage, qualify, and act in real-time.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="mr-2 h-5 w-5 text-emerald-500 shrink-0" /> Lead-to-Book Agents (Forms, Chats, Emails)</li>
                  <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="mr-2 h-5 w-5 text-emerald-500 shrink-0" /> CRM Sentinel Agent (Summarizes sales calls)</li>
                </ul>
                <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4">
                  <p className="text-emerald-800 font-bold text-sm uppercase tracking-wider mb-1">Outcome</p>
                  <p className="text-emerald-700 text-sm">Convert more leads, improve sales team efficiency, and never miss a high-intent prospect.</p>
                </div>
              </div>
              <div className="rounded-2xl bg-slate-100 aspect-video flex items-center justify-center">
                <Bot className="h-12 w-12 text-slate-300" />
              </div>
            </div>

            {/* 2.2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 rounded-2xl bg-slate-100 aspect-video flex items-center justify-center">
                <Database className="h-12 w-12 text-slate-300" />
              </div>
              <div className="order-1 md:order-2">
                <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                  <Zap className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2.2 Internal Knowledge & Operations Agents</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Tribal knowledge is lost. Employees waste hours searching through drives, PDFs, and legacy docs for answers. Secure, company-specific AI &quot;brains&quot; provide instant, accurate answers.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="mr-2 h-5 w-5 text-emerald-500 shrink-0" /> RAG-Powered Knowledge Brain</li>
                  <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="mr-2 h-5 w-5 text-emerald-500 shrink-0" /> Procedural Guidance Agent</li>
                </ul>
                <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4">
                  <p className="text-emerald-800 font-bold text-sm uppercase tracking-wider mb-1">Outcome</p>
                  <p className="text-emerald-700 text-sm">Drastically reduce training time, ensure policy compliance, and preserve institutional knowledge.</p>
                </div>
              </div>
            </div>

            {/* 2.3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                  <Settings className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2.3 Multi-Agent Workflow Orchestration</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Single AI tools still require heavy human direction. We design and deploy coordinated &quot;crews&quot; of specialized AI agents that hand off tasks to complete entire workflows autonomously.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="mr-2 h-5 w-5 text-emerald-500 shrink-0" /> Marketing Content Crew</li>
                  <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="mr-2 h-5 w-5 text-emerald-500 shrink-0" /> Customer Onboarding Crew</li>
                </ul>
                <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4">
                  <p className="text-emerald-800 font-bold text-sm uppercase tracking-wider mb-1">Outcome</p>
                  <p className="text-emerald-700 text-sm">Achieve complex, multi-step outcomes autonomously—scaling output without scaling headcount.</p>
                </div>
              </div>
              <div className="rounded-2xl bg-slate-100 aspect-video flex items-center justify-center">
                <Users className="h-12 w-12 text-slate-300" />
              </div>
            </div>

            {/* 2.4 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 rounded-2xl bg-slate-100 aspect-video flex items-center justify-center">
                <Code className="h-12 w-12 text-slate-300" />
              </div>
              <div className="order-1 md:order-2">
                <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                  <Zap className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2.4 Intelligent Process Automation</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Basic no-code automation lacks judgment. We infuse AI decision-points into critical business processes like invoice processing and support triage.
                </p>
                <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4">
                  <p className="text-emerald-800 font-bold text-sm uppercase tracking-wider mb-1">Outcome</p>
                  <p className="text-emerald-700 text-sm">Automate not just the task, but the decision-making within the task, handling exceptions intelligently.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 text-white px-4 md:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Automate Your Growth?</h2>
          <p className="text-lg text-slate-400 mb-10">
            Let&apos;s architect intelligent workflows that turn your software stack into a proactive engine.
          </p>
          <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-8 font-medium text-white hover:bg-blue-700 transition-colors">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
