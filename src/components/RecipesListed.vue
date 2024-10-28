<!-- <script setup> 
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
  <div class="container"> 
    <CategoriesTags @categorySelected="selectCategory" /> 
    <div class="recipes">
      <h1>Recipes</h1>
    <ul class="recipe-list"> 
      <li v-for="recipe in filteredRecipes" :key="recipe.id"> 
        <h2>{{ recipe.title }}</h2> 
        <img :src="recipe.imageURL" :alt="recipe.title" /> 
        <p>{{ recipe.description }}</p> 
        <p>Prep Time: {{ recipe.prep_time }} minutes</p> 
        <ul class="ingredient-list"> 
          <li v-for="(ingredient, index) in recipe.ingredients" :key="index"> 
            {{ ingredient.ingredient }}: {{ ingredient.amount }} 
          </li> 
        </ul>
      </li>
    </ul>
  </div>
  </div>
</template>

<style scoped>
.recipes {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.recipe-list {
  list-style: none;
  padding: 0;
}

.recipe-card {
  background-color: #fcfcfc;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.recipe-card:hover {
  transform: translateY(-5px);
}

.recipe-image {
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
  margin-bottom: 15px;
}

.ingredient-list {
  list-style-type: disc;
  padding-left: 20px;
  color: #5a5a5a;
}
</style> -->

<script setup>
import { ref, onMounted, computed } from 'vue';
import { supabase } from '@/services/supabase';
import { defineProps } from 'vue';

const props = defineProps({
  selectedCategory: {
    type: String,
    default: ''
  }
});

const recipes = ref([]);

// Fetch recipes from the database
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

// Filter recipes based on the selected category or tag
const filteredRecipes = computed(() => {
  if (props.selectedCategory) {
    return recipes.value.filter(recipe =>
      recipe.category && recipe.category.includes(props.selectedCategory)
    );
  }
  return recipes.value;
});

onMounted(() => {
  fetchRecipes();
});
</script>

<template>
  <div class="recipes">
    <h1>Recipes</h1>
    <ul class="recipe-list">
      <li v-for="recipe in filteredRecipes" :key="recipe.id" class="recipe-card">
        <h2>{{ recipe.title }}</h2>
        <img :src="recipe.imageURL" :alt="recipe.title" class="recipe-image" />
        <p>{{ recipe.description }}</p>
        <p>Prep Time: {{ recipe.prep_time }} minutes</p>
        <ul class="ingredient-list">
          <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
            {{ ingredient.ingredient }}: {{ ingredient.amount }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.recipes {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.recipe-list {
  list-style: none;
  padding: 0;
}

.recipe-card {
  background-color: #fcfcfc;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.recipe-card:hover {
  transform: translateY(-5px);
}

.recipe-image {
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
  margin-bottom: 15px;
}

.ingredient-list {
  list-style-type: disc;
  padding-left: 20px;
  color: #5a5a5a;
}
</style>