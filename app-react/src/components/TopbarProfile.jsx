import { useAuth } from '../context/AuthContext';
import { useAvatar } from '../context/AvatarContext';
import { useWorkout } from '../context/WorkoutContext';
import { getDisplayName } from '../lib/utils';

const SYNC_TITLE = { ok: 'Sincronizado', loading: 'Sincronizando…', error: 'Erro de sync' };

export default function TopbarProfile() {
  const { user } = useAuth();
  const { avatarData } = useAvatar();
  const { syncStatus } = useWorkout();
  const name = getDisplayName(user);

  return (
    <div className="topbar__profile">
      <span className="topbar__avatar">
        {avatarData
          ? <img src={avatarData} alt="" className="topbar__avatar-img" />
          : (name?.[0]?.toUpperCase() || '?')}
      </span>
      <span className="topbar__name">{name}</span>
      <span className={`sync-dot sync-dot--${syncStatus}`} title={SYNC_TITLE[syncStatus] || ''} />
    </div>
  );
}
