import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

/*
=================================================
SUMMITFX SUPABASE CONNECTION
=================================================
REPLACE THESE WITH YOUR REAL VALUES:
- Project URL
- Public anon key (NOT secret key)
=================================================
*/

const SUPABASE_URL = "https://YOUR_PROJECT.supabase.co";
const SUPABASE_ANON_KEY = "YOUR_PUBLIC_ANON_KEY";

/* CREATE SUPABASE CLIENT */
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/* OPTIONAL: GLOBAL SESSION CHECK HELPER */
export async function getUser() {
const { data } = await supabase.auth.getUser();
return data?.user || null;
}

/* OPTIONAL: GET CURRENT SESSION */
export async function getSession() {
const { data } = await supabase.auth.getSession();
return data?.session || null;
}

/* AUTO SESSION DEBUG (REMOVE LATER IF YOU WANT) */
supabase.auth.onAuthStateChange((event, session) => {
console.log("Auth Event:", event);

if (event === "SIGNED_OUT") {
window.location.href = "login.html";
}
});
