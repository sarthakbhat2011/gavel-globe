'use client';

import { useMemo, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import { FieldLabel, OutputPanel } from './shared';
import { buildComment, type CommentStance } from '@/lib/speech-engine';

const STANCES: { id: CommentStance; label: string; note: string }[] = [
  { id: 'agree', label: 'Agree', note: 'Rare. Cherish it. Build the bloc.' },
  { id: 'partial', label: 'Agree with roughly 47%', note: 'The MUN classic.' },
  { id: 'disagree', label: 'Respectfully disagree', note: 'The entire sport.' },
];

export function CommentComposer() {
  const [speaker, setSpeaker] = useState('');
  const [you, setYou] = useState('');
  const [theirPoint, setTheirPoint] = useState('');
  const [counter, setCounter] = useState('');
  const [evidence, setEvidence] = useState('');
  const [stance, setStance] = useState<CommentStance>('partial');
  const [tone, setTone] = useState(3);

  const comment = useMemo(
    () => buildComment({ speaker, you, theirPoint, counter, evidence, stance, tone }),
    [speaker, you, theirPoint, counter, evidence, stance, tone],
  );

  const consultOracle = async (): Promise<string | null> => {
    try {
      const res = await fetch('/api/oracle', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ kind: 'comment', tone, text: comment }),
      });
      if (!res.ok) return null;
      const data = (await res.json()) as { ok: boolean; text?: string };
      return data.ok && data.text ? data.text : null;
    } catch {
      return null;
    }
  };

  return (
    <div className="grid lg:grid-cols-[380px_1fr] gap-6 items-start">
      <div className="rounded-lg border border-border bg-card p-5 space-y-4 lg:sticky lg:top-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <FieldLabel htmlFor="cc-speaker">Who just spoke</FieldLabel>
            <Input id="cc-speaker" value={speaker} onChange={(e) => setSpeaker(e.target.value)} placeholder="e.g., The delegate of Japan" className="h-10" />
          </div>
          <div>
            <FieldLabel htmlFor="cc-you">You are</FieldLabel>
            <Input id="cc-you" value={you} onChange={(e) => setYou(e.target.value)} placeholder="e.g., The Republic of Korea" className="h-10" />
          </div>
        </div>

        <div>
          <FieldLabel>Your stance</FieldLabel>
          <div className="flex flex-wrap gap-1.5">
            {STANCES.map((s) => (
              <button
                key={s.id}
                onClick={() => setStance(s.id)}
                aria-pressed={stance === s.id}
                className={cn(
                  'rounded-full border px-3 py-1.5 text-xs font-medium transition-colors min-h-[36px]',
                  stance === s.id
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-border text-muted-foreground hover:border-gold/60 hover:text-foreground',
                )}
              >
                {s.label}
              </button>
            ))}
          </div>
          <p className="mt-2 text-[11px] font-doc italic text-muted-foreground">
            {STANCES.find((s) => s.id === stance)?.note}
          </p>
        </div>

        <div>
          <FieldLabel htmlFor="cc-their">Their point, summarised fairly</FieldLabel>
          <Textarea id="cc-their" value={theirPoint} onChange={(e) => setTheirPoint(e.target.value)} placeholder="e.g., sanctions alone will change behaviour" className="min-h-[64px] text-sm" />
        </div>

        <div>
          <FieldLabel htmlFor="cc-counter">Your counter-point</FieldLabel>
          <Textarea id="cc-counter" value={counter} onChange={(e) => setCounter(e.target.value)} placeholder="e.g., sanctions historically hurt civilians before regimes" className="min-h-[64px] text-sm" />
        </div>

        <div>
          <FieldLabel htmlFor="cc-evidence">Your evidence (optional, devastating)</FieldLabel>
          <Input id="cc-evidence" value={evidence} onChange={(e) => setEvidence(e.target.value)} placeholder="e.g., UN Resolution 2664, 2022" className="h-10" />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <FieldLabel>Acid percentage</FieldLabel>
            <span className="text-xs font-display font-bold text-gold">{tone === 1 ? 'Honey' : tone === 5 ? 'Lemon' : 'Balanced acidity'}</span>
          </div>
          <Slider value={[tone]} onValueChange={(v) => setTone(v[0])} min={1} max={5} step={1} aria-label="Comment tone" />
        </div>
      </div>

      <div>
        <OutputPanel
          text={comment}
          onOracle={consultOracle}
          docNote="The composer builds the classic diplomatic sandwich: acknowledge their point, pivot, rebut with evidence, and close with a proposal that makes refusal look unstatesmanlike."
        />
      </div>
    </div>
  );
}
