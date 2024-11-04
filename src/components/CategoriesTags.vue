<script setup>
import { defineEmits, ref } from 'vue';

const emit = defineEmits(['categorySelected', 'tagsUpdated']);


//CATEGORIES: selecting and keeping active for CSS
const activeCategory = ref([]);

const selectCategory = (category) => {
  activeCategory.value = category;
  emit('categorySelected', activeCategory.value);
};

const isCategoryActive = (category) => {
  return activeCategory.value === category;
};

//TAGS: selecting and keeping active for CSS
const selectedTags = ref([]);

const toggleTag = (tag) => {
  if (selectedTags.value.includes(tag)) {
    selectedTags.value.splice(selectedTags.value.indexOf(tag), 1);
  } else {
    selectedTags.value.push(tag);
  }
  emit('tagsUpdated', selectedTags.value);
};

const isTagActive = (tag) => {
  return selectedTags.value.includes(tag);
};
</script>

<template>
  <div class="container">
    <div>
      <h2>Categories</h2>
      <ul class="categories">
        <li 
          v-for="category in ['Breakfast', 'Lunch', 'Dinner', '']" 
          :key="category" 
          @click="selectCategory(category)"
          :class="{ active: isCategoryActive(category) }"
          class="category"
        >
          {{ category || 'All' }}
        </li>
      </ul>
    </div>

      <div>
        <h2>Tags</h2>
        <ul class="tags">
          <li 
            v-for="tag in ['#vegetarian', '#quick']" 
            :key="tag" 
            @click="toggleTag(tag)" 
            :class="{ active: isTagActive(tag) }" 
            class="tag"
          >
            {{ tag }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
<style scoped>
  .container{
    display: flex;
    flex-direction: column;
    width: 150px;
  }

  h2{
    font-weight: 800;
  }

  ul{
    list-style-type: none;
    margin: 0px;
    padding: 10px;
  }

  li{
    cursor: pointer;
  }

  .category{
    color: white;
    background-color: #00686B;
    opacity: 0.6;
    border-radius: 10px;
    padding: 8px 16px;
    margin: 4px 2px;
    display: inline-block;
  }

  .category:hover, 
  .category.active{
    opacity: 1;
    transition: opacity 0.4s;
    background-color: #00686B;
    color: white;
  }

  .tag {
    color: white;
    background-color: #FF6F61;
    opacity: 0.6;
    border-radius: 10px;
    padding: 8px 16px;
    margin: 4px 2px;
    display: inline-block;
  }

  .tag:hover {
    opacity: 0.8;
    transition: opacity 0.2s;
  }

  .tag.active {
    opacity: 1;
  }
</style>