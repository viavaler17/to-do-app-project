<template>
  <div>
    <button v-if="isLoggedIn" @click="toggleFavorite">
      {{ isFavorited ? 'Remove from favorites' : 'Favorite' }}
    </button>
    <p v-else>
      Log in / Sign up to add this recipe to your favorites
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { supabase } from '@/services/supabase';

const props = defineProps({
  recipeId: String
});

const isFavorited = ref(false);
const userId = ref(null);
const isLoggedIn = ref(false);

// Listen for authentication state changes
supabase.auth.onAuthStateChange((_event, session) => {
  if (session) {
    userId.value = session.user.id;
    isLoggedIn.value = true;
    checkIfFavorited();  // Check favorite once userId is confirmed
    console.log("User ID for favoriting:", userId.value);
  } else {
    userId.value = null;
    isLoggedIn.value = false;
    console.warn("No user logged in for favoriting");
  }
});

async function checkIfFavorited() {
  if (userId.value) {
    try {
      const { data, error } = await supabase
        .from('favorited')
        .select('recipe_id')
        .eq('profile_id', userId.value)
        .eq('recipe_id', props.recipeId);

      if (error) throw error;

      isFavorited.value = (data && data.length > 0);
      console.log("Check if favorited:", isFavorited.value);
    } catch (error) {
      console.error('Error checking favorites:', error);
    }
  }
}

async function toggleFavorite() {
  if (!userId.value) {
    console.warn("User not logged in, can't toggle favorites.");
    return;
  }

  try {
    if (isFavorited.value) {
      // Remove from favorites
      const { error } = await supabase
        .from('favorited')
        .delete()
        .match({ profile_id: userId.value, recipe_id: props.recipeId });

      if (error) throw error;

      isFavorited.value = false;
      console.log("Unfavorited", props.recipeId);
    } else {
      // Add to favorites
      const { error } = await supabase
        .from('favorited')
        .insert([{ profile_id: userId.value, recipe_id: props.recipeId }]);

      if (error) throw error;

      isFavorited.value = true;
      console.log("Favorited", props.recipeId);
    }
  } catch (error) {
    console.error('Error toggling favorite:', error);
  }
}
</script>

<style scoped>
*{
    width: 200px;
}
</style>