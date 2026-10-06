import { useCallback, useEffect, useRef, useState } from 'react';
import { profile } from '../data.js';
import { parseEmphasis } from '../text.js';
import HeroFigure from './HeroFigure.jsx';

const HELLO_MS = 2700; // pop-up, ring and first round of waving
const WORD_MS = 140; // gap between words of the headline; must match .intro-word's delay step
const LINE_HOLD_MS = 2000; // how long the finished headline stays up
const FLY_MS = 900; // must match the .intro-figure and .intro-line transitions

// The headline as words and the spaces between them, so each word can arrive on its own beat.
// Punctuation that follows a highlighted word rides along as that word's `tail`, so it can't
// wrap onto a line of its own.
const tokens = [];
for (const piece of parseEmphasis(profile.statement[0])) {
  for (const text of piece.text.match(/\s+|\S+/g) ?? []) {
    const last = tokens[tokens.length - 1];
    if (last && !last.space && text.trim() && last.strong !== piece.strong) last.tail = text;
    else tokens.push({ text, strong: piece.strong, space: !text.trim() });
  }
}
const wordCount = tokens.filter((t) => !t.space).length;
const LINE_MS = wordCount * WORD_MS + 800 + LINE_HOLD_MS;

// Full-screen intro: the avatar says hello, then the disk flips to the coding scene while the
// headline plays word by word beneath it. Then both glide to their places in the hero.
export default function IntroOverlay({ targetRef, headlineRef, onLeave, onDone }) {
  const figRef = useRef(null);
  const leaving = useRef(false);
  const lineRef = useRef(null);
  const [flipped, setFlipped] = useState(false); // the disk turned to the typing scene
  const [showLine, setShowLine] = useState(false);
  const [flyStyle, setFlyStyle] = useState(null);
  const [lineStyle, setLineStyle] = useState(null);

  const fly = useCallback(() => {
    if (leaving.current) return;
    leaving.current = true;
    setFlipped(true); // if skipped during the hello, turn to the typing scene on the way

    const from = figRef.current?.getBoundingClientRect();
    const to = targetRef.current?.getBoundingClientRect();
    if (from && to) {
      const dx = to.left + to.width / 2 - (from.left + from.width / 2);
      const dy = to.top + to.height / 2 - (from.top + from.height / 2);
      setFlyStyle({ transform: `translate(${dx}px, ${dy}px) scale(${to.width / from.width})` });
    }

    // The headline travels to the hero headline's spot and size. It wraps the same way there
    // (see the sizing effect below), so it lands exactly where the hero's own headline appears.
    const line = lineRef.current;
    const headline = headlineRef.current;
    if (line && headline && line.classList.contains('is-on')) {
      const a = line.getBoundingClientRect();
      const b = headline.getBoundingClientRect();
      const scale = parseFloat(getComputedStyle(headline).fontSize) / parseFloat(getComputedStyle(line).fontSize);
      setLineStyle({ transform: `translate(${b.left - a.left}px, ${b.top - a.top}px) scale(${scale})` });
    }
    onLeave();
    setTimeout(onDone, FLY_MS);
  }, [targetRef, headlineRef, onLeave, onDone]);

  // Size the headline as a scaled-down copy of the hero's, so both break onto the same lines.
  const [lineWidth, setLineWidth] = useState(null);
  useEffect(() => {
    const measure = () => {
      const line = lineRef.current;
      const headline = headlineRef.current;
      if (!line || !headline) return;
      const ratio = parseFloat(getComputedStyle(line).fontSize) / parseFloat(getComputedStyle(headline).fontSize);
      setLineWidth(headline.getBoundingClientRect().width * ratio);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [headlineRef]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    const lineTimer = setTimeout(() => {
      setFlipped(true);
      setShowLine(true);
    }, HELLO_MS);
    const flyTimer = setTimeout(fly, HELLO_MS + LINE_MS);
    return () => {
      clearTimeout(lineTimer);
      clearTimeout(flyTimer);
      document.body.style.overflow = '';
    };
  }, [fly]);

  let word = 0;

  return (
    <div className={`intro ${flyStyle ? 'is-leaving' : ''}`} onClick={fly}>
      <div className="intro-bg" />
      <HeroFigure
        figureRef={figRef}
        className="intro-figure"
        style={flyStyle}
        flipped={flipped}
      />
      <p ref={lineRef} className={`intro-line ${showLine ? 'is-on' : ''}`} style={{ width: lineWidth ?? undefined, ...lineStyle }} aria-hidden="true">
        {tokens.map((t, i) =>
          t.space ? (
            ' '
          ) : (
            <span key={i} className={`intro-word ${t.strong ? 'is-strong' : ''}`} style={{ '--i': word++ }}>
              {t.text}
              {t.tail && <span className="intro-tail">{t.tail}</span>}
            </span>
          )
        )}
      </p>
      <button
        type="button"
        className="intro-skip"
        onClick={(e) => {
          e.stopPropagation();
          fly();
        }}
      >
        Skip intro
      </button>
    </div>
  );
}
