
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://ggjgkbqknafockcivyzd.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdnamdrYnFrbmFmb2NrY2l2eXpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgxMDgxMDEsImV4cCI6MjAzMzY4NDEwMX0.xnY_IKE7aSk3pihEIoE-uoAmgaA3a2mijOxcJCMrTrQ')