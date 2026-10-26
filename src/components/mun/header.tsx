'use client';

import { useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun, Gavel } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const emptySubscribe = () => () => {};
const useMounted = () =>
  useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

export type TabId = 'home' | 'basics' | 'rules' | 'india' | 'tools' | 'quiz';

export const TABS: { id: TabId; label: string }[] = [
  { id: 'home', label: 'The Foyer' },
  { id: 'basics', label: 'MUN 101' },
  { id: 'rules', label: 'Rules of Procedure' },
  { id: 'india', label: 'The Indian Circuit' },
  { id: 'tools', label: 'The Toolkit' },
  { id: 'quiz', label: 'The Trial' },
];

export function Header({
  active,
  onNavigate,
}: {
  active: TabId;
  onNavigate: (tab: TabId) => void;
}) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gold/30 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto max-w-6xl px-3 sm:px-6">
        <div className="flex h-14 sm:h-16 items-center justify-between gap-2">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2.5 min-w-0 group focus-visible:outline-2 focus-visible:outline-ring rounded-sm"
            aria-label="Gavel & Globe — return to the foyer"
          >
            <span className="grid place-items-center h-9 w-9 rounded-full border-2 border-gold bg-primary text-primary-foreground gavel-hover shrink-0">
              <Gavel className="h-4.5 w-4.5 gavel-head" aria-hidden="true" />
            </span>
            <span className="min-w-0 text-left">
              <span className="block font-display font-bold text-sm sm:text-base leading-tight truncate">
                Gavel &amp; Globe
              </span>
              <span className="hidden sm:block text-[9px] uppercase tracking-[0.22em] text-gold leading-tight">
                Formally Hilarious Diplomacy
              </span>
            </span>
          </button>

          <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => onNavigate(t.id)}
                aria-current={active === t.id ? 'page' : undefined}
                className={cn(
                  'px-3 py-2 text-[13px] rounded-md transition-colors min-h-[44px] flex items-center',
                  active === t.id
                    ? 'bg-primary text-primary-foreground font-medium'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary',
                )}
              >
                {t.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <Button
              variant="outline"
              size="icon"
              aria-label="Toggle afterparty (dark) mode"
              className="h-9 w-9 border-gold/40"
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            >
              {mounted && resolvedTheme === 'dark' ? (
                <Sun className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Moon className="h-4 w-4" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile tab strip */}
        <nav
          aria-label="Primary mobile"
          className="lg:hidden -mx-3 px-3 pb-2 flex gap-1 overflow-x-auto scroll-fancy"
        >
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => onNavigate(t.id)}
              aria-current={active === t.id ? 'page' : undefined}
              className={cn(
                'whitespace-nowrap px-3 py-2 text-xs rounded-md border transition-colors min-h-[36px]',
                active === t.id
                  ? 'bg-primary text-primary-foreground border-primary font-medium'
                  : 'border-border text-muted-foreground hover:text-foreground hover:border-gold/50',
              )}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
