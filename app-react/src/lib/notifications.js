export function isNotificationSupported() {
  return typeof window !== 'undefined' && 'Notification' in window;
}

export async function requestNotificationPermission() {
  if (!isNotificationSupported()) return 'unsupported';
  if (Notification.permission === 'granted') return 'granted';
  if (Notification.permission === 'denied') return 'denied';
  return Notification.requestPermission();
}

export function sendNotification(title, options) {
  if (!isNotificationSupported() || Notification.permission !== 'granted') return;
  try {
    new Notification(title, options);
  } catch (err) {
    console.error('sendNotification:', err);
  }
}
