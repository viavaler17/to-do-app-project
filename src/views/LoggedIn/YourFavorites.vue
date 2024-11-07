<script setup>
import { ref, onMounted, computed } from 'vue';
import CategoriesTags from '@/components/CategoriesTags.vue';
import RecipesListed from '@/components/RecipesListed.vue';
import { supabase } from '@/services/supabase';
import ProfileBlueBar from '@/components/ProfileBlueBar.vue';

const recipes = ref([]);
const selectedCategory = ref('');
const selectedTags = ref([]);

const favoritedRecipes = ref([]);
const userId = ref(null);

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

const fetchFavoritedRecipes = async () => {
  if (!userId.value) return;

  const { data, error } = await supabase
    .from('favorited')
    .select('recipe_id')
    .eq('profile_id', userId.value);

  if (error) {
    console.error('Error fetching favorited recipes:', error);
  } else {
    favoritedRecipes.value = data.map(item => item.recipe_id);
  }
};

const filteredRecipes = computed(() => {
  return recipes.value.filter(recipe => {
    const isFavorited = favoritedRecipes.value.includes(recipe.id);
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

    return isFavorited && categoryMatch && tagsMatch;
  });
});

const selectCategory = (category) => {
  selectedCategory.value = category;
};

const selectTags = (tags) => {
  selectedTags.value = tags;
};

supabase.auth.onAuthStateChange((_event, session) => {
  if (session) {
    userId.value = session.user.id;
    fetchFavoritedRecipes();
  } else {
    userId.value = null;
    favoritedRecipes.value = [];
  }
});

onMounted(() => {
  fetchRecipes();
});
</script>

<template>
  <ProfileBlueBar profileHeader="Your Favorites"/>
  <div class="page-container-fav">
    <div class="container">
        <CategoriesTags @categorySelected="selectCategory" @tagsUpdated="selectTags"/>
        <RecipesListed :filteredRecipes="filteredRecipes" source="YourFavorites" />
    </div>
  </div>
</template>

<style scoped>
  .page-container-fav{
    max-width: 1140px;
    margin: 00px auto 70px auto;
    padding: 0 20px;
    min-height: 80vh;
  }
  
  .container{
    display: flex;
    gap: 100px;
    justify-content: flex-start;
  }
</style>