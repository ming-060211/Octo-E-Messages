import {supabase} from '$lib/supabaseClient.js'
import {json} from "@sveltejs/kit";

export const POST = async ({request}) => {
    const { id } = await request.json()

    const{ data, error } = await supabase.from('userdb').delete().eq("id", id)

    if (error){
        return json(error.message)
    }

    return json("User Deleted")

}