#!/bin/bash

set -o allexport
source .env
set +o allexport

#export SUPABASE_URL_PARAM=https://jmaykehaakcviokzxazu.supabase.co/
#export SUPABASE_ANON_KEY_PARAM=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptYXlrZWhhYWtjdmlva3p4YXp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2MTkwNDQsImV4cCI6MjAyNDE5NTA0NH0.VQHWApY-ky5pcC8whDBmUWWLDIR-8eL7xNI_m1CwSgc
#export CRYPTER_KEY_PARAM=05c958f89b0f942faf1491a733de0e92b00c8c5454a8ea891dc1fbb744db720d
#export PUBLIC_SUPABASE_URL_PARAM=https://jmaykehaakcviokzxazu.supabase.co
#export PUBLIC_SUPABASE_ANON_KEY_PARAM=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptYXlrZWhhYWtjdmlva3p4YXp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2MTkwNDQsImV4cCI6MjAyNDE5NTA0NH0.VQHWApY-ky5pcC8whDBmUWWLDIR-8eL7xNI_m1CwSgc

export SUPABASE_URL_PARAM=$SUPABASE_URL=$SUPABASE_URL
export SUPABASE_ANON_KEY_PARAM=$SUPABASE_ANON_KEY
export CRYPTER_KEY_PARAM=$CRYPTER_KEY
export PUBLIC_SUPABASE_URL_PARAM=$SUPABASE_URL
export PUBLIC_SUPABASE_ANON_KEY_PARAM=$SUPABASE_ANON_KEY
export RESEND_KEY_PARAM=$RESEND_KEY