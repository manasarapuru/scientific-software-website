import { useId } from 'react';
import { profile } from '../data.js';
import CodingScene from './CodingScene.jsx';
import HelloScene from './HelloScene.jsx';

// The avatar in its circle, with the name and title curved around it.
// Rendered both in the intro overlay and in the hero, so it must not rely on fixed ids.
// In the intro the disk has two sides: she waves hello on the front, and `flipped` turns it over
// to the typing scene on the back. With `typingOnly` (the hero) it shows the typing scene alone.
export default function HeroFigure({ figureRef, className = '', style, flipped = false, typingOnly = false }) {
  const uid = useId().replace(/:/g, '');
  const topId = `arc-top-${uid}`;
  const bottomId = `arc-bottom-${uid}`;

  return (
    <div ref={figureRef} className={`hero-figure ${className}`} style={style} aria-hidden="true">
      {typingOnly ? (
        <div className="hero-flip is-live">
          <div className="hero-disk hero-face">
            <CodingScene />
          </div>
        </div>
      ) : (
        <div className={`hero-flip has-flip ${flipped ? 'is-flipped is-live' : ''}`}>
          <div className="hero-disk hero-face">
            <HelloScene />
          </div>
          <div className="hero-disk hero-face hero-face-flip">
            <CodingScene />
          </div>
        </div>
      )}
      <svg className="hero-ring" viewBox="0 0 100 100">
        <defs>
          {/* top arc runs left→right over the top; bottom arc runs left→right under it */}
          <path id={topId} d="M 5 50 A 45 45 0 0 1 95 50" />
          <path id={bottomId} d="M 2 50 A 48 48 0 0 0 98 50" />
        </defs>
        <text className="hero-ring-name">
          <textPath href={`#${topId}`} startOffset="50%" textAnchor="middle">
            {profile.fullName}
          </textPath>
        </text>
        <text className="hero-ring-title">
          <textPath href={`#${bottomId}`} startOffset="50%" textAnchor="middle">
            {profile.title}
          </textPath>
        </text>
        <circle cx="3.5" cy="50" r="0.9" className="hero-ring-dot" />
        <circle cx="96.5" cy="50" r="0.9" className="hero-ring-dot" />
      </svg>
    </div>
  );
}
