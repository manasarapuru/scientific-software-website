import { projects } from '../data.js';
import Modal from './Modal.jsx';

export default function SkillModal({ skill, onClose, onOpenProject }) {
  const related = projects.filter((p) => p.skills.includes(skill.name));

  return (
    <Modal labelledBy="skill-modal-title" onClose={onClose}>
      <div className="skill-modal" style={{ '--c': skill.color }}>
        <p className="eyebrow eyebrow-skill">
          <span className="chip-dot" /> Skill
        </p>
        <h2 id="skill-modal-title" className="modal-title">{skill.name}</h2>
        <p className="about-bio">{skill.summary}</p>

        <div className="modal-section">
          <h3>Tools &amp; methods</h3>
          <div className="chip-row">
            {skill.tools.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        </div>

        {related.length > 0 && (
          <div className="modal-section">
            <h3>Used in</h3>
            <ul className="related-list">
              {related.map((p) => (
                <li key={p.id}>
                  <button type="button" className="related-item" onClick={() => onOpenProject(p.id)}>
                    <span>
                      <span className="related-title">{p.title}</span>
                      <span className="related-tagline">{p.tagline}</span>
                    </span>
                    <span className="project-arrow" aria-hidden="true">→</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Modal>
  );
}
