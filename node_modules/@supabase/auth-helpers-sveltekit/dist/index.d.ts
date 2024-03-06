import { SupabaseClientOptionsWithoutAuth, CookieOptionsWithName } from '@supabase/auth-helpers-shared';
import { Session, SupabaseClient } from '@supabase/supabase-js';
import { LoadEvent, RequestEvent } from '@sveltejs/kit';
import { GenericSchema } from '@supabase/supabase-js/dist/module/lib/types';

/**
 * ## Authenticated Supabase client
 *
 * Returns a new authenticated Supabase client.
 *
 * When running in the browser it will create a single instance
 * that is returned for subsequent runs.
 *
 * ### Example:
 *
 * ```ts
 * import { invalidate } from '$app/navigation';
 * import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
 * import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit';
 * import type { LayoutLoad } from './$types';
 *
 * export const load: LayoutLoad = async ({ fetch, data, depends }) => {
 *   depends('supabase:auth');
 *
 *   const supabase = createSupabaseLoadClient({
 *     supabaseUrl: PUBLIC_SUPABASE_URL,
 *     supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
 *     event: { fetch },
 *     serverSession: data.session,
 *     onAuthStateChange() {
 *       invalidate('supabase:auth');
 *     }
 *   });
 *
 *   const {
 *     data: { session }
 * 	} = await supabase.auth.getSession();
 *
 *   return { supabase, session };
 * };
 *
 * ```
 */
declare function createSupabaseLoadClient<Database = any, SchemaName extends string & keyof Database = 'public' extends keyof Database ? 'public' : string & keyof Database, Schema extends GenericSchema = Database[SchemaName] extends GenericSchema ? Database[SchemaName] : any>({ supabaseUrl, supabaseKey, event, serverSession, options, cookieOptions }: {
    supabaseUrl: string;
    /**
     * The supabase key. Make sure you **always** use the ANON_KEY.
     */
    supabaseKey: string;
    event: Pick<LoadEvent, 'fetch'>;
    /**
     * The initial session from the server.
     */
    serverSession: Session | null;
    options?: SupabaseClientOptionsWithoutAuth<SchemaName>;
    cookieOptions?: CookieOptionsWithName;
}): SupabaseClient<Database, SchemaName, Schema>;

/**
 * ## Authenticated Supabase client
 * ### Handle
 *
 * ```ts
 * import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
 * import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit';
 * import type { Handle } from '@sveltejs/kit';
 *
 * export const handle: Handle = async ({ event, resolve }) => {
 *   event.locals.supabase = createSupabaseServerClient({
 *     supabaseUrl: PUBLIC_SUPABASE_URL,
 *     supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
 *     event
 *   });
 *
 *   event.locals.getSession = async () => {
 *     const {
 *       data: { session }
 *     } = await event.locals.supabase.auth.getSession();
 *     return session;
 *   };
 *
 *   return resolve(event, {
 *     filterSerializedResponseHeaders(name) {
 *       return name === 'content-range';
 *     }
 *   });
 * };
 * ```
 *
 * ### Types
 *
 * ```ts
 * import { SupabaseClient, Session } from '@supabase/supabase-js';
 *
 * declare global {
 *   namespace App {
 *     interface Locals {
 *       supabase: SupabaseClient;
 *       getSession(): Promise<Session | null>;
 *     }
 *     // interface PageData {}
 *     // interface Error {}
 *     // interface Platform {}
 *   }
 * }
 *
 * export {};
 * ```
 */
declare function createSupabaseServerClient<Database = any, SchemaName extends string & keyof Database = 'public' extends keyof Database ? 'public' : string & keyof Database, Schema extends GenericSchema = Database[SchemaName] extends GenericSchema ? Database[SchemaName] : any>({ supabaseUrl, supabaseKey, event, options, cookieOptions, expiryMargin }: {
    supabaseUrl: string;
    supabaseKey: string;
    event: Pick<RequestEvent, 'cookies'>;
    options?: SupabaseClientOptionsWithoutAuth<SchemaName>;
    cookieOptions?: CookieOptionsWithName;
    expiryMargin?: number;
}): SupabaseClient<Database, SchemaName, Schema>;

export { createSupabaseLoadClient, createSupabaseServerClient };
