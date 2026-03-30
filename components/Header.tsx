'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Zap } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'About', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 transition-transform group-hover:scale-105">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-mono font-bold tracking-tighter text-slate-900">VyntRise</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-4">
          <Link href="#" className="hidden md:block text-sm font-medium text-slate-600 hover:text-blue-600">Sign In</Link>
          <Link href="/contact" className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors">Get Started</Link>
        </div>
      </div>
    </header>
  );
}
