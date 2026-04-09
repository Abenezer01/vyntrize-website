import Link from 'next/link';
import CookieSettingsButton from '@/components/CookieSettingsButton';
import VyntriseLogo from '@/components/VyntriseLogo';

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
  { label: 'FAQ', href: '/faq' },
  { label: 'Support', href: '/support' },
];

const socials = [
  { href: '#', label: 'Twitter',   icon: 'X'  },
  { href: '#', label: 'LinkedIn',  icon: 'in' },
  { href: '#', label: 'GitHub',    icon: 'gh' },
  { href: '#', label: 'Instagram', icon: 'ig' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="container mx-auto px-4 md:px-6 pt-16 pb-8">

        {/* Top grid */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:gap-8 pb-12 border-b border-slate-800">

          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center mb-5 group">
              <VyntriseLogo theme="dark" height={26} className="transition-opacity group-hover:opacity-80" />
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs mb-4">
              Production-grade AI and automation that drives measurable outcomes from day one.
            </p>
            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              205 Van Buren St, Suite 120, #063<br />
              Herndon, VA 20170 · United States
            </p>
            <div className="flex items-center gap-2">
              {socials.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-8 w-8 rounded-lg border border-slate-800 flex items-center justify-center text-slate-500 hover:text-white hover:border-slate-600 transition-colors text-[10px] font-bold"
                >
                  {icon}
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
          <p>© 2026 VyntRise LLC. All rights reserved.</p>
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
