import {json} from "@sveltejs/kit";
import {Resend} from "resend";
import {supabase} from '$lib/supabaseClient.ts'
import {env} from '$env/dynamic/private'


export const POST = async (event) => {
    const formData = await event.request.formData()
    let message = formData.get('message')

    const resend = new Resend(env.RESEND_KEY)

    const { data: suparesult } = await supabase.from('userdb').select('email').eq('enable_email', true);
    for (let i = 0; i < suparesult.length; i++) {
        let tem = suparesult[i]
        const { data , error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: ['ming.xuan.leong@wazp.io'],
            subject: 'Hello Emails',
            html: message
        })
    }

    return json("Message Send")
}