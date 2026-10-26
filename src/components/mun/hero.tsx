'use client';

import { Button } from '@/components/ui/button';
import { Ornament, Overline, SectionTitle } from './ui-bits';
import { BookOpenText, MapPinned, ScrollText, Sparkles } from 'lucide-react';
import type { TabId } from './header';

const MARQUEE = [
  'UNHRC — now with 40% more hypocrisy',
  'AIPPM — where portfolios come with parental warnings',
  'Historic Security Council, 1962 — the missiles are fake, the panic is real',
  'Lok Sabha: The Committee Formerly Known as Order',
  'UNEP — saving turtles, professionally',
  'Continuous Crisis — sleep is a portfolio choice',
  'UN Women — chairs request less mansplaining in chits',
  '1971 War Cabinet — history, but you are the history',
  'UNSC — five delegates hold a veto; everyone else holds hope',
  'IP — journalism, but with better fonts',
];

const PILLARS = [
  {
    icon: BookOpenText,
    title: 'Learn the Craft',
    body: 'Rules of procedure from roll call to the final gavel — every point, motion, and clause explained like a friend who happens to be a lawyer.',
    tab: 'rules' as TabId,
    cta: 'Enter the Rules',
  },
  {
    icon: MapPinned,
    title: 'Master the Indian Circuit',
    body: 'Agenda-setting rituals, chit culture, AIPPM etiquette, EB addressing, awards arithmetic — everything about how MUNs actually run in India.',
    tab: 'india' as TabId,
    cta: 'Tour the Circuit',
  },
  {
    icon: Sparkles,
    title: 'Arm Yourself',
    body: 'The Speech Architect, the Question Forge, the Comment Composer — instant, structured, dangerously polished oratory with optional AI blessing.',
    tab: 'tools' as TabId,
    cta: 'Open the Toolkit',
  },
];

export function Hero({ onNavigate }: { onNavigate: (tab: TabId) => void }) {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative concentric seal */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 sm:h-96 sm:w-96 rounded-full border border-gold/25"
      >
        <div className="absolute inset-6 rounded-full border border-gold/20" />
        <div className="absolute inset-12 rounded-full border border-gold/15" />
        <div className="absolute inset-[4.5rem] rounded-full border border-gold/10" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-12 sm:pt-20 pb-10">
        <div className="max-w-3xl">
          <Overline>The Institute for Formally Hilarious Diplomacy presents</Overline>
          <SectionTitle as="h1" className="mt-4 text-4xl sm:text-6xl lg:text-7xl leading-[1.05]">
            Model UN,{' '}
            <span className="italic text-gold">mastered</span>
            <br />
            with a straight face.
          </SectionTitle>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl">
            You are about to spend a weekend in formal attire, raising a placard like a weapon,
            accusing friendly strangers of violating sovereignty — all in the name of education.
            Gavel &amp; Globe teaches complete beginners every rule of Model United Nations
            procedure (Indian MUNs included), then hands you the tools to write speeches,
            questions and comments that sound like they cost a fortune.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button
              size="lg"
              onClick={() => onNavigate('basics')}
              className="min-h-[48px] px-6 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Begin Your Diplomatic Training
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate('tools')}
              className="min-h-[48px] px-6 text-sm font-medium border-gold/50 hover:bg-accent/10"
            >
              Straight to the Toolkit, Please
            </Button>
          </div>

          <dl className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
            {[
              ['10', 'stages of debate, decoded'],
              ['14', 'motions, translated to English'],
              ['4', 'points of privilege-ous nature'],
              ['1', 'quiz to end all quizzes'],
            ].map(([n, label]) => (
              <div key={label} className="border-l-2 border-gold/50 pl-3">
                <dt className="font-display text-2xl sm:text-3xl font-bold">{n}</dt>
                <dd className="text-xs text-muted-foreground leading-snug mt-0.5">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Committee marquee */}
      <div className="border-y border-gold/25 bg-secondary/50 py-2.5 overflow-hidden" aria-hidden="true">
        <div className="marquee-track flex w-max gap-8 whitespace-nowrap">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span key={i} className="font-doc italic text-sm text-muted-foreground flex items-center gap-8">
              {m} <span className="text-gold">❦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Three pillars */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        <Ornament />
        <div className="mt-8 grid gap-4 sm:gap-6 md:grid-cols-3">
          {PILLARS.map((p) => (
            <button
              key={p.title}
              onClick={() => onNavigate(p.tab)}
              className="group text-left rounded-lg border border-border bg-card p-6 transition-all hover:border-gold/60 hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-ring"
            >
              <p.icon className="h-7 w-7 text-gold" aria-hidden="true" />
              <h3 className="font-display text-xl font-bold mt-4">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">{p.body}</p>
              <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold group-hover:translate-x-0.5 transition-transform">
                {p.cta} →
              </span>
            </button>
          ))}
        </div>

        <div className="mt-12 rounded-lg diploma bg-card p-6 sm:p-8 text-center">
          <SectionTitle className="text-xl sm:text-2xl">The First-Timer&apos;s Oath</SectionTitle>
          <p className="mt-3 font-doc italic text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            &ldquo;I solemnly swear to research my portfolio, respect the gavel, lobby with honour,
            speak only within time, attribute my facts, and never — upon penalty of the Chair&apos;s
            withering gaze — threaten nuclear war in a human rights committee.&rdquo;
          </p>
          <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-gold">
            Recite before your first roll call. Results may vary.
          </p>
        </div>
      </div>
    </div>
  );
}
