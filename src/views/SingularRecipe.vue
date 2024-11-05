<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { supabase } from '@/services/supabase';
import RecipeLayout from '@/components/RecipeLayout.vue';
import FavoritedComponent from '@/components/FavoritedComponent.vue';
import Propositions from '@/components/Propositions.vue';

const route = useRoute();
const recipeId = route.params.id;

const recipe = ref({
  imageURL: '',
  title: '',
  prep_time: null,
  ingredients: [],
  description: ''
});

onMounted(async () => {
  const { data, error } = await supabase
    .from('recipes')
    .select('*')
    .eq('id', recipeId)
    .single();

  if (error) {
    console.error('Error fetching recipe:', error);
  } else {
    recipe.value = data;
  }
});
</script>

<template>
    <div class="singular-recipe">
        <FavoritedComponent :recipeId="recipeId" />

        <RecipeLayout
        :recipeId="recipe.id"
        :imageUrl="recipe.imageURL"
        :title="recipe.title"
        :cookingTime="recipe.prep_time"
        :ingredients="recipe.ingredients"
        :description="recipe.description"
        />
    </div>
    <Propositions></Propositions>
  </template>

<style scoped>
  *{
    max-width: 1140px;
    padding: 0 20px;
  }

.singular-recipe{
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  margin: 50px auto;
}
</style>