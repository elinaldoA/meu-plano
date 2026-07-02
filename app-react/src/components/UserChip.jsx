import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { useReminders } from '../hooks/useReminders';
import { isNotificationSupported } from '../lib/notifications';

export default function UserChip() {
  const { user } = useAuth();
  const toast = useToast();
  const [remindersEnabled, toggleReminders] = useReminders(toast, user);
  if (!user) return null;

  return (
    <div className="user-chip">
      <button
        className="btn btn--ghost btn--sm"
        title={remindersEnabled ? 'Desativar lembretes' : 'Ativar lembretes'}
        disabled={!isNotificationSupported()}
        onClick={toggleReminders}
      >{remindersEnabled ? '🔔' : '🔕'}</button>
    </div>
  );
}
