'use client';

import { useEffect, useState } from 'react';
import { Trash2, ChevronDown } from 'lucide-react';
import { getLeads, updateLead, deleteLead, type Lead, type LeadStatus, statusColors, statusLabels } from '@/lib/leads';

const statuses: LeadStatus[] = ['new', 'contacted', 'qualified', 'closed', 'lost'];

export default function AdminLeads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filter, setFilter] = useState<LeadStatus | 'all'>('all');
  const [selected, setSelected] = useState<Lead | null>(null);

  useEffect(() => { setLeads(getLeads()); }, []);

  function refresh() { setLeads(getLeads()); }

  function handleStatus(id: string, status: LeadStatus) {
    updateLead(id, { status });
    refresh();
    if (selected?.id === id) setSelected(prev => prev ? { ...prev, status } : null);
  }

  function handleDelete(id: string) {
    if (!confirm('Delete this lead?')) return;
    deleteLead(id);
    refresh();
    if (selected?.id === id) setSelected(null);
  }

  function handleNotes(id: string, notes: string) {
    updateLead(id, { notes });
    refresh();
  }

  const filtered = filter === 'all' ? leads : leads.filter(l => l.status === filter);

  return (
    <div className="max-w-6xl space-y-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-extrabold mb-1" style={{ color: 'var(--color-text)' }}>Leads</h1>
          <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{leads.length} total · {leads.filter(l => l.status === 'new').length} new</p>
        </div>
        {/* Filter */}
        <div className="flex flex-wrap gap-2">
          {(['all', ...statuses] as const).map(s => (
            <button key={s} onClick={() => setFilter(s)}
              className="rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all"
              style={{
                backgroundColor: filter === s ? 'var(--color-primary)' : 'var(--color-raised)',
                color: filter === s ? '#fff' : 'var(--color-text-muted)',
                border: `1px solid ${filter === s ? 'var(--color-primary)' : 'var(--color-border)'}`,
              }}
            >
              {s === 'all' ? 'All' : statusLabels[s]}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_360px] gap-5 items-start">
        {/* Table */}
        <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid var(--color-border)' }}>
          {/* Header */}
          <div className="grid grid-cols-[1fr_120px_100px_40px] px-4 py-3 text-[10px] font-bold uppercase tracking-widest"
            style={{ backgroundColor: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)', color: 'var(--color-text-muted)' }}>
            <span>Contact</span><span>Service</span><span>Status</span><span />
          </div>

          {filtered.length === 0 ? (
            <div className="px-4 py-12 text-center" style={{ backgroundColor: 'var(--color-bg)' }}>
              <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>No leads found.</p>
            </div>
          ) : (
            <div style={{ backgroundColor: 'var(--color-bg)' }}>
              {filtered.map((lead, i) => (
                <div
                  key={lead.id}
                  onClick={() => setSelected(lead)}
                  className="grid grid-cols-[1fr_120px_100px_40px] px-4 py-3.5 items-center cursor-pointer transition-colors"
                  style={{
                    borderBottom: i < filtered.length - 1 ? '1px solid var(--color-border)' : 'none',
                    backgroundColor: selected?.id === lead.id ? 'var(--color-raised)' : 'transparent',
                  }}
                >
                  <div>
                    <p className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>
                      {lead.firstName} {lead.lastName}
                    </p>
                    <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{lead.email}</p>
                  </div>
                  <p className="text-xs truncate" style={{ color: 'var(--color-text-muted)' }}>{lead.service ?? '—'}</p>
                  <span className={`text-[10px] font-bold rounded-full px-2 py-0.5 w-fit ${statusColors[lead.status]}`}>
                    {statusLabels[lead.status]}
                  </span>
                  <button onClick={e => { e.stopPropagation(); handleDelete(lead.id); }}
                    className="flex items-center justify-center h-7 w-7 rounded-lg transition-colors hover:bg-red-50"
                    style={{ color: 'var(--color-text-muted)' }}>
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Detail panel */}
        {selected ? (
          <div className="rounded-2xl p-5 space-y-4 sticky top-20" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
            <div>
              <p className="text-base font-bold" style={{ color: 'var(--color-text)' }}>{selected.firstName} {selected.lastName}</p>
              <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{selected.email}</p>
              {selected.company && <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{selected.company}</p>}
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: 'var(--color-text-muted)' }}>Service interest</p>
              <p className="text-sm" style={{ color: 'var(--color-text)' }}>{selected.service ?? '—'}</p>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: 'var(--color-text-muted)' }}>Message</p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text)' }}>{selected.message}</p>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: 'var(--color-text-muted)' }}>Status</p>
              <div className="relative">
                <select
                  value={selected.status}
                  onChange={e => handleStatus(selected.id, e.target.value as LeadStatus)}
                  className="w-full rounded-lg px-3 py-2 text-sm appearance-none pr-8"
                  style={{ backgroundColor: 'var(--color-raised)', border: '1px solid var(--color-border)', color: 'var(--color-text)' }}
                >
                  {statuses.map(s => <option key={s} value={s}>{statusLabels[s]}</option>)}
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none" style={{ color: 'var(--color-text-muted)' }} />
              </div>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: 'var(--color-text-muted)' }}>Notes</p>
              <textarea
                rows={3}
                defaultValue={selected.notes ?? ''}
                onBlur={e => handleNotes(selected.id, e.target.value)}
                placeholder="Add internal notes..."
                className="w-full rounded-lg px-3 py-2 text-sm resize-none"
                style={{ backgroundColor: 'var(--color-raised)', border: '1px solid var(--color-border)', color: 'var(--color-text)' }}
              />
            </div>

            <p className="text-[11px]" style={{ color: 'var(--color-text-muted)' }}>
              Submitted {new Date(selected.createdAt).toLocaleString()}
            </p>
          </div>
        ) : (
          <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
            <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Select a lead to view details</p>
          </div>
        )}
      </div>
    </div>
  );
}
