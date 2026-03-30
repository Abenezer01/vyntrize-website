import { ArrowRight, CheckCircle2, BarChart3, Shield, Zap, Globe } from 'lucide-react';
import Link from 'next/link';

export default function SolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50 -z-10"></div>
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="github-badge mb-6">
            Industry Solutions
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 max-w-4xl mx-auto leading-tight">
            Tailored Solutions for <span className="text-blue-600">Your Industry</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover how VyntRise helps businesses across various sectors overcome unique challenges and achieve sustainable growth through AI and automation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto rounded-md bg-blue-600 px-8 py-4 text-sm font-bold text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
              Discuss Your Needs
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Healthcare */}
            <div className="notion-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Healthcare</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Streamline patient intake, automate appointment scheduling, and improve online reputation to attract more patients.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" />
                  <span>HIPAA-compliant automation</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" />
                  <span>Patient feedback management</span>
                </li>
              </ul>
            </div>

            {/* E-commerce */}
            <div className="notion-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">E-commerce</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Enhance product discovery with AI search, automate customer support, and optimize inventory management.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" />
                  <span>Intelligent product recommendations</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" />
                  <span>24/7 automated customer service</span>
                </li>
              </ul>
            </div>

            {/* Financial Services */}
            <div className="notion-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Financial Services</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Automate compliance reporting, streamline client onboarding, and build trust through proactive reputation management.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" />
                  <span>Secure document processing</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" />
                  <span>Automated risk assessment</span>
                </li>
              </ul>
            </div>

            {/* Real Estate */}
            <div className="notion-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Real Estate</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Automate lead qualification, schedule viewings instantly, and manage property listings with AI-powered tools.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" />
                  <span>Instant lead response</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" />
                  <span>Automated property matching</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-6 bg-slate-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Don&apos;t see your industry?</h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Our AI and automation solutions are highly adaptable. Contact us to discuss how we can tailor our technology to your specific business needs.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-4 text-sm font-bold text-white hover:bg-blue-500 transition-colors">
            Get a Custom Solution
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
