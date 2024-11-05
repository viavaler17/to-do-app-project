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

        <slot name="image">
          <img :src="imageUrl || 'path/to/default-placeholder.jpg'" alt="Recipe Image">
        </slot>

      <div class="description-text">
        <div>
          <slot name="title">
            <h2 class="title">{{ title || 'Default Recipe Title' }}</h2>
          </slot>

          <slot name="cooking-time">
            <p>Cooking Time: {{ cookingTime ? cookingTime + ' minutes' : '---' }}</p>
          </slot>
        </div>
        <slot name="description">
            <p class="description">{{ description || 'Default recipe description.' }}</p>
        </slot>

      <div class="ingredients">
        <slot name="ingredients"> 
          <h3>Ingredients:</h3> 
            <ul>
              <li v-for="(ingredient, index) in ingredients" :key="index">
                {{ ingredient.ingredient }}:
                {{ ingredient.amount }} {{ ingredient.unit }}
              </li>
            </ul>
        </slot>
       </div>
      </div>
    </li>
  </template>

<style scoped>
.recipe-layout{
    max-width: 1040px;
    height: max-content;
    padding: 40px;

    display: flex;
    gap: 35px;

    overflow-x: hidden;
    box-sizing: border-box;

    background-color: #d6d6d63f;
  }

  
  img{
    max-width: 300px;
    max-height: 300px;
  }

  .description{
    white-space: pre-wrap;
  }

  .description-text{
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
</style>