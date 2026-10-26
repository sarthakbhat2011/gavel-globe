/**
 * Gavel & Globe — the official library of procedural knowledge,
 * lovingly annotated for the formally hilarious delegate-in-training.
 *
 * Educational content: standard Model UN rules of procedure (UNA-USA /
 * THIMUN lineage) with notes on how Indian MUN conferences typically
 * run them. Always defer to your own conference's RoP document —
 * committees, like fingerprints and grudges, are all slightly different.
 */

/* ————————————————— FLOW OF DEBATE ————————————————— */

export interface DebateStage {
  id: string;
  step: number;
  title: string;
  subtitle: string;
  formal: string;
  reality: string;
  india: string;
  duration: string;
}

export const DEBATE_STAGES: DebateStage[] = [
  {
    id: 'roll-call',
    step: 1,
    title: 'Roll Call',
    subtitle: 'Where you confirm you exist',
    formal:
      'The Rapporteur or Chair calls each portfolio alphabetically. The delegate answers "Present" or "Present and Voting." Quorum is confirmed once a majority is assembled.',
    reality:
      'You say one of two words. That is it. That is the whole task. Yet roughly 14% of first-time delegates still look terrified doing it.',
    india:
      'Answer crisply with your portfolio name visible ("The Kingdom of Spain, present"). Mumbling "here" is not recognised procedure, though it is recognised as adorable.',
    duration: '5–10 minutes',
  },
  {
    id: 'agenda',
    step: 2,
    title: 'Setting the Agenda',
    subtitle: 'Democracy decides what to argue about',
    formal:
      'When two or more topics are listed, delegates move to set the agenda, speak for and against each order, and vote. A simple majority usually decides which topic is debated first.',
    reality:
      'Some committees spend more time deciding what to debate than debating. This is not a bug in the system. It is tradition, and occasionally strategy.',
    india:
      'The agenda-setting vote is practically a festival — motions, speeches, countermotions, and at least one delegate who motions to combine both topics "for synergy." Pick the topic your portfolio can dominate, then fight for it.',
    duration: '30 min – 2 hours',
  },
  {
    id: 'gsl',
    step: 3,
    title: 'General Speakers List (GSL)',
    subtitle: 'Opening statements, placard glory',
    formal:
      'The committee establishes a General Speakers List with a set speaking time (commonly 60–120 seconds). Delegates deliver their portfolio\'s opening position on the agenda.',
    reality:
      'Ninety seconds to declare your nation\'s entire foreign policy. The gavel shows no mercy to the rambling.',
    india:
      'In Indian MUNs, GSL speeches are usually 60–90 seconds and are frequently followed by Points of Information — the floor raises placards and the speaker selects questioners. Prepare answers, not just speeches.',
    duration: 'Hours, blissfully',
  },
  {
    id: 'mod-cauc',
    step: 4,
    title: 'Moderated Caucus',
    subtitle: 'A themed debate in miniature',
    formal:
      'A delegate moves for a moderated caucus on a specific sub-topic with a total time and speaking time (e.g., 10 minutes total, 45 seconds per speaker). The Chair recognises delegates from the floor.',
    reality:
      'Rapid-fire diplomacy. The extroverts feast. The introverts take notes and strike later, with precision.',
    india:
      'Mod caucuses are the primary engine of Indian MUN debate. A well-phrased motion with a sharp sub-topic is an early signal to the EB that you can steer discussion, not just attend it.',
    duration: '10–20 minutes each',
  },
  {
    id: 'unmod',
    step: 5,
    title: 'Unmoderated Caucus',
    subtitle: 'Lobbying. Alliance speed-dating.',
    formal:
      'A motion for an unmoderated caucus suspends formal debate for a set period, permitting delegates to leave their seats and hold informal consultations.',
    reality:
      'Officially "informal consultations." Unofficially: geopolitics speed-dating, where blocs are born, betrayals are planned, and someone always says "let\'s merge our working papers" before having written anything.',
    india:
      'Indian MUN veterans treat unmods as the actual conference — roughly 70% of a resolution is born here. Novices who quietly listen, take notes, and offer one good clause to a bloc rise faster than those who monologue.',
    duration: '10–20 minutes each',
  },
  {
    id: 'working-paper',
    step: 6,
    title: 'Working Papers',
    subtitle: 'Ideas before they wear suits',
    formal:
      'A working paper is an informal document presenting a delegation\'s or bloc\'s proposals. It requires no specific format and is not yet a draft resolution.',
    reality:
      'The rough draft. Usually a Google Doc at 2 a.m., twelve delegates typing over each other, and one person on "track changes" duty having a quiet crisis.',
    india:
      'Expect the EB to ask for working papers early in Indian committees. Getting your bloc\'s name on the first working paper earns you sponsor status later — and sponsor status earns you the mic.',
    duration: 'N/A (chaos-native)',
  },
  {
    id: 'draft-res',
    step: 7,
    title: 'Draft Resolutions',
    subtitle: 'The document wears a suit now',
    formal:
      'A draft resolution is a formal document with sponsors, signatories, preambulatory clauses and numbered operative clauses. It must meet a signatory threshold and be approved by the dais before introduction.',
    reality:
      'Formatted, proofread, and read aloud clause by clause to a committee that is simultaneously listening, planning its amendments, and pretending its own draft is different.',
    india:
      'Introducing a draft requires a motion; Indian committees often read operative clauses aloud and allow a Q&A period afterwards. Formatting counts — the EB genuinely deducts aura for a mislabelled draft.',
    duration: '30–60 min to introduce',
  },
  {
    id: 'amendments',
    step: 8,
    title: 'Amendments',
    subtitle: 'Surgery on the sacred text',
    formal:
      'Amendments alter operative clauses. Friendly amendments are accepted by all sponsors and typically adopted without a vote; unfriendly amendments require a majority vote to be adopted.',
    reality:
      'A polite bloodsport. Delegates cross out each other\'s clauses with the composed malice of 18th-century aristocrats.',
    india:
      'Indian committees frequently allow verbal amendments and "amendment chits." Budget your time: submitting five amendments and defending two well beats submitting fifteen and defending none.',
    duration: '1–2 hours, easily',
  },
  {
    id: 'voting',
    step: 9,
    title: 'Voting Procedures',
    subtitle: 'The moment of arithmetic',
    formal:
      'A motion to enter voting procedures closes debate. Draft resolutions pass by simple majority unless designated an "important question," which requires two-thirds. Roll call votes may be moved. No entry, no exit — voting is a locked room.',
    reality:
      'Phones face down. Bloc leaders do quiet headcounts. Someone discovers they promised two blocs the same thing. Physics cannot save them now.',
    india:
      '"Present and Voting" delegates cannot abstain — Indian EBs enforce this with glee. After the result, applause is procedurally unauthorised yet emotionally mandatory.',
    duration: '20–45 minutes',
  },
  {
    id: 'adjourn',
    step: 10,
    title: 'Adjournment & Awards',
    subtitle: 'The gavel falls. Legends remain.',
    formal:
      'The committee moves to adjourn. The EB delivers closing remarks and announces awards based on debate quality, negotiation, leadership and documentation.',
    reality:
      'Applause. Someone cries. A Best Delegate is crowned and immediately adds it to every bio they own. Everyone promises to stay in touch; 60% of the bloc group chat goes silent by Monday.',
    india:
      'Indian awards ceremony culture is unmatched: Best Delegate, High Commendation, Commendation, Verbal Mentions — and at socials later, Best Dressed, decided by a jury of exactly nobody official.',
    duration: 'Sweet, brief',
  },
];

/* ————————————————— POINTS ————————————————— */

export interface PointCard {
  id: string;
  name: string;
  sayLine: string;
  interrupts: boolean;
  purpose: string;
  example: string;
  humor: string;
  severity: 1 | 2 | 3 | 4 | 5;
}

export const POINTS: PointCard[] = [
  {
    id: 'privilege',
    name: 'Point of Personal Privilege',
    sayLine: '"Point of personal privilege."',
    interrupts: true,
    purpose:
      'Raises a matter of delegate comfort or the committee\'s ability to proceed: inaudible speakers, room temperature, a broken microphone, or needing to briefly leave.',
    example:
      '"Point of personal privilege: the air conditioning appears to have ambitions of Antarctic governance. Could it be moderated?"',
    humor:
      'The only point that may generally interrupt a speaker — including another point. Use it when the microphone has betrayed you or when the delegate two seats down has achieved foghorn status.',
    severity: 1,
  },
  {
    id: 'order',
    name: 'Point of Order',
    sayLine: '"Point of order: ..."',
    interrupts: true,
    purpose:
      'Flags a procedural error by the dais or a delegate — exceeded speaking time, an improper vote count, a motion handled out of order.',
    example:
      '"Point of order: the previous speaker has exceeded the allotted speaking time by a margin visible from space."',
    humor:
      'The polite art of accusing the Chair of a procedural misdemeanour. Do it accurately and the EB nods with respect. Do it wrongly and you have donated your credibility to the floor.',
    severity: 3,
  },
  {
    id: 'inquiry',
    name: 'Point of Parliamentary Inquiry',
    sayLine: '"Point of parliamentary inquiry."',
    interrupts: false,
    purpose:
      'Asks the Chair a question about procedure itself — what motion is on the floor, what happens next, whether amendments are in order now.',
    example:
      '"Point of parliamentary inquiry: is the committee presently in a moderated caucus, or merely in a very intense group discussion?"',
    humor:
      'Your lifeline for the first three hours, when everything is confusing and everyone else is pretending they invented procedure. The Chair must answer it. Nobody may mock you for asking. (They will anyway, silently.)',
    severity: 1,
  },
  {
    id: 'reply',
    name: 'Right of Reply',
    sayLine: 'Sought via chit: "The delegation of [X] requests a Right of Reply against the delegate of [Y]."',
    interrupts: false,
    purpose:
      'A formal reply when a delegation\'s national dignity or head of state has been insulted. In most formats it is submitted in writing to the EB and granted rarely, at the Chair\'s discretion.',
    example:
      '"The delegate called our national cuisine \'a bold interpretation of soup.\' The Republic shall not be slandered at breakfast."',
    humor:
      'Reserved for grave offences, like being described as "a smaller neighbour" in a GSL speech. Most EBs grant roughly one per conference, as a treat.',
    severity: 5,
  },
];

/* ————————————————— MOTIONS ————————————————— */

export type MotionCategory =
  | 'Agenda'
  | 'Debate'
  | 'Caucus'
  | 'Documents'
  | 'Voting'
  | 'Epilogue';

export interface Motion {
  id: string;
  name: string;
  category: MotionCategory;
  sayLine: string;
  useWhen: string;
  ebReaction: string;
  priority: 'Essential' | 'Common' | 'Situational' | 'Legendary';
}

export const MOTIONS: Motion[] = [
  {
    id: 'set-agenda',
    name: 'Motion to Set the Agenda',
    category: 'Agenda',
    sayLine: '"Motion to set the agenda to Topic B, with a speaking time of ninety seconds."',
    useWhen:
      'The committee opens and two topics are listed. Speak for or against each order, then the committee votes on which to debate first.',
    ebReaction:
      'The EB sighs with knowing affection — it is going to be one of those committees, and they love it.',
    priority: 'Essential',
  },
  {
    id: 'open-gsl',
    name: 'Motion to Open / Extend the General Speakers List',
    category: 'Debate',
    sayLine: '"Motion to open the General Speakers List with a speaking time of ninety seconds."',
    useWhen: 'After the agenda is set, to begin formal speeches; or to add speaking slots when the list runs dry.',
    ebReaction: 'Approved with the enthusiasm of a librarian approving a book return.',
    priority: 'Common',
  },
  {
    id: 'mod-cauc',
    name: 'Motion for a Moderated Caucus',
    category: 'Caucus',
    sayLine:
      '"Motion for a moderated caucus on [sub-topic], with a total time of ten minutes and a speaking time of forty-five seconds."',
    useWhen:
      'You want focused, rapid debate on one sub-topic. Always state topic, total time, and speaking time — omit one and watch the motion perish.',
    ebReaction: 'The Chair notes that you are the third person to move the same sub-topic and awards the mic to the best phrasing.',
    priority: 'Essential',
  },
  {
    id: 'unmod',
    name: 'Motion for an Unmoderated Caucus',
    category: 'Caucus',
    sayLine: '"Motion for an unmoderated caucus of fifteen minutes."',
    useWhen: 'Time to leave your seat, form blocs, and draft. Move it when formal debate starts repeating itself — which is always by hour three.',
    ebReaction: 'Instantly granted. The EB also wants to stretch its legs and judge you from a distance.',
    priority: 'Essential',
  },
  {
    id: 'extend',
    name: 'Motion to Extend the Previous Caucus',
    category: 'Caucus',
    sayLine: '"Motion to extend the previous moderated caucus by five minutes."',
    useWhen: 'The discussion is productive and the timer is winning. Extending an unmod is a common plea for "five more minutes of diplomacy."',
    ebReaction: 'Granted if debate is genuinely rich; denied with a smile if the blocs are just reorganising their gossip.',
    priority: 'Common',
  },
  {
    id: 'introduce',
    name: 'Motion to Introduce a Draft Resolution',
    category: 'Documents',
    sayLine:
      '"Motion to introduce Draft Resolution 1.1 and read its operative clauses aloud."',
    useWhen:
      'Your draft has dais approval and enough signatories. Indian committees typically read operative clauses aloud, followed by a Q&A.',
    ebReaction: 'The Rapporteur readies the projector. Someone\'s font choice is about to be discussed in the evaluation notes.',
    priority: 'Essential',
  },
  {
    id: 'qa',
    name: 'Motion for a Question-and-Answer Period',
    category: 'Documents',
    sayLine:
      '"Motion for a question-and-answer period of five minutes, with thirty seconds per answer."',
    useWhen:
      'After a draft is introduced — the committee\'s chance to interrogate sponsors. Sponsors, bring your clause knowledge; you wrote it, allegedly.',
    ebReaction: 'The Chair braces for "the delegate asks, with respect, what exactly clause 4 means."',
    priority: 'Common',
  },
  {
    id: 'amend',
    name: 'Motion to Submit / Read an Amendment',
    category: 'Documents',
    sayLine: '"Motion to read Amendment 1.2 to Draft Resolution 1.1."',
    useWhen: 'You wish to alter, strike, or add operative clauses. Friendly if all sponsors consent; unfriendly if it needs a vote.',
    ebReaction: 'The dais checks formatting. An amendment with correct grammar advances halfway on charm alone.',
    priority: 'Common',
  },
  {
    id: 'enter-voting',
    name: 'Motion to Enter Voting Procedures',
    category: 'Voting',
    sayLine: '"Motion to close debate and enter voting procedures."',
    useWhen:
      'Debate has run its course and the blocs are counting heads. Usually needs a second and, in many RoPs, a two-thirds majority to pass.',
    ebReaction: 'Phones go face-down. The room acquires the gravity of a functioning democracy.',
    priority: 'Essential',
  },
  {
    id: 'roll-call-vote',
    name: 'Motion for a Roll Call Vote',
    category: 'Voting',
    sayLine: '"Motion for a roll call vote on Draft Resolution 1.1."',
    useWhen:
      'You want every portfolio\'s vote on the record — maximum drama, maximum accountability, minimal anonymity for the wavering.',
    ebReaction: 'The Rapporteur sighs, uncaps an actual or metaphorical pen, and prepares to say "the delegation of…" forty times.',
    priority: 'Situational',
  },
  {
    id: 'divide',
    name: 'Motion to Divide the Question',
    category: 'Voting',
    sayLine:
      '"Motion to divide the question and vote upon operative clauses 4 and 7 separately."',
    useWhen:
      'A draft bundles good clauses with catastrophic ones. Split the vote and save the parts worth saving — surgical, legal, devastating.',
    ebReaction: 'The EB remembers your name. Sponsors remember it differently.',
    priority: 'Situational',
  },
  {
    id: 'table',
    name: 'Motion to Table Debate',
    category: 'Debate',
    sayLine: '"Motion to table debate on the current topic until a later session."',
    useWhen: 'Discussion is hopelessly deadlocked and parking the topic frees the committee. The diplomatic equivalent of "let\'s circle back."',
    ebReaction: 'Granted rarely. The Chair knows a sulk when it sees one.',
    priority: 'Situational',
  },
  {
    id: 'adjourn',
    name: 'Motion to Adjourn / Suspend the Meeting',
    category: 'Epilogue',
    sayLine: '"Motion to suspend the meeting for lunch."',
    useWhen: 'End of session or end of day. Between you and the buffet stands only this motion and the Chair\'s gavel.',
    ebReaction: 'The single most unanimously supported motion in the history of multilateralism. Never defeated. Never.',
    priority: 'Essential',
  },
  {
    id: 'appeal',
    name: 'Motion to Appeal the Chair\'s Decision',
    category: 'Epilogue',
    sayLine: '"The delegation of [X] appeals the decision of the Chair, and requests that the appeal be put to a vote."',
    useWhen:
      'You genuinely believe the Chair erred on a procedural ruling and you possess the courage of a war hero and the allies to prove it.',
    ebReaction: 'A hush falls. The Chair\'s eyebrows achieve new altitudes. Legends are made; detentions, occasionally, also.',
    priority: 'Legendary',
  },
];

/* ————————————————— GLOSSARY ————————————————— */

export interface GlossaryTerm {
  term: string;
  def: string;
  joke?: string;
}

export const GLOSSARY: GlossaryTerm[] = [
  {
    term: 'Dais',
    def: 'The raised table where the Executive Board sits. Elevated both literally and spiritually.',
    joke: 'Approach with respect. Do not approach at all if you have just lost a vote.',
  },
  {
    term: 'Executive Board (EB)',
    def: 'The committee\'s authority: Chair, Vice-Chair/Director, and Rapporteur. They run procedure, judge quality, and wield the gavel.',
    joke: 'Address them as "Honourable Chair," never "bro," however friendly the eye contact.',
  },
  {
    term: 'Chair',
    def: 'Presides over debate, rules on motions and points, and keeps the gavel in ceremonial fighting condition.',
  },
  {
    term: 'Rapporteur',
    def: 'Keeps the record of proceedings, attendance and speeches; assists the Chair and often helps decide awards.',
    joke: 'Be consistently kind to this person. They remember everything. Everything.',
  },
  {
    term: 'Portfolio',
    def: 'The country or character you represent. From the first gavel, you are no longer a student — you are the French Republic. Method acting encouraged.',
  },
  {
    term: 'Placard',
    def: 'Your name-plate and voting card. Raised to be recognised, used to vote, occasionally fanned when the room is warm.',
  },
  {
    term: 'Chit',
    def: 'A note passed through pages to other delegates or the EB — the original social network. Used for questions to speakers, Right of Reply requests, and low-stakes diplomacy.',
  },
  {
    term: 'Bloc',
    def: 'An alliance of delegations working toward a common document. Loyalty lasts precisely until the voting arithmetic changes.',
  },
  {
    term: 'Floater',
    def: 'A delegate loyal to no fixed bloc, auctioning support to the highest bidder.',
    joke: 'Despised in principle; courted desperately in practice.',
  },
  {
    term: 'Quorum',
    def: 'The minimum number of delegates needed to conduct business — usually a simple majority of the committee.',
  },
  {
    term: 'Simple Majority',
    def: 'More votes in favour than against (abstentions don\'t count either way). Passes most motions and draft resolutions.',
  },
  {
    term: 'Two-Thirds Majority',
    def: 'The heightened bar for "important questions" and certain procedural votes, varying by conference RoP.',
  },
  {
    term: 'Veto',
    def: 'The P5\'s legendary power in the actual Security Council — in MUN, usually modelled in UNSC committees.',
    joke: 'Use responsibly. And by responsibly, we mean theatrically, at least once.',
  },
  {
    term: 'Position Paper',
    def: 'A pre-conference document summarising your portfolio\'s stance, background and proposed solutions. Often the basis for a Best Position Paper award.',
    joke: 'The one document you write before the conference and quote during it, so it feels worth the all-nighter.',
  },
  {
    term: 'Background Guide (BG)',
    def: 'The study bible your EB wrote about the agenda. Contains history, portfolios\' positions, and the exact RoP variants to be used.',
    joke: 'Not bedtime reading. It is 2 a.m. reading. There is a difference.',
  },
  {
    term: 'Page',
    def: 'The runner who carries chits and placards around the room.',
    joke: 'Treat them well — they control the physical logistics of your diplomacy, and their goodwill is underrated currency.',
  },
  {
    term: 'Directive',
    def: 'In crisis committees, a short action order a delegate submits secretly (e.g., "mobilise the 3rd fleet"). The crisis staff decides the consequences.',
  },
  {
    term: 'Important Question',
    def: 'A designation requiring a two-thirds vote to pass, applied to momentous draft resolutions.',
    joke: 'Yes, being called "important" literally changes the math. Diplomacy is 40% vocabulary.',
  },
  {
    term: 'Division of the House',
    def: 'A request for a recorded or standing vote when results are disputed — demanding receipts for democracy.',
  },
  {
    term: 'Present vs. Present and Voting',
    def: '"Present" allows abstaining on substantive votes; "Present and Voting" forbids abstention — you must choose a side.',
  },
];

/* ————————————————— RESOLUTION ANATOMY ————————————————— */

export const PREAMB_STARTERS = [
  'Affirming', 'Alarmed by', 'Appreciating', 'Bearing in mind', 'Convinced',
  'Emphasizing', 'Guided by', 'Having considered', 'Noting with deep concern',
  'Reaffirming', 'Recalling', 'Recognizing', 'Seriously concerned', 'Welcoming',
];

export const OPERATIVE_STARTERS = [
  'Accepts', 'Affirms', 'Calls upon', 'Condemns', 'Decides', 'Demands',
  'Draws attention', 'Encourages', 'Endorses', 'Invites', 'Proclaims',
  'Recommends', 'Requests', 'Resolves', 'Strongly condemns', 'Urges',
];

export const SAMPLE_PREAMB = [
  'Alarmed by the delegation of [Country] confusing the microphone with a karaoke machine,',
  'Recalling that the last three committees on this agenda produced elegantly formatted documents and zero actual outcomes,',
  'Noting with deep concern that the phrase "let us be realistic" has been deployed forty-one times before lunch,',
];

export const SAMPLE_OPERATIVE = [
  'Strongly condemns the practice of reading resolutions aloud in a monotone engineered to induce diplomatic sleep;',
  'Decides that every bloc must contain at least one delegate who has read the full Background Guide;',
  'Calls upon all member states to bring snacks to the unmoderated caucus, in the interest of international peace;',
];

/* ————————————————— INDIAN MUN CIRCUIT ————————————————— */

export interface IndiaCard {
  icon: string;
  title: string;
  body: string;
  aside: string;
}

export const INDIA_CARDS: IndiaCard[] = [
  {
    icon: 'ScrollText',
    title: 'The Indian Hybrid Procedure',
    body:
      'Most Indian MUNs run a UNA-USA–inspired hybrid with local embellishments; a handful of school conferences prefer THIMUN style. Points, motions and caucus structures are broadly familiar — but every conference publishes its own RoP with tweaks.',
    aside:
      'Read your conference\'s RoP PDF. Yes, all of it. Delegates who quote the correct RoP clause at the right moment are quietly moved to the shortlist for awards.',
  },
  {
    icon: 'Vote',
    title: 'The Sacred Agenda Vote',
    body:
      'Agenda setting in Indian committees is a full ceremonial debate — speeches for Topic A, speeches for Topic B, countermotions, then a substantive vote. It routinely consumes the first hour, and it is your first chance to be noticed.',
    aside:
      'Strategy: commit early to the topic your portfolio can dominate. A rousing "Topic B, and I shall tell you why in exactly ninety seconds" is a classic opening gambit.',
  },
  {
    icon: 'MessageSquareShare',
    title: 'POIs & Chit Culture',
    body:
      'After GSL speeches, the floor is commonly opened to Points of Information — you raise your placard, the speaker picks questioners, answers run 15–30 seconds. Chits flow via pages to delegates and the EB: questions, RoR requests, and appeals.',
    aside:
      'Write clearly, be kind to pages, and remember a chit is a formal document: "Dear delegate, with respect — your numbers appear fictional. Sources?"',
  },
  {
    icon: 'Crown',
    title: 'Addressing the EB',
    body:
      'The Executive Board — Chair, Vice-Chair, Rapporteur — is addressed as "Honourable Chair," "Esteemed Vice-Chair," and so on. Third-person references to other delegates are the norm ("the delegate of Japan believes…").',
    aside:
      'Disagreeing with the Chair is permitted via Point of Order and survived best by those who bring evidence, allies, and a lawyer-like calm.',
  },
  {
    icon: 'Drama',
    title: 'Committee Flavours of India',
    body:
      'Classic UN bodies (UNGA, UNHRC, UNSC), crisis committees and JCCs with directives and portfolio powers, historical cabinets (1971 War Cabinet, Constituent Assembly), and India\'s famous homegrown format — the AIPPM, where portfolios are political leaders and the language is parliamentary.',
    aside:
      'In AIPPM, calling the Chair "Honourable Speaker" and your rivals "the honourable member from the other side" earns instant procedural respect.',
  },
  {
    icon: 'MapPinned',
    title: 'The Circuit',
    body:
      'India runs one of the world\'s liveliest MUN circuits: storied school conferences (The Doon School MUN, CMUN Mumbai, Daly College MUN), college circuits at IITs, IIMs and NLUs, and large branded events like HMUN India and IIMUN chapters across cities.',
    aside:
      'Register early — quality committee allotments go fast, and the Background Guide will arrive fashionably late regardless.',
  },
  {
    icon: 'Trophy',
    title: 'Awards, Ranked',
    body:
      'Best Delegate (the gavel-adjacent glory), High Commendation, Commendation, Verbal Mention, Best Position Paper, and Best Delegation for schools. EBs reward negotiation, leadership and documentation — not merely volume.',
    aside:
      'A Verbal Mention means the EB said your name with approval and gave you no trophy. It is simultaneously nothing and everything.',
  },
  {
    icon: 'PartyPopper',
    title: 'The Social',
    body:
      'Every Indian MUN ends with a social — DJ, semi-formals, and the day\'s bitterest rivals exchanging Instagram handles with suspicious warmth. Alliances are re-forged as friendships; motion formalities are suspended.',
    aside:
      'No points of order on the dance floor. The gavel is silent. The playlist is not.',
  },
];

export const SURVIVAL_KIT = [
  'Formals — blazer, formal shoes, ironed. Wrinkled formals signal a wrinkled foreign policy.',
  'Printed Background Guide & the conference RoP — annotated, dog-eared, respected.',
  'Pens (three; one will be adopted by another bloc) and a notepad for chits and speech notes.',
  'Water bottle. Points of Personal Privilege begin with hydration.',
  'Snacks — an unmoderated caucus runs on diplomacy and biscuits.',
  'Phone charger. Your bloc\'s Google Doc is the real resolution and it lives in your battery.',
  'A 60–90 second opening speech, rehearsed twice out loud. Once in the mirror, once in the shower. Both count.',
  'Humility — optional per several senior delegates, strongly recommended by every EB ever.',
];

export const COMMANDMENTS = {
  dos: [
    'Research your portfolio\'s actual policy — allies, rivals, red lines, favourite UN catchphrases.',
    'Speak early. The first GSL session is when the EB is fresh and impressed.',
    'Lobby hard in unmods; roughly 70% of MUN success is decided off the mic.',
    'Cite real resolutions and facts — "Resolution 1325, operative paragraph 2" is a power move.',
    'Take notes on other speeches; quoting a rival\'s exact words back is devastating in moderation.',
    'Write clauses for your bloc — authors get named, named delegates get awards.',
    'Be kind to pages, rapporteurs, and organizers. The conference runs on their goodwill.',
  ],
  donts: [
    'Don\'t memorise your speech into robotic submission — the EB wants a diplomat, not a dial-up modem.',
    'Don\'t say "I think my country feels…" You are the country. Speak in first person plural.',
    'Don\'t repeat points already made — the committee heard it, and so did the EB.',
    'Don\'t invent facts. The Rapporteur can fact-check, and the internet remembers.',
    'Don\'t threaten nuclear war in a human rights committee. It happens. It is always a mistake.',
    'Don\'t monologue in unmods. Listening is negotiating\'s dangerous, underrated twin.',
    'Don\'t treat the Rapporteur as furniture. They write the evaluation notes. See "kind to pages."',
  ],
};

/* ————————————————— QUIZ ————————————————— */

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export const QUIZ: QuizQuestion[] = [
  {
    id: 1,
    question: 'During roll call, you want the freedom to abstain on later substantive votes. You answer…',
    options: ['"Present and Voting"', '"Present"', '"Here, emotionally"', '"Bonjour"'],
    answer: 1,
    explanation:
      '"Present" lets you abstain later. "Present and Voting" is an honour-bound pledge to vote yes or no on substantive matters — abstention forbidden. Choose wisely; Indian EBs enforce this with delight.',
  },
  {
    id: 2,
    question: 'The AC has turned the committee into Shimla in January, and you cannot hear the Chair over your own chattering teeth. Which point do you raise?',
    options: [
      'Point of Order',
      'Point of Parliamentary Inquiry',
      'Point of Personal Privilege',
      'Point of No Return',
    ],
    answer: 2,
    explanation:
      'Point of Personal Privilege covers delegate comfort — audibility, temperature, health. It is the one point that may generally interrupt a speaker. Use it bravely; frostbite is not a recognised diplomatic posture.',
  },
  {
    id: 3,
    question: 'A proper motion for a moderated caucus must specify…',
    options: [
      'Only the sub-topic',
      'The sub-topic, total time, and speaking time per delegate',
      'Snack arrangements',
      'The names of everyone you plan to argue with',
    ],
    answer: 1,
    explanation:
      'Topic + total time + speaking time. The classic novice error is omitting speaking time, at which point the motion fails and dignity briefly follows it.',
  },
  {
    id: 4,
    question: 'A friendly amendment requires the consent of…',
    options: ['The Chair only', 'All sponsors of the draft resolution', 'Your mother', 'A simple majority of the committee'],
    answer: 1,
    explanation:
      'Friendly means every sponsor consents — it is then typically adopted without a vote. Unfriendly amendments go to a vote, and feelings are expressly not included.',
  },
  {
    id: 5,
    question: 'Signatories of a draft resolution…',
    options: [
      'Must support it until death',
      'Merely wish to see it debated, and need not support it',
      'Must all be P5 members',
      'Are legally married to the document',
    ],
    answer: 1,
    explanation:
      'Signatories say "we would like to hear this debated" (usually a set share of the committee). Sponsors are the authors who defend it. One signature ≠ one loyalty.',
  },
  {
    id: 6,
    question: 'In most Indian MUNs, a Right of Reply is sought by…',
    options: [
      'Shouting from your seat with feeling',
      'Submitting a chit to the EB after your national dignity has been impugned',
      'Creating a WhatsApp group',
      'It is guaranteed upon request',
    ],
    answer: 1,
    explanation:
      'It goes through the EB in writing, at the Chair\'s discretion, and is granted rarely — reserved for grave offences like being described as "a smaller neighbour."',
  },
  {
    id: 7,
    question: 'A two-thirds majority is typically required for…',
    options: [
      'Passing an unmoderated caucus',
      'Important questions and certain procedural votes (varies by RoP)',
      'Choosing the lunch menu',
      'Renaming the committee',
    ],
    answer: 1,
    explanation:
      'Heightened thresholds apply to designated "important questions" and select procedural moves in many RoPs. Always check your conference\'s exact list — the math of power is local.',
  },
  {
    id: 8,
    question: 'AIPPM is…',
    options: [
      'An airport code',
      'The All India Political Parties Meet — an Indian speciality where portfolios are political leaders',
      'A UN agency for punctuation',
      'A new cryptocurrency',
    ],
    answer: 1,
    explanation:
      'AIPPM is India\'s homegrown format: delegates role-play political leaders in a parliamentary-style meet. Address the "Honourable Speaker" and refer to rivals as "the honourable member."',
  },
  {
    id: 9,
    question: 'The Rapporteur of your committee…',
    options: [
      'Only operates the microphone',
      'Assists the Chair and keeps the record of proceedings and speeches',
      'Single-handedly decides all awards',
      'Is the committee\'s DJ',
    ],
    answer: 1,
    explanation:
      'The Rapporteur maintains the record — attendance, speeches, the whole memory of the committee — and often informs award decisions. Be consistently kind. They remember everything.',
  },
  {
    id: 10,
    question: 'Ten minutes into your first unmoderated caucus, you realise you know nothing. Your first move:',
    options: [
      'Panic, publicly and theatrically',
      'Find your natural bloc, ask questions, and take notes — unmods are for building, not performing',
      'Motion to adjourn immediately',
      'Fake an urgent phone call from your "Foreign Ministry"',
    ],
    answer: 1,
    explanation:
      'Unmods are where documents and blocs are actually built. Novices who listen, offer one good clause, and ask sharp questions rise faster than any loud monologuer. Ask the EB — a parliamentary inquiry, not a distress flare.',
  },
];

export const QUIZ_VERDICTS: { min: number; title: string; note: string }[] = [
  {
    min: 0,
    title: 'Point of Personal Privilege',
    note: 'You have raised it on behalf of your own knowledge, which currently needs water and a chair. Revisit the Rules tab and return — the committee will wait. Probably.',
  },
  {
    min: 4,
    title: 'Signatory Material',
    note: 'You may not author the resolution yet, but you may stand near it, look supportive, and learn by osmosis. Entire careers have been built on less.',
  },
  {
    min: 7,
    title: 'Sponsor Energy',
    note: 'The EB has noticed you. Delegates now seek your opinion on clause structure and lunch. Use this power gently.',
  },
  {
    min: 10,
    title: 'The Gavel Is Yours',
    note: 'A perfect score. The Chair thanks the honourable delegate. Somewhere, a Vice-Chair is updating an award shortlist with your name already at the top.',
  },
];
