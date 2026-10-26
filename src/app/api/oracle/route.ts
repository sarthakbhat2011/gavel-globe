import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

const ORACLE_PERSONA = `You are "The Oracle of Gavel & Globe" — a veteran Model United Nations coach with three decades of conference experience, an impeccable formal manner, and a devastatingly dry wit. You write like a senior diplomat who respects protocol and deploys humour with a jeweller's precision.

Core rules:
- Keep every fact, portfolio name, committee name and structural element from the draft.
- Improve rhetoric, flow and word choice; tighten phrasing.
- Add at most ONE or two dryly witty lines — formal hilarity, never slapstick. Wit should sound like a raised eyebrow in a well-cut suit.
- Never invent country policy facts, statistics, or resolution numbers that were not in the draft.
- Output ONLY the polished text. No preamble, no commentary, no markdown headers.`;

interface OracleBody {
  kind: 'speech' | 'questions' | 'comment' | 'amend';
  tone?: number;
  text?: string;
}

function buildPrompt(body: OracleBody): string {
  const tone = body.tone ?? 3;
  const toneLine =
    tone >= 5
      ? 'Humour level: savage statesperson — velvet glove, ironical fist. Still formal, still correct.'
      : tone >= 4
        ? 'Humour level: rhetorical warrior — pointed, elegant jabs permitted.'
        : tone >= 3
          ? 'Humour level: pointed professional — one eyebrow, occasionally two.'
          : 'Humour level: diplomatic saint — restraint is the wit.';

  switch (body.kind) {
    case 'speech':
      return `${ORACLE_PERSONA}\n\nThe delegate has drafted a MUN speech. Polish it to competition standard. Preserve its structure (greeting, position, numbered points, call to action, yield/POI offer). ${toneLine}\n\n--- DRAFT ---\n${body.text}`;
    case 'questions':
      return `${ORACLE_PERSONA}\n\nThe delegate has drafted questions (POIs) to ask rival delegates in committee. Sharpen them: diplomatic on the surface, devastating underneath. Keep each question a single sentence. ${toneLine}\n\n--- DRAFT QUESTIONS ---\n${body.text}`;
    case 'comment':
      return `${ORACLE_PERSONA}\n\nThe delegate has drafted a formal comment on another delegate's speech (acknowledge → pivot → rebuttal → proposal). Polish it for maximum persuasive force. ${toneLine}\n\n--- DRAFT COMMENT ---\n${body.text}`;
    case 'amend':
      return `${ORACLE_PERSONA}\n\nThe delegate has drafted a resolution amendment idea. Rewrite it as a properly worded MUN operative clause (start with an operative phrase like "Calls upon", "Decides", "Strongly condemns", end with a semicolon). ${toneLine}\n\n--- DRAFT ---\n${body.text}`;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as OracleBody;
    if (!body?.text || !body?.kind) {
      return NextResponse.json({ ok: false, error: 'Missing text or kind.' }, { status: 400 });
    }

    const ZAI = (await import('z-ai-web-dev-sdk')).default;
    const zai = await ZAI.create();

    const completion = await zai.chat.completions.create({
      messages: [
        { role: 'system', content: buildPrompt(body) },
        {
          role: 'user',
          content: 'Polish the draft above. Return only the finished text, nothing else.',
        },
      ],
      temperature: 0.8,
    });

    const result = completion?.choices?.[0]?.message?.content?.trim();
    if (!result) {
      return NextResponse.json({ ok: false, error: 'The Oracle returned silence.' }, { status: 502 });
    }
    return NextResponse.json({ ok: true, text: result });
  } catch (e) {
    console.error('[oracle] error:', e);
    return NextResponse.json(
      { ok: false, error: 'The Oracle is unavailable. Your draft remains diplomatically sound.' },
      { status: 500 },
    );
  }
}
