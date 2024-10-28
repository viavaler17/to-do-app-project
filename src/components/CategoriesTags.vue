<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['categorySelected']);

const selectCategory = (category) => {
  emit('categorySelected', category);
};
</script>

<template>
    <div class="sidebar">
      <h3>Categories</h3>
      <ul class="categories">
        <li @click="selectCategory('Breakfast')">Breakfast</li>
        <li @click="selectCategory('Lunch')">Lunch</li>
        <li @click="selectCategory('Dinner')">Dinner</li>
        <li @click="selectCategory('')">All</li>
      </ul>
      <h3>Tags</h3>
      <div class="tags">
        <p @click="selectCategory('Vegetarian')" class="tag">#vegetarian</p>
        <p @click="selectCategory('Vegan')" class="tag">#vegan</p>
        <p @click="selectCategory('High-Protein')" class="tag">#high-Protein</p>
        <p @click="selectCategory('Under-15-min')" class="tag">#under-15-Min</p>
      </div>
    </div>
  </template>
  
  <style scoped>
.sidebar {
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h3 {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
}

.categories, .tags {
  list-style: none;
  padding: 0;
  margin: 0;
}

.categories li {
  padding: 10px 15px;
  margin: 5px 0;
  background-color: #ffffff;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #4a4a4a;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.categories li:hover {
    background-color: #ffeae0;
  color: #00686B; /* Change font color to yellow on hover */
  transform: translateY(-2px);
}

.tags {
  display: flex;
  flex-direction: column;
}

.tag {
  padding: 10px 15px;
  margin: 5px 0;
  background-color: #ffffff;
  border: 2px solid #90EE90; /* Light green border */
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #4a4a4a;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.tag:hover {
  background-color: #faffe0; /* Light green hover background */
  color: #4a4a4a;
  transform: translateY(-2px);
}
  </style>