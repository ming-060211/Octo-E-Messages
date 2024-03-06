import {supabase} from '../../../lib/supabaseClient.js'
import {json} from "@sveltejs/kit";

export const POST = async ({request}) => {
    const { id, first_name, last_name, email, phone_number, enable_email, enable_phone } = await request.json()

    if (!first_name || !last_name || !email || !phone_number || !enable_email || !enable_phone){
        return json('Something Wrong! Try Again Later')
    }

    const { error } = await supabase.from('userdb').update({first_name: first_name, last_name: last_name, email: email, phone_no: phone_number, enable_email: enable_email, enable_phone: enable_phone}).eq('id', id)

    if(error){
        return json(error.message)
    }

    return json("Updated!")
}