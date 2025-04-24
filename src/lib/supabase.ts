import { createClient } from "@supabase/supabase-js";

// Supabase 프로젝트 URL과 anon key를 여기에 입력하세요
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
