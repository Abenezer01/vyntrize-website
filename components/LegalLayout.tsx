'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export interface LegalSection {
    id: string;
    title: string;
}

interface LegalLayoutProps {
    badge: string;
    title: string;
    subtitle: string;
    lastUpdated: string;
    effectiveDate: string;
    sections: LegalSection[];
    children: React.ReactNode;
}

export default function LegalLayout({
    badge, title, subtitle, lastUpdated, effectiveDate, sections, children,
}: LegalLayoutProps) {
    const [active, setActive] = useState(sections[0]?.id ?? '');
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];
        sections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (!el) return;
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActive(id); },
                { rootMargin: '-20% 0px -70% 0px' }
            );
            obs.observe(el);
            observers.push(obs);
        });
        return () => observers.forEach(o => o.disconnect());
    }, [sections]);

    const activeTitle = sections.find(s => s.id === active)?.title ?? '';

    return (
        <div className="flex flex-col min-h-screen bg-white">

            {/* Page header */}
            <section className="border-b border-slate-100 bg-slate-50/60 pt-20 pb-12 px-4 md:px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="github-badge mb-4">{badge}</div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 leading-tight">{title}</h1>
                    <p className="text-lg text-slate-500 max-w-2xl mb-6">{subtitle}</p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                        <span className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            Effective: <span className="font-semibold text-slate-600">{effectiveDate}</span>
                        </span>
                        <span>·</span>
                        <span>Last updated: <span className="font-semibold text-slate-600">{lastUpdated}</span></span>
                    </div>
                </div>
            </section>

            {/* Mobile section picker */}
            <div className="md:hidden sticky top-16 z-30 border-b border-slate-100 bg-white px-4 py-2">
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="w-full flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700"
                >
                    <span className="truncate">{activeTitle}</span>
                    <ChevronDown className={`h-4 w-4 shrink-0 text-slate-400 transition-transform ${mobileOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileOpen && (
                    <div className="absolute left-4 right-4 top-full mt-1 rounded-xl border border-slate-200 bg-white shadow-lg z-40 overflow-hidden">
                        {sections.map(s => (
                            <a
                                key={s.id}
                                href={`#${s.id}`}
                                onClick={() => setMobileOpen(false)}
                                className={`block px-4 py-2.5 text-sm transition-colors ${active === s.id ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-slate-600 hover:bg-slate-50'}`}
                            >
                                {s.title}
                            </a>
                        ))}
                    </div>
                )}
            </div>

            {/* Body */}
            <div className="flex-1 container mx-auto max-w-6xl px-4 md:px-6 py-12">
                <div className="flex gap-12 items-start">

                    {/* Sticky sidebar */}
                    <aside className="hidden md:block w-56 shrink-0 sticky top-24 self-start">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Contents</p>
                        <nav className="space-y-0.5">
                            {sections.map((s, i) => (
                                <a
                                    key={s.id}
                                    href={`#${s.id}`}
                                    className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-all ${active === s.id
                                            ? 'bg-blue-50 text-blue-600 font-semibold'
                                            : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                                        }`}
                                >
                                    <span className={`text-[10px] font-mono shrink-0 ${active === s.id ? 'text-blue-400' : 'text-slate-300'}`}>
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    {s.title}
                                </a>
                            ))}
                        </nav>
                    </aside>

                    {/* Content */}
                    <article className="flex-1 min-w-0 prose-legal">
                        {children}
                    </article>
                </div>
            </div>
        </div>
    );
}
