import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://mybymdcjytslxihbgqnh.supabase.co";

const SUPABASE_ANON_KEY =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15YnltZGNqeXRzbHhpaGJncW5oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAzOTYzMjMsImV4cCI6MjA5NTk3MjMyM30.5VBuL938TWC0cijFPPVdd1pG7_A1dFioQ5Bhv6SnLhs";

/* CREATE SUPABASE CLIENT */
export const supabase = createClient(
SUPABASE_URL,
SUPABASE_ANON_KEY
);

/* GET CURRENT USER */
export async function getUser() {
const { data } = await supabase.auth.getUser();
return data?.user || null;
}

/* GET SESSION */
export async function getSession() {
const { data } = await supabase.auth.getSession();
return data?.session || null;
}

/* AUTO LOGOUT LISTENER */
supabase.auth.onAuthStateChange((event) => {
if (event === "SIGNED_OUT") {
window.location.href = "login.html";
}
});
