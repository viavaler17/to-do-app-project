<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { supabase } from '@/services/supabase';
import RecipeLayout from '@/components/RecipeLayout.vue';

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
    <div>
        <RecipeLayout
        :imageUrl="recipe.imageURL"
        :title="recipe.title"
        :cookingTime="recipe.prep_time"
        :ingredients="recipe.ingredients"
        :description="recipe.description"
        />
    </div>
  </template>

<style scoped>
</style>