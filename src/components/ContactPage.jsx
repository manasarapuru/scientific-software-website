import { profile } from '../data.js';
import SocialLinks from './SocialLinks.jsx';

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div className="container">
        <p className="eyebrow">Contact</p>
        <h1 className="section-title">Get in touch</h1>
        <p className="contact-lead">
          Email me at <a href={`mailto:${profile.email}`}>{profile.email}</a>.
        </p>
        <SocialLinks />
      </div>
    </section>
  );
}
