import {supabase} from '../../../lib/supabaseClient'
import {json} from "@sveltejs/kit";
import Cryptr from "cryptr";
import {env} from "$env/dynamic/private"

const crypt = new Cryptr(env.CRYPTER_KEY)


export const POST = async ({request}) => {
    const { apikey } = await request.json()

    if (!apikey){
        return json('Form Incomplete')
    }

    let tem = crypt.encrypt(apikey)

    const{ data, error } = await supabase.from('apikeys').upsert({ keys: tem})

    if (error){
        return json(error.message)
    }

    return json("Api Key Added")

}