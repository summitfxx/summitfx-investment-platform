import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

/* =========================
   SUPABASE CONFIG
========================= */

const SUPABASE_URL = "https://mybymdcjytslxihbgqnh.supabase.co";

const SUPABASE_ANON_KEY =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15YnltZGNqeXRzbHhpaGJncW5oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAzOTYzMjMsImV4cCI6MjA5NTk3MjMyM30.5VBuL938TWC0cijFPPVdd1pG7_A1dFioQ5Bhv6SnLhs";

/* =========================
   CREATE CLIENT
========================= */

export const supabase = createClient(
SUPABASE_URL,
SUPABASE_ANON_KEY
);

/* =========================
   HELPERS
========================= */

export async function getUser() {
const { data, error } = await supabase.auth.getUser();
if (error) return null;
return data?.user || null;
}

export async function getSession() {
const { data, error } = await supabase.auth.getSession();
if (error) return null;
return data?.session || null;
}

/* =========================
   AUTH STATE LISTENER
========================= */

supabase.auth.onAuthStateChange((event, session) => {
if (event === "SIGNED_OUT") {
window.location.href = "login.html";
}
});
