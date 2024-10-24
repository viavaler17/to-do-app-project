import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://tvwynzrvsctecqbuagyn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2d3luenJ2c2N0ZWNxYnVhZ3luIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk2MTgxMDgsImV4cCI6MjA0NTE5NDEwOH0.e27HDoHSTAZiorXXbDV5Wj45edsHvgC0ldi_TcdVc9o';

export const supabase = createClient(supabaseUrl, supabaseKey);