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

function Limbs({ active }) {
  return (
    <>
      {/* ombro — deltoide */}
      <Muscle as="ellipse" active={active} muscle="shoulders" cx="60" cy="60" rx="11" ry="9" transform="rotate(-12 60 60)" />
      <Muscle as="ellipse" active={active} muscle="shoulders" cx="140" cy="60" rx="11" ry="9" transform="rotate(12 140 60)" />

      {/* antebraço e mão — apenas contorno, nao rastreado */}
      <polygon className="body-outline" points="38,130 54,128 52,196 42,198" />
      <polygon className="body-outline" points="162,130 146,128 148,196 158,198" />
      <ellipse className="body-outline" cx="46" cy="207" rx="9" ry="13" />
      <ellipse className="body-outline" cx="154" cy="207" rx="9" ry="13" />

      {/* panturrilha */}
      <Muscle as="polygon" active={active} muscle="calves" points="70,298 92,298 88,338 82,373 74,373 68,338" />
      <Muscle as="polygon" active={active} muscle="calves" points="130,298 108,298 112,338 118,373 126,373 132,338" />

      {/* pe — apenas contorno */}
      <ellipse className="body-outline" cx="75" cy="380" rx="14" ry="8" />
      <ellipse className="body-outline" cx="125" cy="380" rx="14" ry="8" />
    </>
  );
}

function FrontView({ active }) {
  return (
    <svg viewBox="0 0 200 400" className="body-avatar__svg">
      <circle cx="100" cy="22" r="15" className="body-outline" />
      <path className="body-outline" d="M93,36 L107,36 L107,50 L93,50 Z" />

      {/* braco superior — biceps */}
      <Muscle as="polygon" active={active} muscle="biceps" points="47,57 63,54 54,128 38,130" />
      <Muscle as="polygon" active={active} muscle="biceps" points="153,57 137,54 146,128 162,130" />

      {/* peitoral */}
      <Muscle as="path" active={active} muscle="chest" d="M100,62 Q82,58 71,68 Q67,86 80,104 Q92,109 100,101 Z" />
      <Muscle as="path" active={active} muscle="chest" d="M100,62 Q118,58 129,68 Q133,86 120,104 Q108,109 100,101 Z" />

      {/* obliquos (agrupados com abdomen) */}
      <Muscle as="path" active={active} muscle="abs" d="M80,109 Q71,138 77,178 L86,178 L86,109 Z" />
      <Muscle as="path" active={active} muscle="abs" d="M120,109 Q129,138 123,178 L114,178 L114,109 Z" />

      {/* abdomen — 3 fileiras x 2 colunas */}
      <Muscle as="rect" active={active} muscle="abs" x="84" y="109" width="15" height="20" rx="4" />
      <Muscle as="rect" active={active} muscle="abs" x="101" y="109" width="15" height="20" rx="4" />
      <Muscle as="rect" active={active} muscle="abs" x="84" y="133" width="15" height="20" rx="4" />
      <Muscle as="rect" active={active} muscle="abs" x="101" y="133" width="15" height="20" rx="4" />
      <Muscle as="rect" active={active} muscle="abs" x="84" y="157" width="15" height="20" rx="4" />
      <Muscle as="rect" active={active} muscle="abs" x="101" y="157" width="15" height="20" rx="4" />

      {/* quadriceps */}
      <Muscle as="polygon" active={active} muscle="quads" points="64,182 98,182 92,296 70,296" />
      <Muscle as="polygon" active={active} muscle="quads" points="136,182 102,182 108,296 130,296" />

      <Limbs active={active} />
    </svg>
  );
}

function BackView({ active }) {
  return (
    <svg viewBox="0 0 200 400" className="body-avatar__svg">
      <circle cx="100" cy="22" r="15" className="body-outline" />
      <path className="body-outline" d="M93,36 L107,36 L107,50 L93,50 Z" />

      {/* braco superior — triceps */}
      <Muscle as="polygon" active={active} muscle="triceps" points="47,57 63,54 54,128 38,130" />
      <Muscle as="polygon" active={active} muscle="triceps" points="153,57 137,54 146,128 162,130" />

      {/* costas — trapezio + dorsal em V */}
      <Muscle as="path" active={active} muscle="back" d="M100,38 L132,62 L118,116 L100,99 L82,116 L68,62 Z" />
      <Muscle as="path" active={active} muscle="back" d="M100,99 L118,116 L111,176 L100,188 L89,176 L82,116 Z" />

      {/* gluteos */}
      <Muscle as="path" active={active} muscle="glutes" d="M67,180 Q66,214 87,221 Q98,223 98,206 L96,180 Z" />
      <Muscle as="path" active={active} muscle="glutes" d="M133,180 Q134,214 113,221 Q102,223 102,206 L104,180 Z" />

      {/* posterior de coxa */}
      <Muscle as="polygon" active={active} muscle="hamstrings" points="69,223 96,221 92,296 72,296" />
      <Muscle as="polygon" active={active} muscle="hamstrings" points="131,223 104,221 108,296 128,296" />

      <Limbs active={active} />
    </svg>
  );
}

export default function BodyAvatar({ activeGroups }) {
  return (
    <div className="body-avatar">
      <div className="body-avatar__figures">
        <div className="body-avatar__col">
          <FrontView active={activeGroups} />
          <span className="body-avatar__label">Frente</span>
        </div>
        <div className="body-avatar__col">
          <BackView active={activeGroups} />
          <span className="body-avatar__label">Costas</span>
        </div>
      </div>
      <div className="body-avatar__legend">
        <span className="body-avatar__legend-dot body-avatar__legend-dot--active" />
        <span>Trabalhado hoje</span>
        <span className="body-avatar__legend-dot" />
        <span>Não trabalhado</span>
      </div>
    </div>
  );
}
