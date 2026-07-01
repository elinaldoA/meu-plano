import { useRegisterSW } from 'virtual:pwa-register/react';

const CHECK_INTERVAL_MS = 60_000;

export default function UpdatePrompt() {
  const { needRefresh: [needRefresh], updateServiceWorker } = useRegisterSW({
    onRegisteredSW(_url, registration) {
      if (!registration) return;
      setInterval(() => registration.update(), CHECK_INTERVAL_MS);
    },
  });

  if (!needRefresh) return null;

  return (
    <div className="update-banner">
      <span>Nova versão disponível</span>
      <button className="btn btn--primary btn--sm" onClick={() => updateServiceWorker(true)}>
        Atualizar
      </button>
    </div>
  );
}
