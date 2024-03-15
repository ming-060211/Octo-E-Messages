import {supabase} from '$lib/supabaseClient'
import {json} from "@sveltejs/kit";

export const POST = async ({request}) => {
    const { id, key } = await request.json()

    const{ data, error } = await supabase.from('apikeys').delete().eq("id", id)

    if (error){
        return json(error.message)
    }

    return json("Key Deleted")

}