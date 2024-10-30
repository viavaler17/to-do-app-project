<template>
    <button v-if="isLoggedIn" @click="toggleFavorite">
      {{ isFavorited ? 'Unfavorite' : 'Favorite' }}
    </button>
</template>
  
<script setup>
  import { ref, onMounted } from 'vue';
  import { supabase } from '@/services/supabase';
  
  const props = defineProps({
    recipeId: String
  });
  
  const isFavorited = ref(false);
  const userId = ref(null);
  const isLoggedIn = ref(false);
  
  onMounted(async () => {
    try {
      const { data: user } = await supabase.auth.getUser();
      if (user) {
        userId.value = user.id;
        isLoggedIn.value = true;
        checkIfFavorited();
      }
    } catch (error) {
      console.error('Error fetching user session:', error);
    }
  });
  
  async function checkIfFavorited() {
    if (userId.value) {
      const { data } = await supabase
        .from('favorited')
        .select('recipe_id')
        .eq('profile_id', userId.value)
        .eq('recipe_id', props.recipeId);
  
      if (data && data.length > 0) {
        isFavorited.value = true;
      }
    }
  }
  
  async function toggleFavorite() {
    if (isFavorited.value) {
//remove
        await supabase
        .from('favorited')
        .delete()
        .match({ profile_id: userId.value, recipe_id: props.recipeId });
      isFavorited.value = false;
    } else {
//add to favorite
      await supabase
        .from('favorited')
        .insert([{ profile_id: userId.value, recipe_id: props.recipeId }]);
      isFavorited.value = true;
    }
  }
</script>

<style scoped>
*{
    width: 200px;
}
</style>