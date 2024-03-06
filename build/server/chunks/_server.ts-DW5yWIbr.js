import { r as redirect } from './server-NAEQ73wZ.js';
import './index-RcZWwKaW.js';

const GET = async ({ url, locals: { supabase }, cookies }) => {
  const code = url.searchParams.get("code");
  if (code) {
    await supabase.auth.exchangeCodeForSession(code);
  }
  throw redirect("/", { type: "success", message: "Welcome" }, cookies);
};

export { GET };
//# sourceMappingURL=_server.ts-DW5yWIbr.js.map
