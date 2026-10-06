import { useEffect, useRef } from 'react';
import GirlBust, { SKIN, TOP } from './GirlBust.jsx';

// The bust is drawn in a 100-unit space and enlarged to fill this 120-unit one.
const SCALE = 1.68;
const BUST = `translate(-24 -22.28) scale(${SCALE})`;

// Eye centers in SVG units (viewBox is 120 x 120).
const EYES = [
  { cx: 50.6, cy: 56.5 },
  { cx: 69.4, cy: 56.5 },
];
const MAX_OFFSET = 0.6; // how far an iris can travel from center, in the bust's own units

// wave: raised arm that waves. hold: the same raised arm, still (for holding a prop).
export default function Avatar({ className, wave = false, hold = false, grin = false, track = true }) {
  const svgRef = useRef(null);
  const pupilRefs = useRef([]);

  useEffect(() => {
    if (!track) return undefined;
    let frame = 0;
    let mouseX = 0;
    let mouseY = 0;

    const update = () => {
      frame = 0;
      const svg = svgRef.current;
      if (!svg) return;
      const rect = svg.getBoundingClientRect();
      const scale = rect.width / 120;

      EYES.forEach((eye, i) => {
        const pupil = pupilRefs.current[i];
        if (!pupil) return;
        const dx = mouseX - (rect.left + eye.cx * scale);
        const dy = mouseY - (rect.top + eye.cy * scale);
        const dist = Math.hypot(dx, dy);
        // Ease toward the max offset as the cursor moves away from the eye.
        const k = dist ? Math.min(MAX_OFFSET, dist / 160) / dist : 0;
        pupil.style.transform = `translate(${dx * k}px, ${dy * k}px)`;
      });
    };

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener('pointermove', onMove);
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(frame);
    };
  }, [track]);

  return (
    <svg ref={svgRef} className={className} viewBox="0 0 120 120" aria-hidden="true">
      <g transform={BUST}>
        <GirlBust grin={grin} pupilRefs={pupilRefs} />
      </g>
      {/* raised arm; the forearm pivots at the elbow */}
      {(wave || hold) && (
        <g className="avatar-arm">
          <path d="M84 101 L100 92" stroke={TOP} strokeWidth="11" strokeLinecap="round" />
          <g className={wave ? 'avatar-forearm' : undefined}>
            <path d="M100 92 L104 74" stroke={TOP} strokeWidth="10" strokeLinecap="round" />
            <circle cx="105" cy="66" r="7" fill={SKIN} />
            <ellipse cx="99" cy="68" rx="2.4" ry="3.6" fill={SKIN} transform="rotate(-35 99 68)" />
          </g>
        </g>
      )}
    </svg>
  );
}
