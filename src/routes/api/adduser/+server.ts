import {supabase} from '../../../lib/supabaseClient.js'
import {json} from "@sveltejs/kit";

export const POST = async ({request}) => {
    const { first_name, last_name, email, phone_number, enable_email, enable_phone } = await request.json()

    if (!first_name || !last_name || !email || !phone_number || !enable_email || !enable_phone){
        return json('Form Incomplete')
    }

    const{ data, error } = await supabase.from('userdb').upsert({ first_name: first_name, last_name: last_name, email: email, phone_no: phone_number, enable_email: enable_email, enable_phone: enable_phone})

    if (error){
        return json(error.message)
    }

    return json("User Added")

}