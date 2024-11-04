<script setup>
import { onMounted, ref } from 'vue';
import { supabase } from '@/services/supabase';
import ProfileBlueBar from '@/components/ProfileBlueBar.vue';

const removeRecipe = async (id, title) => {
  const confirmDeletion = window.confirm(`Are you sure you want to remove the recipe for: ${title}?`);
  
  if (confirmDeletion) {
    try {
      const { error } = await supabase
        .from('recipes')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting recipe:', error);
        alert('An error occurred while attempting to delete the recipe.');
      } else {
        fetchAddedRecipes(); //refresh current state of added recipes
        alert('Recipe removed successfully!');
      }
    } catch (err) {
      console.error('Error during recipe removal:', err);
    }
  }
};

const addedRecipes = ref([]);

const fetchAddedRecipes = async () => {
  const { data: { session } } = await supabase.auth.getSession();

  if (session && session.user) {
    const { data, error } = await supabase
      .from('recipes')
      .select('*')
      .eq('added_by', session.user.id); //added by the current user

    if (error) {
      console.error('Error fetching user recipes:', error);
    } else {
      addedRecipes.value = data;
    }
  } else {
    alert('Please log in to view your recipes');
  }
};

onMounted(fetchAddedRecipes);
</script>

<template>
    <ProfileBlueBar></ProfileBlueBar>
    <div class="page-container">
      <ul class="recipes-listed">
        <li v-for="recipe in addedRecipes" :key="recipe.id" class="recipes-listed-each">
  
          <div class="recipe-inner">
            <img :src="recipe.imageURL" :alt="recipe.title" class="recipe-img"/>
  
            <div class="title-preptime">
                <h3 class="title">{{ recipe.title }}</h3>
                <p>Preparation time: {{ recipe.prep_time }} minutes</p>
            </div>

            <div class="buttons-container">
                <button class="edit-button" @click="$router.push({ name: 'EditAddedRecipe', params: { id: recipe.id } })">Edit</button>
                <button class="remove-button" @click.stop="removeRecipe(recipe.id, recipe.title)">Remove</button>
            </div>
          </div>
        </li>
      </ul>
    </div>

  </template>

<style scoped>
.page-container {
  max-width: 1140px;
  margin: 70px auto;
  padding: 0 20px;
  background-color: #ffffff;
}

.recipes-listed {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
  padding: 0px;
  list-style-type: none;
  width: 1060px;
}

.recipes-listed-each {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 250px;
  background-color: #d6d6d63f;
  overflow: hidden;
  cursor: pointer;
}

.recipe-inner {
  position: relative;
  transition: background-color 0.3s ease, opacity 0.3s ease;
}

.recipes-listed-each:hover .recipe-inner {
  background-color: rgba(0, 0, 0, 0.4); /* Darker background on hover */
}

.title{
  display: flex;
  align-items: center;
  word-break: break-all;

  font-weight: 500;
  font-size: 20px;
  min-height: 50px;
}

.title-preptime {
  padding: 10px;
  color: white;
}

.recipe-img {
  width: 250px;
  height: 250px;
  object-fit: cover;
  object-position: center;
}

.buttons-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
  flex-direction: row;
  gap: 10px;
}

.recipes-listed-each:hover .buttons-container {
  display: flex;
  justify-content: center;
}

.edit-button, .remove-button {
  background-color: #ffffff;
  border: 1px solid #ccc;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
}

.edit-button:hover, .remove-button:hover {
  color: #ddd;
  border-color: #ddd;
}
</style>