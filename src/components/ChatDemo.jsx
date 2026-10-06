import { Fragment, useEffect, useRef, useState } from 'react';

const READ_MS = 2600; // pause on each new message before the next person starts typing
const TYPING_MS = 1800; // how long the typing dots show

// A short chat that plays out message by message, to show a request's delays and back-and-forth.
// `chat` has `people` (by id), `messages` (each with who and text, and optionally a time, a file,
// the `gap` since the last message, the time `elapsed` since the first, a `card` of labelled
// placeholder rows, the `sources` it drew on and whether it was `verified`), a `caption`, and
// optionally a `header` person to show in place of the first speaker and a `note` (a disclaimer).
export default function ChatDemo({ chat }) {
  const { people, messages, caption, note } = chat;
  const [count, setCount] = useState(0); // how many messages are showing
  const [typing, setTyping] = useState(false);
  const [started, setStarted] = useState(false);
  const [run, setRun] = useState(0);
  const [reducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const boxRef = useRef(null);
  const logRef = useRef(null);

  // Start playing once the chat has scrolled into view.
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setStarted(true), {
      threshold: 0.4,
    });
    observer.observe(boxRef.current);
    return () => observer.disconnect();
  }, []);

  // Each step: wait, show the next person typing, then show their message.
  useEffect(() => {
    if (!started) return undefined;
    if (reducedMotion) {
      setCount(messages.length);
      return undefined;
    }
    if (count >= messages.length) return undefined;
    const wait = count === 0 ? 500 : READ_MS;
    const typingTimer = setTimeout(() => setTyping(true), wait);
    const messageTimer = setTimeout(() => {
      setTyping(false);
      setCount(count + 1);
    }, wait + TYPING_MS);
    return () => {
      clearTimeout(typingTimer);
      clearTimeout(messageTimer);
    };
  }, [started, count, run, reducedMotion, messages.length]);

  // Keep the newest message in view.
  useEffect(() => {
    const log = logRef.current;
    if (log) log.scrollTop = log.scrollHeight;
  }, [count, typing]);

  const replay = () => {
    setTyping(false);
    setCount(0);
    setRun((r) => r + 1);
  };

  const requester = people[messages[0].who];
  const header = chat.header ? people[chat.header] : requester;
  const timed = messages[0].elapsed != null; // a running clock only makes sense for a timed exchange
  // as in a messaging app: the person asking is on the left, the person answering on the right
  const side = (who) => (who === messages[0].who ? '' : 'is-right');
  const next = messages[count];
  const elapsed = count ? messages[count - 1].elapsed : '0 min';
  const done = count >= messages.length;

  return (
    <figure className="chat-demo" ref={boxRef}>
      <div className="chat-window">
        <div className="chat-head">
          <span className="chat-avatar" style={{ '--c': header.color }} aria-hidden="true">
            {header.name[0]}
          </span>
          <span className="chat-who">
            <span className="chat-who-name">{header.name}</span>
            <span className="chat-role">{header.role}</span>
          </span>
          {timed && (
            <span className="chat-elapsed">
              Total time
              <span className="chat-elapsed-value">{elapsed}</span>
            </span>
          )}
        </div>

        <div className="chat-log" ref={logRef} aria-live="off">
          {messages.slice(0, count).map((m, i) => {
            const person = people[m.who];
            return (
              <Fragment key={i}>
                {m.gap && <div className="chat-gap">{m.gap}</div>}
                <div className={`chat-msg ${side(m.who)}`} style={{ '--c': person.color }}>
                  <span className="chat-avatar" aria-hidden="true">{person.name[0]}</span>
                  <div>
                    <div className="chat-meta">
                      <span className="chat-name">{person.name}</span>
                      {m.time}
                    </div>
                    <div className="chat-bubble">
                      {m.text}
                      {m.file && (
                        <span className="chat-file">
                          <span className="chat-file-icon" aria-hidden="true">X</span>
                          {m.file}
                        </span>
                      )}
                      {m.card && (
                        <span className="chat-card">
                          {m.card.map((label) => (
                            <span key={label} className="chat-card-row">
                              <span className="chat-card-label">{label}</span>
                              <span className="chat-card-value" aria-hidden="true" />
                            </span>
                          ))}
                        </span>
                      )}
                      {(m.sources || m.verified) && (
                        <span className="chat-sources">
                          {m.sources?.map((source) => (
                            <span key={source} className="chat-source">{source}</span>
                          ))}
                          {m.verified && <span className="chat-verified">✓ Verified</span>}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Fragment>
            );
          })}
          {typing && next && (
            <div className={`chat-msg ${side(next.who)}`} style={{ '--c': people[next.who].color }} aria-hidden="true">
              <span className="chat-avatar">{people[next.who].name[0]}</span>
              <div className="chat-bubble chat-dots">
                <span />
                <span />
                <span />
              </div>
            </div>
          )}
        </div>
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
