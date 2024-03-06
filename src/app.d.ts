// src/app.d.ts

import { SupabaseClient, Session } from '@supabase/supabase-js'
import { Database } from '../database.types'

declare global {
	namespace App {
		interface Locals {
			supabase: SupabaseClient<Database>
			getSession(): Promise<Session | null>
		}
		interface PageData {
			session: Session | null
			flash?: {type: 'success' | 'error'; message: string}
		}
		// interface Error {}
		// interface Platform {}
	}
}