'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { SpeechArchitect } from './tools/speech-architect';
import { QuestionForge } from './tools/question-forge';
import { CommentComposer } from './tools/comment-composer';
import { MotionSheet } from './tools/motion-sheet';
import { BlocGenerator } from './tools/bloc-generator';
import { GoldRule, Overline, SectionIntro, SectionTitle } from './ui-bits';

type ToolId = 'speech' | 'questions' | 'comment' | 'motions' | 'bloc';

const TOOLS: { id: ToolId; label: string; tagline: string }[] = [
  { id: 'speech', label: 'Speech Architect', tagline: 'GSL, mod caucus, closing & right of reply — drafted in seconds' },
  { id: 'questions', label: 'Question Forge', tagline: 'POIs and mod-caucus questions with surgical angles' },
  { id: 'comment', label: 'Comment Composer', tagline: 'The acknowledge-pivot-rebut-propose sandwich' },
  { id: 'motions', label: 'Motion Cheat Sheet', tagline: 'Say the right words; consult mid-committee' },
  { id: 'bloc', label: 'Bloc Name Generator', tagline: 'Alliances deserve dignified letterheads' },
];

export function Toolkit() {
  const [tool, setTool] = useState<ToolId>('speech');
  const active = TOOLS.find((t) => t.id === tool)!;

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
      <Overline>The Armoury</Overline>
      <SectionTitle className="mt-3 text-3xl sm:text-5xl">The Delegate&apos;s Toolkit</SectionTitle>
      <GoldRule className="mt-4 max-w-xs gold-rule-left" />
      <SectionIntro>
        Five instruments of polished persuasion. Each generates formal, structured, committee-ready
        output instantly — and each can be blessed by the AI Oracle for a final layer of
        statecraft. Bring your own facts; the tools supply the architecture and the swagger.
      </SectionIntro>

      <div className="mt-8 flex gap-1.5 overflow-x-auto scroll-fancy pb-2 -mx-1 px-1" role="tablist" aria-label="Tools">
        {TOOLS.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={tool === t.id}
            onClick={() => setTool(t.id)}
            className={cn(
              'whitespace-nowrap rounded-md border px-4 py-2.5 text-[13px] font-medium transition-all min-h-[44px]',
              tool === t.id
                ? 'bg-primary text-primary-foreground border-primary shadow-md'
                : 'border-border bg-card text-muted-foreground hover:text-foreground hover:border-gold/50',
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-4 mb-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="font-display text-xl font-bold">{active.label}</h3>
        <p className="font-doc italic text-sm text-muted-foreground">{active.tagline}</p>
      </div>

      <div role="tabpanel" aria-label={active.label}>
        {tool === 'speech' && <SpeechArchitect />}
        {tool === 'questions' && <QuestionForge />}
        {tool === 'comment' && <CommentComposer />}
        {tool === 'motions' && <MotionSheet />}
        {tool === 'bloc' && <BlocGenerator />}
      </div>
    </div>
  );
}
