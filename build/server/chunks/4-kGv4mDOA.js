import { s as supabase } from './supabaseClient-QyF04I5I.js';
import { r as redirect } from './index-RcZWwKaW.js';
import { d as private_env } from './shared-server-49TKSBDM.js';
import Cryptr from 'cryptr';
import '@supabase/supabase-js';

const crypt = new Cryptr(private_env.CRYPTER_KEY);
const load = async ({ params, event, locals }) => {
  const loggedInUser = await locals.getSession();
  if (!loggedInUser) {
    throw redirect(308, "/login");
  }
  const printerid = params.printer_id;
  const key_id = params.key_id;
  const { data: printer, error: printer_err } = await supabase.from("printer").select("*").eq("id", printerid);
  const { data: key, error: key_err } = await supabase.from("key").select("*").eq("id", key_id);
  let itemarray = [];
  itemarray.push(printer[0].id);
  itemarray.push(printer[0].name);
  itemarray.push(key[0].id);
  itemarray.push(crypt.decrypt(key[0].key));
  return { itemarray };
};
const actions = {
  updateitem: async (event) => {
    const formData = await event.request.formData();
    const printer_id = formData.get("id");
    const printer_name = formData.get("name");
    const key_id = formData.get("key_id");
    const key = formData.get("key");
    await supabase.from("printer").update({ name: printer_name }).eq("id", printer_id);
    await supabase.from("key").update({ key: crypt.encrypt(key) }).eq("id", key_id);
    return redirect("303", "/");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-9NJwrJdE.js')).default;
const server_id = "src/routes/editpage/[printer_id]/[key_id]/+page.server.ts";
const imports = ["_app/immutable/nodes/4.mtd3ffUI.js","_app/immutable/chunks/scheduler.hcFPtB4K.js","_app/immutable/chunks/index.4z0MrnWu.js","_app/immutable/chunks/forms.-JNtp3Xu.js","_app/immutable/chunks/entry.9FwAuDwT.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=4-kGv4mDOA.js.map
