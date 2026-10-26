'use client';

import { useMemo, useState } from 'react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { MOTIONS, type MotionCategory } from '@/lib/mun-data';
import { PriorityBadge, SayLine } from './../ui-bits';
import { Search } from 'lucide-react';

const CATEGORIES: (MotionCategory | 'All')[] = [
  'All',
  'Agenda',
  'Debate',
  'Caucus',
  'Documents',
  'Voting',
  'Epilogue',
];

export function MotionSheet() {
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>('All');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return MOTIONS.filter((m) => {
      const inCat = cat === 'All' || m.category === cat;
      const inQuery =
        !q ||
        m.name.toLowerCase().includes(q) ||
        m.sayLine.toLowerCase().includes(q) ||
        m.useWhen.toLowerCase().includes(q);
      return inCat && inQuery;
    });
  }, [query, cat]);

  return (
    <div>
      <div className="rounded-lg border border-border bg-card p-5">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search motions — try 'caucus' or 'voting'…"
            aria-label="Search motions"
            className="pl-9 h-10"
          />
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              aria-pressed={cat === c}
              className={cn(
                'rounded-full border px-3 py-1.5 text-xs font-medium transition-colors min-h-[32px]',
                cat === c
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-border text-muted-foreground hover:border-gold/60 hover:text-foreground',
              )}
            >
              {c}
            </button>
          ))}
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Showing <span className="font-semibold text-foreground">{filtered.length}</span> of {MOTIONS.length} motions.
          Memorise the four <span className="font-semibold text-foreground">Essential</span> ones and you may
          improvise the rest with dignity.
        </p>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2 max-h-[34rem] overflow-y-auto scroll-fancy pr-1">
        {filtered.map((m) => (
          <article key={m.id} className="rounded-lg border border-border bg-card p-5 hover:border-gold/50 transition-colors">
            <div className="flex items-start justify-between gap-3">
              <h4 className="font-display font-bold text-[16px] leading-snug">{m.name}</h4>
              <PriorityBadge priority={m.priority} />
            </div>
            <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-gold font-semibold">{m.category}</p>
            <div className="mt-3">
              <SayLine>{m.sayLine}</SayLine>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Use when:</span> {m.useWhen}
            </p>
            <p className="mt-2 font-doc italic text-sm text-foreground/75 leading-relaxed">
              The EB&apos;s reaction: {m.ebReaction}
            </p>
          </article>
        ))}
        {filtered.length === 0 && (
          <p className="col-span-2 text-center py-12 text-muted-foreground font-doc italic">
            No motion matches that search. The delegation may move to reconsider its query.
          </p>
        )}
      </div>
    </div>
  );
}
