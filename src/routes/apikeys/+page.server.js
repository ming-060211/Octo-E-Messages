import Cryptr from "cryptr";
import {env} from "$env/dynamic/private"
import {redirect} from "sveltekit-flash-message/server";
import {supabase} from "$lib/supabaseClient";

let crypr = new Cryptr(env.CRYPTER_KEY)

export const load = async (event) => {
    const loggedInUser = await event.locals.getSession();
    if (!loggedInUser) {
        throw redirect(308, "/login");
    }

    let tem = []
    const { data } = await supabase.from('apikeys').select().order("id", {ascending: true})
    for (let i = 0; i < data.length; i++) {
        // console.log(data[i].keys)
        tem.push({id: data[i].id , key: crypr.decrypt(data[i].keys)})
    }

    // console.log("this is undefine: ",tem[0].key)

    return { tem }
}