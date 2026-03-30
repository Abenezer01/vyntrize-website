import Link from 'next/link';
import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-slate-300 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-8">
          <div className="md:col-span-1">
             <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white transition-transform group-hover:scale-105">
                <Zap className="h-5 w-5 text-slate-900" />
              </div>
              <span className="text-xl font-mono font-bold text-white tracking-tighter">VyntRise</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Empowering businesses with AI-driven solutions for reputation management, intelligent automation, and custom software development.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="/services" className="hover:text-white transition-colors">AI Search & Reputation</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Intelligent Automation</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Custom Software</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors">Consulting</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-6">Resources</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">API Reference</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Support</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between border-t border-slate-800 pt-8 sm:flex-row text-sm text-slate-500">
          <p>© 2025 VyntRise Technologies. All rights reserved.</p>
          <div className="mt-4 flex gap-6 sm:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
