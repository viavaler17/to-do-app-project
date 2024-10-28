
<script setup>
import { ref } from 'vue';
import SearchComponent from '@/components/SearchComponent.vue';
import CategoriesTags from '@/components/CategoriesTags.vue';
import RecipesListed from '@/components/RecipesListed.vue';

// Store the selected category to pass it to RecipesListed.vue
const selectedCategory = ref('');

// Function to update the selected category
const handleCategorySelected = (category) => {
  selectedCategory.value = category;
};
</script>

<template>
  <div class="browse-container">
    <!-- Search Component at the top -->
    <SearchComponent />

    <!-- Main content area -->
    <div class="content">
      <!-- Categories and Tags Sidebar -->
      <CategoriesTags @categorySelected="handleCategorySelected" />

      <!-- Recipes List, passing selectedCategory as a prop -->
      <RecipesListed :selectedCategory="selectedCategory" />
    </div>
  </div>
</template>

<style scoped>
.browse-container {
  display: flex;
  flex-direction: column; /* Stack SearchComponent on top */
  align-items: center;
}

.content {
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
}

/* Sidebar for categories and tags */
.content > *:first-child {
  width: 250px;
  margin-right: 20px;
}

/* Recipes area takes the remaining space */
.content > *:last-child {
  flex-grow: 1;
}
</style>