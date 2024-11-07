<script setup>
const props = defineProps(['filteredRecipes', 'source']);

</script>

<template>
    <ul class="recipes-listed">
  
      <li v-for="recipe in filteredRecipes" :key="recipe.id" class="recipes-listed-each"
      @click="$router.push({ name: 'SingularRecipe', params: { id: recipe.id }, query: { source } })">
        
        <div class="recipe-inner">
          <div class="image-container">
            <img :src="recipe.imageURL" :alt="recipe.title" class="recipe-img"/>
          </div>

          <div class="title-preptime">
            <h3 class="title">{{ recipe.title }}</h3>
            <p>Preparation time: {{ recipe.prep_time }} minutes</p>
          </div>
          <div class="go-to-recipe-text">
            <p>Go to recipe</p>
          </div>
        </div>
      </li>
    </ul>
</template>

<style scoped>
.recipes-listed {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: space-evenly;
  gap: 20px;
  padding: 0px;
  align-content: flex-start;
  list-style-type: none;
  width: 790px;
  min-height: 90vh;
}

.title {
  display: flex;
  align-items: center;
  word-break: break-all;
  font-weight: 450;
  font-size: 20px;
  min-height: 50px;
  text-decoration: none;
}

.recipes-listed-each {
  display: flex;
  flex-direction: column;
  width: 250px;
  background-color: #d6d6d63f;
  cursor: pointer;
  transition: background-color 0.3s ease;
  overflow: hidden;
  color: black;
}

.recipe-image-container {
  width: 250px;
  height: 250px;
  overflow: hidden;
}

.recipe-img {
  width: 250px;
  height: 250px;
  object-fit: cover;
  object-position: center;
  transition: opacity 0.1s ease;
}

.recipes-listed-each:hover {
  background-color: rgba(0, 0, 0, 0.4);
}

/* recipe going grey */
.recipes-listed-each:hover .recipe-img {
  opacity: 0.4;
}

.title-preptime {
  padding: 10px;
  color: black;
  transition: color 0.1s ease; 
}

.recipes-listed-each:hover .title-preptime {
  color: white;
}

.recipe-inner {
  position: relative;
}

.recipes-listed-each:hover {
  display: flex;
  justify-content: center;
}

.go-to-recipe-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
}

.recipes-listed-each:hover .go-to-recipe-text {
  display: block;
  text-align: center;
}

.go-to-recipe-text p {
  color: white;
  font-size: 16px;
  margin: 0;
  border: 1px solid white;
  padding: 3px 4px;
  margin-bottom: 100px;
}
</style>