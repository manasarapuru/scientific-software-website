import GirlBust, { SKIN, TOP } from './GirlBust.jsx';

// The front of the hero disk: the avatar pops up and waves hello. Drawn in the disk's 100x100 space.
export default function HelloScene() {
  return (
    <svg className="hello-scene" viewBox="0 0 100 100" aria-hidden="true">
      <GirlBust grin />
      {/* raised arm; the forearm pivots at the elbow (80, 79) */}
      <path d="M67.5 85 L80 79" stroke={TOP} strokeWidth="7.5" strokeLinecap="round" />
      <g className="hello-forearm">
        <path d="M80 79 L84 64" stroke={TOP} strokeWidth="7" strokeLinecap="round" />
        <circle cx="85" cy="57.5" r="5" fill={SKIN} />
        <ellipse cx="80.6" cy="59" rx="1.7" ry="2.6" fill={SKIN} transform="rotate(-35 80.6 59)" />
      </g>
    </svg>
  );
}
