'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { Check, Copy, Sparkles, Wand2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export function OutputPanel({
  text,
  onOracle,
  oracleLabel = 'Confer with the AI Oracle',
  oracleLoading,
  className,
  docNote,
}: {
  text: string;
  onOracle?: () => Promise<string | null>;
  oracleLabel?: string;
  oracleLoading?: boolean;
  className?: string;
  docNote?: string;
}) {
  const [polished, setPolished] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const shown = polished ?? text;
  const isPolished = polished !== null;

  const handleOracle = async () => {
    if (!onOracle || loading) return;
    setLoading(true);
    try {
      const result = await onOracle();
      if (result) {
        setPolished(result);
        toast({ title: 'The Oracle has spoken', description: 'Your draft has been blessed with statecraft.' });
      } else {
        toast({
          title: 'The Oracle is unavailable',
          description: 'Your draft remains diplomatically sound — it simply retains its original charm.',
          variant: 'destructive',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shown);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      toast({ title: 'Copy failed', description: 'Your device guards the clipboard like a P5 member guards a veto.', variant: 'destructive' });
    }
  };

  if (!text) {
    return (
      <div className={cn('rounded-md border border-dashed border-border bg-card/50 p-8 text-center', className)}>
        <p className="font-doc italic text-muted-foreground">
          The document awaits your inputs. Fill the form above and the rhetoric engine shall begin.
        </p>
      </div>
    );
  }

  return (
    <div className={cn('space-y-3', className)}>
      <div className="paper-sheet rounded-md p-5 sm:p-7">
        <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-[#26221a]/20">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#26221a]/60 font-semibold">
            {isPolished ? 'Oracle Edition · Final Draft' : 'First Draft · Rhetoric Engine'}
          </p>
          {isPolished && (
            <span className="stamp text-[10px] text-[#8c2f39]">Blessed</span>
          )}
        </div>
        <pre className="whitespace-pre-wrap font-doc text-[15px] sm:text-base leading-[1.75] text-[#26221a]">
          {shown}
        </pre>
        {docNote && (
          <p className="mt-5 pt-3 border-t border-[#26221a]/15 text-xs italic text-[#26221a]/60">
            {docNote}
          </p>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        <Button size="sm" variant="outline" onClick={handleCopy} className="border-gold/50 min-h-[40px]">
          {copied ? <Check className="h-4 w-4 mr-1.5" aria-hidden="true" /> : <Copy className="h-4 w-4 mr-1.5" aria-hidden="true" />}
          {copied ? 'Copied to dais' : 'Copy'}
        </Button>
        {onOracle && (
          <Button
            size="sm"
            onClick={handleOracle}
            disabled={loading}
            className="bg-primary text-primary-foreground hover:bg-primary/90 min-h-[40px]"
          >
            {loading ? (
              <Skeleton className="h-4 w-4 mr-1.5 rounded-full bg-primary-foreground/40" />
            ) : isPolished ? (
              <Wand2 className="h-4 w-4 mr-1.5" aria-hidden="true" />
            ) : (
              <Sparkles className="h-4 w-4 mr-1.5" aria-hidden="true" />
            )}
            {loading ? 'Consulting the Oracle…' : isPolished ? 'Bless it again' : oracleLabel}
          </Button>
        )}
        {isPolished && (
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setPolished(null)}
            className="min-h-[40px] text-muted-foreground"
          >
            Revert to draft
          </Button>
        )}
      </div>
      {loading && (
        <p className="font-doc italic text-sm text-muted-foreground animate-pulse">
          The Oracle is thinking in formal, complete sentences…
        </p>
      )}
    </div>
  );
}

export function FieldLabel({ children, htmlFor }: { children: React.ReactNode; htmlFor?: string }) {
  return (
    <label htmlFor={htmlFor} className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-1.5">
      {children}
    </label>
  );
}
