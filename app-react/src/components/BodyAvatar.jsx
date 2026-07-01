const MUSCLE_LABELS = {
  chest: 'Peitoral',
  shoulders: 'Ombros',
  triceps: 'Tríceps',
  back: 'Costas',
  biceps: 'Bíceps',
  abs: 'Abdômen',
  quads: 'Quadríceps',
  calves: 'Panturrilhas',
  hamstrings: 'Posterior de coxa',
  glutes: 'Glúteos',
};

function cls(active, muscle) {
  return `muscle${active.has(muscle) ? ' muscle--active' : ''}`;
}

function Muscle({ active, muscle, as: Tag, ...props }) {
  return (
    <Tag className={cls(active, muscle)} data-muscle={muscle} {...props}>
      <title>{MUSCLE_LABELS[muscle]}</title>
    </Tag>
  );
}

export default function BodyAvatar({ activeGroups }) {
  return (
    <div className="body-avatar">
      <div className="body-avatar__col">
        <svg viewBox="0 0 120 220" className="body-avatar__svg">
          <circle cx="60" cy="18" r="14" className="muscle muscle--fixed" />
          <rect x="52" y="30" width="16" height="12" className="muscle muscle--fixed" />

          <Muscle as="ellipse" active={activeGroups} muscle="shoulders" cx="32" cy="46" rx="13" ry="10" transform="rotate(-18 32 46)" />
          <Muscle as="ellipse" active={activeGroups} muscle="shoulders" cx="88" cy="46" rx="13" ry="10" transform="rotate(18 88 46)" />

          <Muscle as="path" active={activeGroups} muscle="chest" d="M40,40 Q60,35 80,40 L78,73 Q60,80 42,73 Z" />

          <Muscle as="polygon" active={activeGroups} muscle="biceps" points="16,48 30,48 26,88 20,88" />
          <Muscle as="polygon" active={activeGroups} muscle="biceps" points="90,48 104,48 100,88 94,88" />

          <Muscle as="polygon" active={activeGroups} muscle="abs" points="44,74 76,74 72,109 48,109" />
          <g className="body-avatar__deco" aria-hidden="true">
            <line x1="60" y1="76" x2="58" y2="107" />
            <line x1="47" y1="86" x2="73" y2="86" />
            <line x1="46" y1="97" x2="74" y2="97" />
          </g>

          <Muscle as="polygon" active={activeGroups} muscle="quads" points="34,113 58,113 55,169 37,169" />
          <Muscle as="polygon" active={activeGroups} muscle="quads" points="62,113 86,113 83,169 65,169" />

          <Muscle as="polygon" active={activeGroups} muscle="calves" points="37,171 55,171 50,209 40,209" />
          <Muscle as="polygon" active={activeGroups} muscle="calves" points="65,171 83,171 78,209 68,209" />
        </svg>
        <span className="body-avatar__label">Frente</span>
      </div>

      <div className="body-avatar__col">
        <svg viewBox="0 0 120 220" className="body-avatar__svg">
          <circle cx="60" cy="18" r="14" className="muscle muscle--fixed" />
          <rect x="52" y="30" width="16" height="12" className="muscle muscle--fixed" />

          <Muscle as="ellipse" active={activeGroups} muscle="shoulders" cx="60" cy="44" rx="32" ry="13" />

          <Muscle as="polygon" active={activeGroups} muscle="back" points="34,54 86,54 74,97 46,97" />

          <Muscle as="polygon" active={activeGroups} muscle="triceps" points="16,50 30,50 26,88 20,88" />
          <Muscle as="polygon" active={activeGroups} muscle="triceps" points="90,50 104,50 100,88 94,88" />

          <Muscle as="rect" active={activeGroups} muscle="glutes" x="36" y="96" width="48" height="24" rx="14" />

          <Muscle as="polygon" active={activeGroups} muscle="hamstrings" points="34,123 58,123 55,167 37,167" />
          <Muscle as="polygon" active={activeGroups} muscle="hamstrings" points="62,123 86,123 83,167 65,167" />

          <Muscle as="polygon" active={activeGroups} muscle="calves" points="37,169 55,169 50,209 40,209" />
          <Muscle as="polygon" active={activeGroups} muscle="calves" points="65,169 83,169 78,209 68,209" />
        </svg>
        <span className="body-avatar__label">Costas</span>
      </div>
    </div>
  );
}
