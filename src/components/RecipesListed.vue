
<script setup>
import { ref, onMounted, computed } from 'vue';
import { supabase } from '@/services/supabase';

const recipes = ref([]);
const selectedCategory = ref('');

const fetchRecipes = async () => {
  const { data, error } = await supabase
    .from('recipes')
    .select('title, imageURL, prep_time, ingredients, description, category');

  if (error) {
    console.error('Error fetching data:', error);
  } else {
    recipes.value = data;
  }
};

const filteredRecipes = computed(() => {
  if (selectedCategory.value) {
    return recipes.value.filter(recipe => 
      recipe.category && recipe.category.includes(selectedCategory.value)
    );
  }
  return recipes.value;
});

const favouritedButton = async(recipe) => {
  try {
    const { data: user, error } = await supabase
      .from('users')
      .select('favourited')
      .eq('id', '1')
      .single();

    if (error) {
      console.error('Error retrieving user data:', error);
      return;
    }
  
    const favourites = user.favourited || [];
    if (!favourites.includes(recipe.id)) {
      favourites.push(recipe.id);
    }

    const { error: updateError } = await supabase
      .from('users')
      .update({ favourited: favourites })
      .eq('id', '1');
    
    if (updateError) {
      console.error('Error updating favorites:', updateError);
    } else {
      console.log(`Favorites updated`, favourites);
    }
  } catch (err) {
    console.error('Unexpected error:', err);
  }
};

onMounted(() => {
  fetchRecipes();
});
</script>

<template>
  <ul class="recipes-listed">
    <li v-for="recipe in filteredRecipes" :key="recipe.id" class="recipes-listed-each">
      <button @click="favouritedButton(recipe)">Make favourite</button>
      <h2>{{ recipe.title }}</h2>
      <img :src="recipe.imageURL" :alt="recipe.title" class="recipe-img"/>
      <p>{{ recipe.description }}</p>
      <p>Prep Time: {{ recipe.prep_time }} minutes</p>
      <ul class="ingredient-list">
        <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
          {{ ingredient.ingredient }}: {{ ingredient.amount }}
        </li>
      </ul>
    </li>
  </ul>
</template>

<style scoped>
.browsing-view {
  display: flex;
  align-items: flex-start;
}

.recipes-listed {
  display: block; /* Change to block layout */
  width: 100%; /* Full width to allow recipes to stack */
  list-style-type: none;
  padding: 0; /* Remove default padding */
}

.recipes-listed-each {
  padding: 20px; /* Adjust padding as needed */
  border: 2px solid #90EE90; /* Light green border for recipe boxes */
  border-radius: 8px;
  margin: 10px 0; /* Space between recipe items */
  transition: box-shadow 0.3s ease; /* Smooth transition for shadow effect */
}

.recipes-listed-each:hover {
  box-shadow: 0 4px 12px rgba(0, 255, 0, 0.3); /* Light green shadow effect on hover */
}

.recipe-img {
  width: 100%; /* Allow images to take full width */
  max-width: 300px; /* Limit max width for better visuals */
  height: auto; /* Maintain aspect ratio */
  border-radius: 8px; /* Rounded corners for images */
}
</style>