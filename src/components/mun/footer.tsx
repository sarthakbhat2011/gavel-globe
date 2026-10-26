'use client';

import { Gavel } from 'lucide-react';
import type { TabId } from './header';

export function Footer({ onNavigate }: { onNavigate: (tab: TabId) => void }) {
  return (
    <footer className="mt-auto border-t border-gold/30 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid place-items-center h-9 w-9 rounded-full border-2 border-gold-bright/70">
                <Gavel className="h-4.5 w-4.5" aria-hidden="true" />
              </span>
              <p className="font-display font-bold">Gavel &amp; Globe</p>
            </div>
            <p className="mt-3 text-sm text-primary-foreground/70 leading-relaxed">
              The Institute for Formally Hilarious Diplomacy — teaching Model United Nations to
              the delightfully uninitiated since this website loaded.
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold-bright font-semibold">
              The Grounds
            </p>
            <ul className="mt-3 space-y-1.5 text-sm">
              {[
                ['home', 'The Foyer'],
                ['basics', 'MUN 101'],
                ['rules', 'Rules of Procedure'],
                ['india', 'The Indian Circuit'],
                ['tools', 'The Toolkit'],
                ['quiz', 'The Trial'],
              ].map(([id, label]) => (
                <li key={id}>
                  <button
                    onClick={() => onNavigate(id as TabId)}
                    className="text-primary-foreground/75 hover:text-gold-bright transition-colors py-1"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold-bright font-semibold">
              The Disclaimer
            </p>
            <p className="mt-3 text-sm text-primary-foreground/70 leading-relaxed">
              Gavel &amp; Globe is not affiliated with the actual United Nations, which is
              presumably busy. No diplomats were harmed in the making of this website; several
              similes were, however, mildly exaggerated.
            </p>
            <p className="mt-3 text-sm text-primary-foreground/70 leading-relaxed">
              Rules of procedure vary by conference. Always defer to your own committee&apos;s RoP
              document — then use this site to understand what on earth it just said.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-primary-foreground/15 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Gavel &amp; Globe. All rights reserved, most privileges
            granted, one veto retained.
          </p>
          <p className="font-doc italic text-xs text-gold-bright/80">
            The committee stands adjourned. ❦
          </p>
        </div>
      </div>
    </footer>
  );
}
