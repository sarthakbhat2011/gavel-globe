'use client';

import { useMemo, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { FieldLabel, OutputPanel } from './shared';
import {
  TONE_LABELS,
  buildSpeech,
  estimateSeconds,
  type SpeechKind,
  type SpeechInput,
} from '@/lib/speech-engine';

const KIND_OPTIONS: { id: SpeechKind; label: string; note: string }[] = [
  { id: 'opening', label: 'GSL Opening', note: '60–90s statement of national position' },
  { id: 'mod', label: 'Mod Caucus', note: '45–60s intervention on a sub-topic' },
  { id: 'closing', label: 'Closing Speech', note: 'Gracious exit, one final flourish' },
  { id: 'reply', label: 'Right of Reply', note: 'Formal, dignified retaliation' },
];

export function SpeechArchitect() {
  const [kind, setKind] = useState<SpeechKind>('opening');
  const [committee, setCommittee] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [agenda, setAgenda] = useState('');
  const [subtopic, setSubtopic] = useState('');
  const [opponent, setOpponent] = useState('');
  const [pillar1, setPillar1] = useState('');
  const [pillar2, setPillar2] = useState('');
  const [pillar3, setPillar3] = useState('');
  const [tone, setTone] = useState(3);
  const [oracleNonce, setOracleNonce] = useState(0);

  const input: SpeechInput = useMemo(
    () => ({
      kind,
      committee,
      portfolio,
      agenda,
      subtopic,
      opponent,
      pillars: [pillar1, pillar2, pillar3],
      tone,
    }),
    [kind, committee, portfolio, agenda, subtopic, opponent, pillar1, pillar2, pillar3, tone],
  );

  const speech = useMemo(() => buildSpeech(input), [input]);
  const seconds = estimateSeconds(speech);
  const overTime = kind === 'opening' && seconds > 90;
  const activeKind = KIND_OPTIONS.find((k) => k.id === kind)!;

  const consultOracle = async (): Promise<string | null> => {
    try {
      const res = await fetch('/api/oracle', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ kind: 'speech', tone, text: speech }),
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
      {/* Form */}
      <div className="rounded-lg border border-border bg-card p-5 space-y-4 lg:sticky lg:top-24">
        <div>
          <FieldLabel>Type of address</FieldLabel>
          <Tabs value={kind} onValueChange={(v) => setKind(v as SpeechKind)}>
            <TabsList className="grid w-full grid-cols-2 h-auto flex-wrap">
              {KIND_OPTIONS.map((k) => (
                <TabsTrigger key={k.id} value={k.id} className="text-[11px] px-2 py-2 min-h-[36px]">
                  {k.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          <p className="mt-1.5 text-xs font-doc italic text-muted-foreground">{activeKind.note}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <FieldLabel htmlFor="sa-committee">Committee</FieldLabel>
            <Input id="sa-committee" value={committee} onChange={(e) => setCommittee(e.target.value)} placeholder="e.g., UNHRC" className="h-10" />
          </div>
          <div>
            <FieldLabel htmlFor="sa-portfolio">Your portfolio</FieldLabel>
            <Input id="sa-portfolio" value={portfolio} onChange={(e) => setPortfolio(e.target.value)} placeholder="e.g., The French Republic" className="h-10" />
          </div>
        </div>

        <div>
          <FieldLabel htmlFor="sa-agenda">Agenda</FieldLabel>
          <Input id="sa-agenda" value={agenda} onChange={(e) => setAgenda(e.target.value)} placeholder="e.g., Mitigating the digital divide" className="h-10" />
        </div>

        {kind === 'mod' && (
          <div>
            <FieldLabel htmlFor="sa-subtopic">Caucus sub-topic</FieldLabel>
            <Input id="sa-subtopic" value={subtopic} onChange={(e) => setSubtopic(e.target.value)} placeholder="e.g., Rural connectivity" className="h-10" />
          </div>
        )}

        {kind === 'reply' && (
          <div>
            <FieldLabel htmlFor="sa-opponent">The offending delegation</FieldLabel>
            <Input id="sa-opponent" value={opponent} onChange={(e) => setOpponent(e.target.value)} placeholder="e.g., The Kingdom of Spain" className="h-10" />
          </div>
        )}

        {kind !== 'reply' && kind !== 'closing' && (
          <div className="space-y-2.5">
            <FieldLabel>Your three pillars</FieldLabel>
            <Input value={pillar1} onChange={(e) => setPillar1(e.target.value)} placeholder="Point 1 — e.g., 2.6 billion remain offline" className="h-10" />
            <Input value={pillar2} onChange={(e) => setPillar2(e.target.value)} placeholder="Point 2 — e.g., France backs a connectivity fund" className="h-10" />
            <Input value={pillar3} onChange={(e) => setPillar3(e.target.value)} placeholder="Point 3 — e.g., Public-private infrastructure" className="h-10" />
            <p className="text-[11px] text-muted-foreground font-doc italic">
              Leave any blank and the engine will leave you a reminder to fill it in — a teaching
              tool disguised as laziness.
            </p>
          </div>
        )}

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <FieldLabel>Rhetoric dial</FieldLabel>
            <span className="text-xs font-display font-bold text-gold">{TONE_LABELS[tone]}</span>
          </div>
          <Slider
            value={[tone]}
            onValueChange={(v) => setTone(v[0])}
            min={1}
            max={5}
            step={1}
            aria-label="Tone of speech, from diplomatic saint to savage statesperson"
          />
          <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
            <span>Diplomatic Saint</span>
            <span>Savage Statesperson</span>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-md border border-gold/30 bg-secondary/50 px-3 py-2.5">
          <span className="text-xs text-muted-foreground">Estimated delivery</span>
          <span className={`text-sm font-semibold ${overTime ? 'text-oxblood' : 'text-foreground'}`}>
            ~{seconds}s {overTime ? '— the gavel approaches' : '· procedurally comfortable'}
          </span>
        </div>
      </div>

      {/* Output */}
      <div>
        <OutputPanel
          text={speech}
          onOracle={consultOracle}
          oracleLoading={false}
          key={oracleNonce}
          docNote="Read it aloud twice before committee. Replace bracketed reminders with your own facts — the engine provides structure and swagger; the substance must be yours."
        />
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setOracleNonce((n) => n + 1)}
          className="mt-2 text-muted-foreground min-h-[36px]"
        >
          Regenerate phrasing
        </Button>
      </div>
    </div>
  );
}
