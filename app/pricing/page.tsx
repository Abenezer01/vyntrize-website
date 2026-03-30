import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50 -z-10"></div>
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700 mb-6 uppercase tracking-wider">
            Pricing Plans
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 max-w-4xl mx-auto leading-tight">
            Simple, Transparent <span className="text-blue-600">Pricing</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Choose the perfect plan for your business. No hidden fees, cancel anytime.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {/* Starter Plan */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Starter</h3>
                <p className="text-slate-500 text-sm">Perfect for small businesses just getting started with AI.</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-slate-900">$499</span>
                <span className="text-slate-500 font-medium">/month</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" />
                  <span>Basic AI Search Implementation</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" />
                  <span>Up to 5 Automated Workflows</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" />
                  <span>Standard Reputation Monitoring</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" />
                  <span>Email Support</span>
                </li>
              </ul>
              <Link href="/contact" className="w-full rounded-md border-2 border-slate-200 bg-white py-3 text-center font-bold text-slate-900 hover:border-slate-300 hover:bg-slate-50 transition-colors">
                Get Started
              </Link>
            </div>

            {/* Professional Plan */}
            <div className="rounded-2xl border-2 border-blue-600 bg-white p-8 shadow-xl relative flex flex-col transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Most Popular
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Professional</h3>
                <p className="text-slate-500 text-sm">Ideal for growing companies needing advanced automation.</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-slate-900">$999</span>
                <span className="text-slate-500 font-medium">/month</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" />
                  <span className="font-medium">Everything in Starter, plus:</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" />
                  <span>Advanced AI Search & Analytics</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" />
                  <span>Unlimited Automated Workflows</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" />
                  <span>Proactive Reputation Management</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" />
                  <span>Priority 24/7 Support</span>
                </li>
              </ul>
              <Link href="/contact" className="w-full rounded-md bg-blue-600 py-3 text-center font-bold text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                Get Started
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Enterprise</h3>
                <p className="text-slate-500 text-sm">Custom solutions for large organizations with complex needs.</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-slate-900">Custom</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" />
                  <span className="font-medium">Everything in Professional, plus:</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" />
                  <span>Custom Software Development</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" />
                  <span>Dedicated Account Manager</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" />
                  <span>On-premise Deployment Options</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" />
                  <span>Custom SLA</span>
                </li>
              </ul>
              <Link href="/contact" className="w-full rounded-md border-2 border-slate-200 bg-white py-3 text-center font-bold text-slate-900 hover:border-slate-300 hover:bg-slate-50 transition-colors">
                Contact Sales
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 md:px-6 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Have questions about our pricing? We&apos;re here to help.</p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h4 className="text-lg font-bold text-slate-900 mb-3">Can I switch plans later?</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we&apos;ll prorate any billing adjustments.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h4 className="text-lg font-bold text-slate-900 mb-3">Do you offer a free trial?</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Yes, we offer a 14-day free trial for our Starter and Professional plans so you can experience the platform before committing.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h4 className="text-lg font-bold text-slate-900 mb-3">What payment methods do you accept?</h4>
              <p className="text-slate-600 text-sm leading-relaxed">We accept all major credit cards (Visa, Mastercard, American Express) as well as PayPal and wire transfers for annual Enterprise plans.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 md:px-6 bg-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join hundreds of businesses that are already using VyntRise to accelerate their growth.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-sm font-bold text-blue-600 hover:bg-slate-50 transition-colors shadow-lg">
            Start Your Free Trial
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
