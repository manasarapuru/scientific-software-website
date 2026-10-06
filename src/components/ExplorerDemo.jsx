import { useEffect, useRef, useState } from 'react';

// A short walkthrough of the finished tool: a gene is typed in, an analysis and its options are
// chosen, Submit is pressed, and the chart and table appear in one place.
// `demo` has the tool's `title`, the `gene` typed, the `analyses` offered (the first is chosen),
// the `dataset` and `option` picked, a `chart` (title, legend, bar heights), a `table` (title,
// columns, rows), a `caption` and a `note` (a disclaimer shown beneath).
export default function ExplorerDemo({ demo }) {
  const { title, gene, analyses, dataset, option, chart, table, caption, note } = demo;

  // The steps, in order, with how long each one lasts before the next.
  const TYPED = gene.length; // steps 1..TYPED type the gene one letter at a time
  const PICK_ANALYSIS = TYPED + 1;
  const PICK_DATASET = TYPED + 2;
  const PICK_OPTION = TYPED + 3;
  const PRESS = TYPED + 4;
  const RESULTS = TYPED + 5;
  const wait = (step) => (step === 0 ? 900 : step < TYPED ? 150 : step === PRESS ? 600 : 750);

  const [step, setStep] = useState(0);
  const [started, setStarted] = useState(false);
  const [run, setRun] = useState(0);
  const [reducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const boxRef = useRef(null);

  // Start playing once it has scrolled into view.
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setStarted(true), {
      threshold: 0.4,
    });
    observer.observe(boxRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return undefined;
    if (reducedMotion) {
      setStep(RESULTS);
      return undefined;
    }
    if (step >= RESULTS) return undefined;
    const timer = setTimeout(() => setStep(step + 1), wait(step));
    return () => clearTimeout(timer);
  }, [started, step, run, reducedMotion]); // eslint-disable-line react-hooks/exhaustive-deps

  const replay = () => {
    setStep(0);
    setRun((r) => r + 1);
  };

  const typed = gene.slice(0, Math.min(step, TYPED));
  const typing = step > 0 && step <= TYPED;
  const analysis = step >= PICK_ANALYSIS ? analyses[0].name : null;
  const pickedDataset = step >= PICK_DATASET ? dataset : null;
  const pickedOption = step >= PICK_OPTION ? option : null;
  const done = step >= RESULTS;

  return (
    <figure className="explorer-demo" ref={boxRef}>
      <div className="xd-window">
        <div className="xd-head">
          {title}
          <span className="xd-help" aria-hidden="true">?</span>
        </div>

        {!done ? (
          <div className="xd-body">
            <div className="xd-controls">
              <span className={`xd-input ${typing ? 'is-focus' : ''} ${typed ? 'is-set' : ''}`}>
                {typed || (typing ? '' : 'Gene')}
                {typing && <span className="xd-caret" />}
              </span>
              <span className={`xd-select ${analysis ? 'is-set' : ''}`}>{analysis ?? 'Analysis type'}</span>
              <span className={`xd-select ${pickedDataset ? 'is-set' : ''}`}>{pickedDataset ?? 'Dataset'}</span>
              <span className={`xd-select ${pickedOption ? 'is-set' : ''}`}>{pickedOption ?? 'Comparison'}</span>
            </div>

            <div className="xd-cards">
              {analyses.map((a, i) => (
                <div key={a.name} className={`xd-card ${analysis && i === 0 ? 'is-picked' : ''}`}>
                  <span className="xd-card-name">{a.name}</span>
                  <span className="xd-card-text">{a.description}</span>
                </div>
              ))}
            </div>

            <span
              className={`xd-submit ${step >= PICK_OPTION ? 'is-ready' : ''} ${step === PRESS ? 'is-pressed' : ''}`}
            >
              Submit
            </span>
          </div>
        ) : (
          <div className="xd-body xd-results">
            <div className="xd-chips">
              <span className="xd-chip">{gene}</span>
              <span className="xd-chip is-analysis">{analyses[0].name}</span>
              <span className="xd-chip">{dataset}</span>
              <span className="xd-chip">{option}</span>
            </div>

            <div className="xd-panels">
              <div className="xd-panel">
                <span className="xd-panel-title">{chart.title}</span>
                <div className="xd-bars" aria-hidden="true">
                  {chart.bars.map((height, i) => (
                    <span
                      key={i}
                      className={i % 2 ? 'is-b' : 'is-a'}
                      style={{ height: `${height}%`, animationDelay: `${i * 60}ms` }}
                    />
                  ))}
                </div>
                <div className="xd-legend">
                  <span className="is-a">{chart.legend[0]}</span>
                  <span className="is-b">{chart.legend[1]}</span>
                </div>
              </div>

              <div className="xd-panel">
                <span className="xd-panel-title">{table.title}</span>
                <div className="xd-table" role="table">
                  <div className="xd-row is-head" role="row">
                    {table.columns.map((column) => (
                      <span key={column} role="columnheader">{column}</span>
                    ))}
                  </div>
                  {table.rows.map((row, i) => (
                    <div
                      key={row[0]}
                      className={`xd-row ${row[0] === gene ? 'is-match' : ''}`}
                      role="row"
                      style={{ animationDelay: `${200 + i * 90}ms` }}
                    >
                      {row.map((cell, c) => (
                        <span
                          key={c}
                          role="cell"
                          className={c === row.length - 1 ? (cell.startsWith('+') ? 'is-up' : 'is-down') : ''}
                        >
                          {cell}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <figcaption className="chat-caption">
        {caption}
        {done && !reducedMotion && (
          <button type="button" className="link-btn" onClick={replay}>
            Replay
          </button>
        )}
      </figcaption>
      {note && <div className="demo-note">{note}</div>}
    </figure>
  );
}
