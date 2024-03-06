#!/bin/bash

source ./setup_build_env.sh

gcloud builds submit --substitutions=_SUPABASE_URL_PARAM=$SUPABASE_URL_PARAM,_SUPABASE_ANON_KEY_PARAM=$SUPABASE_ANON_KEY_PARAM,_CRYPTER_KEY_PARAM=$CRYPTER_KEY_PARAM,_PUBLIC_SUPABASE_URL_PARAM=$PUBLIC_SUPABASE_URL_PARAM,_PUBLIC_SUPABASE_ANON_KEY_PARAM=$PUBLIC_SUPABASE_ANON_KEY_PARAM

gcloud run deploy usermanagementapp --image gcr.io/hive-347910/usermanagementapp:latest --region=europe-west1 --allow-unauthenticated
