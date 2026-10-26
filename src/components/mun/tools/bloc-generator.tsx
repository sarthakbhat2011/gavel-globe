'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FieldLabel } from './shared';
import { generateBlocNames } from '@/lib/speech-engine';
import { useToast } from '@/hooks/use-toast';
import { Copy, Dices } from 'lucide-react';

export function BlocGenerator() {
  const [cause, setCause] = useState('');
  const [nonce, setNonce] = useState(0);
  const { toast } = useToast();

  const names = generateBlocNames(cause, nonce);
  const display = cause.trim() || 'Vague Aspirations';

  const copy = async (name: string) => {
    try {
      await navigator.clipboard.writeText(name);
      toast({ title: 'Name secured', description: 'Proceed to forge your alliance.' });
    } catch {
      toast({ title: 'Copy failed', description: 'The clipboard has been placed under procedural lockdown.', variant: 'destructive' });
    }
  };

  return (
    <div className="max-w-3xl">
      <div className="rounded-lg border border-border bg-card p-5">
        <FieldLabel htmlFor="bg-cause">Your cause (the thing your bloc is about)</FieldLabel>
        <div className="flex flex-col sm:flex-row gap-2">
          <Input
            id="bg-cause"
            value={cause}
            onChange={(e) => setCause(e.target.value)}
            placeholder="e.g., universal internet access"
            className="h-11"
          />
          <Button onClick={() => setNonce((n) => n + 1)} className="min-h-[44px] px-5 bg-primary text-primary-foreground hover:bg-primary/90 shrink-0">
            <Dices className="h-4 w-4 mr-2" aria-hidden="true" />
            Convene
          </Button>
        </div>
        <p className="mt-2 text-[11px] font-doc italic text-muted-foreground">
          History remembers blocs by their names and their clauses. Only one of these can be
          generated for you.
        </p>
      </div>

      <div className="mt-5 space-y-3">
        {names.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="group flex items-center justify-between gap-3 rounded-md border border-border bg-card px-4 py-3.5 hover:border-gold/60 transition-colors"
          >
            <p className="font-display font-bold text-[15px] sm:text-base leading-snug">
              {name.replaceAll('Vague Aspirations', display)}
            </p>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => copy(name.replaceAll('Vague Aspirations', display))}
              aria-label={`Copy bloc name: ${name}`}
              className="shrink-0 min-h-[36px] min-w-[36px] text-muted-foreground hover:text-foreground"
            >
              <Copy className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-lg border border-gold/40 bg-secondary/40 p-5">
        <p className="font-doc italic text-sm sm:text-base text-muted-foreground leading-relaxed">
          Field wisdom: a bloc of eight delegates with a superb name and one Google Doc outranks a
          bloc of twenty with three names and no document. Choose your co-authors before you choose
          your adjectives.
        </p>
      </div>
    </div>
  );
}
