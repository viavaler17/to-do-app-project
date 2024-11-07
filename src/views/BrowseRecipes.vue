<script setup>
import { ref, onMounted, computed } from 'vue';
import CategoriesTags from '@/components/CategoriesTags.vue';
import RecipesListed from '@/components/RecipesListed.vue';
import { supabase } from '@/services/supabase';

const recipes = ref([]);
const selectedCategory = ref('');
const selectedTags = ref([]);

const fetchRecipes = async () => {
  const { data, error } = await supabase
    .from('recipes')
    .select('title, imageURL, prep_time, ingredients, description, category, id, tag');

  if (error) {
    console.error('Error fetching data:', error);
  } else {
    recipes.value = data;
  }
};

const filteredRecipes = computed(() => {
  return recipes.value.filter(recipe => {
    const categoryMatch = selectedCategory.value 
      ? recipe.category && recipe.category.includes(selectedCategory.value)
      : true;
     
    const tagsMatch = selectedTags.value.length 
      ? selectedTags.value.every(tag => {
          if (tag === '#vegetarian') {
            return recipe.tag && recipe.tag.includes('vegetarian');
          }
          if (tag === '#quick') {
            return recipe.prep_time <= 15;
          }
          return true;
        })
      : true;

    return categoryMatch && tagsMatch;
  });
});

const selectCategory = (category) => {
  selectedCategory.value = category;
};

const selectTags = (tags) => {
  selectedTags.value = tags;
};

onMounted(() => {
  fetchRecipes();
});
</script>

<template>
  <div class="container-container">
    <h1>Browse recipes</h1>
    <div class="container">
      <CategoriesTags @categorySelected="selectCategory" @tagsUpdated="selectTags"/>
      <RecipesListed :filteredRecipes="filteredRecipes" source="BrowseRecipes" />
    </div>
  </div>
</template>

<style scoped>
  .container-container{
    max-width: 1140px;
    margin: 0px auto 70px auto;
    padding: 0 20px;
    min-height: 90vh;
  }
  .container{
    display: flex;
    gap: 100px;
    justify-content: flex-start;
  }

  h1 {
    color: #00A6A6;
    font-weight: 800;
    font-size: 32px;
    padding: 9px 0px;
    text-align: center;
  } 
</style>