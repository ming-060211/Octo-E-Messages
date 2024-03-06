
import { createSupabaseServerClient } from "@supabase/auth-helpers-sveltekit";
import type { Handle } from "@sveltejs/kit";
import { redirect } from "@sveltejs/kit";
// import {supabase_anon_key, supabase_url} from "$lib/env";
import {PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY} from "$env/static/public"

export const handle: Handle = async ({ event, resolve }) => {
  const supabase_url_param = PUBLIC_SUPABASE_URL
  const supabase_anon_key_param = PUBLIC_SUPABASE_ANON_KEY

  event.locals.supabase = createSupabaseServerClient({
    supabaseUrl: supabase_url_param,
    supabaseKey: supabase_anon_key_param,
    event,
  });

  /**
   * a little helper that is written for convenience so that instead
   * of calling `const { data: { session } } = await supabase.auth.getSession()`
   * you just call this `await getSession()`
   */
  event.locals.getSession = async () => {
    const {
      data: { session },
    } = await event.locals.supabase.auth.getSession();
    return session;
  };

  const session = await event.locals.getSession(); //check is there session
  // console.log(session);
  return resolve(event, {
      filterSerializedResponseHeaders(name) {
          return name === 'content-range'
      },
  })

};
