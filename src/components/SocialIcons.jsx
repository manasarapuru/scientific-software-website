import { socials } from '../data.js';

// Simple line glyphs for each network, drawn on a 24-unit grid in the current text colour.
const GLYPHS = {
  linkedin: (
    <g fill="currentColor">
      <circle cx="7.2" cy="7.3" r="1.5" />
      <rect x="5.9" y="10" width="2.6" height="8" />
      <path d="M10.6 10h2.5v1.2c.6-.9 1.6-1.5 3-1.5 2.6 0 3.4 1.7 3.4 4.2V18h-2.6v-3.7c0-1.2-.3-2.1-1.5-2.1-1.3 0-1.7.9-1.7 2.1V18h-2.6z" />
    </g>
  ),
  spotify: (
    <g fill="none" stroke="currentColor" strokeLinecap="round">
      <path d="M6.6 9.4c3.7-1.1 7.9-.8 10.9 1" strokeWidth="1.9" />
      <path d="M7.4 12.6c3-.9 6.2-.6 8.7.9" strokeWidth="1.6" />
      <path d="M8.1 15.5c2.3-.6 4.5-.4 6.4.6" strokeWidth="1.4" />
    </g>
  ),
  tiktok: (
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13.4 5.2v9.6a2.7 2.7 0 1 1-2.7-2.7" />
      <path d="M13.4 5.2c.3 2.2 1.8 3.7 4 3.9" />
    </g>
  ),
};

// A row of round icon links. Only networks with a `url` in the data are shown.
export default function SocialIcons({ ids, className = '' }) {
  const shown = ids.map((id) => socials.find((s) => s.id === id)).filter((s) => s?.url && GLYPHS[s.id]);
  if (!shown.length) return null;

  return (
    <ul className={`social-icons ${className}`}>
      {shown.map((s) => (
        <li key={s.id}>
          <a className="social-icon" href={s.url} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label}>
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              {GLYPHS[s.id]}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
