// The avatar's head and shoulders, drawn in a 100x100 space for use inside an <svg>:
// long black hair swept back from a side part, soft features, warm skin, a teal ribbed top.

export const SKIN = '#c98d62';
const SKIN_SHADE = '#b17650';
const HAIR = '#1d1a1a';
const HAIR_LIGHT = '#48423f';
const BROW = '#3f2c24';
export const TOP = '#0d7a66';
const TOP_SHADE = '#0a6353';

const EYES = [44.4, 55.6]; // iris centres, x

// `pupilRefs` (optional) receives the two iris groups, so a caller can make the eyes follow the cursor.
export default function GirlBust({ grin = false, pupilRefs }) {
  return (
    <>
      {/* the avatar: long black hair with lift at the crown, falling behind the shoulders in loose waves */}
      <path
        d="M50 21 C40 20 31 26 30.5 38 C30 44 27 48 27.5 54 C28 60 25 64 26.5 70 C28 76 25.5 80 28 85 L38 85 C39 81 38 78 40 76 L60 76 C62 78 61 81 62 85 L72 85 C74.5 80 72 76 73.5 70 C75 64 72 60 72.5 54 C73 48 70 44 69.5 38 C69 26 60 20 50 21 Z"
        fill={HAIR}
      />
      <path
        d="M31.5 44 q-2.5 6 -0.5 12 q1.5 5 -1 10 M68.5 44 q2.5 6 0.5 12 q-1.5 5 1 10"
        fill="none"
        stroke={HAIR_LIGHT}
        strokeWidth="0.9"
        strokeLinecap="round"
      />

      {/* ribbed teal top with a round neckline */}
      <path d="M27 100 L30 80 Q32 71 43 68.5 Q50 73 57 68.5 Q68 71 70 80 L73 100 Z" fill={TOP} />
      <path
        d="M36 76 V100 M40.5 73 V100 M45 72.5 V100 M50 73.5 V100 M55 72.5 V100 M59.5 73 V100 M64 76 V100"
        stroke={TOP_SHADE}
        strokeWidth="0.45"
        opacity="0.7"
      />
      <path d="M46.4 56 L45.6 68 Q50 71 54.4 68 L53.6 56 Z" fill={SKIN_SHADE} />
      <path d="M43 68.5 Q50 73 57 68.5 Q50 65.5 43 68.5 Z" fill={SKIN} />
      <path d="M43 68.5 Q50 73.4 57 68.5" fill="none" stroke={TOP_SHADE} strokeWidth="1.5" strokeLinecap="round" />

      {/* face: round cheeks, soft chin, both ears showing where the hair is swept back */}
      <ellipse cx="37" cy="47.6" rx="2.4" ry="3.4" fill={SKIN} />
      <ellipse cx="63" cy="47.6" rx="2.4" ry="3.4" fill={SKIN} />
      <path
        d="M36.8 45.8 q-1.2 1.6 0 3.4 M63.2 45.8 q1.2 1.6 0 3.4"
        fill="none"
        stroke={SKIN_SHADE}
        strokeWidth="0.6"
        strokeLinecap="round"
      />
      <path d="M37.5 44 C37.5 32.5 62.5 32.5 62.5 44 C62.5 54 57.5 60 50 60 C42.5 60 37.5 54 37.5 44 Z" fill={SKIN} />
      <circle cx="41.4" cy="51.8" r="3" fill="#e58a78" opacity="0.26" />
      <circle cx="58.6" cy="51.8" r="3" fill="#e58a78" opacity="0.26" />

      {/* soft, gently arched brows */}
      <path
        d="M40.8 41.2 Q44.2 39.6 47.6 40.9 M52.4 40.9 Q55.8 39.6 59.2 41.2"
        fill="none"
        stroke={BROW}
        strokeWidth="1.05"
        strokeLinecap="round"
      />

      {/* large, warm brown eyes with a fine lash line and two highlights */}
      <g className="avatar-eyes">
        <ellipse cx="44.2" cy="46.8" rx="3.1" ry="3.3" fill="#fbf4ec" />
        <ellipse cx="55.8" cy="46.8" rx="3.1" ry="3.3" fill="#fbf4ec" />
        {EYES.map((cx, i) => (
          <g key={cx} className="avatar-pupil" ref={(el) => pupilRefs && (pupilRefs.current[i] = el)}>
            <circle cx={cx} cy="46.9" r="2.65" fill="#5a3524" />
            <circle cx={cx} cy="46.9" r="1.35" fill="#24140e" />
            <circle cx={cx - 0.9} cy="45.9" r="0.85" fill="#fff" />
            <circle cx={cx + 1} cy="47.9" r="0.4" fill="#fff" opacity="0.8" />
          </g>
        ))}
        <path
          d="M41 45.9 Q44.2 42.6 47.5 45.7 M52.5 45.7 Q55.8 42.6 59 45.9"
          fill="none"
          stroke="#3a241b"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
      </g>

      {/* faint nose; a gentle closed smile, or an open one with `grin` */}
      <path d="M49.5 51.4 Q50.2 52.1 51 51.5" fill="none" stroke={SKIN_SHADE} strokeWidth="0.7" strokeLinecap="round" opacity="0.8" />
      {grin ? (
        <g>
          <path d="M46.2 54.4 Q50.1 59.8 54 54.4 Z" fill="#7a3b2e" strokeLinejoin="round" />
          <path d="M46.9 54.6 L53.3 54.6 Q52.9 55.9 50.1 56 Q47.3 55.9 46.9 54.6 Z" fill="#fff" />
        </g>
      ) : (
        <>
          <path d="M46.8 54.8 Q50.1 57 53.4 54.6" fill="none" stroke="#a9604c" strokeWidth="1" strokeLinecap="round" />
          <path d="M48.6 56.9 Q50.1 57.5 51.6 56.9" fill="none" stroke="#c07a65" strokeWidth="0.6" strokeLinecap="round" opacity="0.5" />
        </>
      )}

      {/* swept back from a side part, clear of the forehead */}
      <g fill={HAIR}>
        <path d="M37 46 C36.5 38 44 31.5 55 31 C59.5 32.5 62 37 62.8 44 L66 44 C68 32 60 22.5 50 22.5 C38 22.5 31.5 31 34 46 Z" />
      </g>
      <path
        d="M54 30.4 C46 29 39 33 36 41 M52 26.6 C44 25.6 37 30.5 34.6 38 M57 30.4 C61 31 64 35 65 40"
        fill="none"
        stroke={HAIR_LIGHT}
        strokeWidth="0.9"
        strokeLinecap="round"
      />
    </>
  );
}
