import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase URL dan/atau anon key tidak ditemukan. Pastikan VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY sudah diatur di .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);