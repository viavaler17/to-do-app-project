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

const favouritedButton = async(recipe) =>{
  try{
    const {data: user, error} = await supabase
    .from('users')
    .select('favourited')
    .eq('id', '1')
    .single()

  if (error) {
      console.error('Error retrieving user data:', error);
      return;
    }
  
    const favourites = user.favourited || [];

    if(!favourites.includes(recipe.id)){
      favourites.push(recipe.id);
    }

    const { error: updateError } = await supabase
      .from('users')
      .update({ favourited: favourites })
      .eq('id', '1')
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
  <div class="browsing-view">
    <div class="categories">
      <CategoriesTags @categorySelected="selectCategory" />
    </div>

    <ul class="recipes-listed">
      
      <li v-for="recipe in filteredRecipes" :key="recipe.id" class="recipes-listed-each">
        <button @click="favouritedButton(recipe)">Make favourite</button>
        <h2>{{ recipe.title }}</h2>
        <img :src="recipe.imageURL" :alt="recipe.title" class="recipe-img"/>
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
.browsing-view{
  display: flex;
  align-items: flex-start;
}

.recipes-listed{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: max-content;

  list-style-type: none;
}

.recipes-listed-each{
  padding: 100px;
}

.recipe-img{
  width: 100px;
  height: 100px;
}
</style>