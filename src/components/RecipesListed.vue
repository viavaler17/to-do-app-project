<script setup>
import { supabase } from '@/services/supabase';

const props = defineProps(['filteredRecipes']);

const favouritedButton = async(recipe) =>{
  try{
    const {data: user, error} = await supabase
    .from('users')
    .select('favourited')
    .eq('id', '1')
    .single()

  if (error) {
      console.error('Error retrieving user data:', error);
      return;
    }
  
    const favourites = user.favourited || [];

    if(!favourites.includes(recipe.id)){
      favourites.push(recipe.id);
    }

    const { error: updateError } = await supabase
      .from('users')
      .update({ favourited: favourites })
      .eq('id', '1')
      if (updateError) {
      console.error('Error updating favorites:', updateError);
    } else {
      console.log('Favorites updated', favourites);
    }
  } catch (err) {
    console.error('Unexpected error:', err);
  }
};
</script>

<template>
    <ul class="recipes-listed">
  
      <li v-for="recipe in filteredRecipes" :key="recipe.id" class="recipes-listed-each"
          @click="$router.push({ name: 'SingularRecipe', params: { id: recipe.id } })">
        <div class="favouriteButton">
          <h2>{{ recipe.title }}</h2>
          <button @click="favouritedButton(recipe)">Make favourite</button>
        </div>
        
        <img :src="recipe.imageURL" :alt="recipe.title" class="recipe-img"/>
        
        <p>{{ recipe.description }}</p>
        
        <p>Prep Time: {{ recipe.prep_time }} minutes</p>
        
        <ul class="ingredient-list">
          <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
            {{ ingredient.ingredient }}: {{ ingredient.amount }}
          </li>
        </ul>

     </li>
    </ul>
</template>

<style scoped>
.recipes-listed{
  display: flex;
  flex-direction: column;
  list-style-type: none;
}

.favouriteButton{
  display: flex;
  justify-content: space-between;
}

.recipes-listed-each{
  padding: 50px 0px;
  width: 1000px;
}

.recipe-img{
  width: 100px;
  height: 100px;
}
</style>