<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const backLink = computed(() => {
  return route.query.source === 'YourFavorites' ? { name: 'YourFavorites' } : { name: 'BrowseRecipes' };
});

const backText = computed(() => {
  return route.query.source === 'YourFavorites' ? 'Back to Favorites' : 'Back to Browsing';
});

console.log(route.query.source);
</script>

<template>
  <div class="arrow-back-container">
    <router-link :to="backLink" id="arrow-back">
      <img
        src="https://cdn-icons-png.flaticon.com/128/2459/2459427.png"
        alt="Go back"
      />
      <p>{{ backText }}</p>
    </router-link>
  </div>
</template>

<style>
.arrow-back-container{
    background-color: #f0f8ff;
    height: 80px;
    width: 100%;
    padding: 15px 10px;
    align-items: center;
    margin-bottom: 20px;

    display: flex;
    position: relative;
  }

  #arrow-back{
    height: 50px;
    color: black;

    display: flex;
    align-items: center;
    gap: 5px;
  }

  #arrow-back img{
    height: 20px;
  }
</style>