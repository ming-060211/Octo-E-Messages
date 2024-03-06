import { s as supabase } from './supabaseClient-QyF04I5I.js';
import { r as redirect, s as setFlash } from './server-NAEQ73wZ.js';
import { d as private_env } from './shared-server-49TKSBDM.js';
import Cryptr from 'cryptr';
import '@supabase/supabase-js';
import './index-RcZWwKaW.js';

const crypt = new Cryptr(private_env.CRYPTER_KEY);
const load = async (event) => {
  const loggedInUser = await event.locals.getSession();
  if (!loggedInUser) {
    throw redirect(308, "/login");
  }
};
const actions = {
  addprinter: async ({ request, cookies }) => {
    const formData = await request.formData();
    const printer_name = formData.get("name");
    const printer_key = formData.get("apikey");
    const key = crypt.encrypt(printer_key);
    try {
      const { data, error } = await supabase.from("printer").upsert([{ name: printer_name }]).select();
      const printer_id = data[0].id;
      const { data: keydata, error: key_error } = await supabase.from("key").upsert({ key, printer_id }).select();
      const key_id = keydata[0].id;
      const { data2 } = await supabase.from("printer").update({ key_id }).eq("id", printer_id);
      setFlash({ type: "success", message: "Printer and Key Added to Database" }, cookies);
    } catch (err) {
    }
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-QxaJUYRd.js')).default;
const server_id = "src/routes/createprinter/+page.server.ts";
const imports = ["_app/immutable/nodes/3.r5AnI4Ij.js","_app/immutable/chunks/scheduler.hcFPtB4K.js","_app/immutable/chunks/index.4z0MrnWu.js","_app/immutable/chunks/client.lRq0DHo6.js","_app/immutable/chunks/stores.64f70fqn.js","_app/immutable/chunks/entry.9FwAuDwT.js","_app/immutable/chunks/index.rE9O-scq.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=3-xI6naXES.js.map
