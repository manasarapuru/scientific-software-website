import { useEffect, useState } from 'react';

const STEP_MS = 950;
const SECONDS_PER_STEP = 5; // the clock here runs in seconds, not minutes
// The steps, in order.
const SCAN = 1;
const LOADING = 2;
const SUMMARY = 3;
const FINDINGS = 4;
const TERMS = 5;
const DEFINITION = 6;
const FIGURE = 7;
const LINK = 8;
const VERDICT = 9;
const LAST = 14;

const QR = [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1]; // 5 x 5 cells

const bars = (x, y, widths, cls = 'comp-bar') =>
  widths.map((w, i) => <rect key={`${x}-${y}-${i}`} x={x} y={y + i * 8} width={w} height="4" rx="2" className={cls} />);

function QrCode({ x, y, cell }) {
  return QR.map((on, i) =>
    on ? <rect key={i} x={x + (i % 5) * cell} y={y + Math.floor(i / 5) * cell} width={cell} height={cell} className="comp-qr" /> : null
  );
}

// A looping scene of the companion in use: the poster's QR code is scanned with a phone, and a
// short plain-language companion builds up on the screen, section by section, in well under a minute.
// `demo` has the `verdict` the attendee reaches (one or two lines), a `caption` and a `note`.
export default function CompanionDemo({ demo }) {
  const { verdict, caption, note } = demo;
  const [reducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [step, setStep] = useState(reducedMotion ? LAST : 0);

  useEffect(() => {
    if (reducedMotion) return undefined;
    const timer = setInterval(() => setStep((n) => (n >= LAST ? 0 : n + 1)), STEP_MS);
    return () => clearInterval(timer);
  }, [reducedMotion]);

  const seconds = Math.min(step, LINK) * SECONDS_PER_STEP;
  const clock = `0:${String(seconds).padStart(2, '0')}`;
  const lines = [].concat(verdict);

  return (
    <figure className="files-demo">
      <svg className="files-scene poster-scene" viewBox="0 0 600 400" role="img" aria-label={caption}>
        <rect y="318" width="600" height="82" className="poster-floor" />

        {/* the same dense poster, now with a QR code in its corner */}
        <rect x="52" y="240" width="6" height="82" className="poster-leg" />
        <rect x="242" y="240" width="6" height="82" className="poster-leg" />
        <rect x="30" y="36" width="240" height="206" rx="3" className="poster-board" />
        <rect x="44" y="48" width="150" height="7" rx="2" className="poster-heading" />
        <rect x="44" y="60" width="104" height="4" rx="2" className="poster-text" />
        {[44, 120, 196].map((x, col) => (
          <g key={x}>
            <rect x={x} y="76" width="34" height="4" rx="2" className="poster-heading" />
            {Array.from({ length: col === 2 ? 14 : 26 }, (_, i) => (
              <rect key={i} x={x} y={85 + i * 5} width={i % 4 === 3 ? 38 : 62} height="2.2" rx="1" className="poster-text" />
            ))}
          </g>
        ))}
        <rect x="190" y="162" width="72" height="72" rx="6" className={`comp-qr-plate ${step <= SCAN ? 'is-pulsing' : ''}`} />
        <QrCode x={203} y={170} cell={9.2} />
        <text x="226" y="229" textAnchor="middle" className="comp-qr-label">SCAN ME</text>

        {/* the link from the code to the phone, while it scans */}
        {(step === SCAN || step === LOADING) && <path d="M262 198 C300 198 310 190 350 190" className="comp-beam" />}

        {/* the clock: seconds this time */}
        <g transform="translate(30 334)">
          <rect width="128" height="46" rx="9" className="poster-clock" />
          <text x="64" y="16" textAnchor="middle" className="poster-clock-label">TIME TO UNDERSTAND</text>
          <text x="64" y="37" textAnchor="middle" className="poster-clock-value comp-clock-value">{clock}</text>
        </g>

        {/* the phone */}
        <rect x="350" y="14" width="200" height="372" rx="26" className="comp-phone" />
        <rect x="358" y="24" width="184" height="352" rx="18" className={`comp-screen ${step === SCAN ? 'is-camera' : ''}`} />

        {step === 0 && <text x="450" y="204" textAnchor="middle" className="comp-hint">Point the camera at the code</text>}

        {step === SCAN && (
          <g>
            <path d="M400 150 v-10 h10 M490 140 h10 v10 M500 230 v10 h-10 M410 240 h-10 v-10" className="comp-finder" />
            <QrCode x={420} y={160} cell={12} />
            <rect x="400" y="188" width="100" height="2.5" className="comp-scanline" />
            <text x="450" y="272" textAnchor="middle" className="comp-camera-text">Scanning…</text>
          </g>
        )}

        {step === LOADING && (
          <g>
            <circle cx="450" cy="186" r="13" className="comp-spinner" />
            <text x="450" y="226" textAnchor="middle" className="comp-hint">Opening the companion…</text>
          </g>
        )}

        {step >= SUMMARY && (
          <g>
            <path d="M358 42 A18 18 0 0 1 376 24 H524 A18 18 0 0 1 542 42 V60 H358 Z" className="comp-header" />
            <text x="372" y="47" className="comp-header-text">Poster companion</text>

            <g className="comp-section">
              <text x="372" y="80" className="comp-label">IN PLAIN LANGUAGE</text>
              {bars(372, 88, [156, 156, 148, 104])}
            </g>

            {step >= FINDINGS && (
              <g className="comp-section">
                <text x="372" y="136" className="comp-label">KEY FINDINGS</text>
                {[0, 1, 2].map((i) => (
                  <g key={i}>
                    <circle cx="375" cy={147 + i * 11} r="2.6" className="comp-dot" />
                    <rect x="384" y={145 + i * 11} width={[132, 144, 110][i]} height="4" rx="2" className="comp-bar" />
                  </g>
                ))}
              </g>
            )}

            {step >= TERMS && (
              <g className="comp-section">
                <text x="372" y="194" className="comp-label">TERMS, DEFINED</text>
                {[0, 1, 2].map((i) => (
                  <rect
                    key={i}
                    x={372 + i * 54}
                    y="201"
                    width="48"
                    height="15"
                    rx="7.5"
                    className={`comp-term ${i === 0 && step >= DEFINITION ? 'is-open' : ''}`}
                  />
                ))}
              </g>
            )}

            {/* tapping a term opens its definition in place */}
            {step >= DEFINITION && (
              <g className="comp-section">
                <path d="M392 222 l5 -6 5 6" className="comp-definition" />
                <rect x="372" y="221" width="156" height="30" rx="6" className="comp-definition" />
                {bars(380, 229, [140, 96])}
              </g>
            )}

            {step >= FIGURE && (
              <g className="comp-section">
                <text x="372" y="270" className="comp-label">FIGURE</text>
                <rect x="372" y="276" width="156" height="44" rx="4" className="comp-figure" />
                {[16, 28, 20, 34, 24, 30, 14, 26].map((h, i) => (
                  <rect key={i} x={382 + i * 18} y={314 - h} width="10" height={h} className="comp-dot" />
                ))}
              </g>
            )}

            {step >= LINK && (
              <g className="comp-section">
                <rect x="372" y="332" width="156" height="26" rx="13" className="comp-link" />
                <text x="450" y="349" textAnchor="middle" className="comp-link-text">Read the full research →</text>
              </g>
            )}
          </g>
        )}

        {/* where the attendee ends up */}
        {step >= VERDICT && (
          <g transform="translate(150 140)">
            <g className="files-ask comp-verdict">
              <path d="M-118 -38 H118 A16 16 0 0 1 134 -22 V22 A16 16 0 0 1 118 38 H-118 A16 16 0 0 1 -134 22 V-22 A16 16 0 0 1 -118 -38 Z" />
              {lines.map((line, i) => (
                <text key={line} y={(i - (lines.length - 1) / 2) * 24 + 7} textAnchor="middle">{line}</text>
              ))}
            </g>
          </g>
        )}
      </svg>
      <figcaption className="chat-caption">{caption}</figcaption>
      {note && <div className="demo-note">{note}</div>}
    </figure>
  );
}
