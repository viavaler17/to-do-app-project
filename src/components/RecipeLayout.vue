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
      
        <div class="recipe-text">
            <div class="title-time">
                <slot name="title">
                    <h2>{{ title || 'Default Recipe Title' }}</h2>
                </slot>

                <slot name="cooking-time">
                    <p>Cooking Time: {{ cookingTime ? cookingTime + ' minutes' : '---' }}</p>
                </slot>
            </div>
  
            <div class="ingredients">
                <slot name="ingredients">
                    <ul>
                        <li v-for="(ingredient, index) in ingredients" :key="index">
                          {{ ingredient.ingredient }}: {{ ingredient.amount }} {{ ingredient.unit }}
                        </li>
                    </ul>
                </slot>
            </div>
            
            <div class="description">
                <slot name="description">
                    <p>{{ description || 'Default recipe description.' }}</p>
                </slot>
            </div>
      </div>

      <slot name="image">
        <img :src="imageUrl || 'path/to/default-placeholder.jpg'" alt="Recipe Image" class="recipe-image">
      </slot>
    </li>
  </template>

<style scoped>
.recipe-layout{
    list-style-type: none;
    margin: 100px auto;
    padding: 50px;
    width: 1000px;
    height: max-content;


    display: flex;
    justify-content: space-between;
    gap: 50px;

    background-color: rgba(128, 128, 128, 0.112);
}

.recipe-text{
    display: flex;
    flex-direction: column;
    gap: 50px;

    max-width: 550px;
}

.recipe-image{
    max-width: 300px;
    max-height: 300px;
}

</style>