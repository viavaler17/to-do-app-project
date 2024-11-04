<script setup>
import { ref } from 'vue';
import { supabase } from '@/services/supabase';
import ProfileBlueBar from '@/components/ProfileBlueBar.vue';

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
  <ProfileBlueBar/>

  <div class="container-container">
      <div>
        <form @submit.prevent="handleSubmit">
          <div class="add-recipe">
            <li class="recipe-layout">
              
              <div class="recipe-leftside">
          
                <div class="url-flexbox">
                  <div>
                    <img src="https://cdn-icons-png.flaticon.com/128/4598/4598380.png" alt="generic picture icon" class="icon">
                  </div>
                  <div class="url-text">
                    <label for="imageURL">Paste your image URL here:</label>
                    <br>
                    <input type="url" v-model="form.imageURL" id="url-input"/>
                  </div>
                </div>

                <div class="ingredients">
                  <div class="ingredients-flexbox">
                    <img src="https://cdn-icons-png.flaticon.com/128/9862/9862064.png" alt="generic ingredients icon" class="icon">
                    <h4>Add ingredients here:</h4>
                  </div>
                  
                  <div class="ingredients-text">
                    <ul>
                      <li v-for="(ingredient, index) in form.ingredients" :key="index">
                        <div class="ingredient-each-flex">
                          <div>
                            <input id="ingredient-name"
                            type="text" v-model="ingredient.ingredient" placeholder="ingredient's name" required/>

                            <br>
                            <input id="ingredient-amount"
                            type="number" v-model="ingredient.amount" placeholder="amount" required/>
                          
                            <select v-model="ingredient.unit" id="ingredient-unit">
                              <option value="gram(s)">gram(s)</option> 
                              <option value="milliliter(s)">mililiter(s)</option>
                              <option value="unit(s)">unit(s)</option>
                            </select>
                          </div>

                          <button type="button" @click="removeIngredient(index)" class="remove-button">
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828666.png"
                              alt="remove ingredient button"class="remove-button-img">
                          </button>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <button type="button" @click="addIngredient" id="add-ingredient-button">Add another ingredient</button>
                </div>
              </div>

              <div class="recipe-rightside">
                <div class="title-time">
                    <div class="title-flexbox">
                      <img src="https://cdn-icons-png.flaticon.com/128/5172/5172747.png" alt="generic title icon" class="icon">
                      <input type="text" v-model="form.title" placeholder="Your recipe's name here" id="recipe-title" required />
                    </div>
                    
                    <div class="time-flexbox">
                      <img src="https://cdn-icons-png.flaticon.com/128/2784/2784399.png" alt="generic clock icon" class="icon">
                      <input type="number" v-model="form.prep_time" placeholder="Preparation time (in minutes)" id="prep-time"/>
                    </div>
                </div>
                
                <div class="description">
                  <textarea v-model="form.description" placeholder="Instructions and whatever you'd like to share about the recipe.."></textarea>
                </div>
              </div>
            
            </li>

            <div class="categories">
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
          </div>
        </form>
      </div>
  </div>
</template>

<style scoped>
  .container-container{
    max-width: 1140px;
    margin: 0px auto;
    padding: 0 20px;
  }

  .recipe-layout{
    max-width: 1040px;
    height: max-content;
    padding: 20px;

    display: flex;
    gap: 100px;

    overflow-x: hidden;
    box-sizing: border-box;
  }

  .icon{
    height: 50px;
  }

  .url-flexbox{
    width: 300px;
    height: 100px;

    display: flex;
    gap: 10px;
  }

  #url-input{
    width: 240px;
  }

  .ingredients{
    width: 300px;
  }

  .ingredients-flexbox{
    display: flex;
    align-items: center;
    gap: 10px;
    width: 300px;
    height: 100px;
  }

  .ingredient-each-flex{
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    padding: 10px;
    background-color: rgba(128, 128, 128, 0.1);
    font-size: 16px;
  }

  .remove-button{
    padding: 10px;
    border: none;
    background: none;
    cursor: pointer;
  }

  .remove-button-img{
    height: 10px;
    width: 10px;
  }

  #ingredient-name{
    border: none;
    background: none;
    width: 220px;
  }

  #ingredient-amount{
    border: none;
    background: none;
    width: 70px;
  }

  #add-ingredient-button{
    margin: 20px;
    text-align: center;
  }

  .title-flexbox{
    width: max-content;
    height: 50px;

    display: flex;
    align-items: center;
    gap: 10px;

    margin-bottom: 20px;
  }

  #recipe-title{
    border: none;
    margin-bottom: 20px;
    padding: 10px;
  }

  .time-flexbox{
    width: max-content;
    height: 50px;

    display: flex;
    align-items: center;
    gap: 10px;

    margin-bottom: 20px;
  }

  #prep-time{
    height: 50px;
    border: none;
    padding: 10px;
  }

  .recipe-text{
      display: flex;
      flex-direction: column;
      align-content: center;
      align-items: center;
      gap: 50px;
  }


  /* .title-time{
    width: 590px;
  } */

  h3{
    font-weight: 600;
  }

  .container {
    max-width: 790px;
    margin: 0 auto;
    padding: 0;
    overflow-x: hidden;
  }

</style>