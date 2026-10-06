import { useEffect, useState } from 'react';

const STEP_MS = 850;
const SECONDS_PER_STEP = 43; // how fast the clock runs: each step is most of a minute at the poster
const STEPS_PER_QUESTION = 4; // how long each question stays up

// Where her eyes go on the poster, in order, as [x, y, width, height]: back and forth, not top to bottom.
const GAZE = [
  [150, 26, 300, 36], [148, 64, 96, 72], [252, 76, 96, 62], [148, 140, 96, 118], [356, 64, 96, 58],
  [252, 158, 96, 60], [356, 126, 96, 56], [252, 76, 96, 62], [356, 186, 96, 72], [150, 26, 300, 36],
];

// Question marks around her head, as [x, y, size, tilt, appears from this step].
const MARKS = [
  [352, 300, 24, 8, 2], [228, 296, 24, -12, 4], [378, 274, 32, 14, 6], [200, 270, 32, -8, 8], [404, 304, 40, 18, 10],
];

const lines = (x, y, count, width = 88) =>
  Array.from({ length: count }, (_, i) => (
    <rect key={`${x}-${y}-${i}`} x={x} y={y + i * 5} width={i % 4 === 3 ? width * 0.6 : width} height="2.2" rx="1" className="poster-text" />
  ));

// A looping scene of the problem at a poster session: an attendee stands at a dense scientific
// poster, her eyes jumping from block to block while the clock runs and others walk on by, and
// ends up with basic questions still unanswered.
// `demo` has the `questions` and a `caption`.
export default function PosterDemo({ demo }) {
  const { questions, caption } = demo;
  const [reducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const lastStep = GAZE.length + questions.length * STEPS_PER_QUESTION;
  const [step, setStep] = useState(reducedMotion ? lastStep : 0);

  useEffect(() => {
    if (reducedMotion) return undefined;
    const timer = setInterval(() => setStep((n) => (n >= lastStep ? 0 : n + 1)), STEP_MS);
    return () => clearInterval(timer);
  }, [reducedMotion, lastStep]);

  const gaze = GAZE[Math.min(step, GAZE.length - 1)];
  const turn = ((gaze[0] + gaze[2] / 2 - 300) / 150) * 13; // her head follows her eyes
  const seconds = step * SECONDS_PER_STEP;
  const clock = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
  const asking =
    step >= GAZE.length ? Math.min(questions.length - 1, Math.floor((step - GAZE.length) / STEPS_PER_QUESTION)) : -1;

  return (
    <figure className="files-demo">
      <svg className="files-scene poster-scene" viewBox="0 0 600 400" role="img" aria-label={caption}>
        {/* the hall: a floor line and the neighbouring poster boards */}
        <rect y="318" width="600" height="82" className="poster-floor" />
        <rect x="-60" y="40" width="160" height="230" rx="3" className="poster-neighbour" />
        <rect x="500" y="40" width="160" height="230" rx="3" className="poster-neighbour" />

        {/* the poster: a title, three packed columns, three figures */}
        <rect x="158" y="270" width="6" height="52" className="poster-leg" />
        <rect x="436" y="270" width="6" height="52" className="poster-leg" />
        <rect x="140" y="20" width="320" height="252" rx="3" className="poster-board" />
        <rect x="160" y="33" width="210" height="8" rx="2" className="poster-heading" />
        <rect x="160" y="46" width="150" height="4" rx="2" className="poster-text" />
        <rect x="408" y="30" width="18" height="18" rx="3" className="poster-text" />
        <rect x="430" y="30" width="18" height="18" rx="3" className="poster-text" />

        <rect x="152" y="68" width="44" height="5" rx="2" className="poster-heading" />
        {lines(152, 78, 11)}
        <rect x="152" y="144" width="52" height="5" rx="2" className="poster-heading" />
        {lines(152, 154, 20)}

        <rect x="256" y="68" width="38" height="5" rx="2" className="poster-heading" />
        <g className="poster-figure">
          <rect x="256" y="80" width="88" height="54" rx="2" />
          {[14, 30, 22, 40, 18, 34, 26].map((h, i) => (
            <rect key={i} x={262 + i * 11.5} y={128 - h} width="7" height={h} className="poster-mark" />
          ))}
        </g>
        {lines(256, 140, 3)}
        <g className="poster-figure">
          <rect x="256" y="162" width="88" height="54" rx="2" />
          {[[268, 204], [276, 196], [284, 200], [292, 186], [300, 190], [308, 178], [316, 182], [324, 170], [332, 174], [296, 206], [320, 196]].map(
            ([cx, cy]) => (
              <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2" className="poster-mark" />
            )
          )}
        </g>
        {lines(256, 222, 8)}

        <rect x="360" y="68" width="48" height="5" rx="2" className="poster-heading" />
        {lines(360, 78, 9)}
        <g className="poster-figure">
          <rect x="360" y="128" width="88" height="50" rx="2" />
          {Array.from({ length: 28 }, (_, i) => (
            <rect
              key={i}
              x={364 + (i % 7) * 11.6}
              y={132 + Math.floor(i / 7) * 10.6}
              width="10"
              height="9"
              className="poster-mark"
              opacity={0.25 + ((i * 7) % 10) / 13}
            />
          ))}
        </g>
        <rect x="360" y="186" width="40" height="5" rx="2" className="poster-heading" />
        {lines(360, 196, 13)}

        {/* where she is looking right now */}
        {step < GAZE.length && (
          <rect key={step} x={gaze[0]} y={gaze[1]} width={gaze[2]} height={gaze[3]} rx="4" className="poster-gaze" />
        )}

        {/* the clock on how long she has stood here */}
        <g transform="translate(474 20)">
          <rect width="116" height="46" rx="9" className="poster-clock" />
          <text x="58" y="16" textAnchor="middle" className="poster-clock-label">TIME AT THIS POSTER</text>
          <text x="58" y="37" textAnchor="middle" className="poster-clock-value">{clock}</text>
        </g>

        {/* other attendees, moving on */}
        <g className="poster-passer passer-1">
          <circle cx="0" cy="306" r="12" />
          <rect x="-15" y="320" width="30" height="80" rx="13" />
        </g>
        <g className="poster-passer passer-2">
          <circle cx="0" cy="312" r="11" />
          <rect x="-14" y="325" width="28" height="75" rx="12" />
        </g>

        {/* the attendee, seen from behind */}
        <path d="M212 400 C214 352 250 332 300 332 C350 332 386 352 388 400 Z" className="poster-jacket" />
        <g className="poster-head" style={{ transform: `rotate(${turn}deg)` }}>
          <rect x="288" y="314" width="24" height="26" rx="8" className="person-skin" />
          <ellipse cx="262" cy="292" rx="5" ry="8" className="person-skin" />
          <ellipse cx="338" cy="292" rx="5" ry="8" className="person-skin" />
          <path d="M262 296 C258 256 280 242 300 242 C320 242 342 256 338 296 C340 322 328 336 300 336 C272 336 260 322 262 296 Z" className="person-hair" />
        </g>

        {MARKS.map(([x, y, size, tilt, at]) => (
          <g key={`${x}-${y}`} transform={`translate(${x} ${y}) rotate(${tilt})`}>
            <text className={`q-mark ${step >= at ? 'is-on' : ''}`} style={{ fontSize: size }}>?</text>
          </g>
        ))}

        {/* what she still doesn't know */}
        {asking >= 0 && (
          <g transform="translate(300 204)">
            <g key={asking} className="files-ask">
              <path d="M-176 -30 H176 A16 16 0 0 1 192 -14 V14 A16 16 0 0 1 176 30 H16 L0 48 L-16 30 H-176 A16 16 0 0 1 -192 14 V-14 A16 16 0 0 1 -176 -30 Z" />
              <text y="7" textAnchor="middle">{questions[asking]}</text>
            </g>
          </g>
        )}
      </svg>
      <figcaption className="chat-caption">{caption}</figcaption>
    </figure>
  );
}
