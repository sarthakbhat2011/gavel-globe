'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import {
  Aside,
  GoldRule,
  Ornament,
  Overline,
  SayLine,
  SectionIntro,
  SectionTitle,
  SeverityMeter,
} from './ui-bits';
import {
  DEBATE_STAGES,
  OPERATIVE_STARTERS,
  PREAMB_STARTERS,
  POINTS,
  SAMPLE_OPERATIVE,
  SAMPLE_PREAMB,
} from '@/lib/mun-data';
import {
  CheckCircle2,
  Circle,
  FileText,
  Gavel,
  Hand,
  Hourglass,
  Megaphone,
  PencilLine,
  ScrollText,
  Stamp,
  Users,
  Vote,
} from 'lucide-react';

const STAGE_ICONS = [
  Megaphone,
  ScrollText,
  Hand,
  Users,
  PencilLine,
  FileText,
  Stamp,
  PencilLine,
  Vote,
  Gavel,
];

export function Rules() {
  const [activeStage, setActiveStage] = useState(0);
  const stage = DEBATE_STAGES[activeStage];
  const StageIcon = STAGE_ICONS[activeStage] ?? Circle;

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
      <Overline>Chapter Two</Overline>
      <SectionTitle className="mt-3 text-3xl sm:text-5xl">Rules of Procedure</SectionTitle>
      <GoldRule className="mt-4 max-w-xs gold-rule-left" />
      <SectionIntro>
        The complete flow of a MUN committee, from the first roll call to the final gavel.
        Learn the stages in order, master the four points, and understand the anatomy of a
        resolution. Master this chapter and procedure stops being an obstacle — it becomes a
        weapon. A formal one. With excellent manners.
      </SectionIntro>

      {/* ————— Flow of debate ————— */}
      <h3 className="font-display text-2xl font-bold mt-12">The Flow of Debate</h3>
      <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
        Click through the ten stages. Each is presented formally first — then explained as it
        actually happens, with notes on how Indian committees run it.
      </p>

      <div className="mt-6 grid lg:grid-cols-[280px_1fr] gap-5">
        {/* Stepper */}
        <ol className="flex lg:flex-col gap-1.5 overflow-x-auto scroll-fancy lg:overflow-visible pb-2 lg:pb-0 lg:max-h-[32rem] lg:overflow-y-auto" aria-label="Debate stages">
          {DEBATE_STAGES.map((s, i) => {
            const Icon = STAGE_ICONS[i] ?? Circle;
            const isActive = i === activeStage;
            return (
              <li key={s.id} className="shrink-0 lg:shrink">
                <button
                  onClick={() => setActiveStage(i)}
                  aria-current={isActive ? 'step' : undefined}
                  className={cn(
                    'w-full flex items-center gap-3 rounded-md border px-3 py-2.5 text-left transition-all min-h-[48px]',
                    isActive
                      ? 'border-gold bg-primary text-primary-foreground shadow-md'
                      : 'border-border bg-card hover:border-gold/50 text-muted-foreground hover:text-foreground',
                  )}
                >
                  <span
                    className={cn(
                      'grid place-items-center h-7 w-7 rounded-full border shrink-0 text-xs font-bold',
                      isActive ? 'border-gold-bright text-gold-bright' : 'border-border text-gold',
                    )}
                  >
                    {s.step}
                  </span>
                  <Icon className="h-4 w-4 shrink-0 hidden sm:block" aria-hidden="true" />
                  <span className="text-[13px] font-medium leading-tight">{s.title}</span>
                </button>
              </li>
            );
          })}
        </ol>

        {/* Stage detail */}
        <article key={stage.id} className="rounded-lg border border-gold/40 bg-card p-6 sm:p-8 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-semibold">
                Stage {stage.step} of 10 · {stage.duration}
              </p>
              <h4 className="font-display text-2xl sm:text-3xl font-bold mt-1.5">{stage.title}</h4>
              <p className="font-doc italic text-muted-foreground mt-1">{stage.subtitle}</p>
            </div>
            <span className="hidden sm:grid place-items-center h-14 w-14 rounded-full border-2 border-gold/50 bg-secondary/60 shrink-0">
              <StageIcon className="h-6 w-6 text-gold" aria-hidden="true" />
            </span>
          </div>

          <div className="mt-5 space-y-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-1.5">
                The formal version
              </p>
              <p className="text-sm sm:text-[15px] leading-relaxed">{stage.formal}</p>
            </div>
            <Aside label="What actually happens">{stage.reality}</Aside>
            <Aside label="The Indian edition">{stage.india}</Aside>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={() => setActiveStage((i) => Math.max(0, i - 1))}
              disabled={activeStage === 0}
              className="text-sm text-muted-foreground hover:text-foreground disabled:opacity-40 disabled:cursor-not-allowed min-h-[44px] px-2"
            >
              ← Previous stage
            </button>
            <div className="flex gap-1.5" aria-hidden="true">
              {DEBATE_STAGES.map((s, i) => (
                <span
                  key={s.id}
                  className={cn(
                    'h-1.5 rounded-full transition-all',
                    i === activeStage ? 'w-6 bg-gold' : i < activeStage ? 'w-1.5 bg-gold/50' : 'w-1.5 bg-border',
                  )}
                />
              ))}
            </div>
            <button
              onClick={() => setActiveStage((i) => Math.min(DEBATE_STAGES.length - 1, i + 1))}
              disabled={activeStage === DEBATE_STAGES.length - 1}
              className="text-sm text-gold hover:text-foreground disabled:opacity-40 disabled:cursor-not-allowed min-h-[44px] px-2 font-medium"
            >
              Next stage →
            </button>
          </div>
        </article>
      </div>

      <Ornament className="mt-14" />

      {/* ————— Points ————— */}
      <h3 className="font-display text-2xl font-bold mt-10">The Four Points</h3>
      <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
        Points are your procedural emergency services. Two may interrupt a speaker; two may not.
        One is for your comfort, one for catching errors, one for getting unstuck, and one for
        defending your nation&apos;s honour.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {POINTS.map((p) => (
          <article key={p.id} className="rounded-lg border border-border bg-card p-5 sm:p-6 hover:border-gold/50 transition-colors">
            <div className="flex items-start justify-between gap-3">
              <h4 className="font-display text-lg font-bold leading-snug">{p.name}</h4>
              <Badge
                variant="outline"
                className={cn(
                  'shrink-0 text-[10px] uppercase tracking-wider rounded-sm',
                  p.interrupts ? 'border-oxblood text-oxblood' : 'border-border text-muted-foreground',
                )}
              >
                {p.interrupts ? 'Interrupts' : 'Waits its turn'}
              </Badge>
            </div>
            <div className="mt-3">
              <SayLine>{p.sayLine}</SayLine>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.purpose}</p>
            <p className="mt-2 font-doc italic text-sm leading-relaxed text-foreground/80">{p.example}</p>
            <div className="mt-3">
              <Aside>{p.humor}</Aside>
            </div>
            <div className="mt-4 flex justify-end">
              <SeverityMeter level={p.severity} label="Drama rating" />
            </div>
          </article>
        ))}
      </div>

      <Ornament className="mt-14" />

      {/* ————— Speech anatomy ————— */}
      <h3 className="font-display text-2xl font-bold mt-10">Anatomy of a GSL Speech</h3>
      <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
        You get sixty to ninety seconds. Structure is the difference between &ldquo;promising
        delegate&rdquo; and &ldquo;please sit down.&rdquo; The six-part skeleton below fits every
        opening speech ever delivered, including the ones at the real UN.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          ['1. The Greeting', '"Honourable Chair, fellow delegates — the French Republic rises." Formality is free. Use it.'],
          ['2. The Hook', 'One line that makes the room look up. A statistic, a sharp image, or a well-aimed jab at the status quo.'],
          ['3. The Position', 'State your portfolio\'s stance on the agenda in one unambiguous sentence. Ambiguity is for novels.'],
          ['4. The Pillars', 'Two or three supporting points — reasons, facts, precedents. This is the spine of the speech.'],
          ['5. The Call to Action', 'Tell the committee what happens next: "We invite all delegations of conscience to the unmod."'],
          ['6. The Yield', '"I am open to Points of Information" (the Indian classic) or "I yield to the dais." End cleanly; the gavel respects closure.'],
        ].map(([title, body]) => (
          <div key={title} className="rounded-md border border-border bg-card p-4">
            <h4 className="font-display font-bold text-[15px] text-gold">{title}</h4>
            <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{body}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-lg border border-gold/40 bg-secondary/40 p-5">
        <div className="flex items-center gap-2">
          <Hourglass className="h-4 w-4 text-gold" aria-hidden="true" />
          <p className="text-sm font-semibold">The 130-words-per-minute rule</p>
        </div>
        <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
          Ninety seconds at a measured diplomatic pace is roughly 190 words. Write 170 and breathe.
          When the gavel interrupts, finish the clause, not the paragraph — then say &ldquo;I
          yield&rdquo; with grace. The EB scores composure higher than completion.
        </p>
      </div>

      <Ornament className="mt-14" />

      {/* ————— Resolution anatomy ————— */}
      <h3 className="font-display text-2xl font-bold mt-10">Anatomy of a Resolution</h3>
      <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
        The resolution is the committee&apos;s final product — a document with sponsors,
        signatories, and two distinct species of clause. Below, a specimen preserved in its
        natural habitat.
      </p>

      <div className="mt-6 grid lg:grid-cols-[1fr_280px] gap-5">
        {/* Paper mock */}
        <div className="paper-sheet rounded-md p-5 sm:p-8 font-doc">
          <div className="text-center border-b-2 border-[#26221a]/60 pb-3">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#26221a]/70">
              Committee: UNHRC — Mock Session
            </p>
            <h4 className="font-display text-xl sm:text-2xl font-bold text-[#26221a] mt-1">
              Draft Resolution 1.1
            </h4>
            <p className="text-[13px] italic text-[#26221a]/70 mt-0.5">
              On the Prevention of Diplomatic Nonsense
            </p>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 text-[13px] sm:text-sm">
            <p className="text-[#26221a]">
              <span className="font-semibold">Sponsors:</span> France, Germany, and everyone who
              wrote this at 2 a.m.
            </p>
            <p className="text-[#26221a]">
              <span className="font-semibold">Signatories:</span> Twenty percent of the committee,
              out of curiosity
            </p>
          </div>

          <div className="mt-5">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#26221a]/60 mb-2">
              The General Assembly,
            </p>
            <div className="space-y-2.5">
              <p className="italic text-[#26221a]/85 leading-relaxed">
                <span className="text-[#26221a]/60">Preamble · vibe-setting, no action</span>
                <br />
                {SAMPLE_PREAMB[0]}
              </p>
              <p className="italic text-[#26221a]/85 leading-relaxed">{SAMPLE_PREAMB[1]}</p>
            </div>
            <div className="my-4 h-px bg-[#26221a]/30" />
            <div className="space-y-2.5">
              <p className="text-[#26221a]">
                <span className="text-[#26221a]/60">Operative · the actual doing (underlined in real UN documents)</span>
              </p>
              <p className="text-[#26221a] leading-relaxed">
                <span className="font-semibold">1.</span>{' '}
                <span className="clause-operative">{SAMPLE_OPERATIVE[0]}</span>
              </p>
              <p className="text-[#26221a] leading-relaxed">
                <span className="font-semibold">2.</span>{' '}
                <span className="clause-operative">{SAMPLE_OPERATIVE[1]}</span>
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <span className="stamp text-oxblood text-sm">Not yet passed</span>
          </div>
        </div>

        {/* Explanations */}
        <div className="space-y-4">
          <div className="rounded-md border border-border bg-card p-4">
            <h4 className="font-display font-bold text-[15px]">Preambulatory clauses</h4>
            <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
              Begin with present participles, italicised, each ending in a comma. They set context
              and flatter history — but commit the committee to nothing.
            </p>
            <div className="mt-2 flex flex-wrap gap-1">
              {PREAMB_STARTERS.slice(0, 8).map((s) => (
                <span key={s} className="text-[11px] font-doc italic px-1.5 py-0.5 rounded bg-secondary/70 border border-border">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-md border border-border bg-card p-4">
            <h4 className="font-display font-bold text-[15px]">Operative clauses</h4>
            <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
              Numbered, action-first, semicolon-terminated, underlined in real UN documents. This
              is where &ldquo;Calls upon&rdquo; does the heavy lifting and where amendments will
              later draw blood.
            </p>
            <div className="mt-2 flex flex-wrap gap-1">
              {OPERATIVE_STARTERS.slice(0, 8).map((s) => (
                <span key={s} className="text-[11px] font-doc px-1.5 py-0.5 rounded bg-primary/10 border border-primary/20">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-md border border-border bg-card p-4">
            <h4 className="font-display font-bold text-[15px]">Sponsors vs. signatories</h4>
            <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Sponsors</strong> wrote it and must defend it — and cannot vote against their own creation.{' '}
              <strong className="text-foreground">Signatories</strong> merely wish it debated; their signature is not loyalty, it is curiosity.
            </p>
          </div>
        </div>
      </div>

      {/* ————— Amendments & Voting ————— */}
      <div className="mt-14 grid md:grid-cols-2 gap-5">
        <article className="rounded-lg border border-border bg-card p-6">
          <div className="flex items-center gap-2">
            <PencilLine className="h-5 w-5 text-gold" aria-hidden="true" />
            <h3 className="font-display text-xl font-bold">Amendments</h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Amendments alter operative clauses — striking words, adding provisions, or quietly
            gutting a rival&apos;s masterpiece. <strong className="text-foreground">Friendly</strong> amendments are accepted by
            every sponsor and adopted without a vote. <strong className="text-foreground">Unfriendly</strong> amendments require
            the committee&apos;s majority, which is where friendships meet arithmetic.
          </p>
          <div className="mt-3">
            <SayLine>&ldquo;Motion to read Amendment 1.2 to Draft Resolution 1.1.&rdquo;</SayLine>
          </div>
          <div className="mt-3">
            <Aside>
              Indian committees frequently allow verbal amendments and amendment chits. Five
              amendments defended well beat fifteen submitted and abandoned.
            </Aside>
          </div>
        </article>

        <article className="rounded-lg border border-border bg-card p-6">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-gold" aria-hidden="true" />
            <h3 className="font-display text-xl font-bold">Voting Procedures</h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Debate closes, doors lock, phones go face down. Draft resolutions pass by{' '}
            <strong className="text-foreground">simple majority</strong> unless designated an{' '}
            <strong className="text-foreground">important question</strong>, which demands a two-thirds majority. &ldquo;Present and
            Voting&quot; delegations may not abstain — they chose loyalty at roll call and must now
            choose a side.
          </p>
          <div className="mt-3">
            <SayLine>&ldquo;Motion to close debate and enter voting procedures.&rdquo;</SayLine>
          </div>
          <div className="mt-3">
            <Aside>
              After the result, applause is procedurally unauthorised yet emotionally mandatory.
              The EB permits it with one eyebrow raised.
            </Aside>
          </div>
        </article>
      </div>

      <div className="mt-10 rounded-lg diploma bg-card p-6 text-center">
        <p className="font-display text-lg sm:text-xl">
          That is the entire machine. <span className="text-gold italic">Now learn to drive it fast.</span>
        </p>
        <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
          The Toolkit below turns this chapter into working equipment: speeches, questions,
          comments, and a motion cheat sheet you can consult mid-committee without anyone noticing.
        </p>
      </div>
    </div>
  );
}
