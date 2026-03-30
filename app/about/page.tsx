import { ArrowRight, Users, Target, Award, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50 -z-10"></div>
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="github-badge mb-6">
            Our Story
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 max-w-4xl mx-auto leading-tight">
            Empowering Businesses with <span className="text-blue-600">Intelligent Technology</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            We believe that every business, regardless of size, deserves access to enterprise-grade AI and automation tools to drive growth and efficiency.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                To democratize artificial intelligence and automation, making powerful technological solutions accessible, understandable, and impactful for growing businesses worldwide.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Target className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Innovation First</h3>
                    <p className="text-slate-600">We constantly explore the latest AI advancements to bring cutting-edge solutions to our clients.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Client-Centric</h3>
                    <p className="text-slate-600">Your success is our success. We build partnerships, not just vendor relationships.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-slate-100 overflow-hidden">
                {/* Placeholder for team/office image */}
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-slate-200 flex items-center justify-center">
                  <Sparkles className="h-24 w-24 text-blue-300" />
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xl">
                    5+
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Years of</div>
                    <div className="text-slate-500 text-sm">Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 md:px-6 bg-slate-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-mono font-bold mb-2">250+</div>
              <div className="text-slate-400 font-mono text-sm uppercase tracking-wider">Clients Served</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-mono font-bold mb-2">1M+</div>
              <div className="text-slate-400 font-mono text-sm uppercase tracking-wider">Tasks Automated</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-mono font-bold mb-2">99%</div>
              <div className="text-slate-400 font-mono text-sm uppercase tracking-wider">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-mono font-bold mb-2">24/7</div>
              <div className="text-slate-400 font-mono text-sm uppercase tracking-wider">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 md:px-6 bg-slate-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Ready to join our journey?</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Let&apos;s work together to transform your business operations and accelerate your growth.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-4 text-sm font-bold text-white hover:bg-blue-700 transition-colors">
            Contact Our Team
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
