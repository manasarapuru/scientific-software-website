import { socials } from '../data.js';

// Only socials with a `url` filled in are shown. Pass `ids` to show a subset.
export default function SocialLinks({ ids, className = '' }) {
  const shown = socials.filter((s) => s.url && (!ids || ids.includes(s.id)));
  if (!shown.length) return null;

  return (
    <ul className={`social-links ${className}`}>
      {shown.map((s) => (
        <li key={s.id}>
          <a className="chip social-link" href={s.url} target="_blank" rel="noreferrer">
            {s.label}
            {s.handle && <span className="social-handle">{s.handle}</span>}
          </a>
        </li>
      ))}
    </ul>
  );
}
