import { profile } from '../data.js';
import photo from '../docs/intro_prof.jpg';
import Modal from './Modal.jsx';

export default function AboutModal({ onClose, onContact }) {
  return (
    <Modal labelledBy="about-modal-title" onClose={onClose} className="modal-mid">
      <div className="about-head">
        <div className="about-avatar">
          <img className="about-photo" src={photo} alt={profile.name} />
        </div>
        <div>
          <p className="eyebrow">About</p>
          <h2 id="about-modal-title" className="modal-title">{profile.name}</h2>
          <p className="modal-tagline">{profile.role}</p>
        </div>
      </div>

      <p className="about-bio">{profile.bio}</p>

      <div className="modal-section about-path">
        <h3>My path</h3>
        <ol className="timeline">
          {profile.timeline.map((chapter, i) => (
            <li
              key={chapter.period}
              className={`${i % 2 ? 'is-right' : 'is-left'} ${chapter.current ? 'is-current' : ''}`}
              style={{ '--c': chapter.color }}
            >
              {/* the period sits across the line from its card */}
              <div className="timeline-when">
                <span className="timeline-period">{chapter.period}</span>
                <span className="timeline-label">{chapter.label}</span>
                {chapter.summary && <span className="timeline-summary">{chapter.summary}</span>}
              </div>
              <span className="timeline-dot" aria-hidden="true" />
              <div className="timeline-card">
                <ul className="timeline-roles">
                  {chapter.roles.map((r) => (
                    <li key={`${r.role}-${r.org}`}>
                      <span className="timeline-role">{r.role}</span>
                      <span className="timeline-org">{r.org}</span>
                      {r.detail && <span className="timeline-detail">{r.detail}</span>}
                      <span className="timeline-dates">{r.dates}</span>
                    </li>
                  ))}
                </ul>
                {chapter.certs && (
                  <div className="timeline-certs">
                    <span className="timeline-certs-label">
                      {chapter.certs.length === 1 ? 'Certificate' : 'Certificates'}
                    </span>
                    <ul>
                      {chapter.certs.map((c) => (
                        <li key={c.name}>
                          <span className="timeline-cert-name">{c.name}</span>
                          <span className="timeline-cert-meta">
                            {c.issuer} · {c.dates}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="about-actions">
        <button type="button" className="btn btn-dark" onClick={onContact}>Get in touch</button>
      </div>
    </Modal>
  );
}
