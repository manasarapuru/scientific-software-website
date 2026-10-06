import GirlBust, { SKIN, TOP } from './GirlBust.jsx';

// The flipped side of the intro disk: the avatar at her laptop while science, technology
// and design pop up around her. Drawn in the disk's 100x100 space.

// Each floating icon pops in on its own beat (`delay`, in seconds), drifts up and fades.
function Float({ x, y, delay, children }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className="code-float" style={{ '--d': `${delay}s` }}>
        {children}
      </g>
    </g>
  );
}

export default function CodingScene() {
  return (
    <svg className="coding-scene" viewBox="0 0 100 100" aria-hidden="true">
      {/* science */}
      <Float x={16} y={36} delay={0.9}>
        <g transform="rotate(18)" fill="none" strokeWidth="1.1" strokeLinecap="round">
          <path d="M-3 -8 Q3 -4 -3 0 Q3 4 -3 8" stroke="#0E7490" />
          <path d="M3 -8 Q-3 -4 3 0 Q-3 4 3 8" stroke="#5fd3b8" />
          <path d="M-1.6 -6 H1.6 M-1.6 -2 H1.6 M-1.6 2 H1.6 M-1.6 6 H1.6" stroke="#0E7490" strokeWidth="0.7" />
        </g>
      </Float>
      <Float x={34} y={12} delay={1.05}>
        <path d="M0 0 L6 -3 M0 0 L-5 3" stroke="#15803D" strokeWidth="0.9" />
        <circle r="1.9" fill="#15803D" />
        <circle cx="6" cy="-3" r="1.4" fill="#22c55e" />
        <circle cx="-5" cy="3" r="1.4" fill="#22c55e" />
      </Float>

      {/* technology */}
      <Float x={84} y={52} delay={1.2}>
        <path
          d="M-4 -3 L-7 0 L-4 3 M4 -3 L7 0 L4 3 M1.2 -4 L-1.2 4"
          fill="none"
          stroke="#1D4ED8"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Float>
      <Float x={81} y={30} delay={1.35}>
        <rect x="-5" y="0" width="2.6" height="5" rx="0.5" fill="#93c5fd" />
        <rect x="-1.3" y="-3" width="2.6" height="8" rx="0.5" fill="#3b82f6" />
        <rect x="2.4" y="-6" width="2.6" height="11" rx="0.5" fill="#1D4ED8" />
      </Float>

      {/* design */}
      <Float x={15} y={59} delay={1.5}>
        <path d="M-4 -4.5 H4" stroke="#f9a8d4" strokeWidth="0.6" />
        <path d="M-5 3 C-3 -6 3 -6 5 3" fill="none" stroke="#BE185D" strokeWidth="1.1" strokeLinecap="round" />
        <rect x="-5.9" y="2.1" width="1.8" height="1.8" fill="#fff" stroke="#BE185D" strokeWidth="0.6" />
        <rect x="4.1" y="2.1" width="1.8" height="1.8" fill="#fff" stroke="#BE185D" strokeWidth="0.6" />
        <circle cx="-4" cy="-4.5" r="0.9" fill="#BE185D" />
        <circle cx="4" cy="-4.5" r="0.9" fill="#BE185D" />
      </Float>
      <Float x={63} y={12} delay={1.65}>
        <rect x="-6" y="-4.5" width="12" height="9" rx="1.2" fill="#fff" stroke="#6D28D9" strokeWidth="0.9" />
        <path d="M-6 -1.8 H6" stroke="#6D28D9" strokeWidth="0.7" />
        <path d="M-3.8 0.6 H1 M-3.8 2.6 H3.4" stroke="#a78bfa" strokeWidth="0.9" strokeLinecap="round" />
      </Float>

      {/* chair back, behind her */}
      <rect x="19" y="57" width="62" height="50" rx="12" fill="#c9a48f" stroke="#b48d78" strokeWidth="0.7" />

      <GirlBust />

      {/* arms reach behind the laptop; the hands peek over the lid as she types */}
      <g className="type-hand type-hand-l">
        <path d="M33.5 78 Q34 87 43 81.5" fill="none" stroke={TOP} strokeWidth="6" strokeLinecap="round" />
        <ellipse cx="43.5" cy="80" rx="3.6" ry="2.8" fill={SKIN} />
      </g>
      <g className="type-hand type-hand-r">
        <path d="M66.5 78 Q66 87 57 81.5" fill="none" stroke={TOP} strokeWidth="6" strokeLinecap="round" />
        <ellipse cx="56.5" cy="80" rx="3.6" ry="2.8" fill={SKIN} />
      </g>

      {/* laptop, seen from behind its lid */}
      <rect x="32" y="80" width="36" height="18" rx="2.2" fill="#aab4c0" />
      <rect x="33.2" y="81.2" width="33.6" height="15.6" rx="1.4" fill="#c3ccd6" />
      <circle className="laptop-mark" cx="50" cy="89" r="2.3" fill="#5fd3b8" />
    </svg>
  );
}
