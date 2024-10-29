
import { supabase } from "./supabase";

export const signUp = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      console.error('Error message:', error.message);
      console.error('Error details:', error.details);
      console.error('Error status:', error.status);
    } else {
      console.log('User signed up:', data.user);
    }
  } catch (error) {
    console.error('Unexpected error:', error);
  }
};

export const logIn = async (email, password) => {
  const { user, session, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    console.error('Error logging in:', error);
  } else {
    console.log('User logged in:', user);
  }
};

export const logOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error('Error logging out:', error);
  } else {
    console.log('User logged out');
  }
};



