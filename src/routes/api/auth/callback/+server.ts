import { redirect } from "sveltekit-flash-message/server"

export const GET = async ({ url, locals: { supabase }, cookies }) => {
    const code = url.searchParams.get('code')

    if (code) {
        await supabase.auth.exchangeCodeForSession(code)//the code to set session
    }

    throw redirect('/', {type: "success", message: 'Welcome'}, cookies)
}