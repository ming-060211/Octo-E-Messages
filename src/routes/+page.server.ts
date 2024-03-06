import { Actions } from "@sveltejs/kit";
import { supabase } from "$lib/supabaseClient";
import { redirect } from "sveltekit-flash-message/server";

export const load = async (event) => {
  const loggedInUser = await event.locals.getSession();
    if (!loggedInUser) {
      throw redirect(308, "/login");
    }

  const { data } = await supabase.from('userdb').select().order("id", { ascending: true });
  // console.log(data)
  return {
    user : data ?? []
  }
};
