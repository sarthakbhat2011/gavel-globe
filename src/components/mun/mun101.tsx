'use client';

import { useMemo, useState } from 'react';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { Aside, GoldRule, Ornament, Overline, SectionIntro, SectionTitle } from './ui-bits';
import { GLOSSARY } from '@/lib/mun-data';
import { Landmark, Search } from 'lucide-react';

const FUNDAMENTALS = [
  {
    title: 'What on Earth is a MUN?',
    body: [
      'A Model United Nations is a simulation of the real United Nations in which students represent countries, political leaders, or historical figures and debate real-world problems in formal parliamentary style. Every participant is allotted a portfolio — say, the French Republic — and must argue, negotiate, and draft documents strictly in that role.',
      'The official objective is to draft resolutions that solve the agenda. The actual craft involves ninety-second oratory, alliance-building over biscuits, and mastering a rulebook that the real UN would find charmingly formalised.',
    ],
    aside:
      'MUNs exist in over 60 countries; India runs one of the largest circuits on Earth, with thousands of conferences a year — from school auditoriums to IIM lawns.',
  },
  {
    title: 'Anatomy of the Room',
    body: [
      'At the front sits the dais — the raised (literally and spiritually) table of the Executive Board. Delegates sit at country placards arranged alphabetically, with pages shuttling chits through the aisles. Two microphones usually serve the room: one for formal speeches, one for points, protests, and accidental comedy.',
      'Your seat is your embassy for the weekend. Decorate it with documents; defend it in absentia; return to it before roll call.',
    ],
    aside:
      'The person holding the gavel controls time itself in this room. Everyone else merely thinks they do.',
  },
  {
    title: 'The Executive Board (EB)',
    body: [
      'Three officials run your committee. The Chair presides over debate, rules on every motion and point, and wields the gavel. The Vice-Chair (or Director) manages the flow of speakers and documents. The Rapporteur keeps the record — attendance, speeches, proposals — and often weighs in on awards.',
      'Address them as "Honourable Chair" and "Esteemed Vice-Chair." They are judges, referees, and the audience for your two-day performance, all at once.',
    ],
    aside:
      'Be consistently kind to the Rapporteur. They remember everything. Everything.',
  },
  {
    title: 'Your Portfolio',
    body: [
      'Your portfolio is the country or character you represent, and from the first gavel you are no longer a Class 11 student from Pune — you are the Russian Federation, the Republic of Korea, or the Finance Minister of 1971. Method acting is encouraged; breaking character is not.',
      'Research your portfolio before the conference: its allies, its rivals, its red lines, and its favourite UN catchphrases. Position papers summarise all of this and often win a Best Position Paper award.',
    ],
    aside:
      'Say "I think my country feels" once and the entire EB will flinch in unison. You are the country. Speak accordingly.',
  },
  {
    title: 'Committee Types',
    body: [
      'General Assemblies (GA) are large and parliamentary. ECOSOC committees are mid-sized and policy-driven. Specialised committees (UNSC, UNHRC) add stakes and vetoes. Crisis committees add portfolio powers, secret directives, and a narrative engine run by the crisis staff.',
      'India also runs homegrown formats with pride — most famously the AIPPM (All India Political Parties Meet), where portfolios are actual political leaders and the language is straight out of Parliament.',
    ],
    aside:
      'Pick committees like you pick spicy food: start mild (GA), graduate to volatile (Crisis) once you know your tolerance.',
  },
  {
    title: 'The Background Guide (BG)',
    body: [
      'The Background Guide is the study bible your EB wrote for the agenda: history, timelines, portfolios\' stated positions, guiding questions, and the exact rules variants your committee will use. It is long, dense, and quietly contains the answers to half the questions you will be asked.',
      'Read it fully once, then mine it for quotations. Citing "the Background Guide, page 14, paragraph 3" in formal debate is an unhurried flex that EBs reward.',
    ],
    aside:
      'It is not bedtime reading. It is 2 a.m. reading. There is a difference, and your evaluation notes will show it.',
  },
  {
    title: 'Dress Code & Deportment',
    body: [
      'Western formals or Indian formals — blazer, saree, bandhgala, all welcome — pressed, polished, and worn with the quiet confidence of someone who has read the RoP. Footwear counts: committees walk to unmods, lunches, and occasionally to glory.',
      'Deportment means standing when recognised, not chewing gum during voting, and referring to rivals as "the honourable delegate of Japan" even when they have just said something outrageous.',
    ],
    aside:
      'Wrinkled formals signal a wrinkled foreign policy. Iron the night before; the EB notices; so does everyone\'s Instagram.',
  },
];

export function Mun101() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return GLOSSARY;
    return GLOSSARY.filter(
      (g) =>
        g.term.toLowerCase().includes(q) ||
        g.def.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
      <Overline>Chapter One</Overline>
      <SectionTitle className="mt-3 text-3xl sm:text-5xl">MUN 101</SectionTitle>
      <GoldRule className="mt-4 max-w-xs gold-rule-left" />
      <SectionIntro>
        Everything a first-time delegate must know before entering a committee room — explained
        with rigour, annotated with wit. Read these seven lessons in order and you will walk in
        looking like you have done this for years. That is the entire point.
      </SectionIntro>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {FUNDAMENTALS.map((f) => (
          <Card key={f.title} className="border-border/80 shadow-sm hover:border-gold/50 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Landmark className="h-5 w-5 text-gold mt-1 shrink-0" aria-hidden="true" />
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-bold leading-snug">{f.title}</h3>
                  {f.body.map((para, i) => (
                    <p key={i} className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
              <div className="mt-4 ml-8">
                <Aside>{f.aside}</Aside>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Ornament className="mt-14" />

      <div className="mt-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <Overline>Appendix A</Overline>
            <SectionTitle className="mt-2 text-2xl sm:text-3xl">The Diplomatic Dictionary</SectionTitle>
          </div>
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the lexicon…"
              aria-label="Search glossary"
              className="pl-9 h-10"
            />
          </div>
        </div>
        <p className="mt-3 text-sm text-muted-foreground max-w-2xl">
          Twenty terms you will hear within the first hour, defined precisely and — where the
          truth demands it — annotated honestly.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 max-h-[30rem] overflow-y-auto scroll-fancy pr-1">
          {filtered.map((g) => (
            <div
              key={g.term}
              className="rounded-md border border-border bg-card p-4 hover:border-gold/50 transition-colors"
            >
              <h4 className="font-display font-bold text-[15px]">{g.term}</h4>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{g.def}</p>
              {g.joke && (
                <p className="mt-2 font-doc italic text-sm text-gold-dark text-gold leading-relaxed">
                  {g.joke}
                </p>
              )}
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="col-span-2 text-center py-10 text-muted-foreground font-doc italic">
              The delegation regrets that the lexicon contains no such entry. The committee moves
              on, unmoved.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
