<script setup>
import { ref, onMounted, computed } from 'vue';
import CategoriesTags from '@/components/CategoriesTags.vue';
import RecipesListed from '@/components/RecipesListed.vue';
import { supabase } from '@/services/supabase'; // Ensure your supabase is correctly configured
import SearchComponent from '@/components/SearchComponent.vue';

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

  .browse-container {
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
  }
</style>

<!-- <template>
  <div class="browse-container">
    <SearchComponent></SearchComponent>
    <div class="content">
      <div class="sidebar"> 
        <CategoriesTags @categorySelected="selectCategory" />
      </div>
<div class="recipes">
  <RecipesListed :filteredRecipes="filteredRecipes" />
</div>
    </div>
  </div>
</template>

<style scoped>
  /* .container{
    display: flex;
    padding: 50px;
  }

  .browse-container {
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

  .browse-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
}

.content {
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
}

/* Sidebar for categories */
.sidebar {
  width: 250px;
  margin-right: 20px;
  padding: 15px;
  background-color: #e8f5e9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Recipes List */
.recipes {
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

/* Recipe cards */
.recipes > div {
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.recipes > div:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.recipes img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-bottom: 2px solid #ccc;
}

.recipes h3 {
  margin: 10px;
  font-size: 1.2em;
  color: #333;
}

.recipes p {
  margin: 10px;
  color: #555;
}
</style> -->