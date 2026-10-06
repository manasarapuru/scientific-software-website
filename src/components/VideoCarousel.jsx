import { useState } from 'react';

// Every video in src/media, by file name, as a URL the page can load.
const FILES = import.meta.glob('../media/*.mp4', { eager: true, query: '?url', import: 'default' });
const urlFor = (file) => FILES[`../media/${file}`];

// A carousel of short videos: one plays at a time, with arrows and dots to move between them.
// `videos` is a list, each with the `file` name (in src/media), a `title` and optionally a `text`.
export default function VideoCarousel({ videos }) {
  const [index, setIndex] = useState(0);
  const video = videos[index];
  const go = (i) => setIndex((i + videos.length) % videos.length);

  return (
    <figure className="video-carousel">
      <div className="video-stage">
        {videos.length > 1 && (
          <button type="button" className="video-arrow is-prev" onClick={() => go(index - 1)} aria-label="Previous video">
            ←
          </button>
        )}
        {/* keyed by file so that moving on loads the next video afresh */}
        <video key={video.file} src={urlFor(video.file)} controls playsInline loop preload="metadata" aria-label={video.title} />
        {videos.length > 1 && (
          <button type="button" className="video-arrow is-next" onClick={() => go(index + 1)} aria-label="Next video">
            →
          </button>
        )}
      </div>

      <figcaption className="video-caption">
        <span className="video-title">{video.title}</span>
        {video.text && <span className="video-text">{video.text}</span>}
      </figcaption>

      {videos.length > 1 && (
        <div className="carousel-dots video-dots">
          {videos.map((v, i) => (
            <button
              key={v.file}
              type="button"
              className={`carousel-dot ${i === index ? 'is-active' : ''}`}
              onClick={() => go(i)}
              aria-label={`Show “${v.title}”`}
              aria-current={i === index}
            >
              <span className="carousel-dot-mark" />
            </button>
          ))}
        </div>
      )}
    </figure>
  );
}
