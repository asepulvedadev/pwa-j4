export const environment = {
  supabaseUrl: (import.meta as any).env?.NEXT_PUBLIC_SUPABASE_URL || 'https://etrmtioodgbmefszjcay.supabase.co',
  supabaseAnonKey: (import.meta as any).env?.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0cm10aW9vZGdibWVmc3pqY2F5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzOTk4NTUsImV4cCI6MjA4Mzk3NTg1NX0.Tnvn-mtbMF3XT8Y0qiRwO8HLFwk_U8OCocbT_RCITDo',
  production: false,
};
