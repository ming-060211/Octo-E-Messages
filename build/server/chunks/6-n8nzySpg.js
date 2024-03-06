import { f as fail } from './index-RcZWwKaW.js';
import { r as redirect, s as setFlash } from './server-NAEQ73wZ.js';

const load = async (event) => {
  const loggedInUser = await event.locals.getSession();
  if (loggedInUser) {
    throw redirect(308, "/");
  }
};
const actions = {
  register: async ({ request, url, locals: { supabase }, cookies }) => {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    formData.get("confirm_password");
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${url.origin}/auth/callback`
      }
    });
    if (error) {
      console.log(error.message);
      return fail(500, { message: "Server error. Try again later.", success: false, email });
    }
    setFlash({ type: "success", message: "Please check your email for a magic link" }, cookies);
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-5mKRKLRc.js')).default;
const server_id = "src/routes/register/+page.server.ts";
const imports = ["_app/immutable/nodes/6.QFXVKKGO.js","_app/immutable/chunks/scheduler.hcFPtB4K.js","_app/immutable/chunks/index.4z0MrnWu.js","_app/immutable/chunks/client.lRq0DHo6.js","_app/immutable/chunks/stores.64f70fqn.js","_app/immutable/chunks/entry.9FwAuDwT.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=6-n8nzySpg.js.map
