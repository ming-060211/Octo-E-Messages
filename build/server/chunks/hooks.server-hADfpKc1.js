import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit';
import { P as PUBLIC_SUPABASE_URL, a as PUBLIC_SUPABASE_ANON_KEY } from './public-EbfQx6rT.js';

const handle = async ({ event, resolve }) => {
  const supabase_url_param = PUBLIC_SUPABASE_URL;
  const supabase_anon_key_param = PUBLIC_SUPABASE_ANON_KEY;
  event.locals.supabase = createSupabaseServerClient({
    supabaseUrl: supabase_url_param,
    supabaseKey: supabase_anon_key_param,
    event
  });
  event.locals.getSession = async () => {
    const {
      data: { session: session2 }
    } = await event.locals.supabase.auth.getSession();
    return session2;
  };
  await event.locals.getSession();
  return resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === "content-range";
    }
  });
};

export { handle };
//# sourceMappingURL=hooks.server-hADfpKc1.js.map
