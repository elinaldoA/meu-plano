import { createContext, useContext, useEffect, useState } from 'react';
import { fetchAvatar } from '../lib/avatar';
import { useAuth } from './AuthContext';

const AvatarContext = createContext(null);

export function AvatarProvider({ children }) {
  const { user } = useAuth();
  const [avatarData, setAvatarData] = useState(null);

  useEffect(() => {
    if (!user) { setAvatarData(null); return; }
    let cancelled = false;
    fetchAvatar(user.id)
      .then(data => { if (!cancelled) setAvatarData(data); })
      .catch(err => console.error('fetchAvatar:', err));
    return () => { cancelled = true; };
  }, [user]);

  return (
    <AvatarContext.Provider value={{ avatarData, setAvatarData }}>
      {children}
    </AvatarContext.Provider>
  );
}

export function useAvatar() {
  return useContext(AvatarContext);
}
