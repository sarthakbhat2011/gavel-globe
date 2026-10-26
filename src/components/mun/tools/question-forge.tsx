'use client';

import { useMemo, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { FieldLabel, OutputPanel } from './shared';
import {
  ANGLE_LABELS,
  buildQuestions,
  type QuestionAngle,
} from '@/lib/speech-engine';
import { RefreshCw, Target } from 'lucide-react';

const ANGLES: QuestionAngle[] = ['fact-check', 'hypocrisy', 'consequences', 'rhetorical', 'data'];

export function QuestionForge() {
  const [claim, setClaim] = useState('');
  const [angle, setAngle] = useState<QuestionAngle>('fact-check');
  const [tone, setTone] = useState(3);
  const [nonce, setNonce] = useState(0);

  const questions = useMemo(
    () => buildQuestions(claim, angle, tone + nonce),
    [claim, angle, tone, nonce],
  );

  const combined = questions.map((q, i) => `${i + 1}. ${q}`).join('\n\n');

  const consultOracle = async (): Promise<string | null> => {
    try {
      const res = await fetch('/api/oracle', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ kind: 'questions', tone, text: combined }),
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
        <div>
          <FieldLabel htmlFor="qf-claim">What did they just claim?</FieldLabel>
          <Input
            id="qf-claim"
            value={claim}
            onChange={(e) => setClaim(e.target.value)}
            placeholder="e.g., solar power can replace all fossil fuels by 2030"
            className="h-10"
          />
          <p className="mt-1.5 text-[11px] font-doc italic text-muted-foreground">
            One sentence is plenty. The forge sharpens; you merely aim.
          </p>
        </div>

        <div>
          <FieldLabel>Angle of attack</FieldLabel>
          <div className="flex flex-wrap gap-1.5">
            {ANGLES.map((a) => (
              <button
                key={a}
                onClick={() => setAngle(a)}
                aria-pressed={angle === a}
                className={cn(
                  'rounded-full border px-3 py-1.5 text-xs font-medium transition-colors min-h-[36px]',
                  angle === a
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-border text-muted-foreground hover:border-gold/60 hover:text-foreground',
                )}
              >
                {ANGLE_LABELS[a]}
              </button>
            ))}
          </div>
          <p className="mt-2 text-[11px] font-doc italic text-muted-foreground leading-relaxed">
            {angle === 'fact-check' && 'Force them to cite sources. Devastating against confident numbers.'}
            {angle === 'hypocrisy' && 'Point their own record back at them. Elegant, legal, merciless.'}
            {angle === 'consequences' && 'Make them explain what happens if they win. Few have thought that far.'}
            {angle === 'rhetorical' && 'A trap dressed as a question. The committee watches it spring in slow motion.'}
            {angle === 'data' && 'Demand figures in writing. Vagueness wilts under paperwork.'}
          </p>
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <FieldLabel>Sharpness</FieldLabel>
            <span className="text-xs font-display font-bold text-gold">{tone === 1 ? 'Polite scalpel' : tone === 5 ? 'Diplomatic rapier' : 'Regulation sharpness'}</span>
          </div>
          <Slider value={[tone]} onValueChange={(v) => setTone(v[0])} min={1} max={5} step={1} aria-label="Question sharpness" />
        </div>

        <Button variant="outline" onClick={() => setNonce((n) => n + 1)} className="w-full border-gold/50 min-h-[44px]">
          <RefreshCw className="h-4 w-4 mr-2" aria-hidden="true" />
          Re-forge the phrasing
        </Button>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-3">
          <Target className="h-4 w-4 text-gold" aria-hidden="true" />
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
            Three questions, ready for chits or the mic
          </p>
        </div>
        <OutputPanel
          text={combined}
          onOracle={consultOracle}
          docNote="Delivery advice: pause before the final clause of the question. It reads as gravity, costs nothing, and unsettles the well-prepared."
        />
      </div>
    </div>
  );
}
