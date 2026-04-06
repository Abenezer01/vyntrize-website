'use client';

import { useEffect, useState } from 'react';

export interface CookieConsent {
    version: string;
    timestamp: string;
    essential: true;
    analytics: boolean;
    functional: boolean;
    marketing: boolean;
}

const CONSENT_KEY = 'vr_consent';
const CONSENT_VERSION = '1.0';

function readConsent(): CookieConsent | null {
    if (typeof window === 'undefined') return null;
    try {
        const raw = localStorage.getItem(CONSENT_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw) as CookieConsent;
        if (parsed.version !== CONSENT_VERSION) return null;
        return parsed;
    } catch {
        return null;
    }
}

function writeConsent(prefs: Omit<CookieConsent, 'version' | 'timestamp' | 'essential'>): CookieConsent {
    const consent: CookieConsent = {
        version: CONSENT_VERSION,
        timestamp: new Date().toISOString(),
        essential: true,
        ...prefs,
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
    // Set a real cookie so server-side can read it too
    document.cookie = `vr_consent_given=1; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
    return consent;
}

export function useCookieConsent() {
    const [consent, setConsent] = useState<CookieConsent | null>(null);
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const existing = readConsent();
        if (existing) {
            setConsent(existing);
            setShowBanner(false);
        } else {
            // Delay banner slightly so page renders first
            const t = setTimeout(() => setShowBanner(true), 800);
            return () => clearTimeout(t);
        }
    }, []);

    function acceptAll() {
        const c = writeConsent({ analytics: true, functional: true, marketing: true });
        setConsent(c);
        setShowBanner(false);
    }

    function rejectAll() {
        const c = writeConsent({ analytics: false, functional: false, marketing: false });
        setConsent(c);
        setShowBanner(false);
    }

    function savePreferences(prefs: { analytics: boolean; functional: boolean; marketing: boolean }) {
        const c = writeConsent(prefs);
        setConsent(c);
        setShowBanner(false);
    }

    function openSettings() {
        setShowBanner(true);
    }

    return { consent, showBanner, acceptAll, rejectAll, savePreferences, openSettings };
}
