<script setup>
import { ref } from 'vue';
import { supabase } from '@/services/supabase';

const form = ref({
  title: '',
  imageURL: '',
  prep_time: null,
  ingredients: [],
  description: '',
  category: '[]',
});

const addIngredient = () => {
  const lastIngredient = form.value.ingredients[form.value.ingredients.length - 1];
  const defaultUnit = lastIngredient ? lastIngredient.unit : 'grams';
  form.value.ingredients.push({ ingredient: '', amount: '', unit: defaultUnit });
};

const removeIngredient = (index) => {
  form.value.ingredients.splice(index, 1);
};

const handleSubmit = async () => {
  try {
    const category = JSON.parse(form.value.category);

    const { data, error } = await supabase
      .from('recipes')
      .insert([{ 
        title: form.value.title,
        imageURL: form.value.imageURL,
        prep_time: form.value.prep_time,
        ingredients: form.value.ingredients,
        description: form.value.description,
        category
      }]);

    if (error) {
      console.error('Error adding recipe:', error);
      return;
    }
    console.log('Recipe added:', data);

    //to clear the form after submit
    form.value = {
      title: '',
      imageURL: '',
      prep_time: null,
      ingredients: [],
      description: '',
      category: '[]',
    };
  } catch (err) {
    console.error('Error parsing JSON fields:', err);
  }
};

const categorySelection = ref([]);

const updateCategories = () => {
  form.value.category = JSON.stringify(categorySelection.value);
//   form.value.category = [];
};
</script>

<template>
    <div class="add-recipe">
      <h2>Add or Update a Recipe</h2>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="title">Title:</label>
          <input type="text" v-model="form.title" required />
        </div>
        <div>
          <label for="imageURL">Image URL:</label>
          <input type="url" v-model="form.imageURL" />
        </div>
        <div>
          <label for="prep_time">Prep Time (in minutes):</label>
          <input type="number" v-model="form.prep_time" />
        </div>

        <div>
        <h4>Ingredients:</h4>
        <ul>
          <li v-for="(ingredient, index) in form.ingredients" :key="index">
            <input type="text" v-model="ingredient.ingredient" placeholder="Ingredient Name" required />
            <input type="number" v-model="ingredient.amount" placeholder="Amount" required />
            <select v-model="ingredient.unit">
              <option value="grams">gram(s)</option>
              <option value="ml">mililiter(s)</option>
              <option value="unit">unit(s)</option>
            </select>
            <button type="button" @click="removeIngredient(index)">Remove</button>
          </li>
          <button type="button" @click="addIngredient">Add another ingredient</button>
        </ul>
      </div>

        <div>
          <label for="description">Description:</label>
          <textarea v-model="form.description"></textarea>
        </div>


        <div>
        <h3>Categories:</h3>
        <label>
            <input 
            type="checkbox" 
            value="Breakfast" 
            v-model="categorySelection" 
            @change="updateCategories" 
            />
            Breakfast
        </label>
        <label>
            <input 
            type="checkbox" 
            value="Lunch" 
            v-model="categorySelection" 
            @change="updateCategories" 
            />
            Lunch
        </label>
        <label>
            <input 
            type="checkbox" 
            value="Dinner" 
            v-model="categorySelection" 
            @change="updateCategories" 
            />
            Dinner
        </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  </template>

<style scoped>
</style>