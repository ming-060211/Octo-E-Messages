import {loadFlash, redirect} from "sveltekit-flash-message/server";
import type {Handle} from "@sveltejs/kit";

export const load = loadFlash(async ({event, locals: {getSession}}) => {
    return { session: await getSession() }

})



