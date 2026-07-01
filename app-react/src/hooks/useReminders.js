import { useCallback, useState } from 'react';
import { requestNotificationPermission } from '../lib/notifications';

export function useReminders(toast) {
  const [enabled, setEnabled] = useState(localStorage.getItem('reminders_enabled') === 'true');

  const toggle = useCallback(async () => {
    if (enabled) {
      localStorage.setItem('reminders_enabled', 'false');
      setEnabled(false);
      toast('🔕 Lembretes desativados');
      return;
    }
    const perm = await requestNotificationPermission();
    if (perm !== 'granted') {
      toast(perm === 'unsupported' ? '⚠️ Notificações não suportadas neste navegador' : '⚠️ Permissão de notificação negada');
      return;
    }
    localStorage.setItem('reminders_enabled', 'true');
    setEnabled(true);
    toast('🔔 Lembretes ativados');
  }, [enabled, toast]);

  return [enabled, toggle];
}
