/**
 * The Gavel & Globe Rhetoric Engine.
 * Turns modest inputs into diplomatically dangerous oratory —
 * with formal structure and precisely rationed wit.
 */

export type SpeechKind = 'opening' | 'mod' | 'closing' | 'reply';
export type Kind = SpeechKind | 'question' | 'comment';

export const TONE_LABELS: Record<number, string> = {
  1: 'The Diplomatic Saint',
  2: 'The Firm Gentleman',
  3: 'The Pointed Professional',
  4: 'The Rhetorical Warrior',
  5: 'The Savage Statesperson',
};

export interface SpeechInput {
  kind: SpeechKind;
  committee: string;
  portfolio: string;
  agenda: string;
  subtopic: string;
  pillars: string[];
  opponent: string;
  tone: number; // 1..5
}

const PLACEHOLDER = (label: string) => `[${label}]`;

function pick<T>(arr: T[], seed: number): T {
  return arr[Math.abs(seed) % arr.length];
}

/* ——————————————————— SPEECHES ——————————————————— */

export function buildSpeech(input: SpeechInput): string {
  const t = Math.min(5, Math.max(1, Math.round(input.tone)));
  const country = input.portfolio.trim() || PLACEHOLDER('Your Portfolio, e.g., The French Republic');
  const committee = input.committee.trim() || PLACEHOLDER('Committee, e.g., UNHRC');
  const agenda = input.agenda.trim() || PLACEHOLDER('the agenda before us');
  const sub = input.subtopic.trim() || agenda;
  const opp = input.opponent.trim() || PLACEHOLDER('the offending delegation');
  const p = input.pillars;
  const p1 = p[0]?.trim() || PLACEHOLDER('your first brilliant point');
  const p2 = p[1]?.trim() || PLACEHOLDER('your second brilliant point');
  const p3 = p[2]?.trim() || PLACEHOLDER('your third brilliant point');

  switch (input.kind) {
    case 'opening':
      return openingSpeech({ t, country, committee, agenda, p1, p2, p3 });
    case 'mod':
      return modSpeech({ t, country, sub, p1 });
    case 'closing':
      return closingSpeech({ t, country, agenda });
    case 'reply':
      return replySpeech({ t, country, opp });
  }
}

function openingSpeech(a: {
  t: number; country: string; committee: string; agenda: string; p1: string; p2: string; p3: string;
}): string {
  const greetings = [
    'Honourable Chair, esteemed Vice-Chair, learned Rapporteur, and fellow delegates —',
    'Honourable Chair and distinguished colleagues —',
    a.t >= 4
      ? 'Honourable Chair, colleagues, and those about to require a moment —'
      : 'Honourable Chair, fellow delegates, and delegates who are merely pretending to take notes —',
  ];
  const rises = [
    `the delegation of ${a.country} rises.`,
    `the delegation of ${a.country} rises, with hope in its heart and a fully annotated Background Guide in its bag.`,
    `the delegation of ${a.country} rises — punctual, prepared, and diplomatically dangerous.`,
  ];
  const hooks = [
    `They say ${a.agenda} is the defining challenge of our time. They are correct — and ${a.country} has not arrived merely to agree elegantly.`,
    `History will record many things about this committee. ${a.country} intends to ensure it records that ${a.agenda} was finally met with more than well-phrased sympathy.`,
    a.t >= 4
      ? `Every committee has a problem. This committee has ${a.agenda}. Fortunately for the room, it now also has ${a.country}.`
      : `On the matter of ${a.agenda}, the world has heard many statements. ${a.country} proposes, humbly, that it now hears a plan.`,
    `Let the record reflect that ${a.country} regards ${a.agenda} not as an item for discussion, but as an instruction.`,
  ];
  const stances = [
    `On this agenda, ${a.country}'s position is unambiguous, consistent, and — for those taking notes — correct.`,
    `${a.country} comes to this ${a.committee} with a position of principle, not of convenience.`,
  ];
  const connectors = [
    ['First,', 'Second,', 'Third,'],
    ['Permit the delegation to begin with,', 'Furthermore — and the delegation chooses this word carefully —', 'Finally, before the gavel interrupts,'],
    a.t >= 4
      ? ['One:', 'Two:', 'And three, with feeling:']
      : ['First, without decoration:', 'Second, without apology:', 'Third, without delay:'],
  ];
  const cta = [
    'We invite every delegation that prefers solutions over spectacles to stand with us — the clause-writing begins the moment this speech ends.',
    `${a.country} extends its hand to all who would rather draft than declaim. The unmoderated caucus awaits our signatures.`,
    'Let those who agree with nothing above raise their placards now; the delegation adores a well-lit rival.',
  ];
  const closes = [
    `The delegation of ${a.country} is open to Points of Information — bring your best; we shall bring the facts.`,
    `${a.country} yields its remaining seconds to the dais, with gratitude and mild regret that time was not invented to be longer.`,
    a.t >= 4
      ? `${a.country} is open to Points of Information. Yes, even yours. Especially yours.`
      : `${a.country} now yields to the floor, confident that the questions will be sharp and the answers sharper.`,
  ];
  const seed = a.country.length + a.agenda.length;

  return [
    `${pick(greetings, seed)} ${pick(rises, seed + 1)}`,
    ``,
    pick(hooks, seed + 2),
    ``,
    pick(stances, seed + 3),
    ``,
    `${pick(connectors, a.t)[0]} ${a.p1}`,
    `${pick(connectors, a.t)[1]} ${a.p2}`,
    `${pick(connectors, a.t)[2]} ${a.p3}`,
    ``,
    pick(cta, seed + 4),
    ``,
    pick(closes, seed + 5),
  ].join('\n');
}

function modSpeech(a: { t: number; country: string; sub: string; p1: string }): string {
  const openers = [
    'Thank you, Honourable Chair. Speaking to the matter at hand:',
    'Gratitude, Honourable Chair. On this sub-topic, brevity first:',
    a.t >= 4
      ? 'Thank you, Chair — and with the committee\'s kind permission, straight to the point, which has been waiting patiently:'
      : 'Thank you, Honourable Chair.',
  ];
  const jabs = [
    'The previous speaker mistook passion for policy; this delegation shall not make the same voyage.',
    'Some in this room confuse volume with validity. This delegation shall simply bring evidence.',
    a.t >= 5
      ? 'The delegation has heard three opinions, one fact, and zero plans. Allow it to correct the ratio.'
      : 'The delegation builds on the useful parts of the previous speech and, diplomatically, recycles the rest.',
  ];
  const closes = [
    'I reyield my time to the Chair.',
    'I reyield the floor to the Honourable Chair, with thanks.',
    'Time nearly spent, the delegation reyields — the clause will follow shortly, in writing, as civilised people prefer.',
  ];

  return [
    pick(openers, a.country.length),
    ``,
    `On ${a.sub}, ${a.country} holds one position: ${a.p1}`,
    ``,
    pick(jabs, a.p1.length + a.t),
    ``,
    `Therefore, ${a.country} proposes this committee treat ${a.sub} not as talking points but as the first operative clause of an actual document.`,
    ``,
    pick(closes, a.sub.length),
  ].join('\n');
}

function closingSpeech(a: { t: number; country: string; agenda: string }): string {
  const arr = [
    `Honourable Chair, fellow delegates — the delegation of ${a.country} rises one last time, partly for closure, partly to ensure the record shows we were standing.`,
    ``,
    `We arrived as strangers with placards and leave as co-authors of something resembling progress on ${a.agenda}. The delegation thanks the Chair for its patience, the pages for their cardio, and the Rapporteur for remembering speeches we ourselves have strategically forgotten.`,
    ``,
    a.t >= 4
      ? `To our opponents: you were formidable, occasionally correct, and consistently loud. To our bloc: you were the resolution. To the dais: the gavel was wielded with distinction, and we noticed every time it was wielded at us.`
      : `To our rivals — thank you for the contest. To our bloc — thank you for the clauses. To the EB — thank you for order, humour, and the merciless enforcement of ninety-second limits.`,
    ``,
    `${a.country} came for the debate and stayed for the diplomacy. We yield — fully, finally, and with immense satisfaction — to the dais.`,
  ];
  return arr.join('\n');
}

function replySpeech(a: { t: number; country: string; opp: string }): string {
  const arr = [
    `Honourable Chair, the delegation of ${a.country} is aggrieved — formally, procedurally, and aesthetically — by the remarks of the delegation of ${a.opp}.`,
    ``,
    `We shall respond with the restraint for which ${a.country} is celebrated:`,
    ``,
    `First, the record must reflect that ${a.opp}'s characterization was creative, in the way fiction is creative.`,
    `Second, the delegation invites ${a.opp} to repeat its remarks slowly, so the Rapporteur may capture them accurately for the committee's permanent enjoyment.`,
    a.t >= 4
      ? `Third, ${a.country} notes that its national dignity is older than ${a.opp}'s argument, more documented, and considerably better sourced.`
      : `Third, ${a.country} affirms that dignity is not diminished by accusation — merely by responding to it poorly. This response, accordingly, ends here.`,
    ``,
    `${a.country} thanks the Chair for the indulgence of this reply and returns to the business of the committee, satisfied and, at last, at peace.`,
  ];
  return arr.join('\n');
}

/* ——————————————————— QUESTIONS (POIs) ——————————————————— */

export type QuestionAngle = 'fact-check' | 'hypocrisy' | 'consequences' | 'rhetorical' | 'data';

export const ANGLE_LABELS: Record<QuestionAngle, string> = {
  'fact-check': 'Fact-Check',
  hypocrisy: 'Hypocrisy Check',
  consequences: 'Consequences',
  rhetorical: 'Rhetorical Trap',
  data: 'Demand the Data',
};

const QUESTION_STEMS: Record<QuestionAngle, string[]> = {
  'fact-check': [
    'The delegate asserts that {claim}. Could the delegation cite the source of this claim — a UN document, ideally, rather than a group chat?',
    'Regarding {claim}: which specific resolution, treaty, or report does the delegation base this upon, and may the committee see the clause number?',
    'The committee has heard {claim}. Is this the documented position of the portfolio represented, or the improvised position of the delegate present?',
  ],
  hypocrisy: [
    'If {claim} is policy, how does the delegation reconcile it with its own record — or shall we kindly fetch the receipts?',
    'The delegation champions {claim}. Would it care to explain why its stated positions elsewhere appear to be in a committed relationship with the opposite view?',
    'The delegate speaks movingly of {claim}. When last did the delegation actually act on it — and in which year, roughly, was that?',
  ],
  consequences: [
    'The delegation proposes {claim}. Kindly walk the committee through the first three consequences — the real ones, not the cinematic ones.',
    'If {claim} is implemented as stated, which member states absorb the cost — and has anyone told them?',
    'Suppose {claim} fails. What is Plan B? Or does the delegation hold that failure is beneath it?',
  ],
  rhetorical: [
    'Is the delegation seriously suggesting {claim} — and if so, would it like a moment to reconsider before the committee takes minutes?',
    'Does the delegation truly believe {claim}, or is this a performance for the award shortlist? The committee is prepared to applaud either.',
    'The delegate offers {claim} as wisdom. Could it instead be offered as policy, with steps, deadlines, and a comma or two of specificity?',
  ],
  data: [
    'What number, in the delegation\'s possession, best supports {claim} — and may the committee see it in writing, with a date attached?',
    'The delegate cites prosperity regarding {claim}. Which year, which figure, and which source — or is this a matter of faith?',
    'In percentages, how much of the delegation\'s statement on {claim} survives contact with the Background Guide?',
  ],
};

export function buildQuestions(claim: string, angle: QuestionAngle, tone: number): string[] {
  const c = claim.trim() || PLACEHOLDER('what the other delegate just claimed');
  const stems = QUESTION_STEMS[angle];
  const order = stems
    .map((s, i) => ({ s, k: (i * 7 + tone * 3) % stems.length }))
    .sort((a, b) => a.k - b.k)
    .map((o) => o.s);
  return order.slice(0, 3).map((s) => s.replaceAll('{claim}', c));
}

/* ——————————————————— COMMENTS ——————————————————— */

export type CommentStance = 'agree' | 'partial' | 'disagree';

export interface CommentInput {
  speaker: string;
  you: string;
  theirPoint: string;
  counter: string;
  evidence: string;
  stance: CommentStance;
  tone: number;
}

export function buildComment(input: CommentInput): string {
  const speaker = input.speaker.trim() || PLACEHOLDER('the previous delegate');
  const you = input.you.trim() || PLACEHOLDER('your portfolio');
  const theirs = input.theirPoint.trim() || PLACEHOLDER('their point, summarised fairly');
  const counter = input.counter.trim() || PLACEHOLDER('your counter-point');
  const evidence = input.evidence.trim() || PLACEHOLDER('your evidence, clause number, or statistic');
  const t = Math.min(5, Math.max(1, Math.round(input.tone)));

  const opens: Record<CommentStance, string[]> = {
    agree: [
      `The delegation of ${speaker} has spoken with conviction, and ${you} finds itself in the rare and pleasant position of agreement.`,
      `${you} congratulates ${speaker} on a speech the delegation can support — an outcome rarer than quorum at the closing session.`,
    ],
    partial: [
      `The delegation of ${speaker} has been heard with interest, and ${you} agrees with approximately 47% of it — the precise percentage remains under negotiation.`,
      `${you} thanks ${speaker} for a speech that was half admirable and half negotiable, and shall address each half on its merits.`,
    ],
    disagree: [
      `The delegation of ${speaker} spoke with great fluency, and ${you} must now, with respect, translate it into policy.`,
      `${you} has listened carefully to ${speaker} and must, in the tradition of honest diplomacy, disagree with the general thrust of it.`,
    ],
  };

  const acknowledges = [
    `The delegation acknowledges the point that ${theirs}.`,
    `To be fair to ${speaker}, the argument that ${theirs} was made with polish.`,
  ];

  const pivots = [
    `However, the delegation must respectfully note that ${counter}.`,
    `And yet — ${counter}.`,
    t >= 4
      ? `Unfortunately for the record, ${counter}.`
      : `The committee, however, is asked to weigh one inconvenient detail: ${counter}.`,
  ];

  const evidences = [
    `As ${evidence} clearly demonstrates,`,
    `The delegation directs the committee to ${evidence}, which settles the matter with unusual efficiency:`,
    `Per ${evidence} — the delegation recommends reading it before responding, but will wait:`,
  ];

  const proposals = [
    `Therefore, ${you} proposes we draft language to this effect and invites ${speaker} to co-operate before this becomes a modest crisis.`,
    `Accordingly, ${you} suggests an amendment along these lines — and extends the courtesy of co-authorship to ${speaker}, who may claim it in the unmod.`,
    `The delegation therefore tables its counter-proposal and invites ${speaker} to sign, debate, or dream about it — two of the three are productive.`,
  ];

  const seed = you.length + theirs.length;

  return [
    pick(opens[input.stance], seed),
    ``,
    `${pick(acknowledges, seed + 1)} ${pick(pivots, seed + t)}`,
    ``,
    `${pick(evidences, seed + 2)} ${counter.endsWith('.') ? '' : ''}the delegation rests its case on more than sentiment.`,
    ``,
    pick(proposals, seed + 3),
  ].join('\n');
}

/* ——————————————————— BLOC NAMES ——————————————————— */

const BLOC_PREFIXES = [
  'The Grand Coalition for',
  'The Sacred Alliance of',
  'The United Front of',
  'The Illustrious Bloc of',
  'The Sovereign Fellowship for',
  'The Formidable Cartel of',
  'The Concord of',
  'The League of Extraordinary',
  'The Harmonious Combine of',
  'The Distinguished Caucus on',
];

const BLOC_SUFFIXES = [
  'and Concerned Onlookers',
  '(Provisional)',
  '& Friends',
  'Against Mediocrity',
  'of Righteous Deliberation',
  'and One Abstainer',
  '(Est. This Unmod)',
  'for a Better Tomorrow, Pending Approval',
];

export function generateBlocNames(cause: string, seedOffset = 0): string[] {
  const c = cause.trim() || 'Vague Aspirations';
  const seed = c.length + seedOffset * 7;
  const out: string[] = [];
  for (let i = 0; i < 5; i++) {
    const pre = BLOC_PREFIXES[(seed * 3 + i * 2) % BLOC_PREFIXES.length];
    const suf = BLOC_SUFFIXES[(seed * 5 + i * 3 + 1) % BLOC_SUFFIXES.length];
    out.push(`${pre} ${c} ${suf}`);
  }
  return out;
}

/* ——————————————————— UTIL ——————————————————— */

export function estimateSeconds(text: string, wpm = 130): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.round((words / wpm) * 60);
}
