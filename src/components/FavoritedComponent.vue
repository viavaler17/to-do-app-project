<template>
  <div class="favorite-or-text">
    <button v-if="isLoggedIn" @click="toggleFavorite"
    class="favorite-button">
    {{ isFavorited ? '' : 'Add to favorites' }}
      <img :src="isFavorited ? 
      'https://cdn-icons-png.flaticon.com/128/833/833472.png' 
      : 
      'https://cdn-icons-png.flaticon.com/128/1077/1077035.png'
      " 
      alt="Add/remove from favorites" class="favorite-icon" />
    </button>

    <p v-else>
      <router-link to="/login" id="login-to-favorite">
        Log in to add this recipe to your favorites
      </router-link>
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
.favorite-or-text{
  height: 30px;
  padding: 10px 0px;

  display: flex;
  align-items: center;
}

#login-to-favorite{
  color: #FF6F61;
  opacity: 0.6;
}

#login-to-favorite:hover{
  opacity: 1;
}

.favorite-button{
  padding: 10px;
  border: none;
  background: none; /* Remove default button styling */
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.favorite-icon{
  height: 20px;
  width: 20px;
  margin: 0 0 0 5px;
}
</style>