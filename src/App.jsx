import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import {
  profile,
  themes,
  statuses,
  skillGroups,
  projects,
  skillById,
  themeById,
  statusById,
  themesOf,
  themeTag,
} from './data.js';
import { parseEmphasis } from './text.js';
import Orbit from './components/Orbit.jsx';
import HeroFigure from './components/HeroFigure.jsx';
import IntroOverlay from './components/IntroOverlay.jsx';
import Story from './components/Story.jsx';
import ProjectModal from './components/ProjectModal.jsx';
import AboutModal from './components/AboutModal.jsx';
import SkillModal from './components/SkillModal.jsx';
import ContactPage from './components/ContactPage.jsx';
import ResumePage from './components/ResumePage.jsx';
import SocialLinks from './components/SocialLinks.jsx';
import SocialIcons from './components/SocialIcons.jsx';

function Header({ theme, onToggleTheme, onAbout }) {
  const dark = theme === 'dark';
  // On narrow screens the links fold away into a menu, opened with the button at the end of the bar.
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="brand">
          <span className="brand-name">{profile.name}</span>
        </a>
        <nav className={`header-nav ${menuOpen ? 'is-open' : ''}`}>
          <div id="nav-links" className="nav-links">
            <a href="#story" className="nav-link" onClick={closeMenu}>Approach</a>
            <a href="#explore" className="nav-link" onClick={closeMenu}>Work</a>
            <button
              type="button"
              className="nav-link"
              onClick={() => {
                closeMenu();
                onAbout();
              }}
            >
              About me
            </button>
            <a href="#/resume" className="nav-link" onClick={closeMenu}>Resume</a>
            {/* in the menu on the narrowest screens, where the button in the bar has no room */}
            <a href="#/contact" className="nav-link nav-contact" onClick={closeMenu}>Get in touch</a>
          </div>
          <a href="#/contact" className="btn btn-primary" onClick={closeMenu}>Get in touch</a>
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              {dark ? (
                <>
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4" />
                </>
              ) : (
                <path d="M20 14.5A8 8 0 0 1 9.5 4a7 7 0 1 0 10.5 10.5z" strokeLinejoin="round" />
              )}
            </svg>
          </button>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="nav-links"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}

function Hero({ figureRef, headlineRef, revealed, figureVisible }) {
  return (
    <section className={`hero ${revealed ? 'is-revealed' : ''}`} id="top">
      <div className="container">
        <div className="hero-grid">
          {/* Left blank until the intro's headline has landed on this spot, then shown in its place. */}
          <h1 ref={headlineRef} className={`hero-statement ${figureVisible ? '' : 'is-hidden'}`}>
            {parseEmphasis(profile.statement[0]).map((piece, i) =>
              piece.strong ? <em key={i}>{piece.text}</em> : piece.text
            )}
          </h1>

          {/* Hidden while the intro plays; the intro's disk glides onto this spot and this one takes over. */}
          <HeroFigure figureRef={figureRef} className={figureVisible ? '' : 'is-hidden'} typingOnly />
        </div>

        <div className="hero-sub hero-copy">
          {/* sits on the divider line, under the figure */}
          <SocialIcons ids={['linkedin', 'spotify', 'tiktok']} className="hero-socials" />
          <div>
            {profile.statement.slice(1).map((sentence) => (
              <p key={sentence} className="hero-intro">{sentence}</p>
            ))}
          </div>
          <a href="#story" className="hero-cue">
            Let’s understand the problem
            <span className="hero-cue-arrow" aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}

// How many projects sit under each theme, shown on the orbit and the filter tags.
const themeCounts = Object.fromEntries(themes.map((t) => [t.id, projects.filter((p) => themesOf(p).includes(t.id)).length])
);
const countedThemes = themes.map((t) => ({ ...t, count: themeCounts[t.id] }));

// The filter groups, as on a shop's product listing: choices within a group widen the results
// (any of them), and each further group narrows them (all groups must match).
const FACETS = [
  {
    id: 'theme',
    label: 'Theme',
    options: themes.map((t) => ({ id: t.id, label: t.label, color: t.color })),
    has: (project, id) => themesOf(project).includes(id),
  },
  {
    id: 'status',
    label: 'Status',
    options: statuses.map((st) => ({ id: st.id, label: st.label, color: st.color })),
    has: (project, id) => project.status === id,
  },
  {
    id: 'skill',
    label: 'Skills',
    // grouped as laid out in the data, keeping only skills some project uses; strays go under "Other"
    options: (() => {
      const used = [...new Set(projects.flatMap((p) => p.skills))];
      const placed = skillGroups.flatMap((g) => g.skills.filter((name) => used.includes(name)).map((name) => ({ id: name, label: name, group: g.label })));
      const strays = used.filter((name) => !placed.some((option) => option.id === name)).sort((a, b) => a.localeCompare(b));
      return [...placed, ...strays.map((name) => ({ id: name, label: name, group: 'Other' }))];
    })(),
    has: (project, id) => project.skills.includes(id),
  },
  {
    id: 'place',
    label: 'Where',
    options: [...new Set(projects.map((p) => p.place).filter(Boolean))].map((place) => ({ id: place, label: place })),
    has: (project, id) => project.place === id,
  },
];
const NO_FILTERS = Object.fromEntries(FACETS.map((f) => [f.id, []]));

// Whether a project passes the chosen filters; `except` leaves one group out (used for the counts).
function passes(project, filters, except) {
  return FACETS.every((f) => {
    const chosen = filters[f.id];
    return f.id === except || !chosen.length || chosen.some((id) => f.has(project, id));
  });
}

function ProjectCard({ project, state, onHover, onOpen }) {
  const theme = themeTag(project);
  const status = statusById[project.status];

  return (
    <li>
      <button
        type="button"
        className={`project-card ${state}`}
        style={{ '--c': theme.color }}
        onMouseEnter={() => onHover(project.id)}
        onMouseLeave={() => onHover(null)}
        onFocus={() => onHover(project.id)}
        onBlur={() => onHover(null)}
        onClick={() => onOpen(project.id)}
      >
        <span className="project-head">
          <span className="project-theme">
            <span className="chip-dot" />
            {theme.label}
            <span className="project-kind">{project.kind}</span>
          </span>
          <span className="project-arrow" aria-hidden="true">↗</span>
        </span>
        <span className="project-title">{project.title}</span>
        <span className="project-tagline">{project.tagline}</span>
        <span className="project-foot">
          {/* a status doesn't apply to everything */}
          {status && <span className="project-status" style={{ '--c': status.color }}>{status.label}</span>}
          {project.place && <span className="project-place">{project.place}</span>}
          {project.year && <span className="project-year">{project.year}</span>}
        </span>
      </button>
    </li>
  );
}

function Explorer({ aboutOpen, onOpenAbout, onOpenProject }) {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [hoveredTheme, setHoveredTheme] = useState(null);
  const [filters, setFilters] = useState(NO_FILTERS);
  const [openFacet, setOpenFacet] = useState(null); // which filter menu is showing, if any

  // A filter menu closes on a click anywhere outside it, or on Escape.
  useEffect(() => {
    if (!openFacet) return undefined;
    const onDown = (e) => !e.target.closest('.facet') && setOpenFacet(null);
    const onKey = (e) => e.key === 'Escape' && setOpenFacet(null);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [openFacet]);

  const toggleFilter = (facetId, id) =>
    setFilters((current) => {
      const chosen = current[facetId];
      return { ...current, [facetId]: chosen.includes(id) ? chosen.filter((x) => x !== id) : [...chosen, id] };
    });
  const clearFilters = () => setFilters(NO_FILTERS);
  const applied = FACETS.flatMap((f) =>
    filters[f.id].map((id) => ({ facet: f.id, ...f.options.find((option) => option.id === id) }))
  );
  const shownProjects = projects.filter((p) => passes(p, filters));

  // Themes lit on the orbit: a hovered project's win, then a hovered theme, then the chosen ones.
  let focusIds = null;
  if (hoveredProject) focusIds = themesOf(projects.find((p) => p.id === hoveredProject));
  else if (hoveredTheme) focusIds = [hoveredTheme];
  else if (filters.theme.length) focusIds = filters.theme;

  // Tooltip for the orbit's themes. Fixed to the viewport so the card's edges don't clip it.
  const [tip, setTip] = useState(null);
  const hoverTheme = (id, e) => {
    setHoveredTheme(id);
    if (!id) return setTip(null);
    const rect = e.currentTarget.getBoundingClientRect();
    const margin = 150; // half the tooltip's max width, plus a gutter
    const x = Math.min(Math.max(rect.left + rect.width / 2, margin), window.innerWidth - margin);
    setTip({ text: themeById[id].line, x, y: rect.top - 8 });
  };

  return (
    <section className="explorer" id="explore">
      <div className="container">
        <div className="explorer-card">
          <div className="explorer-main">
            <div className="explorer-intro">
              <h2 className="explorer-title">Four sources of confusion.</h2>
              <p className="explorer-text">
                Across my work I’ve observed four places where the translation gap opens up. Each one is paired
                with the work that addresses it.
              </p>
            </div>
            <Orbit
              nodes={countedThemes}
              activeIds={focusIds}
              selectedIds={filters.theme}
              meActive={aboutOpen}
              onSelectMe={onOpenAbout}
              onSelect={(id) => toggleFilter('theme', id)}
              onHover={hoverTheme}
            />
            {tip && (
              <div className="theme-tip" role="tooltip" style={{ left: tip.x, top: tip.y }}>
                {tip.text}
              </div>
            )}
          </div>

          <aside className="explorer-side" aria-label="Work">
            <div className="explorer-side-inner">
              {/* one menu per kind of filter; each opens over the list, so the list keeps its space */}
              <div className="facet-bar">
                {FACETS.map((facet) => {
                  const open = openFacet === facet.id;
                  const chosen = filters[facet.id].length;
                  return (
                    <div key={facet.id} className="facet">
                      <button
                        type="button"
                        className={`filter-toggle ${chosen ? 'has-choice' : ''}`}
                        aria-expanded={open}
                        aria-haspopup="true"
                        onClick={() => setOpenFacet(open ? null : facet.id)}
                      >
                        {facet.label}
                        {chosen > 0 && <span className="facet-chosen">{chosen}</span>}
                      </button>
                      {open && (
                        <div className="facet-menu" role="group" aria-label={`Filter by ${facet.label.toLowerCase()}`}>
                          {facet.options.map((option, n) => {
                            const on = filters[facet.id].includes(option.id);
                            const heading = option.group && option.group !== facet.options[n - 1]?.group && option.group;
                            // how many results choosing this would give, with the other groups as they are
                            const count = projects.filter(
                              (p) => passes(p, filters, facet.id) && facet.has(p, option.id)
                            ).length;
                            return (
                              <Fragment key={option.id}>
                              {heading && <span className="facet-group">{heading}</span>}
                              <button
                                type="button"
                                className={`facet-option ${on ? 'is-on' : ''}`}
                                style={{ '--c': option.color ?? 'var(--navy)' }}
                                aria-pressed={on}
                                disabled={!count && !on}
                                onClick={() => toggleFilter(facet.id, option.id)}
                              >
                                <span className="facet-check" aria-hidden="true" />
                                {option.label}
                                <span className="chip-count">{count}</span>
                              </button>
                              </Fragment>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* how many are showing, and, while filters are applied, a way to clear them */}
              <div className="side-head">
                <span className="side-count">
                  {applied.length
                    ? `Showing ${shownProjects.length} of ${projects.length}`
                    : `Showing all ${projects.length}`}
                </span>
                {applied.length > 0 && (
                  <button type="button" className="filter-clear" onClick={clearFilters}>
                    Clear all
                  </button>
                )}
              </div>

              {/* what is applied, each removable, under the menus */}
              {applied.length > 0 && (
                <ul className="applied-filters" aria-label="Applied filters">
                  {applied.map((item) => (
                    <li key={`${item.facet}-${item.id}`}>
                      <button
                        type="button"
                        className="chip"
                        onClick={() => toggleFilter(item.facet, item.id)}
                        aria-label={`Remove filter: ${item.label}`}
                      >
                        {item.label} <span aria-hidden="true">✕</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              {shownProjects.length === 0 && (
                <p className="list-empty">
                  Nothing matches all of these filters.{' '}
                  <button type="button" className="link-btn" onClick={clearFilters}>
                    Clear all
                  </button>
                </p>
              )}
              <ul className="project-list">
                {shownProjects.map((p) => {
                  let state = '';
                  if (focusIds) state = themesOf(p).some((id) => focusIds.includes(id)) ? 'is-match' : 'is-dimmed';
                  if (hoveredProject === p.id) state = 'is-hovered';
                  return (
                    <ProjectCard
                      key={p.id}
                      project={p}
                      state={state}
                      onHover={setHoveredProject}
                      onOpen={onOpenProject}
                    />
                  );
                })}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  // The contact and resume pages live at #/contact and #/resume; every other hash is a section of the home page.
  const [hash, setHash] = useState(() => window.location.hash);
  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);
  const page = hash === '#/contact' ? 'contact' : hash === '#/resume' ? 'resume' : 'home';

  // Start the contact page at the top; coming back, scroll to the section the link asked for.
  useEffect(() => {
    if (page !== 'home') window.scrollTo(0, 0);
    else if (hash.length > 1) document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [page, hash]);

  // Light is the default theme. A visitor's own choice is remembered; index.html applies it before first paint.
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light');
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try {
      localStorage.setItem('theme-choice', next);
    } catch {
      // storage unavailable (private mode): the choice just won't persist
    }
  };

  // Only one popup is open at a time: { type: 'about' | 'skill' | 'project', id? } or null.
  const [modal, setModal] = useState(null);
  const closeModal = useCallback(() => setModal(null), []);
  const openAbout = () => setModal({ type: 'about' });
  const openContact = () => {
    setModal(null);
    window.location.hash = '/contact';
  };
  const openSkill = (id) => setModal({ type: 'skill', id });
  const openProject = (id) => setModal({ type: 'project', id });

  // Intro: 'playing' (avatar centered) → 'leaving' (gliding to the hero) → 'done'.
  // Skipped entirely for visitors who prefer reduced motion.
  const [intro, setIntro] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'done' : 'playing'
  );
  const heroFigureRef = useRef(null);
  const heroHeadlineRef = useRef(null);
  const introLeave = useCallback(() => setIntro('leaving'), []);
  const introDone = useCallback(() => setIntro('done'), []);

  return (
    <>
      {page === 'home' && intro !== 'done' && (
        <IntroOverlay
          targetRef={heroFigureRef}
          headlineRef={heroHeadlineRef}
          onLeave={introLeave}
          onDone={introDone}
        />
      )}
      <Header theme={theme} onToggleTheme={toggleTheme} onAbout={openAbout} />
      {page === 'contact' ? (
        <main>
          <ContactPage />
        </main>
      ) : page === 'resume' ? (
        <main>
          <ResumePage />
        </main>
      ) : (
        <main>
          <Hero
            figureRef={heroFigureRef}
            headlineRef={heroHeadlineRef}
            revealed={intro !== 'playing'}
            figureVisible={intro === 'done'}
          />
          <Story />
          <Explorer
            aboutOpen={modal?.type === 'about'}
            onOpenAbout={openAbout}
            onOpenProject={openProject}
          />
        </main>
      )}
      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <SocialLinks />
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
      </footer>

      {modal?.type === 'about' && (
        <AboutModal onClose={closeModal} onContact={openContact} />
      )}

      {modal?.type === 'skill' && (
        <SkillModal skill={skillById[modal.id]} onClose={closeModal} onOpenProject={openProject} />
      )}

      {modal?.type === 'project' && (
        <ProjectModal
          project={projects.find((p) => p.id === modal.id)}
          onClose={closeModal}
        />
      )}
    </>
  );
}
