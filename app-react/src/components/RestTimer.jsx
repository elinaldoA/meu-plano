import { useEffect, useRef, useState } from 'react';

function beep() {
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    const ctx = new Ctx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = 880;
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.4);
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.4);
  } catch { /* som indisponível */ }
  if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
}

const RADIUS = 90;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function RestTimer({ session, onClose }) {
  const [left, setLeft] = useState(session.seconds);
  const [paused, setPaused] = useState(false);
  const doneRef = useRef(false);

  useEffect(() => {
    setLeft(session.seconds);
    doneRef.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session.key]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setLeft(l => {
        if (l <= 1) {
          clearInterval(id);
          if (!doneRef.current) { doneRef.current = true; beep(); }
          return 0;
        }
        return l - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [paused, session.key]);

  const finished = left <= 0;
  const mm = String(Math.floor(left / 60)).padStart(2, '0');
  const ss = String(left % 60).padStart(2, '0');
  const pct = session.seconds ? (session.seconds - left) / session.seconds : 1;
  const dashoffset = CIRCUMFERENCE * (1 - pct);

  return (
    <div className="rest-modal" role="dialog" aria-modal="true">
      <div className="rest-modal__backdrop" />
      <div className="rest-modal__panel">
        <button type="button" className="rest-modal__close" aria-label="Fechar timer" onClick={onClose}>✕</button>
        <span className="rest-modal__label">Descanso · {session.label}</span>

        <div className="rest-modal__ring">
          <svg viewBox="0 0 200 200" className="rest-modal__svg">
            <circle className="rest-modal__track" cx="100" cy="100" r={RADIUS} />
            <circle
              className={`rest-modal__progress${finished ? ' rest-modal__progress--done' : ''}`}
              cx="100" cy="100" r={RADIUS}
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={dashoffset}
            />
          </svg>
          <div className="rest-modal__clock">
            {finished ? '✓' : `${mm}:${ss}`}
          </div>
        </div>

        <div className="rest-modal__actions">
          {!finished && (
            <>
              <button type="button" className="rest-modal__btn" onClick={() => setLeft(l => l + 15)}>+15s</button>
              <button type="button" className="rest-modal__btn" onClick={() => setPaused(p => !p)}>
                {paused ? '▶ Continuar' : '⏸ Pausar'}
              </button>
            </>
          )}
        </div>

        <button
          type="button"
          className="rest-modal__release"
          disabled={!finished}
          onClick={onClose}
        >
          {finished ? 'Continuar treino' : 'Aguarde o descanso terminar'}
        </button>
      </div>
    </div>
  );
}
