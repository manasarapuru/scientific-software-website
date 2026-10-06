import { useState } from 'react';
import { statusById, themeTag } from '../data.js';
import ChatDemo from './ChatDemo.jsx';
import FilesDemo from './FilesDemo.jsx';
import ExplorerDemo from './ExplorerDemo.jsx';
import DenseDemo from './DenseDemo.jsx';
import PosterDemo from './PosterDemo.jsx';
import CompanionDemo from './CompanionDemo.jsx';
import JargonDemo from './JargonDemo.jsx';
import VideoCarousel from './VideoCarousel.jsx';
import Modal from './Modal.jsx';
import SocialLinks from './SocialLinks.jsx';

// Renders **bold** spans inside a section's text.
function renderText(text) {
  return text.split('**').map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part));
}

function Personas({ personas }) {
  return (
    <div className="persona-list">
      {personas.map((persona) => (
        <article key={persona.name} className="persona" style={{ '--c': persona.color }}>
          <div className="persona-head">
            <span className="persona-avatar" aria-hidden="true">{persona.name[0]}</span>
            <div>
              <p className="persona-name">
                {persona.name}
                <span className="persona-role">{persona.role}</span>
              </p>
              <p className="persona-team">{persona.team}</p>
            </div>
          </div>
          <div className="persona-body">
            <div>
              <h5>Goals</h5>
              <ul className="persona-points is-goals">
                {persona.goals.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h5>Pain points</h5>
              <ul className="persona-points is-pains">
                {persona.pains.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

// The distinct disciplines behind a stage's practices, e.g. "UX · Product".
function disciplines(practices) {
  return [...new Set(practices.flatMap((p) => p.discipline.split(' / ')))].join(' · ');
}

// Splits `details` into tabs at each `{ group }` block.
function toTabs(details) {
  const tabs = [];
  for (const block of details) {
    if (block.group) tabs.push({ label: block.group, sections: [] });
    else {
      if (!tabs.length) tabs.push({ label: 'Overview', sections: [] });
      tabs[tabs.length - 1].sections.push(block);
    }
  }
  return tabs;
}

function Stages({ stages, standalone }) {
  return (
    <div className={`project-process ${standalone ? 'is-standalone' : ''}`}>
      <ol className="process-steps">
        {stages.map((stage) => (
          <li key={stage.title} className="process-step">
            <div className="process-head">
              <h4>{stage.title}</h4>
              {stage.practices && <span className="process-count">{disciplines(stage.practices)}</span>}
            </div>
            <div className="process-body">
              <Body block={stage} />
            </div>
            {stage.personas && (
              <>
                <h5>Personas</h5>
                <Personas personas={stage.personas} />
              </>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

// The content fields shared by sections and stages.
function Body({ block }) {
  return (
    <>
      {[].concat(block.text ?? []).map((text) => (
        <p key={text}>{renderText(text)}</p>
      ))}
      {block.list && (
        <ol className="modal-goals">
          {block.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      )}
      {block.bullets && (
        <ul className="modal-bullets">
          {block.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {block.chips && (
        <ul className="modal-chips">
          {block.chips.map((item) => (
            <li key={item} className="chip">{item}</li>
          ))}
        </ul>
      )}
      {block.table && (
        <dl className="feedback-table">
          {block.table.map((row) => (
            <div key={row.label}>
              <dt>{row.label}</dt>
              <dd>
                {row.items ? (
                  <ul className="modal-bullets">
                    {row.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  renderText(row.value)
                )}
              </dd>
            </div>
          ))}
        </dl>
      )}
      {[].concat(block.after ?? []).map((text) => (
        <p key={text}>{renderText(text)}</p>
      ))}
      {block.chat && <ChatDemo chat={block.chat} />}
      {block.files && <FilesDemo demo={block.files} />}
      {block.explorer && <ExplorerDemo demo={block.explorer} />}
      {block.dense && <DenseDemo demo={block.dense} />}
      {block.poster && <PosterDemo demo={block.poster} />}
      {block.companion && <CompanionDemo demo={block.companion} />}
      {block.jargon && <JargonDemo demo={block.jargon} />}
      {block.videos && <VideoCarousel videos={block.videos} />}
      {block.embed && (
        <figure className="embed-demo">
          <div className="embed-window">
            <div className="embed-bar">
              <span className="embed-dots" aria-hidden="true" />
              <span className="embed-url">{block.embed.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
              <a href={block.embed.url} target="_blank" rel="noreferrer" className="link-btn">
                Open full size <span aria-hidden="true">↗</span>
              </a>
            </div>
            <iframe src={block.embed.url} title={block.embed.title} loading="lazy" />
          </div>
          <figcaption className="chat-caption">{block.embed.caption}</figcaption>
        </figure>
      )}
      {block.quotes?.map((quote) => (
        <blockquote key={quote} className="modal-quote">“{quote}”</blockquote>
      ))}
      {[].concat(block.closing ?? []).map((text) => (
        <p key={text}>{renderText(text)}</p>
      ))}
      {block.socials && <SocialLinks ids={block.socials} />}
    </>
  );
}

function Section({ section }) {
  return (
    <>
      {section.heading && (
        <div className={`modal-section ${section.callout ? 'modal-callout' : ''}`}>
          <h3>{section.heading}</h3>
          <div className="modal-section-body">
            <Body block={section} />
          </div>
        </div>
      )}
      {section.stages && <Stages stages={section.stages} standalone={!section.heading} />}
    </>
  );
}

export default function ProjectModal({ project, onClose }) {
  const tabs = toTabs(project.details ?? []);
  const theme = themeTag(project);
  const [active, setActive] = useState(0);

  return (
    <Modal labelledBy="project-modal-title" onClose={onClose} className={tabs.length > 1 ? 'modal-wide' : 'modal-roomy'}>
      <p className="eyebrow eyebrow-skill" style={{ '--c': theme.color }}>
        <span className="chip-dot" /> {theme.label} · {project.kind}
        {statusById[project.status] && ` · ${statusById[project.status].label}`}
        {project.year && ` · ${project.year}`}
      </p>
      <h2 id="project-modal-title" className="modal-title">{project.title}</h2>
      <p className="modal-tagline">{project.tagline}</p>
      {project.meta && <p className="modal-meta">{project.meta}</p>}

      {project.skills.length > 0 && (
        <div className="chip-row">
          {project.skills.map((name) => (
            <span key={name} className="chip">{name}</span>
          ))}
        </div>
      )}

      {project.stat && (
        <div className="result-stat">
          <div>
            <span className="stat-label">Before</span>
            <span className="stat-value">{project.stat.from}</span>
          </div>
          <span className="stat-arrow" aria-hidden="true">→</span>
          <div>
            <span className="stat-label">After</span>
            <span className="stat-value is-after">{project.stat.to}</span>
          </div>
          <p className="stat-caption">{project.stat.label}</p>
        </div>
      )}

      {tabs.length ? (
        <>
          {tabs.length > 1 && (
            <div className="project-tabs" role="tablist">
              {tabs.map((tab, i) => (
                <button
                  key={tab.label}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  className={`project-tab ${i === active ? 'is-active' : ''}`}
                  onClick={() => setActive(i)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}
          <div className="project-sections" role={tabs.length > 1 ? 'tabpanel' : undefined}>
            {tabs[active].sections.map((section) => (
              <Section key={section.heading ?? 'stages'} section={section} />
            ))}
          </div>
        </>
      ) : (
        <p className="modal-section modal-pending">Details coming soon.</p>
      )}
    </Modal>
  );
}
