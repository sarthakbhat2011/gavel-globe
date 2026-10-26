'use client';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import type { ReactNode } from 'react';

export function Overline({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        'text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-gold',
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  className,
  as: Tag = 'h2',
}: {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
}) {
  return (
    <Tag className={cn('font-display font-bold text-foreground', className)}>{children}</Tag>
  );
}

export function GoldRule({ className }: { className?: string }) {
  return <div className={cn('gold-rule w-full', className)} aria-hidden="true" />;
}

export function SectionIntro({ children }: { children: ReactNode }) {
  return <p className="text-muted-foreground leading-relaxed max-w-2xl">{children}</p>;
}

export function Aside({ label = 'In practice', children }: { label?: string; children: ReactNode }) {
  return (
    <div className="border-l-2 border-gold/60 pl-3 sm:pl-4 py-1">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold mb-1">{label}</p>
      <p className="font-doc italic text-[15px] sm:text-base leading-relaxed text-muted-foreground">
        {children}
      </p>
    </div>
  );
}

export function SayLine({ children }: { children: ReactNode }) {
  return (
    <p className="font-doc text-[15px] sm:text-base leading-relaxed text-primary dark:text-primary-foreground bg-primary/[0.06] dark:bg-primary/10 border border-gold/30 rounded-md px-3 py-2">
      {children}
    </p>
  );
}

export function SeverityMeter({ level, label }: { level: number; label: string }) {
  return (
    <div className="flex items-center gap-1.5" title={`${label}: ${level}/5`}>
      <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</span>
      <span className="flex gap-0.5" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={cn(
              'h-1.5 w-3 rounded-full',
              i < level ? 'bg-oxblood/80' : 'bg-border',
            )}
          />
        ))}
      </span>
    </div>
  );
}

const PRIORITY_STYLES: Record<string, string> = {
  Essential: 'bg-primary text-primary-foreground',
  Common: 'bg-secondary text-secondary-foreground',
  Situational: 'bg-accent/20 text-accent-foreground border border-accent/50',
  Legendary: 'bg-oxblood text-white',
};

export function PriorityBadge({ priority }: { priority: string }) {
  return (
    <Badge className={cn('text-[10px] uppercase tracking-widest rounded-sm px-2', PRIORITY_STYLES[priority])}>
      {priority}
    </Badge>
  );
}

export function Ornament({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center justify-center gap-3 text-gold', className)} aria-hidden="true">
      <span className="h-px w-10 bg-gold/40" />
      <span className="font-display text-lg leading-none">❦</span>
      <span className="h-px w-10 bg-gold/40" />
    </div>
  );
}
