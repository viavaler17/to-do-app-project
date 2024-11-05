<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '@/services/supabase';
import ProfileBlueBar from '@/components/ProfileBlueBar.vue';
import { useRouter, useRoute } from 'vue-router';

const route = useRoute();
const router = useRouter();

const categorySelection = ref([]); //pinia 

const form = ref({
  title: '',
  imageURL: '',
  prep_time: null,
  ingredients: [],
  description: '',
  category: '[]',
  tag: []
}); //pinia

const addIngredient = () => {
  const lastIngredient = form.value.ingredients[form.value.ingredients.length - 1];
  const defaultUnit = lastIngredient ? lastIngredient.unit : 'grams';
  form.value.ingredients.push({ ingredient: '', amount: '', unit: defaultUnit });
};

const removeIngredient = (index) => {
  form.value.ingredients.splice(index, 1);
};


const fetchRecipe = async () => {
  const { data, error } = await supabase
    .from('recipes')
    .select('*')
    .eq('id', route.params.id)
    .single();

  if (error) {
    console.error('Error fetching recipe:', error);
  } else {
    form.value = {...data}; //here putting the data from supabase
    categorySelection.value = JSON.parse(data.category);
  }
};

const updateRecipe = async () => {
  const updatedData = {
    ...form.value,
    category: JSON.stringify(categorySelection.value),
  };
  
  const { error } = await supabase
    .from('recipes')
    .update(updatedData)
    .eq('id', route.params.id);

  if (error) {
    console.error('Error updating recipe:', error);
  }else{
    alert("Recipe updated successfully!");
    console.log('Recipe added:', updatedData);
    router.push('/addedrecipes');
  }
};

onMounted(fetchRecipe);
</script>

<template>
    <ProfileBlueBar/>
    <div class="edit-recipe-container">
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
                <input type="text" v-model="ingredient.ingredient" placeholder="ingredient" maxlength="50" required/>
                <input type="number" v-model="ingredient.amount" placeholder="amount" min="0" step="0.01" required/>
                <select v-model="ingredient.unit">
                  <option value="gram(s)">gram(s)</option>
                  <option value="milliliter(s)">milliliter(s)</option>
                  <option value="unit(s)">unit(s)</option>
                  <option value="tablespoon(s)">tablespoon(s)</option>
                  <option value="teaspoon(s)">teaspoon(s)</option>
                  <option value="cup(s)">cup(s)</option>
                </select>
                <button type="button" @click="removeIngredient(index)">Remove</button>
              </li>
              <button type="button" @click="addIngredient">Add another ingredient</button>
            </ul>
          </div>
    
          <div>
            <label for="description">Description:</label>
            <textarea v-model="form.description" class="description"
            minlength="100" placeholder="add a minimum of 100 characters (including spaces)" required></textarea>
          </div>

          <div>
          <h3>Categories:</h3>
          <label>
              <input 
              type="checkbox" 
              value="Breakfast" 
              v-model="categorySelection" 
              :checked="form.category.includes('Breakfast')"
              />
              Breakfast
          </label>
          <label>
              <input 
              type="checkbox" 
              value="Lunch" 
              v-model="categorySelection" 
              :checked="form.category.includes('Lunch')"
              />
              Lunch
          </label>
          <label>
              <input 
              type="checkbox" 
              value="Dinner" 
              v-model="categorySelection" 
              :checked="form.category.includes('Dinner')"
              />
              Dinner
          </label>
        </div>

        <div>
          <h3>Tags:</h3>
          <label>
            <input 
              type="checkbox" 
              @change="updateTags('vegetarian')" 
              :checked="form.tag.includes('vegetarian')"
            />
            Vegetarian
          </label>
        </div>
    
          <button type="submit">Update Recipe</button>
        </form>
      </div>
    </div>
  </template>

<style scoped>
.edit-recipe-container {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 100%;
  margin: 40px 0 40px 100px; 
  padding: 10px;
  gap: 200px;
}

.edit-recipe {
  flex: 1; 
  max-width: 750px; 
}

.image-container {
  flex: 1; 
  max-width: 530px; 
}

.image-container img {
  width: 100%; 
  height: auto; 
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
h2 {
  text-align: center;
  color: #ff6f61;
  font-weight: 800;
}

form {
  display: flex;
  flex-direction: column;
}

div {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
}

input[type="text"],
input[type="url"],
input[type="number"],
textarea,
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

input[type="checkbox"] {
  margin-right: 8px;
}

button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #218838;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

li input[type="text"],
li input[type="number"],
li select {
  flex: 1;
  margin-right: 10px;
}

li button {
  background-color: #dc3545;
}

li button:hover {
  background-color: #c82333;
}

h4, h3 {
  margin-top: 20px;
  margin-bottom: 10px;
  color: #333;
}

::placeholder{
  font-size: 13px;
  font-family: 'Arial';
}

.description{
  font-family: Arial, Helvetica, sans-serif;
}

textarea{
  white-space: pre-wrap;
}
</style>