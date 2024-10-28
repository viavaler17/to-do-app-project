<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '@/services/supabase';
import { useRouter } from 'vue-router'; 

const randomRecipes = ref([]); 
const router = useRouter(); 


const fetchRandomRecipes = async () => {
  const { data, error } = await supabase
    .from('recipes')
    .select('id, title, imageURL') 

  if (error) {
    console.error('Error fetching recipes:', error); 
    return;
  }


  const shuffledRecipes = data.sort(() => 0.5 - Math.random());
  randomRecipes.value = shuffledRecipes.slice(0, 4); 
};


const openRecipe = (recipeId) => {
  router.push({ name: 'RecipeDetail', params: { id: recipeId } }); 
};

onMounted(() => {
  fetchRandomRecipes();
});
</script>

<template>
  <div class="propositions">
    <h2>Browse our delicious recipes</h2>
    <div class="recipe-list">
      <div 
        v-for="recipe in randomRecipes" 
        :key="recipe.id" 
        class="recipe-card" 
        @click="openRecipe(recipe.id)"  
        :style="{ backgroundImage: `url(${recipe.imageURL})` }" 
      >
        <div class="recipe-title">{{ recipe.title }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.propositions {
  margin: 20px;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.recipe-list {
  display: flex;
  justify-content: space-between;
}

.recipe-card {
  flex: 1; 
  margin: 0 10px; 
  height: 200px; 
  border-radius: 8px;
  background-size: cover;
  background-position: center;
  cursor: pointer; 
  display: flex;
  align-items: flex-end; 
  justify-content: center;
}

.recipe-title {
  background-color: rgba(255, 255, 255, 0.8); 
  padding: 10px;
  border-radius: 0 0 8px 8px; 
  text-align: center;
}
</style>