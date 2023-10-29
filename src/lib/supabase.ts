import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from "$env/static/public";
import { createClient } from "@supabase/supabase-js";

const supabaseApiKey = PUBLIC_SUPABASE_ANON_KEY;
const supabaseProjectUrl = PUBLIC_SUPABASE_URL;
export const supabase = createClient(supabaseProjectUrl, supabaseApiKey);
