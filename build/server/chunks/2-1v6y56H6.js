import { s as supabase } from './supabaseClient-QyF04I5I.js';
import { r as redirect } from './server-NAEQ73wZ.js';
import '@supabase/supabase-js';
import './shared-server-49TKSBDM.js';
import './index-RcZWwKaW.js';

const load = async (event) => {
  const loggedInUser = await event.locals.getSession();
  if (!loggedInUser) {
    throw redirect(308, "/login");
  }
  const { data, error } = await supabase.from("printer").select("*").order("id", { ascending: true });
  if (error) {
    throw error.message;
  }
  return { data };
};
const actions = {
  deletedata: async ({ cookies, request }) => {
    const formData = await request.formData();
    const printer_id = formData.get("gettheid");
    const key_id = formData.get("getthekeyid");
    await supabase.from("printer").delete().eq("id", printer_id);
    await supabase.from("key").delete().eq("id", key_id);
    let message = { type: "success", message: "Data Deleted" };
    throw redirect("/", message, cookies);
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-ZKgwgCu5.js')).default;
const server_id = "src/routes/+page.server.ts";
const imports = ["_app/immutable/nodes/2.hHXX7Vmk.js","_app/immutable/chunks/scheduler.hcFPtB4K.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.2sPn8NWx.js","_app/immutable/chunks/index.4z0MrnWu.js","_app/immutable/chunks/entry.9FwAuDwT.js","_app/immutable/chunks/client.lRq0DHo6.js","_app/immutable/chunks/stores.64f70fqn.js"];
const stylesheets = ["_app/immutable/assets/ProgressBar.oq5aOWfL.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-1v6y56H6.js.map
