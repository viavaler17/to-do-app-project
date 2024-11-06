<script setup>
import { ref, reactive} from 'vue';
import { supabase } from '@/services/supabase';
import ProfileBlueBar from '@/components/ProfileBlueBar.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const form = ref({
  title: '',
  imageURL: '',
  prep_time: null,
  ingredients: [],
  description: '',
  category: '[]',
  tag: []
});

const addIngredient = () => {
  const lastIngredient = form.value.ingredients[form.value.ingredients.length - 1];
  const defaultUnit = lastIngredient ? lastIngredient.unit : 'grams';
  form.value.ingredients.push({ ingredient: '', amount: '', unit: defaultUnit });
};

const removeIngredient = (index) => {
  form.value.ingredients.splice(index, 1);
};

//initial user state for below functions
const userState = reactive({
  isLoggedIn: false,
  userId: null,
});

//Listen to authentication state changes and update the user state - same as in FavoritedComponent
supabase.auth.onAuthStateChange((_event, session) => {
  if (session) {
    userState.userId = session.user.id;
    userState.isLoggedIn = true;
    console.log("User ID for favoriting:", userState.userId);
  } else {
    userState.userId = null;
    userState.isLoggedIn = false;
    console.warn("No user logged in for favoriting");
  }
});

const handleSubmit = async () => {
  try {
    if (!userState.isLoggedIn || !userState.userId) {
      console.warn('User not authenticated.');
      alert('Please log in to add a recipe');
      return; 
    }
    
    const category = JSON.parse(form.value.category);

    const { data, error } = await supabase
      .from('recipes')
      .insert([{ 
        title: form.value.title,
        imageURL: form.value.imageURL,
        prep_time: form.value.prep_time,
        ingredients: form.value.ingredients,
        description: form.value.description,
        category,
        tag: form.value.tag,
        added_by: userState.userId
      }]);

    if (error) {
      console.error('Error adding recipe:', error);
      return;
    }
    alert("Recipe added!");
    console.log('Recipe added:', data);
    router.push('/addedrecipes');

    form.value = {
      title: '',
      imageURL: '',
      prep_time: null,
      ingredients: [],
      description: '',
      category: '[]',
      tag: []
    };

    categorySelection.value = [];
    
  } catch (err) {
    console.error('Error parsing JSON fields:', err);
  }
};

//update categories
const categorySelection = ref([]);

const updateCategories = () => {
  form.value.category = JSON.stringify(categorySelection.value);
};

const updateTags = (tag) => {
  const index = form.value.tag.indexOf(tag);
  if (index === -1) {
    form.value.tag.push(tag);
  } else {
    form.value.tag.splice(index, 1);
  }
};
</script>



<template>
  <ProfileBlueBar profileHeader="Add a recipe"/>
  <div class="add-recipe-container">
    <div class="add-recipe">
      <p>Fields with a * are required</p>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="title">*Title:</label>
          <input type="text" v-model="form.title" 
          maxlength="24" required />
        </div>
        
        <div>
          <label for="imageURL">*Image URL:</label>
          <input type="url" id="imageURL" name="imageURL" v-model="form.imageURL" required/>
        </div>
        
        <div>
          <label for="prep_time">*Prep Time (in minutes):</label>
          <input type="number" v-model="form.prep_time" min="0" required/>
        </div>

        <div>
          <label for="ingredients">*Ingredients</label>
          <ul>
            <li v-for="(ingredient, index) in form.ingredients" :key="index">
              <input type="text" v-model="ingredient.ingredient" 
              placeholder="ingredient" maxlength="50" required/>
              
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
          <label for="description">*Description:</label>
          <textarea v-model="form.description" class="description"
          minlength="100" placeholder="add a minimum of 100 characters (including spaces)" required></textarea>
        </div>


        <div>
          <h4>Categories:</h4>
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

        <div>
          <h4>Tags:</h4>
          <label>
            <input 
              type="checkbox" 
              @change="updateTags('vegetarian')" 
              :checked="form.tag.includes('vegetarian')"
            />
            Vegetarian
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>

    <div class="image-container">
      <img src="https://images.pexels.com/photos/2751755/pexels-photo-2751755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt="generic ingredients picture">
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
  gap: 100px;
}

.add-recipe {
  flex: 1; 
  max-width: 750px; 
}

.image-container {
  flex: 1; 
  max-width: 400px;
  margin: auto 0px;
}

.image-container img {
  width: 100%; 
  height: auto; 
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

p {
  color: grey;
  margin-bottom: 10px;
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
</style>