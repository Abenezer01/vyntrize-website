import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Database, Zap, Shield, BarChart3, Settings, Table } from 'lucide-react';

export default function DataArchitectureService() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-slate-50 pt-20 pb-24 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <Link href="/services" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
          </Link>
          <div className="github-badge mb-6">SERVICE OFFERING 4</div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            Data Architecture & Analytics
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            Turn chaotic data into your most valuable asset. We organize, connect, and activate your scattered data—transforming it into a clear source of truth.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-16">
            
            {/* 4.1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                  <Table className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4.1 &quot;Spreadsheet to Engine&quot; Migration</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Your business runs on a fragile, slow &quot;Frankenstein&quot; spreadsheet. We architect and migrate your core operational data to a proper database.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="mr-2 h-5 w-5 text-emerald-500 shrink-0" /> Structured Data Modeling</li>
                  <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="mr-2 h-5 w-5 text-emerald-500 shrink-0" /> Web-based Data Interfaces</li>
                </ul>
                <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4">
                  <p className="text-emerald-800 font-bold text-sm uppercase tracking-wider mb-1">Outcome</p>
                  <p className="text-emerald-700 text-sm">Your core operations become fast, reliable, and multi-user friendly.</p>
                </div>
              </div>
              <div className="rounded-2xl bg-slate-100 aspect-video flex items-center justify-center">
                <Database className="h-12 w-12 text-slate-300" />
              </div>
            </div>

            {/* 4.2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 rounded-2xl bg-slate-100 aspect-video flex items-center justify-center">
                <Zap className="h-12 w-12 text-slate-300" />
              </div>
              <div className="order-1 md:order-2">
                <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                  <Zap className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4.2 Universal Data Connector & Syncing</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Data is trapped in silos. We build automated, bi-directional pipelines between your critical tools like CRM, accounting, and e-commerce.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="mr-2 h-5 w-5 text-emerald-500 shrink-0" /> Lead-to-Cash Journey Automation</li>
                  <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="mr-2 h-5 w-5 text-emerald-500 shrink-0" /> Centralized &quot;Business Ledger&quot;</li>
                </ul>
                <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4">
                  <p className="text-emerald-800 font-bold text-sm uppercase tracking-wider mb-1">Outcome</p>
                  <p className="text-emerald-700 text-sm">Real-time operational harmony and automated record-keeping.</p>
                </div>
              </div>
            </div>

            {/* 4.3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                  <Shield className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4.3 Data Cleansing & Governance</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Duplicates and inconsistent formatting cripple reporting. We perform a deep clean followed by systems to keep data pristine.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="mr-2 h-5 w-5 text-emerald-500 shrink-0" /> Historical Data &quot;Deep Clean&quot;</li>
                  <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="mr-2 h-5 w-5 text-emerald-500 shrink-0" /> Future-Proof Governance Checks</li>
                </ul>
                <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4">
                  <p className="text-emerald-800 font-bold text-sm uppercase tracking-wider mb-1">Outcome</p>
                  <p className="text-emerald-700 text-sm">Trust in your data quality for accurate forecasting and reliable operations.</p>
                </div>
              </div>
              <div className="rounded-2xl bg-slate-100 aspect-video flex items-center justify-center">
                <BarChart3 className="h-12 w-12 text-slate-300" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 text-white px-4 md:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Activate Your Data?</h2>
          <p className="text-lg text-slate-400 mb-10">
            Let&apos;s transform your scattered data into a clear, actionable source of truth.
          </p>
          <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-8 font-medium text-white hover:bg-blue-700 transition-colors">
            Get Data Audit
          </Link>
        </div>
      </section>
    </div>
  );
}
