<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    ingredientList: {
        type: Array,
        default: () => []
    }
});
</script>

<template>
    <li class="recipe-layout">
        <!-- slot for displaying image -->
        <slot name="image">
            <img src="path/to/placeholder-image.jpg">
        </slot>

        <div class="recipe-text">
            <!-- slot to display recipe title -->
            <slot name="title">
                <h2>Recipe Title</h2>
            </slot>
            <br>
            <!-- slot for cooking time -->
            <slot name="cooking-time">
                <p>Cooking Time: ---</p>
            </slot>
            <br>
            <!-- slot for ingerdient list -->
            <slot name="ingredients">
                <ul>
                    <li>Ingredient: Amount</li>
                </ul>
            </slot>
            <br>
            <!-- slot for description -->
            <slot name="description">
                <p>Recipe description</p>
            </slot>
        </div>
    </li>
</template>

<style scoped>
</style>