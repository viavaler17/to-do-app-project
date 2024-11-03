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
  <div class="add-recipe-container">
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
              <option value="gram(s)">gram(s)</option>
              <option value="milliliter(s)">mililiter(s)</option>
              <option value="unit(s)">unit(s)</option>
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
    <div class="image-container">
      <img src="https://images.pexels.com/photos/2751755/pexels-photo-2751755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Ingredients" />
    </div>
  </div>
  </template>

<style scoped>
.add-recipe-container {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 100%;
  margin: 40px 0 40px 100px; 
  padding: 10px;
  gap: 200px;
}

.add-recipe {
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
</style>