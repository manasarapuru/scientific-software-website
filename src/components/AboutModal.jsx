import { profile } from '../data.js';
import photo from '../docs/intro_prof.jpg';
import Modal from './Modal.jsx';

export default function AboutModal({ onClose, onContact }) {
  return (
    <Modal labelledBy="about-modal-title" onClose={onClose}>
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

      <p className="about-bio modal-pending">Coming soon.</p>

      <div className="about-actions">
        <button type="button" className="btn btn-dark" onClick={onContact}>Get in touch</button>
      </div>
    </Modal>
  );
}
