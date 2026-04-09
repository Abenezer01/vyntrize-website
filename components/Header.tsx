'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronDown, Search, Bot, Code, Database, Sparkles, Stethoscope, ShoppingCart, BarChart3, Building2, LifeBuoy, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import VyntriseLogo from '@/components/VyntriseLogo';
import ThemeToggle from '@/components/ThemeToggle';

const services = [
  { label: 'AI Search & Reputation', desc: 'Dominate search and build trust',  href: '/services/ai-search',               icon: Search,   color: 'text-blue-600 bg-blue-50 dark:bg-blue-900/30'    },
  { label: 'Intelligent Automation', desc: 'Agents that think and act 24/7',   href: '/services/intelligent-automation',  icon: Bot,      color: 'text-violet-600 bg-violet-50 dark:bg-violet-900/30' },
  { label: 'Custom Software',        desc: 'Built for your exact workflow',     href: '/services/custom-software',         icon: Code,     color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30' },
  { label: 'Data & Analytics',       desc: 'Chaos to clarity',                 href: '/services/data-architecture',       icon: Database, color: 'text-amber-600 bg-amber-50 dark:bg-amber-900/30'   },
  { label: 'Digital Marketing',      desc: 'Human creativity, AI scale',       href: '/services/digital-marketing',       icon: Sparkles, color: 'text-rose-600 bg-rose-50 dark:bg-rose-900/30'     },
];

const solutions = [
  { label: 'Healthcare',         href: '/solutions', icon: Stethoscope },
  { label: 'E-commerce',         href: '/solutions', icon: ShoppingCart },
  { label: 'Financial Services', href: '/solutions', icon: BarChart3 },
  { label: 'Real Estate',        href: '/solutions', icon: Building2 },
];

const resources = [
  { label: 'FAQ',     desc: 'Common questions answered', href: '/faq',     icon: HelpCircle },
  { label: 'Support', desc: 'Get help from our team',    href: '/support', icon: LifeBuoy   },
];

function NavDropdown({ label, children, isActive }: { label: string; children: React.ReactNode; isActive: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        onClick={() => setOpen(o => !o)}
        className={`flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
          isActive || open
            ? 'text-slate-900 dark:text-white bg-slate-100 dark:bg-[#161b22]'
            : 'text-slate-500 dark:text-[#8b949e] hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-[#161b22]'
        }`}
      >
        {label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.98 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute top-full left-0 mt-1.5 z-50"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const isServicesActive  = pathname.startsWith('/services');
  const isSolutionsActive = pathname.startsWith('/solutions');
  const isResourcesActive = pathname.startsWith('/faq') || pathname.startsWith('/support');

  const flatLinks = [
    { name: 'Pricing', href: '/pricing' },
    { name: 'About',   href: '/about'   },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 dark:border-[#21262d] bg-white/95 dark:bg-[#0d1117]/95 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center group shrink-0" onClick={() => setMobileOpen(false)}>
          <span className="dark:hidden"><VyntriseLogo theme="light" height={28} /></span>
          <span className="hidden dark:inline-flex"><VyntriseLogo theme="dark" height={28} /></span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5">

          {/* Services mega menu */}
          <NavDropdown label="Services" isActive={isServicesActive}>
            <div className="w-[520px] rounded-2xl border border-slate-200 dark:border-[#21262d] bg-white dark:bg-[#161b22] shadow-xl shadow-slate-900/10 dark:shadow-black/50 p-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-[#8b949e] px-2 mb-3">Service lines</p>
              <div className="grid grid-cols-1 gap-0.5">
                {services.map(s => {
                  const SIcon = s.icon;
                  return (
                    <Link key={s.href} href={s.href} className="flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-slate-50 dark:hover:bg-[#0d1117] transition-colors group">
                      <div className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 ${s.color}`}>
                        <SIcon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">{s.label}</p>
                        <p className="text-xs text-slate-400 dark:text-[#8b949e]">{s.desc}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div className="mt-3 pt-3 border-t border-slate-100 dark:border-[#21262d]">
                <Link href="/services" className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-slate-50 dark:hover:bg-[#0d1117] transition-colors group">
                  <span className="text-sm font-semibold text-slate-700 dark:text-[#e6edf3] group-hover:text-slate-900 dark:group-hover:text-white">View all services</span>
                  <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </NavDropdown>

          {/* Solutions dropdown */}
          <NavDropdown label="Solutions" isActive={isSolutionsActive}>
            <div className="w-52 rounded-2xl border border-slate-200 dark:border-[#21262d] bg-white dark:bg-[#161b22] shadow-xl shadow-slate-900/10 dark:shadow-black/50 p-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-[#8b949e] px-3 py-2">Industries</p>
              {solutions.map(s => {
                const SIcon = s.icon;
                return (
                  <Link key={s.label} href={s.href} className="flex items-center gap-2.5 rounded-lg px-3 py-2 hover:bg-slate-50 dark:hover:bg-[#0d1117] transition-colors group">
                    <SIcon className="h-4 w-4 text-slate-400 dark:text-[#8b949e] group-hover:text-slate-700 dark:group-hover:text-white transition-colors shrink-0" />
                    <span className="text-sm font-medium text-slate-700 dark:text-[#e6edf3] group-hover:text-slate-900 dark:group-hover:text-white">{s.label}</span>
                  </Link>
                );
              })}
              <div className="mt-1 pt-1 border-t border-slate-100 dark:border-[#21262d]">
                <Link href="/solutions" className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-[#0d1117] transition-colors group">
                  <span className="text-xs font-semibold text-slate-500 dark:text-[#8b949e] group-hover:text-slate-700 dark:group-hover:text-white">All industries</span>
                  <ArrowRight className="h-3 w-3 text-slate-400" />
                </Link>
              </div>
            </div>
          </NavDropdown>

          {/* Flat links */}
          {flatLinks.map(link => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                pathname === link.href
                  ? 'text-slate-900 dark:text-white bg-slate-100 dark:bg-[#161b22]'
                  : 'text-slate-500 dark:text-[#8b949e] hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-[#161b22]'
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Resources dropdown */}
          <NavDropdown label="Resources" isActive={isResourcesActive}>
            <div className="w-52 rounded-2xl border border-slate-200 dark:border-[#21262d] bg-white dark:bg-[#161b22] shadow-xl shadow-slate-900/10 dark:shadow-black/50 p-2">
              {resources.map(r => {
                const RIcon = r.icon;
                return (
                  <Link key={r.label} href={r.href} className="flex items-start gap-2.5 rounded-lg px-3 py-2.5 hover:bg-slate-50 dark:hover:bg-[#0d1117] transition-colors group">
                    <RIcon className="h-4 w-4 text-slate-400 dark:text-[#8b949e] group-hover:text-slate-700 dark:group-hover:text-white mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-slate-700 dark:text-[#e6edf3] group-hover:text-slate-900 dark:group-hover:text-white">{r.label}</p>
                      <p className="text-xs text-slate-400 dark:text-[#8b949e]">{r.desc}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </NavDropdown>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <ThemeToggle />
          <Link href="/contact" className="text-sm font-medium text-slate-500 dark:text-[#8b949e] hover:text-slate-900 dark:hover:text-white transition-colors px-2">
            Contact
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 dark:bg-[#4B6CF7] px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700 dark:hover:bg-[#3d5ce0] transition-colors">
            Get started <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 dark:border-[#21262d] text-slate-600 dark:text-[#8b949e] hover:bg-slate-50 dark:hover:bg-[#161b22] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="md:hidden overflow-hidden border-t border-slate-100 dark:border-[#21262d] bg-white dark:bg-[#0d1117]"
          >
            <nav className="flex flex-col px-4 py-3 gap-0.5">

              {/* Services accordion */}
              <div>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === 'services' ? null : 'services')}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isServicesActive
                      ? 'bg-slate-100 dark:bg-[#161b22] text-slate-900 dark:text-white'
                      : 'text-slate-600 dark:text-[#8b949e] hover:bg-slate-50 dark:hover:bg-[#161b22]'
                  }`}
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpanded === 'services' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileExpanded === 'services' && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.18 }} className="overflow-hidden">
                      <div className="pl-3 pt-1 pb-1 space-y-0.5">
                        {services.map(s => {
                          const SIcon = s.icon;
                          return (
                            <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-slate-600 dark:text-[#8b949e] hover:bg-slate-50 dark:hover:bg-[#161b22] hover:text-slate-900 dark:hover:text-white transition-colors">
                              <div className={`h-6 w-6 rounded-md flex items-center justify-center shrink-0 ${s.color}`}><SIcon className="h-3.5 w-3.5" /></div>
                              {s.label}
                            </Link>
                          );
                        })}
                        <Link href="/services" onClick={() => setMobileOpen(false)} className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-blue-600">
                          All services <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Solutions accordion */}
              <div>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === 'solutions' ? null : 'solutions')}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isSolutionsActive
                      ? 'bg-slate-100 dark:bg-[#161b22] text-slate-900 dark:text-white'
                      : 'text-slate-600 dark:text-[#8b949e] hover:bg-slate-50 dark:hover:bg-[#161b22]'
                  }`}
                >
                  Solutions
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpanded === 'solutions' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileExpanded === 'solutions' && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.18 }} className="overflow-hidden">
                      <div className="pl-3 pt-1 pb-1 space-y-0.5">
                        {solutions.map(s => {
                          const SIcon = s.icon;
                          return (
                            <Link key={s.label} href={s.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-slate-600 dark:text-[#8b949e] hover:bg-slate-50 dark:hover:bg-[#161b22] transition-colors">
                              <SIcon className="h-4 w-4 text-slate-400 shrink-0" />{s.label}
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Flat links */}
              {[...flatLinks, { name: 'FAQ', href: '/faq' }, { name: 'Support', href: '/support' }].map(link => (
                <Link key={link.name} href={link.href} onClick={() => setMobileOpen(false)}
                  className={`px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    pathname === link.href
                      ? 'bg-slate-100 dark:bg-[#161b22] text-slate-900 dark:text-white'
                      : 'text-slate-600 dark:text-[#8b949e] hover:bg-slate-50 dark:hover:bg-[#161b22] hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="mt-3 pt-3 border-t border-slate-100 dark:border-[#21262d] flex flex-col gap-2">
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="px-3 py-2.5 text-sm font-medium text-slate-600 dark:text-[#8b949e] hover:bg-slate-50 dark:hover:bg-[#161b22] rounded-lg transition-colors">
                  Contact
                </Link>
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 dark:bg-[#4B6CF7] px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-700 dark:hover:bg-[#3d5ce0] transition-colors">
                  Get started <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
