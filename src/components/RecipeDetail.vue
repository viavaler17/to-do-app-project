<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '@/services/supabase';
import { useRoute } from 'vue-router'; 

const recipe = ref({}); 
const route = useRoute(); 


const fetchRecipeDetails = async () => {
  const recipeId = route.params.id; 
  const { data, error } = await supabase
    .from('recipes')
    .select('title, imageURL, prep_time, ingredients, description') 
    .eq('id', recipeId) 
    .single(); 

  if (error) {
    console.error('Error fetching recipe details:', error); 
  } else {
    recipe.value = data; 
  }
};


onMounted(() => {
  fetchRecipeDetails();
});
</script>

<template>
  <div class="recipe-detail">
    <h1>{{ recipe.title }}</h1> 
    <img :src="recipe.imageURL" alt="Recipe Image" /> 
    <p>{{ recipe.description }}</p> 
    <p>Prep Time: {{ recipe.prep_time }} minutes</p> 
    <h3>Ingredients</h3>
    <ul>
      <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
        {{ ingredient.ingredient }}: {{ ingredient.amount }} 
      </li>
    </ul>
  </div>
</template>

<style scoped>
.recipe-detail {
  padding: 20px; 
}
.recipe-detail img {
  max-width: 100%; 
  height: auto; 
}
</style>