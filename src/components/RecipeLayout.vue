<script>
export default {
  name: 'RecipeLayout',
  props: {
    imageUrl: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    cookingTime: {
      type: Number,
      default: null
    },
    ingredients: {
      type: Array,
      default: () => []
    },
    description: {
      type: String,
      default: ''
    }
  }
};
</script>

<template>
    <li class="recipe-layout">

      <div class="image-ingredients">
        <slot name="image">
          <img :src="imageUrl || 'path/to/default-placeholder.jpg'" alt="Recipe Image" class="recipe-image">
        </slot>

        <div class="ingredients">
            <slot name="ingredients">
              <h3>Ingredients:</h3>  
              <ul>
                  <li v-for="(ingredient, index) in ingredients" :key="index" class="ingredients-li">
                    <div class="ingredient-amount">
                      <div class="ingredient-name">
                        {{ ingredient.ingredient }}:
                      </div>
                      <div>
                        {{ ingredient.amount }} {{ ingredient.unit }}
                      </div>
                    </div>
                  </li>
                </ul>
            </slot>
        </div>
      </div>

      <div class="recipe-text">
            <div class="title-time">
                <slot name="title">
                    <h2>{{ title || 'Default Recipe Title' }}</h2>
                </slot>

                <slot name="cooking-time">
                    <p>Cooking Time: {{ cookingTime ? cookingTime + ' minutes' : '---' }}</p>
                </slot>
            </div>
            
            <div class="container">
                <slot name="description">
                    <p class="description">{{ description || 'Default recipe description.' }}</p>
                </slot>
            </div>
      </div>
    
    </li>
  </template>

<style scoped>
.recipe-layout{
    max-width: 1040px;
    height: max-content;
    padding: 20px;

    display: flex;
    gap: 50px;

    overflow-x: hidden; /* Prevent horizontal scrolling */
    box-sizing: border-box;

    background-color: grey;
  }

  .recipe-image{
    width: 300px;
    height: 300px;
  }

  .ingredients{
    width: 300px;
    margin: 0px 0px;
    padding: 0px 0px;
  }

  .ingredient-amount{
    column-count: 2;
  }

  .ingredients-li{
    margin: 5px 0px;
    font-size: 16px;
  }

  .recipe-text{
      display: flex;
      flex-direction: column;
      gap: 50px;
  }

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