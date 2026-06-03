import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const SUPABASE_URL = "https://mybymdcjytslxihbgqnh.supabase.co";

const SUPABASE_ANON_KEY =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15YnltZGNqeXRzbHhpaGJncW5oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAzOTYzMjMsImV4cCI6MjA5NTk3MjMyM30.5VBuL938TWC0cijFPPVdd1pG7_A1dFioQ5Bhv6SnLhs";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
