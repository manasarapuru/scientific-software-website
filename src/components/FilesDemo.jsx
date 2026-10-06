import { useEffect, useState } from 'react';

const STEP_MS = 620; // gap between one file window opening and the next
const STEPS_PER_QUESTION = 5; // how long each closing question stays up
const MIN_HOLD_STEPS = 9; // the least time the full pile stays up before it starts again

// Where each file window lands, as [x, y, tilt]: a pile that spreads across the whole scene.
const SPOTS = [
  [20, 14, -6], [160, 6, 3], [305, 12, -3], [450, 18, 6], [70, 96, 4],
  [232, 88, -5], [394, 98, 3], [8, 196, -4], [464, 200, 5], [236, 160, 2],
];

// Question marks around her head, as [x, y, size, tilt, appears once this many windows are open].
const MARKS = [
  [352, 266, 26, 8, 2], [228, 262, 24, -12, 3], [378, 236, 34, 14, 5], [198, 232, 32, -8, 6],
  [300, 228, 30, 0, 7], [410, 268, 40, 18, 8], [160, 270, 38, -16, 9], [338, 204, 46, 6, 10],
];

// A looping scene of the problem with data spread across separate files: a researcher sits as
// file after file opens around her, looking from one to the next, more puzzled each time.
// `demo` has `files` (each with a `name` and optionally the `jargon` that puzzles her), the closing
// `question` she is left with (one, or several shown one after another), and a `caption`.
// `showNames: false` leaves the windows untitled.
export default function FilesDemo({ demo }) {
  const files = demo.files.slice(0, SPOTS.length);
  const questions = [].concat(demo.question ?? []);
  const holdSteps = Math.max(MIN_HOLD_STEPS, questions.length * STEPS_PER_QUESTION);
  const [reducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [open, setOpen] = useState(reducedMotion ? files.length : 0); // how many windows are open

  useEffect(() => {
    if (reducedMotion) return undefined;
    const timer = setInterval(
      () => setOpen((n) => (n >= files.length + holdSteps ? 0 : n + 1)),
      STEP_MS
    );
    return () => clearInterval(timer);
  }, [reducedMotion, files.length, holdSteps]);

  // Which closing question is showing, once every file is open (-1 before that).
  const asking =
    open > files.length ? Math.min(questions.length - 1, Math.floor((open - files.length - 1) / STEPS_PER_QUESTION)) : -1;

  return (
    <figure className="files-demo">
      <svg className="files-scene" viewBox="0 0 600 400" role="img" aria-label={demo.caption}>
        {/* file windows piling up */}
        {files.map((file, i) => {
          const [x, y, tilt] = SPOTS[i];
          return (
            <g key={file.name} transform={`translate(${x} ${y}) rotate(${tilt} 64 39)`}>
              <g className={`file-window ${i < open ? 'is-on' : ''}`}>
                <rect width="128" height="78" rx="7" className="window-frame" />
                <rect x="1" y="1" width="126" height="17" rx="6" className="window-title" />
                {demo.showNames === false ? (
                  <rect x="8" y="6.5" width={[52, 68, 44, 60][i % 4]} height="5" rx="2" className="window-cell" />
                ) : (
                  <text x="8" y="12.5" className="window-name">{file.name}</text>
                )}
                {[0, 1, 2, 3].map((row) => (
                  <g key={row}>
                    <rect x="8" y={26 + row * 11} width="18" height="5" rx="2" className="window-cell" />
                    <rect x="31" y={26 + row * 11} width={[70, 54, 84, 62][(row + i) % 4]} height="5" rx="2" className="window-bar" />
                  </g>
                ))}
                {file.jargon && (
                  <g className="window-jargon">
                    <rect x="52" y="56" width="70" height="16" rx="8" />
                    <text x="87" y="67.5" textAnchor="middle">{file.jargon}</text>
                  </g>
                )}
              </g>
            </g>
          );
        })}

        {/* the researcher, seen from behind, looking from one window to the next */}
        <path d="M212 400 C214 352 250 332 300 332 C350 332 386 352 388 400 Z" className="person-coat" />
        <g className="person-head">
          <rect x="288" y="314" width="24" height="26" rx="8" className="person-skin" />
          <ellipse cx="262" cy="292" rx="5" ry="8" className="person-skin" />
          <ellipse cx="338" cy="292" rx="5" ry="8" className="person-skin" />
          <path d="M262 296 C258 256 280 242 300 242 C320 242 342 256 338 296 C340 322 328 336 300 336 C272 336 260 322 262 296 Z" className="person-hair" />
        </g>

        {/* her puzzlement builds with every file */}
        {MARKS.map(([x, y, size, tilt, at]) => (
          <g key={`${x}-${y}`} transform={`translate(${x} ${y}) rotate(${tilt})`}>
            <text className={`q-mark ${open >= at ? 'is-on' : ''}`} style={{ fontSize: size }}>?</text>
          </g>
        ))}

        {/* once every file is open, the questions it all leaves her with */}
        {asking >= 0 && (
          <g transform="translate(300 196)">
            <g key={asking} className="files-ask">
              <path d="M-200 -30 H200 A16 16 0 0 1 216 -14 V14 A16 16 0 0 1 200 30 H16 L0 48 L-16 30 H-200 A16 16 0 0 1 -216 14 V-14 A16 16 0 0 1 -200 -30 Z" />
              <text y="7" textAnchor="middle">{questions[asking]}</text>
            </g>
          </g>
        )}
      </svg>
      <figcaption className="chat-caption">{demo.caption}</figcaption>
    </figure>
  );
}
