<script setup>
const props = defineProps(['filteredRecipes']);

</script>

<template>
    <ul class="recipes-listed">
  
      <li v-for="recipe in filteredRecipes" :key="recipe.id" class="recipes-listed-each"
        @click="$router.push({ name: 'SingularRecipe', params: { id: recipe.id } })">
        
        <img :src="recipe.imageURL" :alt="recipe.title" class="recipe-img"/>

        <div class="title-preptime">
          <h3>{{ recipe.title }}</h3>
          <p>Preparation time: {{ recipe.prep_time }} minutes</p>
          <!-- <button @click="favouritedButton(recipe)">Make favourite</button> -->
        </div>

        <!-- <p>{{ recipe.description }}</p> -->
        <!-- <ul class="ingredient-list">
          <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
            {{ ingredient.ingredient }}: {{ ingredient.amount }} {{ ingredient.unit }}
          </li>
        </ul> -->
      </li>
    </ul>
</template>

<style scoped>
.recipes-listed{
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: space-evenly;
  gap: 20px;
  padding: 0px;
  align-content: flex-start;

  list-style-type: none;

  width: 790px;
}

h3{
  font-weight: 500;
}

.recipes-listed-each{
  display: flex;
  flex-direction: column;
  width: 250px;
  height: max-content;
  background-color: #d6d6d63f;
}

.recipes-listed-each:hover{
  transition: 0.3s;
  opacity: 0.7;
}

.title-preptime{
  padding: 10px;
}

.recipe-img{
  width: 250px;
  height: 250px;
}
</style>