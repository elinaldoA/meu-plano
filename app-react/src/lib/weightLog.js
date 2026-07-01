import { db } from './supabase';

export async function fetchWeightLogs(userId) {
  const { data, error } = await db
    .from('weight_logs')
    .select('log_date, weight')
    .eq('user_id', userId)
    .order('log_date', { ascending: true });
  if (error) throw error;
  return (data || []).map(row => ({ log_date: row.log_date, peso: row.weight }));
}

export async function upsertWeightLog(userId, logDate, peso) {
  const { data: existing, error: findErr } = await db
    .from('weight_logs')
    .select('id')
    .eq('user_id', userId)
    .eq('log_date', logDate)
    .maybeSingle();
  if (findErr) throw findErr;

  if (existing) {
    const { error } = await db.from('weight_logs').update({ weight: peso }).eq('id', existing.id);
    if (error) throw error;
  } else {
    const { error } = await db.from('weight_logs').insert({ user_id: userId, log_date: logDate, weight: peso });
    if (error) throw error;
  }
}
