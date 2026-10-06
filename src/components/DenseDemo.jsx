import { useEffect, useState } from 'react';

const STEP_MS = 480;
const COLS = 6;
const ROWS = 7;
const TOTAL = COLS * ROWS;
const PER_STEP = 6; // the controls arrive a row at a time
const FILL_STEPS = TOTAL / PER_STEP;
const STEPS_PER_QUESTION = 6; // how long each question stays up

const OPTIONS = ['hide', 'dense', 'full', 'pack', 'squish', 'hide', 'hide', 'show'];
// The order in which the pointer wanders over the controls once they are all there.
const WANDER = [9, 27, 4, 38, 16, 31, 2, 22, 40, 13, 35, 7, 25, 19, 33, 0, 29, 11, 37, 20, 5, 24, 41, 15];

const spot = (i) => ({ x: 16 + (i % COLS) * 96, y: 128 + Math.floor(i / COLS) * 37 });

// A looping scene of the problem with a dense interface: a mock genome browser fills with row
// upon row of near-identical controls, the pointer wanders over them without settling, and the
// questions a newcomer is left with come up one after another.
// `demo` has the `questions` and a `caption`.
export default function DenseDemo({ demo }) {
  const { questions, caption } = demo;
  const [reducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const lastStep = FILL_STEPS + questions.length * STEPS_PER_QUESTION;
  const [step, setStep] = useState(reducedMotion ? lastStep : 0);

  useEffect(() => {
    if (reducedMotion) return undefined;
    const timer = setInterval(() => setStep((n) => (n >= lastStep ? 0 : n + 1)), STEP_MS);
    return () => clearInterval(timer);
  }, [reducedMotion, lastStep]);

  const shown = Math.min(TOTAL, step * PER_STEP);
  const wandering = step > FILL_STEPS;
  const at = spot(wandering ? WANDER[(step - FILL_STEPS) % WANDER.length] : 14);
  const asking = wandering
    ? Math.min(questions.length - 1, Math.floor((step - FILL_STEPS - 1) / STEPS_PER_QUESTION))
    : -1;

  return (
    <figure className="files-demo">
      <svg className="files-scene dense-scene" viewBox="0 0 600 400" role="img" aria-label={caption}>
        {/* window chrome: a title and a long row of look-alike menu links */}
        <rect width="600" height="26" className="dense-bar" />
        <text x="14" y="17" className="dense-title">Genome Browser</text>
        {Array.from({ length: 13 }, (_, i) => (
          <rect key={i} x={14 + i * 44} y="33" width={[30, 36, 26, 34][i % 4]} height="7" rx="2" className="dense-link" />
        ))}

        {/* the track image: stacked lines of data with nothing to say which is which */}
        <rect x="14" y="50" width="572" height="64" rx="3" className="dense-tracks" />
        {[0, 1, 2, 3, 4, 5].map((row) => (
          <g key={row}>
            <rect x="20" y={57 + row * 9} width="34" height="4" rx="1" className="dense-link" />
            {[0, 1, 2, 3, 4].map((seg) => (
              <rect
                key={seg}
                x={66 + seg * 104 + ((row * 37) % 40)}
                y={57 + row * 9}
                width={[58, 30, 76, 44, 22][(seg + row) % 5]}
                height="4"
                rx="1"
                className="dense-feature"
              />
            ))}
          </g>
        ))}

        {/* row upon row of near-identical controls */}
        {Array.from({ length: TOTAL }, (_, i) => {
          const { x, y } = spot(i);
          return (
            <g key={i} transform={`translate(${x} ${y})`}>
              <g className={`dense-control ${i < shown ? 'is-on' : ''}`}>
                <rect width={[52, 68, 44, 60, 72][i % 5]} height="5" rx="2" className="dense-link" />
                <rect y="9" width="80" height="16" rx="2" className="dense-select" />
                <text x="5" y="20.5" className="dense-option">{OPTIONS[(i * 3) % OPTIONS.length]}</text>
                <path d="M68 15 l3.5 4 3.5 -4" className="dense-caret" />
              </g>
            </g>
          );
        })}

        {/* the pointer, wandering */}
        {step > 0 && (
          <g className="dense-pointer" style={{ transform: `translate(${at.x + 44}px, ${at.y + 14}px)` }}>
            <path d="M0 0 L0 17 L4.6 12.6 L8 20 L11 18.6 L7.8 11.4 L14 11 Z" />
            {wandering && <text x="16" y="4" className="dense-doubt">?</text>}
          </g>
        )}

        {/* the questions it leaves a newcomer with */}
        {asking >= 0 && (
          <g transform="translate(300 232)">
            <g key={asking} className="files-ask">
              <path d="M-176 -28 H176 A16 16 0 0 1 192 -12 V12 A16 16 0 0 1 176 28 H-176 A16 16 0 0 1 -192 12 V-12 A16 16 0 0 1 -176 -28 Z" />
              <text y="7" textAnchor="middle">{questions[asking]}</text>
            </g>
          </g>
        )}
      </svg>
      <figcaption className="chat-caption">{caption}</figcaption>
    </figure>
  );
}
