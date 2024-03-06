import { f as fail } from './index-RcZWwKaW.js';
import { AuthApiError } from '@supabase/supabase-js';
import { r as redirect } from './server-NAEQ73wZ.js';

const load = async (event) => {
  const loggedInUser = await event.locals.getSession();
  if (loggedInUser) {
    throw redirect(308, "/");
  }
};
const actions = {
  login: async ({ event, request, locals: { supabase }, cookies }) => {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    if (error) {
      console.log(error.message);
      if (error instanceof AuthApiError && error.status === 400) {
        return fail(400, {
          error: "Invalid credentials.",
          values: {
            email
          }
        });
      }
      return fail(500, {
        error: "Server error. Try again later.",
        values: {
          email
        }
      });
    }
    throw redirect("/", { type: "success", message: "Welcome" }, cookies);
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-iGwiRtcR.js')).default;
const server_id = "src/routes/login/+page.server.ts";
const imports = ["_app/immutable/nodes/5.xj0Zvv2w.js","_app/immutable/chunks/scheduler.hcFPtB4K.js","_app/immutable/chunks/index.4z0MrnWu.js","_app/immutable/chunks/forms.-JNtp3Xu.js","_app/immutable/chunks/entry.9FwAuDwT.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=5-6541Nfwl.js.map
