 
import { createClient } from "@supabase/supabase-js";


export const supabaseUrl = "https://bgqrlwnkjlzzvwoafhbx.supabase.co";
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJncXJsd25ramx6enZ3b2FmaGJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxNDcxMDIsImV4cCI6MjA2MDcyMzEwMn0.EDjflguVFF7HIXWQx3cAkuWgzwNSRLMMlUUWUETBHb4';
const supabase = createClient(supabaseUrl, supabaseKey); 

export default supabase;