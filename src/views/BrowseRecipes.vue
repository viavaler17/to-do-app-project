<script setup>
import { ref, onMounted, computed } from 'vue';
import CategoriesTags from '@/components/CategoriesTags.vue';
import RecipesListed from '@/components/RecipesListed.vue';
import { supabase } from '@/services/supabase'; // Ensure your supabase is correctly configured

const recipes = ref([]);
const selectedCategory = ref('');

const fetchRecipes = async () => {
  const { data, error } = await supabase
    .from('recipes')
    .select('title, imageURL, prep_time, ingredients, description, category, id');

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
  <div class="container">
    <CategoriesTags @categorySelected="selectCategory" />
    <RecipesListed :filteredRecipes="filteredRecipes" />
  </div>
</template>

<style scoped>
  .container{
    display: flex;
    padding: 50px;
  }

  /* .browse-container {
    display: flex;
    flex-direction: column; 
    align-items: center;
  }

  .content {
    display: flex;
    width: 100%;
    max-width: 1200px;
    margin-top: 20px;
  }

  .content > *:first-child {
    width: 250px;
    margin-right: 20px;
  }

  .content > *:last-child {
    flex-grow: 1;
  } */
</style>