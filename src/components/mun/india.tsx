'use client';

import { Badge } from '@/components/ui/badge';
import { Aside, GoldRule, Ornament, Overline, SectionIntro, SectionTitle } from './ui-bits';
import { COMMANDMENTS, INDIA_CARDS, SURVIVAL_KIT } from '@/lib/mun-data';
import { CheckCircle2, XCircle } from 'lucide-react';
import * as Icons from 'lucide-react';

export function India() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
      <Overline>Chapter Three</Overline>
      <SectionTitle className="mt-3 text-3xl sm:text-5xl">The Indian Circuit</SectionTitle>
      <GoldRule className="mt-4 max-w-xs gold-rule-left" />
      <SectionIntro>
        India runs one of the largest, loudest, and most gloriously dramatic MUN circuits on
        Earth — with its own procedure hybrids, its own committee formats, and its own tribal
        customs. Learn the local dialect of diplomacy here, and you will feel at home from
        Mumbai to Mussoorie.
      </SectionIntro>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {INDIA_CARDS.map((c) => {
          const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[c.icon] ?? Icons.Sparkles;
          return (
            <article
              key={c.title}
              className="group rounded-lg border border-border bg-card p-6 hover:border-gold/60 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="grid place-items-center h-10 w-10 rounded-full border-2 border-gold/50 bg-secondary/60 group-hover:border-gold transition-colors">
                  <Icon className="h-5 w-5 text-gold" aria-hidden="true" />
                </span>
                <h3 className="font-display text-lg font-bold leading-snug">{c.title}</h3>
              </div>
              <p className="mt-3.5 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              <div className="mt-3.5">
                <Aside label="Field note">{c.aside}</Aside>
              </div>
            </article>
          );
        })}
      </div>

      <Ornament className="mt-14" />

      {/* Commandments */}
      <div className="mt-10 grid md:grid-cols-2 gap-5">
        <article className="rounded-lg border border-gold/40 bg-card p-6">
          <h3 className="font-display text-xl font-bold">The Seven Commandments (Do)</h3>
          <ul className="mt-4 space-y-3">
            {COMMANDMENTS.dos.map((d) => (
              <li key={d} className="flex items-start gap-2.5 text-sm leading-relaxed">
                <CheckCircle2 className="h-4 w-4 text-gold mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-muted-foreground">{d}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-lg border border-oxblood/30 bg-card p-6">
          <h3 className="font-display text-xl font-bold">The Seven Cardinal Sins (Don&apos;t)</h3>
          <ul className="mt-4 space-y-3">
            {COMMANDMENTS.donts.map((d) => (
              <li key={d} className="flex items-start gap-2.5 text-sm leading-relaxed">
                <XCircle className="h-4 w-4 text-oxblood mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-muted-foreground">{d}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>

      {/* Survival kit */}
      <article className="mt-8 rounded-lg diploma bg-card p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-display text-xl sm:text-2xl font-bold">The Delegate&apos;s Survival Kit</h3>
          <Badge variant="outline" className="border-gold/50 text-gold text-[10px] uppercase tracking-widest rounded-sm">
            Pack the night before
          </Badge>
        </div>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {SURVIVAL_KIT.map((item, i) => (
            <li key={item} className="flex items-start gap-3 text-sm leading-relaxed">
              <span className="grid place-items-center h-6 w-6 rounded-full border border-gold/50 text-[11px] font-bold text-gold shrink-0 font-display">
                {i + 1}
              </span>
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 font-doc italic text-muted-foreground">
          Missing one item is survivable. Missing the research is a Point of Personal Privilege
          no chair can remedy.
        </p>
      </article>

      <div className="mt-10 rounded-lg border border-gold/40 bg-secondary/40 p-6 sm:p-8">
        <h3 className="font-display text-xl font-bold">A Final Word on the Indian Weekend</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          A typical Indian MUN is a two-to-three-day affair: Day One begins with registration
          chaos, portfolio checks and the agenda-setting festival; Day Two is a blur of mod
          caucuses, unmod lobbying and midnight Google Docs; the final day delivers amendments,
          voting, awards, photographs of you mid-speech looking profoundly statesmanlike, and a
          social where yesterday&apos;s enemies exchange Instagram handles with suspicious warmth.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Conferences vary wildly — school fests with 60 delegates, branded events with 15
          committees, college circuits where the EB are national circuit veterans. The rules on
          this site travel everywhere; the specifics always live in each conference&apos;s RoP
          document. Read it. Then let this site handle the rest.
        </p>
        <p className="mt-4 font-doc italic text-base text-foreground/80">
          &ldquo;The committee will come to order. The delegate may now be brilliant.&rdquo;
        </p>
      </div>
    </div>
  );
}
