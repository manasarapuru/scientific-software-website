import { profile } from '../data.js';
import resumeUrl from '../docs/2026_ManasaR_SciEng.pdf';

// The resume, shown in the browser's own PDF viewer, with links to open or download the file.
export default function ResumePage() {
  return (
    <section className="resume-page">
      <div className="container">
        <div className="resume-head">
          <div>
            <p className="eyebrow">Resume</p>
            <h1 className="section-title">{profile.name}</h1>
          </div>
          <div className="resume-actions">
            <a href={resumeUrl} target="_blank" rel="noreferrer" className="link-btn">
              Open in a new tab <span aria-hidden="true">↗</span>
            </a>
            <a href={resumeUrl} download="Manasa_Rapuru_Resume.pdf" className="btn btn-dark">
              Download PDF
            </a>
          </div>
        </div>

        <object className="resume-frame" data={resumeUrl} type="application/pdf" aria-label={`${profile.name}’s resume`}>
          {/* shown where the browser can't display a PDF in the page, as on many phones */}
          <p className="resume-fallback">
            This browser can’t show the PDF here.{' '}
            <a href={resumeUrl} target="_blank" rel="noreferrer">Open the resume</a>.
          </p>
        </object>
      </div>
    </section>
  );
}
