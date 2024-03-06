import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit';
import { P as PUBLIC_SUPABASE_URL, a as PUBLIC_SUPABASE_ANON_KEY } from './public-EbfQx6rT.js';
import { l as loadFlash } from './server-NAEQ73wZ.js';
import './index-RcZWwKaW.js';

const load$1 = async ({ fetch, data, depends }) => {
  depends("supabase:auth");
  const supabase = createSupabaseLoadClient({
    supabaseUrl: PUBLIC_SUPABASE_URL,
    supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
    event: { fetch },
    serverSession: data.session
  });
  const {
    data: { session }
  } = await supabase.auth.getSession();
  return { supabase, session };
};

var _layout_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load$1
});

const load = loadFlash(async ({ event, locals: { getSession } }) => {
  return { session: await getSession() };
});

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-ATWAb52T.js')).default;
const universal_id = "src/routes/+layout.ts";
const server_id = "src/routes/+layout.server.ts";
const imports = ["_app/immutable/nodes/0.v1hA3o5K.js","_app/immutable/chunks/preload-helper.0HuHagjb.js","_app/immutable/chunks/scheduler.hcFPtB4K.js","_app/immutable/chunks/index.4z0MrnWu.js","_app/immutable/chunks/entry.9FwAuDwT.js","_app/immutable/chunks/index.rE9O-scq.js","_app/immutable/chunks/forms.-JNtp3Xu.js","_app/immutable/chunks/client.lRq0DHo6.js","_app/immutable/chunks/stores.64f70fqn.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.2sPn8NWx.js"];
const stylesheets = ["_app/immutable/assets/0.EFjoyjxI.css","_app/immutable/assets/ProgressBar.oq5aOWfL.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets, _layout_ts as universal, universal_id };
//# sourceMappingURL=0-5uTBZcaW.js.map
