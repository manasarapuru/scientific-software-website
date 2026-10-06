import { useEffect, useRef, useState } from 'react';
import { story } from '../data.js';
import Avatar from './Avatar.jsx';

// Props the guide holds up, drawn in the avatar's 120x120 space just above the raised hand (≈105, 66).
function GuideProps({ pose }) {
  const on = (name) => `guide-prop ${pose === name ? 'is-on' : ''}`;
  return (
    <svg className="guide-props" viewBox="0 0 120 120" aria-hidden="true">
      {/* question card */}
      <g className={on('question')}>
        <rect x="94" y="38" width="22" height="21" rx="4" fill="#fff" stroke="#cfd6df" strokeWidth="0.8" />
        <text
          x="105"
          y="54"
          textAnchor="middle"
          fontSize="14"
          fontWeight="600"
          fontFamily="'Source Serif 4', Georgia, serif"
          fill="#0a1628"
        >
          ?
        </text>
      </g>

      {/* balance scale */}
      <g className={on('scale')}>
        <path d="M105 40 V58 M101 58 h8 M95 42 H115" stroke="#475569" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="105" cy="40" r="1.4" fill="#475569" />
        <path d="M95 42 L92 50 M95 42 L98 50 M115 42 L112 50 M115 42 L118 50" stroke="#94a3b8" strokeWidth="0.7" />
        <path d="M91 50 Q95 54 99 50 Z" fill="#0e7490" />
        <path d="M111 50 Q115 54 119 50 Z" fill="#be185d" />
      </g>

      {/* light bulb */}
      <g className={on('bulb')}>
        <g stroke="#f59e0b" strokeWidth="1.4" strokeLinecap="round">
          <path d="M105 34 v-3.5" />
          <path d="M112.8 37.2 l2.5 -2.5" />
          <path d="M97.2 37.2 l-2.5 -2.5" />
        </g>
        <circle cx="105" cy="45" r="8.5" fill="#fde68a" stroke="#b45309" strokeWidth="1.2" />
        <path d="M102 46.5 l1.5 -2 1.5 2 1.5 -2 1.5 2" fill="none" stroke="#b45309" strokeWidth="0.9" />
        <rect x="101" y="52.5" width="8" height="6.5" rx="1.2" fill="#94a3b8" />
        <path d="M101.5 55 h7 M101.5 57 h7" stroke="#64748b" strokeWidth="0.6" />
      </g>

      {/* mini orbit: the disciplines coming together */}
      <g className={on('orbit')}>
        <circle cx="105" cy="46" r="11" fill="#fff" stroke="#cfd6df" strokeWidth="0.8" />
        <circle cx="105" cy="46" r="7" fill="none" stroke="#e2e6ec" strokeWidth="0.8" />
        <circle cx="105" cy="46" r="2.6" fill="#0a1628" />
        <circle cx="105" cy="39" r="1.7" fill="#0e7490" />
        <circle cx="112" cy="46" r="1.7" fill="#be185d" />
        <circle cx="105" cy="53" r="1.7" fill="#1d4ed8" />
        <circle cx="98" cy="46" r="1.7" fill="#6d28d9" />
      </g>
    </svg>
  );
}

const AUTO_MS = 8000; // how long each slide shows before the next

export default function Story() {
  const [index, setIndex] = useState(0);
  const swipeStart = useRef(null);
  const last = story.length - 1;
  const go = (i) => setIndex(Math.max(0, Math.min(last, i)));

  const slide = story[index];
  const waving = slide.pose === 'wave';

  // The slides advance on their own while the section is on screen, and hold while the visitor
  // is pointing at or tabbing through it. Choosing a slide by hand restarts the wait.
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);
  const [reducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const playing = inView && !paused && !reducedMotion;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.5 });
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!playing) return undefined;
    const timer = setTimeout(() => setIndex((i) => (i + 1) % story.length), AUTO_MS);
    return () => clearTimeout(timer);
  }, [playing, index]);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') go(index + 1);
    if (e.key === 'ArrowLeft') go(index - 1);
  };

  // Touch / pen swipe: a horizontal drag of 50px or more changes slide.
  const onPointerDown = (e) => {
    if (e.pointerType !== 'mouse') swipeStart.current = e.clientX;
  };
  const onPointerUp = (e) => {
    if (swipeStart.current == null) return;
    const dx = e.clientX - swipeStart.current;
    swipeStart.current = null;
    if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
  };

  return (
    <section
      ref={sectionRef}
      className="story"
      id="story"
      aria-roledescription="carousel"
      aria-label="The problem and how I work"
    >
      <div className="container">
        <div
          className="story-grid"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
        <div className="story-guide" aria-hidden="true">
          <div className="hero-disk guide-disk">
            <Avatar className="guide-avatar" track={false} hold={!waving} wave={waving} grin={waving} />
            <GuideProps pose={slide.pose} />
          </div>
          <p key={slide.id} className="guide-caption">
            {slide.caption}
          </p>
        </div>

        <div className="carousel" onKeyDown={onKeyDown}>
          <div className="carousel-tabs" role="tablist" aria-label="Approach steps">
            {story.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                id={`story-tab-${s.id}`}
                aria-selected={i === index}
                aria-controls={`story-slide-${s.id}`}
                tabIndex={i === index ? 0 : -1}
                className={`carousel-tab ${i === index ? 'is-active' : ''} ${i < index ? 'is-past' : ''}`}
                onClick={() => go(i)}
              >
                <span className="carousel-tab-num">{String(i + 1).padStart(2, '0')}</span>
                {s.label}
              </button>
            ))}
          </div>

          <div
            className="carousel-viewport"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerCancel={() => (swipeStart.current = null)}
          >
            <div className="carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
              {story.map((s, i) => (
                <article
                  key={s.id}
                  id={`story-slide-${s.id}`}
                  role="tabpanel"
                  aria-labelledby={`story-tab-${s.id}`}
                  aria-hidden={i !== index}
                  className={`carousel-slide ${i === index ? 'is-active' : ''}`}
                >
                  {/* a full-sentence title is set smaller and wider than a short one */}
                  <h2 className={`slide-title ${s.title.length > 40 ? 'is-long' : ''}`}>{s.title}</h2>
                  {s.body.map((para) => (
                    <p key={para} className="slide-body">
                      {para}
                    </p>
                  ))}
                  {s.tags && (
                    <ul className="slide-tags">
                      {s.tags.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {story.map((s, i) => (
              <button
                key={s.id}
                type="button"
                className={`carousel-dot ${i === index ? 'is-active' : ''}`}
                onClick={() => go(i)}
                aria-label={`Show “${s.label}”`}
                aria-current={i === index}
              >
                <span className="carousel-dot-mark" />
              </button>
            ))}
          </div>

          <div className="slide-cta">
            <a href="#explore" className="hero-cue is-light">
              Explore all work
              <span className="hero-cue-arrow" aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
