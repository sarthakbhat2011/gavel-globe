'use client';

import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { QUIZ, QUIZ_VERDICTS } from '@/lib/mun-data';
import { Aside, GoldRule, Ornament, Overline, SectionIntro, SectionTitle } from './ui-bits';
import { Award, RotateCcw, Scale } from 'lucide-react';

export function Quiz() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const answered = Object.keys(answers).length;
  const score = useMemo(
    () => QUIZ.reduce((acc, q) => (answers[q.id] === q.answer ? acc + 1 : acc), 0),
    [answers],
  );
  const verdict = useMemo(
    () => [...QUIZ_VERDICTS].reverse().find((v) => score >= v.min) ?? QUIZ_VERDICTS[0],
    [score],
  );

  const complete = answered === QUIZ.length;

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-10 sm:py-14">
      <Overline>The Final Judgement</Overline>
      <SectionTitle className="mt-3 text-3xl sm:text-5xl">
        Are You Smarter Than a First-Time Delegate?
      </SectionTitle>
      <GoldRule className="mt-4 max-w-xs gold-rule-left" />
      <SectionIntro>
        Ten questions drawn from everything this institute teaches. Answer honestly — the EB can
        detect guesswork through the screen. Upon completion, your diplomatic rank shall be
        conferred with appropriate ceremony.
      </SectionIntro>

      <div className="mt-6 flex items-center justify-between rounded-lg border border-gold/40 bg-secondary/50 px-4 py-3">
        <span className="text-sm text-muted-foreground">
          Progress:{' '}
          <span className="font-semibold text-foreground">
            {answered} / {QUIZ.length}
          </span>{' '}
          answered
        </span>
        <Scale className="h-4 w-4 text-gold" aria-hidden="true" />
      </div>

      <div className="mt-8 space-y-6">
        {QUIZ.map((q, qi) => {
          const chosen = answers[q.id];
          return (
            <fieldset key={q.id} className="rounded-lg border border-border bg-card p-5 sm:p-6">
              <legend className="sr-only">Question {qi + 1}</legend>
              <div className="flex items-start gap-3">
                <span className="grid place-items-center h-8 w-8 rounded-full border-2 border-gold/60 text-sm font-bold text-gold shrink-0 font-display">
                  {qi + 1}
                </span>
                <h3 className="font-display text-base sm:text-lg font-bold leading-snug pt-1">
                  {q.question}
                </h3>
              </div>
              <div className="mt-4 ml-0 sm:ml-11 grid gap-2">
                {q.options.map((opt, oi) => {
                  const isChosen = chosen === oi;
                  const isCorrect = q.answer === oi;
                  const reveal = submitted;
                  return (
                    <button
                      key={opt}
                      onClick={() => !submitted && setAnswers((a) => ({ ...a, [q.id]: oi }))}
                      disabled={submitted}
                      aria-pressed={isChosen}
                      className={cn(
                        'text-left rounded-md border px-4 py-3 text-sm leading-relaxed transition-all min-h-[48px] flex items-center gap-3',
                        reveal && isCorrect && 'border-gold bg-gold/10 font-medium',
                        reveal && isChosen && !isCorrect && 'border-oxblood bg-oxblood/10',
                        !reveal && isChosen && 'border-primary bg-primary text-primary-foreground',
                        !reveal && !isChosen && 'border-border hover:border-gold/60 hover:bg-secondary/50',
                        reveal && !isCorrect && !isChosen && 'border-border opacity-60',
                      )}
                    >
                      <span
                        className={cn(
                          'grid place-items-center h-6 w-6 rounded-full border text-[11px] font-bold shrink-0 font-display',
                          !reveal && isChosen ? 'border-primary-foreground text-primary-foreground' : 'border-gold/60 text-gold',
                        )}
                      >
                        {String.fromCharCode(65 + oi)}
                      </span>
                      {opt}
                    </button>
                  );
                })}
              </div>
              {submitted && (
                <div className="mt-4 ml-0 sm:ml-11">
                  <Aside label="The ruling">
                    {answers[q.id] === q.answer ? 'Correct — procedurally impeccable. ' : 'Incorrect, though respectfully so. '}
                    {q.explanation}
                  </Aside>
                </div>
              )}
            </fieldset>
          );
        })}
      </div>

      <div className="mt-8 flex flex-col items-center gap-4">
        {!submitted ? (
          <Button
            size="lg"
            disabled={!complete}
            onClick={() => setSubmitted(true)}
            className="min-h-[52px] px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {complete ? 'Submit for Judgement' : `Answer all ${QUIZ.length} questions to submit`}
          </Button>
        ) : (
          <>
            <div className="w-full rounded-lg diploma bg-card p-8 text-center">
              <Award className="h-10 w-10 text-gold mx-auto" aria-hidden="true" />
              <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-gold font-semibold">
                The Committee Finds
              </p>
              <p className="font-display text-4xl sm:text-5xl font-bold mt-2">
                {score} <span className="text-gold">/ {QUIZ.length}</span>
              </p>
              <h3 className="font-display text-2xl font-bold mt-3">{verdict.title}</h3>
              <p className="mt-3 text-sm sm:text-[15px] text-muted-foreground leading-relaxed max-w-xl mx-auto">
                {verdict.note}
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => {
                setAnswers({});
                setSubmitted(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="border-gold/50 min-h-[48px] px-6"
            >
              <RotateCcw className="h-4 w-4 mr-2" aria-hidden="true" />
              Appeal for a retrial
            </Button>
          </>
        )}
      </div>

      <Ornament className="mt-14" />
      <p className="mt-6 text-center font-doc italic text-muted-foreground">
        &ldquo;Whatever your score, remember: every Best Delegate once answered &lsquo;here,
        emotionally&rsquo; at roll call.&rdquo;
      </p>
    </div>
  );
}
