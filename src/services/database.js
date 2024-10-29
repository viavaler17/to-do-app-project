import { supabase } from './supabase';

export const signup = async (email, password) => {
  const { user, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) throw error;
  return { user };
};



export const login = async (email, password) => {
  console.log('Attempting to log in with:', { email, password });
    const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });
    if (error) throw error;
    
    return user;
};

export const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};
