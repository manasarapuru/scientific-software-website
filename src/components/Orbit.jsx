import Avatar from './Avatar.jsx';

const RADIUS = 39; // % of the container, from center to each node

function position(index, count) {
  const angle = (-90 + (360 / count) * index) * (Math.PI / 180);
  return { x: 50 + RADIUS * Math.cos(angle), y: 50 + RADIUS * Math.sin(angle) };
}

export default function Orbit({ nodes, activeIds, selectedIds = [], meActive, onSelectMe, onSelect, onHover }) {
  const placed = nodes.map((node, i) => ({ ...node, ...position(i, nodes.length) }));

  return (
    <div className="orbit">
      <svg className="orbit-lines" viewBox="0 0 100 100" aria-hidden="true">
        {placed.map((n) => {
          const on = Boolean(activeIds?.includes(n.id));
          return (
            <line
              key={n.id}
              x1="50"
              y1="50"
              x2={n.x}
              y2={n.y}
              className={on ? 'orbit-link is-on' : 'orbit-link'}
              style={on ? { stroke: n.color } : undefined}
            />
          );
        })}
      </svg>

      <button
        type="button"
        className={`orbit-me ${meActive ? 'is-selected' : ''}`}
        onClick={onSelectMe}
        aria-haspopup="dialog"
      >
        <Avatar className="orbit-me-avatar" />
        <span className="orbit-me-label">About me</span>
      </button>

      {placed.map((n) => {
        const selected = selectedIds.includes(n.id);
        const dimmed = activeIds && !activeIds.includes(n.id);
        return (
          <button
            key={n.id}
            type="button"
            className={`orbit-node ${selected ? 'is-selected' : ''} ${dimmed ? 'is-dimmed' : ''}`}
            style={{ left: `${n.x}%`, top: `${n.y}%`, '--c': n.color }}
            onClick={() => onSelect(n.id)}
            onMouseEnter={(e) => onHover(n.id, e)}
            onMouseLeave={() => onHover(null)}
            onFocus={(e) => onHover(n.id, e)}
            onBlur={() => onHover(null)}
            aria-pressed={selected}
            aria-label={n.count != null ? `${n.label}, ${n.count} ${n.count === 1 ? 'entry' : 'entries'}` : undefined}
          >
            <span className="orbit-dot">
              {n.count != null && <span className="orbit-count">{n.count}</span>}
            </span>
            <span className="orbit-label">{n.label}</span>
          </button>
        );
      })}
    </div>
  );
}
