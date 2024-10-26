<script setup>
import { ref, onMounted, computed } from 'vue';
import { supabase } from '@/services/supabase';
import CategoriesTags from './CategoriesTags.vue';

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

const selectCategory = (category) => {
  selectedCategory.value = category;
};

onMounted(() => {
  fetchRecipes();
});
</script>

<template>
  <div>
    <h1>Recipes</h1>
    <CategoriesTags @categorySelected="selectCategory" />

    <ul>
      <li v-for="recipe in filteredRecipes" :key="recipe.id">
        <h2>{{ recipe.title }}</h2>
        <img :src="recipe.imageURL" :alt="recipe.title" />
        <p>{{ recipe.description }}</p>
        <p>Prep Time: {{ recipe.prep_time }} minutes</p>
        <ul>
          <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
            {{ ingredient.ingredient }}: {{ ingredient.amount }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>



<style scoped>
</style>