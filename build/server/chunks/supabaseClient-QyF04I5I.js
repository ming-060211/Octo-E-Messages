import { createClient } from '@supabase/supabase-js';
import { d as private_env } from './shared-server-49TKSBDM.js';

const supabase = createClient(private_env.SUPABASE_URL, private_env.SUPABASE_ANON_KEY);

export { supabase as s };
//# sourceMappingURL=supabaseClient-QyF04I5I.js.map
