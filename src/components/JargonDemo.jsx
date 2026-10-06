import { useEffect, useState } from 'react';

const STEP_MS = 850;
const QUESTION_STEPS = 4; // how long each topic's question stays up

// Where the terms land inside the speech bubble, as [x, y].
const SLOTS = [[172, 78], [330, 114], [190, 150], [318, 186]];

// The audience, seen from behind, as [x, jacket colour, hair colour].
const AUDIENCE = [
  [236, '#475569', '#1d1a1a'],
  [334, '#0d7a66', '#6b4a2f'],
  [432, '#7c5c8a', '#2a1b15'],
  [530, '#b45309', '#3f2c24'],
];

// A looping scene of the problem with explaining biology in its own vocabulary: someone explains
// a concept to a general audience, the technical terms pile up in her speech bubble, and the
// audience is left asking for a picture. It runs through each of the `pages` in turn.
// `demo` has `pages` (each with a `title`, the `terms` used and the `question` the audience is
// left with) and a `caption`.
export default function JargonDemo({ demo }) {
  const { pages, caption } = demo;
  const [reducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const perPage = SLOTS.length + QUESTION_STEPS;
  const lastStep = pages.length * perPage - 1;
  const [step, setStep] = useState(reducedMotion ? perPage - 1 : 0);

  useEffect(() => {
    if (reducedMotion) return undefined;
    const timer = setInterval(() => setStep((n) => (n >= lastStep ? 0 : n + 1)), STEP_MS);
    return () => clearInterval(timer);
  }, [reducedMotion, lastStep]);

  const pageIndex = Math.floor(step / perPage);
  const page = pages[pageIndex];
  const within = step % perPage;
  const out = Math.min(within, SLOTS.length); // how many terms she has used so far
  const asking = within >= SLOTS.length;

  return (
    <figure className="files-demo">
      <svg className="files-scene poster-scene" viewBox="0 0 600 400" role="img" aria-label={caption}>
        <rect y="318" width="600" height="82" className="poster-floor" />

        {/* the explainer, standing to one side and gesturing as she talks */}
        <path d="M22 400 L30 246 Q34 214 70 210 Q106 214 110 246 L118 400 Z" className="person-coat" />
        <path d="M104 236 L146 196" className="jargon-arm" />
        <circle cx="148" cy="194" r="7" className="person-skin" />
        <rect x="60" y="188" width="20" height="28" rx="8" className="person-skin" />
        <circle cx="70" cy="166" r="27" className="person-skin" />
        <path d="M43 168 C40 136 58 126 74 128 C92 128 100 140 98 156 C86 148 74 150 62 146 C56 154 52 172 50 190 C46 186 44 178 43 168 Z" className="person-hair" />
        <circle cx="84" cy="164" r="2.6" className="jargon-eye" />
        <ellipse cx="88" cy="180" rx="4" ry="3" className={`jargon-mouth ${asking ? '' : 'is-talking'}`} />

        {/* what she says: a speech bubble that fills with technical terms */}
        <g key={pageIndex} className="jargon-page">
          <path d="M168 20 H564 A16 16 0 0 1 580 36 V220 A16 16 0 0 1 564 236 H168 A16 16 0 0 1 152 220 V188 L112 178 L152 162 V36 A16 16 0 0 1 168 20 Z" className="jargon-speech" />
          <text x="172" y="56" className="jargon-title">{page.title} is…</text>
          {SLOTS.map(([, y], i) => (
            <rect key={i} x="172" y={y + 9} width={i % 2 ? 372 : 388} height="4" rx="2" className="poster-text" />
          ))}
          {page.terms.slice(0, out).map((term, i) => (
            <g key={term} transform={`translate(${SLOTS[i][0]} ${SLOTS[i][1]})`}>
              <g className="jargon-term">
                <rect width={term.length * 6.3 + 18} height="22" rx="11" />
                <text x="9" y="15">{term}</text>
              </g>
            </g>
          ))}
        </g>

        {/* the audience, seen from behind, more puzzled with every term */}
        {AUDIENCE.map(([x, jacket, hair], i) => (
          <g key={x}>
            <path d={`M${x - 36} 400 C${x - 34} 368 ${x - 14} 354 ${x} 354 C${x + 14} 354 ${x + 34} 368 ${x + 36} 400 Z`} fill={jacket} />
            <ellipse cx={x - 20} cy="330" rx="4" ry="6" className="person-skin" />
            <ellipse cx={x + 20} cy="330" rx="4" ry="6" className="person-skin" />
            <circle cx={x} cy="328" r="21" fill={hair} />
            <g transform={`translate(${x + 16} 300) rotate(${[8, -10, 12, -6][i]})`}>
              <text className={`q-mark ${out > i ? 'is-on' : ''}`} style={{ fontSize: 28 }}>?</text>
            </g>
          </g>
        ))}

        {/* what they are left asking */}
        {asking && (
          <g transform="translate(383 252)">
            <g key={pageIndex} className="files-ask">
              <path d="M-176 -30 H176 A16 16 0 0 1 192 -14 V14 A16 16 0 0 1 176 30 H16 L0 48 L-16 30 H-176 A16 16 0 0 1 -192 14 V-14 A16 16 0 0 1 -176 -30 Z" />
              <text y="7" textAnchor="middle">{page.question}</text>
            </g>
          </g>
        )}
      </svg>
      <figcaption className="chat-caption">{caption}</figcaption>
    </figure>
  );
}
