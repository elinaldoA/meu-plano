import { useCallback, useState } from 'react';
import { requestNotificationPermission } from '../lib/notifications';
import { subscribeToPush, unsubscribeFromPush } from '../lib/pushSubscriptions';

export function useReminders(toast, user) {
  const [enabled, setEnabled] = useState(localStorage.getItem('reminders_enabled') === 'true');

  const toggle = useCallback(async () => {
    if (enabled) {
      localStorage.setItem('reminders_enabled', 'false');
      setEnabled(false);
      toast('🔕 Lembretes desativados');
      unsubscribeFromPush().catch(err => console.error('unsubscribeFromPush:', err));
      return;
    }

    const perm = await requestNotificationPermission();
    if (perm !== 'granted') {
      toast(perm === 'unsupported' ? '⚠️ Notificações não suportadas neste navegador' : '⚠️ Permissão de notificação negada');
      return;
    }

    localStorage.setItem('reminders_enabled', 'true');
    setEnabled(true);

    if (user) {
      try {
        await subscribeToPush(user.id);
        toast('🔔 Lembretes ativados (funcionam mesmo com o app fechado)');
      } catch (err) {
        console.error('subscribeToPush:', err);
        toast('🔔 Lembretes ativados (só com o app aberto — push indisponível)');
      }
    } else {
      toast('🔔 Lembretes ativados');
    }
  }, [enabled, toast, user]);

  return [enabled, toggle];
}
