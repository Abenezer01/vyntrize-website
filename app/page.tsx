import Link from 'next/link';
import { ArrowRight, Play, Search, Bot, Code, CheckCircle2, Zap, ShieldCheck, Users, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 text-center px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="github-badge mb-8">
            <Zap className="mr-2 h-3 w-3" />
            AI-POWERED BUSINESS GROWTH PLATFORM
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            Transform Your Business with Intelligent Automation
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            VyntRise combines AI-driven reputation management, intelligent automation, and custom software solutions to help businesses scale faster and smarter.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-8 text-base font-medium text-white hover:bg-blue-700 transition-colors w-full sm:w-auto">
              Book a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="#" className="inline-flex h-12 items-center justify-center rounded-md border border-slate-200 bg-white px-8 text-base font-medium text-slate-900 hover:bg-slate-50 transition-colors w-full sm:w-auto">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="border-y border-slate-100 bg-slate-50/50 py-10">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-center text-sm font-semibold text-slate-500 mb-6 uppercase tracking-wider">Trusted by leading businesses</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
            <div className="h-8 w-32 bg-slate-300 rounded"></div>
            <div className="h-8 w-32 bg-slate-300 rounded"></div>
            <div className="h-8 w-32 bg-slate-300 rounded"></div>
            <div className="h-8 w-32 bg-slate-300 rounded"></div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="github-badge mb-4">
              OUR SERVICES
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Comprehensive Solutions for Modern Businesses</h2>
            <p className="text-lg text-slate-600">From AI-powered reputation management to custom software development, we provide end-to-end solutions that drive measurable results.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="notion-card">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI Search & Reputation</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">Dominate local search and manage your online reputation with AI-powered tools that monitor, optimize, and protect your brand 24/7.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="mr-2 h-5 w-5 text-emerald-500 shrink-0" /> Real-time review monitoring</li>
                <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="mr-2 h-5 w-5 text-emerald-500 shrink-0" /> SEO optimization & tracking</li>
                <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="mr-2 h-5 w-5 text-emerald-500 shrink-0" /> Sentiment analysis & alerts</li>
              </ul>
              <Link href="/services" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-700">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="notion-card">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Bot className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Intelligent Automation</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">Streamline operations and boost productivity with AI-driven automation that handles repetitive tasks, freeing your team for strategic work.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="mr-2 h-5 w-5 text-emerald-500 shrink-0" /> Workflow automation</li>
                <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="mr-2 h-5 w-5 text-emerald-500 shrink-0" /> Smart data processing</li>
                <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="mr-2 h-5 w-5 text-emerald-500 shrink-0" /> Integration with existing tools</li>
              </ul>
              <Link href="/services" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-700">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="notion-card">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Custom Software</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">Build scalable, secure software solutions tailored to your unique business needs with our expert development team.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="mr-2 h-5 w-5 text-emerald-500 shrink-0" /> Full-stack development</li>
                <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="mr-2 h-5 w-5 text-emerald-500 shrink-0" /> API & integration services</li>
                <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="mr-2 h-5 w-5 text-emerald-500 shrink-0" /> Ongoing support & maintenance</li>
              </ul>
              <Link href="/services" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-700">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">Why Leading Businesses Choose VyntRise</h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                We combine cutting-edge AI technology with proven business strategies to deliver measurable results. Our platform helps you automate operations, enhance customer experience, and drive sustainable growth.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-extrabold text-blue-600 mb-2">500+</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Businesses Served</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-blue-600 mb-2">98%</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-blue-600 mb-2">3.5x</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Avg. ROI Increase</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Rapid Implementation</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">Get up and running in days, not months. Our streamlined onboarding process ensures quick time-to-value.</p>
                </div>
              </div>
              <div className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Enterprise-Grade Security</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">Your data is protected with bank-level encryption and compliance with GDPR, CCPA, and SOC 2 standards.</p>
                </div>
              </div>
              <div className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Dedicated Support</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">24/7 expert support team ready to help you maximize your investment and achieve your goals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 mb-4">
              TESTIMONIALS
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Loved by Businesses Worldwide</h2>
            <p className="text-lg text-slate-600">See how VyntRise is helping companies transform their operations and accelerate growth.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
              <div className="flex gap-1 mb-6 text-amber-400">
                <Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" />
              </div>
              <p className="text-slate-700 mb-8 leading-relaxed">&quot;VyntRise transformed our local SEO strategy. We saw a 250% increase in organic traffic within 3 months and our review rating improved from 3.8 to 4.7 stars.&quot;</p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-slate-200"></div>
                <div>
                  <div className="font-bold text-slate-900">Sarah Martinez</div>
                  <div className="text-sm text-slate-500">Owner, Martinez Dental Group</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
              <div className="flex gap-1 mb-6 text-amber-400">
                <Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" />
              </div>
              <p className="text-slate-700 mb-8 leading-relaxed">&quot;The automation tools saved our team 20+ hours per week. We can now focus on strategic initiatives while VyntRise handles the repetitive tasks flawlessly.&quot;</p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-slate-200"></div>
                <div>
                  <div className="font-bold text-slate-900">Michael Chen</div>
                  <div className="text-sm text-slate-500">CTO, TechStart Solutions</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
              <div className="flex gap-1 mb-6 text-amber-400">
                <Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" />
              </div>
              <p className="text-slate-700 mb-8 leading-relaxed">&quot;Outstanding custom development work. The VyntRise team delivered exactly what we needed, on time and within budget. Highly recommended!&quot;</p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-slate-200"></div>
                <div>
                  <div className="font-bold text-slate-900">Emily Rodriguez</div>
                  <div className="text-sm text-slate-500">CEO, GrowthHub Agency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 py-24 px-4 md:px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Join hundreds of businesses already growing with VyntRise. Start your free trial today and see results in weeks, not months.</p>
          <Link href="/contact" className="inline-flex h-14 items-center justify-center rounded-md bg-white px-8 text-lg font-bold text-blue-700 hover:bg-blue-50 transition-colors">
            Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
