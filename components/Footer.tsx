import Link from 'next/link';
import { Zap, Twitter, Linkedin, Github, Instagram } from 'lucide-react';
import CookieSettingsButton from '@/components/CookieSettingsButton';

const serviceLinks = [
  { label: 'AI Search & Reputation', href: '/services/ai-search' },
  { label: 'Intelligent Automation', href: '/services/intelligent-automation' },
  { label: 'Custom Software', href: '/services/custom-software' },
  { label: 'Data & Analytics', href: '/services/data-architecture' },
  { label: 'Digital Marketing', href: '/services/digital-marketing' },
];

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];

const resourceLinks = [
  { label: 'Documentation', href: '#' },
  { label: 'API Reference', href: '#' },
  { label: 'Case Studies', href: '/solutions' },
  { label: 'Support', href: '/contact' },
];

const socials = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="container mx-auto px-4 md:px-6 pt-16 pb-8">

        {/* Top grid */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:gap-8 pb-12 border-b border-slate-800">

          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-5 group">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white transition-transform group-hover:scale-105">
                <Zap className="h-4 w-4 text-slate-900" />
              </div>
              <span className="text-lg font-mono font-bold text-white tracking-tighter">VyntRise</span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs mb-6">
              Production-grade AI and automation that drives measurable outcomes from day one.
            </p>
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-8 w-8 rounded-lg border border-slate-800 flex items-center justify-center text-slate-500 hover:text-white hover:border-slate-600 transition-colors"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-5">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-slate-500 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-5">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-slate-500 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-5">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-slate-500 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-600">
          <p>© 2026 VyntRise Technologies. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-slate-400 transition-colors">Cookie Policy</Link>
            <CookieSettingsButton />
          </div>
        </div>

      </div>
    </footer>
  );
}
