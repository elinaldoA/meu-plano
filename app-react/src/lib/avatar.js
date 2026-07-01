import { db } from './supabase';

const MAX_SIZE = 300 * 1024; // 300KB — mantém a linha do profiles pequena

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error('Não foi possível ler a imagem.'));
    reader.readAsDataURL(file);
  });
}

export async function saveAvatar(userId, file) {
  if (!file.type.startsWith('image/')) throw new Error('Selecione um arquivo de imagem.');
  if (file.size > MAX_SIZE) throw new Error('Imagem muito grande (máx. 300KB).');

  const dataUrl = await fileToDataUrl(file);
  const { error } = await db
    .from('profiles')
    .upsert({ id: userId, avatar_data: dataUrl }, { onConflict: 'id' });
  if (error) throw error;
  return dataUrl;
}

export async function fetchAvatar(userId) {
  const { data, error } = await db
    .from('profiles')
    .select('avatar_data')
    .eq('id', userId)
    .maybeSingle();
  if (error) throw error;
  return data?.avatar_data || null;
}
