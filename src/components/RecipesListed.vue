<script setup>
const props = defineProps(['filteredRecipes']);

</script>

<template>
    <ul class="recipes-listed">
  
      <li v-for="recipe in filteredRecipes" :key="recipe.id" class="recipes-listed-each"
        @click="$router.push({ name: 'SingularRecipe', params: { id: recipe.id } })">
        <div class="favouriteButton">
          <h2>{{ recipe.title }}</h2>
          <!-- <button @click="favouritedButton(recipe)">Make favourite</button> -->
        </div>
        
        <img :src="recipe.imageURL" :alt="recipe.title" class="recipe-img"/>
        
        <p>{{ recipe.description }}</p>
        
        <p>Prep Time: {{ recipe.prep_time }} minutes</p>
        
        <ul class="ingredient-list">
          <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
            {{ ingredient.ingredient }}: {{ ingredient.amount }} {{ ingredient.unit }}
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