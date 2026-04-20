'use client';

export type LeadStatus = 'new' | 'contacted' | 'qualified' | 'closed' | 'lost';

export interface Lead {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
  status: LeadStatus;
  createdAt: string;
  notes?: string;
}

const LEADS_KEY = 'vr_leads';

export function getLeads(): Lead[] {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem(LEADS_KEY) ?? '[]');
  } catch {
    return [];
  }
}

export function saveLead(lead: Omit<Lead, 'id' | 'status' | 'createdAt'>): Lead {
  const leads = getLeads();
  const newLead: Lead = {
    ...lead,
    id: crypto.randomUUID(),
    status: 'new',
    createdAt: new Date().toISOString(),
  };
  leads.unshift(newLead);
  localStorage.setItem(LEADS_KEY, JSON.stringify(leads));
  return newLead;
}

export function updateLead(id: string, updates: Partial<Lead>): void {
  const leads = getLeads();
  const idx = leads.findIndex(l => l.id === id);
  if (idx === -1) return;
  leads[idx] = { ...leads[idx], ...updates };
  localStorage.setItem(LEADS_KEY, JSON.stringify(leads));
}

export function deleteLead(id: string): void {
  const leads = getLeads().filter(l => l.id !== id);
  localStorage.setItem(LEADS_KEY, JSON.stringify(leads));
}

export const statusLabels: Record<LeadStatus, string> = {
  new:        'New',
  contacted:  'Contacted',
  qualified:  'Qualified',
  closed:     'Closed',
  lost:       'Lost',
};

export const statusColors: Record<LeadStatus, string> = {
  new:        'bg-blue-100 text-blue-700',
  contacted:  'bg-violet-100 text-violet-700',
  qualified:  'bg-amber-100 text-amber-700',
  closed:     'bg-emerald-100 text-emerald-700',
  lost:       'bg-slate-100 text-slate-500',
};
