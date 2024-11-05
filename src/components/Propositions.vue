<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '@/services/supabase';

const randomRecipes = ref([]); 


const fetchRandomRecipes = async () => {
  const { data, error } = await supabase
    .from('recipes')
    .select('id, title, imageURL') 

  if (error) {
    console.error('Error fetching recipes:', error); 
    return;
  }


  const shuffledRecipes = data.sort(() => 0.5 - Math.random());
  randomRecipes.value = shuffledRecipes.slice(0, 6); 
};


onMounted(() => {
  fetchRandomRecipes();
});
</script>

<template>
  <div class="propositions">
    <h2>Browse our delicious recipes</h2><br>
    <div class="recipe-list">
      <div 
        v-for="recipe in randomRecipes" 
        :key="recipe.id" 
        class="table-of-recipes" 
        @click="$router.push({ name: 'SingularRecipe', params: { id: recipe.id } })" 
        :style="{ backgroundImage: `url(${recipe.imageURL})` }" 
      >
        <div class="recipe-title">{{ recipe.title }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.propositions-wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100vh; 
  padding-bottom: 20px; 
}

.propositions {
  margin: 70px auto 20px auto;
  padding: 15px;
  max-width: 830px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h2 {
  font-weight: 500;
  font-size: 1.5rem;
  margin-bottom: 15px;
  background: linear-gradient(90deg, #ff6f61, #ffab73);
  display: inline-block;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}

.recipe-list {
  display: flex; 
  justify-content: space-between; 
  gap: 15px; 
  flex-wrap: nowrap;
}

.table-of-recipes { 
  position: relative; 
  width: 150px; 
  height: 150px; 
  border-radius: 12px; 
  background-size: cover; 
  background-position: center; 
  cursor: pointer; 
  overflow: hidden; 
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15); 
  transition: transform 0.3s, box-shadow 0.3s; 
} 

.table-of-recipes:hover { 
  transform: scale(1.05); 
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2); 
} 

.recipe-title {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(103, 102, 102, 0.116); 
  padding: 8px; 
  border-radius: 0 0 8px 8px; 
  font-size: 10px; 
  font-weight: bold;
  text-align: center;
  color: #ffffff; 
  backdrop-filter: blur(2px); 
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.3); 
}
</style>