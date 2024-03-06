
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit'
import type { Database } from '../../database.types'
// import { env } from "$env/dynamic/private"
import { PUBLIC_SUPABASE_URL , PUBLIC_SUPABASE_ANON_KEY} from "$env/static/public";

export const load = async ({ fetch, data, depends }) => {
    depends('supabase:auth')

    const supabase = createSupabaseLoadClient<Database>({
        supabaseUrl: PUBLIC_SUPABASE_URL,
        supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
        event: { fetch },
        serverSession: data.session,
    })

    const {
        data: { session },
    } = await supabase.auth.getSession()

    return { supabase, session }
}