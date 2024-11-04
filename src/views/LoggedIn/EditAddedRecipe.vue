<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '@/services/supabase';
import { useRoute } from 'vue-router';
import ProfileBlueBar from '@/components/ProfileBlueBar.vue';

const route = useRoute();

const form = ref({
  title: '',
  imageURL: '',
  prep_time: null,
  ingredients: [],
  description: '',
  category: [],
  tag: []
});

const fetchRecipe = async () => {
  const { data, error } = await supabase
    .from('recipes')
    .select('*')
    .eq('id', route.params.id) // Assuming 'id' parameter is passed through the route
    .single();

  if (error) {
    console.error('Error fetching recipe:', error);
  } else {
    form.value = {...data}; // Autofill the form with existing data
  }
};

onMounted(fetchRecipe);
</script>

<template>
    <ProfileBlueBar/>
    <div class="edit-recipe">
      <h2>Edit Recipe</h2>
      <form @submit.prevent="updateRecipe">
        <div>
          <label for="title">Title:</label>
          <input type="text" v-model="form.title" maxlength="24" required />
        </div>
  
        <div>
          <label for="imageURL">Image URL:</label>
          <input type="url" v-model="form.imageURL" />
        </div>
  
        <div>
          <label for="prep_time">Prep Time (in minutes):</label>
          <input type="number" v-model="form.prep_time" min="0" />
        </div>
  
        <div>
          <h4>Ingredients:</h4>
          <ul>
            <li v-for="(ingredient, index) in form.ingredients" :key="index">
              <input type="text" v-model="ingredient.ingredient" />
              <input type="number" v-model="ingredient.amount" />
              <select v-model="ingredient.unit">
                <option value="gram(s)">gram(s)</option>
                <option value="milliliter(s)">milliliter(s)</option>
                <option value="unit(s)">unit(s)</option>
                <option value="tablespoon(s)">tablespoon(s)</option>
                <option value="teaspoon(s)">teaspoon(s)</option>
                <option value="cup(s)">cup(s)</option>
              </select>
            </li>
          </ul>
        </div>
  
        <div>
          <label for="description">Description:</label>
          <textarea v-model="form.description" minlength="100"></textarea>
        </div>
  
        <button type="submit">Update Recipe</button>
      </form>
    </div>
  </template>

<style scoped>
</style>