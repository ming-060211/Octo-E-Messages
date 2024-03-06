import { json } from '@sveltejs/kit';
import {Resend} from "resend";

const resend = new Resend('re_XKB85KAL_LsZ5CCvWaEfvpC77ARey1ZT4')

export const POST = async ({ request }) => {
    const { getvalue, setemail } = await request.json()
    const { data , error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: [setemail],
        subject: 'Hello Emails',
        html: getvalue
    })

    if (error) {
        console.log(error.message)
        return json ("Something Wrong Try Again Later")
    }

    return json("Success! Email Sended!")
}