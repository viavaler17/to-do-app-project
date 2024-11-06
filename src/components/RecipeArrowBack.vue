<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const backLink = computed(() => {
  return route.query.source === 'Favorited' ? { name: 'Favorited' } : { name: 'BrowseRecipes' };
});

const backText = computed(() => {
  return route.query.source === 'Favorited' ? 'Back to Favorites' : 'Back to Browsing';
});
</script>

<template>
  <router-link :to="backLink" class="back-arrow">
    <img
      src="https://cdn-icons-png.flaticon.com/128/545/545682.png"
      alt="Go back"
    />
    <span>{{ backText }}</span>
  </router-link>
</template>

<style>
.back-arrow {
  display: flex;
  align-items: center;
  gap: 5px;
  text-decoration: none;
  color: inherit;
}

.back-arrow img {
  height: 20px;
}
</style>