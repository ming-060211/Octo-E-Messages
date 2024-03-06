import type {Actions} from "@sveltejs/kit";
import {fail} from "@sveltejs/kit";
import {AuthApiError} from "@supabase/supabase-js";
import { redirect } from "sveltekit-flash-message/server"

export const load = async (event) => {//check if user exist no then go login / register
    const loggedInUser = await event.locals.getSession();
    if (loggedInUser) {
        throw redirect(308, "/");
    }
}

export const actions = {
    login: async ({ event, request , locals: { supabase }, cookies}) => {
        const formData = await request.formData()
        const email = formData.get('email') as string
        const password = formData.get('password') as string

        const { error } = await supabase.auth.signInWithPassword({
            email, password
        })


        if (error) {
            console.log(error.message)
            if (error instanceof AuthApiError && error.status === 400) {
                return fail(400, {
                    error: 'Invalid credentials.',
                    values: {
                        email,
                    },
                })
            }
            return fail(500, {
                error: 'Server error. Try again later.',
                values: {
                    email,
                },
            })
        }

        throw redirect( '/', {type: "success", message: "Welcome"}, cookies)
        // throw redirect(308, '/')
    }

}