import { supabase } from './supabase';

export const signup = async (email, password) => {
  const { user, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) throw error;
  return { user };
};


// MY CODE
export const login = async (email, password) => {
  console.log('Attempting to log in with:', { email, password });
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });
    console.log('Login response:', { data, error });
    if (error) throw error;
    
    return data.user;
};


export const logout = async () => {
  console.log('Attempting to log out with');
  const { error } = await supabase.auth.signOut();
  console.log('Logout response:');
  if (error) throw error;
};

